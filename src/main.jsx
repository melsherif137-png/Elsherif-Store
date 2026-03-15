import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import toast, { Toaster } from "react-hot-toast";
import { HashRouter as Router } from "react-router-dom";
import { SavedContext } from "./Context/SavedContext.jsx";

import { CartProvider } from "./Context/CartContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <SavedContext>
        <Toaster />
        <Router>
          <App />
        </Router>
      </SavedContext>
    </CartProvider>
  </StrictMode>,
);
