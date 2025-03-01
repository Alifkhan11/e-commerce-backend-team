import { z } from "zod";

const productsCreateValidationSchema = z.object({
    body:z.object({
        name: z.string().min(1, "Name is required"),
        price: z.number().min(1, "Price is required"),
        description: z.string().min(1, "Description is required"),
        img: z.string().min(1, "Image is required"),
        category: z.string().min(1, "Category is required"),
    })
})

export const ProductsValidation={
    productsCreateValidationSchema
}