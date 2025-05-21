import { APP_URL } from '@/constants/url.constants';
import { MetadataRoute } from 'next';

// iAnt сайтынын негизги беттеринин тизмеси
const mainPages = [
  { path: '/', priority: 1.0 },
  { path: '/our_works', priority: 0.9 },
  { path: '/our_services', priority: 0.9 },
  { path: '/about_me', priority: 0.8 },
  { path: '/contacts', priority: 0.8 },
];

// Проекттердин тизмесин алуу функциясы
export async function getProjects() {
  try {
    // Бул жерде проекттерди API аркылуу алуу логикасы болушу мүмкүн
    // Азырынча статикалык маалыматтарды колдонобуз
    return [
      { id: 'project-1', slug: 'corporate-website' },
      { id: 'project-2', slug: 'e-commerce-store' },
      { id: 'project-3', slug: 'landing-page' },
      { id: 'project-4', slug: 'web-application' },
      { id: 'project-5', slug: 'mobile-app' },
    ];
  } catch (error) {
    console.error('Проекттерди алууда ката кетти:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Проекттерди алуу
  const projects = await getProjects();
  
  // Проекттер үчүн URL даректерин түзүү
  const projectUrls = projects.map((project) => ({
    url: `${APP_URL}/our_works/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  
  // Блог посттор үчүн URL даректерин түзүү - азырынча блог жок болгондуктан бош массив кайтарабыз
  const blogUrls: { url: string; lastModified: string; changeFrequency: 'monthly'; priority: number; }[] = [];
  
  // Негизги беттер үчүн URL даректерин түзүү
  const mainPageUrls = mainPages.map((page) => ({
    url: `${APP_URL}${page.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: page.priority,
  }));
  
  // Бардык URL даректерин бириктирүү
  return [
    ...mainPageUrls,
    ...projectUrls,
    ...blogUrls,
  ];
}
