import nodemailer from 'nodemailer';

export default async function send_Email({ to, subject, body }) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailResponse = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html:body,
    });

    console.log('Nodemailer response:', emailResponse);
    return { success: true, message: 'Email sent successfully', emailResponse };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
