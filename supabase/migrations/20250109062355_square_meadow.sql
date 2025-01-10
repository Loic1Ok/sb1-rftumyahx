/*
  # Content Management System Tables

  1. New Tables
    - `news`
      - `id` (uuid, primary key)
      - `title` (text)
      - `date` (date)
      - `category` (text)
      - `image` (text)
      - `summary` (text)
      - `link` (text)
      - `published` (boolean)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `advertisements`
      - `id` (uuid, primary key)
      - `title` (text)
      - `image` (text)
      - `description` (text)
      - `link` (text)
      - `sponsor` (text)
      - `start_date` (date)
      - `end_date` (date)
      - `active` (boolean)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `announcements`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `priority` (text)
      - `start_date` (date)
      - `end_date` (date)
      - `active` (boolean)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated admin users
*/

-- Create news table
CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  date date NOT NULL,
  category text NOT NULL,
  image text NOT NULL,
  summary text NOT NULL,
  link text NOT NULL,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create advertisements table
CREATE TABLE IF NOT EXISTS advertisements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  image text NOT NULL,
  description text NOT NULL,
  link text NOT NULL,
  sponsor text NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create announcements table
CREATE TABLE IF NOT EXISTS announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  priority text CHECK (priority IN ('low', 'medium', 'high')) NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE advertisements ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

-- Create policies for news
CREATE POLICY "Allow public read access" ON news
  FOR SELECT USING (published = true);

CREATE POLICY "Allow admin full access" ON news
  FOR ALL USING (auth.role() = 'authenticated');

-- Create policies for advertisements
CREATE POLICY "Allow public read access" ON advertisements
  FOR SELECT USING (
    active = true AND 
    current_date BETWEEN start_date AND end_date
  );

CREATE POLICY "Allow admin full access" ON advertisements
  FOR ALL USING (auth.role() = 'authenticated');

-- Create policies for announcements
CREATE POLICY "Allow public read access" ON announcements
  FOR SELECT USING (
    active = true AND 
    current_date BETWEEN start_date AND end_date
  );

CREATE POLICY "Allow admin full access" ON announcements
  FOR ALL USING (auth.role() = 'authenticated');

-- Create update triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_news_updated_at
  BEFORE UPDATE ON news
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_advertisements_updated_at
  BEFORE UPDATE ON advertisements
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_announcements_updated_at
  BEFORE UPDATE ON announcements
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();