import axios from "axios";

const API_BASE_URL = "http://localhost:8000"; 

export const chatWithBot = async (question: string) => {
  const form = new FormData();
  form.append("question", question);

  const response = await axios.post(`${API_BASE_URL}/chatbot/chat`, form);
  return response.data;
};

export const uploadDocument = async (file: File) => {
  const form = new FormData();
  form.append("file", file);

  const response = await axios.post(`${API_BASE_URL}/documents/upload`, form);
  return response.data;
};

export const analyzeChatFile = async (file: File) => {
  const form = new FormData();
  form.append("file", file);

  const response = await axios.post(`${API_BASE_URL}/analyze/analyze`, form);
  return response.data;
};
