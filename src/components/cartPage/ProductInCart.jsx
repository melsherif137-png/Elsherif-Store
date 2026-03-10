import React from "react";
import { useCart } from "../../Context/CartContext";
const ProductInCart = ({ item }) => {
  const { increase, decrease } = useCart();

  const total = item.price * item.quantity;
  return (
    <div className="item-in-Cart">
      <img src={item.image} alt={item.name} className="itemImage" />
      <div className="cart-textt">
        <h4>{item.name}</h4>
        <p className="priceTextt">Price: ${item.price.toLocaleString()} </p>
        <p className="que">Qty: {item.quantity}</p>
      </div>
      <div className="total">
        <div className="buttons">
          <button className="increment" onClick={() => increase(item.id)}>
            +
          </button>
          <button className="increment" onClick={() => decrease(item.id)}>
            -
          </button>
        </div>
        <span>
          {item.quantity > 1 ? "Items Total:" : "Item Total:"} $
          {total.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default ProductInCart;
