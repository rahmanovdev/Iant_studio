import type { Metadata } from "next";
import "./globals.scss";
import LayoutClient from "./layout.client";
import Script from "next/script";
import { Inter, Noto_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const notoSans = Noto_Sans({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://iant.kg"),
  title: {
    default: "iAnt - Заказать сайт в Кыргызстане | Разработка сайтов",
    template: "%s | iAnt",
  },
  description:
    "iAnt - профессиональная веб-студия в Кыргызстане. Создание современных сайтов, интернет-магазинов и веб-приложений под ключ. Качественная разработка для вашего бизнеса.",
  keywords: [
    "разработка сайтов",
    "создание сайтов",
    "веб студия",
    "сайт жасоо",
    "веб разработка",
    "iAnt",
    "разработка сайтов Кыргызстан",
    "разработка сайтов Бишкек",
    "верстка сайтов",
    "дизайн сайтов",
    "заказать сайт Бишкек",
    "вебсайт",
    "заказать сайт",
  ],
  authors: [{ name: "iAnt" }],
  creator: "iAnt",
  publisher: "iAnt",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ru_KG",
    alternateLocale: "ky_KG",
    url: "https://iant.kg",
    siteName: "iAnt",
    description:
      "Профессиональная разработка сайтов в Кыргызстане. Создание современных веб-сайтов и приложений под ключ.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <Script id="schema-markup" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "iAnt",
              "url": "https://iant.kg",
              "logo": "https://iant.kg/logo.png",
              "description": "Профессиональная веб-студия в Кыргызстане. Создание современных сайтов, интернет-магазинов и веб-приложений под ключ.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Бишкек",
                "addressCountry": "Кыргызстан"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+996700188251",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/iant.kg",
                "https://www.instagram.com/iant.kg"
              ]
            }
          `}
        </Script>
        <Script id="local-business-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebDesign",
              "name": "iAnt - Разработка сайтов в Кыргызстане",
              "image": "https://iant.kg/logo.png",
              "@id": "https://iant.kg",
              "url": "https://iant.kg",
              "telephone": "+996700188251",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Бишкек",
                "addressLocality": "Бишкек",
                "addressRegion": "Чуй",
                "postalCode": "720000",
                "addressCountry": "KG"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 42.87,
                "longitude": 74.59
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/iant.kg",
                "https://www.instagram.com/iant.kg"
              ] 
            }
          `}
        </Script>
      </head>
      <body className={`${inter.className} ${notoSans.className}`}>
        <LayoutClient>{children}</LayoutClient>
        <Script
          id="jivo-widget"
          src="//code.jivo.ru/widget/B3QRxgzgJO"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
