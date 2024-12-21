"use client";
import React from "react";
import HeadOurService from "./HeadOurService";
import Feedback from "../about_me/feedback/Feedback";

const Services = () => {
    const services = [
        {
            title: "Создание сайтов",
            description: "Разработка мощных веб-проектов, которые взрывают рынок.",
            icon: "🚀",
        },
        {
            title: "Мобильные приложения",
            description: "Сделаем мобильное приложение, которое принесет вам прибыль сразу после запуска.",
            icon: "📱",
        },
        {
            title: "UI/UX Дизайн",
            description: "Продуманные до деталей интерфейсы с эстетикой будущего.",
            icon: "🎨",
        },
        {
            title: "Кибербезопасность",
            description: "Надёжная защита от любых угроз, как у звёздного флота.",
            icon: "🛡️",
        },
        {
            title: "Цифровая трансформация",
            description: "Превращаем традиционные бизнес-процессы в гибкие, автоматизированные решения будущего.",
            icon: "⚙️",
        },
        {
            title: "Облачные технологии",
            description: "Надёжные облака для твоего успеха.",
            icon: "☁️",
        },
    ];

    return (
        <section id="services" className="py-20 bg-black relative overflow-hidden text-white">
            <HeadOurService />
            <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-2 max-w-6xl mx-auto px-6 relative z-10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl transform hover:-translate-y-4 hover:scale-105 transition-transform duration-400 group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-cyan-600 to-transparent opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300"></div>
                        <div className="absolute inset-0 border border-transparent rounded-3xl group-hover:border-teal-500 transition-all duration-300"></div>
                        <div className="relative z-10 text-center">
                            <div className="text-6xl mb-4 text-teal-400 group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-2 text-gray-200 group-hover:text-white transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="relative z-10 pt-20">
                <Feedback />
            </div>
        </section>
    );
};

export default Services;
