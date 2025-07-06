/*
  # Admin Panel Database Schema

  1. New Tables
    - `meetings` - Store admin-managed meetings
    - `admin_replies` - Track email replies sent by admin
    
  2. Updates to existing tables
    - Add `is_read` column to `contact_submissions`
    
  3. Security
    - Enable RLS on new tables
    - Add policies for admin access only
*/

-- Add is_read column to contact_submissions if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'is_read'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN is_read boolean DEFAULT false;
  END IF;
END $$;

-- Create meetings table
CREATE TABLE IF NOT EXISTS meetings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  client_name text NOT NULL,
  date date NOT NULL,
  time time NOT NULL,
  type text NOT NULL DEFAULT 'consultation',
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE meetings ENABLE ROW LEVEL SECURITY;

-- Create admin_replies table
CREATE TABLE IF NOT EXISTS admin_replies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  recipient_email text NOT NULL,
  recipient_name text NOT NULL,
  message text NOT NULL,
  sent_at timestamptz DEFAULT now(),
  sent_by text DEFAULT 'admin'
);

ALTER TABLE admin_replies ENABLE ROW LEVEL SECURITY;

-- Policies for meetings table (admin access only)
CREATE POLICY "Admin can manage meetings"
  ON meetings
  FOR ALL
  TO authenticated
  USING (true);

-- Policies for admin_replies table (admin access only)
CREATE POLICY "Admin can manage replies"
  ON admin_replies
  FOR ALL
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_meetings_date ON meetings(date);
CREATE INDEX IF NOT EXISTS idx_admin_replies_sent_at ON admin_replies(sent_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_is_read ON contact_submissions(is_read);

-- Add updated_at trigger for meetings
CREATE TRIGGER update_meetings_updated_at
    BEFORE UPDATE ON meetings
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();