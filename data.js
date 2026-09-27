/* =========================================================
   PORTFOLIO CONTENT — edit this file to change the site.
   Every text has a Ukrainian (ua) and English (en) version.
   Images live in the /img folder. A project image with no
   `src` shows a grey placeholder with the given ratio.
   ========================================================= */

window.SITE = {
  name: { ua: "Олена\nМостепан", en: "Olena\nMostepan" },
  role: { ua: "Графічна дизайнерка", en: "Graphic designer" },
  city: { ua: "Лондон", en: "London" },
  timeZone: "Europe/London",
  intro: {
    ua: "Графічний дизайн для громадського сектору: айдентика, видання, інфографіка та системи для соцмереж, які роблять складні теми зрозумілими.",
    en: "Graphic design for the civic sector: identities, publications, infographics and social media systems that make complex topics easy to follow."
  }
};

window.PROJECTS = [
  {
    slug: "caritas-crisis-centre",
    compact: true,
    client: { ua: "Карітас України", en: "Caritas Ukraine" },
    type: { ua: "Серія видань", en: "Publication series" },
    title: { ua: "Методологія роботи Кризового центру.", en: "Crisis Centre Methodology." },
    subtitle: { ua: "Серія з 6 посібників", en: "A series of 6 manuals" },
    lead: {
      ua: "Серія методичних посібників для Кризового центру Карітас України: методологія роботи центру, оцінювання соціальних послуг у громадах, робота з волонтерами, представництво інтересів вразливих груп. Для серії розроблено власну айдентику: колір для кожного посібника, добір шрифтів, систему графічних елементів і верстку, зручну для щоденної роботи працівників центру. Видання побудовані на авторських ілюстраціях, а анкети й таблиці в додатках оформлені як готові шаблони, які команда може використовувати й надалі.",
      en: "A series of methodology manuals for the Caritas Ukraine Crisis Centre, covering how the centre works, evaluating social services in communities, working with volunteers, and advocacy for vulnerable groups. I developed a dedicated identity for the series: a colour for each manual, a type selection, a system of graphic elements and a layout built for the centre's staff to use day to day. The books are built around original illustrations, and the forms and tables in the appendices are designed as ready-made templates the team can keep using."
    },
    year: "",
    role: { ua: "Дизайн і верстка серії", en: "Series design and layout" },
    services: { ua: ["Серія видань", "Дизайн обкладинок", "Верстка"], en: ["Publication series", "Cover design", "Layout"] },
    hero: { src: "img/caritas-cover.jpg", ratio: "1896/1048" },
    card: "img/caritas-cover.jpg",
    index: ["img/caritas-cover.jpg"],
    gallery: [
      { src: "img/caritas-spread.jpg", span: 12 },
      { src: "img/caritas-spread-2.jpg", span: 6 },
      { src: "img/caritas-spread-3.jpg", span: 6 },
      { src: "img/caritas-pattern.jpg", span: 12 },
      { src: "img/caritas-covers-blue.jpg", span: 12 }
    ]
  },
  {
    slug: "parents-return",
    client: { ua: "Фонд Східна Європа", en: "East Europe Foundation" },
    type: { ua: "Видання", en: "Publication" },
    title: { ua: "Батьки повертаються з війни.", en: "Parents Come Home from War." },
    subtitle: { ua: "Посібник для батьків та дітей", en: "A guide for parents and children" },
    lead: {
      ua: "Посібник про сімейне відновлення для родин, до яких батьки повертаються з війни. Дизайн обкладинки, система розділів і сторінок із завданнями для дітей, верстка всього видання.",
      en: "A guide to family recovery for households where a parent is coming home from war. Cover design, a system for chapters and children's activity pages, and layout of the full book."
    },
    year: "—",
    role: { ua: "Дизайн і верстка", en: "Design and layout" },
    services: { ua: ["Обкладинка", "Верстка", "Видання"], en: ["Cover", "Layout", "Print"] },
    hero: { src: "img/book-board.jpg", ratio: "1752/978" },
    card: "img/book-board.jpg",
    index: ["img/book-cover.jpg", "img/book-p2.jpg", "img/book-p4.jpg"],
    gallery: [
      { src: "img/book-p1.jpg", span: 3 },
      { src: "img/book-p2.jpg", span: 3 },
      { src: "img/book-p3.jpg", span: 3 },
      { src: "img/book-p4.jpg", span: 3 }
    ]
  },
  {
    slug: "social-entrepreneurship",
    client: { ua: "Фонд Східна Європа", en: "East Europe Foundation" },
    type: { ua: "Айдентика події", en: "Event identity" },
    title: { ua: "Соціальне підприємництво.", en: "Social Entrepreneurship." },
    subtitle: { ua: "Конференція «Ключ до успіху»", en: "“Key to Success” conference" },
    lead: {
      ua: "Айдентика конференції в Маріуполі та всі її носії: банери, дописи для соцмереж, буклети, бейджі й програма. Графіка побудована на символі лампочки та модульному жовто-зеленому патерні.",
      en: "Identity for a one-day conference in Mariupol and everything that carried it: banners, social posts, booklets, badges and the programme. The graphics are built on a light-bulb symbol and a modular yellow-green pattern."
    },
    year: "2019",
    role: { ua: "Айдентика та носії", en: "Identity and applications" },
    services: {
      ua: ["Айдентика", "Банери", "Соцмережі", "Буклети", "Бейджі", "Програма"],
      en: ["Identity", "Banners", "Social media", "Booklets", "Badges", "Programme"]
    },
    hero: { src: "img/conf-board.jpg", ratio: "2004/1122" },
    index: ["img/conf-banner.jpg", "img/conf-pattern.jpg", "img/conf-speaker.jpg"],
    gallery: [
      { src: "img/conf-banner.jpg", span: 6 },
      { src: "img/conf-speaker.jpg", span: 6 },
      { src: "img/conf-badges.jpg", span: 6 },
      { src: "img/conf-programme.jpg", span: 6 }
    ]
  },
  {
    slug: "rural-women",
    client: { ua: "Бізнес мережа сільських жінок України", en: "Rural Women Business Network of Ukraine" },
    type: { ua: "Соцмережі", en: "Social media" },
    title: { ua: "Матеріали для соцмереж.", en: "Social media materials." },
    subtitle: { ua: "Навчальні банери та презентації", en: "Learning banners and presentation layouts" },
    lead: {
      ua: "Серія банерів і макетів презентацій для навчальних матеріалів мережі: податки, реєстрація бізнесу, пошук клієнтів. Одна система шаблонів тримає разом десятки різних тем.",
      en: "A series of banners and presentation layouts for the network's learning materials on taxes, business registration and finding clients. One template system holds dozens of topics together."
    },
    year: "—",
    role: { ua: "Дизайн і верстка", en: "Design and layout" },
    services: { ua: ["Соцмережі", "Презентації", "Шаблони"], en: ["Social media", "Presentations", "Templates"] },
    hero: { src: "img/rural-board.jpg", ratio: "1464/814" },
    index: ["img/rural-1.jpg", "img/rural-4.jpg", "img/rural-6.jpg"],
    gallery: [
      { src: "img/rural-1.jpg", span: 4 },
      { src: "img/rural-2.jpg", span: 4 },
      { src: "img/rural-3.jpg", span: 4 },
      { src: "img/rural-4.jpg", span: 4 },
      { src: "img/rural-5.jpg", span: 4 },
      { src: "img/rural-6.jpg", span: 4 }
    ]
  },

  /* ---- Placeholder projects: swap in real images and text ---- */
  {
    slug: "e-dem-reports",
    client: { ua: "Програма EGAP · e-DEM", en: "EGAP Program · e-DEM" },
    type: { ua: "Візуальний контент", en: "Visual content" },
    title: { ua: "Обкладинки аналітичних звітів.", en: "Analytical report covers." },
    subtitle: { ua: "Ілюстрація та AI-візуали", en: "Illustration and AI visuals" },
    lead: {
      ua: "Обкладинки аналітичних звітів і візуали для комунікацій e-DEM у фірмовій системі EGAP. [Текст і зображення буде додано]",
      en: "Analytical report covers and visuals for e-DEM communications within the EGAP brand system. [Text and images to be added]"
    },
    year: "—",
    role: { ua: "Арт-дирекція, дизайн", en: "Art direction, design" },
    services: { ua: ["Обкладинки", "Ілюстрація", "AI-візуали"], en: ["Covers", "Illustration", "AI visuals"] },
    hero: { ratio: "16/9" },
    index: [{ ratio: "3/4" }, { ratio: "4/3" }],
    gallery: [{ span: 6, ratio: "3/4" }, { span: 6, ratio: "3/4" }]
  },
  {
    slug: "eef-learning",
    client: { ua: "Фонд Східна Європа", en: "East Europe Foundation" },
    type: { ua: "Освіта", en: "Education" },
    title: { ua: "Освітня платформа.", en: "Learning platform." },
    subtitle: { ua: "Обкладинки курсів та інфографіка", en: "Course covers and infographics" },
    lead: {
      ua: "Обкладинки курсів та інфографіка для освітньої платформи фонду: гендерно чутливе планування й бюджетування, управління ризиками. [Текст і зображення буде додано]",
      en: "Course covers and infographics for the foundation's learning platform, including gender-sensitive planning and budgeting, and risk management. [Text and images to be added]"
    },
    year: "—",
    role: { ua: "Дизайн", en: "Design" },
    services: { ua: ["Обкладинки курсів", "Інфографіка"], en: ["Course covers", "Infographics"] },
    hero: { ratio: "16/9" },
    index: [{ ratio: "16/9" }, { ratio: "1/1" }],
    gallery: [{ span: 4, ratio: "1/1" }, { span: 4, ratio: "1/1" }, { span: 4, ratio: "1/1" }]
  },
  {
    slug: "zrozumilo",
    client: { ua: "Zrozumilo!", en: "Zrozumilo!" },
    type: { ua: "Брендинг", en: "Branding" },
    title: { ua: "Оновлення бренду.", en: "Brand refresh." },
    subtitle: { ua: "Іконки та шаблони для соцмереж", en: "Icons and social templates" },
    lead: {
      ua: "Аудит бренду та поетапні рекомендації. Перший етап: набір іконок і шаблони для соцмереж. [Текст і зображення буде додано]",
      en: "A brand assessment with phased recommendations. Phase one: an icon set and social media templates. [Text and images to be added]"
    },
    year: "—",
    role: { ua: "Бренд-консультація, дизайн", en: "Brand consulting, design" },
    services: { ua: ["Аудит бренду", "Іконки", "Шаблони"], en: ["Brand audit", "Icons", "Templates"] },
    hero: { ratio: "16/9" },
    index: [{ ratio: "4/3" }, { ratio: "4/5" }],
    gallery: [{ span: 6, ratio: "4/3" }, { span: 6, ratio: "4/3" }]
  }
];

