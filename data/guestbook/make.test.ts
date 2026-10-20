import type { Database } from "@/types/database-generated.types";
import { createClient } from "@supabase/supabase-js";
import { describe, expect, it, vi } from "vitest";
import { makeGetGuestbooks, makeGetGuestbooksCount } from "./make";

function setup() {
	const fetcher = vi.fn<typeof fetch>(
		async () =>
			new Response("[]", { headers: { "content-type": "application/json" } }),
	);
	const client = createClient<Database>(
		"https://test.supabase.co",
		"test-key",
		{
			global: { fetch: fetcher },
			auth: { persistSession: false },
		},
	);
	return {
		fetcher,
		get: makeGetGuestbooks(() => client),
		count: makeGetGuestbooksCount(() => client),
	};
}

describe("guestbook queries", () => {
	it("keeps both unpinned and cursor filters, including same-timestamp tie breaking", async () => {
		const { fetcher, get } = setup();
		const cursor = { created_at: "2026-10-20T12:00:00+00:00", id: 42 };
		await get({ cursor });
		const url = new URL(String(fetcher.mock.calls[0]?.[0]));
		expect(url.searchParams.getAll("or")).toEqual([
			"(pinned.eq.false,pinned.is.null)",
			`(created_at.lt.${cursor.created_at},and(created_at.eq.${cursor.created_at},id.lt.42))`,
		]);
		expect(url.searchParams.get("order")).toBe("created_at.desc,id.desc");
		expect(url.searchParams.get("limit")).toBe("50");
	});

	it("fetches pinned entries separately without counting them in the normal page limit", async () => {
		const { fetcher, get } = setup();
		await get({ pinned: true });
		const url = new URL(String(fetcher.mock.calls[0]?.[0]));
		expect(url.searchParams.get("pinned")).toBe("eq.true");
		expect(url.searchParams.has("limit")).toBe(false);
	});

	it("propagates read errors instead of reporting an empty successful page", async () => {
		const { fetcher, get, count } = setup();
		fetcher.mockImplementation(
			async () =>
				new Response(JSON.stringify({ message: "unavailable" }), {
					status: 503,
				}),
		);
		await expect(get()).rejects.toThrow("불러오지");
		await expect(count()).rejects.toThrow("불러오지");
	});
});
