import AboutMe from "./about_me/AboutMe";
import scss from "./AboutMePage.module.scss";

const AboutMePage = () => {
  return (
    <>
      <div className={scss.content}>
        <AboutMe />
      </div>
      ;
    </>
  );
};

export default AboutMePage;
