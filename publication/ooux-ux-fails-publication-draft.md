---
url: "https://lexkonovalov.com/glossary/ooux-ux-fails.html"
title: "Four UX Fails in OOUX | Product Design Glossary"
description: "Review an interface for four OOUX problems: masked, shape-shifting, broken, and isolated objects. See practical examples and fixes for each."
canonical: "https://lexkonovalov.com/glossary/ooux-ux-fails.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Four UX Fails in OOUX | Product Design Glossary", "og:description": "Review an interface for four OOUX problems: masked, shape-shifting, broken, and isolated objects. See practical examples and fixes for each.", "og:url": "https://lexkonovalov.com/glossary/ooux-ux-fails.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/ooux-ux-fails.html using the existing term template and source of truth. Register Four UX Fails in OOUX in the UX & Product Architecture category. Use the existing Proprietary / Framework-Specific status value if the glossary requires a status for ORCA methods. Follow the index's existing sort and category conventions. Refresh any derived term counts. Render the Markdown body after the front matter as the article.
  
  Apply the supplied title, description, canonical, language, and Open Graph fields. Synchronize existing Twitter fields. Use one visible H1 and visible breadcrumbs that match BreadcrumbList. Render the example with semantic table headers and a horizontally scrollable container if needed on narrow screens.
  
  Emit structured_data as JSON-LD in the page HTML. Merge nodes by @id and reuse the existing WebSite #website, Person #person, and glossary #terms identifiers. Keep the other terms in the collection. Keep the DefinedTerm description identical to the opening paragraph and use ooux-ux-fails as termCode. Use actual publication metadata if the site maintains dates.
  
  Add the page to the glossary index and XML sitemap. Generate glossary Previous and Next links using the existing ordering rules. Publish the four new OOUX articles together so their cross-links resolve. Check the referenced Nested Object Matrix and Object Guide routes from OOUX batch 2. Publish those entries first or in the same release if they are still pending. Once the destination is available, add a contextual link labeled Four UX Fails in OOUX from /glossary/object-oriented-ux.html, /glossary/orca-framework.html, /glossary/object-mapping.html where the term or its purpose is discussed. Preserve those pages' URLs and metadata. Deduplicate any existing links to the new term.
  
  Check for a route conflict before creating the entry. Verify HTTP 200, the rendered article and direct-load HTML, self-canonical, index and sitemap inclusion, links, and mobile table behavior. Use the existing prerender path where supported. Check the graph with Schema.org Validator and the breadcrumb with Google's Rich Results Test. Follow the project deployment workflow and verify the live result after deployment.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/ooux-ux-fails.html#webpage",
        "url": "https://lexkonovalov.com/glossary/ooux-ux-fails.html",
        "name": "Four UX Fails in OOUX | Product Design Glossary",
        "description": "Review an interface for four OOUX problems: masked, shape-shifting, broken, and isolated objects. See practical examples and fixes for each.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/ooux-ux-fails.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/ooux-ux-fails.html#breadcrumbs"
        },
        "citation": [
          "https://speakerdeck.com/sophiavux/the-life-changing-magic-of-ooux-tidying-up",
          "https://ooux.com/offerings/fourfails"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/ooux-ux-fails.html#term",
        "name": "Four UX Fails in OOUX",
        "termCode": "ooux-ux-fails",
        "description": "The four UX fails in Object-Oriented UX (OOUX) are masked, shape-shifting, broken, and isolated objects. Sophia Prater uses these patterns to diagnose why people may struggle to recognize objects, understand them across views, find their actions, or reach related records.",
        "url": "https://lexkonovalov.com/glossary/ooux-ux-fails.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/ooux-ux-fails.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/ooux-ux-fails.html#breadcrumbs",
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
            "name": "Four UX Fails in OOUX",
            "item": "https://lexkonovalov.com/glossary/ooux-ux-fails.html"
          }
        ]
      }
    ]
  }
---

# Four UX Fails in OOUX

The four UX fails in Object-Oriented UX (OOUX) are masked, shape-shifting, broken, and isolated objects. Sophia Prater uses these patterns to diagnose why people may struggle to recognize objects, understand them across views, find their actions, or reach related records.

## How do you spot the four problems?

| Problem | Example in a travel operations tool | What to change |
|---|---|---|
| Masked object | A proposed Offer and a supplier Booking both appear as “Trip item,” with no indication of which is which. | Give each type a recognizable label and show the details people use to tell them apart. |
| Shape-shifting object | Booking B-52 appears in search with its reference and status, then appears in the trip as an unlabeled date with no visible reference. | Keep identifying cues consistent across views. Choose how much detail each view needs. |
| Broken object | The booking’s status is in one workspace, its fare rules in another, and the cancellation action in a separate admin menu. | Bring the relevant information and actions together around the booking, with access appropriate to the role. |
| Isolated object | An agent opens a booking from search and must start a new search to find its trip, even though they can view both records. | Add a contextual link from the booking to its trip where the agent needs it. |

If the agent recognizes Booking B-52 but cannot find “Request cancellation,” check for a broken object. If they can act on the booking but cannot reach its trip, check for an isolated object.

## How do you run a review?

Pick one object and follow it through a task. For Booking B-52, open the record from search and from its trip. Ask the agent to identify it, check whether cancellation is available, and find the related trip. Observe where they pause, look elsewhere, or mistake one record for another.

Use the [object map](/glossary/object-mapping.html) to check which identifying fields belong on the record, where its actions should appear, and which relationships warrant a link. Fix the issue that interrupts the task first. A compact search result and a full detail page can look different while preserving the cues that help the agent recognize the booking.

## Related terms

- [Object-Oriented UX (OOUX)](/glossary/object-oriented-ux.html)
- [ORCA Framework](/glossary/orca-framework.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Structural Navigation Model](/glossary/structural-navigation-model.html)

## Sources

- [The Life-changing Magic of OOUX Tidying Up, Sophia V. Prater](https://speakerdeck.com/sophiavux/the-life-changing-magic-of-ooux-tidying-up)
- [Designing With ORCA, OOUX](https://ooux.com/offerings/fourfails)
