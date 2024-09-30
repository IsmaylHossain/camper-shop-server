import mongoose, { model, Schema, Document } from "mongoose";



export interface Order extends Document {
    name: string;
    email: string;
    phone: string;
    address: string;
    paymentMethod: string;
}

export const OrderSchema = new Schema<Order>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
});
