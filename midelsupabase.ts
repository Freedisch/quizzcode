import { createClient } from '@supabase/supabase-js'
const url = process.env.SUPABASE_URL
const supabase = createClient(
  'https://sdwiwxmlvzvwxmvlifnr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkd2l3eG1sdnp2d3htdmxpZm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk4NDA4NzIsImV4cCI6MjAwNTQxNjg3Mn0.UIV3U9e3kLu4kAXPCTs4VQvDwY43fNNZy3mzZcp8JQY'
)
console.log(supabase.auth.getUser())

export { supabase }
