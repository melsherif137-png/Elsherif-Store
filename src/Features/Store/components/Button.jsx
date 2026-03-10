import { useCart } from "../../../Context/CartContext";

const Button = ({ product }) => {
  const { cartItems, addItem, increase, decrease } = useCart();

  const itemInCart = cartItems.find((item) => item.id === product.id);
  const count = itemInCart ? itemInCart.quantity : 0;

  return (
    <div>
      {count === 0 ? (
        <button className="Button-card" onClick={() => addItem(product)}>
          Add To Cart
        </button>
      ) : (
        <div className="in-cart">
          <button className="increament" onClick={() => increase(product.id)}>
            +
          </button>
          <h3 className="count-cart">{count} Added</h3>
          <button className="decreament" onClick={() => decrease(product.id)}>
            -
          </button>
        </div>
      )}
    </div>
  );
};

export default Button;
