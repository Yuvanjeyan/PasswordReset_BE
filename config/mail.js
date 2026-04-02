const nodemailer = require("nodemailer");

exports.sendEmail = async (to, subject, html) => {
  if (!process.env.EMAIL || !process.env.PASSWORD) {
    throw new Error("Email service is not configured. Set EMAIL and PASSWORD.");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    family: 4,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  await transporter.verify();

  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject,
    html,
  });
};
