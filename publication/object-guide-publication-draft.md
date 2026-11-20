---
url: "https://lexkonovalov.com/glossary/object-guide.html"
title: "Object Guide in OOUX | Product Design Glossary"
description: "Learn what an Object Guide documents in ORCA. Use a practical Booking entry to define an object, clarify its boundaries, and capture open questions."
canonical: "https://lexkonovalov.com/glossary/object-guide.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Object Guide in OOUX | Product Design Glossary", "og:description": "Learn what an Object Guide documents in ORCA. Use a practical Booking entry to define an object, clarify its boundaries, and capture open questions.", "og:url": "https://lexkonovalov.com/glossary/object-guide.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/object-guide.html using the existing term template and source of truth. Register Object Guide in the UX & Product Architecture category. Use the existing Proprietary / Framework-Specific status value if the glossary requires a status for ORCA methods. Follow the index's existing sort and category conventions. Refresh any derived term counts. Render the Markdown body after the front matter as the article.
  
  Apply the supplied title, description, canonical, language, and Open Graph fields. Synchronize existing Twitter fields. Use one visible H1 and visible breadcrumbs that match BreadcrumbList. Render the example with semantic table headers and a horizontally scrollable container if needed on narrow screens.
  
  Emit structured_data as JSON-LD in the page HTML. Merge nodes by @id and reuse the existing WebSite #website, Person #person, and glossary #terms identifiers. Keep the other terms in the collection. Keep the DefinedTerm description identical to the opening paragraph and use object-guide as termCode. Use actual publication metadata if the site maintains dates.
  
  Add the page to the glossary index and XML sitemap. Generate glossary Previous and Next links using the existing ordering rules. Publish the four new OOUX articles together so their cross-links resolve. Once the destination is available, add a contextual link labeled Object Guide from /glossary/orca-framework.html, /glossary/object-mapping.html, /glossary/domain-context-modeling.html where the term or its purpose is discussed. Preserve those pages' URLs and metadata. Deduplicate any existing links to the new term.
  
  Check for a route conflict before creating the entry. Verify HTTP 200, the rendered article and direct-load HTML, self-canonical, index and sitemap inclusion, links, and mobile table behavior. Use the existing prerender path where supported. Check the graph with Schema.org Validator and the breadcrumb with Google's Rich Results Test. Follow the project deployment workflow and verify the live result after deployment.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/object-guide.html#webpage",
        "url": "https://lexkonovalov.com/glossary/object-guide.html",
        "name": "Object Guide in OOUX | Product Design Glossary",
        "description": "Learn what an Object Guide documents in ORCA. Use a practical Booking entry to define an object, clarify its boundaries, and capture open questions.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/object-guide.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/object-guide.html#breadcrumbs"
        },
        "citation": [
          "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
          "https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e",
          "https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/object-guide.html#term",
        "name": "Object Guide",
        "termCode": "object-guide",
        "description": "An Object Guide is a structured glossary of the objects in an Object-Oriented UX (OOUX) model. It records what each object means, how people recognize it, and which distinctions the team needs to preserve in product language and requirements. In ORCA, teams develop the guide during the Requirements round.",
        "url": "https://lexkonovalov.com/glossary/object-guide.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/object-guide.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/object-guide.html#breadcrumbs",
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
            "name": "Object Guide",
            "item": "https://lexkonovalov.com/glossary/object-guide.html"
          }
        ]
      }
    ]
  }
---

# Object Guide

An Object Guide is a structured glossary of the objects in an Object-Oriented UX (OOUX) model. It records what each object means, how people recognize it, and which distinctions the team needs to preserve in product language and requirements. In ORCA, teams develop the guide during the Requirements round.

## What should an Object Guide include?

Start with a short definition and a recognizable example. Add the distinctions that affect the work. The fields below are a lightweight starting point for a travel operations product.

| Field | Example entry for Booking |
|---|---|
| Preferred name | Booking |
| Definition | A record used to arrange travel services with a supplier. It tracks the request from draft through the supplier’s response and any later changes. |
| Instance | Booking B-52 for the outbound flight on Trip T-104. |
| Why it matters | Agents use the booking to track the supplier response, check fare rules, and request changes when eligible. |
| Boundary | An Offer contains proposed travel and pricing. A Booking tracks the supplier request. Accepting the offer and confirming the booking are separate events. |
| Key relationship | Each booking belongs to one trip. A trip may exist before it has any bookings. |
| Open question | Do agents use “reservation” as a synonym for Booking, or only after a supplier has confirmed it? |

Use the definition to decide which record owns each status. The Offer can show Accepted while the Booking shows Awaiting confirmation. That tells an agent the traveler has agreed to the offer and the supplier’s response is still outstanding.

## How does the guide work with other ORCA artifacts?

Use the guide to agree on what an object represents. The [nested object matrix](/glossary/nested-object-matrix.html) records its relationships across the model. The [CTA Matrix](/glossary/cta-matrix.html) records actions by role, and the [object map](/glossary/object-mapping.html) organizes the information each object needs. Link to those artifacts when an entry needs more detail.

## How do you keep an Object Guide useful?

Ask sales and ticketing to classify two records: an offer the traveler accepted and a booking the supplier has yet to confirm. If they disagree on the names or statuses, record the difference and agree on what appears at the handoff.

Review the entry when a change affects its definition, labels, or rules. Link to the decision or research note so the next person can see why the definition changed.

## Related terms

- [ORCA Framework](/glossary/orca-framework.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Noun Foraging](/glossary/noun-foraging.html)
- [CTA Matrix](/glossary/cta-matrix.html)

## Sources

- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [Prioritizing Prioritization for Product Designers, Sophia V. Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)
- [Object-Oriented UX with Sophia Prater, InfoQ interview](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)
