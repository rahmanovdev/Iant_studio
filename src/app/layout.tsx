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
    "сайт жасатуу",
    "веб разработка",
    "iAnt",
    "айант",
    "Кыргызстан",
    "Бишкек",
    "верстка сайтов",
    "дизайн сайтов",
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
              "description": "Разработка современных сайтов в Кыргызстане",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Kyrgyzstan"
              }
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
