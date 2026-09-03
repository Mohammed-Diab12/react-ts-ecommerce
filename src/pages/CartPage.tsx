import { Container, Typography, CircularProgress, Box } from "@mui/material";
import { useCart } from "../context/CartContext";
import { calculateCartSummary } from "../components/cart/utils";
import CartTable from "../components/cart/CartTable";
import CartSummaryBox from "../components/cart/CartSummaryBox";
import type { CartItem } from "../types";

function CartPage() {
  const { items, loading, updateQuantity, removeItem } = useCart();

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Shopping Cart
      </Typography>
    </Container>
  );
}

export default CartPage;
