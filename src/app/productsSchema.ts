import mongoose, { model, Schema, Document } from "mongoose";


export interface Product extends Document {
    name: string;
    image: string;
    description: string;
    category: string;
    price: number;
    quantity: number;
    stock: boolean;
    rating: number;
}

export const productsSchema = new Schema<Product>({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    stock: {
        type: Boolean,
        default: true,
    },
    rating: {
        type: Number,
        required: true,
    },
});
