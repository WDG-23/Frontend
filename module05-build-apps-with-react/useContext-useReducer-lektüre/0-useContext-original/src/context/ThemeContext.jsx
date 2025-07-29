import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return <ThemeContext value={user}>{children}</ThemeContext>;
};

export default ThemeContext;
