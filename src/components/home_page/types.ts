import * as z from "zod";

export const SignUpDataType = z.object({
  firstName: z.string({ required_error: "first name is required" }).min(3),
  lastName: z.string({ required_error: "last name is required" }).min(3),
  country: z.string({ required_error: "country is required" }).min(3),
  state: z.string({ required_error: "state is required" }).min(3),
  city: z.string({ required_error: "city is required" }).min(3),
  address: z.string({ required_error: "address is required" }).min(3),
  gender: z.enum(["male", "female", "non-binary"]),
  email: z.string({ required_error: "email address is required " }).email(),
  dateOfBirth: z.string(),
  password: z
    .string({ required_error: "password is required " })
    .min(6, "length must be 6 letters or above"),
});
export type SignUpDataType = z.infer<typeof SignUpDataType>;

export const LogDataType = z.object({
  email: z.string({ required_error: "email address is required " }).email(),
  password: z
    .string({ required_error: "password is required " })
    .min(6, "length must be 6 letters or above"),
});
export type LogDataType = z.infer<typeof LogDataType>;
