import { motion } from "framer-motion";
import { FaRegCopyright } from "react-icons/fa6";
import FooterLinks from "../FooterLinks";

const Footer = () => {
  return (
    <motion.div
      className="footer-payment"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1.2 }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <FooterLinks />
      <div className="footer-copy-right">
        <span className="copyright">
          <FaRegCopyright />
        </span>
        2026, All right reserved. SEATIVE DIGITAL
      </div>
    </motion.div>
  );
};

export default Footer;
