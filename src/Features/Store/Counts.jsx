import React, { useEffect, useState } from "react";
import { useCart } from "../../Context/CartContext";
import { motion } from "framer-motion";

const Counts = ({ cart, selected = 0 }) => {
  const { updateQuantity } = useCart();
  const [selectedCounted, setSelectedCounted] = useState(selected);

  useEffect(() => {
    setSelectedCounted(selected);
  }, [selected]);

  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="counts">
      {count.map((number, index) => {
        return (
          <motion.span
            key={number}
            className={selectedCounted === number ? "active" : ""}
            onClick={() => {
              setSelectedCounted(number);
              updateQuantity(cart.id, number);
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
            }}
          >
            {number}
          </motion.span>
        );
      })}
    </div>
  );
};

export default Counts;
