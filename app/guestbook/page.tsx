import supabase from "@/util/supabase";
import Bubble from "./components/bubble";
import GuestbookForm from "./components/form";

export const revalidate = 3600;

export default async function GuestbookPage() {
  const { data, count } = await supabase
    .from("guestbook")
    .select("*", { count: "exact", head: false })
    .order("created_at", { ascending: false });

  return (
    <>
      <h1 className="text-2xl font-bold">익명 방명록</h1>
      <span className="text-gray-600 mb-5">
        23년 1월부터 작성된 방명록 <b>{count}개</b>
      </span>

      <div className="flex flex-col gap-2 my-5">
        {data?.map((bubble) => (
          <Bubble key={bubble.id} {...bubble} />
        ))}
      </div>
      <GuestbookForm />
    </>
  );
}
