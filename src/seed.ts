import mongoose from "mongoose";
import dotenv from "dotenv";
import preciosEspecialesGonzalez46Model from "./models/preciosEspecialesGonzalez46.model";


dotenv.config(); // Cargar variables de entorno

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Conectado a MongoDB 🚀");

        const newDoc = new preciosEspecialesGonzalez46Model({
            name: "Luis Gonzalez",
            password: "securepassword123",
            email: "luis@example.com",
            discount: Math.random() * (1 - 0.1) + 0.1, // Número aleatorio entre 0.1 y 1
            categoryDiscount: "Tecnología"
        });

        await newDoc.save();
        console.log("Documento insertado 🎉");

        mongoose.connection.close(); // Cerrar la conexión después de insertar
        console.log("Conexión cerrada ✅");
    } catch (error) {
        console.error("Error insertando documento ❌", error);
        mongoose.connection.close();
    }
};

seedDB();
