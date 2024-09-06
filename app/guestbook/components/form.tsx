"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStatus } from "react-dom";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import insertGuestbookAction from "../actions/insert-guestbook-action";
import ColorPicker, { colors } from "./color-picker";
import { useGuestbook } from "./guestbook-context";
import MessageInput from "./message-input";

export const guestbookFormSchema = z.object({
	message: z.string().min(1).max(3000),
	color: z.string().regex(/^#[0-9A-F]{6}$/i),
});

export type GuestbookFormValues = z.infer<typeof guestbookFormSchema>;

const defaultValues: Partial<GuestbookFormValues> = {
	message: "",
	color: colors[2],
};

export default function GuestbookForm() {
	const { addItem } = useGuestbook();

	const form = useForm<GuestbookFormValues>({
		resolver: zodResolver(guestbookFormSchema),
		defaultValues,
		mode: "onChange",
	});

	async function onSubmit() {
		const isValid = await form.trigger();
		if (!isValid) return;

		const values = form.getValues();
		addItem({
			id: Math.random(),
			message: values.message,
			color: values.color,
			created_at: new Date().toISOString(),
			pinned: false,
		});

		await insertGuestbookAction(values);

		form.setValue("message", "");
	}

	return (
		<FormProvider {...form}>
			<form
				action={onSubmit}
				className="fixed max-w-screen-md bottom-10 w-full ml-[-20px] flex items-center justify-center"
			>
				<div className="flex flex-col items-start gap-2 w-5/6 p-3 rounded-2xl placeholder:flex bg-stone-100/95 backdrop-blur supports-[backdrop-filter]:bg-stone-100/60">
					<div className="w-full flex gap-2">
						<MessageInput />
						<Submit />
					</div>

					<ColorPicker />
				</div>
			</form>
		</FormProvider>
	);
}

function Submit() {
	const { formState, watch } = useFormContext<GuestbookFormValues>();
	const { isValid } = formState;
	const { color } = watch();

	const { pending } = useFormStatus();

	return (
		<Button
			type="submit"
			className="w-10 border"
			variant="secondary"
			style={{ borderColor: color }}
			disabled={!isValid || pending}
		>
			전송
		</Button>
	);
}
