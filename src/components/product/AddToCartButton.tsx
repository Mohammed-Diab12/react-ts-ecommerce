import { useState } from "react";
import { Button } from "@mui/material";
import { useCart } from "../../context/CartContext";
import type { Product } from "../../types";

export interface AddToCartActionsProps {
  product: Product;
  quantity: number;
}

export const AddToCartActions = ({ product, quantity }: AddToCartActionsProps) => {
  const { addItem } = useCart();
  const [loading, setLoading] = useState(false);

  const finalPrice =
    product.price * (1 - (product.discountPercentage ?? 0) / 100);

  const handleAddToCart = async () => {
    setLoading(true);
    await addItem(
      {
        productId: product.id,
        title: product.title,
        price: finalPrice,
        thumbnail: product.thumbnail,
      },
      quantity,
    );
    setLoading(false);
  };

  return (
    <Button
      variant="contained"
      onClick={handleAddToCart}
      disabled={loading}
      sx={{ backgroundColor: "black",px: 2, "&:hover": { backgroundColor: "text.secondary" } }}
    >
      {loading ? "ADDING..." : "ADD TO CART"}
    </Button>
  );
};