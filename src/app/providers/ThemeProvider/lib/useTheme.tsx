import { useContext } from "react";
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../lib/ThemeContext";


interface UseThemeResult {
  toggleTheme: () => void;
  theme: ETheme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === ETheme.Dark ? ETheme.Light : ETheme.Dark;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme
  };
}