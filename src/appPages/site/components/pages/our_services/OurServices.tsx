import React, { FC } from "react";
import scss from "./OurServices.module.scss";
import { GiCheckMark } from "react-icons/gi";
import Contacts from "../contacts/Contacts";

const OurServices: FC = () => {
  return (
    <section className={scss.OurServices}>
      <video autoPlay loop muted playsInline className={scss.backgroundVideo}>
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.hero1}>
            <div className={scss.left}></div>
            <div className={scss.right}>
              <h1>Создание веб-сайтов</h1>
              <span>
                Разработка уникального веб-сайта для вас, включая полный цикл
                работ над сайтом, <br /> от информационной сессии до запуска
                коммерческого веб-сайта и его поддержки.
              </span>
              <h2>Этапы работ</h2>
              <ul>
                <li>
                  <span>
                    <GiCheckMark />
                  </span>
                  Обсуждение и разработка проекта
                </li>
                <li>
                  <span>
                    <span>
                      <GiCheckMark />
                    </span>
                  </span>
                  Разработка и утверждение дизайна веб-сайта
                </li>
                <li>
                  <span>
                    <span>
                      <GiCheckMark />
                    </span>
                  </span>
                  Верстка веб-сайта
                </li>
                <li>
                  <span>
                    <span>
                      <GiCheckMark />
                    </span>
                  </span>
                  Программирование веб-сайта
                </li>
                <li>
                  <span>
                    <span>
                      <GiCheckMark />
                    </span>
                  </span>
                  Интеграция системы управления и контента веб-сайта
                </li>
                <li>
                  <span>
                    <span>
                      <GiCheckMark />
                    </span>
                  </span>
                  Оптимизация веб-сайта к индексации и поисковой выдачи
                </li>
                <li>
                  <span>
                    <span>
                      <GiCheckMark />
                    </span>
                  </span>
                  Круглосуточная поддержка веб-сайта
                </li>
              </ul>
            </div>
          </div>
          <div className={scss.hero2}>
            <div className={scss.left}>
              <h1>Дизайн</h1>
              <span>
                Разработка уникального макета сайта, отдельных элементов сайта,
                <br />
                баннеров. Дизайн разрабатывается с учетом вкусовых предпочтений
                <br />
                клиента и с учетом последних тенденций в дизайне веб-сайтов.
                <br />
              </span>
              <h2>Этапы работ</h2>
              <ul>
                <li>
                  <span>
                    <span>
                      <GiCheckMark />
                    </span>
                  </span>
                  Обсуждение проекта
                </li>
                <li>
                  <span>
                    <span>
                      <GiCheckMark />
                    </span>
                  </span>
                  Заключение договора
                </li>
                <li>
                  <span>
                    <span>
                      <GiCheckMark />
                    </span>
                  </span>
                  Разработка структуры веб-сайта
                </li>
                <li>
                  <span>
                    <span>
                      <GiCheckMark />
                    </span>
                  </span>
                  Разработка прототипа веб-сайта
                </li>
                <li>
                  <span>
                    <span>
                      <GiCheckMark />
                    </span>
                  </span>
                  Утверждение стиля веб-сайта
                </li>
                <li>
                  <span>
                    <span>
                      <GiCheckMark />
                    </span>
                  </span>
                  Оптимизация веб-сайта к индексации и поисковой выдачи
                </li>
                <li>
                  <span>
                    <span>
                      <GiCheckMark />
                    </span>
                  </span>
                  Разработка дизайна Главной страницы веб-сайта
                </li>
                <li>
                  <span>
                    <span>
                      <GiCheckMark />
                    </span>
                  </span>
                  Разработка дизайна внутренних страниц веб-сайта и всплывающих
                  окон
                </li>
                <li>
                  <span>
                    <span>
                      <GiCheckMark />
                    </span>
                  </span>
                  Верстка макета
                </li>
              </ul>
            </div>
            <div className={scss.right}></div>
          </div>
          <div className={scss.hero1}>
            <div className={scss.left}></div>
            <div className={scss.right}>
              <h1>SEO оптимизация</h1>
              <span>
                Оптимизация веб-сайта для поднятия Вашей позиции в результатах
                <br />
                выдачи поисковых систем с целью увеличения сетевого трафика и
                <br />
                потенциальных клиентов, а затем и монетизации этого трафика.
              </span>
              <h2>Этапы работ</h2>
              <ul>
                <li>
                  <span>
                    <GiCheckMark />
                  </span>
                  Обсуждение проекта
                </li>
                <li>
                  <span>
                    <GiCheckMark />
                  </span>
                  Заключение договора
                </li>
                <li>
                  <span>
                    <GiCheckMark />
                  </span>
                  Внутренняя оптимизация
                </li>
                <li>
                  <span>
                    <GiCheckMark />
                  </span>
                  Внешняя оптимизация
                </li>
                <li>
                  <span>
                    <GiCheckMark />
                  </span>
                  Наполнение социальных сетей
                </li>
                <li>
                  <span>
                    <GiCheckMark />
                  </span>
                  Изготовление печатной продукции
                </li>
              </ul>
            </div>
          </div>
          <div className={scss.hero2}>
            <div className={scss.left}>
              <h1>Поддержка веб-сайта</h1>
              <span>
                Поддержка работоспособности веб-сайта. <br /> Оптимизация кода
                веб-сайта, обновление системы управления веб-сайта, <br /> а
                также отдельных моделей для оптимизации Вашей работы на
                веб-сайте. Лечение сайта от вирусов.
              </span>
              <h2>Этапы работ</h2>
              <ul>
                <li>
                  <span>
                    <GiCheckMark />
                  </span>
                  Обсуждение проекта
                </li>
                <li>
                  <span>
                    <GiCheckMark />
                  </span>
                  Заключение договора
                </li>
                <li>
                  <span>
                    <GiCheckMark />
                  </span>
                  Проверка статуса сайта и обнаружение проблем
                </li>
                <li>
                  <span>
                    <GiCheckMark />
                  </span>
                  Лечение веб-сайта от вирусов
                </li>
                <li>
                  <span>
                    <GiCheckMark />
                  </span>
                  Обновление CMS и модулей
                </li>
                <li>
                  <span>
                    <GiCheckMark />
                  </span>
                  Оптимизация кода веб-сайта
                </li>
                <li>
                  <span>
                    <GiCheckMark />
                  </span>
                  Замена контента веб-сайта
                </li>
                <li>
                  <span>
                    <GiCheckMark />
                  </span>
                  Наполнение веб-сайта контентом окон
                </li>
              </ul>
            </div>
            <div className={scss.right}></div>
          </div>
        </div>
      </div>
      <Contacts />
    </section>
  );
};

export default OurServices;
