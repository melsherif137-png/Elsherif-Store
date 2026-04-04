import React, { useEffect } from "react";
import { useSaved } from "../../../Context/SavedContext";
import "./Saved.css";
import { motion, AnimatePresence } from "framer-motion";
import BeatLoader from "react-spinners/BeatLoader";

const Favorite = ({ loading, setLoading }) => {
  const { favorite, deleteFavorite } = useSaved();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(
      () => {
        setLoading(false);
      },
      Math.random() * 1000 + 500,
    );

    return () => clearTimeout(timer);
  }, [setLoading]);

  // loading
  if (loading) {
    return <BeatLoader color="#336b54" className="loading" />;
  }

  // empty state
  if (!favorite || favorite.length === 0) {
    return (
      <motion.div
        className="saved-empty"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h2>
          No <span>favorite</span> items yet
        </h2>
      </motion.div>
    );
  }

  // content
  return (
    <div className="wrapper">
      <h1 className="FavoriteH">Favorite</h1>

      <div className="favorite-container">
        <AnimatePresence mode="popLayout">
          {" "}
          {favorite.map((item, index) => {
            if (!item) return null;
            return (
              <motion.div key={item.id} layout>
                {" "}
                <motion.div
                  className="favorite-item"
                  layout
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      delay: 0.15 * index,
                      ease: "easeOut",
                    },
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.4 } }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {" "}
                  <img src={item.image} alt={item.name} /> <h3>{item.name}</h3>{" "}
                  <p>${item.price}</p>{" "}
                  <button
                    className="delete-btn"
                    onClick={() => deleteFavorite(item)}
                  >
                    {" "}
                    Delete{" "}
                  </button>{" "}
                </motion.div>{" "}
              </motion.div>
            );
          })}{" "}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Favorite;
