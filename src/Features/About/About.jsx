import "./About.css";
import { Link } from "react-router-dom";
import AboutLearn from "./Components/AboutLearn";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-heading">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience Streamlined Shopping With{" "}
            <span className="glow-text">Soundora</span>{" "}
          </motion.h3>
        </div>
        <AboutLearn />
        <div className="Buttons">
          <Link to={"/store"}>
            <motion.button
              className="shopNow-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Shop Now
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
