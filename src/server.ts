import app from "./app";
import dotenv from "dotenv";
import connectDB from "./database";

dotenv.config();

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});