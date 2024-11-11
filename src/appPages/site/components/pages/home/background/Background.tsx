"use client";
import scss from "./Background.module.scss";
const Background = () => {
  return (
    <video autoPlay muted loop className={scss.video}>
      <source src="/videos/background.mp4" type="video/mp4" />
    </video>
  );
};

export default Background;
