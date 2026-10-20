import { Input } from "@/components/ui/input";
import type { GuestbookFormValues } from "@/data/guestbook/schema";
import { useFormContext } from "react-hook-form";

export default function MessageInput({ pending }: { pending: boolean }) {
	const { register, watch } = useFormContext<GuestbookFormValues>();

	const color = watch("color");

	return (
		<Input
			{...register("message")}
			aria-label="방명록 메시지"
			placeholder="메시지를 남겨 주세요"
			readOnly={pending}
			style={{ borderColor: color }}
			className="rounded-none border-2"
			maxLength={1000}
		/>
	);
}
