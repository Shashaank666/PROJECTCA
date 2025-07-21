// emailService.ts
import { Resend } from 'resend';

const resend = new Resend('re_DkYLRxtH_J7fjkgXfe6gb3xkjVBSkSHpV');

export const sendEmailNotification = async ({
  name,
  email,
  phone,
  serviceType,
  message,
  submissionType,
  submittedAt
}: {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  submissionType: string;
  submittedAt: string;
}) => {
  try {
    const response = await resend.emails.send({
      from: 'CamphorMind <onboarding@resend.dev>', // You can later use a custom domain like no-reply@camphormind.com
      to: ['info@camphormind.com'],
      subject: `New ${submissionType} Submission on CamphorMind`,
      html: `
        <h2>New ${submissionType} Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <p><em>Submitted At: ${submittedAt}</em></p>
      `
    });

    console.log('Resend response:', response);
  } catch (error) {
    console.error('Error sending email with Resend:', error);
    throw error;
  }
};
