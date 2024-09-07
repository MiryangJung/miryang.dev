import type { Tables } from "@/types/database-generated.types";
import { getTzDay } from "@/util/days";

export default function Bubble({
	message,
	color,
	created_at,
}: Tables<"guestbook">) {
	return (
		<div className="flex flex-row justify-end items-end gap-1">
			<span className="text-[10px] text-primary">
				{getTzDay(created_at).format("YY.MM")}
			</span>
			<div
				className="p-0 break-all leading-6 text-sm max-w-[90%] font-medium px-1 underline decoration-4 underline-offset-0"
				style={{ textDecorationColor: color }}
			>
				{message}
			</div>
		</div>
	);
}
