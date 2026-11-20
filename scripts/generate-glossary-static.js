import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glossaryCategories, glossaryTerms, supportingPages } from '../src/data/glossaryData.ts';
import { glossaryCategoriesUk, glossaryTermsUk, supportingPagesUk } from '../src/data/glossaryData.uk.ts';
import { renderMarkdownToHtml } from '../src/utils/markdownRenderer.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.resolve(rootDir, 'public');
const enGlossaryDir = path.resolve(publicDir, 'glossary');
const ukGlossaryDir = path.resolve(publicDir, 'uk', 'glossary');

for (const dir of [enGlossaryDir, ukGlossaryDir]) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

console.log(`Generating multilingual static glossary files for ${glossaryTerms.length} terms (EN & UK)...`);

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const COMMON_CSS = `
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: #1c1b18;
    max-width: 840px;
    margin: 40px auto;
    padding: 0 24px;
    background-color: #faf9f6;
  }
  header {
    margin-bottom: 48px;
  }
  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
  .logo {
    font-weight: 700;
    font-size: 1.1rem;
    color: #1c1b18;
    text-decoration: none;
  }
  .lang-switcher {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #f4f2ec;
    border: 1px solid #e8e6dc;
    border-radius: 9999px;
    padding: 3px 8px;
    font-size: 0.8rem;
    font-weight: 600;
  }
  .lang-btn {
    color: #5e605c;
    text-decoration: none;
    padding: 2px 6px;
    border-radius: 9999px;
  }
  .lang-btn.active {
    background: #ffffff;
    color: #1c1b18;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  }
  nav.breadcrumbs {
    font-size: 0.875rem;
    color: #5e605c;
    margin-bottom: 12px;
  }
  nav.breadcrumbs a {
    color: #3E70A2;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  nav.breadcrumbs a:hover {
    color: #D93636;
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 16px;
    font-family: "Space Grotesk", -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.2;
  }
  .meta-bar {
    font-size: 0.875rem;
    color: #5e605c;
    margin-bottom: 32px;
  }
  .lead {
    font-size: 1.15rem;
    color: #5e605c;
    margin-bottom: 24px;
  }
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-bottom: 40px;
  }
  .cat-card {
    background: #ffffff;
    border: 1px solid #e8e6dc;
    border-radius: 8px;
    padding: 16px;
  }
  .cat-card h3 {
    margin: 0 0 8px;
    font-size: 1.05rem;
    color: #1c1b18;
  }
  .cat-card p {
    margin: 0;
    font-size: 0.85rem;
    color: #5e605c;
  }
  .directory {
    background: #ffffff;
    border: 1px solid #e8e6dc;
    border-radius: 12px;
    padding: 32px;
  }
  .letter-group {
    margin-bottom: 32px;
  }
  .letter-group h2 {
    font-size: 1.5rem;
    border-bottom: 1px solid #e8e6dc;
    padding-bottom: 8px;
    margin-top: 0;
  }
  .terms-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 12px;
  }
  .terms-list li a {
    color: #3E70A2;
    text-decoration: none;
    font-size: 0.95rem;
  }
  .terms-list li a:hover {
    color: #D93636;
    text-decoration: underline;
  }
  article {
    background: #ffffff;
    border: 1px solid #e8e6dc;
    border-radius: 12px;
    padding: 40px;
  }
  .glossary-term-section {
    margin-bottom: 32px;
  }
  .glossary-term-section__title {
    font-size: 1.25rem;
    margin-bottom: 12px;
    color: #1c1b18;
  }
  .glossary-term-section__text {
    font-family: "Noto Serif", Georgia, serif;
    font-size: 1.05rem;
    line-height: 1.7;
    color: #1c1b18;
  }
  .glossary-table-wrapper {
    width: 100%;
    overflow-x: auto;
    margin: 24px 0;
    border: 1px solid #e8e6dc;
    border-radius: 8px;
  }
  .glossary-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95rem;
  }
  .glossary-table th, .glossary-table td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #e8e6dc;
  }
  .glossary-table th {
    background: #f4f2ec;
    font-weight: 600;
  }
  .glossary-code-block-wrapper {
    margin: 24px 0;
    border: 1px solid #e8e6dc;
    border-radius: 8px;
    background: #f4f2ec;
    padding: 16px 20px;
    overflow-x: auto;
  }
  .glossary-code-block {
    margin: 0;
    font-family: "SFMono-Regular", Consolas, Menlo, monospace;
    font-size: 0.9rem;
    white-space: pre;
  }
  .glossary-term-nav {
    margin-top: 64px;
    padding-top: 32px;
    border-top: 1px solid #e8e6dc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .glossary-term-nav__btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    height: 44px;
    padding: 0 20px;
    background: #ffffff;
    border: 1px solid #e8e6dc;
    border-radius: 9999px;
    color: #1c1b18;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
  }
  .glossary-term-nav__btn:hover {
    background: #f4f2ec;
    color: #D93636;
  }
  .glossary-term-nav__pill-group {
    display: inline-flex;
    align-items: center;
    gap: 12px;
  }
  .glossary-term-nav__item {
    color: #3E70A2;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
  }
  .glossary-term-nav__item:hover {
    color: #D93636;
    text-decoration: underline;
  }
  .glossary-term-nav__item--disabled {
    color: #a09e97;
    opacity: 0.4;
    pointer-events: none;
  }
  footer {
    margin-top: 60px;
    padding-top: 24px;
    border-top: 1px solid #d0cdc2;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #5e605c;
  }
  footer a {
    color: #5e605c;
    text-decoration: none;
  }
  footer a:hover {
    color: #D93636;
  }
`;

