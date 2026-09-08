import { Box, Typography, Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link as RouterLink } from "react-router-dom";

const CartEmpty = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
      }}
    >
      <ShoppingCartOutlinedIcon
        sx={{ fontSize: 70, color: "text.disabled", mb: 2 }}
      />
      <Typography variant="h6" sx={{ mb: 1 }}>
        Your cart is empty
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Looks like you haven&apos;t added anything to your cart yet.
      </Typography>
      <Button
        component={RouterLink}
        to="/"
        variant="contained"
        color="error"
        sx={{ fontWeight: 600, px: 4, py: 1.2 }}
      >
        CONTINUE SHOPPING
      </Button>
    </Box>
  );
};
export default CartEmpty;