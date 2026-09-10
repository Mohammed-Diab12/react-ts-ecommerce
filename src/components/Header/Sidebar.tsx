import { useState, useRef } from "react";
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Divider,
  Typography,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { HeaderActions } from "../headerAction/HeaderAction";
import { ThemeToggleButton } from "../themeToggleButton/ThemeToggleButton";

const pages = [
  { name: "HOME", path: "/" },
  { name: "SHOP", path: "/" },
  { name: "PAGES", path: "/cart" },
  { name: "LOOKBOOK", path: "/cart" },
  { name: "BRANDS", path: "/cart" },
];

function Sidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const themeBoxRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const handleThemeRowClick = () => {
    const button = themeBoxRef.current?.querySelector("button");
    button?.click();
  };

  return (
    <>
      <IconButton
        aria-label="Open menu"
        onClick={handleToggle}
        sx={{ display: { xs: "inline-flex", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={handleToggle}>
        <Box sx={{ width: 280, display: "flex", flexDirection: "column", height: "100%" }}>
          {/* Logo row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1.5,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, color: "brand.main" }}>
              CAMARO
            </Typography>
            <IconButton aria-label="Close menu" onClick={handleToggle}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          {/* Nav links, stacked */}
          <List sx={{ py: 0 }}>
            {pages.map((page) => (
              <ListItemButton key={page.name} onClick={() => handleNavigate(page.path)}>
                <ListItemText primary={page.name} />
              </ListItemButton>
            ))}
          </List>

          <Divider />

          {/* Theme toggle row */}
          <Box
            ref={themeBoxRef}
            onClick={handleThemeRowClick}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1.5,
              cursor: "pointer",
            }}
          >
            <ThemeToggleButton />
            <Typography variant="body2">Theme</Typography>
          </Box>

          {/* Header actions, stacked vertically */}
          <Stack spacing={0.5} sx={{ px: 2, py: 1.5, flexGrow: 1 }}>
            <HeaderActions />
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

export default Sidebar;