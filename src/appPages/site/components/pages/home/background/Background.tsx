"use client";
import { useState, useEffect } from "react";
import scss from "./Background.module.scss";

const Background = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVideoLoaded(true);
  }, []);

  return (
    <>
      <div
        className={`${scss.placeholder} ${isVideoLoaded ? scss.hide : ""}`}
        style={{ backgroundImage: "url('/images/background-static.jpg')" }}
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
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
};

export default Background;
