/* =========================================================
   PORTFOLIO CONTENT — edit this file to change the site.
   Every text has a Ukrainian (ua) and English (en) version.
   Images live in the /img folder. A project image with no
   `src` shows a grey placeholder with the given ratio.
   ========================================================= */

window.SITE = {
  name: { ua: "Олена\nМостепан", en: "Olena\nMostepan" },
  role: { ua: "Графічна дизайнерка", en: "Graphic designer" },
  city: { ua: "Київ", en: "Kyiv" },
  timeZone: "Europe/Kyiv",
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
    link: { href: "https://www.caritas.eu/wp-content/uploads/2023/10/Caritas-Ukraine_Volunteer_digital.pdf", label: { ua: "Посібник (PDF)", en: "Manual (PDF)" } },
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
    slug: "rural-women",
    compact: true,
    client: { ua: "Бізнес Мережа Сільських Жінок України", en: "Rural Women Business Network of Ukraine" },
    type: { ua: "Соцмережі", en: "Social media" },
    title: { ua: "Матеріали для соцмереж.", en: "Social media materials." },
    subtitle: { ua: "Банери та макети презентацій", en: "Banners and presentation layouts" },
    lead: {
      ua: "Дизайн і верстка банерів для соцмереж та макетів презентацій для навчальних програм мережі: відеокурс для сільських жінок, реєстрація бізнесу, грантові програми, просування онлайн, чек-листи й інфографіка. Єдина система шаблонів із фірмовим орнаментом тримає разом десятки тем і дозволяє команді швидко готувати нові матеріали.",
      en: "Design and layout of social media banners and presentation layouts for the network's learning programmes: a video course for rural women, business registration, grant programmes, online promotion, checklists and infographics. One template system built around the network's ornament holds dozens of topics together and lets the team produce new materials quickly."
    },
    year: "",
    role: { ua: "Дизайн і верстка", en: "Design and layout" },
    services: { ua: ["Банери для соцмереж", "Макети презентацій", "Шаблони", "Інфографіка"], en: ["Social media banners", "Presentation layouts", "Templates", "Infographics"] },
    card: "img/rwbn-posts.jpg",
    hero: { src: "img/rwbn-posts.jpg", ratio: "2796/1792" },
    index: ["img/rwbn-posts.jpg"],
    gallery: [
      { src: "img/rwbn-13.jpg", span: 6 },
      { src: "img/rwbn-18.jpg", span: 6 },
      { src: "img/rwbn-board.jpg", span: 12 },
      { src: "img/rwbn-laptop.jpg", span: 12 },
      { src: "img/rwbn-20.jpg", span: 6 },
      { src: "img/rwbn-21.jpg", span: 6 }
    ]
  },
  {
    slug: "parents-return",
    compact: true,
    client: { ua: "Фонд Східна Європа", en: "East Europe Foundation" },
    type: { ua: "Видання", en: "Publication" },
    title: { ua: "Батьки повертаються з війни.", en: "Parents Come Home from War." },
    subtitle: { ua: "Посібник для батьків та дітей", en: "A guide for parents and children" },
    lead: {
      ua: "Посібник про сімейне відновлення для родин, до яких батьки повертаються з війни. Розроблено дизайн і верстку видання: обкладинку, систему розділів, сторінки із завданнями для дітей і батьків та вкладку «Календар сімейних подій». Видання побудоване на кастомних авторських ілюстраціях, створених у співпраці з ілюстраторкою.",
      en: "A guide to family recovery for households where a parent is coming home from war. Design and layout of the book: the cover, the chapter system, activity pages for children and parents, and a “Family events calendar” insert. The book is built around custom original illustrations created in collaboration with an illustrator."
    },
    year: "",
    role: { ua: "Дизайн і верстка", en: "Design and layout" },
    services: { ua: ["Видання", "Дизайн обкладинки", "Верстка", "Ілюстрації (співпраця)"], en: ["Publication", "Cover design", "Layout", "Illustration (collaboration)"] },
    link: { href: "https://www.scribd.com/document/706125756/%D0%A3%D1%81%D1%82%D1%96%D0%BD%D0%BE%D0%B2%D0%B0-%D0%91%D0%B0%D1%82%D1%8C%D0%BA%D0%B8-%D0%9F%D0%BE%D0%B2%D0%B5%D1%80%D1%82%D0%B0%D1%8E%D1%82%D1%8C%D1%81%D1%8F-%D0%B7-%D0%92%D1%96%D0%B9%D0%BD%D0%B8", label: { ua: "Книжка на Scribd", en: "Book on Scribd" } },
    card: "img/pr-m1.jpg",
    hero: { src: "img/pr-m1.jpg", ratio: "2798/1736" },
    index: ["img/pr-m1.jpg"],
    gallery: [
      { src: "img/pr-m2.jpg", span: 12 },
      { src: "img/pr-m3.jpg", span: 12 },
      { src: "img/pr-m4.jpg", span: 12 },
      { src: "img/pr-cal.jpg", span: 12 }
    ]
  },
  {
    slug: "e-notariat",
    compact: true,
    client: { ua: "Фонд Східна Європа", en: "East Europe Foundation" },
    type: { ua: "Айдентика", en: "Identity" },
    title: { ua: "Е-Нотаріат.", en: "E-Notariat." },
    subtitle: { ua: "Логотип і матеріали конференції", en: "Logo and conference materials" },
    lead: {
      ua: "Логотип і візуальна система для Е-Нотаріату, цифрової платформи нотаріату Міністерства юстиції України, та матеріали для конференції з її презентації: банери, навігація, бейджі, стрічки для бейджів, блокноти. Знак, палітра з темно-синього, жовтого й лавандового та графічний мотив «папки» працюють як одна система на всіх носіях.",
      en: "A logo and visual system for E-Notariat, the Ministry of Justice of Ukraine's digital notary platform, plus materials for its launch conference: banners, wayfinding, badges, lanyards and notebooks. The mark, a navy, yellow and lavender palette and a folder motif work as one system across every item."
    },
    year: "",
    role: { ua: "Розробка логотипа та матеріалів конференції", en: "Logo and conference materials" },
    services: { ua: ["Логотип", "Айдентика", "Банери", "Навігація", "Бейджі", "Поліграфія"], en: ["Logo", "Identity", "Banners", "Wayfinding", "Badges", "Print"] },
    card: "img/enot-cover.jpg",
    hero: { src: "img/enot-cover.jpg", ratio: "1845/1138" },
    index: ["img/enot-cover.jpg"],
    gallery: [
      { src: "img/enot-24.jpg", span: 6 },
      { src: "img/enot-23.jpg", span: 6 },
      { src: "img/enot-25.jpg", span: 4 },
      { src: "img/enot-26.jpg", span: 4 },
      { src: "img/enot-27.jpg", span: 4 },
      { src: "img/enot-banner.jpg", span: 12 },
      { src: "img/enot-street.jpg", span: 12 },
      { src: "img/enot-wall.jpg", span: 6 },
      { src: "img/enot-notebook.jpg", span: 6 },
      { src: "img/enot-desk.jpg", span: 12 },
      { src: "img/enot-28.jpg", span: 12 },
      { src: "img/enot-badge.jpg", span: 12 },
      { src: "img/enot-31.jpg", span: 12 }
    ]
  },
  {
    slug: "school-social-entrepreneurship",
    compact: true,
    client: { ua: "Фонд Східна Європа", en: "East Europe Foundation" },
    type: { ua: "Видання", en: "Publication" },
    title: { ua: "Соціальне шкільне підприємництво.", en: "School Social Entrepreneurship." },
    subtitle: { ua: "Посібник «Твій перший стартап»", en: "“Your First Startup” handbook" },
    lead: {
      ua: "Посібник для учнів 8–11 класів, батьків та освітян про те, як створити соціальне підприємство у школі. Розроблено дизайн обкладинки, систему розділів, змісту й інфографіки та зверстано все видання, а також банери й інформаційні матеріали для програми. Рубрики із завданнями, блоки з додатковими матеріалами й кольорові розділи допомагають учням і вчителям швидко орієнтуватися в тексті.",
      en: "A handbook for students in grades 8–11, their parents and teachers on starting a social enterprise at school. I designed the cover, the system for chapters, contents and infographics, and laid out the whole book, plus banners and information materials for the programme. Task sections, further-reading boxes and colour-coded chapters help students and teachers find their way through the text."
    },
    year: "",
    role: { ua: "Дизайн і верстка", en: "Design and layout" },
    services: { ua: ["Видання", "Дизайн обкладинки", "Верстка", "Інфографіка", "Банери"], en: ["Publication", "Cover design", "Layout", "Infographics", "Banners"] },
    link: { href: "https://eef.org.ua/wp-content/uploads/2020/10/Social-School-Entrepreneurship-1.pdf", label: { ua: "Посібник (PDF)", en: "Manual (PDF)" } },
    card: "img/sse-1.jpg",
    hero: { src: "img/sse-2.jpg", ratio: "16/9" },
    index: ["img/sse-1.jpg"],
    gallery: [
      { src: "img/sse-3.jpg", span: 12 },
      { src: "img/sse-4.jpg", span: 6 },
      { src: "img/sse-5.jpg", span: 6 },
      { src: "img/sse-6.jpg", span: 6 },
      { src: "img/sse-7.jpg", span: 6 },
      { src: "img/sse-8.jpg", span: 12 },
      { src: "img/sse-9.jpg", span: 12 },
      { src: "img/sse-10.jpg", span: 12 }
    ]
  },
  {
    slug: "wings",
    compact: true,
    client: { ua: "Проєкт «Крила» · «Жінки України: залучені, спроможні, незламні»", en: "“Wings” project · “Women of Ukraine: Engaged, Capable, Resilient”" },
    type: { ua: "Айдентика події", en: "Event identity" },
    title: { ua: "Жіночі організації – суперсила для змін.", en: "Women’s Organisations – a Superpower for Change." },
    subtitle: { ua: "Матеріали до заключної конференції", en: "Materials for the final conference" },
    lead: {
      ua: "Айдентика та матеріали для заключної конференції проєкту «Жінки України: залучені, спроможні, незламні»: логотип із силуетами трьох жінок, пресвол, бейджі та стрічки, блокноти, шопери, каталог «Підприємиці проєкту Крила» та звітні one-pager’и. Палітра з ягідного, рожевого, блакитного й салатового проходить через усі носії, а силуети стали сполучним графічним мотивом.",
      en: "Identity and materials for the final conference of the project “Women of Ukraine: Engaged, Capable, Resilient”: a logo built from three women’s silhouettes, a press wall, badges and lanyards, notebooks, tote bags, the “Wings project entrepreneurs” catalogue and report one-pagers. A berry, pink, sky-blue and lime palette runs through every item, with the silhouettes as the connecting graphic motif."
    },
    year: "",
    role: { ua: "Логотип, дизайн і верстка", en: "Logo, design and layout" },
    services: { ua: ["Логотип", "Айдентика події", "Пресвол", "Бейджі", "Мерч", "Каталог", "One-pager"], en: ["Logo", "Event identity", "Press wall", "Badges", "Merch", "Catalogue", "One-pagers"] },
    card: "img/wings-logo-dark.jpg",
    hero: { src: "img/wings-logo-dark.jpg", ratio: "16/9" },
    index: ["img/wings-logo-dark.jpg"],
    gallery: [
      { src: "img/wings-onepager-slide.jpg", span: 12 },
      { src: "img/wings-logo-light.jpg", span: 12 },
      { src: "img/wings-presswall.jpg", span: 12 },
      { src: "img/wings-badge.jpg", span: 12 },
      { src: "img/wings-badges.jpg", span: 12 },
      { src: "img/wings-notebook.jpg", span: 6 },
      { src: "img/wings-bag.jpg", span: 6 },
      { src: "img/wings-coverbook.jpg", span: 12 },
      { src: "img/wings-book2.jpg", span: 12 },
      { src: "img/wings-book3.jpg", span: 4 },
      { src: "img/wings-book4.jpg", span: 4 },
      { src: "img/wings-book5.jpg", span: 4 },
      { src: "img/wings-onepager.jpg", span: 12 }
    ]
  },
  {
    slug: "eu4cs",
    compact: true,
    client: { ua: "EU4CS03 · Підтримка ЄС для організацій громадянського суспільства", en: "EU4CS03 · EU support for civil society organisations" },
    type: { ua: "Соцмережі", en: "Social media" },
    title: { ua: "Банери для соцмереж.", en: "Social media banners." },
    subtitle: { ua: "Комунікація підтримки ЄС для ОГС в Україні", en: "Communicating EU support for CSOs in Ukraine" },
    lead: {
      ua: "Серія банерів і каруселей для соцмереж проєкту EU4CS03 про підтримку ЄС організацій громадянського суспільства в Україні: історії людей, цифри грантової підтримки, напрями діяльності та анонси навчальних курсів. Візуальна система поєднує фірмовий синій ЄС, фактуру паперу, вирізані фото і жовті рукописні акценти, щоб офіційна інформація читалася тепло й доступно.",
      en: "A series of social media banners and carousels for the EU4CS03 project on EU support to civil society organisations in Ukraine: people's stories, grant figures, areas of support and course announcements. The visual system combines EU blue, paper texture, cut-out photos and yellow hand-drawn accents so that official information reads in a warm, human way."
    },
    year: "",
    role: { ua: "Дизайн", en: "Design" },
    services: { ua: ["Соцмережі", "Каруселі", "Банери", "Шаблони"], en: ["Social media", "Carousels", "Banners", "Templates"] },
    card: "img/eu-40.jpg",
    hero: { src: "img/eu-40.jpg", ratio: "16/9" },
    index: ["img/eu-40.jpg"],
    gallery: [
      { src: "img/eu-39.jpg", span: 12 }
    ]
  },
  {
    slug: "dyvoslovo",
    compact: true,
    client: { ua: "Видавництво «Дивослово»", en: "Dyvoslovo Publishing House" },
    type: { ua: "Айдентика та видання", en: "Identity and publications" },
    title: { ua: "Дивослово.", en: "Dyvoslovo." },
    subtitle: { ua: "Науково-методичний журнал і педагогічна література", en: "Scientific journal and teacher’s books" },
    lead: {
      ua: "Робота для видавництва «Дивослово», що випускає науково-методичний журнал «Українська мова й література в навчальних закладах» і книжки для вчителів. Я розробила айдентику й логотип, банери для соцмереж, візитівки та листівки, зокрема «Календар учителя». Також дизайн і верстка самого журналу та серій педагогічної літератури: «Бібліотечка „Дивослова“», «Уроки української мови» й «Уроки української літератури», програми факультативних курсів, посібники для підготовки до ЗНО – усі видання оформлені кастомними авторськими ілюстраціями.",
      en: "Work for Dyvoslovo, the publisher of the scientific and methodological journal “Ukrainian Language and Literature in Schools” and books for teachers. For the publisher I created the identity and logotype, social media banners, business cards and leaflets, including a “Teacher’s Calendar”. I also designed and laid out the journal itself and series of teaching literature: the “Dyvoslovo Library”, “Ukrainian Language Lessons” and “Ukrainian Literature Lessons”, elective course programmes and exam-preparation workbooks, all illustrated with custom original artwork."
    },
    year: "",
    role: { ua: "Айдентика, дизайн і верстка", en: "Identity, design and layout" },
    services: { ua: ["Логотип", "Айдентика", "Банери для соцмереж", "Візитівки", "Листівки", "Журнал", "Педагогічна література"], en: ["Logotype", "Identity", "Social media banners", "Business cards", "Leaflets", "Journal", "Teacher’s books"] },
    card: "img/dyv-cover.jpg",
    hero: { src: "img/dyv-banner.jpg", ratio: "3790/1439" },
    index: ["img/dyv-cover.jpg"],
    gallery: [
      { src: "img/dyv-cards.jpg", span: 12 },
      { src: "img/dyv-p1.jpg", span: 12 },
      { src: "img/dyv-leaflet.jpg", span: 12 },
      { src: "img/dyv-p2.jpg", span: 12 },
      { src: "img/dyv-p3.jpg", span: 12 },
      { src: "img/dyv-p4.jpg", span: 12 },
      { src: "img/dyv-open1.jpg", span: 12 },
      { src: "img/dyv-p5.jpg", span: 12 },
      { src: "img/dyv-p6.jpg", span: 12 },
      { src: "img/dyv-p7.jpg", span: 12 },
      { src: "img/dyv-p8.jpg", span: 12 },
      { src: "img/dyv-p9.jpg", span: 12 },
      { src: "img/dyv-open2.jpg", span: 12 },
      { src: "img/dyv-books1.jpg", span: 12 },
      { src: "img/dyv-books2.jpg", span: 12 },
      { src: "img/dyv-final.jpg", span: 12 }
    ]
  },
  {
    slug: "judicial-settlement",
    compact: true,
    client: { ua: "Українсько-канадський проєкт підтримки судової реформи", en: "Ukrainian-Canadian Support to Judicial Reform Project" },
    type: { ua: "Посібник і презентація", en: "Manual and presentation" },
    title: { ua: "Врегулювання спорів за участю судді.", en: "Judicial Dispute Settlement." },
    subtitle: { ua: "Матеріали до навчального семінару-тренінгу для адвокатів", en: "Materials for a training seminar for lawyers" },
    lead: {
      ua: "Посібник для тренерів і учасників навчального семінару-тренінгу для адвокатів «Врегулювання спорів за участю судді», підготовлений для Українсько-канадського проєкту підтримки судової реформи. Я зробила дизайн обкладинки й верстку, коректуру тексту, а також презентації до тренінгу. Розділи позначені великими номерами, мінілекції й таблиці програми мають власні шаблони, а спокійна палітра із зеленого, блакитного й охри та м’які кола проходять і через книжку, і через слайди.",
      en: "A manual for trainers and participants of the training seminar for lawyers “Judicial Dispute Settlement”, produced for the Ukrainian-Canadian Support to Judicial Reform Project. I designed the cover and layout, proofread the text and created the presentation slides for the training. Chapters open with large numbers, mini-lectures and programme tables have their own templates, and a calm palette of green, light blue and ochre with soft circles runs through both the book and the slides."
    },
    year: "",
    role: { ua: "Дизайн, верстка і коректура", en: "Design, layout and proofreading" },
    services: { ua: ["Обкладинка", "Верстка", "Коректура", "Презентації"], en: ["Cover", "Layout", "Proofreading", "Presentations"] },
    card: "img/jsr-cover.jpg",
    hero: { src: "img/jsr-cover.jpg", ratio: "1117/742" },
    index: ["img/jsr-cover.jpg"],
    gallery: [
      { src: "img/jsr-stack.jpg", span: 6 },
      { src: "img/jsr-open.jpg", span: 6 },
      { src: "img/jsr-s1.jpg", span: 12 },
      { src: "img/jsr-c6.jpg", span: 6 },
      { src: "img/jsr-c9.jpg", span: 6 },
      { src: "img/jsr-s3.jpg", span: 12 },
      { src: "img/jsr-c10.jpg", span: 6 },
      { src: "img/jsr-c11.jpg", span: 6 },
      { src: "img/jsr-s2.jpg", span: 12 },
      { src: "img/jsr-s4.jpg", span: 12 },
      { src: "img/jsr-pres1.jpg", span: 12 },
      { src: "img/jsr-pres2.jpg", span: 12 },
      { src: "img/jsr-pres3.jpg", span: 12 },
      { src: "img/jsr-pres4.jpg", span: 12 }
    ]
  }
];

