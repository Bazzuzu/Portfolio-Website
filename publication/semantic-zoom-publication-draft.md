---
url: "https://lexkonovalov.com/glossary/semantic-zoom.html"
title: "Semantic Zoom: Definition, UX Example, and Accessibility"
description: "Understand semantic zoom as changing the representation of information, with a planning-board example and checks for orientation, keyboard use, and detail."
canonical: "https://lexkonovalov.com/glossary/semantic-zoom.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Semantic Zoom: Definition, UX Example, and Accessibility", "og:description": "Understand semantic zoom as changing the representation of information, with a planning-board example and checks for orientation, keyboard use, and detail.", "og:url": "https://lexkonovalov.com/glossary/semantic-zoom.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use semantic-zoom as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/semantic-zoom.html#webpage",
        "url": "https://lexkonovalov.com/glossary/semantic-zoom.html",
        "name": "Semantic Zoom: Definition, UX Example, and Accessibility",
        "description": "Understand semantic zoom as changing the representation of information, with a planning-board example and checks for orientation, keyboard use, and detail.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/semantic-zoom.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/semantic-zoom.html#breadcrumbs"
        },
        "citation": [
          "https://learn.microsoft.com/en-us/windows/apps/develop/ui/controls/semantic-zoom",
          "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/semantic-zoom.html#term",
        "name": "Semantic Zoom",
        "termCode": "semantic-zoom",
        "description": "Semantic zoom changes the information or representation shown at different levels of scale. It lets users move between an overview and meaningful detail while retaining a connection to the same underlying content.",
        "url": "https://lexkonovalov.com/glossary/semantic-zoom.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/semantic-zoom.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/semantic-zoom.html#breadcrumbs",
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
            "name": "Semantic Zoom",
            "item": "https://lexkonovalov.com/glossary/semantic-zoom.html"
          }
        ]
      }
    ]
  }
---

# Semantic Zoom

Semantic zoom changes the information or representation shown at different levels of scale. It lets users move between an overview and meaningful detail while retaining a connection to the same underlying content.

For example, a planning view might show monthly totals at one level, daily groups at another, and individual bookings at a detailed level. Optical zoom changes magnification; semantic zoom changes what is represented.

Microsoft's SemanticZoom control is a specific implementation that switches between two related views of grouped content. The broader design concept can involve more than two levels.

## Example: a hotel planning board

At the overview level, a manager sees occupancy by week. Selecting a week reveals daily room availability. Opening a day shows the reservations behind its totals.

The transition should preserve the selected date and explain where the user is. Returning to the overview should make it easy to recognize the same period.

Use consistent calculations so a summary can be reconciled with its detail. If filters change the totals, show the active scope.

## When it helps

Semantic zoom can help when users need both broad patterns and record-level work. It is less useful when extra levels only add navigation to a short list.

Define the questions each level answers and the information users need to decide where to go next.

## Accessibility checks

Provide an operable way to move between levels without relying on a pinch gesture alone. Preserve logical focus, meaningful labels, and an understandable reading order.

For web products, keep browser text resizing available. Semantic zoom is an application interaction and does not replace the user's need to enlarge text.

## Related terms

- [Operational UX](/glossary/operational-ux.html)
- [Progressive Disclosure](/glossary/progressive-disclosure.html)
- [Affordance Layering](/glossary/affordance-layering.html)
- [Interaction Invariant](/glossary/interaction-invariant.html)

## Sources

- [Microsoft: Semantic Zoom](https://learn.microsoft.com/en-us/windows/apps/develop/ui/controls/semantic-zoom)
- [W3C: Understanding Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
