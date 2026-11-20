---
url: "https://lexkonovalov.com/glossary/affordance-layering.html"
title: "Affordance Layering: Meaning and a Practical UX Example"
description: "Understand affordance layering in product design: make core actions discoverable, reveal useful secondary controls, and support keyboard and touch use."
canonical: "https://lexkonovalov.com/glossary/affordance-layering.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Affordance Layering: Meaning and a Practical UX Example", "og:description": "Understand affordance layering in product design: make core actions discoverable, reveal useful secondary controls, and support keyboard and touch use.", "og:url": "https://lexkonovalov.com/glossary/affordance-layering.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use affordance-layering as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/affordance-layering.html#webpage",
        "url": "https://lexkonovalov.com/glossary/affordance-layering.html",
        "name": "Affordance Layering: Meaning and a Practical UX Example",
        "description": "Understand affordance layering in product design: make core actions discoverable, reveal useful secondary controls, and support keyboard and touch use.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/affordance-layering.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/affordance-layering.html#breadcrumbs"
        },
        "citation": [
          "https://jnd.org/signifiers-not-affordances/",
          "https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/affordance-layering.html#term",
        "name": "Affordance Layering",
        "termCode": "affordance-layering",
        "description": "Affordance layering is a descriptive design term for making actions available at different levels of visibility and context. Primary actions remain easy to find, while secondary controls appear when they become relevant.",
        "url": "https://lexkonovalov.com/glossary/affordance-layering.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/affordance-layering.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/affordance-layering.html#breadcrumbs",
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
            "name": "Affordance Layering",
            "item": "https://lexkonovalov.com/glossary/affordance-layering.html"
          }
        ]
      }
    ]
  }
---

# Affordance Layering

Affordance layering is a descriptive design term for making actions available at different levels of visibility and context. Primary actions remain easy to find, while secondary controls appear when they become relevant.

The terminology needs care. An affordance concerns what a person can do with something; a signifier communicates how or where to act. Much of what designers call affordance layering involves arranging signifiers and progressively revealing controls.

It is useful as a design description, without assuming a universal framework or prescribed number of layers.

## Example: an operations table

A booking table shows each reservation's status and an obvious way to open its details. Selecting rows reveals a bulk-action toolbar with the selection count. An overflow menu contains less frequent actions such as exporting a record.

Each layer answers a different question: what can I inspect, what can I do with these selected records, and what else is available?

Keep the main task discoverable before selection. Label the selection scope, especially when a table has multiple pages. Explain unavailable actions when the reason helps the user proceed.

## Accessibility and usability checks

Every required action needs a usable path for keyboard and touch users. A control that appears only on pointer hover can leave people unable to find or operate it.

For additional content triggered by hover or focus, check WCAG's conditions for dismissal, hoverability, and persistence where they apply. Also test focus visibility, accessible names, and dismissal behavior.

Use task observation to decide which controls deserve immediate visibility. Hiding an action saves space only if users can still discover it when needed.

## Related terms

- [Progressive Disclosure](/glossary/progressive-disclosure.html)
- [Operational UX](/glossary/operational-ux.html)
- [Interaction Invariant](/glossary/interaction-invariant.html)

## Sources

- [Don Norman: Signifiers, Not Affordances](https://jnd.org/signifiers-not-affordances/)
- [W3C: Understanding Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)
