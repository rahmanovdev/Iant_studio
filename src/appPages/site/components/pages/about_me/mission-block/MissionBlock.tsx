"use client";

import React from "react";
import scss from "./MissionBlock.module.scss";

import Background from "../../home/background/Background";
import useModalStore from "@/store/useModalStore";
import { useRouter } from "next/navigation";

const MissionBlock = () => {
  const { openModal } = useModalStore();
  const router = useRouter();

  const handleClick = () => {
    router.push("/our_works");
  };
  return (
    <>
      <Background />
      <section className={scss.Main}>
        <div className="container">
          <div className={scss.content}>
            <h5>МИССИЯ</h5>
            <h1>
              Делаем больше, <br /> <span>чем просто программы</span> для
              автоматизации
            </h1>
            <p>
              Наша задача — помочь бизнесу выйти <br /> на максимальную
              эффективность
            </p>

            <div className={scss.button_block}>
              <div className={scss.button1}>
                <button onClick={openModal}>СТАНЬ КЛИЕНТОМ</button>
              </div>
              <div className={scss.button2}>
                <button onClick={handleClick}>НАШИ КЕЙСЫ</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionBlock;
