import Navbar from "./Navbar";
import { ThemeToggleButton } from "../themeToggleButton/ThemeToggleButton";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <>
      <Typography variant="h2" color="initial">
        Header
      </Typography>
      <ThemeToggleButton />
      <Navbar />
    </>
  );
}

export default Header;