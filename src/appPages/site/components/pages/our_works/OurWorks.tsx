"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/projects";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../../../components/ui/3d-card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import scss from "./OurWorks.module.scss";
<<<<<<< HEAD

// Lazy load Feedback component
const Feedback = dynamic(() => import("../about_me/feedback/Feedback"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});
=======
import { projects } from "@/constants/projects";
import Feedback from "../about_me/feedback/Feedback";
import SoonProjects from "@/ui/comingSoon/SoonProjects";
>>>>>>> e8f2e295df1f2729a0f5f1d700e443ff53112d3a

export function OurWorks() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={scss.our_works}>
      <div className="container mx-auto">
        <header className="text-center mt-20">
          <h1 className="text-[26px] sm:text-[30px] md:text-[40px] font-bold mb-4 leading-snug w-[90%] mx-auto">
            Создаем суперэффективные сайты и строим долгосрочное партнерство
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-300 mt-20">
            Наши работы
          </h2>
        </header>

        <div
          className={`${scss.content} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-24`}
        >
          {projects.map((el) => (
            <BackgroundGradient
              key={el.id}
              className="w-full max-w-[320px] h-[460px] rounded-[22px] flex items-center justify-center"
            >
              <CardContainer className="inter-var w-[322px] h-[462px] rounded-[22px] flex items-center justify-center">
                <CardBody className="bg-black w-full h-full p-4 flex flex-col gap-y-4 rounded-[22px]">
                  <CardItem
                    translateZ="50"
                    className="text-xl py-2 px-2 font-bold text-white"
                  >
                    {el.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-300 py-2 px-2 text-sm max-w-sm"
                  >
                    {el.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full h-full">
                    <Image
                      src={el.img}
                      height={1000}
                      width={1000}
                      className="h-[80%] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={el.title}
                      loading="lazy"
                      quality={60}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEwVz0+O1E5R0RUYXp8ZT9DXXd6eX+Ij4qSlZaVR1BRYWdgZmByfoX/2wBDARUXFx4aHR4eHoVDOUOFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYX/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-auto py-2">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={el.description}
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                    >
                      На сайт
                    </CardItem>
                    <Link
                      onClick={scrollToTop}
                      href={`/projectDetails/${el.id}`}
                    >
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                      >
                        Про кейс
                      </CardItem>
                    </Link>
                  </div>

                </CardBody>

              </CardContainer>
            </BackgroundGradient>            
          ))}
      <SoonProjects/>

        </div>
        <Feedback />
      </div>




    </div>
  );
}
