import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-sxko.vercel.app" : "/api",
  withCredentials: true,
});
