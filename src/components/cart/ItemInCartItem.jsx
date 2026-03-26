import { useCart } from "../../Context/CartContext";
import Button from "../../Features/Store/components/Button";
import { motion, AnimatePresence } from "framer-motion";

const ItemInCartItem = ({ item }) => {
  const { increase, decrease } = useCart();
  // const image =
  //   typeof item.images[0] === "string" && item.images[0].startsWith("[")
  //     ? JSON.parse(item)[0]
  //     : item.images[0];
  const total = item.price * item.quantity;

  return (
    <motion.div
      layout
      className="item-in-Cart"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={{ duration: 0.4 }}
    >
      <img src={item.image} alt={item.name} className="itemImage" />
      <div className="cart-textt">
        <h4>{item.title}</h4>
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
    </motion.div>
  );
};

export default ItemInCartItem;
