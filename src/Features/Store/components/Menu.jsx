import React from "react";
import { motion } from "framer-motion";
import { useSaved } from "../../../Context/SavedContext";
import toast from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

const Menu = ({ cart, setSavedMenu, savedMenu }) => {
  const { addItem, addFavorite } = useSaved();

  return (
    <motion.div
      className="menu-bar"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.4 } }}
    >
      <div className="box">
        <div
          className="feature"
          onClick={(e) => {
            e.stopPropagation();

            const added = addItem(cart);

            if (added) {
              toast.success("saved");
              setTimeout(() => {
                setSavedMenu(false);
              }, 1000);
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
              setTimeout(() => {
                setSavedMenu(false);
              }, 1000);
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
