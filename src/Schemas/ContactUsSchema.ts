import { z } from "zod";

export const ContactUsFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "First Name should atleast be 3 Characters" })
    .max(30, { message: "First Name can only be maximum of 30 Characters" }),
    phone: z.string()
          .min(10, {message:'Please Enter Phone Number'}),
  email: z.string().email({ message: "Please Input correct Email" }),
  message: z
    .string()
    .min(3, { message: "Message should atleast be 3 Characters" })
    .max(30, { message: "Message can only be maximum of 200 Characters" }),
});
