---
url: "https://lexkonovalov.com/glossary/content-prototyping.html"
title: "Content Prototyping: Test an Object Model with Realistic Data"
description: "Use content prototyping to test object types, fields, and relationships with realistic records before detailed UI work, including a travel operations example."
canonical: "https://lexkonovalov.com/glossary/content-prototyping.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Content Prototyping: Test an Object Model with Realistic Data", "og:description": "Use content prototyping to test object types, fields, and relationships with realistic records before detailed UI work, including a travel operations example.", "og:url": "https://lexkonovalov.com/glossary/content-prototyping.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/content-prototyping.html through the existing term template and source of truth. Check for a route conflict before creating it; preserve an equivalent existing route if one is discovered and update references consistently. Register Content Prototyping in UX & Product Architecture. Use existing term-status conventions, including Proprietary / Framework-Specific where appropriate for an ORCA-specific method. Refresh derived counts and glossary Previous/Next navigation. Render only the Markdown body after the closing front-matter delimiter as the article; front matter is implementation data.
  
  Apply the exact SEO title, description, canonical, language, and Open Graph fields. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical and structured-data URLs. Reuse the existing page styling and one visible H1.
  
  Emit the entire structured_data value below in a script of type application/ld+json. Merge by @id with existing markup: reuse #webpage, #term, #breadcrumbs, and the shared glossary #terms node. Preserve domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve every other term in the DefinedTermSet. Use content-prototyping as termCode and keep the term description identical to the visible opening paragraph. Populate dates only from actual publication history. Do not add FAQPage or HowTo markup.
  
  Render visible breadcrumbs matching BreadcrumbList. Preserve all supplied contextual links, related terms, and sources. Tables need semantic header cells and usable narrow-screen behavior. Publish the twelve OOUX expansion articles together, or publish linked destinations first, so their cross-links resolve. Add one contextual inbound link from each of these existing pages where the topic is discussed: /glossary/content-modeling.html, /glossary/object-mapping.html, /glossary/tree-systems-ooux.html. Preserve those pages' URLs, metadata, and existing links; deduplicate equivalent links.
  
  Add the canonical URL to the glossary index and XML sitemap. Use the actual deployment date for sitemap lastmod if maintained. Check HTTP 200, direct page loads, initial server-returned HTML, rendered content, metadata, links, and JSON-LD. Use the site's existing static generation or prerendering path where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing site build. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Follow the project's authorized deployment workflow, verify the published result, and report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/content-prototyping.html#webpage",
        "url": "https://lexkonovalov.com/glossary/content-prototyping.html",
        "name": "Content Prototyping: Test an Object Model with Realistic Data",
        "description": "Use content prototyping to test object types, fields, and relationships with realistic records before detailed UI work, including a travel operations example.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/content-prototyping.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/content-prototyping.html#breadcrumbs"
        },
        "citation": [
          "https://ooux.com/selfpacedoouxmasterclass",
          "https://www.contentful.com/help/content-models/content-modelling-basics/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/content-prototyping.html#term",
        "name": "Content Prototyping",
        "termCode": "content-prototyping",
        "description": "Content prototyping tests a proposed content or object model by creating representative records and using them in realistic tasks. It helps teams discover missing fields, unclear relationships, and awkward authoring rules before investing in detailed interface design.",
        "url": "https://lexkonovalov.com/glossary/content-prototyping.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/content-prototyping.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/content-prototyping.html#breadcrumbs",
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
            "name": "Content Prototyping",
            "item": "https://lexkonovalov.com/glossary/content-prototyping.html"
          }
        ]
      }
    ]
  }
---

# Content Prototyping

Content prototyping tests a proposed content or object model by creating representative records and using them in realistic tasks. It helps teams discover missing fields, unclear relationships, and awkward authoring rules before investing in detailed interface design.

In OOUX, a content prototype can make an object map concrete. A spreadsheet, linked database, or simple content-management setup can be sufficient when it supports the questions being tested.

## What are you testing?

The model describes types, fields, and connections. A content prototype populates that structure with instances and examines whether people can create, maintain, and use them.

It can reveal that an apparently simple “status” field contains several different meanings, or that a shared value has been copied into records that need separate ownership.

## Example: populating a travel operations model

An illustrative prototype contains these records:

| Record | Representative content | Question to test |
|---|---|---|
| Trip T-104 | Two travelers and two bookings | Can staff identify the services and people associated with the trip? |
| Booking B-52 | Confirmed, with a supplier confirmation number | Can staff find the information needed to investigate it? |
| Booking B-53 | Awaiting confirmation, with no supplier confirmation number yet | Do required-field rules permit this valid state? |
| Traveler record | A name longer than the usual display examples | Can the same person be recognized across records and views? |

Create more than one record per type where variation matters. Add an empty trip, several related bookings, and a relevant exception.

Use fictional or appropriately redacted content. Preserve the structural characteristics needed for the test.

## A lightweight process

1. Define the questions the prototype must answer.
2. Populate fields and references with representative examples.
3. Ask domain users to create, find, update, and explain records.
4. Record missing information, ambiguous labels, and failed rules.
5. Revise the model and repeat the affected task.

Keep unresolved rules visible. A successful demonstration using only ideal records can hide the cases the model most needs to support.

## Content prototype or interface prototype?

A content prototype primarily tests structure, content, and authoring. An interactive prototype can test placement, navigation, and behavior. They can be combined as the design develops.

A structurally valid record does not establish that a finished screen is usable. Use [OOUX prototyping and testing](/glossary/ooux-prototyping-and-testing.html) to examine how people recognize objects and act on them in the interface.

## Related terms

- [Content Modeling](/glossary/content-modeling.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Object Attributes in OOUX](/glossary/object-attributes-ooux.html)
- [OOUX Prototyping and Testing](/glossary/ooux-prototyping-and-testing.html)

- [AI Prototyping](/glossary/ai-prototyping.html)

## Sources

- [OOUX Masterclass: Content Prototyping](https://ooux.com/selfpacedoouxmasterclass)
- [Contentful: Content Modeling Basics](https://www.contentful.com/help/content-models/content-modelling-basics/)
