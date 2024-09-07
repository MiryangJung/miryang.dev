import type { Database } from "./database-generated.types";

export type Tables<T extends keyof Database["public"]["Tables"]> =
	Database["public"]["Tables"][T]["Row"];
export type Enums<T extends keyof Database["public"]["Enums"]> =
	Database["public"]["Enums"][T];
export type Views<T extends keyof Database["public"]["Views"]> =
	Database["public"]["Views"][T]["Row"];
export type Functions<T extends keyof Database["public"]["Functions"]> =
	Database["public"]["Functions"][T]["Returns"];
