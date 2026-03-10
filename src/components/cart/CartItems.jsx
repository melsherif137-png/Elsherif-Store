import "./cartItems.css";
import ItemInCartItem from "./ItemInCartItem";
import { useCart } from "../../Context/CartContext";
import ExInCart from "./ExInCart";
import { useEffect } from "react";

const CartItems = ({ setShow, show }) => {
  const { cartItems } = useCart();
  const { setCartItems } = useCart();
  const grandTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className={`cart-items ${show ? "open" : ""}`}>
      <div className="top">
        <ExInCart setShow={setShow} />
      </div>
      <div className="container">
        {cartItems.map((item, index) => {
          return <ItemInCartItem key={item.id} item={item} />;
        })}
        {cartItems.length === 0 && (
          <h3 className="Empty">Your cart is empty</h3>
        )}
        {cartItems.length > 0 && (
          <h1 className="AllTotal">
            Total Price : ${grandTotal.toLocaleString()}
          </h1>
        )}
        {cartItems.length > 0 && (
          <div class="ClearButton" onClick={() => setCartItems([])}>
            Clear All<span class="button-border"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItems;
