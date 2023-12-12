"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import MessageInput from "./message-input";
import ColorPicker from "./color-picker";
import { Button } from "@/components/ui/button";
import insertGuestbookAction from "../actions/insert-guestbook-action";

export const guestbookFormSchema = z.object({
  message: z.string().min(1).max(3000),
  color: z.string().regex(/^#[0-9A-F]{6}$/i),
});

export type GuestbookFormValues = z.infer<typeof guestbookFormSchema>;

const defaultValues: Partial<GuestbookFormValues> = {
  message: "",
  color: "#E2C9C9",
};

export default function GuestbookForm() {
  const form = useForm<GuestbookFormValues>({
    resolver: zodResolver(guestbookFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const { watch, trigger, formState } = form;
  const { isValid, isSubmitting } = formState;

  async function onSubmit() {
    const isValid = await trigger();
    if (!isValid || isSubmitting) return;

    const values = form.getValues();
    await insertGuestbookAction(values);
    form.setValue("message", "");
  }

  return (
    <Form {...form}>
      <form
        action={onSubmit}
        className="fixed max-w-screen-md bottom-10 w-full ml-[-20px] flex items-center justify-center"
      >
        <div className="flex flex-col items-start gap-2 w-5/6 p-3 rounded-2xl placeholder:flex bg-stone-100/95 backdrop-blur supports-[backdrop-filter]:bg-stone-100/60">
          <div className="w-full flex gap-2">
            <MessageInput />
            <Button
              type="submit"
              className="w-10 border"
              variant="secondary"
              style={{ borderColor: watch("color") }}
              disabled={!isValid || isSubmitting}
            >
              전송
            </Button>
          </div>

          <ColorPicker />
        </div>
      </form>
    </Form>
  );
}
