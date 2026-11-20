---
url: "https://lexkonovalov.com/glossary/figma-variables-modes.html"
title: "Figma Variables and Modes | Product Design Glossary"
description: "Learn how Figma variables, collections, and modes work. Use light and dark themes to test aliases, frame inheritance, and JSON import limits."
canonical: "https://lexkonovalov.com/glossary/figma-variables-modes.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Figma Variables and Modes | Product Design Glossary", "og:description": "Learn how Figma variables, collections, and modes work. Use light and dark themes to test aliases, frame inheritance, and JSON import limits.", "og:url": "https://lexkonovalov.com/glossary/figma-variables-modes.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use figma-variables-modes as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/figma-variables-modes.html#webpage",
        "url": "https://lexkonovalov.com/glossary/figma-variables-modes.html",
        "name": "Figma Variables and Modes | Product Design Glossary",
        "description": "Learn how Figma variables, collections, and modes work. Use light and dark themes to test aliases, frame inheritance, and JSON import limits.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/figma-variables-modes.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/figma-variables-modes.html#breadcrumbs"
        },
        "citation": [
          "https://help.figma.com/hc/en-us/articles/14506821864087-Overview-of-variables-collections-and-modes",
          "https://help.figma.com/hc/en-us/articles/15343816063383-Modes-for-variables"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/figma-variables-modes.html#term",
        "name": "Figma Variables & Modes",
        "termCode": "figma-variables-modes",
        "description": "Figma variables store reusable values that you can apply to supported design properties. A collection groups variables, and its modes provide different sets of values for those variables. Switching a frame’s mode changes how its bound properties resolve, so the same design can show a light or dark theme.",
        "url": "https://lexkonovalov.com/glossary/figma-variables-modes.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/figma-variables-modes.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/figma-variables-modes.html#breadcrumbs",
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
            "name": "Figma Variables & Modes",
            "item": "https://lexkonovalov.com/glossary/figma-variables-modes.html"
          }
        ]
      }
    ]
  }
---

# Figma Variables & Modes

Figma variables store reusable values that you can apply to supported design properties. A collection groups variables, and its modes provide different sets of values for those variables. Switching a frame’s mode changes how its bound properties resolve, so the same design can show a light or dark theme.

## How do variables, collections, and modes work?

Figma supports color, number, string, and Boolean variables. A variable can store a value directly or reference another variable through an alias. A collection defines which modes its variables share. Each mode supplies one value per variable.

| In Figma | Example |
|---|---|
| Palette collection | Color variables named `blue/600` and `blue/300` |
| Semantic colors collection | Light and Dark modes |
| Semantic variable | `color/text/link`, referencing `blue/600` in Light and `blue/300` in Dark |

Bind the link’s text fill to the semantic variable. In the frame’s Appearance settings, choose Light or Dark for the Semantic colors collection. The same link layer keeps its variable binding as the color changes. Check contrast against the actual background in both themes.

## Why is a layer still showing the wrong mode?

For a collection, an object set to Auto looks up its parent hierarchy for an explicit mode. If a nested frame has an explicit override, its children can use that mode even when the outer frame changes. Check the layer’s binding, the collection it comes from, and the nearest mode setting. When no override applies, Figma uses the applicable default.

Use separate collections for choices that need to vary independently. A color theme and a spacing density can have separate modes so you can review Dark with either Compact or Comfortable spacing.

## Can you use Figma variables as design tokens?

Variables can represent token decisions inside Figma. Figma documents DTCG JSON import for supported token types and JSON export of variable modes. For example, its dimension import expects pixels, and its duration import expects seconds. Cross-collection alias import uses Figma-specific extension data.

Try exporting Light and Dark and importing them into a test collection. Check both values and whether the link variable still references its palette variable. If Figma cannot find the target collection, check the mapping before using the files in a [design-to-code workflow](/glossary/design-to-code-workflow.html). Agree on which source owns the values and how a change reaches the application.

## Related terms

- [Semantic Tokens](/glossary/semantic-tokens.html)
- [Design Tokens](/glossary/design-tokens.html)
- [Design-to-Code Workflow](/glossary/design-to-code-workflow.html)
- [Design Tokens Format Module (DTCG)](/glossary/design-tokens-format-module-dtcg.html)

- [Theming](/glossary/design-system-theming.html)

## Sources

- [Overview of variables, collections, and modes, Figma](https://help.figma.com/hc/en-us/articles/14506821864087-Overview-of-variables-collections-and-modes)
- [Modes for variables, Figma](https://help.figma.com/hc/en-us/articles/15343816063383-Modes-for-variables)
