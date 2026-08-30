// Product
export type ProductCategory =
  | "Smartphone & Tablet"
  | "Audio & Sound"
  | "Laptop";

export interface Product {
  id: string;
  category: ProductCategory;
  title: string;
  description: string;
  images: string[];
  thumbnail: string;
  price: number;
  // Original price before discount
  oldPrice?: number;
  stock: number;
  sku: string;
}

// Cart
export interface CartItem {
  productId: string;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

export interface CartSummary {
  subtotal: number;
  shipping: number;
  total: number;
}
