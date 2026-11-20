---
url: "https://lexkonovalov.com/glossary/faceted-classification.html"
title: "Faceted Classification: Categories, Filters, and Examples"
description: "Learn how facets classify items along several dimensions, with a flight-search example and checks for filter logic and result counts."
canonical: "https://lexkonovalov.com/glossary/faceted-classification.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Faceted Classification: Categories, Filters, and Examples", "og:description": "Learn how facets classify items along several dimensions, with a flight-search example and checks for filter logic and result counts.", "og:url": "https://lexkonovalov.com/glossary/faceted-classification.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, Product Strategy & Growth and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use faceted-classification as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/faceted-classification.html#webpage",
        "url": "https://lexkonovalov.com/glossary/faceted-classification.html",
        "name": "Faceted Classification: Categories, Filters, and Examples",
        "description": "Learn how facets classify items along several dimensions, with a flight-search example and checks for filter logic and result counts.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/faceted-classification.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/faceted-classification.html#breadcrumbs"
        },
        "citation": [
          "https://www.nngroup.com/articles/filters-vs-facets/",
          "https://www.algolia.com/doc/guides/managing-results/refine-results/faceting"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/faceted-classification.html#term",
        "name": "Faceted Classification",
        "termCode": "faceted-classification",
        "description": "Faceted classification organizes items by several dimensions, called facets, that users can combine when finding information. A travel product might classify flights by airline, number of stops, departure time, and cabin.",
        "url": "https://lexkonovalov.com/glossary/faceted-classification.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/faceted-classification.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/faceted-classification.html#breadcrumbs",
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
            "name": "Faceted Classification",
            "item": "https://lexkonovalov.com/glossary/faceted-classification.html"
          }
        ]
      }
    ]
  }
---

# Faceted Classification

Faceted classification organizes items by several dimensions, called facets, that users can combine when finding information. A travel product might classify flights by airline, number of stops, departure time, and cabin.

## How do facets work?

Each item has values for the facets relevant to it. Faceted navigation exposes those values as filters. The product must define how selections combine and how counts change as the result set narrows.

## Example: Narrowing flight results

A traveler selects Nonstop, Morning departure, and either Airline A or Airline B. In this example, the system combines different facets with AND and the two airlines with OR. Results must satisfy all three dimensions while matching either selected airline.

Show selected filters, make them removable, and update counts consistently with the chosen logic. If no flights match, identify the active constraints and provide a way to relax them. The exact combination rules should follow the product’s data and users’ expectations.

## What should teams model and test?

Use research to choose dimensions people actually use to decide. Define consistent values and handling for missing data. Avoid presenting two labels for the same cabin category unless the distinction matters.

Test a realistic search from a broad result set to a suitable option. Check whether users understand the labels, selected states, counts, and effect of clearing a filter. Faceted classification depends on maintained metadata as well as a usable filter interface.

## Related terms

- [Information Architecture (IA)](/glossary/information-architecture.html)
- [Polyhierarchy](/glossary/polyhierarchy.html)
- [Content Modeling](/glossary/content-modeling.html)

## Sources

- [Filters vs. Facets, Nielsen Norman Group](https://www.nngroup.com/articles/filters-vs-facets/)
- [Faceting, Algolia](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting)
