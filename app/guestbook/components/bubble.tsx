import type { Tables } from "@/types/database-generated.types";
import { getTzDay } from "@/util/days";

export default function Bubble({
	message,
	color,
	created_at,
}: Tables<"guestbook">) {
	return (
		<div className="flex flex-row justify-end items-end gap-1">
			<span className="text-[10px] opacity-50" style={{ color: color }}>
				{getTzDay(created_at).format("YY.MM")}
			</span>
			<div
				className="min-h-[40px] py-2 px-2.5 break-all leading-6 rounded-[10px] rounded-br-none text-sm max-w-[90%]"
				style={{ backgroundColor: color }}
			>
				{message}
			</div>
		</div>
	);
}
