import Attempt from "../models/Attempt.js";
import { evaluateExplanation } from "../services/gemini.service.js";

export const explainTopic = async (req, res) => {
  const { topic, answer } = req.body;

  const aiResult = await evaluateExplanation(topic, answer);

  const attempt = await Attempt.create({
    topic,
    studentAnswer: answer,
    score: aiResult.score,
    feedback: aiResult,
  });

  res.json(attempt);
};
