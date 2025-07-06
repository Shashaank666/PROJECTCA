import { supabase } from './supabase';
import { adminAuth } from './adminAuth';

class AdminAPI {
  private checkAuth() {
    if (!adminAuth.isAuthenticated()) {
      throw new Error('Unauthorized');
    }
  }

  async getQueries() {
    this.checkAuth();
    
    try {
      const { data, error } = await supabase
        .from('queries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching queries:', error);
      throw error;
    }
  }

  async getMeetings() {
    this.checkAuth();
    
    try {
      const { data, error } = await supabase
        .from('meetings')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching meetings:', error);
      throw error;
    }
  }

  async markQueryAsRead(queryId: string) {
    this.checkAuth();
    
    try {
      const { error } = await supabase
        .from('queries')
        .update({ is_read: true, updated_at: new Date().toISOString() })
        .eq('id', queryId);

      if (error) throw error;
    } catch (error) {
      console.error('Error marking query as read:', error);
      throw error;
    }
  }

  async updateQueryStatus(queryId: string, status: string) {
    this.checkAuth();
    
    try {
      const { error } = await supabase
        .from('queries')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', queryId);

      if (error) throw error;
    } catch (error) {
      console.error('Error updating query status:', error);
      throw error;
    }
  }

  async sendReply(email: string, name: string, message: string) {
    this.checkAuth();
    
    try {
      // Store the reply in database for tracking
      const { error: replyError } = await supabase
        .from('admin_replies')
        .insert([{
          recipient_email: email,
          recipient_name: name,
          message,
          sent_at: new Date().toISOString(),
          sent_by: 'admin'
        }]);

      if (replyError) throw replyError;

      // In a real implementation, you would integrate with an email service like:
      // - SendGrid
      // - Nodemailer with SMTP
      // - AWS SES
      // - Supabase Edge Functions with email service
      
      // For now, we'll simulate the email sending
      console.log('Email would be sent to:', email);
      console.log('Subject: Reply from CamphorMind CA Services');
      console.log('Message:', message);
      
      return { success: true };
    } catch (error) {
      console.error('Error sending reply:', error);
      throw error;
    }
  }

  async addMeeting(meeting: any) {
    this.checkAuth();
    
    try {
      const { data, error } = await supabase
        .from('meetings')
        .insert([{
          ...meeting,
          id: crypto.randomUUID(),
          created_at: new Date().toISOString()
        }])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error adding meeting:', error);
      throw error;
    }
  }

  async deleteMeeting(meetingId: string) {
    this.checkAuth();
    
    try {
      const { error } = await supabase
        .from('meetings')
        .delete()
        .eq('id', meetingId);

      if (error) throw error;
    } catch (error) {
      console.error('Error deleting meeting:', error);
      throw error;
    }
  }
}

export const adminAPI = new AdminAPI();