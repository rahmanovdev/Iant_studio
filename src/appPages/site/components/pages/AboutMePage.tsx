import MainAbout from "./about_me/MainAbout";
import scss from "./AboutMePage.module.scss";

const AboutMePage = () => {
  return (
    <>
      <div className={scss.content}>
        <MainAbout/>
      </div>
      ;
    </>
  );
};

export default AboutMePage;
