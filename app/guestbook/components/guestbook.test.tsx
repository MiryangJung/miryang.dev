import { getGuestbooks } from "@/data/guestbook/get";
import type { Guestbook } from "@/data/guestbook/types";
import {
	act,
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import insertGuestbookAction from "../actions/insert-guestbook-action";
import GuestbookForm from "./form";
import { GuestbookProvider, useGuestbook } from "./guestbook-context";

vi.mock("../actions/insert-guestbook-action", () => ({ default: vi.fn() }));
vi.mock("@/data/guestbook/get", () => ({ getGuestbooks: vi.fn() }));

const pinned = {
	id: 1,
	message: "고정 메시지",
	color: "#8FA1FF",
	pinned: true,
	created_at: "2026-01-01T00:00:00Z",
};
const existing = { ...pinned, id: 2, message: "이전 메시지", pinned: false };
const saved = { ...existing, id: 3, message: "새 메시지" };

function Messages() {
	const { items } = useGuestbook();
	return (
		<ul>
			{items.map((item) => (
				<li key={item.id}>{item.message}</li>
			))}
		</ul>
	);
}

function setup() {
	render(
		<GuestbookProvider initialItems={[pinned, existing]}>
			<Messages />
			<GuestbookForm />
		</GuestbookProvider>,
	);
	return userEvent.setup();
}

beforeEach(() => {
	Element.prototype.scrollIntoView = vi.fn();
});

describe("guestbook pagination", () => {
	const initial = Array.from({ length: 50 }, (_, index) => ({
		...existing,
		id: 100 - index,
		message: `message ${index}`,
	}));
	function Controls() {
		const { loadMore, addItem, loading, error, hasNextPage, items } =
			useGuestbook();
		return (
			<>
				<button
					type="button"
					onClick={() => {
						void loadMore();
						void loadMore();
					}}
				>
					load twice
				</button>
				<button type="button" onClick={() => addItem({ ...saved, id: -1 })}>
					add
				</button>
				<output>
					{JSON.stringify({
						loading,
						error,
						hasNextPage,
						ids: items.map((item) => item.id),
					})}
				</output>
			</>
		);
	}
	function setupPagination() {
		render(
			<GuestbookProvider initialItems={[pinned, ...initial]}>
				<Controls />
			</GuestbookProvider>,
		);
		return userEvent.setup();
	}
	it("does not skip older messages after a local insertion or issue concurrent loads", async () => {
		let finish!: (items: Guestbook[]) => void;
		vi.mocked(getGuestbooks).mockImplementation(
			() =>
				new Promise((resolve) => {
					finish = resolve;
				}),
		);
		const user = setupPagination();
		await user.click(screen.getByText("add"));
		await user.click(screen.getByText("load twice"));
		expect(getGuestbooks).toHaveBeenCalledTimes(1);
		expect(getGuestbooks).toHaveBeenCalledWith({ cursor: initial.at(-1) });
		await act(async () => finish([{ ...existing, id: 50 }]));
		expect(screen.getByRole("status").textContent).toContain(
			'"hasNextPage":false',
		);
	});
	it("unlocks loading after a failure and allows retry", async () => {
		vi.mocked(getGuestbooks)
			.mockRejectedValueOnce(new Error("offline"))
			.mockResolvedValueOnce([]);
		const user = setupPagination();
		await user.click(screen.getByText("load twice"));
		expect(screen.getByRole("status").textContent).toContain('"loading":false');
		expect(screen.getByRole("status").textContent).toContain("다시");
		await user.click(screen.getByText("load twice"));
		expect(getGuestbooks).toHaveBeenCalledTimes(2);
		expect(screen.getByRole("status").textContent).toContain('"error":null');
	});
});
afterEach(cleanup);

describe("guestbook submission", () => {
	it("shows the message below pinned entries and clears the input before saving finishes", async () => {
		let finish!: (value: { item: typeof saved }) => void;
		vi.mocked(insertGuestbookAction).mockImplementation(
			() =>
				new Promise((resolve) => {
					finish = resolve as typeof finish;
				}),
		);
		const user = setup();
		await user.type(screen.getByRole("textbox"), saved.message);
		await user.click(screen.getByRole("button", { name: "전송" }));

		await waitFor(() =>
			expect(
				screen.getAllByRole("listitem").map((item) => item.textContent),
			).toEqual(["고정 메시지", "새 메시지", "이전 메시지"]),
		);
		expect((screen.getByRole("textbox") as HTMLInputElement).value).toBe("");
		expect(screen.getByText("전송 중…")).toBeTruthy();
		await act(async () => finish({ item: saved }));
		expect(screen.getAllByText("새 메시지")).toHaveLength(1);
		expect(screen.getByText("메시지를 남겼어요.")).toBeTruthy();
	});

	it("rolls back a failed message and restores the draft for retry", async () => {
		vi.mocked(insertGuestbookAction).mockRejectedValue(
			new Error("Network unavailable"),
		);
		const user = setup();
		await user.type(screen.getByRole("textbox"), saved.message);
		await user.click(screen.getByRole("button", { name: "전송" }));

		await waitFor(() =>
			expect(screen.getByRole("alert").textContent).toContain("다시"),
		);
		expect(screen.queryByText(saved.message, { selector: "li" })).toBeNull();
		expect((screen.getByRole("textbox") as HTMLInputElement).value).toBe(
			saved.message,
		);
	});

	it("does not submit a whitespace-only message", async () => {
		const user = setup();
		await user.type(screen.getByRole("textbox"), "   ");
		fireEvent.submit(screen.getByRole("form", { name: "방명록 작성" }));
		await act(async () => {});
		expect(insertGuestbookAction).not.toHaveBeenCalled();
	});
});
