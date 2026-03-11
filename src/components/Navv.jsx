import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
// import useAllCount from "../Features/Store/components/Button";
import { CiLight } from "react-icons/ci";
import "./nav.css";
import { useRef, useState } from "react";
import { useCart } from "../Context/CartContext";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const links = ["Home", "Store", "About"];

const NavBar = ({ setShow, show, setSetting }) => {
  const { cartItems } = useCart();

  const handlingShow = () => {
    setShow(true);
  };

  const location = useLocation();
  return (
    <header>
      <div className="navLinks">
        {/* <button onClick={darkMode} className="darkMode">
          {dark ? <IoMoonSharp /> : <IoSunnyOutline />}
        </button> */}
        <ul>
          {links.map((link, index) => {
            return (
              <NavLink
                key={index}
                to={`/${link.toLocaleLowerCase()}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link}
              </NavLink>
            );
          })}
        </ul>

        <div className="right">
          {location.pathname.endsWith("/store") ? (
            <button
              className={`cart ${show ? "active" : ""}`}
              onClick={() => {
                handlingShow();
              }}
            >
              <FaShoppingCart className="icon" />
              <span className="countOfCart">{cartItems.length}</span>
            </button>
          ) : (
            <button
              className="burgerMenu"
              onClick={() => {
                setSetting(true);
              }}
            >
              <GiHamburgerMenu />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
