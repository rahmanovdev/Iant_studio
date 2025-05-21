"use client";

import React from "react";
import Image from "next/image";
import styles from "./ProjectsDetails.module.scss";
import { projects } from "@/constants/projects";
import { useParams } from "next/navigation";
import Feedback from "../../about_me/feedback/Feedback";
import SocialIcons from "@/ui/SocialIcons";
// import { TbBrandTypescript } from "react-icons/tb";
// import { RiNextjsLine } from "react-icons/ri";
// import { FaReact } from "react-icons/fa";
// import { SiRedux } from "react-icons/si";
// import { BiLogoPostgresql } from "react-icons/bi";
// import { FaPython } from "react-icons/fa";
// import { FaDocker } from "react-icons/fa";
// import { IconType } from "react-icons/lib";

// interface IIcon {
//   icon: IconType;
// }



const ProjectsDetails = () => {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const project = projects?.find((item) => item.id.toString() === id);

  if (!project) {
    return <p className={styles.notFound}>Project not found</p>;
  }

  return (
    <section className={styles.ProjectsDetails}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>{project.title}</h1>
          <span>{project.description}</span>
        </header>

        <div className={styles.projectDetailsBlock}>
          <div className={styles.left}>
            <Image
              src={project.img}
              alt={project.title}
              className={styles.image}
              width={500} 
              height={300} 
              objectFit="cover" 
              priority={true} 
            />
          </div>

          <div className={styles.right}>
            <div className={styles.descriptionBlock}>
              <p>{project.about}</p>
            </div>

            <div className={styles.functionalityBlock}>
              <h4>Основные функции</h4>
              <p>{project.description}</p>
            </div>

            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              Перейти на сайт  
            </a>
          </div>
        </div>

        <section className={styles.techStack}>
          <h3>Технологии</h3>
          <div className={styles.iconsContainer}>
            {/* <div className={styles.iconBlock}>
              <project.tech />
            </div>
            <div className={styles.iconBlock}>
              <RiNextjsLine />
            </div>
            <div className={styles.iconBlock}>
              <FaReact />
            </div>
            <div className={styles.iconBlock}>
              <SiRedux />
            </div>
            <div className={styles.iconBlock}>
              <FaPython/>
            </div>
            <div className={styles.iconBlock}>
              <BiLogoPostgresql />
            </div>
            <div className={styles.iconBlock}>
              <FaDocker />
            </div> */}

            {
              project.tech.map(el => (<p className={styles.iconBlock} key={el}>{el}</p>))
            }
          </div>
        </section>
      </div>

      <Feedback />
      <SocialIcons />
    </section>
  );
};

export default ProjectsDetails;