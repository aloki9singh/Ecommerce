
const nodemailer = require("nodemailer");

const email = "support@neatskills.tech"; // Replace with your Zoho Mail email address
const pass = "y63B3jhKnHagY"; // Replace with your Zoho Mail app password
// const pass = "A1WKBd9A0iAK"; // Replace with your Zoho Mail app password

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: pass,
  },
});
const mailOptions = {
  from: "support@neatskills.tech",
  to: "kshatriyaalok1997@gmail.com",
  subject: "Test Email",
  text: "This is a test email from Node.js and Zoho Mail!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});

