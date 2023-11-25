import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
	"https://lfnqbjkmpshuujaasccq.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmbnFiamttcHNodXVqYWFzY2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4ODMzODQsImV4cCI6MjAxNjQ1OTM4NH0.hbZFPtpV7fWkVq59lnk4kJsqIdiGCww6RYNrx-xTW_c"
);

export default supabase;




// curl 'https://lfnqbjkmpshuujaasccq.supabase.co/rest/v1/simple_messages?select=*' \
// -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmbnFiamttcHNodXVqYWFzY2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4ODMzODQsImV4cCI6MjAxNjQ1OTM4NH0.hbZFPtpV7fWkVq59lnk4kJsqIdiGCww6RYNrx-xTW_c" \
// -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmbnFiamttcHNodXVqYWFzY2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4ODMzODQsImV4cCI6MjAxNjQ1OTM4NH0.hbZFPtpV7fWkVq59lnk4kJsqIdiGCww6RYNrx-xTW_c"
          