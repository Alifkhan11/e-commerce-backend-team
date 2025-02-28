import { z } from "zod";

const userCreatedValidationSchema = z.object({
    body: z.object({
        name: z.string().min(3).max(50),
        email: z.string().email(),
        password: z.string().min(6).max(50),
        role: z.enum(["admin", "user"]).default("user"),
        isDeleted: z.boolean().default(false),
    })
})


export const UserCreatedValidation = {
    userCreatedValidationSchema
} 