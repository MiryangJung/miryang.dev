"use server";

import {
	type GuestbookFormValues,
	guestbookFormSchema,
} from "@/data/guestbook/schema";
import type { Guestbook } from "@/data/guestbook/types";
import supabase from "@/util/supabase";

export default async function insertGuestbookAction(
	data: GuestbookFormValues,
): Promise<
	{ item: Guestbook; error?: never } | { error: string; item?: never }
> {
	const parsed = guestbookFormSchema.safeParse(data);
	if (!parsed.success) {
		return { error: "메시지와 색상을 확인해 주세요." };
	}

	const { data: item, error } = await supabase
		.from("guestbook")
		.insert({ ...parsed.data, pinned: false })
		.select("id, message, color, created_at, pinned")
		.single();
	if (error || !item) {
		return { error: "저장하지 못했어요. 잠시 후 다시 전송해 주세요." };
	}
	// The dynamic page reads fresh data without a full-page render after every post.
	return { item };
}
