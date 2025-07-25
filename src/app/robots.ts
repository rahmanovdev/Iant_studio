import { MetadataRoute } from 'next';
import { APP_URL } from '@/constants/url.constants';

export default function robots(): MetadataRoute.Robots {
   return {
      rules: [
         {
            userAgent: '*',
            allow: '/',
            disallow: [
               '/api/',
               '/*.json$'
            ],
         },
      ],
      sitemap: `${APP_URL}/sitemap.xml`,
      host: APP_URL,
   };
}
