import { useState, useMemo, type ReactNode } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeContext, type ThemeMode } from "../context/ThemeContext";
import { lightThemeOptions } from "../theme/LightTheme";
import { darkThemeOptions } from "../theme/DarkTheme";

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () => createTheme(mode === "light" ? lightThemeOptions : darkThemeOptions),
    [mode],
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};