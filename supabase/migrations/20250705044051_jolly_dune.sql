/*
  # Unified Queries System

  1. New Tables
    - `queries` - Unified table for all form submissions (contact, consultation, messages)
    
  2. Updates
    - Migrate existing data from contact_submissions to queries
    - Update admin panel to use new queries table
    
  3. Security
    - Enable RLS on queries table
    - Add policies for public insert and admin read access
*/

-- Create unified queries table
CREATE TABLE IF NOT EXISTS queries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'closed')),
  is_read boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE queries ENABLE ROW LEVEL SECURITY;

-- Policies for queries table
CREATE POLICY "Anyone can submit queries"
  ON queries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read queries"
  ON queries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update queries"
  ON queries
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_queries_created_at ON queries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_queries_status ON queries(status);
CREATE INDEX IF NOT EXISTS idx_queries_is_read ON queries(is_read);
CREATE INDEX IF NOT EXISTS idx_queries_email ON queries(email);

-- Add updated_at trigger for queries
CREATE TRIGGER update_queries_updated_at
    BEFORE UPDATE ON queries
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Migrate existing data from contact_submissions to queries (if exists)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'contact_submissions') THEN
    INSERT INTO queries (id, name, email, phone, service, message, status, is_read, created_at, updated_at)
    SELECT 
      id, 
      name, 
      email, 
      phone, 
      service_type as service, 
      message, 
      status, 
      COALESCE(is_read, false) as is_read,
      created_at, 
      updated_at
    FROM contact_submissions
    ON CONFLICT (id) DO NOTHING;
  END IF;
END $$;

-- Migrate existing data from service_inquiries to queries (if exists)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'service_inquiries') THEN
    INSERT INTO queries (name, email, phone, service, message, status, created_at, updated_at)
    SELECT 
      name, 
      email, 
      phone, 
      specific_service as service, 
      message, 
      status, 
      created_at, 
      updated_at
    FROM service_inquiries;
  END IF;
END $$;