"use client";
import React, { lazy, Suspense, useEffect } from "react";
import scss from "./OurServices.module.scss";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

// TypeScript interfaces
interface ServiceData {
  id: number;
  image: keyof typeof serviceImages;
  title: string;
  description: string;
  features: string[];
  aosDelay?: number;
}

interface ServiceBoxProps {
  data: ServiceData;
}

// Lazy load components
const HeadOurService = lazy(() => import("./HeadOurService"));

// Optimize images with next/image
const serviceImages = {
  service1: "/assets/service1.svg",
  service2: "/assets/service2.svg",
  service3: "/assets/service3.svg",
  service4: "/assets/service4.svg",
} as const;

// Service data structure
const servicesData: ServiceData[] = [
  {
    id: 1,
    image: "service1",
    title: "Создание сайтов",
    description:
      "Современный сайт – это появление новых клиентов и рост высоких продаж!",
    features: [
      "Делаем продающие сайты и лендинги для любого бизнеса.",
      "Разработаем сайт с современным дизайном и удобным интерфейсом",
      "Перед началом работы проведем маркетинговый анализ.",
      "Представим ваш бизнес в наиболее выгодном свете.",
    ],
  },
  {
    id: 2,
    image: "service2",
    title: "Разработка лого & дизайн сайта",
    description: "Запоминающийся стиль выделит вас из сотни конкурентов.",
    features: [
      "Проведем анализ фирменных стилей аналогичных компаний, чтобы избежать повторений.",
      "Разработаем сайт с современным дизайном и удобным интерфейсом",
      "Подберем цвета и шрифт, которые сделают ваш бренд узнаваемым с первого взгляда.",
    ],
  },
  {
    id: 3,
    image: "service3",
    title: "Разработка мобильных приложении",
    description:
      "Сделаем мобильное приложение, которое принесет вам прибыль сразу после запуска.",
    features: [
      "Разработаем концепцию приложения под задачи именно вашего бизнеса.",
      "Спроектируем интуитивно понятный интерфейс, привлекающий пользователей.",
      "Создадим красивый современный дизайн в духе самых актуальных трендов.",
      "Окажем полную техническую и информационную поддержку после запуска приложения.",
    ],
    aosDelay: 100,
  },
  {
    id: 4,
    image: "service4",
    title: "Внедрение CRM",
    description:
      "CRM повышает эффективность работы с клиентами, что влечет увеличение продаж и дохода компании.",
    features: [
      "Определим специфику вашей организации.",
      "Подберем CRM-систему, идеально подходящую вашему бизнесу.",
      "Внедрим CRM, оптимизирующую процессы бизнес-отношений с клиентами, проведем обучение ваших сотрудников.",
    ],
  },
];

// Reusable ServiceBox component
const ServiceBox: React.FC<ServiceBoxProps> = ({ data }) => (
  <div
    className={scss.service_box}
    data-aos="fade-up"
    data-aos-delay={data.aosDelay || 0}
    data-aos-anchor-placement={data.id === 3 ? "top-bottom" : undefined}
  >
    <Image
      data-aos="fade-up"
      src={serviceImages[data.image]}
      alt={data.title}
      width={200}
      height={200}
      loading="lazy"
      quality={75}
    />
    <div className={scss.service_bottom}>
      <div className={scss.service_text}>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
      <div className={scss.main_check_mark}>
        {data.features.map((feature: string, index: number) => (
          <div key={index} className={scss.check_mark}>
            <div className={scss.check_mark_logo}>
              <IoMdCheckmark />
            </div>
            <div className={scss.check_mark_text}>
              <p>{feature}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const OurServices: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <section className={scss.Main}>
      <Suspense fallback={<div>Loading...</div>}>
        <HeadOurService />
      </Suspense>

      <div className="container">
        <div className={scss.content}>
          {servicesData.map((service) => (
            <ServiceBox key={service.id} data={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
