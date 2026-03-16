import { useSaved } from "../../../Context/SavedContext";
import "./Saved.css";
import { motion, AnimatePresence } from "framer-motion";

const Saved = () => {
  const { saved, deleteItem } = useSaved();

  if (saved.length === 0) {
    return (
      <div className="saved-empty">
        <h2>Your saved items are empty</h2>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <h1 className="saved-heading">Saved</h1>
      <motion.div layout className="saved-container">
        <AnimatePresence mode="popLayout">
          {saved.map((item) => {
            if (!item) return null;
            return (
              <motion.div key={item.id} layout>
                <motion.div
                  layout
                  className="saved-item"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,

                    transition: { duration: 0.6 },
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
      </motion.div>
    </div>
  );
};

export default Saved;
