"use client";

import React, { useEffect, useState } from "react";
import scss from "./AboutBlock.module.scss";


const useCountUp = (target: number, isVisible: boolean, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval: number;

    if (isVisible) {
      const increment = Math.ceil(target / (duration / 10)); 
      interval = window.setInterval(() => {
        setCount((prevCount) => {
          if (prevCount + increment >= target) {
            clearInterval(interval);
            return target; 
          }
          return prevCount + increment;
        });
      }, 50); 
    }

    return () => clearInterval(interval);
  }, [isVisible, target, duration]);

  return count;
};


const AboutBlock = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const digitalBlock = document.querySelector(`.${scss.digital_block}`);
    if (digitalBlock) observer.observe(digitalBlock);

    return () => {
      if (digitalBlock) observer.unobserve(digitalBlock);
    };
  }, []);

  const expertsCount = useCountUp(27, isVisible, 6000); 
  const implementationsCount = useCountUp(21, isVisible, 6000);
  const clientsCount = useCountUp(30, isVisible, 6000);

  return (
    <section className={scss.Main}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.about_block}>
            <div className={scss.about_text}>
              <h5>О КОМПАНИИ</h5>
              <h1>
                Немного <span>о нас</span>
              </h1>
              <h4>
                «Мы делаем больше, чем просто программы <br /> для автоматизации
                бизнес-процессов»
              </h4>
              <p>
                Наша задача — помочь бизнесу выйти на максимальную <br />
                эффективность, экономя массу времени и денег, при помощи <br />
                технологий для упрощения ежедневных процессов, а также <br />
                инструментов для управления клиентами и умной аналитики, <br />
                которые помогают всегда оставаться на высоте.
              </p>
            </div>

            <div className={scss.about_img}></div>
          </div>

          {/* DIGITAL BLOCK */}
          <div className={scss.digital_block}>
            <div className={scss.block1}>
              <h6>
                Компания I<span>ANT</span> Studio в цифрах: <br />
                <span>комплексная автоматизация</span> <br /> управления бизнесом
              </h6>
              <div className={scss.under_block}>
                <div className={scss.year_block}>
                  <p>На рынке с</p>
                  <h5>2024</h5>
                </div>

                <div className={scss.underline}></div>
                <p>
                  Внедряем <br /> только лучшие <br /> инструменты
                </p>
              </div>
            </div>

            <div className={scss.main_dig_block}>
              <div className={scss.block2}>
                <h4>{expertsCount} Экспертов</h4>
                <p>
                  В команде более {expertsCount} сертифицированных специалистов по автоматизации.
                </p>
              </div>
              <div className={scss.block3}>
                <h4>{implementationsCount} Внедрений</h4>
                <p>
                  Мы автоматизировали более {implementationsCount} компаний в Кыргызстане и за его пределами.
                </p>
              </div>
              <div className={scss.block4}>
                <h4>{clientsCount} Клиентов</h4>
                <p>
                  Оказываем тех поддержку, сопровождение и постпродажное обслуживание более {clientsCount} нашим постоянным клиентам.
                </p>
              </div>
            </div>
          </div>
          {/* DIGITAL BLOCK */}
        </div>
      </div>
    </section>
  );
};


export default AboutBlock;
