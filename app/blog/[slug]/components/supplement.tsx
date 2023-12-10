import Link from "next/link";

export default function Supplement() {
  return (
    <div className="p-3 border-l-4 border-yellow-800">
      <Link
        href="/guestbook"
        className="font-medium underline underline-offset-4 text-yellow-600"
      >
        ✨ 방명록에 한 줄 남기고 가기 ✨
      </Link>
    </div>
  );
}
