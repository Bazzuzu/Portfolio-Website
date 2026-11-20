---
url: "https://lexkonovalov.com/glossary/design-engineering.html"
title: "Design Engineering: What Design Engineers Do | Product Design Glossary"
description: "Learn what design engineering is and how design engineers use browser prototypes, production components, and design system tooling to shape interfaces."
canonical: "https://lexkonovalov.com/glossary/design-engineering.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Design Engineering: What Design Engineers Do | Product Design Glossary", "og:description": "Learn what design engineering is and how design engineers use browser prototypes, production components, and design system tooling to shape interfaces.", "og:url": "https://lexkonovalov.com/glossary/design-engineering.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use design-engineering as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-engineering.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-engineering.html",
        "name": "Design Engineering: What Design Engineers Do | Product Design Glossary",
        "description": "Learn what design engineering is and how design engineers use browser prototypes, production components, and design system tooling to shape interfaces.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-engineering.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-engineering.html#breadcrumbs"
        },
        "citation": [
          "https://vercel.com/blog/design-engineering-at-vercel",
          "https://vercel.com/design/engineer"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-engineering.html#term",
        "name": "Design Engineering",
        "termCode": "design-engineering",
        "description": "Design engineering is the practice of designing and building user interfaces through both interaction design and front-end development. It uses code to explore how an interface behaves and to carry design decisions into production.",
        "url": "https://lexkonovalov.com/glossary/design-engineering.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-engineering.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/design-engineering.html#breadcrumbs",
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
            "name": "Design Engineering",
            "item": "https://lexkonovalov.com/glossary/design-engineering.html"
          }
        ]
      }
    ]
  }
---

# Design Engineering

Design engineering is the practice of designing and building user interfaces through both interaction design and front-end development. It uses code to explore how an interface behaves and to carry design decisions into production.

## What does a design engineer do?

A design engineer might prototype a complex interaction in the browser, implement a production component, or improve the tools that connect design and code. Typical decisions include how an interaction adapts to smaller screens, what belongs in a shared component, and which states should be tested.

Responsibilities vary by team. Some design engineers work inside product teams and ship features. Others maintain shared components or build tooling that helps multiple teams work with a design system.

## Example: Designing a booking-change dialog in the browser

The team needs a dialog that can display a short confirmation or a long list of fare rules. A design engineer builds a working version, tests the content at narrow widths, and checks how keyboard focus moves. They find that the long list needs a scrollable content region with reachable actions. They document that behavior and implement it in the shared Dialog so other teams can reuse it.

## How does it relate to a design-to-code workflow?

Design engineering describes the practice and the skills people bring to it. A design-to-code workflow describes how a team moves a design into a working product, including component mapping, implementation, and review.

## Related terms

- [Design-to-Code Workflow](/glossary/design-to-code-workflow.html)
- [Design Tokens](/glossary/design-tokens.html)
- [Component Architecture](/glossary/component-architecture.html)
- [DesignOps](/glossary/designops.html)

## Sources

- [Design Engineering at Vercel, Vercel](https://vercel.com/blog/design-engineering-at-vercel)
- [Design Engineer Principles, Vercel](https://vercel.com/design/engineer)
