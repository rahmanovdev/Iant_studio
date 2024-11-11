"use client";
import scss from "./BackgroundThird.module.scss";
const BackgroundThird = () => {
  return (
    <video autoPlay muted loop className={scss.video}>
      <source src="/videos/12917-242532967.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundThird;
