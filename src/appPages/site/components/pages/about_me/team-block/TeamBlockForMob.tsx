"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import styles from "./TeamBlockForMob.module.scss";

const TeamBlockForMob = () => {
  const teamPeopleInfo = {
    image:
      "https://www.photoland.com.au/wp-content/uploads/2021/09/Can-People-Get-Passport-Photos-Done-Online-1.jpg",
    name: "Баланчаев Баланча",
    position: "Frontend Developer",
  };
  return (
    <section className={styles.main_slides}>
      <div className="container">
      <div className={styles.team_head}>
        <div className={styles.left}>
          <h5>НАША КОМАНДА</h5>
          <h1>
            Команда <span>профессионалов</span>
          </h1>
          <p>
            Вы не поверите, но мы правда любим свою работу <br /> и делаем её
            хорошо.
          </p>
        </div>
      </div>
      </div>

      <div className={styles.teamBlockContainer}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.profile}>
              <img
                src={teamPeopleInfo.image}
                alt="Person 1"
                className={styles.profile_image}
              />
              <div className={styles.info}>
                <h3 className={styles.name}>{teamPeopleInfo.name}</h3>
                <p className={styles.position}>{teamPeopleInfo.position}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.profile}>
              <img
                src={teamPeopleInfo.image}
                alt="Person 1"
                className={styles.profile_image}
              />
              <div className={styles.info}>
                <h3 className={styles.name}>{teamPeopleInfo.name}</h3>
                <p className={styles.position}>{teamPeopleInfo.position}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.profile}>
              <img
                src={teamPeopleInfo.image}
                alt="Person 1"
                className={styles.profile_image}
              />
              <div className={styles.info}>
                <h3 className={styles.name}>{teamPeopleInfo.name}</h3>
                <p className={styles.position}>{teamPeopleInfo.position}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.profile}>
              <img
                src={teamPeopleInfo.image}
                alt="Person 1"
                className={styles.profile_image}
              />
              <div className={styles.info}>
                <h3 className={styles.name}>{teamPeopleInfo.name}</h3>
                <p className={styles.position}>{teamPeopleInfo.position}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TeamBlockForMob;
