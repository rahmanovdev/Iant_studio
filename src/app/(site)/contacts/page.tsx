import ContactsPage from "@/appPages/site/components/pages/ContactsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты | iAnt - Заказать сайт в Кыргызстане",
  description:
    "Свяжитесь с нами для заказа сайта или консультации. Веб-студия iAnt предлагает профессиональную разработку сайтов в Бишкеке и по всему Кыргызстану.",
  keywords: [
    "контакты iAnt",
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
