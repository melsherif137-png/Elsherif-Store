import { useCart } from "../../Context/CartContext";
import ProductInCart from "./ProductInCart";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { motion } from "framer-motion";
const CartPage = () => {
  const { cartItems, setCartItems } = useCart();
  const { increase, decrease, deleteItem } = useCart();

  const grandTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    // {cartItems ? }
    <motion.div
      className="Page-details"
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h1
        className="main-shoppingCart"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        Shopping Cart
      </motion.h1>

      {/* <h1 className="pageTitle">Your Shopping Cart</h1> */}
      <div className="pageTitle-header">
        <div className="title-product">
          <span>product</span>
        </div>
        <div className="pageTitle-qun">
          <span>Quantity</span>
          <span>Total</span>
          <span>Action</span>
        </div>
      </div>
      <div className="itemsIn-pageTitle">
        {cartItems.length === 0 ? (
          <h3 className="emptyCart">Your cart is empty</h3>
        ) : (
          cartItems.map((item, index) => {
            const total = item.price * item.quantity;
            return (
              <motion.div
                className="itemIn-page"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 * (index + 1) }}
              >
                <div className="main-productIn-page">
                  <img src={item.image} alt="" />
                  <div className="main-productText">
                    <h3>{item.name}</h3>
                    <p className="main-productP">set:color</p>
                  </div>
                </div>
                <div className="pageTitle-Inc">
                  <div className="pageTitle-quantity">
                    <div className="counts-in-increase">
                      <button
                        onClick={() => {
                          increase(item.id, item);
                        }}
                      >
                        +
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() => {
                          decrease(item.id, item);
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <div className="total-inPage">${total}</div>
                  <div
                    className="action-inPage"
                    onClick={() => {
                      deleteItem(item);
                    }}
                  >
                    <RiDeleteBin6Fill />
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </motion.div>
  );
};

export default CartPage;
