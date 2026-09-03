import type { CartItem, CartSummary } from "../../types";

const FLAT_SHIPPING_RATE = 5;

export const calculateCartSummary = (items: CartItem[]): CartSummary => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = items.length > 0 ? FLAT_SHIPPING_RATE : 0;
  return {
    subtotal,
    shipping,
    total: subtotal + shipping,
  };
};
export const formatPrice = (num: number): string => {
  return `$${num.toFixed(2)}`;
};
