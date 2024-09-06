import type { Database } from "@/types/database-generated.types";
import { createClient } from "@supabase/supabase-js";

export default createClient<Database>(
	process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
);
