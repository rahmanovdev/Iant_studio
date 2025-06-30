import OurServicesPage from "@/appPages/site/components/pages/OurServicesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги | iant - Разработка сайтов и веб-приложений",
  description:
    "Полный спектр услуг по созданию сайтов: landing page, корпоративные сайты, интернет-магазины, веб-приложения. Современные решения для вашего бизнеса.",
  keywords: [
    "услуги разработки",
    "создание сайтов",
    "интернет-магазин",
    "корпоративный сайт",
    "landing page",
    "веб-приложения",
    "сайт жасоо",
  ],
};

const page = () => <OurServicesPage />;
export default page;
