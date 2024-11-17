import React from "react";
import MissionBlock from "./mission-block/MissionBlock";
import AboutBlock from "./about-block/AboutBlock";
import scss from "./MainAbout.module.scss";

const MainAbout = () => {
  return (
    <>
      <div className={scss.Main_about}>
        <MissionBlock />
        <AboutBlock />
      </div>
    </>
  );
};

export default MainAbout;
