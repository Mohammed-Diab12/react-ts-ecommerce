import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    content: Palette["primary"];
  }

  interface PaletteOptions {
    content?: PaletteOptions["primary"];
  }
}