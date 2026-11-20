---
url: "https://lexkonovalov.com/glossary/polyhierarchy.html"
title: "Polyhierarchy: Definition, Navigation Example, and Tradeoffs"
description: "Learn how polyhierarchy gives a concept multiple broader categories, how it differs from facets, and how to keep navigation and URLs consistent."
canonical: "https://lexkonovalov.com/glossary/polyhierarchy.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Polyhierarchy: Definition, Navigation Example, and Tradeoffs", "og:description": "Learn how polyhierarchy gives a concept multiple broader categories, how it differs from facets, and how to keep navigation and URLs consistent.", "og:url": "https://lexkonovalov.com/glossary/polyhierarchy.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, Product Strategy & Growth and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use polyhierarchy as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/polyhierarchy.html#webpage",
        "url": "https://lexkonovalov.com/glossary/polyhierarchy.html",
        "name": "Polyhierarchy: Definition, Navigation Example, and Tradeoffs",
        "description": "Learn how polyhierarchy gives a concept multiple broader categories, how it differs from facets, and how to keep navigation and URLs consistent.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/polyhierarchy.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/polyhierarchy.html#breadcrumbs"
        },
        "citation": [
          "https://www.w3.org/TR/skos-primer/",
          "https://www.w3.org/TR/skos-reference/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/polyhierarchy.html#term",
        "name": "Polyhierarchy",
        "termCode": "polyhierarchy",
        "description": "A polyhierarchy is a hierarchical classification structure in which a concept can have more than one immediate broader concept. It lets people reach the same concept through different valid category paths.",
        "url": "https://lexkonovalov.com/glossary/polyhierarchy.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/polyhierarchy.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/polyhierarchy.html#breadcrumbs",
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
            "name": "Polyhierarchy",
            "item": "https://lexkonovalov.com/glossary/polyhierarchy.html"
          }
        ]
      }
    ]
  }
---

# Polyhierarchy

A polyhierarchy is a hierarchical classification structure in which a concept can have more than one immediate broader concept. It lets people reach the same concept through different valid category paths.

For example, “Design tokens” could appear under both “Design systems” and “Design engineering.” Both paths lead to the same glossary entry. The entry does not need to be copied to support multiple placements.

SKOS permits multiple broader relationships, making it one way to represent this structure.

## Polyhierarchy and faceted classification

Polyhierarchy organizes broader and narrower concepts. Faceted classification describes items through separate dimensions.

In a resource library, a guide might be placed under both “Accessibility” and “Design systems.” Its facets might separately describe format, reading level, and publication date.

These approaches can work together. The distinction helps teams decide whether an additional placement expresses a category relationship or whether the attribute belongs in a filter.

## Example: two routes to one resource

A component documentation page could be reachable through “Components → Form controls → Date picker” and “Patterns → Booking → Date picker.”

In this example, the product keeps a single documentation record and stable URL. It can show a breadcrumb appropriate to the selected navigation context, with a clear route back to the relevant section.

## What to check

Use labels people understand, document the reason for each placement, and test whether users can find the resource through expected paths.

Avoid cycles that make a concept its own ancestor. If category paths generate different URLs for the same content, handle canonicalization deliberately. Multiple navigation placements do not require multiple indexable copies of a page.

## Related terms

- [Information Architecture (IA)](/glossary/information-architecture.html)
- [Faceted Classification](/glossary/faceted-classification.html)
- [Core Model](/glossary/core-model.html)
- [Controlled Vocabulary](/glossary/controlled-vocabulary.html)

## Sources

- [W3C: SKOS Primer — Semantic Relationships](https://www.w3.org/TR/skos-primer/)
- [W3C: SKOS Reference — Semantic Relations](https://www.w3.org/TR/skos-reference/)
