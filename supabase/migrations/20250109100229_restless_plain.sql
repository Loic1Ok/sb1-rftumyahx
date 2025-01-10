/*
  # Update News Table Policies

  1. Changes
    - Remove existing policies
    - Add new policies for public and authenticated access
    - Enable RLS on news table
  
  2. Security
    - Public users can read published news
    - Authenticated users (admins) have full CRUD access
*/

-- First, drop existing policies
DROP POLICY IF EXISTS "Allow public read access" ON news;
DROP POLICY IF EXISTS "Allow admin full access" ON news;

-- Enable RLS
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- Create new policies
CREATE POLICY "Public can view published news"
  ON news
  FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users have full access"
  ON news
  FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');