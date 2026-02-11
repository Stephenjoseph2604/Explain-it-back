import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const explainAPI = async (data: {
  topic: string;
  answer: string;
}) => {
  return await axios.post(
    `${API_BASE_URL}/api/explain`,
    data
  );
};
