"use client";
import { useState, useEffect } from "react";
import scss from "./BackgroundSecond.module.scss";

const BackgroundSecond = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVideoLoaded(true);
  }, []);

  return (
    <>
      <div
        className={`${scss.placeholder} ${isVideoLoaded ? scss.hide : ""}`}
        style={{ backgroundImage: "url('/images/background-static-2.jpg')" }}
      />

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
          <source src="/videos/icorp_video1.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
};

export default BackgroundSecond;
