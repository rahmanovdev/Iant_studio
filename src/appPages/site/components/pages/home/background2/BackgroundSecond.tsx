"use client";
import scss from "./BackgroundSecond.module.scss";

const BackgroundSecond = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={scss.video}
      poster="/images/background-static-2.jpg"
    >
      <source
        src="/videos/icorp_video1.mp4"
        type="video/mp4"
        media="(min-width: 768px)"
      />
    </video>
  );
};

export default BackgroundSecond;
