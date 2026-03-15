import "./cartItems.css";
import ItemInCartItem from "./ItemInCartItem";
import { useCart } from "../../Context/CartContext";
import ExInCart from "./ExInCart";
import { motion } from "framer-motion";

const CartItems = ({ setShow, show }) => {
  const { cartItems } = useCart();
  const { setCartItems } = useCart();
  const grandTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className={`cart-items ${show ? "open" : ""}`}>
      <div className="top">
        <ExInCart setShow={setShow} />
      </div>
      <div className="container">
        {cartItems.map((item, index) => {
          return <ItemInCartItem key={item.id} item={item} />;
        })}

        {cartItems.length === 0 && (
          <h3 className="Empty">Your cart is empty</h3>
        )}

        <motion.div layout className="footer">
  {cartItems.length > 0 && (
    <motion.h1 layout className="AllTotal">
      Total Price : ${grandTotal.toLocaleString()}
    </motion.h1>
  )}
  {cartItems.length > 0 && (
    <motion.div
      layout
      className="ClearButton"
      onClick={() => setCartItems([])}
    >
      Clear All
      <span className="button-border"></span>
    </motion.div>
  )}
</motion.div>
      </div>
    </div>
  );
};

export default CartItems;
