import { z } from "zod";

export const DiscountCodeRegistrationFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name should atleast be 3 Characters" })
    .max(30, { message: "Name can only be maximum of 30 Characters" }),
  email: z.string().email({ message: "Please Input correct Email" }),
  companyName: z
    .string()
    .min(3, { message: "Company Name should atleast be 3 Characters" })
    .max(30, { message: "Company Name can only be maximum of 30 Characters" }),
  endpoints: z
    .string()
    .min(3, { message: "Number of Endpoints Managed should atleast be 3 Characters" })
    .max(30, { message: "Number of Endpoints Managed can only be maximum of 30 Characters" }),
});
