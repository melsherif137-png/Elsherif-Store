import { useEffect } from "react";
import CartPage from "./CartPage";
import CartPay from "./CartPay";
import "./cart.css";
import Footer from "./Footer";
import BeatLoader from "react-spinners/BeatLoader";

const Cart = ({ loading, setLoading }) => {
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
  return (
    <div className="cartMain">
      {loading ? (
        <BeatLoader color="#336b54" className="loading" />
      ) : (
        <>
          <div className="container">
            <CartPage />
            <CartPay />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Cart;
