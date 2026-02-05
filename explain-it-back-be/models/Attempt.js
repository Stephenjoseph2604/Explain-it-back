import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema({
  topic: String,
  studentAnswer: String,
  score: Number,
  feedback: Object,
}, { timestamps: true });

export default mongoose.model("Attempt", attemptSchema);
