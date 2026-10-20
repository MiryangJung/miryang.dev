import { beforeEach, describe, expect, it, vi } from "vitest";
import insertGuestbookAction from "./insert-guestbook-action";

const database = vi.hoisted(() => ({
	from: vi.fn(),
	insert: vi.fn(),
	select: vi.fn(),
	single: vi.fn(),
}));
vi.mock("@/util/supabase", () => ({ default: database }));

beforeEach(() => {
	database.from.mockReturnValue(database);
	database.insert.mockReturnValue(database);
	database.select.mockReturnValue(database);
});

describe("guestbook server validation", () => {
	it.each([
		{ message: "   ", color: "#8FA1FF" },
		{ message: "a".repeat(1001), color: "#8FA1FF" },
		{ message: "hello", color: "invalid" },
	])("rejects invalid data before writing", async (data) => {
		expect(await insertGuestbookAction(data)).toHaveProperty("error");
		expect(database.from).not.toHaveBeenCalled();
	});

	it("returns the saved row and prevents caller-controlled pinning or IDs", async () => {
		const item = {
			id: 15,
			message: "hello",
			color: "#8FA1FF",
			pinned: false,
			created_at: "2026-10-20T00:00:00Z",
		};
		database.single.mockResolvedValue({ data: item, error: null });
		const input = {
			message: "  hello  ",
			color: item.color,
			pinned: true,
			id: 1,
		};
		expect(await insertGuestbookAction(input)).toEqual({ item });
		expect(database.insert).toHaveBeenCalledWith({
			message: "hello",
			color: item.color,
			pinned: false,
		});
	});

	it("reports a database rejection as failure", async () => {
		database.single.mockResolvedValue({
			data: null,
			error: { message: "rejected" },
		});
		const result = await insertGuestbookAction({
			message: "hello",
			color: "#8FA1FF",
		});
		expect(result.error).toContain("다시");
		expect(result.item).toBeUndefined();
	});
});
