import HomePage from "@/appPages/site/components/pages/HomePage";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "iant - Разработка сайтов в Кыргызстане | Веб-студия",
  description:
    "Профессиональная веб-студия iant: разработка современных сайтов, интернет-магазинов и веб-приложений в Кыргызстане. Качественные решения для вашего бизнеса.",
  keywords: [
    "разработка сайтов",
    "веб студия",
    "создание сайтов",
    "сайт жасоо",
    "веб разработка",
    "iant",
    "Бишкек",
    "Кыргызстан",
  ],
};

const page = () => (
  <>
    <Script id="schema-homepage" type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "iant - Веб-студия в Кыргызстане",
          "url": "https://iant.kg",
          "description": "Профессиональная веб-студия iant: разработка современных сайтов, интернет-магазинов и веб-приложений в Кыргызстане",
          "provider": {
            "@type": "Organization",
            "name": "iant",
            "description": "Мы создаем современные веб-сайты и приложения",
            "url": "https://iant.kg",
            "logo": "https://iant.kg/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Kyrgyzstan",
              "addressLocality": "Bishkek"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["Russian", "Kyrgyz"]
            },
            "sameAs": [
              "https://instagram.com/iant.kg",
              "https://facebook.com/iant.kg"
            ]
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://iant.kg/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "name": "Разработка веб-сайтов",
                "description": "Создание современных и отзывчивых веб-сайтов"
              },
              {
                "@type": "Service",
                "name": "Разработка интернет-магазинов",
                "description": "Создание функциональных онлайн-магазинов"
              },
              {
                "@type": "Service",
                "name": "Веб-приложения",
                "description": "Разработка кастомных веб-приложений"
              }
            ]
          }
        }
      `}
    </Script>
    <HomePage />
  </>
);

export default page;
