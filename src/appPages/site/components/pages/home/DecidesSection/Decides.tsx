"use client";
import scss from "./Decides.module.scss";

const Decides = () => {
  const texts = [
    {
      title: "Обработка клиента и призыв к покупке",
    },
    {
      title: "Повышение доверия бренду",
    },
    {
      title: "Увеличение прибыли",
    },
    {
      title: "Эффективная структра",
    },
    {
      title: "Ответы на вопросы",
    },
    {
      title: "Улучшение пользовательского опыта",
    },
  ];

  return (
    <section className={scss.decides}>
      <div className="container">
        <div className={scss.content}>
          <h2>Какие задачи решает веб сайт</h2>
          <div className={scss.blocks}>
            {texts.map((el, idx) => (
              <div className={scss.block} key={idx}>
                <ul>
                  <li>{el.title}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Decides;
