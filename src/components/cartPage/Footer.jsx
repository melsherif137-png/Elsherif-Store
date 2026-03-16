import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <motion.div
      className="footer-payment"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1.2 }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="footer-links">
        <a
          href="https://www.facebook.com/mohamed.elsherif.1614460"
          className="facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/mohamedelsheriif_/"
          className="instagram"
        >
          <FaInstagram />
        </a>
        <a href="https://wa.me/01221916415" className="twitter">
          <FaWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-elsherif-aa9109329"
          className="linkedin"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-copy-right">
        <span className="copyright">
          <FaRegCopyright />
        </span>{" "}
        2026, All right reserved. SEATIVE DIGITAL
      </p>
    </motion.div>
  );
};

export default Footer;