window.ABOUT = {
  statement: {
    ua: "Я працюю на перетині дизайну та громадянського суспільства, перетворюючи складні програми на ясні, доступні візуальні системи.",
    en: "I work where design meets civil society, turning complex programmes into clear, accessible visual systems."
  },
  columns: {
    ua: [
      "[Чернетка] Понад N років я розробляю айдентику, видання, інфографіку та контент для соцмереж для громадських організацій, донорських програм і цифрових ініціатив в Україні.",
      "[Чернетка] Мені важливо, щоб дизайн був зрозумілим для всіх: я перевіряю кольори на доступність і будую шаблони, з якими команди працюють самостійно."
    ],
    en: [
      "[Draft] For N years I have designed identities, publications, infographics and social content for NGOs, donor programmes and civic tech initiatives in Ukraine.",
      "[Draft] I care that design works for everyone: I check palettes for accessibility and build templates that teams can use on their own."
    ]
  },
  portrait: "", // e.g. "img/portrait.jpg"
  clients: [
    { ua: "Фонд Східна Європа", en: "East Europe Foundation" },
    { ua: "Програма EGAP", en: "EGAP Program" },
    { ua: "e-DEM", en: "e-DEM" },
    { ua: "Zrozumilo!", en: "Zrozumilo!" },
    { ua: "Представництво ЄС в Україні", en: "EU Delegation to Ukraine" },
    { ua: "Бізнес мережа сільських жінок України", en: "Rural Women Business Network of Ukraine" }
  ],
  experience: [
    { years: "20XX — зараз", role: { ua: "[Посада]", en: "[Role]" }, org: { ua: "[Організація]", en: "[Organisation]" } },
    { years: "20XX — 20XX", role: { ua: "[Посада]", en: "[Role]" }, org: { ua: "[Організація]", en: "[Organisation]" } },
    { years: "20XX — 20XX", role: { ua: "[Посада]", en: "[Role]" }, org: { ua: "[Організація]", en: "[Organisation]" } }
  ],
  skills: {
    ua: ["Айдентика", "Дизайн і верстка видань", "Інфографіка та візуалізація даних", "Системи для соцмереж", "Айдентика подій", "Презентації", "Перевірка доступності (WCAG)"],
    en: ["Brand identity", "Publication design and layout", "Infographics and data visualisation", "Social media systems", "Event identity", "Presentation design", "Accessibility checks (WCAG)"]
  },
  tools: ["Figma", "Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop", "Midjourney", "FLUX"],
  interests: {
    ua: ["[Інтерес]", "[Інтерес]", "[Інтерес]"],
    en: ["[Interest]", "[Interest]", "[Interest]"]
  },
  cv: "cv.pdf", // put your CV in the site folder with this name
  email: "your@email.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Behance", href: "https://www.behance.net/" }
  ]
};
