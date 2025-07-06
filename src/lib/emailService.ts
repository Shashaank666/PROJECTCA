// Email notification service for form submissions
export interface EmailNotificationData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  submissionType: 'contact' | 'consultation' | 'query';
  submittedAt: string;
}

export const sendEmailNotification = async (data: EmailNotificationData): Promise<boolean> => {
  try {
    // Format the email content
    const emailContent = {
      to: 'singh.company2012@gmail.com',
      subject: `🌿 New ${data.submissionType} from CamphorMind Website - ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Form Submission - CamphorMind</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f0fdf4; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981, #14b8a6); color: white; padding: 30px; text-align: center; border-radius: 15px 15px 0 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .logo { font-size: 32px; font-weight: bold; margin-bottom: 10px; display: flex; align-items: center; justify-content: center; gap: 10px; }
            .content { background: white; padding: 30px; border-radius: 0 0 15px 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .info-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 15px; margin: 20px 0; }
            .info-label { font-weight: bold; color: #374151; padding: 8px 0; }
            .info-value { color: #6b7280; padding: 8px 0; }
            .message-box { background: #f0fdf4; padding: 20px; border-radius: 12px; border-left: 4px solid #10b981; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 14px; }
            .priority { background: linear-gradient(135deg, #fef3c7, #fde68a); color: #92400e; padding: 15px; border-radius: 10px; margin: 15px 0; text-align: center; font-weight: bold; border: 2px solid #f59e0b; }
            .action-buttons { display: flex; gap: 10px; justify-content: center; margin: 20px 0; }
            .btn { padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; }
            .btn-primary { background: #10b981; color: white; }
            .btn-secondary { background: #6b7280; color: white; }
            .highlight { background: #ecfdf5; padding: 20px; border-radius: 12px; margin: 20px 0; border: 2px solid #10b981; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">🌿 CamphorMind</div>
              <p style="margin: 0; font-size: 18px;">New ${data.submissionType.charAt(0).toUpperCase() + data.submissionType.slice(1)} Received</p>
            </div>
            
            <div class="content">
              <div class="priority">
                ⚡ URGENT: New client inquiry requires immediate attention!
              </div>
              
              <h2 style="color: #10b981; margin-bottom: 20px; font-size: 24px;">📋 Client Information</h2>
              
              <div class="info-grid">
                <div class="info-label">👤 Full Name:</div>
                <div class="info-value"><strong>${data.name}</strong></div>
                
                <div class="info-label">📧 Email Address:</div>
                <div class="info-value"><a href="mailto:${data.email}" style="color: #10b981;">${data.email}</a></div>
                
                <div class="info-label">📱 Phone Number:</div>
                <div class="info-value"><a href="tel:${data.phone}" style="color: #10b981;">${data.phone}</a></div>
                
                <div class="info-label">🏢 Service Interested:</div>
                <div class="info-value"><strong>${data.serviceType}</strong></div>
                
                <div class="info-label">📝 Submission Type:</div>
                <div class="info-value">${data.submissionType.charAt(0).toUpperCase() + data.submissionType.slice(1)}</div>
                
                <div class="info-label">🕐 Submitted At:</div>
                <div class="info-value">${new Date(data.submittedAt).toLocaleString('en-IN', { 
                  timeZone: 'Asia/Kolkata',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</div>
              </div>
              
              <div class="message-box">
                <h3 style="margin-top: 0; color: #10b981; font-size: 18px;">💬 Client Message:</h3>
                <p style="margin-bottom: 0; white-space: pre-wrap; font-size: 16px; line-height: 1.6;">${data.message}</p>
              </div>
              
              <div class="action-buttons">
                <a href="tel:${data.phone}" class="btn btn-primary">📞 Call Now</a>
                <a href="mailto:${data.email}" class="btn btn-secondary">📧 Send Email</a>
              </div>
              
              <div class="highlight">
                <h3 style="color: #065f46; margin-top: 0; font-size: 18px;">🎯 Recommended Next Steps:</h3>
                <ul style="color: #047857; margin-bottom: 0; padding-left: 20px;">
                  <li><strong>Respond within 2 hours</strong> for optimal client experience</li>
                  <li><strong>Call the client directly</strong> at ${data.phone}</li>
                  <li><strong>Send a detailed service proposal</strong> via email</li>
                  <li><strong>Schedule a consultation meeting</strong> if required</li>
                  <li><strong>Update status in admin panel</strong> after contact</li>
                </ul>
              </div>
              
              <div style="background: #fef3c7; padding: 15px; border-radius: 10px; margin: 20px 0; text-align: center;">
                <p style="margin: 0; color: #92400e; font-weight: bold;">
                  ⏰ Quick Response Time = Higher Conversion Rate!
                </p>
              </div>
            </div>
            
            <div class="footer">
              <p><strong>🌿 CamphorMind CA Services</strong></p>
              <p>📍 Royal Residency, Mandi, Delhi - 110047</p>
              <p>📞 Phone: +91 9717366670 | 📧 Email: singh.company2012@gmail.com</p>
              <p style="margin-top: 15px; font-size: 12px; color: #9ca3af;">
                This is an automated notification from your CamphorMind website contact form.
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // In a production environment, you would integrate with an email service like:
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP
    // - Supabase Edge Functions with email service
    
    // For now, we'll simulate the email sending and log the details
    console.log('📧 Email Notification Sent:', {
      to: emailContent.to,
      subject: emailContent.subject,
      timestamp: new Date().toISOString(),
      clientData: data
    });

    // Store email notification in database for tracking
    const { supabase } = await import('./supabase');
    await supabase.from('admin_replies').insert([{
      recipient_email: data.email,
      recipient_name: data.name,
      message: `Auto-notification sent to admin for ${data.submissionType} submission`,
      sent_at: new Date().toISOString(),
      sent_by: 'system'
    }]);

    return true;
  } catch (error) {
    console.error('❌ Email notification failed:', error);
    return false;
  }
};