import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database-generated.types";

export default createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
