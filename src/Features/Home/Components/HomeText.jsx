import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const HomeText = () => {
  return (
    <div className="Home-text">
      <div className="leftt">
        <div className="text">
          <motion.h1
            className="head-of-Home"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Experience Sound Without Limits
          </motion.h1>

          <motion.p
            className="p-of-home"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Shop the latest over-ear headphones, true wireless Bluetooth
            earbuds, heavy bass subwoofers, and high-capacity power banks.
            Whether you're at home, outdoors, or on the move, we provide premium
            audio gear and charging essentials built for performance and
            durability. Feel the power. Hear the difference.
          </motion.p>
        </div>
        <motion.div
          className="Buttons"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to={"/store"}>
            <button>Shop Now</button>
          </Link>
          <Link to={"/about"}>
            <button>Learn More</button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeText;
