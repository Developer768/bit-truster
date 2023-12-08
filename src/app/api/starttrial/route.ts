import { NextRequest } from "next/server";
import nodemailer from 'nodemailer';


// export async function GET(req:NextRequest) {

//     return new Response("Sent")
    
// }

export async function POST(req:NextRequest) {
    const body = await req.json()
    // console.log("POST Request",body)
    try{
        const {firstName,lastName,phone,companyName,email,message} = body;
        const transporter = nodemailer.createTransport({
            name: 'My-Webpage',
            host: process.env.CONTACT_FORM_HOST,
            port: 465,
            secure: true,
            auth: {
              user: process.env.CONTACT_FORM_SEND_EMAIL,
              pass: process.env.CONTACT_FORM_PASS,
            },
          });
          
        console.log(transporter);

        transporter.verify(function (error:any, success:any) {
            if (error) {
              console.log(error);
              return new Response(JSON.stringify({status:"Failed"}),{
        status:200,
    })
            } else {
              console.log('Server is ready to take our messages');
            }
          });

          const clientMail = await transporter.sendMail({
            from: process.env.CONTACT_FORM_SEND_EMAIL,
            to: `${firstName} ${email}`,
            subject: 'Start A Free Trial | BitTruster',
            text: `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phone}\nCompany Name: ${companyName}\nEmail Address: ${email}\nMessage: ${message}\n`,
          });
  
          console.log('Message sent: %s', clientMail.messageId);
  
          const ServerMail = await transporter.sendMail({
            from: process.env.CONTACT_FORM_SEND_EMAIL,
            to: `${firstName} ${process.env.CONTACT_FORM_RECEIVE_EMAIL}`,
            subject: 'Start A Free Trial | BitTruster',
            text: `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phone}\nCompany Name: ${companyName}\nEmail Address: ${email}\nMessage: ${message}\n`,
          });
  
          console.log('Message sent: %s', ServerMail.messageId);

          return new Response(JSON.stringify({status:"Sent"}),{
            status:200,
        })

    }catch (err){
        return new Response(JSON.stringify({status:"Failed"}),{
            status:200,
        })
    }

}