// Helper to generate the Hub Page
function generateHubHtml(lang) {
  const isUk = lang === 'uk';
  const prefix = isUk ? '/uk/glossary' : '/glossary';
  const canonicalUrl = isUk ? 'https://lexkonovalov.com/uk/glossary/' : 'https://lexkonovalov.com/glossary/';
  const categories = isUk ? glossaryCategoriesUk : glossaryCategories;
  const terms = isUk ? glossaryTermsUk : glossaryTerms;

  const title = isUk
    ? 'Словник продуктового дизайну — Архітектурний лексикон та системна онтологія | Lex Konovalov'
    : `Product Design Glossary — Architectural Lexicon & Systems Ontology | Lex Konovalov`;
  const description = isUk
    ? `Канонічна таксономія зі ${terms.length} термінів, що охоплює UX та архітектуру продукту, дизайн-системи та інженерію, ШІ та агентні системи, а також продуктову стратегію та зростання.`
    : `A canonical ${terms.length}-term taxonomy covering UX & Product Architecture, Design Systems & Engineering, AI & Agentic Systems, and Product Strategy & Growth.`;

  const hubJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTermSet",
        "@id": `${canonicalUrl}#terms`,
        "name": isUk ? "Словник продуктового дизайну" : "Product Design Glossary",
        "description": description,
        "url": canonicalUrl,
        "inLanguage": isUk ? "uk-UA" : "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "hasDefinedTerm": terms.map((t) => ({
          "@type": "DefinedTerm",
          "@id": `${isUk ? "https://lexkonovalov.com/uk/glossary/" : "https://lexkonovalov.com/glossary/"}${t.slug}.html#term`,
          "name": t.name,
          "termCode": t.slug,
          "description": t.definition,
          "url": `${isUk ? "https://lexkonovalov.com/uk/glossary/" : "https://lexkonovalov.com/glossary/"}${t.slug}.html`
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumbs`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": isUk ? "Головна" : "Home",
            "item": "https://lexkonovalov.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": isUk ? "Словник продуктового дизайну" : "Product Design Glossary",
            "item": canonicalUrl
          }
        ]
      }
    ]
  };

  const termsByLetter = {};
  terms.forEach((t) => {
    const first = t.name.trim().charAt(0).toUpperCase();
    const letter = /[A-ZА-ЯЄІЇҐ]/.test(first) ? first : '#';
    if (!termsByLetter[letter]) termsByLetter[letter] = [];
    termsByLetter[letter].push(t);
  });

  Object.keys(termsByLetter).forEach((l) => {
    termsByLetter[l].sort((a, b) => a.name.localeCompare(b.name, isUk ? 'uk' : 'en'));
  });

  return `<!DOCTYPE html>
<html lang="${isUk ? 'uk-UA' : 'en-US'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${canonicalUrl}" />
  <link rel="alternate" hreflang="en" href="https://lexkonovalov.com/glossary/" />
  <link rel="alternate" hreflang="uk" href="https://lexkonovalov.com/uk/glossary/" />
  <link rel="alternate" hreflang="x-default" href="https://lexkonovalov.com/glossary/" />
  <meta name="author" content="Oleksandr Konovalov">
  
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:image" content="https://lexkonovalov.com/og/home.webp?v=2">
  <meta property="og:site_name" content="Lex Konovalov — Portfolio">
  <meta property="og:locale" content="${isUk ? 'uk_UA' : 'en_US'}">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="https://lexkonovalov.com/og/home.webp?v=2">
  
  <script>
    const isCrawler = /bot|google|baidu|bing|yandex|crawler|spider|robot|crawling|perplexity|claude|chatgpt|anthropic|cohere|meta-external|facebookexternalhit|gptbot|bytespider|applebot/i.test(navigator.userAgent);
    if (!isCrawler) {
      window.location.replace('/?p=${prefix}/');
    }
  </script>
  
  <script type="application/ld+json">
${JSON.stringify(hubJsonLd, null, 2)}
  </script>
  
  <style>
${COMMON_CSS}
  </style>
</head>
<body>
  <header>
    <div class="header-top">
      <a href="${prefix}/" class="logo">Lex Konovalov</a>
      <div class="lang-switcher" role="group" aria-label="${isUk ? 'Перемикач мови' : 'Language switcher'}">
        ${isUk 
          ? `<a href="/glossary/" class="lang-btn">EN</a><span>|</span><span class="lang-btn active">UA</span>`
          : `<span class="lang-btn active">EN</span><span>|</span><a href="/uk/glossary/" class="lang-btn">UA</a>`
        }
      </div>
    </div>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">${isUk ? 'Головна' : 'Home'}</a> / <span>${isUk ? 'Словник продуктового дизайну' : 'Product Design Glossary'}</span>
    </nav>
    <h1>${isUk ? 'Словник продуктового дизайну' : 'Product Design Glossary'}</h1>
    <p class="lead">${escapeHtml(description)}</p>
  </header>
  
  <section class="categories-grid" aria-label="${isUk ? 'Категорії' : 'Categories'}">
    ${categories.map((c) => `
      <div class="cat-card">
        <h3>${escapeHtml(c.name)}</h3>
        <p>${c.count} ${isUk ? 'термінів' : 'terms'} &bull; ${escapeHtml(c.primaryFocus)}</p>
      </div>
    `).join('')}
  </section>
  
  <main class="directory">
    ${Object.keys(termsByLetter).sort((a, b) => a.localeCompare(b, isUk ? 'uk' : 'en')).map((l) => `
      <section class="letter-group" id="letter-${l}">
        <h2>${l}</h2>
        <ul class="terms-list">
          ${termsByLetter[l].map((t) => `
            <li>
              <a href="${prefix}/${t.slug}.html">${escapeHtml(t.name)}</a>
            </li>
          `).join('')}
        </ul>
      </section>
    `).join('')}
  </main>
  
  <footer>
    <div>&copy; Lex Konovalov / 2026</div>
    <div>
      <a href="https://drive.google.com/file/d/1FhjXjKfXXz1LNfjsxeG2QOKaDGeAD1hk/view?usp=sharing">CV</a> /
      <a href="mailto:lex.konovalov@gmail.com">lex.konovalov@gmail.com</a> /
      <a href="https://www.linkedin.com/in/lex-konovalov/">LinkedIn</a> /
      <a href="${prefix}/">${isUk ? 'Словник' : 'Glossary'}</a>
    </div>
  </footer>
</body>
</html>`;
}

// Write Hub Pages
fs.writeFileSync(path.join(enGlossaryDir, 'index.html'), generateHubHtml('en'), 'utf-8');
console.log('Generated public/glossary/index.html (EN)');
fs.writeFileSync(path.join(ukGlossaryDir, 'index.html'), generateHubHtml('uk'), 'utf-8');
console.log('Generated public/uk/glossary/index.html (UK)');

// Helper to generate individual term page
function generateTermHtml(term, index, terms, lang) {
  const isUk = lang === 'uk';
  const prefix = isUk ? '/uk/glossary' : '/glossary';
  const prevTerm = index > 0 ? terms[index - 1] : null;
  const nextTerm = index < terms.length - 1 ? terms[index + 1] : null;

  const pageTitle = term.seoTitle ? term.seoTitle : `${term.name} | ${isUk ? 'Словник продуктового дизайну' : 'Product Design Glossary'} — Lex Konovalov`;
  const pageDescription = term.seoDescription || term.definition;
  const canonicalUrl = term.canonicalUrl || `https://lexkonovalov.com${prefix}/${term.slug}.html`;

  const enUrl = `https://lexkonovalov.com/glossary/${term.slug}.html`;
  const ukUrl = `https://lexkonovalov.com/uk/glossary/${term.slug}.html`;

  let termJsonLd;
  if (term.structuredDataGraph && term.structuredDataGraph.length > 0) {
    termJsonLd = {
      "@context": "https://schema.org",
      "@graph": term.structuredDataGraph
    };
  } else {
    termJsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTerm",
          "@id": `${canonicalUrl}#term`,
          "name": term.name,
          "termCode": term.slug,
          "description": term.definition,
          "inDefinedTermSet": {
            "@type": "DefinedTermSet",
            "@id": `https://lexkonovalov.com${prefix}/#terms`,
            "name": isUk ? "Словник продуктового дизайну" : "Product Design Glossary",
            "url": `https://lexkonovalov.com${prefix}/`,
            "inLanguage": isUk ? "uk-UA" : "en-US",
            "isPartOf": {
              "@id": "https://lexkonovalov.com/#website"
            }
          },
          "url": canonicalUrl
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}#breadcrumbs`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": isUk ? "Головна" : "Home",
              "item": "https://lexkonovalov.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": isUk ? "Словник продуктового дизайну" : "Product Design Glossary",
              "item": `https://lexkonovalov.com${prefix}/`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": term.name,
              "item": canonicalUrl
            }
          ]
        }
      ]
    };
  }

  return `<!DOCTYPE html>
<html lang="${isUk ? 'uk-UA' : 'en-US'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(pageTitle)}</title>
  <meta name="description" content="${escapeHtml(pageDescription)}">
  <link rel="canonical" href="${canonicalUrl}" />
  <link rel="alternate" hreflang="en" href="${enUrl}" />
  <link rel="alternate" hreflang="uk" href="${ukUrl}" />
  <link rel="alternate" hreflang="x-default" href="${enUrl}" />
  <meta name="author" content="Oleksandr Konovalov">
  
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(pageTitle)}">
  <meta property="og:description" content="${escapeHtml(pageDescription)}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:image" content="https://lexkonovalov.com/og/home.webp?v=2">
  <meta property="og:site_name" content="Lex Konovalov — Portfolio">
  <meta property="og:locale" content="${isUk ? 'uk_UA' : 'en_US'}">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(pageTitle)}">
  <meta name="twitter:description" content="${escapeHtml(pageDescription)}">
  <meta name="twitter:image" content="https://lexkonovalov.com/og/home.webp?v=2">
  
  <script>
    const isCrawler = /bot|google|baidu|bing|yandex|crawler|spider|robot|crawling|perplexity|claude|chatgpt|anthropic|cohere|meta-external|facebookexternalhit|gptbot|bytespider|applebot/i.test(navigator.userAgent);
    if (!isCrawler) {
      window.location.replace('/?p=${prefix}/${term.slug}.html');
    }
  </script>
  
  <script type="application/ld+json">
${JSON.stringify(termJsonLd, null, 2)}
  </script>
  
  <style>
${COMMON_CSS}
  </style>
</head>
<body>
  <header>
    <div class="header-top">
      <a href="${prefix}/" class="logo">Lex Konovalov</a>
      <div class="lang-switcher" role="group" aria-label="${isUk ? 'Перемикач мови' : 'Language switcher'}">
        ${isUk 
          ? `<a href="/glossary/${term.slug}.html" class="lang-btn">EN</a><span>|</span><span class="lang-btn active">UA</span>`
          : `<span class="lang-btn active">EN</span><span>|</span><a href="/uk/glossary/${term.slug}.html" class="lang-btn">UA</a>`
        }
      </div>
    </div>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">${isUk ? 'Головна' : 'Home'}</a> / <a href="${prefix}/">${isUk ? 'Словник продуктового дизайну' : 'Product Design Glossary'}</a> / <span>${escapeHtml(term.name)}</span>
    </nav>
    <h1>${escapeHtml(term.name)}</h1>
    <div class="meta-bar">
      <span>${escapeHtml(term.category)}</span>
      ${term.secondaryCategory ? ` &bull; <span>${escapeHtml(term.secondaryCategory)}</span>` : ''}
    </div>
  </header>

  <article>
    ${term.contentMarkdown ? renderMarkdownToHtml(term.contentMarkdown) : `
      <section class="glossary-term-section">
        <h2 class="glossary-term-section__title">${isUk ? 'Визначення' : 'Definition'}</h2>
        <p class="glossary-term-section__text">${escapeHtml(term.definition)}</p>
      </section>
      <section class="glossary-term-section">
        <h2 class="glossary-term-section__title">${isUk ? 'Призначення' : 'Purpose'}</h2>
        <p class="glossary-term-section__text">${escapeHtml(term.purpose)}</p>
      </section>
    `}

    <nav class="glossary-term-nav" aria-label="${isUk ? 'Навігація між термінами' : 'Glossary term navigation'}">
      <a href="${prefix}/" class="glossary-term-nav__btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        <span>${isUk ? 'До словника' : 'Back to Glossary'}</span>
      </a>
      <div class="glossary-term-nav__pill-group">
        ${prevTerm ? `
          <a href="${prefix}/${prevTerm.slug}.html" class="glossary-term-nav__item" title="${escapeHtml(prevTerm.name)}">
            &larr; ${isUk ? 'Попередній' : 'Previous'}
          </a>
        ` : `
          <span class="glossary-term-nav__item glossary-term-nav__item--disabled">&larr; ${isUk ? 'Попередній' : 'Previous'}</span>
        `}
        <span>&bull;</span>
        ${nextTerm ? `
          <a href="${prefix}/${nextTerm.slug}.html" class="glossary-term-nav__item" title="${escapeHtml(nextTerm.name)}">
            ${isUk ? 'Наступний' : 'Next'} &rarr;
          </a>
        ` : `
          <span class="glossary-term-nav__item glossary-term-nav__item--disabled">${isUk ? 'Наступний' : 'Next'} &rarr;</span>
        `}
      </div>
    </nav>
  </article>

  <footer>
    <div>&copy; Lex Konovalov / 2026</div>
    <div>
      <a href="https://drive.google.com/file/d/1FhjXjKfXXz1LNfjsxeG2QOKaDGeAD1hk/view?usp=sharing">CV</a> /
      <a href="mailto:lex.konovalov@gmail.com">lex.konovalov@gmail.com</a> /
      <a href="https://www.linkedin.com/in/lex-konovalov/">LinkedIn</a> /
      <a href="${prefix}/">${isUk ? 'Словник' : 'Glossary'}</a>
    </div>
  </footer>
</body>
</html>`;
}

