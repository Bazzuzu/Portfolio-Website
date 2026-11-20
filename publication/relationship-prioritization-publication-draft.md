---
url: "https://lexkonovalov.com/glossary/relationship-prioritization.html"
title: "Relationship Prioritization in ORCA: Scope and Navigation"
description: "Decide which object relationships need product support and visible navigation, with a travel example that distinguishes data links from user-facing paths."
canonical: "https://lexkonovalov.com/glossary/relationship-prioritization.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Relationship Prioritization in ORCA: Scope and Navigation", "og:description": "Decide which object relationships need product support and visible navigation, with a travel example that distinguishes data links from user-facing paths.", "og:url": "https://lexkonovalov.com/glossary/relationship-prioritization.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/relationship-prioritization.html through the existing term template and source of truth. Check for a route conflict before creating it; preserve an equivalent existing route if one is discovered and update references consistently. Register Relationship Prioritization in UX & Product Architecture. Use existing term-status conventions, including Proprietary / Framework-Specific where appropriate for an ORCA-specific method. Refresh derived counts and glossary Previous/Next navigation. Render only the Markdown body after the closing front-matter delimiter as the article; front matter is implementation data.
  
  Apply the exact SEO title, description, canonical, language, and Open Graph fields. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical and structured-data URLs. Reuse the existing page styling and one visible H1.
  
  Emit the entire structured_data value below in a script of type application/ld+json. Merge by @id with existing markup: reuse #webpage, #term, #breadcrumbs, and the shared glossary #terms node. Preserve domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve every other term in the DefinedTermSet. Use relationship-prioritization as termCode and keep the term description identical to the visible opening paragraph. Populate dates only from actual publication history. Do not add FAQPage or HowTo markup.
  
  Render visible breadcrumbs matching BreadcrumbList. Preserve all supplied contextual links, related terms, and sources. Tables need semantic header cells and usable narrow-screen behavior. Publish the twelve OOUX expansion articles together, or publish linked destinations first, so their cross-links resolve. Add one contextual inbound link from each of these existing pages where the topic is discussed: /glossary/nested-object-matrix.html, /glossary/structural-navigation-model.html, /glossary/orca-framework.html. Preserve those pages' URLs, metadata, and existing links; deduplicate equivalent links.
  
  Add the canonical URL to the glossary index and XML sitemap. Use the actual deployment date for sitemap lastmod if maintained. Check HTTP 200, direct page loads, initial server-returned HTML, rendered content, metadata, links, and JSON-LD. Use the site's existing static generation or prerendering path where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing site build. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Follow the project's authorized deployment workflow, verify the published result, and report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/relationship-prioritization.html#webpage",
        "url": "https://lexkonovalov.com/glossary/relationship-prioritization.html",
        "name": "Relationship Prioritization in ORCA: Scope and Navigation",
        "description": "Decide which object relationships need product support and visible navigation, with a travel example that distinguishes data links from user-facing paths.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/relationship-prioritization.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/relationship-prioritization.html#breadcrumbs"
        },
        "citation": [
          "https://podcasts.apple.com/us/podcast/077-orca-series-10-from-inheriting-strategy-to-shaping/id1531717094?i=1000723486950",
          "https://ooux.com/offerings/fourfails"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/relationship-prioritization.html#term",
        "name": "Relationship Prioritization",
        "termCode": "relationship-prioritization",
        "description": "Relationship prioritization is the ORCA activity of deciding which connections between objects deserve support in the product and prominence in its interface. It helps teams turn a relationship model into a manageable scope and useful paths through information.",
        "url": "https://lexkonovalov.com/glossary/relationship-prioritization.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/relationship-prioritization.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/relationship-prioritization.html#breadcrumbs",
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
            "name": "Relationship Prioritization",
            "item": "https://lexkonovalov.com/glossary/relationship-prioritization.html"
          }
        ]
      }
    ]
  }
---

# Relationship Prioritization

Relationship prioritization is the ORCA activity of deciding which connections between objects deserve support in the product and prominence in its interface. It helps teams turn a relationship model into a manageable scope and useful paths through information.

A connection can exist in the data model without needing a visible navigation link in every view. Decide what people need to understand, reach, or manage in each context.

## What are you prioritizing?

A [Nested Object Matrix](/glossary/nested-object-matrix.html) helps discover possible connections. Relationship requirements describe how a connection works, including its mechanics and cardinality.

Prioritization asks which capabilities and paths matter for the intended release. A navigation design then determines how those chosen paths appear.

## Example: managing a travel booking

A first release supports agents working on trips and their bookings.

| Connection | Example decision | User need |
|---|---|---|
| Trip to Bookings | Show related bookings and a way to add one | Manage the trip's travel services. |
| Booking to Trip | Provide a contextual route back to the trip | Understand the record after entering through search. |
| Trip to Travelers | Show associated travelers | Verify whom the trip concerns. |
| Traveler to all Trips | Support if cross-trip history is part of the release | Investigate earlier travel without duplicate searches. |
| Booking to Supplier profile | Defer the profile route if supplier management is out of scope | Retain the supplier information needed for the booking. |

Deferring a supplier profile does not remove the need to identify the supplier. Record where that information comes from and how agents use it.

## How to choose

Start with representative tasks and entry points. Evaluate the need in both directions: a person viewing a Trip may need its Bookings, while someone opening a Booking directly needs its Trip context.

Consider related-record volume, permissions, maintenance cost, and what happens when no related record exists. Document deferred capabilities and the evidence that would make them necessary.

Avoid removing a relationship merely because its interface is inconvenient. A required business connection still needs an appropriate representation.

## How to test it

Ask users to complete a routine task and investigate an exception. Start one task from search or a notification.

Observe whether users find the next relevant record, understand where they arrived, and retain enough context to return. Review the result before adding more links.

## Related terms

- [Nested Object Matrix](/glossary/nested-object-matrix.html)
- [ORCA Relationship Requirements](/glossary/orca-relationship-requirements.html)
- [Structural Navigation Model](/glossary/structural-navigation-model.html)
- [Object Prioritization](/glossary/object-prioritization.html)

## Sources

- [The UX Level-Up: Relationship Prioritization with Jake Zukowski](https://podcasts.apple.com/us/podcast/077-orca-series-10-from-inheriting-strategy-to-shaping/id1531717094?i=1000723486950)
- [OOUX: Designing With ORCA](https://ooux.com/offerings/fourfails)
