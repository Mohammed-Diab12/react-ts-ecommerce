import type { ThemeOptions } from "@mui/material/styles";

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#D94F5C",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
   secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
};