// Generate all 176 English and 176 Ukrainian term pages
glossaryTerms.forEach((term, idx) => {
  const html = generateTermHtml(term, idx, glossaryTerms, 'en');
  fs.writeFileSync(path.join(enGlossaryDir, `${term.slug}.html`), html, 'utf-8');
});
console.log(`Generated 176 static English term pages in public/glossary/`);

glossaryTermsUk.forEach((term, idx) => {
  const html = generateTermHtml(term, idx, glossaryTermsUk, 'uk');
  fs.writeFileSync(path.join(ukGlossaryDir, `${term.slug}.html`), html, 'utf-8');
});
console.log(`Generated 176 static Ukrainian term pages in public/uk/glossary/`);

// Helper to generate supporting pages
function generateSupportingPageHtml(page, lang) {
  const isUk = lang === 'uk';
  const prefix = isUk ? '/uk/glossary' : '/glossary';
  const enUrl = page.slug === 'ooux' ? 'https://lexkonovalov.com/glossary/ooux/' : `https://lexkonovalov.com/glossary/${page.slug}.html`;
  const ukUrl = page.slug === 'ooux' ? 'https://lexkonovalov.com/uk/glossary/ooux/' : `https://lexkonovalov.com/uk/glossary/${page.slug}.html`;
  const canonicalUrl = isUk ? ukUrl : enUrl;

  const pageTitle = page.title || `${page.name} | Lex Konovalov`;
  const pageDescription = page.description;

  const redirectPath = page.slug === 'ooux' ? `${prefix}/ooux/` : `${prefix}/${page.slug}.html`;

  let jsonLd = {
    "@context": "https://schema.org",
    "@graph": page.structuredDataGraph || []
  };

  return `<!DOCTYPE html>
<html lang="${isUk ? 'uk-UA' : 'en-US'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(pageTitle)}</title>
  <meta name="description" content="${escapeHtml(pageDescription)}">
  <link rel="canonical" href="${canonicalUrl}" />
  <link rel="alternate" hreflang="en" href="${enUrl}" />
  <link rel="alternate" hreflang="uk" href="${ukUrl}" />
  <link rel="alternate" hreflang="x-default" href="${enUrl}" />
  <meta name="author" content="Oleksandr Konovalov">
  
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(pageTitle)}">
  <meta property="og:description" content="${escapeHtml(pageDescription)}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:image" content="https://lexkonovalov.com/og/home.webp?v=2">
  <meta property="og:site_name" content="Lex Konovalov — Portfolio">
  <meta property="og:locale" content="${isUk ? 'uk_UA' : 'en_US'}">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(pageTitle)}">
  <meta name="twitter:description" content="${escapeHtml(pageDescription)}">
  <meta name="twitter:image" content="https://lexkonovalov.com/og/home.webp?v=2">
  
  <script>
    const isCrawler = /bot|google|baidu|bing|yandex|crawler|spider|robot|crawling|perplexity|claude|chatgpt|anthropic|cohere|meta-external|facebookexternalhit|gptbot|bytespider|applebot/i.test(navigator.userAgent);
    if (!isCrawler) {
      window.location.replace('/?p=${redirectPath}');
    }
  </script>
  
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>
  
  <style>
${COMMON_CSS}
  </style>
</head>
<body>
  <header>
    <div class="header-top">
      <a href="${prefix}/" class="logo">Lex Konovalov</a>
      <div class="lang-switcher" role="group" aria-label="${isUk ? 'Перемикач мови' : 'Language switcher'}">
        ${isUk 
          ? `<a href="${enUrl.replace('https://lexkonovalov.com', '')}" class="lang-btn">EN</a><span>|</span><span class="lang-btn active">UA</span>`
          : `<span class="lang-btn active">EN</span><span>|</span><a href="${ukUrl.replace('https://lexkonovalov.com', '')}" class="lang-btn">UA</a>`
        }
      </div>
    </div>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">${isUk ? 'Головна' : 'Home'}</a> / <a href="${prefix}/">${isUk ? 'Словник продуктового дизайну' : 'Product Design Glossary'}</a> ${page.slug === 'ooux-worked-example' ? `/ <a href="${prefix}/ooux/">Object-Oriented UX (OOUX)</a> ` : ''}/ <span>${escapeHtml(page.name)}</span>
    </nav>
    <h1>${escapeHtml(page.name)}</h1>
    <div class="meta-bar">
      <span>${escapeHtml(page.category || (isUk ? 'UX та архітектура продукту' : 'UX & Product Architecture'))}</span>
      ${page.secondaryCategory ? ` &bull; <span>${escapeHtml(page.secondaryCategory)}</span>` : ''}
    </div>
  </header>

  <article>
    ${renderMarkdownToHtml(page.contentMarkdown)}

    <nav class="glossary-term-nav" aria-label="${isUk ? 'Навігація' : 'Glossary Navigation'}">
      <a href="${prefix}/" class="glossary-term-nav__btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        <span>${isUk ? 'До словника' : 'Back to Glossary'}</span>
      </a>
      ${page.slug === 'ooux-worked-example' ? `
      <div class="glossary-term-nav__pill-group">
        <a href="${prefix}/ooux/" class="glossary-term-nav__item" title="Object-Oriented UX (OOUX) Hub">
          &larr; ${isUk ? 'До OOUX Hub' : 'Back to OOUX Hub'}
        </a>
      </div>
      ` : ''}
    </nav>
  </article>

  <footer>
    <div>&copy; Lex Konovalov / 2026</div>
    <div>
      <a href="https://drive.google.com/file/d/1FhjXjKfXXz1LNfjsxeG2QOKaDGeAD1hk/view?usp=sharing">CV</a> /
      <a href="mailto:lex.konovalov@gmail.com">lex.konovalov@gmail.com</a> /
      <a href="https://www.linkedin.com/in/lex-konovalov/">LinkedIn</a> /
      <a href="${prefix}/">${isUk ? 'Словник' : 'Glossary'}</a>
    </div>
  </footer>
</body>
</html>`;
}

