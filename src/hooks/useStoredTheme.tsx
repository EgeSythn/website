import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  colorScheme: "light" | "dark";
  toggleColorScheme: (value?: "light" | "dark") => void;
};

const localStorageMiddleware = {
  getItem: (name: string) =>
    Promise.resolve(JSON.parse(localStorage.getItem(name) || "null")),
  setItem: (name: string, value: any) =>
    localStorage.setItem(name, JSON.stringify(value)),
  removeItem: (name: string) => localStorage.removeItem(name),
};

const useStoredTheme = create(
  persist(
    (set) => ({
      colorScheme: "light",
      toggleColorScheme: (value: ThemeState["toggleColorScheme"]) => {
        set((state: any) => ({
          colorScheme:
            value || (state.colorScheme === "dark" ? "light" : "dark"),
        }));
      },
    }),
    {
      name: "caams:theme",
      storage: localStorageMiddleware,
      partialize: (state: any) => ({
        colorScheme: state.colorScheme,
      }),
    }
  )
);

export default useStoredTheme;
