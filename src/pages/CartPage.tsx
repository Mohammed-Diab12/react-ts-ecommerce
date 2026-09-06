import {
  Container,
  Typography,
  Grid,
  CircularProgress,
  Box,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { calculateCartSummary } from "../components/cart/utils";
import CartTable from "../components/cart/CartTable";
import CartSummaryBox from "../components/cart/CartSummaryBox";
import type { CartItem } from "../types";

function CartPage() {
  const { items, loading, updateQuantity, removeItem } = useCart();

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  const mockCartItems: CartItem[] = [
    {
      productId: "1",
      title: "Asus TUF FX504GE-E4059T",
      price: 399,
      thumbnail: "https://picsum.photos/seed/laptop1/64/64",
      quantity: 1,
    },
    {
      productId: "2",
      title: "HP Pavilion x360 14-ba062TU",
      price: 599,
      thumbnail: "https://picsum.photos/seed/laptop2/64/64",
      quantity: 2,
    },
  ];

  const summary = calculateCartSummary(items);

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Shopping Cart
      </Typography>
      <Grid container spacing={5}>
        <Grid sx={{ xs: 12, md: 8 }}>
          <CartTable
            items={mockCartItems}
            onQuantityChange={updateQuantity}
            onRemove={removeItem}
          />
        </Grid>
        <Grid sx={{ xs: 12, md: 4 }}>
          <CartSummaryBox summary={summary} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CartPage;
