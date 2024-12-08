"use client"

import React, { useEffect, useState } from "react";
import scss from "./HeadOurService.module.scss";
import Snowflake from "./Snowflake";

const HeadOurService = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; x: number; y: number; duration: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = document.querySelector(`.${scss.Head}`);
      if (container) {
        const x = Math.random() * container.clientWidth; 
        const y = Math.random() * container.clientHeight; 
        const duration = Math.random() * 3 + 2; 

        const newSnowflake = {
          id: Date.now() + Math.random(), 
          x,
          y,
          duration,
        };

        setSnowflakes((prevSnowflakes) => [...prevSnowflakes, newSnowflake]);

        setTimeout(() => {
          setSnowflakes((prevSnowflakes) =>
            prevSnowflakes.filter((snowflake) => snowflake.id !== newSnowflake.id)
          );
        }, duration * 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const headInfo = {
    title: "Наши услуги",
    description:
      "Мы — амбициозная и целеустремлённая команда. Зарекомендовали себя не только в Бишкеке, но и по всему Кыргызстану.",
  };

  return (
    <section className={scss.Head}>
      <div className="container">
        <div className={scss.contentHead}>
          <h1>{headInfo.title}</h1>
          <div className="container_for_head_desc">
            <p>{headInfo.description}</p>
          </div>
        </div>
        {snowflakes.map((snowflake) => (
          <Snowflake key={snowflake.id} x={snowflake.x} y={snowflake.y} duration={snowflake.duration} />
        ))}
      </div>
    </section>
  );
};

export default HeadOurService;
