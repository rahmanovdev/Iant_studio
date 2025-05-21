// import fakeStoreImg from "../../public/assets/Project1.png";

// Проекттер массиви
const projectsData = [
  {
    title: "Образовательный сайт",
    img: "https://i.postimg.cc/7P3jmV2f/2025-05-21-192154.png",
    img2: "https://i.postimg.cc/bvGCQNqx/2025-05-21-192532.png",
    about:
      "Этот сайт посвящён обучению исламским наукам в соответствии с мазхабом Ханафи. Он служит центральной платформой для студентов и преподавателей, стремящихся к получению подлинных знаний в области религии.",
    name: "Ханафий",
    description:
      "Наша задача заключалась в создании современного образовательного сайта, ориентированного на последователей ханафитского мазхаба. Мы реализовали решение, которое позволяет пользователям смотреть уроки, читать статьи, задавать вопросы и получать знания без необходимости в отдельной CRM-системе.",
    href: "http://89.169.44.186/",
    comingSoon: false,
    realeseDate: "10-02-2025",
    tech: ["Typescript", "Next", "Redux", "Django", "Docker", "Python", "SQL"]
  },
  {
    title: "3-GYMNASIUM",
    img: "https://i.postimg.cc/tgxDy9dz/2024-12-22-140817.png",
    img2: "https://i.postimg.cc/bJfgw43f/2024-12-22-140836.png",
    about:
      "№3 Экспериментальная гимназия — это образовательное учреждение Баткенской области. Данная гимназия управляется Гапыром Мадаминовым и выделяется своей уникальной методикой — АЭМ (Школа Ума). Школа ориентирована на предоставление учащимся глубоких и современных знаний.",
    name: "Сайт школы",
    description:
      "Наша задача заключалась в создании современного веб-сайта для гимназии. Мы реализовали решение, которое позволяет клиентам легко редактировать контент без необходимости создания отдельной CRM системы.",
    href: "https://3-gymnasium.kg",
    realeseDate: "20-09-2024",
    tech: [
      "JavaScript",
      "React",
      "Redux",
      "NextJs",
      "Typescript",
      "Docker",
      "Python",
    ],
  },
 
  {
    title: "A SHOP",
    img: "https://i.postimg.cc/76n3FHGR/Project1.png",
    img2: "https://i.postimg.cc/VLpCHrZ6/Project1-mobile.png",
    about:
      "A SHOP — это современный интернет-магазин, предлагающий широкий ассортимент товаров, от продуктов питания до электроники. Магазин ориентирован на удобство пользователей, предлагая простой и интуитивно понятный интерфейс для покупателей.",
    name: "Интернет магазин",
    description:
      "Наша задача заключалась в разработке функционального веб-сайта для интернет-магазина. Мы реализовали удобную систему поиска и фильтрации товаров, а также предоставили возможность администраторам легко редактировать контент.",
    href: "https://fake-store-blush-nu.vercel.app",
    comingSoon: false,
    realeseDate: "20-10-2024",
    tech: [
      "Typescript",
      "React",
      "Redux",
      "Zustand",
      "NextJs",
      "SupaBase",
      "Prisma",
    ],
  },
  {
    title: "StrongPass",
    img: "https://i.postimg.cc/GtsycbHr/Project3.png",
    img2: "https://i.postimg.cc/y6JQJ9R6/Project3-mobile.png",
    about:
      "StrongPass — это веб-сайт, предназначенный для проверки надежности паролей. Он помогает пользователям создавать и проверять пароли, чтобы обеспечить их защиту от потенциальных угроз и повысить уровень безопасности аккаунтов.",
    name: "Сайт проверки паролей",
    description:
      "Наша задача заключалась в разработке удобного инструмента для оценки паролей. Сайт анализирует введенные пользователем пароли по различным критериям, таким как длина, сложность и использование специальных символов.",
    href: "https://strong-pass.vercel.app/",
    comingSoon: false,
    realeseDate: "19-11-2024",
    tech: ["Typescript", "React", "Redux", "NextJs", "Zustand"],
  },
  {
    title: "Spotify APP",
    img: "https://i.postimg.cc/c41DYMfc/2025-01-28-200012.png",
    img2: "https://i.postimg.cc/4yf16sH3/2025-01-28-200033.png",
    about:
      "Spotify app — это веб-сайт для посика музыки, созданный для любителей музыки, которые хотят быстро находить интересный контент. Платформа предлагает удобный интерфейс и актуальную информацию о рейтингах, жанрах и описаниях.",
    name: "Spotify",
    description:
      "Наша задача заключалась в разработке функционального и интуитивного веб-сайта. Мы реализовали удобную систему поиска и фильтрации по жанрам, рейтингу и годам выпуска.",
    href: "https://spotify-app-delta-two.vercel.app/search",
    comingSoon: false,
    realeseDate: "27-09-2024",
    tech: ["Typescript", "React", "Redux", "NextJs", "Rest API", "Zustand"],
  },
  {
    title: "Сайт агрегатор",
    img: "https://optim.tildacdn.one/tild3832-3534-4234-b234-346163363962/-/resize/1000x/-/format/webp/fdg__DESC.png",
    img2: "https://optim.tildacdn.one/tild3664-6533-4336-a237-646432646431/-/resize/352x/-/format/webp/__MOB.png",
    about:
      "Hwasin KSTU is a company with many years of experience, high-quality projects, a team of professionals, and modern equipment that is engaged in construction, supply of goods, and outsourcing throughout Ukraine.",
    name: "Сайт агрегатор шин",
    description:
      "Our task was to create a new website in a modern style. We implemented a solution that allows customers to edit content without creating a separate CRM system.",
    href: "",
    comingSoon: true,
    realeseDate: "10-02-2025",
    tech: ["Typescript", "Next", "Redux", "Django", "Docker", "Python", "SQL"],
  },
  {
    title: "Интернет магазин игр",
    img: "https://optim.tildacdn.one/tild3832-3534-4234-b234-346163363962/-/resize/1000x/-/format/webp/fdg__DESC.png",
    img2: "https://optim.tildacdn.one/tild3664-6533-4336-a237-646432646431/-/resize/352x/-/format/webp/__MOB.png",
    about:
      "Hwasin KSTU is a company with many years of experience, high-quality projects, a team of professionals, and modern equipment that is engaged in construction, supply of goods, and outsourcing throughout Ukraine.",
    name: "Интернет магазин",
    description:
      "Our task was to create a new website in a modern style. We implemented a solution that allows customers to edit content without creating a separate CRM system.",
    href: "",
    comingSoon: true,
    realeseDate: "10-02-2025",
    tech: ["Typescript", "Next", "Redux", "Django", "Docker", "Python", "SQL"],
  },
  {
    title: "Умра",
    img: "https://optim.tildacdn.one/tild3832-3534-4234-b234-346163363962/-/resize/1000x/-/format/webp/fdg__DESC.png",
    img2: "https://optim.tildacdn.one/tild3664-6533-4336-a237-646432646431/-/resize/352x/-/format/webp/__MOB.png",
    about:
      "Hwasin KSTU is a company with many years of experience, high-quality projects, a team of professionals, and modern equipment that is engaged in construction, supply of goods, and outsourcing throughout Ukraine.",
    name: "Lider Umrah",
    description:
      "Our task was to create a new website in a modern style. We implemented a solution that allows customers to edit content without creating a separate CRM system.",
    href: "",
    comingSoon: true,
    realeseDate: "10-02-2025",
    tech: ["Typescript", "Next", "Redux", "Django", "Docker", "Python", "SQL"],
  },
];

// ID номерлерин автоматтык түрдө берүү
export const projects = projectsData.map((project, index) => ({
  ...project,
  id: index + 1, // Индекс 0 дөн башталгандыктан, ID 1 ден башталышы үчүн +1 кошобуз
}));
