import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { CartProvider } from "./context/CartContext";
import { AppThemeProvider } from "./theme/ThemeProvider";
function App() {
  return (
    <AppThemeProvider>
    <CartProvider>
      <>
      <RouterProvider router={router} />
      </>
    </CartProvider>
    </AppThemeProvider>
  );
}

export default App;
