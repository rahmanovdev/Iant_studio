import ContactsPage from "@/appPages/site/components/pages/ContactsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты | iant - Заказать сайт в Кыргызстане",
  description:
    "Свяжитесь с нами для заказа сайта или консультации. Веб-студия iant предлагает профессиональную разработку сайтов в Бишкеке и по всему Кыргызстану.",
  keywords: [
    "контакты iant",
    "заказать сайт",
    "веб студия контакты",
    "разработка сайтов",
    "контакты веб студии",
    "Бишкек",
    "Кыргызстан",
  ],
};

const page = () => <ContactsPage />;
export default page;
