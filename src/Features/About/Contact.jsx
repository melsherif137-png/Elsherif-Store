import React from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mt5m909",
        "template_8ucamhf",
        e.target,
        "jMGByHwDBu18FSXCt",
      )
      .then(() => {
        alert("Message sent ✅");
      })
      .catch(() => {
        alert("Error ❌");
      });
    toast.success("Successfully sent!");
  };
  return (
    <div className="contact">
      <div className="container">
        <motion.div
          className="contact-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2>Contact Us</h2>
          <p>
            Have any questions or need help? Feel free to reach out to us
            anytime.
          </p>
          <div className="contact-media">
            <h3>Follow Us</h3>
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
        </motion.div>
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <form onSubmit={sendEmail}>
            <label htmlFor="text">Name</label>
            <input name="name" type="text" placeholder="Mohamed Elsherif" />
            <label htmlFor="text">Email</label>
            <input
              name="email"
              type="email"
              placeholder="melsherif137@gmail.com"
            />
            <label htmlFor="text">Message</label>
            <input name="message" type="text" placeholder="type your message" />
            <button>Send Message</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
