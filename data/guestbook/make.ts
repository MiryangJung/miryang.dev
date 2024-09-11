import type { Database } from "@/types/database-generated.types";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Guestbook } from "./types";

interface Range {
	from: number;
	to: number;
}

interface Option {
	count?: "exact" | "planned" | "estimated";
	head?: boolean;
}

export const baseQuery = (
	client: () => SupabaseClient<Database>,
	options?: Option,
) =>
	client()
		.from("guestbook")
		.select("*", options)
		.order("pinned", { ascending: true })
		.order("created_at", { ascending: false });

export const makeGetGuestbooks =
	(supabaseClient: () => SupabaseClient<Database>) =>
	async (props?: { range?: Range }): Promise<Guestbook[]> => {
		let query = baseQuery(supabaseClient);

		if (props?.range) {
			const { range } = props;
			query = query.range(range.from, range.to);
		}

		const { data } = await query;

		return data ?? [];
	};

export const makeGetGuestbooksCount =
	(supabaseClient: () => SupabaseClient<Database>) =>
	async (): Promise<number> => {
		const query = baseQuery(supabaseClient, { count: "exact", head: true });

		const { count } = await query;

		return count ?? 0;
	};
