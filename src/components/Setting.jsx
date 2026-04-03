import React from "react";
import "./setting.css";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import ExInSetting from "./ExInSetting";

const Setting = ({ settingShow, setSettingShow, darkMode, dark }) => {
  const arrayOfLinks = ["Home", "Store", "About", "Saved", "Favorite", "Cart"];
  return (
    <div className={`setting ${settingShow ? "active" : ""}`}>
      <div className="container">
        <div className="top">
          <ExInSetting setSettingShow={setSettingShow} />
        </div>
        {arrayOfLinks.map((link, index) => {
          const path =
            link === "Saved" || link === "Favorite"
              ? `/store/${link.toLowerCase()}`
              : `/${link.toLowerCase()}`;
          return (
            <div className="element" key={index}>
              <Link
                to={path}
                className="setting-link"
                onClick={() => {
                  setTimeout(() => {
                    setSettingShow(false);
                  }, 100);
                }}
              >
                {link}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Setting;
