"use client";

import React from "react";
import scss from "./ProjectsDetails.module.scss";
import { projects } from "@/constants/projects";
import { useParams } from "next/navigation";
import Feedback from "../../about_me/feedback/Feedback";
// import Image from "next/image";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { RiSupabaseLine } from "react-icons/ri";
import SocialIcons from "@/ui/SocialIcons";



const ProjectsDetails = () => {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const itemDet = projects?.find((item) => item.id.toString() === id);
  return (
    <section className={scss.ProjectsDetails}>
      <div className="container_for_details">
        <div className={scss.content}>
          <h1>HWASIN KOREA KSTU</h1>
          <span>ВЕБ САЙТ</span>
          <div className={scss.projectDetailsBlock}>
            <div className={scss.left}>
              {
                //     <Image
                //     src={itemDet?.img}
                //     alt=""
                //     width={400}
                //     height={400}
                //     className={scss.bgImg}
                //   />

                <img src={itemDet?.img} alt="" />
              }
            </div>

            <div className={scss.right}>
              <div className="container_for_description">
                <div className={scss.right_top}>
                  <h4>Hwasin KSTU</h4>
                  <p>{itemDet?.about}</p>
                </div>

                <div className={scss.right_bottom}>
                  <h4>Main Functionality</h4>
                  <p>{itemDet?.description}</p>
                </div>
                <button>Link to the site</button>
              </div>
            </div>

          </div>

          <div className={scss.used_tech}>
            <h3>Технологии которые использовались</h3>
            <div className={scss.main_used_block}>
            <div className={scss.block}>
                <TbBrandTypescript/>
            </div>
            <div className={scss.block}>
                <RiNextjsLine />
          </div>
          <div className={scss.block}>
                <FaReact />
          </div>
          <div className={scss.block}>
                <SiRedux />
          </div>
          <div className={scss.block}>
                <FaNode />
          </div>
          <div className={scss.block}>
                <RiSupabaseLine />
          </div>
            </div>
        </div>

      </div>
      </div>



      <Feedback/>
      <SocialIcons/>
    </section>
  );
};

export default ProjectsDetails;
