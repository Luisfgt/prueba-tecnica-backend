import cors = require("cors");
import express from "express";
import preciosEspecialesRoute from "./routes/preciosEspecialesRoutes.routes";
import articulosRoute from "./routes/articulos.route";


const app = express();
app.use(cors());
app.use(express.json());
app.use('/user', preciosEspecialesRoute)
app.use('/articulos', articulosRoute)

export default app;
