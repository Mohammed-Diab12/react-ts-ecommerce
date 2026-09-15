import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authServices";

const pages = [
  { name: "HOME", path: "/" },
  { name: "SHOP", path: "/" },
  { name: "PAGES", path: "/cart" },
  { name: "LOOKBOOK", path: "/cart" },
  { name: "BRANDS", path: "/cart" },
];

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        top: 0,
        zIndex: 1000,
        bgcolor: { xs: "transparent", md: "brand.main" },
        boxShadow: { xs: "none", md: undefined },
      }}
    >
      <Toolbar disableGutters>
        <Container>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigate(page.path)}
                sx={{
                  py: 1,
                  color: "background.paper",
                  display: "block",
                  fontWeight: 600,
                }}
              >
                {page.name}
              </Button>
            ))}
            <Button onClick={handleLogout}>Logout</Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
