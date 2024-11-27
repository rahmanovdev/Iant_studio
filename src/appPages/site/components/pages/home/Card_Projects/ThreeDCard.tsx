"use client";

import Image from "next/image";
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../../../../components/ui/3d-card";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function ThreeDCardDemo() {
  return (
    <BackgroundGradient className="h-[558px] w-[382px] rounded-[22px] flex items-center justify-center">
      <CardContainer className="inter-var  h-[560px]  rounded-[22px]  flex items-center justify-center">
        <CardBody className="bg-black h-full p-4 flex flex-col gap-y-4 rounded-[22px]">
          <CardItem
            translateZ="50"
            className="text-xl py-2 px-2  font-bold text-neutral-600 text-white"
          >
            Make things float in air
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 py-2 px-2 text-sm max-w-sm text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full h-full  ">
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-full  w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20 py-2">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black bg-white  dark:bg-white dark:text-black text-black text-xs font-bold"
            >
              На сайт
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black  bg-white  dark:bg-white dark:text-black text-black text-xs font-bold"
            >
              Про кейс
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </BackgroundGradient>
  );
}
