import { FaTimes } from "react-icons/fa";
import "./setting.css";

const ExInSetting = ({ setSettingShow }) => {
  return (
    <div className="Ex sett">
      <h1 className="setting-head">Setting</h1>
      <FaTimes
        clas
        onClick={() => {
          setSettingShow(false);
        }}
      />
    </div>
  );
};

export default ExInSetting;
