"use client";

import { getGuestbooks } from "@/data/guestbook/get";
import { GUESTBOOK_PAGE_SIZE, type Guestbook } from "@/data/guestbook/types";
import {
	type ReactNode,
	createContext,
	useCallback,
	useContext,
	useRef,
	useState,
} from "react";

interface GuestbookContextType {
	loading: boolean;
	items: Guestbook[];
	hasNextPage: boolean;
	loadMore: () => Promise<void>;
	addItem: (newItem: Guestbook) => void;
	confirmItem: (temporaryId: number, item: Guestbook) => void;
	removeItem: (id: number) => void;
	pendingId: number | null;
	error: string | null;
	count: number;
}

const GuestbookContext = createContext<GuestbookContextType | undefined>(
	undefined,
);

export function GuestbookProvider({
	children,
	initialItems,
	initialCount = initialItems.length,
}: {
	children: ReactNode;
	initialItems: Guestbook[];
	initialCount?: number;
}) {
	const [loading, setLoading] = useState<boolean>(false);
	const [items, setItems] = useState<Guestbook[]>(initialItems);
	const initialUnpinned = initialItems.filter((item) => !item.pinned);
	const [hasNextPage, setHasNextPage] = useState(
		initialUnpinned.length === GUESTBOOK_PAGE_SIZE,
	);
	const cursor = useRef(initialUnpinned.at(-1));
	const loadingRef = useRef(false);
	const [pendingId, setPendingId] = useState<number | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [count, setCount] = useState(initialCount);

	const loadMore = useCallback(async () => {
		if (!hasNextPage || loadingRef.current) return;
		loadingRef.current = true;
		setLoading(true);
		setError(null);
		try {
			const data = await getGuestbooks({ cursor: cursor.current });
			setItems((previous) => {
				const ids = new Set(previous.map((item) => item.id));
				return [...previous, ...data.filter((item) => !ids.has(item.id))];
			});
			cursor.current = data.at(-1) ?? cursor.current;
			setHasNextPage(data.length === GUESTBOOK_PAGE_SIZE);
		} catch {
			setError("메시지를 불러오지 못했어요. 다시 시도해 주세요.");
		} finally {
			loadingRef.current = false;
			setLoading(false);
		}
	}, [hasNextPage]);

	const addItem = useCallback((newItem: Guestbook) => {
		setPendingId(newItem.id);
		setItems((previous) => [
			...previous.filter((item) => item.pinned),
			newItem,
			...previous.filter((item) => !item.pinned),
		]);
	}, []);

	const confirmItem = useCallback((temporaryId: number, saved: Guestbook) => {
		setItems((previous) =>
			previous
				.filter((item) => item.id !== saved.id)
				.map((item) => (item.id === temporaryId ? saved : item)),
		);
		setPendingId(null);
		setCount((previous) => previous + 1);
	}, []);

	const removeItem = useCallback((id: number) => {
		setItems((previous) => previous.filter((item) => item.id !== id));
		setPendingId(null);
	}, []);

	return (
		<GuestbookContext.Provider
			value={{
				loading,
				items,
				hasNextPage,
				loadMore,
				addItem,
				confirmItem,
				removeItem,
				pendingId,
				error,
				count,
			}}
		>
			{children}
		</GuestbookContext.Provider>
	);
}

export function useGuestbook() {
	const context = useContext(GuestbookContext);
	if (context === undefined) {
		throw new Error("useGuestbook must be used within a GuestbookProvider");
	}
	return context;
}
