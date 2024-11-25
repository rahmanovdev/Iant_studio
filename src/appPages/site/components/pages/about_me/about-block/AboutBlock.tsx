import React from 'react'
import scss from "./AboutBlock.module.scss"

const AboutBlock = () => {
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

        {/* DIGITAL BLOCK  */}
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
              <h4>N экспертов</h4>
              <p>
                В команде более N <br /> сертифицированных <br /> специалистов
                по автоматизации.
              </p>
            </div>
            <div className={scss.block3}>
              <h4>N внедрений</h4>
              <p>
                Мы автоматизировали более N <br /> компаний в Кыргызстане и за
                его <br /> пределами.
              </p>
            </div>
            <div className={scss.block4}>
              <h4>N клиентов</h4>
              <p>
                Оказываем тех поддержку, <br /> сопровождение и постпродажное{" "}
                <br /> обслуживание более N нашим <br /> постоянным клиентам.
              </p>
            </div>
          </div>
        </div>
        {/* DIGITAL BLOCK  */}
      </div>
    </div>
  </section>
);
}

export default AboutBlock;