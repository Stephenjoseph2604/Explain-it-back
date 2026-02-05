// src/api/explainAPI.ts
import axios from "axios"

export const explainAPI = async (data: { topic: string; answer: string }) =>
  await axios.post("http://localhost:5000/api/explain", data)
