"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import scss from "./TeamBlock.module.scss";
import { PiCubeFocus } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
import useSignUpModal from "@/store/useSignUpCommand";
import CommandModal from "@/ui/commandModal/CommandModal";

const TeamBlock = () => {
  const { openModal } = useSignUpModal();

  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  const teamPeopleInfo = {
    image:
      "https://www.photoland.com.au/wp-content/uploads/2021/09/Can-People-Get-Passport-Photos-Done-Online-1.jpg",
    name: "Баланчаев Баланча",
    position: "Frontend Developer",
  };

  return (
    <section id="team-block" className={scss.Main}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.team_head}>
            <div className={scss.left}>
              <h5>НАША КОМАНДА</h5>
              <h1>
                Команда <span>профессионалов</span>
              </h1>
              <p>
                Вы не поверите, но мы правда любим свою работу <br /> и делаем
                её хорошо.
              </p>
            </div>

            <div className={scss.right}>
              <div className={scss.line}></div>
              <div className={scss.block}>
                <PiCubeFocus />
                <p>
                  Систематизируем и <br /> автоматизируем ваш бизнес
                </p>
              </div>
            </div>
          </div>

          {/* TEAM IMG */}
          <div className={scss.team_images}>
            <div className={scss.image_block}>
              {[0, 500, 1000, 1500].map((delay, index) => (
                <div
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={delay}
                  data-aos-duration="500"
                  className={scss.profile}
                >
                  <Image
                    src={teamPeopleInfo.image}
                    alt={`Person ${index + 1}`}
                    className={scss.profile_image}
                    width={500} 
                    height={500} 
                  />
                  <div className={scss.info}>
                    <h3 className={scss.name}>{teamPeopleInfo.name}</h3>
                    <p className={scss.position}>{teamPeopleInfo.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* TEAM IMG */}

          <div className={scss.experts_section}>
            <div className={scss.number_block}>
              <h1 className={scss.number}>20</h1>
              <h1>+</h1>
            </div>

            <p className={scss.description}>Профессиональных IT экспертов</p>
            <button onClick={openModal} className={scss.join_button}>
              ➤ Хочу в команду
            </button>
          </div>
        </div>
      </div>

      <CommandModal />
    </section>
  );
};

export default TeamBlock;
