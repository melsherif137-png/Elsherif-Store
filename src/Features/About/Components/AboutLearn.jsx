import { BiBookContent } from "react-icons/bi";
import { FaRegCreditCard } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import OneRow from "./OneROw";
import { motion } from "framer-motion";

const dataForRow = [
  {
    icon: <MdDeliveryDining />,
    h3: "Free Delivery",
    p: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aenean Hendrerit Purus Quis Quam.",
  },
  {
    icon: <BiBookContent />,
    h3: "self pickup",
    p: "Etiam Vitae Ornare Nulla. Class Aptent Taciti Sociosqu Ad Litora Torquent Per Conubia Nostra.",
  },
  {
    icon: <FaRegCreditCard />,
    h3: "Warranty",
    p: "Donec Vehicula Et Nulla Vel Fringilla. Proin Viverra Fermentum Erat, Vitae Aliquet Erat Dapibus Vitae",
  },
];
const AboutLearn = () => {
  return (
    <motion.div
      className="about-learn"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        {dataForRow.map((item, index) => {
          return <OneRow item={item} index={index} key={index} />;
        })}
      </div>
    </motion.div>
  );
};

export default AboutLearn;
