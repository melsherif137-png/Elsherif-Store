import products from "../../data/products.json";
import Product from "./components/Product";
import "../Store/Store.css";
// import { Routes, Route } from "react-router-dom";
import Item from "./Item";
import { useState } from "react";
// import { createContext } from "react";

const Store = ({ itemDetails, setItemDetails }) => {
  const [selected, setSelected] = useState(null);
  const [savedMenu, setSavedMenu] = useState(null);
  return (
    <div className="store">
      <div className="container">
        <div className="products">
          {products.map((cart, index) => {
            return (
              <Product
                key={cart.id}
                cart={cart}
                index={index}
                onSelect={() => setSelected(cart)}
                savedMenu={savedMenu}
                setSavedMenu={setSavedMenu}
              />
            );
          })}
        </div>
      </div>
      {selected && <Item cart={selected} />}
      {selected && (
        <div
          className="overlay"
          onClick={() => {
            setSelected(null);
          }}
        ></div>
      )}
    </div>
  );
};

export default Store;
