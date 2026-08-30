import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import type { Product } from "../types";

const products_Collections = "products";
const productsCollection = collection(db, products_Collections);

const mapDocToProduct = (docSnap: QueryDocumentSnapshot): Product => {
  const data = docSnap.data();
  return {
    id: docSnap.id,
    category: data.category,
    description: data.description,
    images: data.images,
    price: data.price,
    stock: data.stock,
    thumbnail: data.thumbnail,
    title: data.title,
  };
};

// Fetch all products from the products collection
export const getAllProducts = async (): Promise<Product[]> => {
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map(mapDocToProduct);
};

// Fetch products belonging to a single category
export const getProductsByCategory = async (
  category: Product["category"],
): Promise<Product[]> => {
  const productsQuery = query(
    productsCollection,
    where("category", "==", category),
  );
  const snapshot = await getDocs(productsQuery);
  return snapshot.docs.map(mapDocToProduct);
};

// Fetch a single product by id, or null if it doesn't exist
export const getProductById = async (id: string): Promise<Product | null> => {
  const productRef = doc(db, products_Collections, id);
  const productSnap = await getDoc(productRef);

  if (!productSnap.exists()) {
    return null;
  }
  const data = productSnap.data();
  return {
    id: productSnap.id,
    category: data.category,
    description: data.description,
    images: data.images,
    price: data.price,
    stock: data.stock,
    thumbnail: data.thumbnail,
    title: data.title,
  };
};
