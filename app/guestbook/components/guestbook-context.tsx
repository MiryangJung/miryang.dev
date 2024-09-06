"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { getGuestbooks } from "@/data/guestbook/get";
import { Guestbook } from "@/data/guestbook/types";

const PER_PAGE = 50;

interface GuestbookContextType {
  loading: boolean;
  items: Guestbook[];
  hasNextPage: boolean;
  loadMore: () => Promise<void>;
  addItem: (newItem: Guestbook) => void;
}

const GuestbookContext = createContext<GuestbookContextType | undefined>(
  undefined
);

export function GuestbookProvider({
  children,
  initialItems,
}: {
  children: ReactNode;
  initialItems: Guestbook[];
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Guestbook[]>(initialItems);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  const loadMore = useCallback(async () => {
    if (!hasNextPage || loading) return;

    setLoading(true);

    const from = items.length;
    const to = from + PER_PAGE - 1;
    const data = await getGuestbooks({ range: { from, to } });

    setItems((prevItems) => [...prevItems, ...data]);
    setHasNextPage(data.length === PER_PAGE);

    setLoading(false);
  }, [items.length, hasNextPage, loading]);

  const addItem = useCallback((newItem: Guestbook) => {
    setItems((prevItems) => [newItem, ...prevItems]);
  }, []);

  return (
    <GuestbookContext.Provider
      value={{ loading, items, hasNextPage, loadMore, addItem }}
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
