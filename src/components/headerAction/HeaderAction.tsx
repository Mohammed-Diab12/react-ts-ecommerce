import { Box, IconButton, Badge, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../cart/utils";

export const HeaderActions = () => {
  const { items, itemCount } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <IconButton aria-label="Compare products">
        <Badge badgeContent={0} color="error">
          <CompareArrowsIcon />
        </Badge>
      </IconButton>

      <IconButton aria-label="Wishlist">
        <Badge badgeContent={0} color="error">
          <FavoriteBorderIcon />
        </Badge>
      </IconButton>

      <Box
        component={Link}
        to="/cart"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <IconButton aria-label="Shopping cart" component="span">
          <Badge badgeContent={itemCount} color="error">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>

        <Box sx={{ lineHeight: 1.3 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "text.primary",fontSize: "0.870rem" }}>
            Your Cart
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {formatPrice(subtotal)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};