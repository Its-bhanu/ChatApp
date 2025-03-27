import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "light",
  setTheme: (theme) => {
    Storage.setItem("chat-theme", theme);
    set({ theme });
  },
}));
