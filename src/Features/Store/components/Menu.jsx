import React from "react";
import { motion } from "framer-motion";
import { useSaved } from "../../../Context/SavedContext";
import toast from "react-hot-toast";

const Menu = ({ cart }) => {
  const { addItem, addFavorite } = useSaved();

  return (
    <motion.div
      className="menu-bar"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="box">
        <div
          className="feature"
          onClick={(e) => {
            e.stopPropagation();

            const added = addItem(cart);

            if (added) {
              toast.success("saved");
            } else {
              toast.error("item saved before");
            }
          }}
        >
          save
        </div>

        <div
          className="feature"
          onClick={(e) => {
            e.stopPropagation();

            const added = addFavorite(cart);

            if (added) {
              toast.success("added to favorite");
            } else {
              toast.error("item favorite before");
            }
          }}
        >
          add to favorite
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
