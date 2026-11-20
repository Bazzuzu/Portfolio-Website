---
url: "https://lexkonovalov.com/glossary/progressive-disclosure.html"
title: "Progressive Disclosure in UX | Product Design Glossary"
description: "What is progressive disclosure? See a practical UX example, what to keep visible, and how to make optional controls discoverable and accessible."
canonical: "https://lexkonovalov.com/glossary/progressive-disclosure.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Progressive Disclosure in UX | Product Design Glossary", "og:description": "What is progressive disclosure? See a practical UX example, what to keep visible, and how to make optional controls discoverable and accessible.", "og:url": "https://lexkonovalov.com/glossary/progressive-disclosure.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, Design Systems & Engineering and term status "Established" in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use progressive-disclosure as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with header cells that work on mobile. Preserve the supplied sources and all 4 related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/progressive-disclosure.html#webpage",
        "url": "https://lexkonovalov.com/glossary/progressive-disclosure.html",
        "name": "Progressive Disclosure in UX | Product Design Glossary",
        "description": "What is progressive disclosure? See a practical UX example, what to keep visible, and how to make optional controls discoverable and accessible.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/progressive-disclosure.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/progressive-disclosure.html#breadcrumbs"
        },
        "citation": [
          "https://www.nngroup.com/articles/progressive-disclosure/",
          "https://design-system.service.gov.uk/components/details/",
          "https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/progressive-disclosure.html#term",
        "name": "Progressive Disclosure",
        "termCode": "progressive-disclosure",
        "description": "Progressive disclosure is an interaction design technique that shows essential information and controls first, then reveals less frequently needed options when users request them. It helps people focus on their current task while keeping additional capabilities available.",
        "url": "https://lexkonovalov.com/glossary/progressive-disclosure.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/progressive-disclosure.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/progressive-disclosure.html#breadcrumbs",
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
            "name": "Progressive Disclosure",
            "item": "https://lexkonovalov.com/glossary/progressive-disclosure.html"
          }
        ]
      }
    ]
  }
---

# Progressive Disclosure

Progressive disclosure is an interaction design technique that shows essential information and controls first, then reveals less frequently needed options when users request them. It helps people focus on their current task while keeping additional capabilities available.

## How does progressive disclosure work?

Start with the options people need for common tasks. Provide a clearly labeled way to reveal additional settings or information, such as “Export options” or “Technical specifications.”

Use task research and usability testing to decide what to show. Low usage alone does not prove that a feature is unimportant: people may be unable to find it.

An accordion or secondary dialog can support this pattern. Hiding required information does not.

## Example: exporting a report

Suppose a reporting tool serves managers who usually export the current report as a PDF, while analysts occasionally need a customized CSV.

| Initially visible | Available through “Export options” |
|---|---|
| File format, with PDF selected | CSV delimiter and encoding |
| Current date range and an Export button | Selection of columns for CSV export |
| Summary of any customized settings | Controls for editing those settings |

With CSV selected, “Export options” opens the delimiter, encoding, and column controls. If someone changes the selected columns and collapses the panel, a summary such as “CSV · 6 selected columns” remains visible. The export should not silently use forgotten settings.

This example assumes occasional customization. If analysts select columns on every export, keep those controls in their primary workflow. Test whether both groups can export the intended data without missing settings or repeatedly reopening the panel.

## What should stay visible?

Keep information people need to make an informed decision in the main flow: total cost, important restrictions, required inputs, and actionable errors. GOV.UK's guidance for the details component similarly advises against hiding content most users need.

Avoid burying frequent actions behind repeated expansion. Several nested disclosure levels can also make navigation difficult.

For an in-place disclosure, use an accessible control. The W3C disclosure pattern uses a button activated with Enter or Space and an `aria-expanded` state that reflects whether the content is open. Test the interaction with a keyboard and assistive technology.

## Progressive disclosure vs. staged disclosure

Progressive disclosure reveals optional detail on request. Staged disclosure divides a task into successive steps that users normally complete.

“Export options” is progressive disclosure. A checkout that moves through address, delivery, and payment is staged disclosure. Test whether users need to compare information across steps before separating it.

## Related terms

- [Affordance Layering](/glossary/affordance-layering.html)
- [Semantic Zoom](/glossary/semantic-zoom.html)
- [Task Model](/glossary/task-model.html)
- [Operational UX](/glossary/operational-ux.html)

## Sources

- [Progressive Disclosure, Jakob Nielsen, Nielsen Norman Group](https://www.nngroup.com/articles/progressive-disclosure/)
- [Details, GOV.UK Design System](https://design-system.service.gov.uk/components/details/)
- [Disclosure (Show/Hide) Pattern, W3C WAI](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
