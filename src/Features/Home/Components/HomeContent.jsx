import HomeImg from "./HomeImg";
import HomeText from "./HomeText";
import { motion } from "framer-motion";

const HomeContent = ({ step }) => {
  return (
    <div className="home-content">
      <HomeText step={step} />
      <HomeImg step={step} />
    </div>
  );
};

export default HomeContent;
