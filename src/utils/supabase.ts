import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://uddxonlivuecwvskbhzw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZHhvbmxpdnVlY3d2c2tiaHp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NjA5NDQsImV4cCI6MjA2MzIzNjk0NH0.O4zmZdYSQTs6HtwaKC2mxoafifyWbOfUjN4otT91xzs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase