import type { Database } from "@/types/database-generated.types";
import type { SupabaseClient } from "@supabase/supabase-js";
import {
	GUESTBOOK_PAGE_SIZE,
	type Guestbook,
	type GuestbookCursor,
} from "./types";

export const makeGetGuestbooks =
	(client: () => SupabaseClient<Database>) =>
	async (options?: { pinned?: boolean; cursor?: GuestbookCursor }): Promise<
		Guestbook[]
	> => {
		let query = client()
			.from("guestbook")
			.select("id, message, color, created_at, pinned")
			.order("created_at", { ascending: false })
			.order("id", { ascending: false });
		if (options?.pinned) {
			query = query.eq("pinned", true);
		} else {
			// Older messages can have NULL instead of false.
			query = query
				.or("pinned.eq.false,pinned.is.null")
				.limit(GUESTBOOK_PAGE_SIZE);
			if (options?.cursor) {
				const { created_at, id } = options.cursor;
				query = query.or(
					`created_at.lt.${created_at},and(created_at.eq.${created_at},id.lt.${id})`,
				);
			}
		}

		const { data, error } = await query;
		if (error) throw new Error("방명록을 불러오지 못했어요.");
		return data ?? [];
	};

export const makeGetGuestbooksCount =
	(client: () => SupabaseClient<Database>) => async (): Promise<number> => {
		const { count, error } = await client()
			.from("guestbook")
			.select("id", { count: "exact", head: true });
		if (error) throw new Error("방명록 개수를 불러오지 못했어요.");
		return count ?? 0;
	};
