---
url: "https://lexkonovalov.com/glossary/interaction-invariant.html"
title: "Interaction Invariants: Defining Consistent UI Behavior"
description: "Learn how to specify an interaction rule that stays consistent across interface states, with a table-selection example and practical checks."
canonical: "https://lexkonovalov.com/glossary/interaction-invariant.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Interaction Invariants: Defining Consistent UI Behavior", "og:description": "Learn how to specify an interaction rule that stays consistent across interface states, with a table-selection example and practical checks.", "og:url": "https://lexkonovalov.com/glossary/interaction-invariant.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use interaction-invariant as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/interaction-invariant.html#webpage",
        "url": "https://lexkonovalov.com/glossary/interaction-invariant.html",
        "name": "Interaction Invariants: Defining Consistent UI Behavior",
        "description": "Learn how to specify an interaction rule that stays consistent across interface states, with a table-selection example and practical checks.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/interaction-invariant.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/interaction-invariant.html#breadcrumbs"
        },
        "citation": [
          "https://www.nngroup.com/articles/consistency-and-standards/",
          "https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/interaction-invariant.html#term",
        "name": "Interaction Invariant",
        "termCode": "interaction-invariant",
        "description": "An interaction invariant is a behavior rule a team deliberately keeps stable across a defined set of interface states or contexts. It provides a way to make consistency explicit, including the scope in which users can rely on the rule.",
        "url": "https://lexkonovalov.com/glossary/interaction-invariant.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/interaction-invariant.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/interaction-invariant.html#breadcrumbs",
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
            "name": "Interaction Invariant",
            "item": "https://lexkonovalov.com/glossary/interaction-invariant.html"
          }
        ]
      }
    ]
  }
---

# Interaction Invariant

An interaction invariant is a behavior rule a team deliberately keeps stable across a defined set of interface states or contexts. It provides a way to make consistency explicit, including the scope in which users can rely on the rule.

## Example: Selection survives sorting

An operations table lets users select bookings and then sort the list. The team defines a rule that selected booking IDs stay selected when their rows move. The bulk-action count and affected records must reflect that same selection.

This rule needs decisions at its boundaries. The team should specify what happens when filtering hides a selected record, the user changes pages, or permissions change. Those cases may use different behavior, but the interface must make the resulting scope understandable.

## How do you document the rule?

State the user expectation, the contexts it covers, and the observable result. For example, record that sorting preserves selected booking IDs and that a bulk action previews the selected records it will affect.

Connect the rule to component specifications and product requirements. Labels should identify recurring actions consistently, and state indicators should agree with the action’s actual effect.

## How do you test it?

Start with a small known set of records. Select two, change the sort order, and inspect both the visible count and the records supplied to the action. Then test the defined boundary cases. A stable visual position alone cannot establish which records the operation targets.

## Related terms

- [Operational UX](/glossary/operational-ux.html)
- [Mental Model Mapping](/glossary/mental-model-mapping.html)
- [Design System Governance](/glossary/design-system-governance.html)
- [Design Primitives](/glossary/design-primitives.html)

## Sources

- [Consistency and Standards, Nielsen Norman Group](https://www.nngroup.com/articles/consistency-and-standards/)
- [Consistent Identification, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html)
