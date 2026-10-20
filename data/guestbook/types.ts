import type { Tables } from "@/types/database.types";

export type Guestbook = Tables<"guestbook">;

export type GuestbookCursor = Pick<Guestbook, "created_at" | "id">;
export const GUESTBOOK_PAGE_SIZE = 50;
