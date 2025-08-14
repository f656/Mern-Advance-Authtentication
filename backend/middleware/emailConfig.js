import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "faizualikhan258@gmail.com",
    pass: "hdel eflz ztqr unqh",
  },
});

// const SendEmail = async () => {
//   try {
//     const info = await transporter.sendMail({
//       from: '"Ali Coding Stack😎" <faizualikhan258@gmail.com>',
//       to: "mrsahilkhan552@gmail.com",
//       subject: "Hello ✔",
//       text: "Hello world?", // plain‑text body
//       html: "<b>Hello world?</b>", // HTML body
//     });
//     console.log(info);
//   } catch (error) {
//     console.log(error);
//   }
// };

// SendEmail();