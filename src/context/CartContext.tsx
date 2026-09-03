import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import type { CartItem } from "../types";
import {
  getCartId,
  getCart,
  addToCart as addToCartService,
  updateCartItem as updateCartItemService,
  removeFromCart as removeFromCartService,
  clearCart as clearCartService,
} from "../services/cartService";

interface CartContextValue {
  items: CartItem[];
  loading: boolean;
  itemCount: number;
  addItem: (
    product: Pick<CartItem, "productId" | "title" | "price" | "thumbnail">,
    quantity?: number,
  ) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  removeItem: (productId: string) => Promise<void>;
  clearAll: () => Promise<void>;
  refresh: () => Promise<void>;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartId, setCartId] = useState<string | null>(null);
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    const id = cartId ?? (await getCartId());
    if (!cartId) setCartId(id);
    const cartItems = await getCart(id);
    setItems(cartItems);
    setLoading(false);
  }, [cartId]);

  // Resolve the cart on first mount
  useEffect(() => {
    (async () => {
      const id = await getCartId();
      setCartId(id);
      const cartItems = await getCart(id);
      setItems(cartItems);
      setLoading(false);
    })();
  }, []);

  const addItem: CartContextValue["addItem"] = async (
    product,
    quantity = 1,
  ) => {
    if (!cartId) return;
    await addToCartService(cartId, product, quantity);
    await refresh();
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    if (!cartId) return;
    setItems((prev) =>
      prev
        .map((item) =>
          item.productId === productId ? { ...item, quantity } : item,
        )
        .filter((item) => item.quantity > 0),
    );
    await updateCartItemService(cartId, productId, quantity);
    await refresh();
  };

  const removeItem = async (productId: string) => {
    if (!cartId) return;
    setItems((prev) => prev.filter((item) => item.productId !== productId));
    await removeFromCartService(cartId, productId);
    await refresh();
  };

  const clearAll = async () => {
    if (!cartId) return;
    setItems([]);
    await clearCartService(cartId);
  };

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const value: CartContextValue = {
    items,
    loading,
    itemCount,
    addItem,
    updateQuantity,
    removeItem,
    clearAll,
    refresh,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
