---
url: "https://lexkonovalov.com/glossary/object-representation-ooux.html"
title: "Object Representation in OOUX: From Models to Interface"
description: "Translate an OOUX object model into recognizable cards, rows, and detail views, with a booking example and checks for actions, labels, and accessibility."
canonical: "https://lexkonovalov.com/glossary/object-representation-ooux.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Object Representation in OOUX: From Models to Interface", "og:description": "Translate an OOUX object model into recognizable cards, rows, and detail views, with a booking example and checks for actions, labels, and accessibility.", "og:url": "https://lexkonovalov.com/glossary/object-representation-ooux.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/object-representation-ooux.html through the existing term template and source of truth. Check for a route conflict before creating it; preserve an equivalent existing route if one is discovered and update references consistently. Register Object Representation in UX & Product Architecture. Use existing term-status conventions, including Proprietary / Framework-Specific where appropriate for an ORCA-specific method. Refresh derived counts and glossary Previous/Next navigation. Render only the Markdown body after the closing front-matter delimiter as the article; front matter is implementation data.
  
  Apply the exact SEO title, description, canonical, language, and Open Graph fields. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical and structured-data URLs. Reuse the existing page styling and one visible H1.
  
  Emit the entire structured_data value below in a script of type application/ld+json. Merge by @id with existing markup: reuse #webpage, #term, #breadcrumbs, and the shared glossary #terms node. Preserve domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve every other term in the DefinedTermSet. Use object-representation-ooux as termCode and keep the term description identical to the visible opening paragraph. Populate dates only from actual publication history. Do not add FAQPage or HowTo markup.
  
  Render visible breadcrumbs matching BreadcrumbList. Preserve all supplied contextual links, related terms, and sources. Tables need semantic header cells and usable narrow-screen behavior. Publish the twelve OOUX expansion articles together, or publish linked destinations first, so their cross-links resolve. Add one contextual inbound link from each of these existing pages where the topic is discussed: /glossary/object-mapping.html, /glossary/ooux-ux-fails.html, /glossary/orca-framework.html. Preserve those pages' URLs, metadata, and existing links; deduplicate equivalent links.
  
  Add the canonical URL to the glossary index and XML sitemap. Use the actual deployment date for sitemap lastmod if maintained. Check HTTP 200, direct page loads, initial server-returned HTML, rendered content, metadata, links, and JSON-LD. Use the site's existing static generation or prerendering path where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing site build. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Follow the project's authorized deployment workflow, verify the published result, and report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/object-representation-ooux.html#webpage",
        "url": "https://lexkonovalov.com/glossary/object-representation-ooux.html",
        "name": "Object Representation in OOUX: From Models to Interface",
        "description": "Translate an OOUX object model into recognizable cards, rows, and detail views, with a booking example and checks for actions, labels, and accessibility.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/object-representation-ooux.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/object-representation-ooux.html#breadcrumbs"
        },
        "citation": [
          "https://ooux.com/offerings/fourfails",
          "https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/object-representation-ooux.html#term",
        "name": "Object Representation",
        "termCode": "object-representation-ooux",
        "description": "Object representation in OOUX is the way an interface makes an object recognizable and usable through its information, visual treatment, relationships, and actions. Examples include a booking row, a traveler card, and a detailed trip view.",
        "url": "https://lexkonovalov.com/glossary/object-representation-ooux.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/object-representation-ooux.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/object-representation-ooux.html#breadcrumbs",
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
            "name": "Object Representation",
            "item": "https://lexkonovalov.com/glossary/object-representation-ooux.html"
          }
        ]
      }
    ]
  }
---

# Object Representation

Object representation in OOUX is the way an interface makes an object recognizable and usable through its information, visual treatment, relationships, and actions. Examples include a booking row, a traveler card, and a detailed trip view.

The object model describes what the object is and how it relates to other things. Representation turns those decisions into something a person can identify and use in a particular context.

## Start with the user's question

Before choosing a layout, identify what someone needs to recognize, compare, inspect, or change. Use prioritized attributes and actions to decide what the representation should support.

A compact row can be appropriate for scanning many bookings. A detailed view can support investigating one booking. Both need enough identifying information for a person to understand which record they are using.

## Example: representing Booking B-52

Suppose Booking B-52 is Confirmed and belongs to Trip T-104.

| Context | Representation decision |
|---|---|
| Search result | Show the booking reference, service date, status, and enough supplier information to choose the match. |
| Trip booking list | Preserve the same identifying cues while making the trip relationship clear. |
| Booking detail | Add relevant conditions, history, permitted actions, and a route to the trip. |
| Cancellation review | Repeat the booking identity and summarize the proposed action and its consequences. |

The cancellation review should make clear that submitting the request begins a process. In this example, an accepted request first becomes Cancellation pending.

## Keep meaningful differences visible

Distinct object types need recognizable labels. An Offer and a Booking should not become indistinguishable simply because they use the same card component.

Variants of the same object can share a component while showing different detail. Use a [Shapeshifter Matrix](/glossary/shapeshifter-matrix.html) to document those differences and their reasons.

Define empty, loading, unavailable, and error states. The absence of data must not accidentally communicate a confirmed result.

## Check behavior and accessibility

Use headings, relationships, control labels, and accessible names that communicate the intended meaning. WCAG's Consistent Identification criterion addresses consistent identification of recurring components with the same functionality; it does not require every object view to have an identical layout.

Test recognition across entry points, including search and direct links. Ask users to identify the record, reach a related object, and find an available action. Review both what the representation communicates and what the interaction actually does.

## Related terms

- [Object Mapping](/glossary/object-mapping.html)
- [Shapeshifter Matrix](/glossary/shapeshifter-matrix.html)
- [Attribute Prioritization](/glossary/attribute-prioritization.html)
- [CTA Prioritization](/glossary/cta-prioritization.html)

## Sources

- [OOUX: Designing With ORCA](https://ooux.com/offerings/fourfails)
- [W3C: Understanding Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html)
