---
url: "https://lexkonovalov.com/glossary/object-oriented-ux.html"
title: "Object-Oriented UX (OOUX) | Product Design Glossary"
description: "Object-Oriented UX (OOUX) defines objects, relationships, attributes, and user actions before screen design. Explore ORCA through a travel booking example."
canonical: "https://lexkonovalov.com/glossary/object-oriented-ux.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Object-Oriented UX (OOUX) | Product Design Glossary", "og:description": "Object-Oriented UX (OOUX) defines objects, relationships, attributes, and user actions before screen design. Explore ORCA through a travel booking example.", "og:url": "https://lexkonovalov.com/glossary/object-oriented-ux.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Use the front matter for implementation only.

  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields with the same values.

  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.

  Apply the collection name Product Design Glossary in the shared glossary configuration. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Populate any date fields from actual publication history.

  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, and a semantic table that works on mobile. Preserve the supplied sources and all five related-term links. Verify the glossary index links to this URL.

  Serve the page at the existing URL and include it in the sitemap. Update lastmod to the actual deployment date if the sitemap maintains that field. Check the public page’s crawlability and unintended indexing restrictions.

  Run the existing build and inspect the resulting metadata, links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/object-oriented-ux.html#webpage",
        "url": "https://lexkonovalov.com/glossary/object-oriented-ux.html",
        "name": "Object-Oriented UX (OOUX) | Product Design Glossary",
        "description": "Object-Oriented UX (OOUX) defines objects, relationships, attributes, and user actions before screen design. Explore ORCA through a travel booking example.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/object-oriented-ux.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/object-oriented-ux.html#breadcrumbs"
        },
        "citation": [
          "https://alistapart.com/article/object-oriented-ux/",
          "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/object-oriented-ux.html#term",
        "name": "Object-Oriented UX",
        "alternateName": "OOUX",
        "termCode": "object-oriented-ux",
        "description": "Object-Oriented UX (OOUX) is a design approach that structures digital products around objects in users’ mental models—the things they recognize and expect to work with, such as trips, travelers, and bookings. Teams define these objects, their relationships, attributes, and available actions before designing screens and flows.",
        "url": "https://lexkonovalov.com/glossary/object-oriented-ux.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/object-oriented-ux.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/object-oriented-ux.html#breadcrumbs",
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
            "name": "Object-Oriented UX (OOUX)",
            "item": "https://lexkonovalov.com/glossary/object-oriented-ux.html"
          }
        ]
      }
    ]
  }
---

# Object-Oriented UX (OOUX)

Object-Oriented UX (OOUX) is a design approach that structures digital products around objects in users’ mental models—the things they recognize and expect to work with, such as trips, travelers, and bookings. Teams define these objects, their relationships, attributes, and available actions before designing screens and flows.

## What does OOUX look like in practice?

Consider a travel operations tool with trips, travelers, and bookings. Modeling the relationship between a trip and its bookings helps the team decide what agents can navigate to from a trip.

The trip page can list its bookings, with each one opening its details and available actions. An authorized agent can select a booking and cancel it. Its status then updates wherever that booking appears, including the trip page and search results. The object model gives the team a shared basis for navigation, content, and actions.

## How does ORCA relate to OOUX?

OOUX provides the design principles. [ORCA](/glossary/orca-framework.html) is Sophia Prater’s process for applying them through Objects, Relationships, Calls to action, and Attributes. Teams revisit these four elements as they discover requirements and refine the model. [Introducing ORCA, Sophia Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)

| ORCA element | Design question | Travel operations example |
|---|---|---|
| Objects | What things do people work with? | Trip, Traveler, Booking |
| Relationships | How are those things connected? | A trip includes travelers and bookings. |
| Calls to action | What can each user role do? | An authorized agent can cancel a booking. |
| Attributes | What information describes each object? | A booking has a confirmation number and status. |

An [object map](/glossary/object-mapping.html) records these decisions so the team can use the same model when designing screens, navigation, and flows.

## When is OOUX useful?

OOUX is particularly useful when the same objects appear across multiple workflows or when different roles need different actions on an object. For example, a travel agent and an accountant may both work with the same booking, while needing different information and permissions.

Start by examining the things people name in interviews and existing workflows. Use their language to identify candidate objects. Then walk through a task such as “find and cancel a booking.” Check that the model identifies the booking, its connection to the trip, its status, and which roles can cancel it.

## Related terms

- [ORCA Framework](/glossary/orca-framework.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Domain Context Modeling](/glossary/domain-context-modeling.html)
- [Conceptual Schema](/glossary/conceptual-schema.html)
- [Information Architecture (IA)](/glossary/information-architecture.html)

## Sources

- [Object-Oriented UX, Sophia V. Prater, A List Apart](https://alistapart.com/article/object-oriented-ux/)
- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
