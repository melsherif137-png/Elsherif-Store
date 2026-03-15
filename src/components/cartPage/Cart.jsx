import CartPage from "./CartPage";
import CartPay from "./CartPay";
import "./cart.css";
import Footer from "./Footer";
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
