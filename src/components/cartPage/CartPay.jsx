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
      <div className="payment-heading">
        <h1>Order Summary</h1>
      </div>

      <div className="inputPayment">
        <input type="text" placeholder="Discount voucher" className="voucher" />
        <button className="apply">Apply</button>
      </div>

      <div className="text-payment">
        <div className="InText">
          <p className="one-text-payment">Sub Total</p>
          <p className="two-text-payment">{formatCurrency(subTotal)}</p>
        </div>

        <div className="InText">
          <p className="one-text-payment">Discount (15%)</p>
          <p className="two-text-payment">-{formatCurrency(discountValue)}</p>
        </div>

        <div className="InText" style={{ borderBottom: "1px solid black" }}>
          <p className="one-text-payment">Delivery fee</p>
          <p className="two-text-payment">{formatCurrency(deliveryFee)}</p>
        </div>

        <div className="InText">
          <p className="one-text-payment">Total</p>
          <p className="two-text-payment">
            {formatCurrency(grandTotalWithDelivery)}
          </p>
        </div>
      </div>

      <div className="limited">
        <p>90 Day Limited Warranty against manufacturer's defects</p>
      </div>

      <div className="payment-footer">
        <button>Checkout Now</button>
      </div>
    </motion.div>
  );
};

export default CartPay;
