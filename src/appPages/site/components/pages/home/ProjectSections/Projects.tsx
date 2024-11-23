"use client";
import Image from "next/image";
import scss from "./Projects.module.scss";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "HKU",
      img: "https://optim.tildacdn.one/tild3864-3861-4264-a335-333831393865/-/resize/1000x/-/format/webp/__DESC.png",
      img2: "https://optim.tildacdn.one/tild6432-6566-4362-b432-343861386636/-/resize/352x/-/format/webp/__MOB.png",
      description: "Корейский университет",
      href: "",
    },
    {
      id: 2,
      title: "HKU",
      img: "https://optim.tildacdn.one/tild3864-3861-4264-a335-333831393865/-/resize/1000x/-/format/webp/__DESC.png",
      img2: "https://optim.tildacdn.one/tild6432-6566-4362-b432-343861386636/-/resize/352x/-/format/webp/__MOB.png",
      description: "Корейский университет",
    },
    {
      id: 3,
      title: "HKU",
      img: "https://optim.tildacdn.one/tild3864-3861-4264-a335-333831393865/-/resize/1000x/-/format/webp/__DESC.png",
      img2: "https://optim.tildacdn.one/tild6432-6566-4362-b432-343861386636/-/resize/352x/-/format/webp/__MOB.png",
      description: "Корейский университет",
    },
    {
      id: 4,
      title: "HKU",
      img: "https://optim.tildacdn.one/tild3864-3861-4264-a335-333831393865/-/resize/1000x/-/format/webp/__DESC.png",
      img2: "https://optim.tildacdn.one/tild6432-6566-4362-b432-343861386636/-/resize/352x/-/format/webp/__MOB.png",
      description: "Корейский университет",
    },
  ];

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
