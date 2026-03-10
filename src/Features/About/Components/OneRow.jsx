import { FaRegCreditCard } from "react-icons/fa";
import { motion } from "framer-motion";

const OneRow = ({ item }) => {
  return (
    <motion.div
      className="one-row"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="row-icon">{item.icon}</div>
      <div className="text-row">
        <h3 className="aboutH3">{item.h3}</h3>
        <p className="aboutP">{item.p}</p>
      </div>
    </motion.div>
  );
};

export default OneRow;
