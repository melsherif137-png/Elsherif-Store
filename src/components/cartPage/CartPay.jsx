import React from "react";
import { useCart } from "../../Context/CartContext";
import { motion } from "framer-motion";
const CartPay = () => {
  const { cartItems } = useCart();

  const discountRate = 0.15; // 15%
  const deliveryFee = 50;

  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const discountValue = subTotal * discountRate;

  const totalAfterDiscount = subTotal - discountValue;

  const grandTotalWithDelivery = totalAfterDiscount + deliveryFee;

  const formatCurrency = (amount) =>
    amount.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <motion.div
      className="payment"
      initial={{ opacity: 0, x: 300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className="payment-heading"
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h1>Order Summary</h1>
      </motion.div>

      <motion.div className="inputPayment">
        <motion.input
          type="text"
          placeholder="Discount voucher"
          className="voucher"
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        />
        <motion.button
          className="apply"
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Apply
        </motion.button>
      </motion.div>

      <motion.div
        className="text-payment"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="InText">
          <p className="one-text-payment">Sub Total</p>
          <p className="two-text-payment">{formatCurrency(subTotal)}</p>
        </div>

        <div className="InText">
          <p className="one-text-payment">Discount (15%)</p>
          <p className="two-text-payment">-{formatCurrency(discountValue)}</p>
        </div>

        <div className="InText">
          <p className="one-text-payment">Delivery fee</p>
          <p className="two-text-payment">{formatCurrency(deliveryFee)}</p>
        </div>

        <div className="InText">
          <p className="one-text-payment">Total</p>
          <p className="two-text-payment">
            {formatCurrency(grandTotalWithDelivery)}
          </p>
        </div>
      </motion.div>

      <motion.div
        className="limited"
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <p>90 Day Limited Warranty against manufacturer's defects</p>
      </motion.div>

      <motion.div
        className="payment-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        <button>Checkout Now</button>
      </motion.div>
    </motion.div>
  );
};

export default CartPay;
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="footer-payment">
//       <div className="footer-links">
//         <a href="" className="facebook">
//           <FaFacebookF />
//         </a>
//         <a href="" className="instagram">
//           <FaInstagram />
//         </a>
//         <a href="" className="twitter">
//           <FaTwitter />
//         </a>
//         <a href="" className="linkedin">
//           <FaLinkedin />
//         </a>
//       </div>
//       <p className="footer-copy-right">
//         2023, All right reserved. SEATIVE DIGITAL
//       </p>
//     </div>
//   );
// };

// export default Footer;
