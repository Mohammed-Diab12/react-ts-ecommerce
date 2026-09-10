import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    content: Palette["primary"];
    brand: Palette["primary"];
  }

  interface PaletteOptions {
    content?: PaletteOptions["primary"];
    brand?: PaletteOptions["primary"];
  }
}