import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-me112.vercel.app/api" : "/api",
  withCredentials: true,
});