import { Router } from "express";
import articulosGonzalez46Model from "../models/articulos.model";

const router = Router();

router.get("/", async (req, res) => {
    try {

        const data = await articulosGonzalez46Model.find();
        if (data) {
            res.status(200).json({
                success: true,
                data: data
            })
        } else {
            res.status(401).json({
                success: false,
                message: "No hay articulos en la tienda"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
});



export default router;