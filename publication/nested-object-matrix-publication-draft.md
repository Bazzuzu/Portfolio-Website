---
url: "https://lexkonovalov.com/glossary/nested-object-matrix.html"
title: "Nested Object Matrix in OOUX | Product Design Glossary"
description: "Build a Nested Object Matrix in ORCA. Use a travel operations example to map relationships in both directions and identify useful navigation paths."
canonical: "https://lexkonovalov.com/glossary/nested-object-matrix.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Nested Object Matrix in OOUX | Product Design Glossary", "og:description": "Build a Nested Object Matrix in ORCA. Use a travel operations example to map relationships in both directions and identify useful navigation paths.", "og:url": "https://lexkonovalov.com/glossary/nested-object-matrix.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/nested-object-matrix.html using the existing term template and source of truth. Register Nested Object Matrix in the UX & Product Architecture category. Use the existing Proprietary / Framework-Specific status value if the glossary requires a status for ORCA methods. Follow the index's existing sort and category conventions. Refresh any derived term counts. Render the Markdown body after the front matter as the article.
  
  Apply the supplied title, description, canonical, language, and Open Graph fields. Synchronize existing Twitter fields. Use one visible H1 and visible breadcrumbs that match BreadcrumbList. Render the example with semantic table headers and a horizontally scrollable container if needed on narrow screens.
  
  Emit structured_data as JSON-LD in the page HTML. Merge nodes by @id and reuse the existing WebSite #website, Person #person, and glossary #terms identifiers. Keep the other terms in the collection. Keep the DefinedTerm description identical to the opening paragraph and use nested-object-matrix as termCode. Use actual publication metadata if the site maintains dates.
  
  Add the page to the glossary index and XML sitemap. Generate glossary Previous and Next links using the existing ordering rules. Publish the four new OOUX articles together so their cross-links resolve. Once the destination is available, add a contextual link labeled Nested Object Matrix from /glossary/orca-framework.html, /glossary/object-mapping.html, /glossary/cardinality-ux-architecture.html where the term or its purpose is discussed. Preserve those pages' URLs and metadata. Deduplicate any existing links to the new term.
  
  Check for a route conflict before creating the entry. Verify HTTP 200, the rendered article and direct-load HTML, self-canonical, index and sitemap inclusion, links, and mobile table behavior. Use the existing prerender path where supported. Check the graph with Schema.org Validator and the breadcrumb with Google's Rich Results Test. Follow the project deployment workflow and verify the live result after deployment.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/nested-object-matrix.html#webpage",
        "url": "https://lexkonovalov.com/glossary/nested-object-matrix.html",
        "name": "Nested Object Matrix in OOUX | Product Design Glossary",
        "description": "Build a Nested Object Matrix in ORCA. Use a travel operations example to map relationships in both directions and identify useful navigation paths.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/nested-object-matrix.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/nested-object-matrix.html#breadcrumbs"
        },
        "citation": [
          "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
          "https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/",
          "https://alistapart.com/article/object-oriented-ux/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/nested-object-matrix.html#term",
        "name": "Nested Object Matrix",
        "termCode": "nested-object-matrix",
        "description": "A Nested Object Matrix (NOM) is an ORCA grid that lists the same object types across its columns and down its rows. Each intersection describes how instances of one type relate to instances of the other. Teams use it to investigate relationships and identify where users may need access to related records.",
        "url": "https://lexkonovalov.com/glossary/nested-object-matrix.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/nested-object-matrix.html#webpage"
        },
        "alternateName": [
          "NOM",
          "Nested-Object Matrix"
        ]
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
        "@id": "https://lexkonovalov.com/glossary/nested-object-matrix.html#breadcrumbs",
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
            "name": "Nested Object Matrix",
            "item": "https://lexkonovalov.com/glossary/nested-object-matrix.html"
          }
        ]
      }
    ]
  }
---

# Nested Object Matrix

A Nested Object Matrix (NOM) is an ORCA grid that lists the same object types across its columns and down its rows. Each intersection describes how instances of one type relate to instances of the other. Teams use it to investigate relationships and identify where users may need access to related records.

## How do you read a Nested Object Matrix?

In Sophia Prater’s convention, the top row contains the **host objects**. Read a cell by starting with the column heading and describing how that host relates to the object type on the left. Use verbs and counts where you know them. To check the reverse direction, swap the row and column. Trip → Booking answers which bookings are on a trip. Booking → Trip answers which trip owns the booking.

## A Nested Object Matrix for travel operations

In this example, a trip can exist before it has a booking. Each booking belongs to exactly one trip. Travelers may appear on multiple trips.

| Related object ↓ / Host object → | Trip | Booking | Traveler |
|---|---|---|---|
| Trip | — | Belongs to exactly one trip | Can be linked to multiple trips |
| Booking | Has zero or more bookings | — | — |
| Traveler | Can include multiple travelers | — | — |

A dash marks a cell with no direct relationship in this example. In a working matrix, mark an untested relationship as “To verify” so the team can distinguish it from an empty cell. For example, a booking can lead to travelers through its trip. If the product needs to identify which travelers are covered by a particular booking, investigate that as a separate relationship.

## How do you build the matrix?

1. **List the same object types on both axes.** Start with the shortlist from [noun foraging](/glossary/noun-foraging.html).
2. **Describe each relevant relationship in plain language.** Put distinct relationships in the same cell when the same object types connect in several ways.
3. **Check minimums and maximums in both directions.** “Has bookings” leaves open whether the first booking is required. Write the [cardinality](/glossary/cardinality-ux-architecture.html) explicitly when a rule is known.
4. **Decide what users need to reach.** Test whether an agent who opens a booking from search can find its trip. Check that the trip is visible to that agent before adding the link.

The matrix focuses on relationships. The [object map](/glossary/object-mapping.html) builds on those findings to organize the information that describes each object. A [CTA Matrix](/glossary/cta-matrix.html) records what different roles can do with them.

## Related terms

- [ORCA Framework](/glossary/orca-framework.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Noun Foraging](/glossary/noun-foraging.html)
- [Cardinality (UX Architecture)](/glossary/cardinality-ux-architecture.html)

## Sources

- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [Object-Oriented UX with Sophia Prater, InfoQ interview](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)
- [Object-Oriented UX, Sophia V. Prater](https://alistapart.com/article/object-oriented-ux/)
