import { z } from "zod";

export const guestbookFormSchema = z.object({
	message: z.string().trim().min(1, "메시지를 입력해 주세요.").max(1000),
	color: z.string().regex(/^#[0-9A-F]{6}$/i),
});

export type GuestbookFormValues = z.infer<typeof guestbookFormSchema>;
