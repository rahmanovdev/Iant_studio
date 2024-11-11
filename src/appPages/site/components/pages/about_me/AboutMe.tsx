import scss from "./AboutMe.module.scss";
const AboutMe = () => {
  return (
    <div className={scss.about_me}>
      <div className="container">
        <div className={scss.content}></div>
      </div>
    </div>
  );
};

export default AboutMe;
