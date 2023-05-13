const nodemailer =  require("nodemailer");

const sendEmail =  (email, subject, text)=> {
  try{ 
    const transporter = nodemailer.createTransport(SMTP,{
      host: process.env.HOST,
      service: 'gmail',
      post: Number(process.env.EMAIL_PORT),
      secure: Boolean(process.env.SECURE),
      auth: {
        user: 'kcpm200@gmail.com',
        pass: 'questify4'
      }
      
    });

     transporter.sendMail({
      from: 'kcpm200@gmail.com',
      to: email,
      subject: subject,
      text: text
    });
    console.log('Email sent successfully');
  }catch(err) {
    console.log("Email not sent");
    console.log(err)
  }
}

module.exports = sendEmail