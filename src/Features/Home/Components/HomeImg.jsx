import { motion } from "framer-motion";
import myImage from "/src/assets/Gemini_Generated_Image_yfzus8yfzus8yfzu-removebg-preview.png";
const HomeImg = () => {
  return (
    <motion.div
      className="home-img"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
    >
      <img src={myImage} alt="" />
    </motion.div>
  );
};

export default HomeImg;
