import { useCart } from "../../Context/CartContext";
import CartPage from "./CartPage";
import CartPay from "./CartPay";
import "./cart.css";
import ProductInCart from "./ProductInCart";
import Footer from "./Footer";
// import { useCart } from "../../Context/CartContext";
const Cart = () => {
  return (
    <div className="cartMain">
      <div className="container">
        <CartPage />
        <CartPay />
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
