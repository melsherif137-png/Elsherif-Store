import React from "react";
import { useSaved } from "../../../Context/SavedContext";
import "./Saved.css";
import { motion } from "framer-motion";

const Favorite = () => {
  const { favorite, deleteFavorite } = useSaved();

  if (favorite.length === 0) {
    return (
      <div className="saved-empty">
        <h2>Your favorite items are empty</h2>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <h1 className="favorite-heading">Favorite</h1>
      <div className="favorite-container">
        {favorite.map((item, index) => {
          if (!item) return null;
          return (
            <motion.div
              className="favorite-item"
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
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
                onClick={() => deleteFavorite(item)}
              >
                Delete
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorite;
