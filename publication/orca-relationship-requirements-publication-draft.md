---
url: "https://lexkonovalov.com/glossary/orca-relationship-requirements.html"
title: "ORCA Relationship Requirements (MCSFD) | Product Design Glossary"
description: "Use ORCA’s MCSFD checklist to specify how objects connect, how many records relate, how lists work, and what happens when a linked record changes."
canonical: "https://lexkonovalov.com/glossary/orca-relationship-requirements.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "ORCA Relationship Requirements (MCSFD) | Product Design Glossary", "og:description": "Use ORCA’s MCSFD checklist to specify how objects connect, how many records relate, how lists work, and what happens when a linked record changes.", "og:url": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/orca-relationship-requirements.html using the existing term template and source of truth. Register ORCA Relationship Requirements in the UX & Product Architecture category. Use the existing Proprietary / Framework-Specific status value if the glossary requires a status for ORCA methods. Follow the index's existing sort and category conventions. Refresh any derived term counts. Render the Markdown body after the front matter as the article.
  
  Apply the supplied title, description, canonical, language, and Open Graph fields. Synchronize existing Twitter fields. Use one visible H1 and visible breadcrumbs that match BreadcrumbList. Render the example with semantic table headers and a horizontally scrollable container if needed on narrow screens.
  
  Emit structured_data as JSON-LD in the page HTML. Merge nodes by @id and reuse the existing WebSite #website, Person #person, and glossary #terms identifiers. Keep the other terms in the collection. Keep the DefinedTerm description identical to the opening paragraph and use orca-relationship-requirements as termCode. Use actual publication metadata if the site maintains dates.
  
  Add the page to the glossary index and XML sitemap. Generate glossary Previous and Next links using the existing ordering rules. Publish the four new OOUX articles together so their cross-links resolve. Check the referenced Nested Object Matrix and Object Guide routes from OOUX batch 2. Publish those entries first or in the same release if they are still pending. Once the destination is available, add a contextual link labeled ORCA Relationship Requirements from /glossary/orca-framework.html, /glossary/nested-object-matrix.html, /glossary/cardinality-ux-architecture.html where the term or its purpose is discussed. Preserve those pages' URLs and metadata. Deduplicate any existing links to the new term.
  
  Check for a route conflict before creating the entry. Verify HTTP 200, the rendered article and direct-load HTML, self-canonical, index and sitemap inclusion, links, and mobile table behavior. Use the existing prerender path where supported. Check the graph with Schema.org Validator and the breadcrumb with Google's Rich Results Test. Follow the project deployment workflow and verify the live result after deployment.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html#webpage",
        "url": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html",
        "name": "ORCA Relationship Requirements (MCSFD) | Product Design Glossary",
        "description": "Use ORCA’s MCSFD checklist to specify how objects connect, how many records relate, how lists work, and what happens when a linked record changes.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html#breadcrumbs"
        },
        "citation": [
          "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
          "https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/",
          "https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html#term",
        "name": "ORCA Relationship Requirements",
        "termCode": "orca-relationship-requirements",
        "description": "ORCA relationship requirements describe how a connection between objects works in a product. Sophia Prater uses MCSFD as a checklist for five decisions: mechanics, cardinality, sorting, filtering, and dependency. Teams use it to turn a relationship they discovered into rules they can design and test.",
        "url": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html#webpage"
        },
        "alternateName": [
          "MCSFD"
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
        "@id": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html#breadcrumbs",
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
            "name": "ORCA Relationship Requirements",
            "item": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html"
          }
        ]
      }
    ]
  }
---

# ORCA Relationship Requirements

ORCA relationship requirements describe how a connection between objects works in a product. Sophia Prater uses MCSFD as a checklist for five decisions: mechanics, cardinality, sorting, filtering, and dependency. Teams use it to turn a relationship they discovered into rules they can design and test.

## What does MCSFD cover?

Take one connection from a [Nested Object Matrix](/glossary/nested-object-matrix.html). In this example, an agent opens Trip T-104 to find Booking B-52 and check whether the supplier has responded.

| Decision | Question | Example rule |
|---|---|---|
| Mechanics | How is the connection created or changed? | Adding a booking from a trip assigns that trip automatically. When adding one elsewhere, the agent selects a trip. |
| Cardinality | How many records can relate in each direction? | A trip can have zero or more bookings. Each booking belongs to exactly one trip. |
| Sorting | Which order helps people scan the related records? | Show the earliest service date first. Put bookings without a service date after dated bookings. |
| Filtering | Which subset helps with a task? | Agents can filter by Awaiting confirmation to find bookings the supplier has yet to confirm. |
| Dependency | What happens to related records when one changes or is removed? | Archiving a trip preserves its linked bookings. Agents with access can still review their history. |

These are product rules for the example. Confirm the equivalent rules with the people who do the work and the team that maintains the system.

## How do these rules affect the design?

A trip with zero bookings needs a clear way for an authorized agent to add the first booking. If a status filter hides all bookings, the empty message can explain that no bookings match and offer to clear the filter. The agent can tell whether they need to create a booking or change the filter.

Apply the checklist in the direction that supports the task. On a Trip, sorting its bookings may matter. On a Booking, there is only one linked Trip, so sorting adds nothing to that view.

Review exceptions before finalizing the rule. Ask what an agent sees when opening a booking from search after its trip was archived. Confirm which records are still visible, which actions remain available, and where the agent can find the trip history.

## Related terms

- [ORCA Framework](/glossary/orca-framework.html)
- [Nested Object Matrix](/glossary/nested-object-matrix.html)
- [Cardinality (UX Architecture)](/glossary/cardinality-ux-architecture.html)
- [Junction Object](/glossary/junction-object.html)

## Sources

- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [Object-Oriented UX with Sophia Prater, InfoQ](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)
- [Prioritizing Prioritization for Product Designers, Sophia V. Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)
