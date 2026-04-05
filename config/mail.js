const sgMail = require('@sendgrid/mail');

exports.sendEmail = async (to, subject, html) => {
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error("Email service is not configured. Set SENDGRID_API_KEY.");
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  if (!process.env.FROM_EMAIL) {
    throw new Error(
      "SendGrid sender email is not configured. Set FROM_EMAIL to your verified SendGrid sender."
    );
  }

  const msg = {
    to,
    from: process.env.FROM_EMAIL,
    subject,
    html,
  };

  await sgMail.send(msg);
};
