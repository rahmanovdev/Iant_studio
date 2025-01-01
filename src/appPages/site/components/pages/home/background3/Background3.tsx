"use client";
import { useState, useEffect } from "react";
import scss from "./Background3.module.scss";

const BackgroundThird = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVideoLoaded(true);
  }, []);

  return (
    <>
      {/* Placeholder сүрөт */}
      <div
        className={`${scss.placeholder} ${isVideoLoaded ? scss.hide : ""}`}
        style={{ backgroundImage: "url('/images/background-static-3.jpg')" }}
      />

      {/* Видео */}
      {isVideoLoaded && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={scss.video}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source
            src="/videos/video_2024-11-23_18-53-05.mp4"
            type="video/mp4"
          />
        </video>
      )}
    </>
  );
};

export default BackgroundThird;
