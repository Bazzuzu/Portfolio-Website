import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glossaryCategories, glossaryTerms } from '../src/data/glossaryData.ts';
import { renderMarkdownToHtml } from '../src/utils/markdownRenderer.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.resolve(rootDir, 'public');
const glossaryDir = path.resolve(publicDir, 'glossary');

if (!fs.existsSync(glossaryDir)) {
  fs.mkdirSync(glossaryDir, { recursive: true });
}

console.log(`Generating static glossary files for ${glossaryTerms.length} terms...`);

// Helper to escape HTML
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// 1. Generate public/glossary/index.html (Hub)
const hubJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DefinedTermSet",
      "@id": "https://lexkonovalov.com/glossary/#terms",
      "name": "Product Design Glossary",
      "description": "A canonical 100-term taxonomy covering UX & Product Architecture, Design Systems & Engineering, AI & Agentic Systems, and Product Strategy & Growth.",
      "url": "https://lexkonovalov.com/glossary/",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://lexkonovalov.com/#website"
      },
      "hasDefinedTerm": glossaryTerms.map((t) => ({
        "@type": "DefinedTerm",
        "@id": `https://lexkonovalov.com/glossary/${t.slug}.html#term`,
        "name": t.name,
        "termCode": t.slug,
        "description": t.definition,
        "url": `https://lexkonovalov.com/glossary/${t.slug}.html`
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://lexkonovalov.com/glossary/#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://lexkonovalov.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Product Design Glossary",
          "item": "https://lexkonovalov.com/glossary/"
        }
      ]
    }
  ]
};

// Group terms alphabetically for static HTML
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const termsByLetter = {};
glossaryTerms.forEach((t) => {
  const first = t.name.trim().charAt(0).toUpperCase();
  const letter = /[A-Z]/.test(first) ? first : '#';
  if (!termsByLetter[letter]) termsByLetter[letter] = [];
  termsByLetter[letter].push(t);
});

// Sort each letter group
Object.keys(termsByLetter).forEach((l) => {
  termsByLetter[l].sort((a, b) => a.name.localeCompare(b.name));
});

