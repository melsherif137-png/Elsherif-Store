import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { motion } from "framer-motion";
const HomeFooter = () => {
  return (
    <div
      className="home-footer"
      // initial={{ opacity: 0, y: 100 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.6 }}
      // viewport={{ amount: 0.5 }}
    >
      <div className="container">
        <div className="column">
          <h3>Contact Us</h3>
          <span>+20 1221916415</span>
          <span>melsherif137@gmail.com</span>
          <span>Egypt, Beheira, Elmahmudia</span>
        </div>
        <div className="column">
          <h3>Our services</h3>
          <Link to="/">home</Link>
          <Link to="/store">store</Link>
          <Link to="/about">about</Link>
        </div>
        <div className="column">
          <h3>Knowledge Base</h3>
          <span>Hire An Expert</span>
          <span>FAQ</span>
          <span>Content</span>
        </div>
        <div className="column">
          <h3>Media</h3>
          <div className="footer-linkss">
            <a
              className="face"
              href="https://www.facebook.com/mohamed.elsherif.1614460"
            >
              <FaFacebookF />
            </a>
            <a
              className="face"
              href="https://www.instagram.com/mohamedelsheriif_/"
            >
              <FaInstagram />
            </a>
            <a className="face" href="https://wa.me/01221916415">
              <FaWhatsapp />
            </a>
            <a
              className="face"
              href="https://www.linkedin.com/in/mohamed-elsherif-aa9109329"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <span className="copyright-icon">
          <FaRegCopyright /> 2026, All right reserved. | Block is made by
          SEATIVE DIGITAL
        </span>

        <div className="privacy">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
