import "./cartItems.css";
import ItemInCartItem from "./ItemInCartItem";
import { useCart } from "../../Context/CartContext";
import ExInCart from "./ExInCart";
import { motion, AnimatePresence } from "framer-motion";

const CartItems = ({ setShow, show }) => {
  const { cartItems, setCartItems } = useCart();

  const grandTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className={`cart-items ${show ? "open" : ""}`}>
      <div className="top">
        <ExInCart setShow={setShow} />
      </div>
      <div className="container">
        <AnimatePresence mode="popLayout">
          {cartItems.map((item) => (
            <motion.div key={item.id} layout>
              <ItemInCartItem item={item} />
            </motion.div>
          ))}
        </AnimatePresence>

        {cartItems.length === 0 && (
          <motion.h3
            className="Empty"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            Your cart is empty
          </motion.h3>
        )}

        <motion.div
          layout
          className="footer"
          transition={{ duration: 0.4, delay: 0.4 }}
        >
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
