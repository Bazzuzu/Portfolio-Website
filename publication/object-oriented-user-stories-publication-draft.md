---
url: "https://lexkonovalov.com/glossary/object-oriented-user-stories.html"
title: "Object-Oriented User Stories: ORCA Requirements and Example"
description: "Turn a CTA Matrix entry into an object-oriented user story with a clear actor, object, motivation, conditions, and testable outcomes in a booking example."
canonical: "https://lexkonovalov.com/glossary/object-oriented-user-stories.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Object-Oriented User Stories: ORCA Requirements and Example", "og:description": "Turn a CTA Matrix entry into an object-oriented user story with a clear actor, object, motivation, conditions, and testable outcomes in a booking example.", "og:url": "https://lexkonovalov.com/glossary/object-oriented-user-stories.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/object-oriented-user-stories.html through the existing term template and source of truth. Check for a route conflict before creating it; preserve an equivalent existing route if one is discovered and update references consistently. Register Object-Oriented User Stories in UX & Product Architecture. Use existing term-status conventions, including Proprietary / Framework-Specific where appropriate for an ORCA-specific method. Refresh derived counts and glossary Previous/Next navigation. Render only the Markdown body after the closing front-matter delimiter as the article; front matter is implementation data.
  
  Apply the exact SEO title, description, canonical, language, and Open Graph fields. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical and structured-data URLs. Reuse the existing page styling and one visible H1.
  
  Emit the entire structured_data value below in a script of type application/ld+json. Merge by @id with existing markup: reuse #webpage, #term, #breadcrumbs, and the shared glossary #terms node. Preserve domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve every other term in the DefinedTermSet. Use object-oriented-user-stories as termCode and keep the term description identical to the visible opening paragraph. Populate dates only from actual publication history. Do not add FAQPage or HowTo markup.
  
  Render visible breadcrumbs matching BreadcrumbList. Preserve all supplied contextual links, related terms, and sources. Tables need semantic header cells and usable narrow-screen behavior. Publish the twelve OOUX expansion articles together, or publish linked destinations first, so their cross-links resolve. Add one contextual inbound link from each of these existing pages where the topic is discussed: /glossary/cta-matrix.html, /glossary/orca-framework.html, /glossary/state-transition-matrix.html. Preserve those pages' URLs, metadata, and existing links; deduplicate equivalent links.
  
  Add the canonical URL to the glossary index and XML sitemap. Use the actual deployment date for sitemap lastmod if maintained. Check HTTP 200, direct page loads, initial server-returned HTML, rendered content, metadata, links, and JSON-LD. Use the site's existing static generation or prerendering path where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing site build. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Follow the project's authorized deployment workflow, verify the published result, and report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/object-oriented-user-stories.html#webpage",
        "url": "https://lexkonovalov.com/glossary/object-oriented-user-stories.html",
        "name": "Object-Oriented User Stories: ORCA Requirements and Example",
        "description": "Turn a CTA Matrix entry into an object-oriented user story with a clear actor, object, motivation, conditions, and testable outcomes in a booking example.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/object-oriented-user-stories.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/object-oriented-user-stories.html#breadcrumbs"
        },
        "citation": [
          "https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/",
          "https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/object-oriented-user-stories.html#term",
        "name": "Object-Oriented User Stories",
        "termCode": "object-oriented-user-stories",
        "description": "Object-oriented user stories describe what a particular actor needs to do to an object, why the action matters, and when it is appropriate. In ORCA, teams develop them from CTA Matrix entries during the Requirements round.",
        "url": "https://lexkonovalov.com/glossary/object-oriented-user-stories.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/object-oriented-user-stories.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/object-oriented-user-stories.html#breadcrumbs",
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
            "name": "Object-Oriented User Stories",
            "item": "https://lexkonovalov.com/glossary/object-oriented-user-stories.html"
          }
        ]
      }
    ]
  }
---

# Object-Oriented User Stories

Object-oriented user stories describe what a particular actor needs to do to an object, why the action matters, and when it is appropriate. In ORCA, teams develop them from CTA Matrix entries during the Requirements round.

The matrix supplies an initial actor, action, and object. The story adds motivation and conditions so the team can design the behavior and assess whether it works. This is a way to develop requirements, without prescribing one mandatory sentence format.

## A practical story structure

Record the actor, action, target object, purpose, and conditions. Then describe the result and relevant exceptions.

A short “As a … I want … so that …” sentence can introduce the need. Supporting requirements capture details that would make that sentence difficult to read.

## Example: requesting a booking cancellation

An illustrative CTA Matrix gives an assigned agent the action Request cancellation on a Booking.

The story could read:

> As the agent assigned to a trip, I need to request cancellation of an eligible confirmed booking when the traveler changes plans, so I can start the supplier's cancellation process and track its response.

The team agrees these example conditions and outcomes:

| Case | Expected behavior |
|---|---|
| Agent has access; booking is Confirmed and eligible | Review the target booking and submit the cancellation request. |
| Supplier accepts the request for processing | Show Cancellation pending and a request reference. |
| Supplier later confirms cancellation | Update the booking to Canceled. |
| Booking is no longer eligible | Explain the current restriction and offer the appropriate next step. |
| Cancellation is already pending | Show the existing request instead of creating a duplicate. |
| Submission times out | Check whether the request exists before offering a retry. |

Cancellation pending is an intermediate state. The interface must not describe the booking as canceled before the supplier confirms that outcome.

## Review the story across entry points

Try the action from a booking opened through its trip and through search. Check that both routes identify the same record and apply the same rules.

Use a [state transition matrix](/glossary/state-transition-matrix.html) when the lifecycle needs more detail. Confirm permissions with the implementation team: the service must enforce them when the request runs.

Review stories with the people doing the work. A complete template can still describe an unnecessary action or misunderstand the reason someone needs it.

## Related terms

- [CTA Matrix](/glossary/cta-matrix.html)
- [ORCA Framework](/glossary/orca-framework.html)
- [State Transition Matrix](/glossary/state-transition-matrix.html)
- [CTA Prioritization](/glossary/cta-prioritization.html)

## Sources

- [Sophia Prater: Object-Oriented UX — InfoQ interview](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)
- [Sophia V. Prater: Prioritizing Prioritization for Product Designers](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)
