import "./About.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AboutLearn from "./Components/AboutLearn";
import { motion } from "framer-motion";
import Contact from "./Contact";
import BeatLoader from "react-spinners/BeatLoader";

const About = ({ loading, setLoading }) => {
  useEffect(() => {
    setLoading(true);
    setTimeout(
      () => {
        setLoading(false);
      },
      Math.random() * 1000 + 500,
    ); // Simulate loading time between 0.5s and 1.5s
  }, []);
  return (
    <div className="about">
      {loading ? (
        <BeatLoader color="#336b54" className="loading" />
      ) : (
        <>
          <div className="about-free">
            <div className="container">
              <div className="about-heading">
                <motion.h3
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Experience Streamlined Shopping With{" "}
                  <span className="glow-text">TechStore</span>
                </motion.h3>
              </div>

              <AboutLearn />

              <div className="Buttons">
                <Link to="/store">
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

          <Contact />
        </>
      )}
    </div>
  );
};

export default About;
