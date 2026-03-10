import { FaTimes } from "react-icons/fa";

const ExInCart = ({ setShow }) => {
  return (
    <div className="Ex">
      <h1>Cart</h1>
      <FaTimes
        onClick={() => {
          setShow((prev) => !prev);
        }}
      />
    </div>
  );
};

export default ExInCart;
