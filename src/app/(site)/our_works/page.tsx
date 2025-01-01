import OurWorksPage from "@/appPages/site/components/pages/OurWorksPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Портфолио | iAnt - Примеры наших работ",
  description:
    "Ознакомьтесь с нашими последними проектами. Кейсы успешно реализованных веб-сайтов и приложений от команды iAnt в Кыргызстане.",
  keywords: [
    "портфолио",
    "проекты",
    "примеры сайтов",
    "кейсы",
    "работы веб студии",
    "разработка сайтов примеры",
    "реализованные проекты",
  ],
};

const page = () => <OurWorksPage />;
export default page;
