---
url: "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html"
title: "Cardinality in UX: Examples | Product Design Glossary"
description: "Learn how one-to-one, one-to-many, and many-to-many relationships shape UX. Use cardinality to design for empty, single, and large sets of records."
canonical: "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Cardinality in UX: Examples | Product Design Glossary", "og:description": "Learn how one-to-one, one-to-many, and many-to-many relationships shape UX. Use cardinality to design for empty, single, and large sets of records.", "og:url": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use cardinality-ux-architecture as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all 4 related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html#webpage",
        "url": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html",
        "name": "Cardinality in UX: Examples | Product Design Glossary",
        "description": "Learn how one-to-one, one-to-many, and many-to-many relationships shape UX. Use cardinality to design for empty, single, and large sets of records.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html#breadcrumbs"
        },
        "citation": [
          "https://discoverylive.ooux.com/",
          "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
          "https://www.ibm.com/think/topics/entity-relationship-diagram"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html#term",
        "name": "Cardinality (UX Architecture)",
        "termCode": "cardinality-ux-architecture",
        "description": "In UX architecture, cardinality describes how many records of one object type can relate to a record of another type. It helps designers support the number of related records users may encounter, from an empty list to a collection they need to search.",
        "url": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html#breadcrumbs",
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
            "name": "Cardinality (UX Architecture)",
            "item": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html"
          }
        ]
      }
    ]
  }
---

# Cardinality (UX Architecture)

In UX architecture, cardinality describes how many records of one object type can relate to a record of another type. It helps designers support the number of related records users may encounter, from an empty list to a collection they need to search.

## What are the types of cardinality?

Ask the relationship question in both directions. These examples describe the rules of an illustrative travel operations tool.

| Relationship | Example | What the interface needs to support |
|---|---|---|
| One-to-one | A traveler has at most one preferences profile, and each profile belongs to exactly one traveler. | Show preferences when a profile exists and offer a way to create one when it is missing. |
| One-to-many | A trip can have zero or more bookings, and each booking belongs to exactly one trip. | Provide a way to view and manage multiple bookings from the trip. |
| Many-to-many | A trip can include multiple travelers, and each traveler can take multiple trips. | Let agents associate an existing traveler with another trip and find the traveler’s trips when needed. |

## Why do minimum and maximum counts matter?

“One-to-many” leaves open whether a trip can exist before its first booking. In the example, the minimum is zero bookings per trip and one trip per booking. A new trip needs a useful empty state, and the booking creation flow needs a trip selection when it starts outside a trip.

Distinguish the maximum the product allows from what people usually see. If most trips have two bookings but group trips can have dozens, test both sizes. Typical volume, tasks, and access rules help determine whether a simple list or a searchable table makes sense.

## How does cardinality affect ORCA design decisions?

ORCA teams can first record that Trips and Bookings are related, then use cardinality to clarify the relationship during the Requirements round. Use the [object map](/glossary/object-mapping.html) to find rules that need more detail.

- Can an agent add the first booking directly from the empty Bookings section?
- Can an agent move a booking to another trip, and what would need to be checked?
- Can an agent link a traveler who already appears on another trip, and how should the interface prevent duplicate records?

A relationship can exist in the model even when one role cannot see it or has no reason to navigate in both directions. Decide what each role needs to see and do before turning the relationship into a link.

## Related terms

- [Object Mapping](/glossary/object-mapping.html)
- [Information Architecture (IA)](/glossary/information-architecture.html)
- [ORCA Framework](/glossary/orca-framework.html)
- [Structural Navigation Model](/glossary/structural-navigation-model.html)

## Sources

- [Discovery Live: Relationship Discovery, OOUX](https://discoverylive.ooux.com/)
- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [What Is an Entity Relationship Diagram?, IBM](https://www.ibm.com/think/topics/entity-relationship-diagram)
