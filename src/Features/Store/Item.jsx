import { useState } from "react";
import Counts from "./Counts";
import { useCart } from "../../Context/CartContext";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Item = ({ cart }) => {
  const { addItem, cartItems } = useCart();
  const [numbers, setNumbers] = useState(false);
  const currentQuantity =
    cartItems.find((item) => item.id === cart.id)?.quantity ?? 0;

  return (
    <div className="oveer">
      <div className="item-details">
        <div className="head">
          <motion.img
            src={cart.image}
            alt=""
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
          <div className="text">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {cart.name}
            </motion.h1>
            <div className="priceAndQun">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                price: ${cart.price}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                qun: {currentQuantity}
              </motion.p>
            </div>
          </div>
        </div>
        <motion.p
          className="description"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {cart.description}
        </motion.p>
        {numbers && <Counts cart={cart} selected={currentQuantity} />}
        <motion.button
          className="addMotion"
          onClick={() => {
            setNumbers(true);
            addItem(cart);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          Add To Cart
        </motion.button>
      </div>
    </div>
  );
};

export default Item;
