---
url: "https://lexkonovalov.com/glossary/design-tokens.html"
title: "Design Tokens: Definition & Examples | Product Design Glossary"
description: "Learn how design tokens represent reusable design decisions, with primitive and semantic examples, DTCG JSON, and a practical design-to-code workflow."
canonical: "https://lexkonovalov.com/glossary/design-tokens.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Design Tokens: Definition & Examples | Product Design Glossary", "og:description": "Learn how design tokens represent reusable design decisions, with primitive and semantic examples, DTCG JSON, and a practical design-to-code workflow.", "og:url": "https://lexkonovalov.com/glossary/design-tokens.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, UX & Product Architecture and term status "Established" in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use design-tokens as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with header cells that work on mobile. Preserve the supplied sources and all 5 related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter. The supplied Related terms intentionally replaces the existing self-link with Design System and adds Design Tokens Format Module (DTCG). Render the JSON example as escaped code, not executable markup.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-tokens.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-tokens.html",
        "name": "Design Tokens: Definition & Examples | Product Design Glossary",
        "description": "Learn how design tokens represent reusable design decisions, with primitive and semantic examples, DTCG JSON, and a practical design-to-code workflow.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-tokens.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-tokens.html#breadcrumbs"
        },
        "citation": [
          "https://atlassian.design/foundations/tokens/design-tokens/",
          "https://www.designtokens.org/tr/2025.10/format/",
          "https://styledictionary.com/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-tokens.html#term",
        "name": "Design Tokens",
        "alternateName": [
          "Design token"
        ],
        "termCode": "design-tokens",
        "description": "Design tokens are named values that represent reusable design decisions, such as colors, spacing, typography, and motion. They give designers and developers a shared way to describe and apply those decisions across components, themes, and platforms.",
        "url": "https://lexkonovalov.com/glossary/design-tokens.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-tokens.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/design-tokens.html#breadcrumbs",
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
            "name": "Design Tokens",
            "item": "https://lexkonovalov.com/glossary/design-tokens.html"
          }
        ]
      }
    ]
  }
---

# Design Tokens

Design tokens are named values that represent reusable design decisions, such as colors, spacing, typography, and motion. They give designers and developers a shared way to describe and apply those decisions across components, themes, and platforms.

For example, a component can use a token named `color.text.link` instead of choosing a color independently. The name describes the intended use; its value can change with the theme.

## What are primitive, semantic, and component tokens?

Many design systems organize tokens into these layers. The naming and number of layers vary by system.

| Layer | Illustrative name | Role |
|---|---|---|
| Primitive | `color.blue.600` | Stores a base palette value. |
| Semantic | `color.text.link` | Assigns a value to a purpose. |
| Component | `button.primary.background` | Applies a decision to a specific component. |

A semantic token can reference a primitive through an alias. For example, `color.text.link` might reference `color.blue.600` in a light theme and a lighter blue in a dark theme. Components continue to use the semantic name. Check the resulting contrast in each context.

## A simple design token example

This example uses the DTCG 2025.10 format to define a spacing value and a token for card padding:

```json
{
  "space": {
    "200": {
      "$type": "dimension",
      "$value": { "value": 8, "unit": "px" }
    }
  },
  "card": {
    "padding": {
      "$type": "dimension",
      "$value": "{space.200}"
    }
  }
}
```

`card.padding` resolves to 8 pixels through its reference to `space.200`. To increase only card padding, point `card.padding` to a different spacing token. Changing `space.200` itself affects every token that references it. The names and values are illustrative.

## How do tokens get from design to code?

A team maintains token definitions in an agreed source, reviews changes, and uses tooling to produce the formats each platform needs. A tool such as Style Dictionary can transform token data into CSS, JavaScript, or native platform resources.

CSS custom properties and Figma variables can represent tokens in their respective environments. A shared naming scheme, compatible tooling, and an explicit release process connect them. Tokens themselves do not automatically synchronize design files and production code.

## Do design tokens have to use JSON?

Tokens are a design-system concept; the DTCG specification defines a JSON format for exchanging them between tools. The stable 2025.10 Format Module specifies types, values, groups, and references. It is a Community Group specification, not a W3C Standard.

Start with decisions that repeat across the interface. Document intended usage and check affected components before releasing changes. Add layers when they solve a concrete reuse or maintenance problem.

## Related terms

- [Design System](/glossary/design-system.html)
- [Semantic Tokens](/glossary/semantic-tokens.html)
- [Design Primitives](/glossary/design-primitives.html)
- [Style Dictionary](/glossary/style-dictionary.html)
- [Design Tokens Format Module (DTCG)](/glossary/design-tokens-format-module-dtcg.html)

## Sources

- [Design tokens explained, Atlassian Design System](https://atlassian.design/foundations/tokens/design-tokens/)
- [Design Tokens Format Module 2025.10, Design Tokens Community Group](https://www.designtokens.org/tr/2025.10/format/)
- [Style Dictionary documentation](https://styledictionary.com/)
