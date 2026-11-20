---
url: "https://lexkonovalov.com/glossary/object-inheritance-ooux.html"
title: "Object Inheritance in OOUX: Types, Subtypes, and Examples"
description: "Understand inheritance in an OOUX model, distinguish subtypes from states and related objects, and assess shared and specialized booking information."
canonical: "https://lexkonovalov.com/glossary/object-inheritance-ooux.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Object Inheritance in OOUX: Types, Subtypes, and Examples", "og:description": "Understand inheritance in an OOUX model, distinguish subtypes from states and related objects, and assess shared and specialized booking information.", "og:url": "https://lexkonovalov.com/glossary/object-inheritance-ooux.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/object-inheritance-ooux.html through the existing term template and source of truth. Check for a route conflict before creating it; preserve an equivalent existing route if one is discovered and update references consistently. Register Object Inheritance in OOUX in UX & Product Architecture. Use existing term-status conventions, including Proprietary / Framework-Specific where appropriate for an ORCA-specific method. Refresh derived counts and glossary Previous/Next navigation. Render only the Markdown body after the closing front-matter delimiter as the article; front matter is implementation data.
  
  Apply the exact SEO title, description, canonical, language, and Open Graph fields. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical and structured-data URLs. Reuse the existing page styling and one visible H1.
  
  Emit the entire structured_data value below in a script of type application/ld+json. Merge by @id with existing markup: reuse #webpage, #term, #breadcrumbs, and the shared glossary #terms node. Preserve domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve every other term in the DefinedTermSet. Use object-inheritance-ooux as termCode and keep the term description identical to the visible opening paragraph. Populate dates only from actual publication history. Do not add FAQPage or HowTo markup.
  
  Render visible breadcrumbs matching BreadcrumbList. Preserve all supplied contextual links, related terms, and sources. Tables need semantic header cells and usable narrow-screen behavior. Publish the twelve OOUX expansion articles together, or publish linked destinations first, so their cross-links resolve. Add one contextual inbound link from each of these existing pages where the topic is discussed: /glossary/object-guide.html, /glossary/domain-context-modeling.html, /glossary/tree-systems-ooux.html. Preserve those pages' URLs, metadata, and existing links; deduplicate equivalent links.
  
  Add the canonical URL to the glossary index and XML sitemap. Use the actual deployment date for sitemap lastmod if maintained. Check HTTP 200, direct page loads, initial server-returned HTML, rendered content, metadata, links, and JSON-LD. Use the site's existing static generation or prerendering path where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing site build. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Follow the project's authorized deployment workflow, verify the published result, and report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/object-inheritance-ooux.html#webpage",
        "url": "https://lexkonovalov.com/glossary/object-inheritance-ooux.html",
        "name": "Object Inheritance in OOUX: Types, Subtypes, and Examples",
        "description": "Understand inheritance in an OOUX model, distinguish subtypes from states and related objects, and assess shared and specialized booking information.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/object-inheritance-ooux.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/object-inheritance-ooux.html#breadcrumbs"
        },
        "citation": [
          "https://ooux.com/selfpacedoouxmasterclass"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/object-inheritance-ooux.html#term",
        "name": "Object Inheritance in OOUX",
        "termCode": "object-inheritance-ooux",
        "description": "Object inheritance in OOUX models shared structure or capabilities in a general object type and more specific subtypes. It helps teams reason about what related types have in common and which distinctions users need the product to preserve.",
        "url": "https://lexkonovalov.com/glossary/object-inheritance-ooux.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/object-inheritance-ooux.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/object-inheritance-ooux.html#breadcrumbs",
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
            "name": "Object Inheritance in OOUX",
            "item": "https://lexkonovalov.com/glossary/object-inheritance-ooux.html"
          }
        ]
      }
    ]
  }
---

# Object Inheritance in OOUX

Object inheritance in OOUX models shared structure or capabilities in a general object type and more specific subtypes. It helps teams reason about what related types have in common and which distinctions users need the product to preserve.

This is a conceptual design decision. It does not require a particular programming language, class hierarchy, or database layout.

## Example: different kinds of Booking

An illustrative travel product treats Flight Booking and Hotel Booking as kinds of Booking.

| Shared information | Flight Booking detail | Hotel Booking detail |
|---|---|---|
| Booking reference | Airline booking locator | Property confirmation number. |
| Current status | References to booked flight segments | Check-in and check-out dates. |
| Linked trip | Flight-specific fare conditions | Accommodation-specific cancellation conditions. |

The general type gives the team a place to discuss common identity and behavior. The specialized types capture meaningful differences in information and work.

The table is a proposed product model. Confirm it against actual tasks and supplier behavior. Similar labels do not guarantee that two types follow the same confirmation or cancellation process.

## Subtype, state, attribute, or relationship?

These distinctions answer different questions:

- A subtype expresses a more specific kind of thing.
- A state describes a stage in an object's lifecycle.
- An attribute describes a property of the object.
- A relationship connects it to another object.

Confirmed and Canceled can be states of the same Booking rather than separate subtypes. Refundable may be an attribute or a rule derived from fare conditions. Traveler is a related object with its own identity.

A [Tree System](/glossary/tree-systems-ooux.html) connects forms that become more specific in context. Do not assume every parent-child relationship in that pattern is subtype inheritance.

## When is a subtype useful?

Investigate whether people recognize a stable distinction and whether it changes the object's structure, actions, or rules. Compare representative records and tasks before committing to the split.

If the difference is a single changeable value, an attribute may describe it adequately. If responsibilities differ but the object remains the same, role-based permissions may be sufficient.

## How to validate the model

Ask users to identify each record and perform equivalent tasks across types. Review shared labels and specialized fields with domain experts.

Check that shared components accommodate the differences without concealing essential information or making one type behave incorrectly.

## Related terms

- [Object Guide](/glossary/object-guide.html)
- [Object Attributes in OOUX](/glossary/object-attributes-ooux.html)
- [Tree Systems in OOUX](/glossary/tree-systems-ooux.html)
- [State Transition Matrix](/glossary/state-transition-matrix.html)

## Sources

- [OOUX Masterclass: Inheritance](https://ooux.com/selfpacedoouxmasterclass)
