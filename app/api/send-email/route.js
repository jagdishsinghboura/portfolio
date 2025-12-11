import { Resend } from "resend";

const resend = new Resend("re_8bHhMJN9_E5akF1rmJorUW79CeVRTBM1V");
// const resend = new Resend("re_8bHhMJN9_E5akF1rmJorUW79CeVRTBM1V");

export async function POST(req) {
  try {
    const { name, subject, message } = await req.json();
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "bourajagdish1221@gmail.com",
      subject: `new message from ${name}`,
      html: `
            <div>
            <h2>New message from your portfolio</h2>
            <p> <strong>subject:</strong>${subject} </p>
            <p> <strong>message:</strong>${message} </p>
            </div>            
            `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json(error);
  }
}
