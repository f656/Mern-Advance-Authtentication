import { transporter } from "./emailConfig.js";
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, Welcome_Email_Template } from "./emailTemplates.js";

export const SendVerificationEmail = async (email,verificationToken) =>{
    try {
        const response = await transporter.sendMail({
      from: '"Ali Coding Stack😎" <faizualikhan258@gmail.com>',
      to: email,
      subject: "verify your Email ✔",
      text: "verify your Email", // plain‑text body
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),// HTML body
      category:"Email Verification",
    });
    console.log('Email send Suceessfully',response)
    } catch (error) {
        console.log(`Error sending verification`,error)
        throw new Error(`Error sending verification email:${error}`);
    }
}

export const sendWelcomeEmail = async (email,name) => {
     try {
     const response=   await transporter.sendMail({
            from: '"Ali Coding Stack😎" <faizualikhan258@gmail.com>',

            to: email, // list of receivers
            subject: "Welcome Email", // Subject line
            text: "Welcome Email", // plain text body
            html: Welcome_Email_Template.replace("{name}",name)
        })
        console.log('Welcome Email send Successfully',response)
    } catch (error) {
        console.log('Email error',error)
        throw new Error(`Error sending welcome email:${error}`);
    }
}

export const sendPasswordResetEmail = async(email,resetURL) =>{
     try {
        const response = await transporter.sendMail({
            from: '"Ali Coding Stack😎" <faizualikhan258@gmail.com>',

            to: email, // list of receivers
            subject: "Reset Your password", // Subject line
            text: "Reset password", // plain text body
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
            category:"Password Reset",
        })
        console.log("Password reset email sent successfully", response)
     } catch (error) {
        console.log('Error sending password reset email ',error)
        throw new Error(`Error sending password reset email:${error}`);
     }
}

export const sendResetSuccessEmail = async(email) => {
   try {
    const response = await transporter.sendMail({
         from: '"Ali Coding Stack😎" <faizualikhan258@gmail.com>',

            to: email, // list of receivers
            subject: "Password Reset Successfully", // Subject line
            text: " Successfully Reset password", // plain text body
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category:"Password Reset",
    });
    console.log("Password reset Successfully",response);
   } catch (error) {
    console.log('Error sending password reset email ',error)
    throw new Error(`Error sending password reset email:${error}`);
   }
}