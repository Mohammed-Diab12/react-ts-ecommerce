import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import type { CartSummary } from "../../types";

interface CartSummaryBoxProps {
  summary: CartSummary;
  onCheckout: () => void;
}

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <Stack direction="row" sx={{ py: 1.5, justifyContent: "space-between" }}>
    <Typography sx={{ fontWeight: 400 }}>{label}</Typography>
    <Typography sx={{ fontWeight: 400 }}>{value}</Typography>
  </Stack>
);

const CartSummaryBox = ({ summary, onCheckout }: CartSummaryBoxProps) => {
  return (
    <Paper variant="outlined" sx={{ p: 3 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
        Summary
      </Typography>
      <Divider />
      <SummaryRow label="Subtotal" value={`$${summary.subtotal}`} />
      <Divider />
      <SummaryRow
        label="Shipping (Flat Rate - Fixed)"
        value={`$${summary.shipping}`}
      />
      <Divider />
      <SummaryRow label="Order Total" value={`$${summary.total}`} />

      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Button
          variant="contained"
          color="error"
          fullWidth
          onClick={onCheckout}
          sx={{ py: 1.5, fontWeight: 700 }}
        >
          GO TO CHECKOUT
        </Button>
        <Typography sx={{ mt: 2, fontSize: 14 }}>
          Check Out with Multiple Addresses
        </Typography>
      </Box>
    </Paper>
  );
};

export default CartSummaryBox;
