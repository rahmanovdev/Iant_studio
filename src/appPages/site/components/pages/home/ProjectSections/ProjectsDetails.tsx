"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useParams } from "next/navigation";
import { projects } from "@/constants/projects";
import scss from "./ProjectsDetails.module.scss";
import { TbBrandTypescript } from "react-icons/tb"; // Tabler Icons
import { RiNextjsLine, RiSupabaseLine } from "react-icons/ri"; // Remix Icons
import { FaReact, FaNode } from "react-icons/fa"; // Font Awesome
import { SiRedux } from "react-icons/si"; // Simple Icons

// Динамикалык импорттор performance үчүн
const Feedback = dynamic(() => import("../../about_me/feedback/Feedback"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const SocialIcons = dynamic(() => import("@/ui/SocialIcons"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

// Технологиялар массиви
const TECHNOLOGIES = [
  { Icon: TbBrandTypescript, name: "TypeScript" },
  { Icon: RiNextjsLine, name: "Next.js" },
  { Icon: FaReact, name: "React" },
  { Icon: SiRedux, name: "Redux" },
  { Icon: FaNode, name: "Node.js" },
  { Icon: RiSupabaseLine, name: "Supabase" },
];

const ProjectsDetails = () => {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const itemDet = projects?.find((item) => item.id.toString() === id);

  if (!itemDet) {
    return <div className="container_for_details">Project not found</div>;
  }

  return (
    <section className={scss.ProjectsDetails}>
      <div className="container_for_details">
        <div className={scss.content}>
          <h1>HWASIN KOREA KSTU</h1>
          <span>ВЕБ САЙТ</span>

          <div className={scss.projectDetailsBlock}>
            <div className={scss.left}>
              {itemDet?.img && (
                <Image
                  src={itemDet.img}
                  alt={itemDet.title || "Project image"}
                  width={700}
                  height={500}
                  quality={70}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEwVz0+O1E5R0RUYXp8ZT9DXXd6eX+Ij4qSlZaVR1BRYWdgZmByfoX/2wBDARUXFx4aHR4eHoVDOUOFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYX/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  onError={(e) => {
                    e.currentTarget.src = "/fallback-image.jpg"; // Fallback сүрөт
                  }}
                />
              )}
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
                {itemDet?.description && (
                  <a
                    href={itemDet.description}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Link to the site
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className={scss.used_tech}>
            <h3>Технологии которые использовались</h3>
            <div className={scss.main_used_block}>
              {TECHNOLOGIES.map(({ Icon, name }) => (
                <div key={name} className={scss.block}>
                  <Icon aria-label={name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Feedback />
      <SocialIcons />
    </section>
  );
};

export default ProjectsDetails;
