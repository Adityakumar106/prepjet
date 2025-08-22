import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // Or use SMTP config
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"jetprep" <${process.env.SMTP_EMAIL}>`,
    to: options.to,
    subject: options.subject,
    text: options.text,
  });
};

export default sendEmail;
