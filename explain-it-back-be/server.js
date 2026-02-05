import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import explainRoutes from "./routes/explain.routes.js";

dotenv.config();
connectDB();
 
const app = express();

app.use(cors());
app.use(express.json());

// 👇 THIS LINE IS CRITICAL
app.use("/api", explainRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
