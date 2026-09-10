import { IconButton, Typography, Box } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeMode } from "../../context/ThemeContext";

export const ThemeToggleButton = () => {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Box
      onClick={toggleTheme}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        cursor: "pointer",
      }}
    >
      <IconButton aria-label="Toggle theme">
        {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>

      {/* Label visible only on small screens */}
      <Typography
        variant="body2"
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        Theme
      </Typography>
    </Box>
  );
};