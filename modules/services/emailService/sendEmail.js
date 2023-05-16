const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      post: 465,
      secure: true,
      auth: {
        user: "ketchasso72@gmail.com",
        pass: "rbwgfuzhfwypdihg",
      },
    });

    await transporter.sendMail({
      from: "ketchasso72@gmail.com",
      to: email,
      subject: subject,
      text: text,
    });
    console.log("Email sent successfully");
  } catch (err) {
    console.log("Email not sent");
    console.log(err);
  }
};

/* async function main() {
  await sendEmail();
}

main().catch(console.error); */

module.exports = sendEmail;
