import MainAbout from "@/appPages/site/components/pages/about_me/MainAbout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас | iAnt - Ведущая веб-студия в Кыргызстане",
  description:
    "Познакомьтесь с командой iAnt. Мы создаем инновационные веб-решения для бизнеса в Кыргызстане. Опыт, профессионализм и современный подход к разработке.",
  keywords: [
    "веб студия",
    "команда разработчиков",
    "iAnt о нас",
    "опыт работы",
    "веб разработка Бишкек",
    "профессиональная команда",
  ],
};

const page = () => <MainAbout />;
export default page;
