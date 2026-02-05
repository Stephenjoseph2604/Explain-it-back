import { GoogleGenAI } from "@google/genai";

// Initialize Gemini client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY, // keep it in ENV
});

export const evaluateExplanation = async (topic, answer) => {
  try {
    const prompt = `
You are an expert teacher.

Topic: ${topic}

Student Explanation:
"${answer}"

Return ONLY valid JSON in this exact format:
{
  "correctPoints": [],
  "missingPoints": [],
  "score": 0,
  "improvedExplanation": ""
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const text = response.text;

    // 🛡️ Safety: extract JSON only
    const jsonStart = text.indexOf("{");
    const jsonEnd = text.lastIndexOf("}");

    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error("Invalid JSON returned by Gemini");
    }

    const cleanJson = text.substring(jsonStart, jsonEnd + 1);
    return JSON.parse(cleanJson);

  } catch (error) {
    console.error("Gemini Evaluation Error:", error.message);
    throw error;
  }
};
