import { z } from "zod";

export const TrialFormSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First Name should atleast be 3 Characters" })
    .max(30, { message: "First Name can only be maximum of 30 Characters" }),
  lastName: z
    .string()
    .min(3, { message: "Last Name should atleast be 3 Characters" })
    .max(30, { message: "Last Name can only be maximum of 30 Characters" }),
    phone: z.string()
          .min(10, {message:'Please Enter Phone Number'}),
    companyName: z
    .string()
    .min(3, { message: "Company Name should atleast be 3 Characters" })
    .max(30, { message: "Company Name can only be maximum of 30 Characters" }),
  email: z.string().email({ message: "Please Input correct Email" }),
  message: z
    .string()
    .min(3, { message: "Message should atleast be 3 Characters" })
    .max(30, { message: "Message can only be maximum of 200 Characters" }),
});
