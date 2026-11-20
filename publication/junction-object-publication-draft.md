---
url: "https://lexkonovalov.com/glossary/junction-object.html"
title: "Junction Objects in OOUX | Product Design Glossary"
description: "Learn when to model a relationship as a junction object. A travel operations example shows where trip-specific traveler details belong."
canonical: "https://lexkonovalov.com/glossary/junction-object.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Junction Objects in OOUX | Product Design Glossary", "og:description": "Learn when to model a relationship as a junction object. A travel operations example shows where trip-specific traveler details belong.", "og:url": "https://lexkonovalov.com/glossary/junction-object.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/junction-object.html using the existing term template and source of truth. Register Junction Object in the UX & Product Architecture category. Use the existing Proprietary / Framework-Specific status value if the glossary requires a status for ORCA methods. Follow the index's existing sort and category conventions. Refresh any derived term counts. Render the Markdown body after the front matter as the article.
  
  Apply the supplied title, description, canonical, language, and Open Graph fields. Synchronize existing Twitter fields. Use one visible H1 and visible breadcrumbs that match BreadcrumbList. Render the example with semantic table headers and a horizontally scrollable container if needed on narrow screens.
  
  Emit structured_data as JSON-LD in the page HTML. Merge nodes by @id and reuse the existing WebSite #website, Person #person, and glossary #terms identifiers. Keep the other terms in the collection. Keep the DefinedTerm description identical to the opening paragraph and use junction-object as termCode. Use actual publication metadata if the site maintains dates.
  
  Add the page to the glossary index and XML sitemap. Generate glossary Previous and Next links using the existing ordering rules. Publish the four new OOUX articles together so their cross-links resolve. Check the referenced Nested Object Matrix and Object Guide routes from OOUX batch 2. Publish those entries first or in the same release if they are still pending. Once the destination is available, add a contextual link labeled Junction Object from /glossary/object-mapping.html, /glossary/cardinality-ux-architecture.html, /glossary/nested-object-matrix.html where the term or its purpose is discussed. Preserve those pages' URLs and metadata. Deduplicate any existing links to the new term.
  
  Check for a route conflict before creating the entry. Verify HTTP 200, the rendered article and direct-load HTML, self-canonical, index and sitemap inclusion, links, and mobile table behavior. Use the existing prerender path where supported. Check the graph with Schema.org Validator and the breadcrumb with Google's Rich Results Test. Follow the project deployment workflow and verify the live result after deployment.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/junction-object.html#webpage",
        "url": "https://lexkonovalov.com/glossary/junction-object.html",
        "name": "Junction Objects in OOUX | Product Design Glossary",
        "description": "Learn when to model a relationship as a junction object. A travel operations example shows where trip-specific traveler details belong.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/junction-object.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/junction-object.html#breadcrumbs"
        },
        "citation": [
          "https://itx.com/podcast/166-sophia-prater-on-object-oriented-ux-the-backbone-of-the-design-process/",
          "https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/junction-object.html#term",
        "name": "Junction Object",
        "termCode": "junction-object",
        "description": "A junction object represents a relationship as an object in its own right. It is useful when the connection itself carries information that matters to users. In Object-Oriented UX (OOUX), it gives that information a clear place in the model and helps teams decide where people should see or change it.",
        "url": "https://lexkonovalov.com/glossary/junction-object.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/junction-object.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/junction-object.html#breadcrumbs",
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
            "name": "Junction Object",
            "item": "https://lexkonovalov.com/glossary/junction-object.html"
          }
        ]
      }
    ]
  }
---

# Junction Object

A junction object represents a relationship as an object in its own right. It is useful when the connection itself carries information that matters to users. In Object-Oriented UX (OOUX), it gives that information a clear place in the model and helps teams decide where people should see or change it.

## Example of a junction object

A traveler can be linked to several trips, and a trip can include several travelers. Suppose agents also need to know whether each traveler has confirmed they will join a particular trip. One traveler can be Confirmed for Trip T-104 and Invited for another trip at the same time.

| Where the information belongs | Example |
|---|---|
| Traveler | Name and contact details |
| Trip | Reference and travel dates |
| Trip Participation | One trip, one traveler, participation status, and response date when available |

Trip Participation is the junction object. In this example, the product allows one participation record for each traveler and trip pair. If an agent changes the status for Trip T-104 to Confirmed, any Invited status on a different trip stays as it was.

## When is a junction object useful?

Ask whether the same person or record can have different values depending on what it is linked to. A traveler’s contact details normally describe the person. Their response to a particular trip invitation describes their participation in that trip.

Then check what people do with the relationship. In this example, an invitation creates a participation record, a response updates it, and removal ends that traveler’s association with the trip. Naming the junction object lets the team talk about these actions without confusing a trip-specific change with an edit to the traveler’s profile.

## How does it show up in the interface?

In the trip’s traveler list, show the traveler’s name alongside their participation status. Opening the name can lead to the Traveler record. An action such as “Remove from trip” applies to the participation and leaves the traveler profile intact.

The junction object can be represented by that row and its actions. Give it a detail view if people need to inspect a response history or manage more information than the row can show. Use the [nested object matrix](/glossary/nested-object-matrix.html) to record how Trip Participation connects to Trip and Traveler.

## Related terms

- [Object Mapping](/glossary/object-mapping.html)
- [Cardinality (UX Architecture)](/glossary/cardinality-ux-architecture.html)
- [Nested Object Matrix](/glossary/nested-object-matrix.html)
- [ORCA Relationship Requirements](/glossary/orca-relationship-requirements.html)

## Sources

- [Object-Oriented UX: The Backbone of the Design Process, Sophia Prater interview](https://itx.com/podcast/166-sophia-prater-on-object-oriented-ux-the-backbone-of-the-design-process/)
- [Object-Oriented UX with Sophia Prater, InfoQ](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)
