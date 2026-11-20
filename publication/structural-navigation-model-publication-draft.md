---
url: "https://lexkonovalov.com/glossary/structural-navigation-model.html"
title: "Structural Navigation Model | Product Design Glossary"
description: "Learn how a structural navigation model organizes menus and paths. See how object relationships add contextual links in a travel operations tool."
canonical: "https://lexkonovalov.com/glossary/structural-navigation-model.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Structural Navigation Model | Product Design Glossary", "og:description": "Learn how a structural navigation model organizes menus and paths. See how object relationships add contextual links in a travel operations tool.", "og:url": "https://lexkonovalov.com/glossary/structural-navigation-model.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use structural-navigation-model as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all 4 related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/structural-navigation-model.html#webpage",
        "url": "https://lexkonovalov.com/glossary/structural-navigation-model.html",
        "name": "Structural Navigation Model | Product Design Glossary",
        "description": "Learn how a structural navigation model organizes menus and paths. See how object relationships add contextual links in a travel operations tool.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/structural-navigation-model.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/structural-navigation-model.html#breadcrumbs"
        },
        "citation": [
          "https://www.oreilly.com/library/view/designing-web-navigation/9780596528102/ch04s03.html",
          "https://alistapart.com/article/object-oriented-ux/",
          "https://www.nngroup.com/articles/tree-testing/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/structural-navigation-model.html#term",
        "name": "Structural Navigation Model",
        "termCode": "structural-navigation-model",
        "description": "A structural navigation model describes the main and local paths people use to move through a product's information architecture. It shows how sections and views are organized, what users can reach from each level, and how they can move back to a broader view.",
        "url": "https://lexkonovalov.com/glossary/structural-navigation-model.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/structural-navigation-model.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/structural-navigation-model.html#breadcrumbs",
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
            "name": "Structural Navigation Model",
            "item": "https://lexkonovalov.com/glossary/structural-navigation-model.html"
          }
        ]
      }
    ]
  }
---

# Structural Navigation Model

A structural navigation model describes the main and local paths people use to move through a product's information architecture. It shows how sections and views are organized, what users can reach from each level, and how they can move back to a broader view.

## How does structural navigation differ from contextual navigation?

Structural navigation follows the product's organization. For example, **Trips → Trip details → Bookings** follows a section down to a local view. Contextual navigation connects related information where a user needs it. A link from a trip's traveler list to a Traveler record is a contextual route that can cross sections.

Keep a record’s name and identifying details consistent across entry points. An agent who arrives from search should recognize the same booking they see on a trip.

## Navigation example for a travel operations tool

| Route | Design decision |
|---|---|
| Main menu → Trips → Trip details | Trips gives agents a stable starting point for work organized around trips. |
| Trip details → Bookings | Local navigation keeps a trip's bookings within reach while the agent reviews that trip. |
| Trip details → Traveler record | A contextual link lets the agent inspect a related traveler and their other trips. |
| Search → Booking details | A direct entry should show the booking's identity and link to its trip when the user has access. |

The [object map](/glossary/object-mapping.html) explains which records are related. Use the navigation model to choose which relationships become routes. Use the product's hierarchy to choose the breadcrumb trail. Use a separate return control when agents need to get back to a filtered list.

## How do you design and test the model?

1. **Start with common tasks.** Identify where users begin and which views they need to reach. Choose main sections and local views that match those tasks.
2. **Add useful contextual links.** Decide which related records users need nearby. Use [cardinality](/glossary/cardinality-ux-architecture.html) to anticipate how many results a path may expose.
3. **Plan orientation and return paths.** Check that titles, local navigation, and breadcrumbs make sense on direct entry. For an agent returning from a booking, consider whether the trip's prior list filters should be restored.
4. **Test the routes separately.** Use tree testing to evaluate labels and hierarchy. Use a prototype to test contextual links and direct entry, where placement and screen context matter.

Test whether an agent can open a booking from search, find its trip, and return to the booking list without losing their place.

## Related terms

- [Information Architecture (IA)](/glossary/information-architecture.html)
- [Wayfinding System](/glossary/wayfinding-system.html)
- [Breadcrumb Hierarchy](/glossary/breadcrumb-hierarchy.html)
- [Polyhierarchy](/glossary/polyhierarchy.html)

## Sources

- [Designing Web Navigation: Types of Navigation Summary, James Kalbach](https://www.oreilly.com/library/view/designing-web-navigation/9780596528102/ch04s03.html)
- [Object-Oriented UX, Sophia V. Prater](https://alistapart.com/article/object-oriented-ux/)
- [Tree Testing: Evaluate Menu Labels and Categories, Nielsen Norman Group](https://www.nngroup.com/articles/tree-testing/)
