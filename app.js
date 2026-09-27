(function () {
  const S = window.SITE, P = window.PROJECTS, A = window.ABOUT;
  const UI = {
    work: { ua: "Роботи", en: "Work" },
    about: { ua: "Про мене", en: "About" },
    view: { ua: "Переглянути", en: "Click to view" },
    showGrid: { ua: "Показати сіткою", en: "Show grid" },
    showList: { ua: "Показати списком", en: "Show list" },
    year: { ua: "Рік", en: "Year" },
    role: { ua: "Роль", en: "Role" },
    services: { ua: "Що зроблено", en: "Services" },
    prev: { ua: "← Попередній", en: "← Previous" },
    next: { ua: "Наступний →", en: "Next →" },
    all: { ua: "Усі роботи", en: "All work" },
    image: { ua: "Зображення", en: "Image" },
    clients: { ua: "Організації", en: "Clients" },
    experience: { ua: "Досвід", en: "Experience" },
    skills: { ua: "Навички", en: "Skills" },
    tools: { ua: "Інструменти", en: "Tools" },
    interests: { ua: "Інтереси", en: "Interests" },
    cv: { ua: "Резюме", en: "CV" },
    cvDl: { ua: "Завантажити CV (PDF)", en: "Download CV (PDF)" },
    email: { ua: "Пошта", en: "Email" },
    social: { ua: "Посилання", en: "Links" },
    portrait: { ua: "Портрет", en: "Portrait" }
  };

  let lang = "ua";
  try { const s = localStorage.getItem("lang"); if (s === "en" || s === "ua") lang = s; } catch (e) {}
  let mode = "list";
  try { if (localStorage.getItem("mode") === "grid") mode = "grid"; } catch (e) {}

  const t = (o) => (o && typeof o === "object" && !Array.isArray(o)) ? (o[lang] ?? o.ua) : o;
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const num = (i) => String(i + 1).padStart(2, "0");
  const app = document.getElementById("app");

  function media(item, i, extra = "") {
    if (typeof item === "string") item = { src: item };
    if (item && item.src) return `<img src="${esc(item.src)}" alt="" loading="lazy" decoding="async" ${extra}>`;
    const r = (item && item.ratio) || "4/3";
    return `<div class="ph" style="aspect-ratio:${r}">${t(UI.image)} ${num(i)}</div>`;
  }
  const coverSrc = (p) => { if (p.card) return p.card; const f = p.index && p.index[0]; return typeof f === "string" ? f : (f && f.src) || (p.hero && p.hero.src) || ""; };

  /* ---------- Header ---------- */
  function header(route) {
    return `
    <header class="site-head">
      <a class="site-name" href="#">${esc(t(S.name))}</a>
      <div class="head-right">
        <span class="clock" id="clock"></span>
        <nav class="nav" aria-label="Main">
          <a class="slash" href="#" ${route === "home" || route === "case" ? 'aria-current="page"' : ""}>${t(UI.work)}</a>
          <a class="slash" href="#about" ${route === "about" ? 'aria-current="page"' : ""}>${t(UI.about)}</a>
          <span class="lang" role="group" aria-label="Language">
            <button type="button" data-lang="ua" aria-pressed="${lang === "ua"}">UA</button>
            <button type="button" data-lang="en" aria-pressed="${lang === "en"}">EN</button>
          </span>
        </nav>
      </div>
    </header>`;
  }

  /* ---------- Home ---------- */
  function home() {
    const list = P.map((p, i) => `<li><button type="button" data-go="${p.slug}">${esc(t(p.client) === t(p.title) ? t(p.title) : t(p.title).replace(/\.$/, ""))}</button></li>`).join("");
    const groups = P.map((p, i) => `
      <section class="pgroup" id="g-${p.slug}" data-slug="${p.slug}">
        ${(p.index || []).map((im, k) => `<a class="pimg" href="#${p.slug}" aria-label="${esc(t(p.title))}">${media(im, k)}</a>`).join("")}
      </section>`).join("");
    const thumbs = P.map((p) => {
      const two = p.card ? [p.card] : (p.index || []).slice(0, 2);
      return `<button type="button" data-go="${p.slug}" aria-label="${esc(t(p.title))}">${two.map((im) => {
        const src = typeof im === "string" ? im : im.src;
        return src ? `<span class="t"><img src="${esc(src)}" alt=""></span>` : `<span class="t ph"></span>`;
      }).join("")}</button>`;
    }).join("");
    const cards = P.map((p, i) => `
      <a class="gcard" href="#${p.slug}">
        <div class="cover">${coverSrc(p) ? `<img src="${esc(coverSrc(p))}" alt="" loading="lazy">` : `<div class="ph">${t(UI.image)} 01</div>`}</div>
        <div class="meta"><span>${esc(t(p.title).replace(/\.$/, ""))}</span><span class="num">${num(i)}</span><span class="type">${esc(t(p.type))}</span></div>
      </a>`).join("");

    return `
    <main class="home" data-mode="${mode}">
      <aside class="home-left">
        <ol class="plist">${list}</ol>
        <div class="home-cat" id="homeCat"></div>
        <button type="button" class="grid-toggle slash" id="gridToggle">${mode === "grid" ? t(UI.showList) : t(UI.showGrid)}</button>
      </aside>
      <div class="home-center" id="scroller">${groups}</div>
      <aside class="home-right">
        <p class="intro">${esc(t(S.intro))}</p>
        <div class="home-info" id="homeInfo"></div>
        <div class="thumbs">${thumbs}</div>
      </aside>
      <p class="home-mobile-intro">${esc(t(S.intro))}</p>
      <div class="gridview">${cards}</div>
    </main>`;
  }

  function setActive(slug) {
    const i = P.findIndex((p) => p.slug === slug); if (i < 0) return;
    const p = P[i];
    document.querySelectorAll("[data-go]").forEach((b) => b.setAttribute("aria-current", b.dataset.go === slug ? "true" : "false"));
    const cat = document.getElementById("homeCat"); if (cat) cat.textContent = t(p.type);
    const info = document.getElementById("homeInfo");
    if (info) info.innerHTML = `<span>${esc(t(p.client))}</span><span class="num">${num(i)}</span><a class="slash" href="#${p.slug}">${t(UI.view)}</a>`;
  }

  let observer;
  function bindHome() {
    setActive(P[0].slug);
    const groups = document.querySelectorAll(".pgroup");
    let current = P[0].slug;
    const onScroll = () => {
      const line = window.innerHeight * 0.4;
      let slug = P[0].slug;
      groups.forEach((g) => { if (g.getBoundingClientRect().top <= line) slug = g.dataset.slug; });
      if (slug !== current) { current = slug; setActive(slug); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    observer = { disconnect: () => window.removeEventListener("scroll", onScroll) };
    document.querySelectorAll("[data-go]").forEach((b) => b.addEventListener("click", () => {
      if (mode === "grid") { location.hash = b.dataset.go; return; }
      const g = document.getElementById("g-" + b.dataset.go);
      if (g) g.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    }));
    document.querySelectorAll(".plist button").forEach((b) => b.addEventListener("mouseenter", () => { if (mode === "grid") return; }));
    document.getElementById("gridToggle").addEventListener("click", () => {
      mode = mode === "grid" ? "list" : "grid";
      try { localStorage.setItem("mode", mode); } catch (e) {}
      render(); window.scrollTo(0, 0);
    });
  }

  /* ---------- Case study ---------- */
  function caseStudy(i) {
    const p = P[i];
    const prev = P[(i - 1 + P.length) % P.length], next = P[(i + 1) % P.length];
    const services = t(p.services) || [];
    const gallery = (p.gallery || []).map((g, k) => `<figure class="s${g.span || 12}">${media(g, k + 1)}</figure>`).join("");
    return `
    <main class="page case${p.compact ? " is-compact" : ""}">
      <article>
        <div class="case-card">
          <div class="case-headgrid">
            <div>
              <p class="eyebrow mono">${esc(t(p.client))}</p>
              <h1 class="case-title"><b>${esc(t(p.title))}</b> <span>${esc(t(p.subtitle))}</span></h1>
              <p class="case-lead">${esc(t(p.lead))}</p>
            </div>
            <dl class="case-meta">
              ${p.year ? `<div><dt class="mono">${t(UI.year)}</dt><dd>${esc(p.year)}</dd></div>` : ""}
              <div><dt class="mono">${t(UI.role)}</dt><dd>${esc(t(p.role))}</dd></div>
              <div class="svc"><dt class="mono">${t(UI.services)}</dt><dd><ul class="tags">${services.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></dd></div>
            </dl>
          </div>
          <figure class="case-hero">${media(p.hero, 0, 'loading="eager"')}</figure>
        </div>
        ${gallery ? `<div class="gallery">${gallery}</div>` : ""}
        <nav class="case-nav" aria-label="Projects">
          <a class="prev" href="#${prev.slug}"><span class="dir">${t(UI.prev)}</span><span class="ttl">${esc(t(prev.title).replace(/\.$/, ""))}</span></a>
          <a class="all slash" href="#">${t(UI.all)}</a>
          <a class="next" href="#${next.slug}"><span class="dir">${t(UI.next)}</span><span class="ttl">${esc(t(next.title).replace(/\.$/, ""))}</span></a>
        </nav>
      </article>
    </main>`;
  }

  /* ---------- About ---------- */
  function about() {
    const cols = t(A.columns) || [];
    const half = Math.ceil(cols.length / 2);
    return `
    <main class="page about">
      <div class="about-grid">
        <div>
          <div class="about-label">${t(UI.about)}</div>
          <p class="statement">${esc(t(A.statement))}</p>
          <div class="about-cols">
            <div>${cols.slice(0, half).map((c) => `<p>${esc(c)}</p>`).join("")}</div>
            <div>${cols.slice(half).map((c) => `<p>${esc(c)}</p>`).join("")}</div>
          </div>
        </div>
        <div class="portrait">${A.portrait ? `<img src="${esc(A.portrait)}" alt="${esc(t(S.name))}">` : `<div class="ph" style="height:100%">${t(UI.portrait)}</div>`}</div>
      </div>

      <section class="rows">
        <div class="row"><h2>${t(UI.clients)}</h2><ul class="clients">${A.clients.map((c) => `<li>${esc(t(c))}</li>`).join("")}</ul></div>
        <div class="row"><h2>${t(UI.experience)}</h2><ul class="exp">${A.experience.map((e) => `<li><span class="yrs">${esc(e.years)}</span><span>${esc(t(e.role))}</span><span class="muted">${esc(t(e.org))}</span></li>`).join("")}</ul></div>
        <div class="row"><h2>${t(UI.skills)}</h2><ul class="inline-list">${(t(A.skills) || []).map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>
        <div class="row"><h2>${t(UI.tools)}</h2><ul class="inline-list">${A.tools.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>
        <div class="row"><h2>${t(UI.interests)}</h2><ul class="inline-list">${(t(A.interests) || []).map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>
        <div class="row"><h2>${t(UI.cv)}</h2><div><a class="cvlink slash" href="${esc(A.cv)}" target="_blank" rel="noopener">${t(UI.cvDl)}</a></div></div>
      </section>

      <dl class="foot">
        <dt>${t(UI.email)}</dt><dd>${esc(A.email)}</dd>
        <dt>${t(UI.social)}</dt><dd class="links">${A.links.map((l) => `<a class="slash" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</dd>
      </dl>
    </main>`;
  }

  /* ---------- Router ---------- */
  function route() {
    const h = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (h === "about") return { name: "about" };
    const i = P.findIndex((p) => p.slug === h);
    if (i >= 0) return { name: "case", i };
    return { name: "home" };
  }

  function render() {
    if (observer) { observer.disconnect(); observer = null; }
    const r = route();
    document.documentElement.lang = lang === "ua" ? "uk" : "en";
    document.body.classList.toggle("is-home", r.name === "home");
    let body = r.name === "about" ? about() : r.name === "case" ? caseStudy(r.i) : home();
    app.innerHTML = header(r.name) + body;
    const base = t(S.name).replace("\n", " ");
    document.title = r.name === "case" ? `${t(P[r.i].title).replace(/\.$/, "")} · ${base}` : r.name === "about" ? `${t(UI.about)} · ${base}` : base;
    if (r.name === "home") bindHome();
    app.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => {
      lang = b.dataset.lang; try { localStorage.setItem("lang", lang); } catch (e) {}
      const y = window.scrollY; render(); window.scrollTo(0, y);
    }));
    tick();
  }

  function tick() {
    const el = document.getElementById("clock"); if (!el) return;
    try {
      const time = new Intl.DateTimeFormat(lang === "ua" ? "uk-UA" : "en-GB", { hour: "2-digit", minute: "2-digit", timeZone: S.timeZone }).format(new Date());
      el.textContent = `${t(S.city)} ${time}`;
    } catch (e) { el.textContent = t(S.city); }
  }
  setInterval(tick, 20000);

  window.addEventListener("hashchange", () => { render(); window.scrollTo(0, 0); });
  document.addEventListener("keydown", (e) => {
    const r = route(); if (r.name !== "case" || e.target.closest("input,textarea")) return;
    if (e.key === "ArrowRight") location.hash = P[(r.i + 1) % P.length].slug;
    if (e.key === "ArrowLeft") location.hash = P[(r.i - 1 + P.length) % P.length].slug;
  });
  render();
})();
