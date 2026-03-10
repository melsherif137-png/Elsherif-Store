import Home from "./Features/Home/Home";
import "./App.css";
import About from "./Features/About/About";
import { Route, Routes, Navigate } from "react-router-dom";
import Navv from "./components/Navv";
import MainLayout from "./components/MainLayout";
import Store from "./Features/Store/Store";
import CartItems from "./components/cart/CartItems";
import { useEffect, useState } from "react";
import Item from "./Features/Store/Item";
import Saved from "./Features/Store/components/Saved";
import Favorite from "./Features/Store/components/Favorite";
import Setting from "./components/Setting";
import Cart from "./components/cartPage/Cart";
const App = () => {
  const [show, setShow] = useState(false);
  const [settingShow, setSettingShow] = useState(false);
  const [dark, setDark] = useState(() => {
    const darkInLocal = localStorage.getItem("dark");
    return darkInLocal ? JSON.parse(darkInLocal) : false;
  });
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  const darkMode = () => {
    setDark((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <Setting
        settingShow={settingShow}
        setSettingShow={setSettingShow}
        darkMode={darkMode}
        dark={dark}
      />
      <Navv
        show={show}
        setShow={setShow}
        setting={settingShow}
        setSetting={setSettingShow}
      />
      <CartItems show={show} setShow={setShow} />
      {(show || settingShow) && (
        <div
          className="overlay"
          onClick={() => {
            setShow(false);
            setSettingShow(false);
          }}
        ></div>
      )}
      {/* 
      {itemDetails && <Item />} */}
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/saved" element={<Saved />} />
          <Route path="/store/favorite" element={<Favorite />} />
          <Route path="/about" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default App;
