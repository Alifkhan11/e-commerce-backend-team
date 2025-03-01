import { model, Schema } from "mongoose";
import { TProducts } from "./products.interfatch";

const productsSchema = new Schema<TProducts>({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default:false
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }
});

export const Products = model<TProducts>('Products', productsSchema);