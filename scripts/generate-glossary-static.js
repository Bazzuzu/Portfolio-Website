import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glossaryCategories, glossaryTerms } from '../src/data/glossaryData.ts';

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
      "name": "Architectural Product Design Knowledge System: A Canonical Glossary and Structural Ontology",
      "description": "A canonical 100-term taxonomy covering UX & Product Architecture, Design Systems & Engineering, AI & Agentic Systems, and Product Strategy & Growth.",
      "url": "https://lexkonovalov.com/glossary/",
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
          "name": "Glossary",
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
<html lang="en">
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
  <meta property="og:image" content="https://lexkonovalov.com/og/home.webp">
  <meta property="og:site_name" content="Lex Konovalov — Portfolio">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Product Design Glossary | Lex Konovalov">
  <meta name="twitter:description" content="100 canonical entries bridging conceptual UX models with programmatic execution and generative engine optimization.">
  <meta name="twitter:image" content="https://lexkonovalov.com/og/home.webp">
  
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
      padding: 16px 20px;
    }
    .cat-card h3 {
      margin: 0 0 8px;
      font-size: 1.1rem;
    }
    .cat-card p {
      margin: 0;
      color: #5e605c;
      font-size: 0.9rem;
    }
    .directory {
      column-count: 3;
      column-gap: 32px;
    }
    @media (max-width: 768px) {
      .directory { column-count: 1; }
    }
    .letter-group {
      break-inside: avoid;
      margin-bottom: 32px;
    }
    .letter-group h2 {
      font-size: 1.5rem;
      border-bottom: 1px solid #d0cdc2;
      padding-bottom: 4px;
      margin-bottom: 12px;
    }
    .terms-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .terms-list li {
      margin-bottom: 8px;
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
    <p><a href="/">Lex Konovalov</a> / Glossary</p>
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
glossaryTerms.forEach((term) => {
  const termJsonLd = {
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
          "name": "Architectural Product Design Knowledge System: A Canonical Glossary and Structural Ontology",
          "url": "https://lexkonovalov.com/glossary/"
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
            "name": "Glossary",
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

  const termHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(term.seoTitle || `${term.name} | Product Design Glossary — Lex Konovalov`)}</title>
  <meta name="description" content="${escapeHtml(term.definition.slice(0, 160))}">
  <link rel="canonical" href="https://lexkonovalov.com/glossary/${term.slug}.html" />
  <meta name="author" content="Oleksandr Konovalov">
  
  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(term.seoTitle || term.name)}">
  <meta property="og:description" content="${escapeHtml(term.definition.slice(0, 200))}">
  <meta property="og:url" content="https://lexkonovalov.com/glossary/${term.slug}.html">
  <meta property="og:image" content="https://lexkonovalov.com/og/home.webp">
  <meta property="og:site_name" content="Lex Konovalov — Portfolio">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${escapeHtml(term.seoTitle || term.name)}">
  <meta name="twitter:description" content="${escapeHtml(term.definition.slice(0, 200))}">
  <meta name="twitter:image" content="https://lexkonovalov.com/og/home.webp">
  
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
      max-width: 720px;
      margin: 40px auto;
      padding: 0 24px;
      background-color: #faf9f6;
    }
    header {
      text-align: center;
      margin-bottom: 40px;
      background: #f4f2ec;
      padding: 40px 20px;
      border-radius: 12px;
      border: 1px solid #e8e6dc;
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
      font-size: 2.25rem;
      margin: 0 0 12px;
      font-family: "Space Grotesk", sans-serif;
    }
    .meta-bar {
      font-size: 0.875rem;
      color: #5e605c;
    }
    .badge {
      display: inline-block;
      padding: 2px 8px;
      background: #e8e6e0;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 500;
      margin-left: 6px;
    }
    section {
      margin-bottom: 32px;
    }
    h2 {
      font-size: 1.35rem;
      margin-bottom: 8px;
      font-family: "Space Grotesk", sans-serif;
    }
    p {
      margin: 0 0 16px;
      font-family: "Noto Serif", Georgia, serif;
      font-size: 1.1rem;
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
    ul.related-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    ul.related-list li {
      margin-bottom: 8px;
    }
    ul.related-list a {
      color: #3E70A2;
      text-decoration: underline;
    }
    ol.sources-list {
      padding-left: 20px;
      color: #5e605c;
      font-size: 0.95rem;
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
    .back-nav {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #e8e6dc;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .back-btn {
      display: inline-flex;
      align-items: center;
      padding: 8px 16px;
      background: #ffffff;
      border: 1px solid #d0cdc2;
      border-radius: 9999px;
      color: #1c1b18;
      text-decoration: none;
      font-size: 0.875rem;
    }
  </style>
</head>
<body>
  <header>
    <nav class="breadcrumbs">
      <a href="/">lexkonovalov</a> / <a href="/glossary/">glossary</a>
    </nav>
    <h1>${escapeHtml(term.name)}</h1>
    <div class="meta-bar">
      <span>${escapeHtml(term.category)}</span>
      ${term.secondaryCategory ? `&bull; <span>${escapeHtml(term.secondaryCategory)}</span>` : ''}
      <span class="badge">${escapeHtml(term.maturity)}</span>
    </div>
  </header>

  <article>
    <section>
      <h2>Definition</h2>
      <p>${escapeHtml(term.definition)}</p>
    </section>

    <section>
      <h2>Purpose</h2>
      <p>${escapeHtml(term.purpose)}</p>
    </section>

    ${term.keyConcepts && term.keyConcepts.length > 0 ? `
    <section>
      <h2>Key Concepts</h2>
      <div class="concept-tags">
        ${term.keyConcepts.map(c => `<span class="concept-tag">${escapeHtml(c)}</span>`).join('')}
      </div>
    </section>
    ` : ''}

    <section>
      <h2>How It Works</h2>
      <p>${escapeHtml(term.howItWorks)}</p>
    </section>

    ${term.relatedTerms && term.relatedTerms.length > 0 ? `
    <section>
      <h2>Related Terms</h2>
      <ul class="related-list">
        ${term.relatedTerms.map(r => {
          const matched = glossaryTerms.find(t => 
            t.name.toLowerCase() === r.toLowerCase() ||
            t.slug === r.toLowerCase().replace(/[^a-z0-9]+/g, '-')
          );
          if (matched) {
            return `<li>&bull; <a href="/glossary/${matched.slug}.html">${escapeHtml(matched.name)}</a></li>`;
          }
          return `<li>&bull; <span>${escapeHtml(r)}</span></li>`;
        }).join('')}
      </ul>
    </section>
    ` : ''}

    ${term.sources && term.sources.length > 0 ? `
    <section>
      <h2>Sources</h2>
      <ol class="sources-list">
        ${term.sources.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
      </ol>
    </section>
    ` : ''}

    <div class="back-nav">
      <a href="/glossary/" class="back-btn">&larr; Back to Glossary</a>
    </div>
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

// 3. Update public/sitemap.xml
const sitemapPath = path.join(publicDir, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

// Check if glossary already exists in sitemap
if (!sitemapContent.includes('<loc>https://lexkonovalov.com/glossary/</loc>')) {
  let glossaryUrlsXml = `  <url>\n    <loc>https://lexkonovalov.com/glossary/</loc>\n    <lastmod>2026-11-07</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;

  glossaryTerms.forEach((term) => {
    glossaryUrlsXml += `  <url>\n    <loc>https://lexkonovalov.com/glossary/${term.slug}.html</loc>\n    <lastmod>2026-11-07</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  });

  sitemapContent = sitemapContent.replace('</urlset>', `${glossaryUrlsXml}</urlset>`);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');
  console.log('Updated public/sitemap.xml with glossary hub and all 100 term URLs!');
}
