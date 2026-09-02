import { Stack, Typography } from "@mui/material";
import type { Product } from "../../types";

export interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const discount = product.discountPercentage ?? 0;
  const finalPrice = product.price * (1 - discount / 100);

  return (
    <Stack spacing={2}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {product.title}
      </Typography>

      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#c0392b" }}
        >
          ${finalPrice.toFixed(2)}
        </Typography>

        {discount > 0 && (
          <Typography
            sx={{
              textDecoration: "line-through",
              color: "text.secondary",
            }}
          >
            ${product.price.toFixed(2)}
          </Typography>
        )}
      </Stack>

      <Typography
        variant="body1"
        sx={{ fontWeight: 300, fontSize: "0.858rem" }}
      >
        {product.description}
      </Typography>
    </Stack>
  );
};