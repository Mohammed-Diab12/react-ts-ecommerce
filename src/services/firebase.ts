import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUZ0MaEISk_t330W-fuMLoIlsTPikDcx8",
  authDomain: "camaro-b1795.firebaseapp.com",
  databaseURL: "https://camaro-b1795-default-rtdb.firebaseio.com",
  projectId: "camaro-b1795",
  storageBucket: "camaro-b1795.firebasestorage.app",
  messagingSenderId: "487397149266",
  appId: "1:487397149266:web:8fe41052631dab8c34ad8b",
  measurementId: "G-LDC4VDE2F2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);