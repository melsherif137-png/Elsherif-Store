import Button from "./Button";
import { easeOut, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GoKebabHorizontal } from "react-icons/go";
import Menu from "./Menu";
const Product = ({ cart, index, onSelect, savedMenu, setSavedMenu }) => {
  return (
    <motion.div
      className="product"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      {/* <Link to={`/store/item/${cartId}`}> */}
      <div className="parent-img" onClick={onSelect}>
        <GoKebabHorizontal
          className="menu"
          onClick={(e) => {
            e.stopPropagation();
            setSavedMenu((prev) => {
              return prev === cart.id ? null : cart.id;
            });
          }}
        />
        <AnimatePresence mode="wait">
          {savedMenu === cart.id && (
            <Menu cart={cart} setSavedMenu={setSavedMenu} />
          )}
        </AnimatePresence>
        <img src={cart.image} alt={cart.name} className="prod-img" />
      </div>
      {/* </Link> */}
      <div className="heading">
        <h1 className="prod-name">{cart.name}</h1>
        <span className="rate">
          {[...Array(5)].map((_, index) => (
            <span key={index}>{index < Math.round(cart.rate) ? "⭐" : ""}</span>
          ))}
        </span>
      </div>
      <div className="prod-text">
        <div className="price">
          <span className="prod-price">${cart.price.toLocaleString()}</span>
        </div>

        <Button
          product={{
            id: cart.id,
            name: cart.name,
            price: cart.price,
            image: cart.image,
            rate: cart.rate,
            insteadOf: cart.insteadOf,
          }}
        />
      </div>
    </motion.div>
  );
};

export default Product;
