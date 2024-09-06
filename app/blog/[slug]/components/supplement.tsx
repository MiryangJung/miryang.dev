import Link from "next/link";

export default function Supplement() {
	return (
		<div className="p-2 border-l-4 border-[#AFF4C6]">
			<Link
				href="/guestbook"
				className="font-bold underline underline-offset-4 text-[#AFF4C6]"
			>
				🍵 방명록에 한 줄 남기고 가기 🍵
			</Link>
		</div>
	);
}
