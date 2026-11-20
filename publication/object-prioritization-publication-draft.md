---
url: "https://lexkonovalov.com/glossary/object-prioritization.html"
title: "Object Prioritization in OOUX | Product Design Glossary"
description: "Learn how ORCA teams choose which objects a release needs and which deserve prominent access. See a worked example for a travel operations tool."
canonical: "https://lexkonovalov.com/glossary/object-prioritization.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Object Prioritization in OOUX | Product Design Glossary", "og:description": "Learn how ORCA teams choose which objects a release needs and which deserve prominent access. See a worked example for a travel operations tool.", "og:url": "https://lexkonovalov.com/glossary/object-prioritization.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/object-prioritization.html using the existing term template and source of truth. Register Object Prioritization in the UX & Product Architecture category. Use the existing Proprietary / Framework-Specific status value if the glossary requires a status for ORCA methods. Follow the index's existing sort and category conventions. Refresh any derived term counts. Render the Markdown body after the front matter as the article.
  
  Apply the supplied title, description, canonical, language, and Open Graph fields. Synchronize existing Twitter fields. Use one visible H1 and visible breadcrumbs that match BreadcrumbList. Render the example with semantic table headers and a horizontally scrollable container if needed on narrow screens.
  
  Emit structured_data as JSON-LD in the page HTML. Merge nodes by @id and reuse the existing WebSite #website, Person #person, and glossary #terms identifiers. Keep the other terms in the collection. Keep the DefinedTerm description identical to the opening paragraph and use object-prioritization as termCode. Use actual publication metadata if the site maintains dates.
  
  Add the page to the glossary index and XML sitemap. Generate glossary Previous and Next links using the existing ordering rules. Publish the four new OOUX articles together so their cross-links resolve. Check the referenced Nested Object Matrix and Object Guide routes from OOUX batch 2. Publish those entries first or in the same release if they are still pending. Once the destination is available, add a contextual link labeled Object Prioritization from /glossary/orca-framework.html, /glossary/object-mapping.html, /glossary/structural-navigation-model.html where the term or its purpose is discussed. Preserve those pages' URLs and metadata. Deduplicate any existing links to the new term.
  
  Check for a route conflict before creating the entry. Verify HTTP 200, the rendered article and direct-load HTML, self-canonical, index and sitemap inclusion, links, and mobile table behavior. Use the existing prerender path where supported. Check the graph with Schema.org Validator and the breadcrumb with Google's Rich Results Test. Follow the project deployment workflow and verify the live result after deployment.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/object-prioritization.html#webpage",
        "url": "https://lexkonovalov.com/glossary/object-prioritization.html",
        "name": "Object Prioritization in OOUX | Product Design Glossary",
        "description": "Learn how ORCA teams choose which objects a release needs and which deserve prominent access. See a worked example for a travel operations tool.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/object-prioritization.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/object-prioritization.html#breadcrumbs"
        },
        "citation": [
          "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
          "https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e",
          "https://ooux.com/offerings/fourfails"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/object-prioritization.html#term",
        "name": "Object Prioritization",
        "termCode": "object-prioritization",
        "description": "Object prioritization is the ORCA activity of deciding which objects a release needs and how prominently people should encounter them. It helps teams narrow the scope of an object model and choose how users enter it before designing menus and screens.",
        "url": "https://lexkonovalov.com/glossary/object-prioritization.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/object-prioritization.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/object-prioritization.html#breadcrumbs",
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
            "name": "Object Prioritization",
            "item": "https://lexkonovalov.com/glossary/object-prioritization.html"
          }
        ]
      }
    ]
  }
---

# Object Prioritization

Object prioritization is the ORCA activity of deciding which objects a release needs and how prominently people should encounter them. It helps teams narrow the scope of an object model and choose how users enter it before designing menus and screens.

## What are you prioritizing?

Release scope and navigation prominence are separate decisions. A Booking may be essential to the first release while agents can reach it through a Trip and search. The team can give Bookings a main navigation entry later if agents regularly need to work across trips.

Consider what people need to complete the release’s main tasks, how often they need to find the object on its own, and what other objects or actions depend on it. Use work observations and examples from the [object map](/glossary/object-mapping.html) to make the decision concrete.

## Example of prioritizing objects for a first release

Suppose a travel operations team starts with one goal: let agents find a trip and manage its bookings.

| Candidate | Release decision | How people reach it |
|---|---|---|
| Trip | Include it as the starting point for managing travel. | Main navigation and search. |
| Booking | Include it so agents can track supplier responses and request cancellation. | Trip details and search by booking reference. |
| Traveler | Keep it as a shared record so agents can recognize the person across trips. | From a trip’s traveler list. |
| Supplier | Show the supplier name as booking information. Defer separate supplier profiles until agents need to manage them. | In booking details. |

The supplier decision reduces the release scope to the information agents use to identify a booking. If agents later need to update supplier contacts or see all bookings for a supplier, revisit the model.

## How do you check your decisions?

Walk through a routine task and an exception. In this example, an agent may receive a supplier message with only a booking reference. Check that search gets them to the booking and that the booking links back to the right trip when they have access.

When you combine, defer, or simplify an object, review its relationships, actions, and attributes. Decide which information or behavior the release still needs and where it belongs. Record the evidence that would change your decision, such as agents repeatedly needing a queue of bookings across trips.

## Related terms

- [ORCA Framework](/glossary/orca-framework.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Object Guide](/glossary/object-guide.html)
- [Structural Navigation Model](/glossary/structural-navigation-model.html)

## Sources

- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [Prioritizing Prioritization for Product Designers, Sophia V. Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)
- [Designing With ORCA, OOUX](https://ooux.com/offerings/fourfails)
