import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import type { CartSummary } from "../../types";
import { formatPrice } from "../cart/utils";

interface CartSummaryBoxProps {
  summary: CartSummary;
}

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <Stack direction="row" sx={{ py: 1.5, justifyContent: "space-between" }}>
    <Typography sx={{ fontWeight: 400, color: "text.secondary" }}>{label}</Typography>
    <Typography sx={{ fontWeight: 400, color:"content.main"}} >{value}</Typography>
  </Stack>
);

const CartSummaryBox = ({ summary }: CartSummaryBoxProps) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: { xs: 2, sm: 3 },
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          mb: 2,
          color: "content.main",

        }}
      >
        Summary
      </Typography>
      <Divider />
      <SummaryRow label="Subtotal" value={formatPrice(summary.subtotal)}  />
      <Divider />
      <SummaryRow
        label="Shipping (Flat Rate - Fixed)"
        value={formatPrice(summary.shipping)}
      />
      <Divider />
      <SummaryRow label="Order Total" value={formatPrice(summary.total)} />
      <Box
        sx={{
          textAlign: "center",
          mt: 3,
        }}
      >
        <Button
          variant="contained"
          color="error"
          sx={{
            backgroundColor: "primary.main",
            color: "background.default",
            py: 1.5,
            mt: 2,
            mb: 2,
            fontWeight: 700,
            wordSpacing: 2,
            width: { xs: "100%", sm: "70%", md: "80%" },
          }}
        >
          GO TO CHECKOUT
        </Button>
        <Typography
          sx={{
            mt: 2,
            fontSize: 14,
          }}
        >
          Check Out with Multiple Addresses
        </Typography>
      </Box>
    </Paper>
  );
};

export default CartSummaryBox;