"use client";
import scss from "./Background3.module.scss";
const BackgroundThird = () => {
  return (
    <video autoPlay muted loop className={scss.video}>
      <source src="/videos/video_2024-11-23_18-53-05.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundThird;
