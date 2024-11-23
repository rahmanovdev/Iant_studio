import BackgroundSecond from "../background2/BackgroundSecond";
import scss from "./AboutMeSection.module.scss";

const AboutMeSection = () => {
  return (
    <>
      <div className={scss.about_me}>
        <BackgroundSecond />
        <div className="container">
          <div className={scss.content}>
            <div className={scss.aboutMeText}>
              <h2>Создание сайтов в Кыргызстане</h2>
              <p>
                I<span>ANT Studio</span> — ваш надёжный партнер в создании
                продающих сайтов.
                <br /> Мы глубоко погружаемся в специфику вашего бизнеса, чтобы
                разработать <br />
                не просто сайт, а эффективный инструмент для привлечения новых
                клиентов и роста продаж
              </p>
            </div>

            <div className={scss.stages}>
              <div className={scss.stage_1}>
                <button>Дизайн</button>
                <ul>
                  <li className={scss.lit}>Проектирование дизайн-макета</li>
                </ul>
                <p>
                  Проектируем и демонстрируем дизайн <br /> будущего сайта в
                  графическом редакторе <br /> Figma на основе ваших требований.
                </p>
                <h3>[ 1 ]</h3>
              </div>
              <div className={scss.stage_2}>
                <button>Разработка</button>
                <ul>
                  <li className={scss.lit}>Разработка сайта с нуля</li>
                </ul>
                <p>
                  Разрабатываем Front-end и Back-end часть <br /> веб-сайта,
                  верстаем и подключаем все <br /> страницы по утвержденному
                  дизайн-макету.
                </p>
                <h3>[ 2 ]</h3>
              </div>
              <div className={scss.stage_1}>
                <button>Запуск сайта</button>
                <ul>
                  <li className={scss.lit}>Полноценный запуск</li>
                </ul>
                <p>
                  Устанавливаем сайт на CMS-систему для <br /> управления
                  контентом, подключаем домен <br /> и хостинг, а также системы
                  аналитики.
                </p>
                <h3>[ 3 ]</h3>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
