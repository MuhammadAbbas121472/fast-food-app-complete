import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import CartProvider from "./context/CartContext";
import WishlistProvider from "./context/WishlistContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <WishlistProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishlistProvider>
    </HashRouter>
  </StrictMode>
);