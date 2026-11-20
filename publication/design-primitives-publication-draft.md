---
url: "https://lexkonovalov.com/glossary/design-primitives.html"
title: "Design Primitives and Primitive Tokens | Product Design Glossary"
description: "Understand design primitives, from base color and spacing tokens to layout components like Stack. Learn where each belongs in a design system."
canonical: "https://lexkonovalov.com/glossary/design-primitives.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Design Primitives and Primitive Tokens | Product Design Glossary", "og:description": "Understand design primitives, from base color and spacing tokens to layout components like Stack. Learn where each belongs in a design system.", "og:url": "https://lexkonovalov.com/glossary/design-primitives.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use design-primitives as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-primitives.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-primitives.html",
        "name": "Design Primitives and Primitive Tokens | Product Design Glossary",
        "description": "Understand design primitives, from base color and spacing tokens to layout components like Stack. Learn where each belongs in a design system.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-primitives.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-primitives.html#breadcrumbs"
        },
        "citation": [
          "https://atlassian.design/foundations/tokens/design-tokens/",
          "https://atlassian.design/foundations/spacing/primitives",
          "https://www.designtokens.org/tr/2025.10/format/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-primitives.html#term",
        "name": "Design Primitives",
        "termCode": "design-primitives",
        "description": "Design primitives are basic building blocks that a design system uses to compose more specific decisions or interfaces. In a token model, a primitive usually means a named base value. In a component library, it can mean a small reusable component for a basic task such as layout.",
        "url": "https://lexkonovalov.com/glossary/design-primitives.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-primitives.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/design-primitives.html#breadcrumbs",
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
            "name": "Design Primitives",
            "item": "https://lexkonovalov.com/glossary/design-primitives.html"
          }
        ]
      }
    ]
  }
---

# Design Primitives

Design primitives are basic building blocks that a design system uses to compose more specific decisions or interfaces. In a token model, a primitive usually means a named base value. In a component library, it can mean a small reusable component for a basic task such as layout.

## What are primitive tokens?

A primitive token names a base value such as a palette color or a spacing step. For example, `space.200` might represent 8 pixels. A token scoped to a component, such as `card.padding`, can reference it. The base token gives multiple decisions a shared value, while the card token identifies the decision the component is using.

| Term | Example | What it provides |
|---|---|---|
| Primitive token | `space.200` | A named value on a spacing scale |
| Semantic token | `color.text.link` | A value for a named purpose |
| Primitive component | Stack | A reusable way to arrange elements vertically |

These layers are conventions. A team may let a layout component expose steps from a spacing scale and use semantic color tokens for interface text. Document the choice so teams can tell which values are intended for direct use.

## What does a primitive component do?

A layout primitive provides a small piece of reusable structure. Atlassian’s primitives include Stack for vertical arrangement and Inline for horizontal arrangement. A team could use a Stack to arrange a field label, input, and hint with a consistent gap. The field component still defines how those parts relate and how errors are communicated.

## When should you change a base value?

Suppose cards need more padding, while form layouts should stay as they are. Find the token or setting specific to cards and choose the spacing value it should use. If you change the base scale itself, trace its references and check representative screens. The same step may set card padding and the gaps between form fields.

Start with base values and components that solve recurring problems. Add a named layer when it helps people understand a decision or change it at the right scope.

## Related terms

- [Design Tokens](/glossary/design-tokens.html)
- [Semantic Tokens](/glossary/semantic-tokens.html)
- [Component Architecture](/glossary/component-architecture.html)
- [Atomic Design](/glossary/atomic-design.html)

## Sources

- [Design Tokens, Atlassian Design System](https://atlassian.design/foundations/tokens/design-tokens/)
- [Primitives overview, Atlassian Design System](https://atlassian.design/foundations/spacing/primitives)
- [Design Tokens Format Module 2025.10, DTCG](https://www.designtokens.org/tr/2025.10/format/)
