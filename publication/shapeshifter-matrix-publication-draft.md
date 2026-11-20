---
url: "https://lexkonovalov.com/glossary/shapeshifter-matrix.html"
title: "Shapeshifter Matrix in OOUX: Object Variants and Example"
description: "Use a Shapeshifter Matrix to compare an object's views, roles, and states, preserve recognizable cues, and document intentional interface differences."
canonical: "https://lexkonovalov.com/glossary/shapeshifter-matrix.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Shapeshifter Matrix in OOUX: Object Variants and Example", "og:description": "Use a Shapeshifter Matrix to compare an object's views, roles, and states, preserve recognizable cues, and document intentional interface differences.", "og:url": "https://lexkonovalov.com/glossary/shapeshifter-matrix.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/shapeshifter-matrix.html through the existing term template and source of truth. Check for a route conflict before creating it; preserve an equivalent existing route if one is discovered and update references consistently. Register Shapeshifter Matrix in UX & Product Architecture. Use existing term-status conventions, including Proprietary / Framework-Specific where appropriate for an ORCA-specific method. Refresh derived counts and glossary Previous/Next navigation. Render only the Markdown body after the closing front-matter delimiter as the article; front matter is implementation data.
  
  Apply the exact SEO title, description, canonical, language, and Open Graph fields. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical and structured-data URLs. Reuse the existing page styling and one visible H1.
  
  Emit the entire structured_data value below in a script of type application/ld+json. Merge by @id with existing markup: reuse #webpage, #term, #breadcrumbs, and the shared glossary #terms node. Preserve domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve every other term in the DefinedTermSet. Use shapeshifter-matrix as termCode and keep the term description identical to the visible opening paragraph. Populate dates only from actual publication history. Do not add FAQPage or HowTo markup.
  
  Render visible breadcrumbs matching BreadcrumbList. Preserve all supplied contextual links, related terms, and sources. Tables need semantic header cells and usable narrow-screen behavior. Publish the twelve OOUX expansion articles together, or publish linked destinations first, so their cross-links resolve. Add one contextual inbound link from each of these existing pages where the topic is discussed: /glossary/ooux-ux-fails.html, /glossary/object-mapping.html, /glossary/interaction-invariant.html. Preserve those pages' URLs, metadata, and existing links; deduplicate equivalent links.
  
  Add the canonical URL to the glossary index and XML sitemap. Use the actual deployment date for sitemap lastmod if maintained. Check HTTP 200, direct page loads, initial server-returned HTML, rendered content, metadata, links, and JSON-LD. Use the site's existing static generation or prerendering path where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing site build. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Follow the project's authorized deployment workflow, verify the published result, and report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/shapeshifter-matrix.html#webpage",
        "url": "https://lexkonovalov.com/glossary/shapeshifter-matrix.html",
        "name": "Shapeshifter Matrix in OOUX: Object Variants and Example",
        "description": "Use a Shapeshifter Matrix to compare an object's views, roles, and states, preserve recognizable cues, and document intentional interface differences.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/shapeshifter-matrix.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/shapeshifter-matrix.html#breadcrumbs"
        },
        "citation": [
          "https://ooux.com/selfpacedoouxmasterclass",
          "https://ooux.com/advanced"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/shapeshifter-matrix.html#term",
        "name": "Shapeshifter Matrix",
        "termCode": "shapeshifter-matrix",
        "description": "A Shapeshifter Matrix is an OOUX tool for examining the different representations and variants of an object. It helps teams make differences intentional while preserving the cues people need to recognize the object across an interface.",
        "url": "https://lexkonovalov.com/glossary/shapeshifter-matrix.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/shapeshifter-matrix.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/shapeshifter-matrix.html#breadcrumbs",
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
            "name": "Shapeshifter Matrix",
            "item": "https://lexkonovalov.com/glossary/shapeshifter-matrix.html"
          }
        ]
      }
    ]
  }
---

# Shapeshifter Matrix

A Shapeshifter Matrix is an OOUX tool for examining the different representations and variants of an object. It helps teams make differences intentional while preserving the cues people need to recognize the object across an interface.

An object can legitimately appear as a compact search result, a row in a work queue, and a detailed record. Problems arise when unexplained changes make it difficult to identify the same thing or understand its available actions.

## What should the matrix compare?

Start with the contexts in which the object appears. Record the information shown, relevant role or state, available actions, and the reason for a difference.

The table below is one lightweight format. It is an illustrative working artifact, rather than a prescribed official template.

## Example: Booking B-52 across views

In this example, the booking is Awaiting confirmation. An assigned agent can update permitted details; a support reviewer has read access.

| Representation | Identifying information | Actions and rationale |
|---|---|---|
| Search result | Booking reference, service date, status | Open the record; enough detail to choose the right match. |
| Trip booking row | Same reference and status, supplier name | Open details within the trip context. |
| Agent detail view | Same identity cues, full permitted booking data | Edit eligible fields; manage the booking within the agent's authority. |
| Reviewer detail view | Same identity cues, permitted review data | Inspect history; editing is unavailable for this role. |

The role difference changes available actions. It should not make the status mean something different.

## How to use it

Choose one real record and follow it through the views. List differences before deciding which to keep. For each difference, identify the task, permission, or space constraint it serves.

Then check other important states. A canceled booking may need a cancellation date; a draft may lack a supplier confirmation number. Capture these conditions without creating a separate component for every possible combination.

## What should remain consistent?

Define recognizable labels, reference formatting, status meaning, and the relationship between an action and its result. Layout and detail can vary with context.

Test whether users recognize the booking after moving between views and whether they understand the role-dependent controls. Also check accessible names and keyboard operation in each representation. A consistent screenshot alone cannot establish consistent behavior.

## Related terms

- [Four UX Fails in OOUX](/glossary/ooux-ux-fails.html)
- [Object Representation](/glossary/object-representation-ooux.html)
- [Interaction Invariant](/glossary/interaction-invariant.html)
- [Attribute Prioritization](/glossary/attribute-prioritization.html)

## Sources

- [OOUX Masterclass: Representation Round](https://ooux.com/selfpacedoouxmasterclass)
- [OOUX Advanced Certification: Intentional Shapeshifter Matrices](https://ooux.com/advanced)
