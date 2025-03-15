import mongoose, { Document } from "mongoose";

interface PreciosEspecialesGonzalez46 extends Document {
    name: string;
    password: string;
    email: string;
    discount: number;
    categoryDiscount: string;
}

const discountRandom: number = Math.random() * (1 - 0.1) + 0.1

const preciosEspecialesGonzalez46Schema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    discount: { type: Number, required: true, default: discountRandom },
    categoryDiscount: { type: String, required: true }
})

const preciosEspecialesGonzalez46Model = mongoose.model<PreciosEspecialesGonzalez46>("preciosEspecialesGonzalez46", preciosEspecialesGonzalez46Schema)
export default preciosEspecialesGonzalez46Model;