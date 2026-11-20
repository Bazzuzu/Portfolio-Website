---
url: "https://lexkonovalov.com/glossary/attribute-prioritization.html"
title: "Attribute Prioritization in OOUX: Choosing What to Show"
description: "Prioritize object attributes for search results, lists, and detail views, with a booking example that balances identification, decisions, and task context."
canonical: "https://lexkonovalov.com/glossary/attribute-prioritization.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Attribute Prioritization in OOUX: Choosing What to Show", "og:description": "Prioritize object attributes for search results, lists, and detail views, with a booking example that balances identification, decisions, and task context.", "og:url": "https://lexkonovalov.com/glossary/attribute-prioritization.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/attribute-prioritization.html through the existing term template and source of truth. Check for a route conflict before creating it; preserve an equivalent existing route if one is discovered and update references consistently. Register Attribute Prioritization in UX & Product Architecture. Use existing term-status conventions, including Proprietary / Framework-Specific where appropriate for an ORCA-specific method. Refresh derived counts and glossary Previous/Next navigation. Render only the Markdown body after the closing front-matter delimiter as the article; front matter is implementation data.
  
  Apply the exact SEO title, description, canonical, language, and Open Graph fields. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical and structured-data URLs. Reuse the existing page styling and one visible H1.
  
  Emit the entire structured_data value below in a script of type application/ld+json. Merge by @id with existing markup: reuse #webpage, #term, #breadcrumbs, and the shared glossary #terms node. Preserve domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve every other term in the DefinedTermSet. Use attribute-prioritization as termCode and keep the term description identical to the visible opening paragraph. Populate dates only from actual publication history. Do not add FAQPage or HowTo markup.
  
  Render visible breadcrumbs matching BreadcrumbList. Preserve all supplied contextual links, related terms, and sources. Tables need semantic header cells and usable narrow-screen behavior. Publish the twelve OOUX expansion articles together, or publish linked destinations first, so their cross-links resolve. Add one contextual inbound link from each of these existing pages where the topic is discussed: /glossary/object-mapping.html, /glossary/object-prioritization.html, /glossary/orca-framework.html. Preserve those pages' URLs, metadata, and existing links; deduplicate equivalent links.
  
  Add the canonical URL to the glossary index and XML sitemap. Use the actual deployment date for sitemap lastmod if maintained. Check HTTP 200, direct page loads, initial server-returned HTML, rendered content, metadata, links, and JSON-LD. Use the site's existing static generation or prerendering path where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing site build. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Follow the project's authorized deployment workflow, verify the published result, and report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/attribute-prioritization.html#webpage",
        "url": "https://lexkonovalov.com/glossary/attribute-prioritization.html",
        "name": "Attribute Prioritization in OOUX: Choosing What to Show",
        "description": "Prioritize object attributes for search results, lists, and detail views, with a booking example that balances identification, decisions, and task context.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/attribute-prioritization.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/attribute-prioritization.html#breadcrumbs"
        },
        "citation": [
          "https://podcasts.apple.com/us/podcast/082-orca-series-12-building-trust-through-attributes/id1531717094?i=1000733396352",
          "https://alistapart.com/article/object-oriented-ux/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/attribute-prioritization.html#term",
        "name": "Attribute Prioritization",
        "termCode": "attribute-prioritization",
        "description": "Attribute prioritization is the ORCA activity of deciding which information about an object matters most for a release and for the views people use. It helps teams choose what to show prominently, what to reveal in detail, and what can wait.",
        "url": "https://lexkonovalov.com/glossary/attribute-prioritization.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/attribute-prioritization.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/attribute-prioritization.html#breadcrumbs",
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
            "name": "Attribute Prioritization",
            "item": "https://lexkonovalov.com/glossary/attribute-prioritization.html"
          }
        ]
      }
    ]
  }
---

# Attribute Prioritization

Attribute prioritization is the ORCA activity of deciding which information about an object matters most for a release and for the views people use. It helps teams choose what to show prominently, what to reveal in detail, and what can wait.

The priority depends on the user's task and context. Information needed to choose a record in search can differ from information needed to edit it or resolve an exception.

## Two decisions to separate

First decide which attributes the product needs to support its intended work. Then decide how prominently to present the supported attributes in each view.

A supplier confirmation number might be essential data even when a compact queue usually shows only a booking reference, status, and service date. Removing it from that queue does not mean removing it from the model.

## Example: prioritizing Booking information

Suppose an agent scans a queue for bookings awaiting supplier confirmation.

| Attribute | Queue treatment | Detail treatment |
|---|---|---|
| Booking reference | Always visible for identification | Same reference in the heading. |
| Status | Visible and filterable | Include relevant status history. |
| Service date | Visible to assess urgency | Show complete dates and times as needed. |
| Supplier confirmation number | Show when relevant to the queue's task | Show when available; explain a meaningful absence. |
| Internal notes | Avoid displaying a long note in every row | Make permitted notes available for investigation. |

This is a task-specific example. A queue for reconciling supplier records could need different fields.

## How to make the decision

Ask which attributes help users identify the object, compare candidates, choose an action, or recognize an exception. Use observed tasks and actual records when discussing tradeoffs with stakeholders.

Check both routine and unusual cases. A rare field may become the most important information during an urgent exception. Decide how users reach it when needed.

Record the reason for a priority and where it applies. This gives future reviewers a basis for changing the design when the workflow changes.

## How to test the result

Give users a realistic queue and a task such as finding the booking that needs attention next. Observe what they inspect and whether important information forces repeated navigation.

Check long values, missing data, narrow screens, and keyboard access. Progressive disclosure should keep necessary information discoverable at the moment it matters.

## Related terms

- [Object Attributes in OOUX](/glossary/object-attributes-ooux.html)
- [Object Prioritization](/glossary/object-prioritization.html)
- [Object Representation](/glossary/object-representation-ooux.html)
- [Progressive Disclosure](/glossary/progressive-disclosure.html)

## Sources

- [The UX Level-Up: Attribute Prioritization with Jake Zukowski](https://podcasts.apple.com/us/podcast/082-orca-series-12-building-trust-through-attributes/id1531717094?i=1000733396352)
- [Sophia V. Prater: Object-Oriented UX](https://alistapart.com/article/object-oriented-ux/)
