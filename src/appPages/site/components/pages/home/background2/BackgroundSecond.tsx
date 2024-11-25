"use client";
import scss from "./BackgroundSecond.module.scss";
const BackgroundSecond = () => {
  return (
    <video autoPlay muted loop className={scss.video}>
      <source src="/videos/icorp_video1.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundSecond;
