"use client";
import scss from "./Loader.module.scss";

const Loading = () => {
  return (
    <div className={scss.page}>
      <div className={scss.container}>
        <div className={scss.ring}></div>
        <div className={scss.ring}></div>
        <div className={scss.ring}></div>
        <div className={scss.ring}></div>
        <div className={scss.loadingText}>loading</div>
      </div>
    </div>
  );
};

export default Loading;
