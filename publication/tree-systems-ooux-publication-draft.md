---
url: "https://lexkonovalov.com/glossary/tree-systems-ooux.html"
title: "Tree Systems in OOUX: Roots, Branches, and Specific Objects"
description: "Understand OOUX Tree Systems through a course-to-session example, distinguish them from inheritance, and decide where shared and local information belongs."
canonical: "https://lexkonovalov.com/glossary/tree-systems-ooux.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Tree Systems in OOUX: Roots, Branches, and Specific Objects", "og:description": "Understand OOUX Tree Systems through a course-to-session example, distinguish them from inheritance, and decide where shared and local information belongs.", "og:url": "https://lexkonovalov.com/glossary/tree-systems-ooux.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/tree-systems-ooux.html through the existing term template and source of truth. Check for a route conflict before creating it; preserve an equivalent existing route if one is discovered and update references consistently. Register Tree Systems in OOUX in UX & Product Architecture. Use existing term-status conventions, including Proprietary / Framework-Specific where appropriate for an ORCA-specific method. Refresh derived counts and glossary Previous/Next navigation. Render only the Markdown body after the closing front-matter delimiter as the article; front matter is implementation data.
  
  Apply the exact SEO title, description, canonical, language, and Open Graph fields. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical and structured-data URLs. Reuse the existing page styling and one visible H1.
  
  Emit the entire structured_data value below in a script of type application/ld+json. Merge by @id with existing markup: reuse #webpage, #term, #breadcrumbs, and the shared glossary #terms node. Preserve domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve every other term in the DefinedTermSet. Use tree-systems-ooux as termCode and keep the term description identical to the visible opening paragraph. Populate dates only from actual publication history. Do not add FAQPage or HowTo markup.
  
  Render visible breadcrumbs matching BreadcrumbList. Preserve all supplied contextual links, related terms, and sources. Tables need semantic header cells and usable narrow-screen behavior. Publish the twelve OOUX expansion articles together, or publish linked destinations first, so their cross-links resolve. Add one contextual inbound link from each of these existing pages where the topic is discussed: /glossary/junction-object.html, /glossary/object-mapping.html, /glossary/conceptual-schema.html. Preserve those pages' URLs, metadata, and existing links; deduplicate equivalent links.
  
  Add the canonical URL to the glossary index and XML sitemap. Use the actual deployment date for sitemap lastmod if maintained. Check HTTP 200, direct page loads, initial server-returned HTML, rendered content, metadata, links, and JSON-LD. Use the site's existing static generation or prerendering path where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing site build. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Follow the project's authorized deployment workflow, verify the published result, and report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/tree-systems-ooux.html#webpage",
        "url": "https://lexkonovalov.com/glossary/tree-systems-ooux.html",
        "name": "Tree Systems in OOUX: Roots, Branches, and Specific Objects",
        "description": "Understand OOUX Tree Systems through a course-to-session example, distinguish them from inheritance, and decide where shared and local information belongs.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/tree-systems-ooux.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/tree-systems-ooux.html#breadcrumbs"
        },
        "citation": [
          "https://sophiavux.medium.com/wrangling-ux-complexity-with-tree-systems-47447cf568d9",
          "https://ooux.com/selfpacedoouxmasterclass"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/tree-systems-ooux.html#term",
        "name": "Tree Systems in OOUX",
        "termCode": "tree-systems-ooux",
        "description": "A Tree System in OOUX is a pattern of related object types that move from a general concept toward more specific, contextual forms. It includes a root, a more specific “fruit” object, and sometimes intermediate “branch” objects.",
        "url": "https://lexkonovalov.com/glossary/tree-systems-ooux.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/tree-systems-ooux.html#webpage"
        },
        "alternateName": [
          "OOUX tree systems"
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
        "@id": "https://lexkonovalov.com/glossary/tree-systems-ooux.html#breadcrumbs",
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
            "name": "Tree Systems in OOUX",
            "item": "https://lexkonovalov.com/glossary/tree-systems-ooux.html"
          }
        ]
      }
    ]
  }
---

# Tree Systems in OOUX

A Tree System in OOUX is a pattern of related object types that move from a general concept toward more specific, contextual forms. It includes a root, a more specific “fruit” object, and sometimes intermediate “branch” objects.

The term comes from the OOUX community. It describes a modeling pattern, with roots and fruit used as explanatory metaphors.

## Example: a course and its scheduled sessions

Consider an illustrative training product:

| Object type | Example instance | Information owned at this level |
|---|---|---|
| Course | First Aid Basics | Shared learning objectives and standard description. |
| Course Offering | First Aid Basics at East Center | Local delivery details and contact information. |
| Scheduled Session | That offering on June 12 at 10 a.m. | Start time, capacity, and remaining places. |

A learner can read the course description before choosing a location and session. Registering requires a specific Scheduled Session.

Each row describes a different object type with its own instances. A scheduled session is not simply another Course instance. Its structure and available actions differ.

## Where should information belong?

Store shared learning objectives on Course and reference them where needed. Store session capacity on Scheduled Session because it applies to that occurrence.

For this product, the team might let central staff edit the standard description and local staff manage session capacity. Those permissions are example decisions to validate.

When shared information changes, decide how it should appear in existing offerings and historical sessions. Some records may need a snapshot rather than the latest description.

## Tree Systems, hierarchy, and inheritance

A hierarchy alone does not establish a Tree System. A category containing articles, each with comments, does not automatically express increasing specificity of one concept.

Inheritance concerns types sharing a common structure or behavior. A Tree System connects contextual forms that can have different information and actions. A [junction object](/glossary/junction-object.html) may participate in the pattern when a connection needs its own attributes.

## How to check the model

Ask users which thing they are viewing, selecting, editing, and registering for. Test two locations and several sessions for the same course.

Check that an edit to one session's capacity affects the intended record, while shared course information remains consistent wherever the product is meant to reuse it.

## Related terms

- [Junction Object](/glossary/junction-object.html)
- [Object Inheritance in OOUX](/glossary/object-inheritance-ooux.html)
- [Object Attributes in OOUX](/glossary/object-attributes-ooux.html)
- [Conceptual Schema](/glossary/conceptual-schema.html)

## Sources

- [Sophia V. Prater: Wrangling UX Complexity with Tree Systems](https://sophiavux.medium.com/wrangling-ux-complexity-with-tree-systems-47447cf568d9)
- [OOUX Masterclass: Tree Systems](https://ooux.com/selfpacedoouxmasterclass)
