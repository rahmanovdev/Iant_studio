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
                        <h1>Немного <span>о нас</span></h1>
                        <h4>«Мы делаем больше, чем просто программы <br /> для автоматизации бизнес-процессов»</h4>
                        <p>Наша задача — помочь бизнесу выйти на максимальную <br /> эффективность, экономя массу времени и денег, при помощи <br /> технологий для упрощения ежедневных процессов, а также <br /> инструментов для управления клиентами и умной аналитики, <br /> которые помогают всегда оставаться на высоте.</p>
                    </div>

                    <div className={scss.about_img}></div>
                </div>


            </div>
        </div>
    </section>
)
}

export default AboutBlock;