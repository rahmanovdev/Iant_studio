"use client";

import useModalStore from "@/store/useModalStore";
import Background from "../background/Background";
import scss from "./HeroContent.module.scss";
import { useRouter } from "next/navigation";
const HeroContent = () => {
  const { openModal } = useModalStore();
  const router = useRouter();


  const handleClick = () => {
    router.push("/our_works");
  };
  return (
    <>
      <Background />
      <div className={scss.HeroContent}>
        <div className="container">
          <div className={scss.content}>
            <h4>WEB DEVELOPMENT</h4>
            <h1>
              Разработка продающих <br />
              <span style={{ color: "rgb(255, 255 , 255 ,0.5)" }}>
                веб-сайтов под ключ
              </span>
            </h1>
            <p>
              Разрабатываем функциональные и уникальные сайты <br /> специально
              для вашего бизнеса
            </p>
            <div className={scss.hero_btns}>
              <button onClick={openModal} className={scss.project}>ОБСУДИТЬ ПРОЕКТ</button>

              <div onClick={handleClick} className={scss.button}>Портфолио</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
