import { div } from "framer-motion/client";
import { useSaved } from "../../../Context/SavedContext";
import "./Saved.css";
import { motion, AnimatePresence } from "framer-motion";

const Saved = () => {
  const { saved, deleteItem } = useSaved();

  if (saved.length === 0) {
    return (
      <motion.div
        className="saved-empty"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h2>Your saved items are empty</h2>
      </motion.div>
    );
  }

  return (
    <div className="wrapper">
      <div className="saved-container">
        <AnimatePresence>
          {saved.map((item, index) => {
            if (!item) return null;
            return (
              <motion.div layout key={item.id}>
                <motion.div
                  className="saved-item"
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -100, transition: { duration: 0.4 } }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 * index,
                    ease: "easeOut",
                  }}
                >
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <button
                    className="delete-btn"
                    onClick={() => deleteItem(item)}
                  >
                    Delete
                  </button>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Saved;
