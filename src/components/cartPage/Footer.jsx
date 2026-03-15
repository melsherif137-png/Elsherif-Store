import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-payment">
      <div className="footer-links">
        <a href="" className="facebook">
          <FaFacebookF />
        </a>
        <a href="" className="instagram">
          <FaInstagram />
        </a>
        <a href="" className="twitter">
          <FaTwitter />
        </a>
        <a href="" className="linkedin">
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-copy-right">
        2023, All right reserved. SEATIVE DIGITAL
      </p>
    </div>
  );
};

export default Footer;
