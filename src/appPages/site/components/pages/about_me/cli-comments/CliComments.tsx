"use client";
import React from "react";
import Image from "next/image";
import scss from "./CliCommetns.module.scss";
import useSendReview from "@/store/useSendReview";
import ClientReviewModal from "@/ui/clientReviewModal/ClientReviewModal";

const CliComments = () => {
  const { openModal } = useSendReview();

  const usersComments = [
    {
      image:
        "https://imgcdn.stablediffusionweb.com/2024/5/6/2b1d888a-a22f-49d5-94b2-d9e1fb2c2640.jpg",
      name: "Абдурахман Абдибаитов",
      position: "Frontend Developer",
      description:
        "Круто. Особенно порадовал профессиональный подход, внимание к деталям и постоянная связь на всех этапах разработки. Теперь у меня современный, стильный и функциональный сайт, который полностью отвечает моим запросам. Рекомендую iANT как надежных специалистов в своей области! Спасибо за качественно выполненный сайт! Понравился ваш подход — вы оперативно реагировали на мои запросы и всегда находили подходящие решения. Дизайн получился просто шикарным.",
    },
    {
      image:
        "https://imgcdn.stablediffusionweb.com/2024/5/6/2b1d888a-a22f-49d5-94b2-d9e1fb2c2640.jpg",
      name: "Жумадил Рахмонов",
      position: "Fullstack Developer",
      description:
        "Хочу искренне поблагодарить команду iANT за разработку моего сайта! Все мои запросы были учтены, а работа выполнена на высоком уровне и точно в срок. Особенно впечатлил профессионализм, внимание к деталям и постоянная обратная связь на всех этапах работы. В результате я получил современный, стильный и удобный сайт, который полностью отвечает моим ожиданиям. Рекомендую iANT как настоящих профессионалов в своей области! Благодарю за отлично выполненную работу! Очень понравился ваш подход — вы быстро реагировали на мои запросы и всегда предлагали оптимальные решения. Дизайн сайта вышел просто великолепным.",
    },
    {
      image:
        "https://imgcdn.stablediffusionweb.com/2024/5/6/2b1d888a-a22f-49d5-94b2-d9e1fb2c2640.jpg",
      name: "Иван Петрович",
      position: "System Administrator",
      description:
        "Все пожелания были учтены, работа выполнена качественно и в срок. Особенно порадовал профессиональный подход, внимание к деталям и постоянная связь на всех этапах разработки. Теперь у меня современный, стильный и функциональный сайт, который полностью отвечает моим запросам. Рекомендую iANT как надежных специалистов в своей области! Спасибо за качественно выполненный сайт! Понравился ваш подход — вы оперативно реагировали на мои запросы и всегда находили подходящие решения. Дизайн получился просто шикарным.",
    },
  ];

  return (
    <>
      <section className={scss.Main}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.head_block}>
              <h5>
                ЧТО ГОВОРЯТ ОБ I<span>ANT</span>
              </h5>
              <h1>
                Отзывы <span>клиентов</span>
              </h1>
            </div>

            <div className={scss.com_block}>
              {usersComments.map((user, index) => (
                <div className={scss.block} key={index}>
                  <div className={scss.img_block}>
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={100}
                      height={100}
                      className={scss.profile_image}
                    />
                    <div className={scss.text_block}>
                      <h5>{user.name}</h5>
                      <h6>{user.position}</h6>
                    </div>
                  </div>
                  <p>{user.description}</p>
                </div>
              ))}
            </div>

            <div className={scss.main_button}>
              <div onClick={openModal} className={scss.button}>
                Оставить отзыв
              </div>
            </div>
          </div>
        </div>
      </section>
      <ClientReviewModal />
    </>
  );
};

export default CliComments;
