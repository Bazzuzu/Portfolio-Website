---
url: "https://lexkonovalov.com/glossary/breadcrumb-hierarchy.html"
title: "Breadcrumb Hierarchy: Location, Navigation, and Markup"
description: "Learn how breadcrumbs show a page’s place in a hierarchy, with a booking example and guidance for visible navigation and BreadcrumbList markup."
canonical: "https://lexkonovalov.com/glossary/breadcrumb-hierarchy.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Breadcrumb Hierarchy: Location, Navigation, and Markup", "og:description": "Learn how breadcrumbs show a page’s place in a hierarchy, with a booking example and guidance for visible navigation and BreadcrumbList markup.", "og:url": "https://lexkonovalov.com/glossary/breadcrumb-hierarchy.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use breadcrumb-hierarchy as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/breadcrumb-hierarchy.html#webpage",
        "url": "https://lexkonovalov.com/glossary/breadcrumb-hierarchy.html",
        "name": "Breadcrumb Hierarchy: Location, Navigation, and Markup",
        "description": "Learn how breadcrumbs show a page’s place in a hierarchy, with a booking example and guidance for visible navigation and BreadcrumbList markup.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/breadcrumb-hierarchy.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/breadcrumb-hierarchy.html#breadcrumbs"
        },
        "citation": [
          "https://design-system.service.gov.uk/components/breadcrumbs/",
          "https://developers.google.com/search/docs/appearance/structured-data/breadcrumb"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/breadcrumb-hierarchy.html#term",
        "name": "Breadcrumb Hierarchy",
        "termCode": "breadcrumb-hierarchy",
        "description": "A breadcrumb hierarchy shows where a page belongs within a website or product’s structure. A visible breadcrumb trail links to parent locations so users can move up the hierarchy and understand the context of a deep page.",
        "url": "https://lexkonovalov.com/glossary/breadcrumb-hierarchy.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/breadcrumb-hierarchy.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/breadcrumb-hierarchy.html#breadcrumbs",
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
            "name": "Breadcrumb Hierarchy",
            "item": "https://lexkonovalov.com/glossary/breadcrumb-hierarchy.html"
          }
        ]
      }
    ]
  }
---

# Breadcrumb Hierarchy

A breadcrumb hierarchy shows where a page belongs within a website or product’s structure. A visible breadcrumb trail links to parent locations so users can move up the hierarchy and understand the context of a deep page.

## Example: An invoice inside a booking

An invoice page may sit under Bookings, then Booking #1042, then Invoices. The page heading identifies the current invoice, and the breadcrumb offers links to its parent locations.

Someone arriving from search or a notification can understand which booking contains the document. A separate return-to-results action can restore a previously filtered booking list when that task context is available.

## How should you design the trail?

Choose a meaningful parent structure and use labels people recognize. Keep the trail consistent with the information architecture, including when a record can be found through several routes. Test the layout on narrow screens and ensure links have understandable accessible names.

For a linear process such as checkout, describe progress with the process’s steps. A breadcrumb answers a question about structural location.

## How does breadcrumb markup relate to navigation?

Schema.org BreadcrumbList can describe the hierarchy in structured data. Its labels and destinations should agree with the visible navigation and the page’s actual place. Google documents the required properties and testing process for its breadcrumb feature. Validate the generated page and review the visible trail as part of the same publishing check.

## Related terms

- [Information Architecture (IA)](/glossary/information-architecture.html)
- [Structural Navigation Model](/glossary/structural-navigation-model.html)
- [Wayfinding System](/glossary/wayfinding-system.html)

## Sources

- [Breadcrumbs, GOV.UK Design System](https://design-system.service.gov.uk/components/breadcrumbs/)
- [Breadcrumb Structured Data, Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
