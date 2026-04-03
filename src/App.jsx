import Home from "./Features/Home/Home";
import "./App.css";
import About from "./Features/About/About";
import { Route, Routes, Navigate } from "react-router-dom";
import Navv from "./components/Navv";
import MainLayout from "./components/MainLayout";
import Store from "./Features/Store/Store";
import CartItems from "./components/cart/CartItems";
import { useEffect, useState } from "react";
import Saved from "./Features/Store/components/Saved";
import Favorite from "./Features/Store/components/Favorite";
import Setting from "./components/Setting";
import Cart from "./components/cartPage/Cart";
import Intro from "./components/Intro";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [step, setStep] = useState(null);
  const [introShow, setIntroShow] = useState(false);
  const [show, setShow] = useState(false);
  const [settingShow, setSettingShow] = useState(false);
  const [selectCategory, setSelectCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  const categories = ["All", "Electronics", "Accessories", "Wearables"];
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
  useEffect(() => {
    const timer = setTimeout(() => setStep(2), 5000); // يقعد 4 ثواني
    setTimeout(() => setIntroShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

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
        setDark={setDark}
        dark={dark}
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
      {introShow ? (
        <Intro step={step} setStep={setStep} />
      ) : (
        <MainLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route
              path="/home"
              element={
                <Home
                  loading={loading}
                  setLoading={setLoading}
                  step={step}
                  setSelectCategory={setSelectCategory}
                  selectCategory={selectCategory}
                />
              }
            />
            <Route
              path="/store"
              element={
                <Store
                  loading={loading}
                  setLoading={setLoading}
                  selected={selected}
                  setSelected={setSelected}
                  categories={categories}
                  setSelectCategory={setSelectCategory}
                  selectCategory={selectCategory}
                />
              }
            />
            <Route
              path="/store/saved"
              element={<Saved loading={loading} setLoading={setLoading} />}
            />
            <Route
              path="/store/favorite"
              element={<Favorite loading={loading} setLoading={setLoading} />}
            />
            <Route
              path="/about"
              element={<About loading={loading} setLoading={setLoading} />}
            />
            <Route
              path="/Cart"
              element={<Cart loading={loading} setLoading={setLoading} />}
            />
          </Routes>
        </MainLayout>
      )}
    </>
  );
};

export default App;
