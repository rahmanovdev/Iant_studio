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
  const sortedProjects = [...projects].sort((a, b) => {
    const formatDate = (dateStr: string) => {
      const [day, month, year] = dateStr.split('-');
      return new Date(`${year}-${month}-${day}`);
    };
  
    const dateA = formatDate(a.realeseDate);
    const dateB = formatDate(b.realeseDate);
  
    console.log("dateA", dateA, "dateB", dateB); 
    return dateA.getTime() - dateB.getTime();  
  });
  

  return (
    <section className={scss.Main}>
      <div className="container">
        <div className={scss.content}>
          {/* HEAD */}
          <div className={scss.ourWorks_head}>
            <div className={scss.left}>
              <h1>Портфолию веб-сайтов</h1>
              <p>Кейсы внедрений и разработки</p>
            </div>
            <div className={scss.right}>
              <p>
                Профессиональные услуги <br /> по внедрению и разработке.
              </p>
              <div className={scss.line}></div>
              <BsBag />
            </div>
          </div>
          {/* HEAD */}

          {/* BOTTOM SECTION */}
          <div className={scss.ourWorks_bottom}>
            <div className={scss.projectBlocks}>
              {sortedProjects.map((el, idx) => (
                <div
                  data-aos="fade-up"
                  className={`${scss.projectBlock} ${el.comingSoon ? scss.comingSoon : ""}`}
                  key={idx} 
                >
                  {el.comingSoon ? (
                    <> <p className={scss.soon}>СКОРО</p> </>
                  ) : (
                    <>
                      <Image
                        src={el.img}
                        alt="Project Image"
                        width={400}
                        height={350}
                        className={scss.bgImg}
                      />
                    </>
                  )}
                  <div className={scss.text}>
                    <h2
                      style={{
                        marginTop: "30px",
                        marginBottom: "-18px",
                        fontSize: "20px",
                      }}
                      data-aos="fade-up"
                    >
                      {el.title}
                    </h2>
                    <h4 data-aos="fade-up">{el.name}</h4>
                    <Link href={el.comingSoon ? "#" : `/projectDetails/${el.id}`}>
                      <button
                        onClick={scrollToTop}
                        disabled={el.comingSoon}
                        className={el.comingSoon ? scss.disabledButton : ""}
                      >
                        Перейти
                      </button>
                    </Link>
                  </div>
                  {/* FOR MOBILE */}
                  {!el.comingSoon && (
                    <Image
                      src={el.img2}
                      alt="Secondary Project Image"
                      width={400}
                      height={200}
                    />
                  )}
                  {/* FOR MOBILE */}
                </div>
              ))}
            </div>
          </div>
          {/* BOTTOM SECTION */}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
