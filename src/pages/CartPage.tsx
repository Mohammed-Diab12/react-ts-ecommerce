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
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 3, sm: 4, md: 6 },
        px: { xs: 2, sm: 3 },
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: { xs: 3, md: 4 },
          fontSize: { xs: "1.8rem", sm: "2.125rem" },
        }}
      >
        Shopping Cart
      </Typography>

      {items.length === 0 ? (
        <CartEmpty />
      ) : (
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 3, lg: 4 }}
          sx={{
            width: "100%",
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              flex: { lg: 2 },
              width: "100%",
              minWidth: 0,
            }}
          >
            <CartTable
              items={items}
              onQuantityChange={updateQuantity}
              onRemove={removeItem}
            />
          </Box>

          <Box
            sx={{
              flex: { lg: 1 },
              width: "100%",
              minWidth: 0,
            }}
          >
            <CartSummaryBox summary={summary} />
          </Box>
        </Stack>
      )}
    </Container>
  );
}

export default CartPage;