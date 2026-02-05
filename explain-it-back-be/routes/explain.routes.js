import express from "express";
import { explainTopic } from "../controllers/explain.controller.js";

const router = express.Router();

router.post("/explain", explainTopic);

export default router;
