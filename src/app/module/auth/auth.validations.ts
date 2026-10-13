import z, { email } from "zod";

const ClientRegistrationZodSchema = z.object({
  name: z.string().min(3, "Name must be atleast 3 characters long!").max(10),
  email: z.email("Enter a valid email address."),
  password: z
    .string()
    .min(8, "Password must be atleast 8 characters.")
    .regex(/[A-Z]/, "Password must contain atleast 1 Uppercase letter.")
    .regex(/[a-z]/, { message: "Password must contain a lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain a number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain a special character",
    }),
  client: z
    .object({
      contactNumber: z.string().optional(),
    })
    .optional(),
});

const ClientLoginZodSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be atleast 8 characters.")
    .regex(/[A-Z]/, "Password must be atleast 8 characters.")
    .regex(/[a-z]/, { message: "Password must be atleast 8 characters." })
    .regex(/[0-9]/, { message: "Password must be atleast 8 characters." })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must be atleast 8 characters.",
    }),
});

export const UserValidation = {
  ClientRegistrationZodSchema,
  ClientLoginZodSchema,
};
