---
url: "https://lexkonovalov.com/glossary/noun-foraging.html"
title: "Noun Foraging in OOUX | Product Design Glossary"
description: "Learn how noun foraging turns UX research into candidate objects. A travel operations example shows how to use structure, instances, and purpose."
canonical: "https://lexkonovalov.com/glossary/noun-foraging.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Noun Foraging in OOUX | Product Design Glossary", "og:description": "Learn how noun foraging turns UX research into candidate objects. A travel operations example shows how to use structure, instances, and purpose.", "og:url": "https://lexkonovalov.com/glossary/noun-foraging.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/noun-foraging.html using the existing term template and source of truth. Register Noun Foraging in the UX & Product Architecture category. Use the existing Proprietary / Framework-Specific status value if the glossary requires a status for ORCA methods. Follow the index's existing sort and category conventions. Refresh any derived term counts. Render the Markdown body after the front matter as the article.
  
  Apply the supplied title, description, canonical, language, and Open Graph fields. Synchronize existing Twitter fields. Use one visible H1 and visible breadcrumbs that match BreadcrumbList. Render the example with semantic table headers and a horizontally scrollable container if needed on narrow screens.
  
  Emit structured_data as JSON-LD in the page HTML. Merge nodes by @id and reuse the existing WebSite #website, Person #person, and glossary #terms identifiers. Keep the other terms in the collection. Keep the DefinedTerm description identical to the opening paragraph and use noun-foraging as termCode. Use actual publication metadata if the site maintains dates.
  
  Add the page to the glossary index and XML sitemap. Generate glossary Previous and Next links using the existing ordering rules. Publish the four new OOUX articles together so their cross-links resolve. Once the destination is available, add a contextual link labeled Noun Foraging from /glossary/orca-framework.html, /glossary/object-mapping.html where the term or its purpose is discussed. Preserve those pages' URLs and metadata. Deduplicate any existing links to the new term.
  
  Check for a route conflict before creating the entry. Verify HTTP 200, the rendered article and direct-load HTML, self-canonical, index and sitemap inclusion, links, and mobile table behavior. Use the existing prerender path where supported. Check the graph with Schema.org Validator and the breadcrumb with Google's Rich Results Test. Follow the project deployment workflow and verify the live result after deployment.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/noun-foraging.html#webpage",
        "url": "https://lexkonovalov.com/glossary/noun-foraging.html",
        "name": "Noun Foraging in OOUX | Product Design Glossary",
        "description": "Learn how noun foraging turns UX research into candidate objects. A travel operations example shows how to use structure, instances, and purpose.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/noun-foraging.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/noun-foraging.html#breadcrumbs"
        },
        "citation": [
          "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
          "https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/",
          "https://alistapart.com/article/object-oriented-ux/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/noun-foraging.html#term",
        "name": "Noun Foraging",
        "termCode": "noun-foraging",
        "description": "Noun foraging is a discovery activity in Object-Oriented UX (OOUX) that uses nouns from research to identify candidate objects. The goal is to find the things people recognize and work with, such as trips, bookings, and travelers.",
        "url": "https://lexkonovalov.com/glossary/noun-foraging.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/noun-foraging.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/noun-foraging.html#breadcrumbs",
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
            "name": "Noun Foraging",
            "item": "https://lexkonovalov.com/glossary/noun-foraging.html"
          }
        ]
      }
    ]
  }
---

# Noun Foraging

Noun foraging is a discovery activity in Object-Oriented UX (OOUX) that uses nouns from research to identify candidate objects. The goal is to find the things people recognize and work with, such as trips, bookings, and travelers.

## How do you do noun foraging?

1. **Start with evidence.** Review interview notes, support conversations, or a walkthrough of an existing process. Record the noun and the sentence it came from.
2. **Group terms by meaning.** A single concept may have multiple names. Keep similar terms separate until you know they refer to the same thing.
3. **Look for structure, instances, and purpose.** Sophia Prater uses this check, called SIP, to evaluate possible objects. Ask what information and relationships give the thing structure, what individual examples look like, and why people need to work with it.
4. **Validate the shortlist.** Ask users or domain experts to walk through a real case. Record open questions before taking the candidates into the relationship model.

Frequency can help you spot a candidate. An infrequently mentioned object may still matter when it controls an important handoff or exception.

## Example from travel operations

Imagine an agent says, “I open the trip, check which traveler it’s for, and look at the booking status before I call the supplier.” That sentence offers several candidates.

| Term in the notes | What to investigate |
|---|---|
| Trip | The agent recognizes individual trips and uses each one to gather bookings and travelers. Example instance: Trip T-104. |
| Traveler | The agent can find a person and view their other trips. Keep Traveler on the shortlist. |
| Booking | Booking B-52 has its own reference and status. Agents can check or request changes to it. |
| Status | In this example it describes the booking. Capture it as a candidate attribute. |
| Supplier | Ask whether agents look up supplier records or only need a supplier name on the booking in this scope. |

Ask an agent to show you a “reservation” and a “booking.” If they point to different records or stages, preserve the distinction in the shortlist.

## What comes next in ORCA?

Noun foraging helps define the Objects in [ORCA](/glossary/orca-framework.html). Take the shortlist into a [nested object matrix](/glossary/nested-object-matrix.html) to investigate relationships. Use an [Object Guide](/glossary/object-guide.html) to capture definitions once the team has tested what the terms mean.

## Related terms

- [ORCA Framework](/glossary/orca-framework.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Nested Object Matrix](/glossary/nested-object-matrix.html)
- [Object Guide](/glossary/object-guide.html)

## Sources

- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [Object-Oriented UX with Sophia Prater, InfoQ interview](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)
- [Object-Oriented UX, Sophia V. Prater](https://alistapart.com/article/object-oriented-ux/)
