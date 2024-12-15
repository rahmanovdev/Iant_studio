"use client";
import React from "react";
import scss from "./OurWorks.module.scss";
import Image from "next/image";
import { projects } from "@/constants/projects";
import Link from "next/link";
import { BsBag } from "react-icons/bs";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const OurWorks = () => {
  return (
    <section className={scss.Main}>
      <div className="container">
        <div className={scss.content}>
          {/* HEAD  */}
          <div className={scss.ourWorks_head}>
            <div className={scss.left}>
              <h1>Портфолию веб-сайтов</h1>
              <p>Кейсы внедрений и разработки</p>
            </div>
            <div className={scss.right}>
              <p>
                Профессиональные услуги <br /> по внедрению и разработке .
              </p>
              <div className={scss.line}></div>
              <BsBag />
            </div>
          </div>
          {/* HEAD  */}

          {/* BOTTOM SECTION  */}
          <div className={scss.ourWorks_bottom}>
            <div className={scss.projectBlocks}>
              {projects.map((el, idx) => (
                <div data-aos="fade-up" className={scss.projectBlock} key={idx}>
                  <Image
                    src={el.img}
                    alt=""
                    width={400}
                    height={350}
                    className={scss.bgImg}
                  />
                  <div className={scss.text}>
                    <h2 data-aos="fade-up">{el.title}</h2>
                    <h4 data-aos="fade-up">{el.name}</h4>
                    <Link data-aos="fade-up" href={`/projectDetails/${el.id}`}>
                      <button onClick={scrollToTop}>Перейти</button>
                    </Link>
                  </div>
                  <Image src={el.img2} alt="" width={400} height={200} />
                </div>
              ))}
            </div>
          </div>
          {/* BOTTOM SECTION  */}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
