"use client";
import Image from "next/image";
import scss from "./Projects.module.scss";
import { projects } from "@/constants/projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import SoonProjects from "@/ui/comingSoon/SoonProjects";

const Projects = () => {

  useEffect(() => {
    AOS.init({
      once: true, 
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className={scss.projects}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.projectText}>
            <h2>Наши проекты</h2>
            <p>
              Мы разрабатываем современные веб-приложения и цифровые решения,
              которые помогают пользователям достигать целей.
            </p>
          </div>
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
                  <h2>{el.title}</h2>
                  <h4>{el.name}</h4>
                  <Link href={`/projectDetails/${el.id}`}>
                      <button onClick={scrollToTop}>Перейти</button>
                  </Link>
                </div>
                <Image src={el.img2} alt="" width={400} height={200} />
              </div>
            ))}
          </div>
          <hr />

          <SoonProjects/>
        </div>
      </div>
    </section>
  );
};

export default Projects;
