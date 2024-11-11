"use client";

import Background from "../background/Background";
import scss from "./HeroContent.module.scss";
const HeroContent = () => {
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
              <button className={scss.project}>ОБСУДИТЬ ПРОЕКТ</button>

              <div className={scss.button}>Портфолио</div>
            </div>
          </div>
          {/* <div className={scss.heshtags}>
            <div className={scss.scroll_left}>
              #Веб_разработка #Сайт_под_ключ #Брендинг #SEO #Контент_маркетинг
              #SMM #UX_дизайн #UI_дизайн #Интернет_продажи #Мобильная_версия
              #Адаптивный_дизайн #Дизайн_интерфейсов #Оптимизация
              #Контекстная_реклама #Маркетинг #Аналитика #Увеличение_продаж
            </div>
            <div className={scss.scroll_right}>
              #Реклама_в_интернете #Разработка_логотипа #Таргетинг
              #Конкурентный_анализ #Автоматизация #Веб_сайт #Корпоративный_сайт
              #Продвижение_бренда #Социальные_сети #Фирменный_стиль
              #Пользовательский_опыт #Контент #Продажи #Целевая_аудитория
              #Портфолио #Маркетинг_стратегия
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HeroContent;
