const nodemailer = require("nodemailer");
const path = require("path");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// === BASE WRAPPER WITH EMBEDDED LOGO ===
const baseWrapper = (content) => `
  <div style="font-family: 'Segoe UI', sans-serif; background-color: #f4fbf9; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; box-shadow: 0 4px 14px rgba(0,0,0,0.08); padding: 30px;">
      <div style="text-align: center;">
         <img src="cid:logoImage" alt="Namma Oor Offers Logo" style="width: 120px; height: 120px; background: transparent; margin-bottom: 10px; ; object-fit: contain;" />
         <h1 style="color: #218971; font-size: 24px; margin: 0;">Namma Oor Offers</h1>
        <hr style="border: none; height: 2px; background: #ccebe2; margin: 12px 0 28px;">
      </div>
      ${content}
      <div style="margin-top: 40px; text-align: center; font-size: 13px; color: #777;">
        <p>You’re receiving this email from Namma Oor Offers.</p>
        <p>If you didn’t request this, please ignore this message.</p>
      </div>
    </div>
  </div>
`;

// === EMAIL TEMPLATES ===
const templates = {
  otp: (otp) =>
    baseWrapper(`
      <h2 style="color: #333; text-align: center;">🔐 Your OTP Code</h2>
      <p style="font-size: 16px; text-align: center;">Use the following One-Time Password (OTP) to verify your email address:</p>
      <div style="text-align: center; margin: 20px 0;">
        <span style="font-size: 26px; font-weight: bold; color: #218971; background: #e6f5f2; padding: 12px 24px; border-radius: 8px; display: inline-block;">
          ${otp}
        </span>
      </div>
      <p style="font-size: 14px; text-align: center;">This OTP is valid for 10 minutes.</p>
    `),

  reset: (link) =>
    baseWrapper(`
      <h2 style="color: #333; text-align: center;">🔁 Password Reset</h2>
      <p style="font-size: 16px; text-align: center;">Click the button below to reset your password:</p>
      <div style="text-align: center; margin-top: 20px;">
        <a href="${link}" style="background-color: #218971; color: white; padding: 12px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
          Reset Password
        </a>
      </div>
      <p style="margin-top: 20px; font-size: 14px; text-align: center;">If you didn’t request this, you can safely ignore this email.</p>
    `),

  welcome: (username) =>
    baseWrapper(`
      <h2 style="color: #333; text-align: center;">🎉 Welcome to Namma Oor Offers, ${username}!</h2>
      <p style="font-size: 16px; text-align: center;">Start uploading Excel files and visualize your data like never before with beautiful 2D and 3D interactive charts.</p>
      <div style="text-align: center; margin-top: 20px;">
        <a href="https://Namma Oor Offers.com" style="background-color: #218971; color: white; padding: 12px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
          Get Started
        </a>
      </div>
      <p style="margin-top: 20px; text-align: center;">Welcome aboard,<br/><strong>The Namma Oor Offers Team 📊</strong></p>
    `),
};

// === COMMON ATTACHMENTS ===
const logoAttachment = {
  filename: "logo.png",
  path: path.join(__dirname, "../logo/logo.png"),
  cid: "logoImage",
};

// === EMAIL FUNCTIONS ===
const sendOTP = async (email, otp) => {
  await transporter.sendMail({
    from: `"Namma Oor Offers" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your OTP Code",
    html: templates.otp(otp),
    attachments: [logoAttachment],
  });
};

const sendResetLink = async (email, link) => {
  await transporter.sendMail({
    from: `"Namma Oor Offers" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Reset Your Password",
    html: templates.reset(link),
    attachments: [logoAttachment],
  });
};

const sendWelcomeEmail = async (email, username) => {
  await transporter.sendMail({
    from: `"Namma Oor Offers" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Welcome to Namma Oor Offers, ${username}!`,
    html: templates.welcome(username),
    attachments: [logoAttachment],
  });
};

module.exports = {
  sendOTP,
  sendResetLink,
  sendWelcomeEmail,
};
