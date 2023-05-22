import React, { useState } from 'react';
import '../styles/Theme.css';
import LightmodeIcon from "../assets/images/lightmode.png";
import DarkmodeIcon from "../assets/images/DarkmodeIcon.png"

export default function Theme() {
  const [isLightMode, setIsLightMode] = useState(true);

  const themeChange = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <button className={`Theme ${isLightMode ? 'light' : 'dark'}`} onClick={themeChange}>
      {/*<img {isLightMode ? src={DarkmodeIcon} : src = {LightmodeIcon} }  alt="Light Mode Icon" />*/}
    <img src = {isLightMode ? DarkmodeIcon : LightmodeIcon}  alt="Light Mode Icon" />
      <div className="Theme__mode">
        {isLightMode ? 'DARK UI' : 'LIGHT UI'}
      </div> 
    </button>
  );
}

