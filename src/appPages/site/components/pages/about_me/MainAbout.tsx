import dynamic from "next/dynamic";
import React from "react";
import scss from "./MainAbout.module.scss";

const MissionBlock = dynamic(() => import("./mission-block/MissionBlock"), {
  loading: () => <p></p>,
});

const AboutBlock = dynamic(() => import("./about-block/AboutBlock"), {
  loading: () => <p></p>,
});

const TeamBlock = dynamic(() => import("./team-block/TeamBlock"), {
  loading: () => <p></p>,
});

const TeamBlockForMob = dynamic(() => import("./team-block/TeamBlockForMob"), {
  loading: () => <p></p>,
});

const CliComments = dynamic(() => import("./cli-comments/CliComments"), {
  loading: () => <p></p>,
});

const Feedback = dynamic(() => import("./feedback/Feedback"), {
  loading: () => <p></p>,
});

const MainAbout = () => {
  return (
    <>
      <div className={scss.Main_about}>
        <MissionBlock />
        <AboutBlock />
        <TeamBlock />
        <TeamBlockForMob />
        <CliComments />
        <Feedback />
      </div>
    </>
  );
};

export default MainAbout;
