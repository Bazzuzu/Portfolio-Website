---
url: "https://lexkonovalov.com/glossary/state-transition-matrix.html"
title: "State Transition Matrix in UX | Product Design Glossary"
description: "See how to build a state transition matrix for UX. A booking example maps current states, events, next states, and the rules that govern user actions."
canonical: "https://lexkonovalov.com/glossary/state-transition-matrix.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "State Transition Matrix in UX | Product Design Glossary", "og:description": "See how to build a state transition matrix for UX. A booking example maps current states, events, next states, and the rules that govern user actions.", "og:url": "https://lexkonovalov.com/glossary/state-transition-matrix.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use state-transition-matrix as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all 4 related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/state-transition-matrix.html#webpage",
        "url": "https://lexkonovalov.com/glossary/state-transition-matrix.html",
        "name": "State Transition Matrix in UX | Product Design Glossary",
        "description": "See how to build a state transition matrix for UX. A booking example maps current states, events, next states, and the rules that govern user actions.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/state-transition-matrix.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/state-transition-matrix.html#breadcrumbs"
        },
        "citation": [
          "https://www.w3.org/TR/scxml/",
          "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/state-transition-matrix.html#term",
        "name": "State Transition Matrix",
        "termCode": "state-transition-matrix",
        "description": "A state transition matrix is a table that shows which events can trigger a transition from each state and what state follows. UX teams use it to design actions, feedback, and recovery paths for objects such as bookings, tickets, and purchase requests.",
        "url": "https://lexkonovalov.com/glossary/state-transition-matrix.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/state-transition-matrix.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/state-transition-matrix.html#breadcrumbs",
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
            "name": "State Transition Matrix",
            "item": "https://lexkonovalov.com/glossary/state-transition-matrix.html"
          }
        ]
      }
    ]
  }
---

# State Transition Matrix

A state transition matrix is a table that shows which events can trigger a transition from each state and what state follows. UX teams use it to design actions, feedback, and recovery paths for objects such as bookings, tickets, and purchase requests.

## How do you read a state transition matrix?

Rows show current states. Columns show events, which can come from a user or an external system. A cell identifies the next state for that combination. When a transition depends on a rule, record the condition, also called a guard.

## Example of a booking state transition matrix

In this example, an agent submits a booking and waits for the supplier to confirm it. Cancellation also requires a supplier response. While cancellation is pending, the agent can see the request status and cannot submit a second request.

| Current state | Submit booking | Confirm booking | Request cancellation | Accept cancellation | Decline cancellation |
|---|---|---|---|---|---|
| Draft | Awaiting confirmation | — | — | — | — |
| Awaiting confirmation | — | Confirmed | — | — | — |
| Confirmed | — | — | Cancellation pending | — | — |
| Cancellation pending | — | — | — | Canceled | Confirmed |
| Canceled | — | — | — | — | — |

A dash means the event has no valid transition in this example. Confirming the booking and accepting or declining cancellation are supplier events. The booking moves out of Draft once a complete submission succeeds. An agent can request cancellation only when their role and the fare rules allow it. If the supplier declines cancellation, restore Confirmed status and show the reason if available.

This example covers the confirmation path and two cancellation outcomes. Extend the model for booking rejection, timeouts, and other cases your product supports.

## How does the matrix inform ORCA actions?

The Calls to Action part of [ORCA](/glossary/orca-framework.html) identifies actions people need. The matrix helps specify how those actions behave at each stage of the object's lifecycle. For example, agents can see “Cancellation pending” in the booking list and open the detail view to check when the request was sent.

Record what users see when an event fails or arrives late. If a booking changed after the agent opened it, refresh its status and explain why the requested action cannot proceed. Use the same rules in list and detail views.

Review the table with design, engineering, and operations. Walk through one routine case, one blocked action, and one delayed response. Add missing transitions or feedback before the workflow is built.

## Related terms

- [Object-Oriented UX](/glossary/object-oriented-ux.html)
- [ORCA Framework](/glossary/orca-framework.html)
- [Operational UX](/glossary/operational-ux.html)
- [Interaction Invariant](/glossary/interaction-invariant.html)

## Sources

- [State Chart XML (SCXML), W3C](https://www.w3.org/TR/scxml/)
- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
