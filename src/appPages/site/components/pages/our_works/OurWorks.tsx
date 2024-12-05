"use client";

import Image from "next/image";
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../../../components/ui/3d-card";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import scss from "./OurWorks.module.scss";
import { projects } from "@/constants/projects";
import Feedback from "../about_me/feedback/Feedback";

export function OurWorks() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={`${scss.our_works} w-full `}>
      <div className="container mx-auto ">
        <div className="text-center mt-20">
          <h1
            className={`text-[26px] sm:text-[30px] md:text-[40px] font-bold mb-4 leading-snug w-[90%] mx-auto`}
          >
            Создаем суперэффективные сайты и строим долгосрочное партнерство
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-300 mt-20 ">
            Наши работы
          </h2>
        </div>
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
                      height="1000"
                      width="1000"
                      className="h-[80%] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={el.title}
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
                    <Link onClick={scrollToTop} href={`/projectDetails/${el.id}`}>
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
        </div>
        <Feedback />
      </div>
    </div>
  );
}
