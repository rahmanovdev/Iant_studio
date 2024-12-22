/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://iant.kg",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/404", "/500"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://iant.kg/sitemap.xml"],
  },
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/about_me": 0.9,
      "/our_works": 0.8,
      "/our_services": 0.8,
      "/contacts": 0.7,
    };

    const changefreqs = {
      "/": "daily",
      "/our_works": "weekly",
      "/our_services": "monthly",
      "/about_me": "monthly",
      "/contacts": "monthly",
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
