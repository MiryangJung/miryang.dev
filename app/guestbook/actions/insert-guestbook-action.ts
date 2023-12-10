"use server";

import supabase from "@/util/supabase";
import { GuestbookFormValues } from "../components/form";
import { revalidatePath } from "next/cache";

export default async function insertGuestbookAction(data: GuestbookFormValues) {
  // !TODO 에러처리
  await supabase.from("guestbook").insert({
    ...data,
    created_at: new Date().toISOString(),
  });

  revalidatePath("/guestbook");
  return true;
}
