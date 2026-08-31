import { Stack, Typography } from "@mui/material";
import type { Product } from "../../types";

export interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <Stack spacing={2}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {product.title}
      </Typography>

      <Typography variant="h6"  
      sx={{ fontWeight: "bold",
           color: "#c0392b",
       }}>
        ${product.price.toFixed(2)}
      </Typography>

      <Typography variant="body1" component="p" sx={{color: "#4b5563" }}>
        {product.description}
      </Typography>
    </Stack>
  );
};