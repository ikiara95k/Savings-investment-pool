import { createClient } from "@supabase/supabase-js";

// Supabase publishable client configuration.
// This key is intended for use in the browser; database access is protected by RLS.
const url = "https://wonnedqygkrxnfkocoii.supabase.co";
const key = "sb_publishable_XPwj9JC-j6IbI0a1fPkWaQ_7_vXBmxE";

export const supabase = createClient(url, key);
export const supabaseConfigured = true;
