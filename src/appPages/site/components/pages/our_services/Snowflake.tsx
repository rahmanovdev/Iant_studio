import React from "react";
import scss from "./HeadOurService.module.scss";

const Snowflake = ({ x, y, duration }: { x: number; y: number; duration: number }) => {
  return (
    <div
      className={scss.snowflake}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        animationDuration: `${duration}s`,
      }}
    />
  );
};

export default Snowflake;
