---
url: "https://lexkonovalov.com/glossary/object-mapping.html"
title: "Object Mapping in UX | Product Design Glossary"
description: "Learn how to create an object map in OOUX, with a travel booking example covering object types, relationships, attributes, and user actions."
canonical: "https://lexkonovalov.com/glossary/object-mapping.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Object Mapping in UX | Product Design Glossary", "og:description": "Learn how to create an object map in OOUX, with a travel booking example covering object types, relationships, attributes, and user actions.", "og:url": "https://lexkonovalov.com/glossary/object-mapping.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use object-mapping as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all 4 related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/object-mapping.html#webpage",
        "url": "https://lexkonovalov.com/glossary/object-mapping.html",
        "name": "Object Mapping in UX | Product Design Glossary",
        "description": "Learn how to create an object map in OOUX, with a travel booking example covering object types, relationships, attributes, and user actions.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/object-mapping.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/object-mapping.html#breadcrumbs"
        },
        "citation": [
          "https://alistapart.com/article/object-oriented-ux/",
          "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
          "https://ooux.com/offerings/foundations"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/object-mapping.html#term",
        "name": "Object Mapping",
        "termCode": "object-mapping",
        "description": "Object mapping is the practice of organizing the things users work with into a shared model of object types, relationships, attributes, and available actions. In Object-Oriented UX (OOUX), an object map helps teams decide what information and actions belong together before designing screens.",
        "url": "https://lexkonovalov.com/glossary/object-mapping.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/object-mapping.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/object-mapping.html#breadcrumbs",
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
            "name": "Object Mapping",
            "item": "https://lexkonovalov.com/glossary/object-mapping.html"
          }
        ]
      }
    ]
  }
---

# Object Mapping

Object mapping is the practice of organizing the things users work with into a shared model of object types, relationships, attributes, and available actions. In Object-Oriented UX (OOUX), an object map helps teams decide what information and actions belong together before designing screens.

## How do you create an object map?

1. **Find candidate objects.** Look for nouns in interviews, workflows, and support requests. Check which things users recognize, refer to repeatedly, and need to distinguish from one another.
2. **Describe each object.** Capture the information users need to identify it and make decisions about it. For a booking, that might be its confirmation number and status.
3. **Map relationships and actions.** Ask what each object connects to, what users need to do with it, and which roles can act. Keep uncertain rules visible for follow-up.
4. **Walk through a real task.** Try a routine case and an exception. Revise the map when either case exposes missing information, a connection, or an action.

An object type describes a class of things, such as Booking. Booking B-52 is one instance. Booking status describes the booking. Traveler is a separate object in this example because agents look up travelers, update their details, and view their other trips.

## Object map example for travel operations

| Object type | Useful attributes | Relationships | Example action |
|---|---|---|---|
| Trip | Reference, travel dates | Bookings and travelers | Add a booking |
| Booking | Reference, status, supplier confirmation number when available | One trip | Request cancellation if eligible |
| Traveler | Name, contact details | Trips they are associated with | Update contact details |

For an agent handling a cancellation, the map suggests a path from Trip to Booking. A booking summary can show the reference and status so the agent can pick the right record. The [state transition matrix](/glossary/state-transition-matrix.html) specifies what happens after an eligible agent requests cancellation.

## How does the object map fit into ORCA?

[ORCA](/glossary/orca-framework.html) gives teams several ways to investigate an object model. A nested object matrix records relationships between object types. A call-to-action (CTA) matrix records what each role needs to do with each object. The object map organizes attributes by object and builds on the relationships already identified. The example above shows actions alongside those findings for easy reference.

Use the map to decide what belongs in each view. A search result might show the booking reference and status. The detail view can add fare rules and cancellation options while keeping the same reference and status labels.

## Related terms

- [ORCA Framework](/glossary/orca-framework.html)
- [Conceptual Schema](/glossary/conceptual-schema.html)
- [Domain Context Modeling](/glossary/domain-context-modeling.html)
- [Content Modeling](/glossary/content-modeling.html)

## Sources

- [Object-Oriented UX, Sophia V. Prater](https://alistapart.com/article/object-oriented-ux/)
- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [OOUX Foundations, Sophia V. Prater](https://ooux.com/offerings/foundations)
