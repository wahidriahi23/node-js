const nodemailer = require('nodemailer');

// Create a transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Your email
    pass: 'your-password' // Your password
  }
});

// Email details
let mailOptions = {
  from: 'your-email@gmail.com', // Sender's email
  to: 'recipient@example.com', // Receiver's email
  subject: 'Test Email',
  text: 'This is a test email from Node.js'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
