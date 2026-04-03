import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./cartPage/cart.css";
const FooterLinks = () => {
  return (
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
  );
};

export default FooterLinks;
