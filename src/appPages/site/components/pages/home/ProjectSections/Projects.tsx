"use client";
import Image from "next/image";
import scss from "./Projects.module.scss";
import { projects } from "@/constants/projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const formatDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('-');
  return new Date(`${year}-${month}-${day}`);
};

const Projects = () => {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toProject = () => {
    router.push('/our_works')
  }

  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = formatDate(a.realeseDate);
    const dateB = formatDate(b.realeseDate);
    return dateA.getTime() - dateB.getTime();  
  });

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
            {sortedProjects.slice(0, 4).map((el, idx) => (
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



          <div className={scss.button}>
            <button onClick={toProject}
            >
              Все проекты
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
