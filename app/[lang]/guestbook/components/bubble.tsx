import type { Guestbook } from "@/data/guestbook/types";
import { getTzDay } from "@/util/days";
import { PinIcon } from "lucide-react";

export default function Bubble({
	message,
	color,
	created_at,
	pinned,
}: Guestbook) {
	return (
		<div className="flex flex-row justify-end items-end gap-1">
			<div className="flex flex-col items-end gap-1">
				{pinned && <PinIcon className="h-3 w-3 text-primary stroke-[1.5px]"/>}
				<span className="text-[10px] text-primary">
					{getTzDay(created_at).format("YY.MM")}
				</span>
			</div>
			<div
				className="p-0 break-all leading-6 text-sm max-w-[90%] font-medium px-2 py-0.5 border-2"
				style={{ borderColor: color }}
			>
				{message}
			</div>
		</div>
	);
}
