import axios from "axios";

const api = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_APP_URL,
  headers: { "Content-Type": "application/json" },
});

export default api;
