import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://chat-me112.vercel.app/api',
  withCredentials: true,
});