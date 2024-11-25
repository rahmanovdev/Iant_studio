"use client";
import Image from "next/image";
import scss from "./Projects.module.scss";
import { projects } from "@/constants/projects";

const Projects = () => {
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
              <div className={scss.projectBlock} key={idx}>
                <Image
                  src={el.img}
                  alt=""
                  width={400}
                  height={200}
                  className={scss.bgImg}
                />
                <div className={scss.text}>
                  <h2>{el.title}</h2>
                  <h4>{el.description}</h4>
                  <button>Перейти</button>
                </div>
                <Image src={el.img2} alt="" width={400} height={200} />
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Projects;
