import "./cartItems.css";
import ItemInCartItem from "./ItemInCartItem";
import { useCart } from "../../Context/CartContext";
import ExInCart from "./ExInCart";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";
import { Link } from "react-router-dom";

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
        {/* Cart Items List */}
        <AnimatePresence mode="popLayout">
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <ItemInCartItem item={item} />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Empty Cart Message */}
        <AnimatePresence>
          {cartItems.length === 0 && (
            <div className="empty-cart">
              <motion.h3
                className="Empty"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.4 }}
              >
                Your cart is empty
              </motion.h3>
              <Link to="/store">
                <motion.button
                  onClick={() => {
                    setShow(false);
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  Continue Shopping
                </motion.button>
              </Link>
            </div>
          )}
        </AnimatePresence>

        {/* Footer */}
        {cartItems.length > 0 && (
          <motion.div
            layout
            className="footer"
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <motion.h1 layout className="AllTotal">
              Total Price : ${grandTotal.toLocaleString()}
            </motion.h1>

            <motion.div
              layout
              className="ClearButton"
              onClick={() => setCartItems([])}
            >
              Clear All
              <span className="button-border"></span>
            </motion.div>
          </motion.div>
        )}
      </div>
      <div className="cart-actions">
        <Link to="/Cart" className="goToCartLink">
          <motion.button
            onClick={() => {
              setShow(false);
            }}
            className="goToCart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            View Cart
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default CartItems;
