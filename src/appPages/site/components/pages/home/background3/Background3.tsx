"use client";
import scss from "./Background3.module.scss";

const BackgroundThird = () => {
  return (
    <video 
      autoPlay 
      muted 
      loop 
      playsInline
      preload="metadata"
      className={scss.video}
      poster="/images/background-static-3.jpg"
    >
      <source 
        src="/videos/video_2024-11-23_18-53-05.mp4"
        type="video/mp4"
        media="(min-width: 768px)"
      />
    </video>
  );
};

export default BackgroundThird;