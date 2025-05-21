/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://iant.kg",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/404", "/500", "/api/*", "/admin/*", "/private/*"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://iant.kg/sitemap.xml"],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/*.json$',
        ],
      },
    ],
  },
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/our_services": 0.9,
      "/our_works": 0.9,
      "/about_me": 0.8,
      "/contacts": 0.8,
    };

    const changefreqs = {
      "/": "daily",
      "/our_works": "weekly",
      "/our_services": "weekly",
      "/about_me": "monthly",
      "/contacts": "monthly",
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://iant.kg${path}`,
          hreflang: 'ru',
        },
        {
          href: `https://iant.kg/kg${path}`,
          hreflang: 'ky',
        },
      ],
    };
  },
};
