import { Metadata } from 'next';
import { APP_URL } from './url.constants';

export const NO_INDEX_PAGE = { robots: { index: false, follow: false } };

export const SITE_NAME = 'iAnt';
export const SHORT_NAME = 'iAnt';

export const SITE_DESCRIPTION = 'Профессиональная веб-студия в Кыргызстане. Создание современных сайтов, интернет-магазинов и веб-приложений под ключ. Качественная разработка для вашего бизнеса.';

export const SITE_KEYWORDS = [
  'разработка сайтов',
  'создание сайтов',
  'веб студия',
  'сайт жасоо',
  'веб разработка',
  'iAnt',
  'разработка сайтов Кыргызстан',
  'разработка сайтов Бишкек',
  'верстка сайтов',
  'дизайн сайтов',
  'заказать сайт Бишкек',
  'вебсайт',
  'заказать сайт'
];

export const BASE_SEO_METADATA = (locale: string): Metadata => ({
   title: {
      absolute: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
   },
   description: SITE_DESCRIPTION,
   metadataBase: APP_URL ? new URL(APP_URL) : null,
   applicationName: SITE_NAME,
   keywords: SITE_KEYWORDS,
   generator: 'Next.js',
   creator: 'iAnt',
   publisher: 'iAnt',
   icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/logo.png',
   },
   openGraph: {
      title: 'iAnt - Заказать сайт в Кыргызстане | Разработка сайтов',
      description: SITE_DESCRIPTION,
      type: 'website',
      siteName: 'iAnt',
      locale: locale === 'kg' ? 'ky_KG' : 'ru_KG',
      images: [
         {
            url: '/logo.png',
            width: '512',
            height: '512',
            alt: 'iAnt - Веб-студия в Кыргызстане',
         },
      ],
      ...(APP_URL ? { url: new URL(APP_URL) } : {}),
   },
   twitter: {
      title: 'iAnt - Разработка сайтов в Кыргызстане',
      description: SITE_DESCRIPTION,
      card: 'summary_large_image',
      images: [
         {
            url: '/logo.png',
            width: '512',
            height: '512',
            alt: 'iAnt - Веб-студия в Кыргызстане',
         },
      ],
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         'max-video-preview': -1,
         'max-image-preview': 'large',
         'max-snippet': -1,
      },
   },
});
