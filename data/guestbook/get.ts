import supabase from "@/util/supabase";
import { makeGetGuestbooks, makeGetGuestbooksCount } from "./make";

const makeSupabaseClient = () => supabase;

export const getGuestbooks = makeGetGuestbooks(makeSupabaseClient);

export const getGuestbooksCount = makeGetGuestbooksCount(makeSupabaseClient);
