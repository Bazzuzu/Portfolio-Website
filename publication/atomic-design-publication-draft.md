---
url: "https://lexkonovalov.com/glossary/atomic-design.html"
title: "Atomic Design: Atoms, Molecules, Organisms, and Pages"
description: "Understand Brad Frost’s five-stage Atomic Design method, with a flight-search example showing how reusable elements become real interface states."
canonical: "https://lexkonovalov.com/glossary/atomic-design.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Atomic Design: Atoms, Molecules, Organisms, and Pages", "og:description": "Understand Brad Frost’s five-stage Atomic Design method, with a flight-search example showing how reusable elements become real interface states.", "og:url": "https://lexkonovalov.com/glossary/atomic-design.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use atomic-design as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/atomic-design.html#webpage",
        "url": "https://lexkonovalov.com/glossary/atomic-design.html",
        "name": "Atomic Design: Atoms, Molecules, Organisms, and Pages",
        "description": "Understand Brad Frost’s five-stage Atomic Design method, with a flight-search example showing how reusable elements become real interface states.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/atomic-design.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/atomic-design.html#breadcrumbs"
        },
        "citation": [
          "https://atomicdesign.bradfrost.com/chapter-2/",
          "https://atomicdesign.bradfrost.com/chapter-3/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/atomic-design.html#term",
        "name": "Atomic Design",
        "termCode": "atomic-design",
        "description": "Atomic Design is Brad Frost’s method for thinking about interfaces through five connected stages: atoms, molecules, organisms, templates, and pages. It helps teams work with reusable pieces while checking how those pieces behave in a complete interface.",
        "url": "https://lexkonovalov.com/glossary/atomic-design.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/atomic-design.html#webpage"
        }
      },
      {
        "@type": "DefinedTermSet",
        "@id": "https://lexkonovalov.com/glossary/#terms",
        "name": "Product Design Glossary",
        "url": "https://lexkonovalov.com/glossary/",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://lexkonovalov.com/glossary/atomic-design.html#breadcrumbs",
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
            "name": "Atomic Design",
            "item": "https://lexkonovalov.com/glossary/atomic-design.html"
          }
        ]
      }
    ]
  }
---

# Atomic Design

Atomic Design is Brad Frost’s method for thinking about interfaces through five connected stages: atoms, molecules, organisms, templates, and pages. It helps teams work with reusable pieces while checking how those pieces behave in a complete interface.

## What do the five stages mean?

| Stage | Flight-search example |
|---|---|
| Atoms | A label, input, and button. |
| Molecules | A labeled destination field with supporting text. |
| Organisms | A search form combining route, dates, travelers, and actions. |
| Templates | The structural arrangement of search, results, and supporting content. |
| Pages | That arrangement populated with actual content and states. |

The stages support thinking across levels of detail. Teams can move between the search form and a populated results page as they learn what the interface requires.

## How does Atomic Design help in practice?

A team can reuse a destination field while examining how it fits inside different search forms. The populated page exposes constraints that isolated components may miss, such as long airport names, a missing date, or an empty result set.

Use the method alongside component APIs, accessibility requirements, tokens, and maintenance decisions. Define names and boundaries that your team can understand, and review real product states before deciding that a reusable piece is complete.

## Related terms

- [Component Architecture](/glossary/component-architecture.html)
- [Design Primitives](/glossary/design-primitives.html)
- [Component Libraries](/glossary/component-libraries.html)
- [Design System](/glossary/design-system.html)

## Sources

- [Atomic Design Methodology, Brad Frost](https://atomicdesign.bradfrost.com/chapter-2/)
- [Tools of the Trade, Brad Frost](https://atomicdesign.bradfrost.com/chapter-3/)
