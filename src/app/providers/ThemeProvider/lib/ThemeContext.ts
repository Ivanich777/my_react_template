import { createContext } from "react";

export enum ETheme {
  Light = "light",
  Dark = "dark"
}

export interface ThemeContextProps {
  theme?: ETheme;
  setTheme?: (theme: ETheme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";