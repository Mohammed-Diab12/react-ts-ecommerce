import type { ThemeOptions } from "@mui/material/styles";

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#ab1d2b",
    },
    background: {
      default: "#ffffff",
      paper: "#f9f9f9",
    },
    secondary: {
      main: "#f50057",
    },
  
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
};