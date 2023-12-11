import supabase from "@/util/supabase";
import Bubble from "./components/bubble";
import GuestbookForm from "./components/form";
import { Metadata } from "next";
import metadata from "@/util/metadata";

export const revalidate = 3600;

export default async function GuestbookPage() {
  const { data, count } = await supabase
    .from("guestbook")
    .select("*", { count: "exact", head: false })
    .order("created_at", { ascending: false });

  return (
    <>
      <span className="text-gray-600 mb-5">
        23년 1월부터 작성된 방명록 <b>{count}개</b>
      </span>

      <div className="flex flex-col gap-2.5 my-5">
        {data?.map((bubble) => (
          <Bubble key={bubble.id} {...bubble} />
        ))}
      </div>
      <GuestbookForm />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return metadata({
    title: "방명록",
    description: "방명록",
    path: `/guestbook`,
  });
}
