"use client";

import React from "react";
import styles from "./ProjectsDetails.module.scss";
import { projects } from "@/constants/projects";
import { useParams } from "next/navigation";
import Feedback from "../../about_me/feedback/Feedback";
import SocialIcons from "@/ui/SocialIcons";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { RiSupabaseLine } from "react-icons/ri";

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
            <img
              src={project.img}
              alt={project.title}
              className={styles.image}
            />
          </div>

          <div className={styles.right}>
            <div className={styles.descriptionBlock}>
              <h4>{project.title}</h4>
              <p>{project.about}</p>
            </div>

            <div className={styles.functionalityBlock}>
              <h4>Main Functionality</h4>
              <p>{project.description}</p>
            </div>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              Link to the site.
            </a>
          </div>
        </div>

        <section className={styles.techStack}>
          <h3>Technologies Used</h3>
          <div className={styles.iconsContainer}>
            <div className={styles.iconBlock}>
              <TbBrandTypescript />
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
              <FaNode />
            </div>
            <div className={styles.iconBlock}>
              <RiSupabaseLine />
            </div>
          </div>
        </section>
      </div>

      <Feedback />
      <SocialIcons />
    </section>
  );
};

export default ProjectsDetails;