const hubHtml = `<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Design Glossary — Architectural Lexicon & Systems Ontology | Lex Konovalov</title>
  <meta name="description" content="A canonical 100-term taxonomy covering UX & Product Architecture, Design Systems & Engineering, AI & Agentic Systems, and Product Strategy & Growth.">
  <link rel="canonical" href="https://lexkonovalov.com/glossary/" />
  <meta name="author" content="Oleksandr Konovalov">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Product Design Glossary — Architectural Lexicon & Systems Ontology">
  <meta property="og:description" content="A canonical 100-term taxonomy covering UX & Product Architecture, Design Systems & Engineering, AI & Agentic Systems, and Product Strategy & Growth.">
  <meta property="og:url" content="https://lexkonovalov.com/glossary/">
  <meta property="og:image" content="https://lexkonovalov.com/og/home.webp?v=2">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="Lex Konovalov — Portfolio">
  <meta property="og:locale" content="en_US">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Product Design Glossary | Lex Konovalov">
  <meta name="twitter:description" content="100 canonical entries bridging conceptual UX models with programmatic execution and generative engine optimization.">
  <meta name="twitter:image" content="https://lexkonovalov.com/og/home.webp?v=2">
  
  <!-- Crawler detection redirect -->
  <script>
    const isCrawler = /bot|google|baidu|bing|yandex|crawler|spider|robot|crawling|perplexity|claude|chatgpt|anthropic|cohere|meta-external|facebookexternalhit|gptbot|bytespider|applebot/i.test(navigator.userAgent);
    if (!isCrawler) {
      window.location.replace('/?p=/glossary/');
    }
  </script>
  
  <script type="application/ld+json">
${JSON.stringify(hubJsonLd, null, 2)}
  </script>
  
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #1c1b18;
      max-width: 1040px;
      margin: 40px auto;
      padding: 0 24px;
      background-color: #faf9f6;
    }
    header {
      text-align: center;
      margin-bottom: 48px;
    }
    nav.breadcrumbs {
      font-size: 0.875rem;
      color: #5e605c;
      margin-bottom: 12px;
    }
    nav.breadcrumbs a {
      color: #5e605c;
      text-decoration: none;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 16px;
      font-family: "Space Grotesk", sans-serif;
    }
    .lead {
      font-size: 1.15rem;
      color: #5e605c;
      max-width: 680px;
      margin: 0 auto 24px;
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
      margin-bottom: 16px;
      color: #D93636;
      font-family: "Space Grotesk", sans-serif;
    }
    .terms-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 12px;
    }
    .terms-list a {
      color: #1c1b18;
      text-decoration: none;
    }
    .terms-list a:hover {
      color: #D93636;
      text-decoration: underline;
    }
    footer {
      margin-top: 64px;
      padding-top: 24px;
      border-top: 1px solid #d0cdc2;
      font-size: 0.9rem;
      color: #5e605c;
      display: flex;
      justify-content: space-between;
    }
    footer a {
      color: #5e605c;
      text-decoration: none;
      margin-left: 12px;
    }
  </style>
</head>
<body>
  <header>
    <nav class="breadcrumbs">
      <a href="/">Home</a> / <span>Product Design Glossary</span>
    </nav>
    <h1>Product Design Glossary</h1>
    <p class="lead">A curated collection of 100 concepts, methods and technologies across UX architecture, design engineering, AI and product strategy.</p>
  </header>
  
  <section class="categories-grid">
    ${glossaryCategories.map((c) => `
      <div class="cat-card">
        <h3>${escapeHtml(c.name)}</h3>
        <p>${c.count} terms &bull; ${escapeHtml(c.primaryFocus)}</p>
      </div>
    `).join('')}
  </section>
  
  <main class="directory">
    ${Object.keys(termsByLetter).sort().map((l) => `
      <section class="letter-group" id="letter-${l}">
        <h2>${l}</h2>
        <ul class="terms-list">
          ${termsByLetter[l].map((t) => `
            <li>
              <a href="/glossary/${t.slug}.html">${escapeHtml(t.name)}</a>
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
      <a href="/glossary/">Glossary</a>
    </div>
  </footer>
</body>
</html>`;

fs.writeFileSync(path.join(glossaryDir, 'index.html'), hubHtml, 'utf-8');
console.log('Generated public/glossary/index.html');

// 2. Generate 100 term pages in public/glossary/${slug}.html
glossaryTerms.forEach((term, index) => {
  const prevTerm = index > 0 ? glossaryTerms[index - 1] : null;
  const nextTerm = index < glossaryTerms.length - 1 ? glossaryTerms[index + 1] : null;

  // Determine structured data graph
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
          "@id": `https://lexkonovalov.com/glossary/${term.slug}.html#term`,
          "name": term.name,
          "termCode": term.slug,
          "description": term.definition,
          "inDefinedTermSet": {
            "@type": "DefinedTermSet",
            "@id": "https://lexkonovalov.com/glossary/#terms",
            "name": "Product Design Glossary",
            "url": "https://lexkonovalov.com/glossary/",
            "inLanguage": "en-US",
            "isPartOf": {
              "@id": "https://lexkonovalov.com/#website"
            }
          },
          "url": `https://lexkonovalov.com/glossary/${term.slug}.html`
        },
        {
          "@type": "BreadcrumbList",
          "@id": `https://lexkonovalov.com/glossary/${term.slug}.html#breadcrumbs`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://lexkonovalov.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Product Design Glossary",
              "item": "https://lexkonovalov.com/glossary/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": term.name,
              "item": `https://lexkonovalov.com/glossary/${term.slug}.html`
            }
          ]
        }
      ]
    };
  }

  const pageTitle = term.seoTitle ? term.seoTitle : `${term.name} | Product Design Glossary — Lex Konovalov`;
  const pageDescription = term.seoDescription || term.definition;
  const canonicalUrl = term.canonicalUrl || `https://lexkonovalov.com/glossary/${term.slug}.html`;

  const termHtml = `<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(pageTitle)}</title>
  <meta name="description" content="${escapeHtml(pageDescription)}">
  <link rel="canonical" href="${canonicalUrl}" />
  <meta name="author" content="Oleksandr Konovalov">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(pageTitle)}">
  <meta property="og:description" content="${escapeHtml(pageDescription)}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:image" content="https://lexkonovalov.com/og/home.webp?v=2">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="Lex Konovalov — Portfolio">
  <meta property="og:locale" content="en_US">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(pageTitle)}">
  <meta name="twitter:description" content="${escapeHtml(pageDescription)}">
  <meta name="twitter:image" content="https://lexkonovalov.com/og/home.webp?v=2">
  
  <!-- Crawler detection redirect -->
  <script>
    const isCrawler = /bot|google|baidu|bing|yandex|crawler|spider|robot|crawling|perplexity|claude|chatgpt|anthropic|cohere|meta-external|facebookexternalhit|gptbot|bytespider|applebot/i.test(navigator.userAgent);
    if (!isCrawler) {
      window.location.replace('/?p=/glossary/${term.slug}.html');
    }
  </script>
  
  <script type="application/ld+json">
${JSON.stringify(termJsonLd, null, 2)}
  </script>
  
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #1c1b18;
      max-width: 640px;
      margin: 40px auto;
      padding: 0 24px;
      background-color: #faf9f6;
    }
    header {
      text-align: left;
      margin-bottom: 32px;
      background: transparent;
      padding: 0;
      border: none;
    }
    nav.breadcrumbs {
      font-size: 0.875rem;
      color: #5e605c;
      margin-bottom: 16px;
    }
    nav.breadcrumbs a {
      color: #5e605c;
      text-decoration: none;
    }
    h1 {
      font-size: 2.75rem;
      line-height: 1;
      letter-spacing: -0.02em;
      margin: 0 0 16px;
      font-family: "Space Grotesk", sans-serif;
    }
    .meta-bar {
      font-size: 0.875rem;
      color: #5e605c;
      font-weight: 500;
    }
    section.glossary-term-section {
      margin-top: 40px;
      margin-bottom: 40px;
    }
    h2.glossary-term-section__title {
      font-size: 1.35rem;
      margin-bottom: 16px;
      font-family: "Space Grotesk", sans-serif;
      color: #1c1b18;
    }
    p.glossary-term-section__text {
      margin: 0 0 16px;
      font-family: "Noto Serif", Georgia, serif;
      font-size: 1.1rem;
      color: #1c1b18;
      line-height: 1.7;
    }
    p.glossary-term-section__text:last-child {
      margin-bottom: 0;
    }
    p.glossary-term-section__text a,
    .glossary-term-ol a,
    .glossary-term-ul a {
      color: #3E70A2;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
    p.glossary-term-section__text a:hover,
    .glossary-term-ol a:hover,
    .glossary-term-ul a:hover {
      color: #D93636;
    }
    /* Semantic table with responsive horizontal scrolling container */
    .glossary-table-wrapper {
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin: 24px 0;
      border: 1px solid #e8e6dc;
      border-radius: 8px;
      background: #ffffff;
    }
    .glossary-table {
      width: 100%;
      min-width: 480px;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .glossary-table th {
      background: #f4f2ec;
      color: #1c1b18;
      font-weight: 600;
      padding: 12px 16px;
      border-bottom: 1px solid #e8e6dc;
      white-space: nowrap;
    }
    .glossary-table td {
      color: #1c1b18;
      padding: 12px 16px;
      border-bottom: 1px solid #e8e6dc;
      vertical-align: top;
    }
    .glossary-table tr:last-child td {
      border-bottom: none;
    }
    .glossary-table tr:hover td {
      background: #faf9f6;
    }
    /* Code Blocks and Inline Code */
    .glossary-code-block-wrapper {
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin: 24px 0;
      border: 1px solid #e8e6dc;
      border-radius: 8px;
      background: #f4f2ec;
      padding: 16px 20px;
    }
    .glossary-code-block {
      margin: 0;
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      font-size: 0.9rem;
      line-height: 1.5;
      color: #1c1b18;
      white-space: pre;
    }
    .glossary-code-block code {
      font-family: inherit;
      font-size: inherit;
      color: inherit;
      background: none;
      border: none;
      padding: 0;
    }
    .glossary-term-section__text code,
    .glossary-table td code,
    .glossary-term-ul code,
    .glossary-term-ol code {
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      font-size: 0.875em;
      background: #f4f2ec;
      border: 1px solid #e8e6dc;
      border-radius: 4px;
      padding: 2px 6px;
      color: #1c1b18;
    }
    .glossary-term-ol {
      margin: 0 0 24px;
      padding-left: 24px;
      font-family: "Noto Serif", Georgia, serif;
      font-size: 1.05rem;
      line-height: 1.7;
    }
    .glossary-term-ol li {
      margin-bottom: 12px;
    }
    .glossary-term-ul {
      list-style: none;
      padding: 0;
      margin: 0 0 24px;
    }
    .glossary-term-ul li {
      margin-bottom: 10px;
      display: flex;
      align-items: baseline;
      gap: 8px;
      font-family: "Noto Serif", Georgia, serif;
      font-size: 1.05rem;
    }
    .glossary-term-ul li::before {
      content: "•";
      color: #3E70A2;
      font-weight: bold;
    }
    .concept-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .concept-tag {
      background: #f4f2ec;
      border: 1px solid #e8e6dc;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 0.9rem;
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
    .glossary-term-nav {
      margin-top: 64px;
      padding-top: 64px;
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
      height: 52px;
      padding: 0 24px;
      background: #ffffff;
      border: 1px solid #e8e6dc;
      border-radius: 9999px;
      color: #1c1b18;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all 0.15s ease;
      box-sizing: border-box;
    }
    .glossary-term-nav__btn:hover {
      background: #f4f2ec;
      color: #D93636;
      border-color: #d0cdc2;
    }
    .glossary-term-nav__pill-group {
      display: inline-flex;
      align-items: center;
      height: 52px;
      background: #ffffff;
      border: 1px solid #e8e6dc;
      border-radius: 9999px;
      padding: 0 8px;
      box-sizing: border-box;
    }
    .glossary-term-nav__item {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      height: 100%;
      padding: 0 16px;
      color: #1c1b18;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      border-radius: 9999px;
      transition: color 0.15s ease;
    }
    .glossary-term-nav__item:hover:not(.glossary-term-nav__item--disabled) {
      color: #D93636;
    }
    .glossary-term-nav__item--disabled {
      color: #a09e97;
      opacity: 0.35;
      cursor: not-allowed;
      pointer-events: none;
    }
    .glossary-term-nav__divider {
      width: 1px;
      height: 20px;
      background-color: #e8e6dc;
      flex-shrink: 0;
    }
    @media (max-width: 600px) {
      .glossary-term-nav {
        flex-direction: column;
        align-items: stretch;
      }
      .glossary-term-nav__btn {
        justify-content: center;
        width: 100%;
      }
      .glossary-term-nav__pill-group {
        width: 100%;
        justify-content: space-between;
      }
      .glossary-term-nav__item {
        flex: 1;
        justify-content: center;
      }
    }
  </style>
</head>
<body>
  <header>
    <nav class="breadcrumbs">
      <a href="/">Home</a> / <a href="/glossary/">Product Design Glossary</a> / <span>${escapeHtml(term.name)}</span>
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
        <h2 class="glossary-term-section__title">Definition</h2>
        <p class="glossary-term-section__text">${escapeHtml(term.definition)}</p>
      </section>

      <section class="glossary-term-section">
        <h2 class="glossary-term-section__title">Purpose</h2>
        <p class="glossary-term-section__text">${escapeHtml(term.purpose)}</p>
      </section>

      ${term.keyConcepts && term.keyConcepts.length > 0 ? `
      <section class="glossary-term-section">
        <h2 class="glossary-term-section__title">Key Concepts</h2>
        <div class="concept-tags">
          ${term.keyConcepts.map(c => `<span class="concept-tag">${escapeHtml(c)}</span>`).join('')}
        </div>
      </section>
      ` : ''}

      <section class="glossary-term-section">
        <h2 class="glossary-term-section__title">How It Works</h2>
        <p class="glossary-term-section__text">${escapeHtml(term.howItWorks)}</p>
      </section>

      ${term.relatedTerms && term.relatedTerms.length > 0 ? `
      <section class="glossary-term-section">
        <h2 class="glossary-term-section__title">Related Terms</h2>
        <ul class="glossary-term-ul">
          ${term.relatedTerms.map(r => {
            const matched = glossaryTerms.find(t => 
              t.name.toLowerCase() === r.toLowerCase() ||
              t.slug === r.toLowerCase().replace(/[^a-z0-9]+/g, '-')
            );
            if (matched) {
              return `<li><a href="/glossary/${matched.slug}.html">${escapeHtml(matched.name)}</a></li>`;
            }
            return `<li><span>${escapeHtml(r)}</span></li>`;
          }).join('')}
        </ul>
      </section>
      ` : ''}

      ${term.sources && term.sources.length > 0 ? `
      <section class="glossary-term-section">
        <h2 class="glossary-term-section__title">Sources</h2>
        <ul class="glossary-term-ul">
          ${term.sources.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
        </ul>
      </section>
      ` : ''}
    `}

    <nav class="glossary-term-nav" aria-label="Glossary Navigation">
      <a href="/glossary/" class="glossary-term-nav__btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        <span>Back to Glossary</span>
      </a>
      <div class="glossary-term-nav__pill-group">
        ${prevTerm ? `
          <a href="/glossary/${prevTerm.slug}.html" class="glossary-term-nav__item" title="${escapeHtml(prevTerm.name)}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            <span>Previous</span>
          </a>
        ` : `
          <span class="glossary-term-nav__item glossary-term-nav__item--disabled" aria-disabled="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            <span>Previous</span>
          </span>
        `}
        <span class="glossary-term-nav__divider" aria-hidden="true"></span>
        ${nextTerm ? `
          <a href="/glossary/${nextTerm.slug}.html" class="glossary-term-nav__item" title="${escapeHtml(nextTerm.name)}">
            <span>Next</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        ` : `
          <span class="glossary-term-nav__item glossary-term-nav__item--disabled" aria-disabled="true">
            <span>Next</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </span>
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
      <a href="/glossary/">Glossary</a>
    </div>
  </footer>
</body>
</html>`;

  fs.writeFileSync(path.join(glossaryDir, `${term.slug}.html`), termHtml, 'utf-8');
});

