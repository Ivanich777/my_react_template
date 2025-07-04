import React, { FC, useMemo, useState } from "react";
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from "app/providers/ThemeProvider/lib/ThemeContext";


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.Light;

const ThemeProvider: FC = ({ children }) => {

  const [theme, setTheme] = useState<ETheme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;