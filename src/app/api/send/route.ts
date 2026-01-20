import nodemailer from "nodemailer";

export async function POST(req:Request) {
  try {
    const { name, email, message } = await req.json();

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or another email service
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // app password (recommended)
      },
      tls:{ rejectUnauthorized:false }
    });

    // Email content
    const mailOptions = {
      from: email, // sender from form
      to: "mohamedhouari16@gmail.com",
      subject: `New Contact Message from ${name}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} - ${email}</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error:any) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
