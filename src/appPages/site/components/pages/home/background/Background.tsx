"use client";
import scss from "./Background.module.scss";

const Background = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={scss.video}
      poster="/images/background-static.jpg" // Видео жүктөлгөнчө көрүнө турган сүрөт
    >
      <source
        src="/videos/background.mp4"
        type="video/mp4"
        media="(min-width: 768px)" // Десктоп үчүн гана видео көрсөтүү
      />
    </video>
  );
};

export default Background;
