import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yqswrcsrxoztmppeaezr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlxc3dyY3NyeG96dG1wcGVhZXpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ5NTk4NTMsImV4cCI6MjAxMDUzNTg1M30.EM-vY_wx30feJhTjl2V2THSTAf8FOXimqzhLPu0bokA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
