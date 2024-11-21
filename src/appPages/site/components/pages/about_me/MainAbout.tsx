import React from "react";
import MissionBlock from "./mission-block/MissionBlock";
import AboutBlock from "./about-block/AboutBlock";
import scss from "./MainAbout.module.scss";
import TeamBlock from "./team-block/TeamBlock";
import CliComments from "./cli-comments/CliComments";
import Feedback from "./feedback/Feedback";

const MainAbout = () => {
  return (
    <>
      <div className={scss.Main_about}>
        <MissionBlock />
        <AboutBlock />
        <TeamBlock/>
        <CliComments/>
        <Feedback/>
      </div>
    </>
  );
};

export default MainAbout;
