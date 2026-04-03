import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const History = () => {
  return (
    <div className="history">
      <div className="container">
        <div className="history-text">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.6 }}
          >
            Crafting the future of technical elegance.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ amount: 0.6 }}
          >
            From the silicon wafer to the final glass surface, every component
            is curated for those who demand technical authority.
          </motion.p>
        </div>
        <Link to={"/about"}>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, delay: 0.2 }}
            viewport={{ amount: 0.6 }}
          >
            Learn more about our story →
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default History;
