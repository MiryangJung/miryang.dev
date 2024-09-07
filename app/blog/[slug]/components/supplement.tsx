import Link from "next/link";

export default function Supplement() {
	return (
		<div className="px-3 py-2 bg-primary w-fit">
			<Link
				href="/guestbook"
				className="font-medium text-sm text-white"
			>
				방명록에 한 줄 남기고 가기
			</Link>
		</div>
	);
}
