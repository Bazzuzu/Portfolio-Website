---
url: "https://lexkonovalov.com/glossary/cta-matrix.html"
title: "CTA Matrix in OOUX | Product Design Glossary"
description: "Learn how an ORCA CTA Matrix maps roles to actions on objects. See a booking example with permissions, eligibility rules, and cancellation feedback."
canonical: "https://lexkonovalov.com/glossary/cta-matrix.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "CTA Matrix in OOUX | Product Design Glossary", "og:description": "Learn how an ORCA CTA Matrix maps roles to actions on objects. See a booking example with permissions, eligibility rules, and cancellation feedback.", "og:url": "https://lexkonovalov.com/glossary/cta-matrix.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/cta-matrix.html using the existing term template and source of truth. Register CTA Matrix in the UX & Product Architecture category. Use the existing Proprietary / Framework-Specific status value if the glossary requires a status for ORCA methods. Follow the index's existing sort and category conventions. Refresh any derived term counts. Render the Markdown body after the front matter as the article.
  
  Apply the supplied title, description, canonical, language, and Open Graph fields. Synchronize existing Twitter fields. Use one visible H1 and visible breadcrumbs that match BreadcrumbList. Render the example with semantic table headers and a horizontally scrollable container if needed on narrow screens.
  
  Emit structured_data as JSON-LD in the page HTML. Merge nodes by @id and reuse the existing WebSite #website, Person #person, and glossary #terms identifiers. Keep the other terms in the collection. Keep the DefinedTerm description identical to the opening paragraph and use cta-matrix as termCode. Use actual publication metadata if the site maintains dates.
  
  Add the page to the glossary index and XML sitemap. Generate glossary Previous and Next links using the existing ordering rules. Publish the four new OOUX articles together so their cross-links resolve. Once the destination is available, add a contextual link labeled CTA Matrix from /glossary/orca-framework.html, /glossary/object-mapping.html, /glossary/state-transition-matrix.html where the term or its purpose is discussed. Preserve those pages' URLs and metadata. Deduplicate any existing links to the new term.
  
  Check for a route conflict before creating the entry. Verify HTTP 200, the rendered article and direct-load HTML, self-canonical, index and sitemap inclusion, links, and mobile table behavior. Use the existing prerender path where supported. Check the graph with Schema.org Validator and the breadcrumb with Google's Rich Results Test. Follow the project deployment workflow and verify the live result after deployment.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/cta-matrix.html#webpage",
        "url": "https://lexkonovalov.com/glossary/cta-matrix.html",
        "name": "CTA Matrix in OOUX | Product Design Glossary",
        "description": "Learn how an ORCA CTA Matrix maps roles to actions on objects. See a booking example with permissions, eligibility rules, and cancellation feedback.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/cta-matrix.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/cta-matrix.html#breadcrumbs"
        },
        "citation": [
          "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
          "https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/",
          "https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/cta-matrix.html#term",
        "name": "CTA Matrix",
        "termCode": "cta-matrix",
        "description": "A CTA Matrix, or call-to-action matrix, is an ORCA grid that maps user roles to object types and records the actions each role needs to take on each object. It gives teams a starting point for defining permissions, conditions, and interaction requirements before placing controls on screens.",
        "url": "https://lexkonovalov.com/glossary/cta-matrix.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/cta-matrix.html#webpage"
        },
        "alternateName": [
          "Call-to-Action Matrix"
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
        "@id": "https://lexkonovalov.com/glossary/cta-matrix.html#breadcrumbs",
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
            "name": "CTA Matrix",
            "item": "https://lexkonovalov.com/glossary/cta-matrix.html"
          }
        ]
      }
    ]
  }
---

# CTA Matrix

A CTA Matrix, or call-to-action matrix, is an ORCA grid that maps user roles to object types and records the actions each role needs to take on each object. It gives teams a starting point for defining permissions, conditions, and interaction requirements before placing controls on screens.

## What goes in a CTA Matrix?

Put roles down the rows and object types across the columns. Write actions as verbs in the cells. A role can describe a person’s relationship to the object, such as the agent assigned to a trip, when that relationship affects what they can do.

Start with what each role needs to do. Review access and business rules before treating a proposed action as an approved requirement. A verb such as “Request cancellation” can become a button, menu item, or part of a guided workflow once the team designs the interaction.

## CTA Matrix example for travel operations

Consider a tool where an assigned agent manages the trip and a support reviewer investigates issues without changing records. This example focuses on a few actions from each role.

| Role | Trip | Booking | Traveler |
|---|---|---|---|
| Assigned agent | View trip, add booking | View booking, request cancellation if eligible | View traveler, update contact details if permitted |
| Support reviewer | View trip | View booking | View permitted traveler details |

Turn “Request cancellation” into a user story. An assigned agent needs to request cancellation on an eligible confirmed booking when a traveler changes plans. When the request succeeds, show Cancellation pending so the agent knows the supplier still has to respond. The supplier’s response determines the next state.

## How do you turn matrix entries into requirements?

1. **Clarify who can act.** Check role, assignment, and record access separately where they affect the action.
2. **Describe when the action is available.** Record the booking state and eligibility rules. Mark unresolved rules for follow-up.
3. **Specify the result and feedback.** Include what the user sees after success, a blocked attempt, or a delayed response. Use a [state transition matrix](/glossary/state-transition-matrix.html) to track the lifecycle.
4. **Choose placement in the interface.** Give frequent or time-sensitive actions appropriate prominence. Test whether users can find and understand them where the object appears.

In [ORCA](/glossary/orca-framework.html), teams begin this work during Discovery and expand matrix entries into user stories during Requirements. Use the matrix to agree on who can act. The application enforces those rules when the action is requested.

## Related terms

- [ORCA Framework](/glossary/orca-framework.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Nested Object Matrix](/glossary/nested-object-matrix.html)
- [State Transition Matrix](/glossary/state-transition-matrix.html)

## Sources

- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [Object-Oriented UX with Sophia Prater, InfoQ interview](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)
- [Prioritizing Prioritization for Product Designers, Sophia V. Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)
