import { createContext, useState } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = createContext({
  theme: themes.dark,
  setTheme: () => null,
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);
  const value = { theme, setTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
