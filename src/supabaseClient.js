import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://cbwunyqlywtczzmkxomg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNid3VueXFseXd0Y3p6bWt4b21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2NjAyNDIsImV4cCI6MjA2ODIzNjI0Mn0.NBogJQ_6OjWKag2y1MpAAxxM2VK5mr2wrVfneMzl1is';
export const supabase = createClient(supabaseUrl, supabaseKey);