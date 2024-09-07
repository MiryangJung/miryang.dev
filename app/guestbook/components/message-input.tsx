import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import type { GuestbookFormValues } from "./form";

export default function MessageInput() {
	const { register, watch } = useFormContext<GuestbookFormValues>();

	const { color } = watch();

	return (
		<Input
			{...register("message")}
			style={{ borderColor: color }}
			className="rounded-none border-t-0 border-l-0 border-r-0 border-b-4"
			maxLength={1000}
		/>
	);
}
