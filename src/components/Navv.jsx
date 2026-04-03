import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
// import useAllCount from "../Features/Store/components/Button";
import { CiLight } from "react-icons/ci";
import "./nav.css";
import { useRef, useState } from "react";
import { useCart } from "../Context/CartContext";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";

const links = ["Home", "Store", "About"];

const NavBar = ({ setShow, show, setSetting, dark, setDark }) => {
  const { cartItems } = useCart();

  const handlingShow = () => {
    setShow(true);
  };

  const location = useLocation();
  return (
    <header>
      <div className="navLinks">
        {/* <ul>
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
        </ul> */}
        <div className="logo">
          <Link to="/">TechStore</Link>
        </div>

        <div className="right">
          {dark ? (
            <button className="darkMode" onClick={() => setDark(false)}>
              <IoSunnyOutline />
            </button>
          ) : (
            <button className="darkMode" onClick={() => setDark(true)}>
              <IoMoonSharp />
            </button>
          )}
          <button
            className={`cart ${show ? "active" : ""}`}
            onClick={() => {
              handlingShow();
            }}
          >
            <HiOutlineShoppingCart className="icon" />
            <span className="countOfCart">{cartItems.length}</span>
          </button>

          <button
            className="burgerMenu"
            onClick={() => {
              setSetting(true);
            }}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