// Generate English supporting pages
supportingPages.forEach((page) => {
  let outDir = enGlossaryDir;
  let outFilename = `${page.slug}.html`;
  if (page.slug === 'ooux') {
    outDir = path.join(enGlossaryDir, 'ooux');
    outFilename = 'index.html';
  }
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, outFilename), generateSupportingPageHtml(page, 'en'), 'utf-8');
});
console.log('Generated English supporting pages in public/glossary/');

// Generate Ukrainian supporting pages
supportingPagesUk.forEach((page) => {
  let outDir = ukGlossaryDir;
  let outFilename = `${page.slug}.html`;
  if (page.slug === 'ooux') {
    outDir = path.join(ukGlossaryDir, 'ooux');
    outFilename = 'index.html';
  }
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, outFilename), generateSupportingPageHtml(page, 'uk'), 'utf-8');
});
console.log('Generated Ukrainian supporting pages in public/uk/glossary/');

// 3. Generate clean, deduplicated public/sitemap.xml
const sitemapPath = path.join(publicDir, 'sitemap.xml');

const basePages = [
  { loc: 'https://lexkonovalov.com/', lastmod: '2026-09-11', changefreq: 'monthly', priority: '1.0' },
  { loc: 'https://lexkonovalov.com/about/', lastmod: '2026-09-11', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://lexkonovalov.com/cases/how-ooux-reduced-error-rates-in-traveltech.html', lastmod: '2026-09-11', changefreq: 'monthly', priority: '0.7' },
  { loc: 'https://lexkonovalov.com/cases/how-to-achieve-30-percent-conversion-lift-in-b2c.html', lastmod: '2026-09-11', changefreq: 'monthly', priority: '0.7' },
  { loc: 'https://lexkonovalov.com/cases/how-ai-ready-modular-system-fixed-luxury-travel-identity-crisis.html', lastmod: '2026-09-11', changefreq: 'monthly', priority: '0.7' },
  { loc: 'https://lexkonovalov.com/daily-thing/designing-my-first-newsletter-form-after-10-years-in-ux.html', lastmod: '2026-09-11', changefreq: 'monthly', priority: '0.6' },
  { loc: 'https://lexkonovalov.com/daily-thing/how-ai-augmented-prototyping-cut-b2b-design-time-by-90.html', lastmod: '2026-09-11', changefreq: 'monthly', priority: '0.6' }
];

let sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

// Base pages
for (const p of basePages) {
  sitemapXml += `  <url>\n    <loc>${p.loc}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>\n`;
}

// English & Ukrainian Glossary Hubs
sitemapXml += `  <url>
    <loc>https://lexkonovalov.com/glossary/</loc>
    <lastmod>2026-11-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://lexkonovalov.com/glossary/" />
    <xhtml:link rel="alternate" hreflang="uk" href="https://lexkonovalov.com/uk/glossary/" />
  </url>\n`;

sitemapXml += `  <url>
    <loc>https://lexkonovalov.com/uk/glossary/</loc>
    <lastmod>2026-11-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://lexkonovalov.com/glossary/" />
    <xhtml:link rel="alternate" hreflang="uk" href="https://lexkonovalov.com/uk/glossary/" />
  </url>\n`;

// Supporting pages
supportingPages.forEach((page) => {
  const enLoc = page.slug === 'ooux' ? 'https://lexkonovalov.com/glossary/ooux/' : `https://lexkonovalov.com/glossary/${page.slug}.html`;
  const ukLoc = page.slug === 'ooux' ? 'https://lexkonovalov.com/uk/glossary/ooux/' : `https://lexkonovalov.com/uk/glossary/${page.slug}.html`;
  const priority = page.slug === 'ooux' ? '0.9' : '0.8';
  const changefreq = page.slug === 'ooux' ? 'weekly' : 'monthly';

  // EN
  sitemapXml += `  <url>
    <loc>${enLoc}</loc>
    <lastmod>2026-11-20</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${enLoc}" />
    <xhtml:link rel="alternate" hreflang="uk" href="${ukLoc}" />
  </url>\n`;

  // UK
  sitemapXml += `  <url>
    <loc>${ukLoc}</loc>
    <lastmod>2026-11-20</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${enLoc}" />
    <xhtml:link rel="alternate" hreflang="uk" href="${ukLoc}" />
  </url>\n`;
});

// All 176 terms (EN & UK)
glossaryTerms.forEach((term) => {
  const enLoc = `https://lexkonovalov.com/glossary/${term.slug}.html`;
  const ukLoc = `https://lexkonovalov.com/uk/glossary/${term.slug}.html`;

  // EN
  sitemapXml += `  <url>
    <loc>${enLoc}</loc>
    <lastmod>2026-11-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${enLoc}" />
    <xhtml:link rel="alternate" hreflang="uk" href="${ukLoc}" />
  </url>\n`;

  // UK
  sitemapXml += `  <url>
    <loc>${ukLoc}</loc>
    <lastmod>2026-11-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${enLoc}" />
    <xhtml:link rel="alternate" hreflang="uk" href="${ukLoc}" />
  </url>\n`;
});

sitemapXml += '</urlset>\n';
fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
const totalSitemapUrls = basePages.length + 2 + (supportingPages.length * 2) + (glossaryTerms.length * 2);
console.log(`Regenerated public/sitemap.xml with ${totalSitemapUrls} unique URLs!`);
