import Link from "next/link";

export default function Supplement() {
  return (
    <div className="p-2 border-l-4 border-[#f5df4d]">
      <Link
        href="/guestbook"
        className="font-bold underline underline-offset-4 text-[#f5df4d]"
      >
        ✨ 방명록에 한 줄 남기고 가기 ✨
      </Link>
    </div>
  );
}
