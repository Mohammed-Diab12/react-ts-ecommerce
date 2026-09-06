import {
  Container,
  Typography,
  Stack,
  CircularProgress,
  Box,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { calculateCartSummary } from "../components/cart/utils";
import CartTable from "../components/cart/CartTable";
import CartSummaryBox from "../components/cart/CartSummaryBox";
import CartEmpty from "../components/cart/CartEmpty";

function CartPage() {
  const { items, loading, updateQuantity, removeItem } = useCart();

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  const summary = calculateCartSummary(items);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Shopping Cart
      </Typography>
      {items.length == 0 ? (
        <CartEmpty />
      ) : (
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{ alignItems: "flex-start" }}
        >
          <Box sx={{ flex: { md: 2 }, width: "90%" }}>
            <CartTable
              items={items}
              onQuantityChange={updateQuantity}
              onRemove={removeItem}
            />
          </Box>
          <Box sx={{ flex: { md: 1 }, width: "90%" }}>
            <CartSummaryBox summary={summary} />
          </Box>
        </Stack>
      )}
    </Container>
  );
}

export default CartPage;
