import { Router } from "express";
import preciosEspecialesGonzalez46Model from "../models/preciosEspecialesGonzalez46.model";

const router = Router();

const findUserByEmail = async (email: string) => {
    const user = await preciosEspecialesGonzalez46Model.findOne({
        email: email
    });
    if (user) {
        return user;
    } else {
        return false
    }
}

router.post("/auth", async (req, res) => {
    try {
        const { password, email } = req.body;
        const data = await preciosEspecialesGonzalez46Model.findOne({
            email: email,
            password: password
        });



        if (data) {
            res.status(200).json({
                success: true,
                message: "Usuario autenticado",
            })
        } else {
            res.status(401).json({
                success: false,
                message: "El usuario no existe o la contraseña es incorrecta",
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
})


router.post("/register", async (req, res) => {
    try {
        const {
            name,
            password,
            email,
            categoryDiscount
        } = req.body;

        const user = await findUserByEmail(email);
        console.log(user);

        if (user) {
            res.status(400).json({
                success: false,
                message: "El usuario ya existe"
            })
        } else {
            const createArticle = await preciosEspecialesGonzalez46Model.create({
                name,
                password,
                email,
                categoryDiscount
            })

            if (createArticle) {
                res.status(200).json({
                    success: true,
                    message: "Usuario creado correctamente",
                })
            } else {
                res.status(401).json({
                    success: false,
                    message: "Error al crear el usuario"
                })
            }
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
});

export default router;
