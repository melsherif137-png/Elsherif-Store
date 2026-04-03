import React from "react";
import { motion } from "framer-motion";
const Heading = ({ name }) => {
  return (
    <div className="divOfHead">
      <motion.h2
        className="featured-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        {name}
      </motion.h2>
    </div>
  );
};

export default Heading;
