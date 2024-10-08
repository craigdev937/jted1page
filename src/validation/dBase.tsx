import { z, ZodType } from "zod";
import { IForm } from "../models/Interfaces";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

export const schema: ZodType<IForm> = z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    email: z.string().email(),
    phone: z.string().regex(phoneRegex, "Invalid Number")  
});



