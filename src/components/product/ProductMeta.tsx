import type { Product } from '../../types'
import { Stack, Typography } from '@mui/material';

export interface ProductMetaProps {
  product: Product;
  quantity: number;
}

 export const ProductMeta = ({ product, quantity }: ProductMetaProps) =>{
  return (
    <Stack spacing={3}>
      <Typography sx={{color:"text.secondary", fontSize: "0.75rem"}}>
        {product.title} is available to buy in increments of {quantity}
      </Typography>
      <Typography sx={{color:"text.secondary", fontSize: "0.870rem"}} >
        SKU: {product.sku}
      </Typography>
    </Stack>
  );
};