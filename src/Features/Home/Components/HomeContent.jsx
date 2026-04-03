import HomeImg from "./HomeImg";
import HomeText from "./HomeText";
import { motion } from "framer-motion";

const HomeContent = () => {
  return (
    <div className="home-content">
      <HomeText />
      <HomeImg />
    </div>
  );
};

export default HomeContent;
