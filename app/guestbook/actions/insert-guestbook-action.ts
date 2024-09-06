"use server";

import supabase from "@/util/supabase";
import { revalidatePath } from "next/cache";
import type { GuestbookFormValues } from "../components/form";

export default async function insertGuestbookAction(data: GuestbookFormValues) {
	// !TODO 에러처리
	await supabase.from("guestbook").insert({
		...data,
		created_at: new Date().toISOString(),
	});

	revalidatePath("/guestbook");
	return true;
}
