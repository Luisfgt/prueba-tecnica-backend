import mongoose, { Document } from "mongoose";

interface articulosGonzalez46 extends Document {
    image: string;
    name: string;
    price: number;
    quantity: number;
    category: string;
}

const articulosGonzalez46ModelSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, required: true }
})

const articulosGonzalez46Model = mongoose.model<articulosGonzalez46>("articulosGonzalez46Model", articulosGonzalez46ModelSchema)
export default articulosGonzalez46Model;