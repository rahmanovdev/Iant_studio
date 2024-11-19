"use client";
import scss from "./Decides.module.scss";
import { FaUsers } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { PiTreeStructureFill } from "react-icons/pi";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { FaArrowsDownToPeople } from "react-icons/fa6";

const Decides = () => {
  const texts = [
    {
      title: "Обработка клиента и призыв к покупке",
      icon: <FaUsers />,
    },
    {
      title: "Повышение доверия бренду",
      icon: <IoShieldCheckmark />,
    },
    {
      title: "Увеличение прибыли",
      icon: <FaMoneyBillTrendUp />,
    },
    {
      title: "Эффективная структра",
      icon: <PiTreeStructureFill />,
    },
    {
      title: "Ответы на вопросы",
      icon: <FaPersonCircleQuestion />,
    },
    {
      title: "Улучшение пользовательского опыта",
      icon: <FaArrowsDownToPeople />,
    },
  ];

  return (
    <section className={scss.decides}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.decidesText}>
            <h2>Какие задачи решает веб сайт</h2>
            <p>
              Веб-сайт — это цифровая платформа, предназначенная для
              предоставления информации, взаимодействия с пользователями,
              выполнения задач или развлечения. Задачи веб-сайтов могут
              включать:
            </p>
          </div>
          <div className={scss.blocks}>
            {texts.map((el, idx) => (
              <div className={scss.block} key={idx}>
                <h4>
                  {el.title}
                  <span>{el.icon}</span>
                </h4>
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Decides;
