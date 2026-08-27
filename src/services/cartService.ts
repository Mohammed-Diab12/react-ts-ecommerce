import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  runTransaction,
  writeBatch,
  increment,
  QueryDocumentSnapshot,
}
 from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  type User,
} from "firebase/auth";
import { db } from "./firebase";

export interface CartItem {
  productId: string;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

//The cart uses the user's Firebase UID, while Firebase Auth manages the session.
const getCurrentUser = (): Promise<User> => {
  const auth = getAuth();
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        if (user) {
          resolve(user);
          return;
        }
        signInAnonymously(auth)
          .then((credential) => resolve(credential.user))
          .catch(reject);
      },
      reject
    );
  });
};
export const getCartId = async (): Promise<string> => {
  const user = await getCurrentUser();
  return user.uid;
};
const getCartItemsCollection = (cartId: string) =>
  collection(db, "carts", cartId, "items");

// Map a Firestore document to a CartItem
const mapDocToCartItem = (docSnap: QueryDocumentSnapshot): CartItem => {
  const data = docSnap.data();
  return {
    productId: docSnap.id,
    title: data.title,
    price: data.price,
    thumbnail: data.thumbnail,
    quantity: data.quantity,
  };
};

 //Fetch all items currently in the cart
export const getCart = async (cartId: string): Promise<CartItem[]> => {
  const snapshot = await getDocs(getCartItemsCollection(cartId));
  return snapshot.docs.map(mapDocToCartItem);
};

  //Adds a product to the cart or increases its quantity if it already exists
export const addToCart = async (
  cartId: string,
  product: Pick<CartItem, "productId" | "title" | "price" | "thumbnail">,
  quantity = 1
): Promise<void> => {
  const itemRef = doc(getCartItemsCollection(cartId), product.productId);
  await runTransaction (db, async (transaction)=>{
    const itemSnap = await transaction.get(itemRef);
  
  if (itemSnap.exists()) {
    transaction.update(itemRef, {
      quantity: increment (quantity),
    });
  
    return;
  }
  transaction.set(itemRef, {
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
    quantity,
  });
});
};

//Updates the cart item's quantity or removes it if the quantity is 0
export const updateCartItem = async (
  cartId: string,
  productId: string,
  quantity: number
): Promise<void> => {
  if (quantity <= 0) {
    await removeFromCart(cartId, productId);
    return;
  }
  const itemRef = doc(getCartItemsCollection(cartId), productId);
  await runTransaction (db, async (transaction)=>{
    const itemSnap = await transaction.get(itemRef);
    if (!itemSnap.exists()){
      throw new Error("Item not found in cart");
    }
    transaction.update(itemRef, {quantity});
  });
};

 // Remove a single item from the cart
export const removeFromCart = async (
  cartId: string,
  productId: string
): Promise<void> => {
  const itemRef = doc(getCartItemsCollection(cartId), productId);
  await deleteDoc(itemRef);
};

 //Remove all items from the cart
export const clearCart = async (cartId: string): Promise<void> => {
  const snapshot = await getDocs(getCartItemsCollection(cartId));
  const batch = writeBatch(db);
  snapshot.docs.forEach((docSnap) => batch.delete(docSnap.ref));
  await batch.commit();
};