window.ABOUT = {
  statement: {
    ua: "Я графічна дизайнерка, яка працює з громадськими організаціями та міжнародними програмами: перетворюю складні теми на зрозумілі видання, айдентику й візуальні системи.",
    en: "I am a graphic designer working with civil society organisations and international programmes, turning complex topics into clear publications, identities and visual systems."
  },
  columns: {
    ua: [
      "Понад 7 років у графічному дизайні. Надаю перевагу соціальним та екологічним проєктам. Серед моїх замовників – як неприбуткові організації, так і комерційні компанії: Фонд Східна Європа, МБФ «Карітас України», Українсько-канадський проєкт підтримки судової реформи, програма WINGS, Бізнес Мережа Сільських Жінок України, MEDA, Michael Succow Foundation та інші.",
      "Розробляю навчальні посібники, звіти й аналітичні матеріали, інфографіку, айдентику проєктів і подій, презентації та контент для соцмереж. Працюю з брендовими гайдлайнами донорів, готую макети до друку й для цифрових платформ і адаптую матеріали під різні формати. Перевіряю кольори й контраст на відповідність WCAG, щоб матеріали були доступними для всіх, а також використовую AI-інструменти для ілюстрацій, візуалів і швидшого пошуку ідей."
    ],
    en: [
      "Over 7 years in graphic design, with a preference for social and environmental projects. I have worked with non-profits and commercial companies alike, including East Europe Foundation, Caritas Ukraine, the Ukrainian-Canadian Support to Judicial Reform Project, the WINGS programme, the Rural Women Business Network of Ukraine, MEDA, the Michael Succow Foundation and others.",
      "I design training manuals, reports and analytical materials, infographics, project and event identities, presentations and social media content. I work within donor brand guidelines, prepare files for print and digital platforms, and adapt materials to different formats. I check colours and contrast against WCAG so materials are accessible to everyone, and use AI tools for illustrations, visuals and faster ideation."
    ]
  },
  portrait: "img/portrait.jpg",
  clients: [
    { ua: "Фонд Східна Європа", en: "East Europe Foundation" },
    { ua: "EU4CS03", en: "EU4CS03" },
    { ua: "МБФ «Карітас України»", en: "Caritas Ukraine" },
    { ua: "Українсько-канадський проєкт підтримки судової реформи", en: "Ukrainian-Canadian Support to Judicial Reform Project" },
    { ua: "Програма WINGS", en: "WINGS Programme" },
    { ua: "Бізнес Мережа Сільських Жінок України", en: "Rural Women Business Network of Ukraine" },
    { ua: "MEDA", en: "MEDA" },
    { ua: "Програма «Радник»", en: "Radnyk Programme" },
    { ua: "Michael Succow Foundation", en: "Michael Succow Foundation" },
    { ua: "Видавництво «Дивослово»", en: "Dyvoslovo Publishing" },
    { ua: "Polaris", en: "Polaris" },
    { ua: "Strategic Foresight of Ukraine", en: "Strategic Foresight of Ukraine" }
  ],
  experience: [
    { years: "2026 — зараз", role: { ua: "Графічна дизайнерка-консультантка", en: "Graphic design consultant" }, org: { ua: "EU4CS03", en: "EU4CS03" } },
    { years: "2023 — зараз", role: { ua: "Графічна дизайнерка-консультантка", en: "Graphic design consultant" }, org: { ua: "Фонд Східна Європа", en: "East Europe Foundation" } },
    { years: "2020 — 2024", role: { ua: "Графічна дизайнерка-консультантка", en: "Graphic design consultant" }, org: { ua: "Програма WINGS", en: "WINGS Programme" } },
    { years: "2022 — 2024", role: { ua: "Графічна дизайнерка", en: "Graphic designer" }, org: { ua: "Бізнес Мережа Сільських Жінок України", en: "Rural Women Business Network of Ukraine" } },
    { years: "2021 — 2022", role: { ua: "Графічна дизайнерка", en: "Graphic designer" }, org: { ua: "MEDA", en: "MEDA" } },
    { years: "2018 — 2020", role: { ua: "Графічна дизайнерка", en: "Graphic designer" }, org: { ua: "Українсько-канадський проєкт підтримки судової реформи", en: "Ukrainian-Canadian Support to Judicial Reform Project" } }
  ],
  education: [
    { years: "2022 — 2023", role: { ua: "UX Design Professional Diploma", en: "UX Design Professional Diploma" }, org: { ua: "UX Design Institute", en: "UX Design Institute" } },
    { years: "2015", role: { ua: "Графічний дизайн", en: "Graphic design" }, org: { ua: "School of Visual Communication", en: "School of Visual Communication" } },
    { years: "2006 — 2013", role: { ua: "Магістр філології", en: "MA in Philology" }, org: { ua: "НаУКМА", en: "National University of Kyiv-Mohyla Academy" } }
  ],
  skills: {
    ua: ["Макетування видань і публікацій", "Верстка звітів і технічної документації", "Інфографіка", "Айдентика", "Дизайн презентацій", "Матеріали для соцмереж", "Робота з брендовими гайдлайнами", "Підготовка до друку та препрес", "Адаптація під різні формати", "Доступність (WCAG)", "AI-візуали та ілюстрації"],
    en: ["Publication design and layout", "Reports and technical documentation", "Infographics", "Identity", "Presentation design", "Social media materials", "Working with brand guidelines", "Print production and prepress", "Adapting to different formats", "Accessibility (WCAG)", "AI visuals and illustration"]
  },
  tools: ["Figma", "Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop", "Midjourney", "FLUX"],
  languages: {
    ua: ["Українська – рідна", "English – advanced"],
    en: ["Ukrainian – native", "English – advanced"]
  },
  cv: "cv.pdf",
  email: "olena.mostepan@gmail.com",
  links: [
    { label: "Behance", href: "https://www.behance.net/olena_mostepan/" }
  ]
};