console.log(`Generated all ${glossaryTerms.length} static term pages in public/glossary/!`);

// 3. Generate clean, deduplicated public/sitemap.xml
const sitemapPath = path.join(publicDir, 'sitemap.xml');

// Base non-glossary pages
const basePages = [
  { loc: 'https://lexkonovalov.com/', lastmod: '2026-09-11', changefreq: 'monthly', priority: '1.0' },
  { loc: 'https://lexkonovalov.com/about/', lastmod: '2026-09-11', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://lexkonovalov.com/cases/how-ooux-reduced-error-rates-in-traveltech.html', lastmod: '2026-09-11', changefreq: 'monthly', priority: '0.7' },
  { loc: 'https://lexkonovalov.com/cases/how-to-achieve-30-percent-conversion-lift-in-b2c.html', lastmod: '2026-09-11', changefreq: 'monthly', priority: '0.7' },
  { loc: 'https://lexkonovalov.com/cases/how-ai-ready-modular-system-fixed-luxury-travel-identity-crisis.html', lastmod: '2026-09-11', changefreq: 'monthly', priority: '0.7' },
  { loc: 'https://lexkonovalov.com/daily-thing/designing-my-first-newsletter-form-after-10-years-in-ux.html', lastmod: '2026-09-11', changefreq: 'monthly', priority: '0.6' },
  { loc: 'https://lexkonovalov.com/daily-thing/how-ai-augmented-prototyping-cut-b2b-design-time-by-90.html', lastmod: '2026-09-11', changefreq: 'monthly', priority: '0.6' }
];

let sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Add base pages
for (const p of basePages) {
  sitemapXml += `  <url>\n    <loc>${p.loc}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>\n`;
}

// Add glossary hub
sitemapXml += `  <url>\n    <loc>https://lexkonovalov.com/glossary/</loc>\n    <lastmod>2026-11-13</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;

// Add 100 glossary terms
glossaryTerms.forEach((term) => {
  let lastmod = '2026-11-07';
  if (['conversion-rate-optimization-cro', 'ai-native-design', 'design-tokens', 'enterprise-information-architecture', 'conceptual-schema', 'growth-design', 'product-led-growth-plg', 'accessibility-wcag'].includes(term.slug)) {
    lastmod = '2026-11-13';
  } else if (term.slug === 'orca-framework' || term.slug === 'object-oriented-ux') {
    lastmod = '2026-11-12';
  }
  sitemapXml += `  <url>\n    <loc>https://lexkonovalov.com/glossary/${term.slug}.html</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
});

sitemapXml += '</urlset>\n';
fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
console.log('Regenerated public/sitemap.xml with 108 unique URLs!');
