"use client";

import { Button } from "@/components/ui/button";
import {
	type GuestbookFormValues,
	guestbookFormSchema,
} from "@/data/guestbook/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import insertGuestbookAction from "../actions/insert-guestbook-action";
import ColorPicker, { colors } from "./color-picker";
import { useGuestbook } from "./guestbook-context";
import MessageInput from "./message-input";

const defaultValues: Partial<GuestbookFormValues> = {
	message: "",
	color: colors[2],
};

export default function GuestbookForm() {
	const { addItem, confirmItem, removeItem } = useGuestbook();
	const submitting = useRef(false);
	const [pending, setPending] = useState(false);
	const [feedback, setFeedback] = useState("");
	const [failed, setFailed] = useState(false);

	const form = useForm<GuestbookFormValues>({
		resolver: zodResolver(guestbookFormSchema),
		defaultValues,
		mode: "onChange",
	});

	async function onSubmit(values: GuestbookFormValues) {
		if (submitting.current) return;
		submitting.current = true;
		setPending(true);
		setFailed(false);
		setFeedback("전송 중…");
		const temporaryId = -Date.now();
		addItem({
			id: temporaryId,
			message: values.message,
			color: values.color,
			created_at: new Date().toISOString(),
			pinned: false,
		});

		form.reset({ message: "", color: values.color });
		try {
			const result = await insertGuestbookAction(values);
			if (result.error || !result.item) throw new Error(result.error);
			confirmItem(temporaryId, result.item);
			setFeedback("메시지를 남겼어요.");
		} catch {
			removeItem(temporaryId);
			form.reset(values);
			setFailed(true);
			setFeedback("저장하지 못했어요. 잠시 후 다시 전송해 주세요.");
		} finally {
			submitting.current = false;
			setPending(false);
			form.setFocus("message");
		}
	}

	return (
		<FormProvider {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				aria-label="방명록 작성"
				className="fixed z-10 max-w-screen-md bottom-10 w-full ml-[-20px] flex items-center justify-center"
			>
				<div className="flex flex-col items-start gap-2 w-5/6 p-3 bg-background border">
					<div className="w-full flex gap-2">
						<MessageInput pending={pending} />
						<Button
							type="submit"
							className="shrink-0 border text-primary"
							disabled={!form.formState.isValid || pending}
							variant="outline"
						>
							{pending ? "전송 중" : "전송"}
						</Button>
					</div>

					<ColorPicker disabled={pending} />
					<p
						role={failed ? "alert" : "status"}
						className="text-xs text-primary min-h-4"
					>
						{feedback}
					</p>
				</div>
			</form>
		</FormProvider>
	);
}
