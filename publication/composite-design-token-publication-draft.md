---
url: "https://lexkonovalov.com/glossary/composite-design-token.html"
title: "Composite Design Tokens | Product Design Glossary"
description: "Learn how a composite design token differs from a group. See a DTCG shadow example and when to keep related properties in one token."
canonical: "https://lexkonovalov.com/glossary/composite-design-token.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Composite Design Tokens | Product Design Glossary", "og:description": "Learn how a composite design token differs from a group. See a DTCG shadow example and when to keep related properties in one token.", "og:url": "https://lexkonovalov.com/glossary/composite-design-token.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use composite-design-token as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
  
  
  Render the JSON examples as fenced code blocks. Preserve the literal dollar signs, braces, indentation, and token path.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/composite-design-token.html#webpage",
        "url": "https://lexkonovalov.com/glossary/composite-design-token.html",
        "name": "Composite Design Tokens | Product Design Glossary",
        "description": "Learn how a composite design token differs from a group. See a DTCG shadow example and when to keep related properties in one token.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/composite-design-token.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/composite-design-token.html#breadcrumbs"
        },
        "citation": [
          "https://www.designtokens.org/tr/2025.10/format/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/composite-design-token.html#term",
        "name": "Composite Design Token",
        "termCode": "composite-design-token",
        "description": "A composite design token represents one design decision with a value made up of several related properties. For example, a shadow can combine a color, two offsets, a blur radius, and a spread. A component can use the named shadow as one decision.",
        "url": "https://lexkonovalov.com/glossary/composite-design-token.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/composite-design-token.html#webpage"
        },
        "alternateName": [
          "Composite Token"
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
        "@id": "https://lexkonovalov.com/glossary/composite-design-token.html#breadcrumbs",
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
            "name": "Composite Design Token",
            "item": "https://lexkonovalov.com/glossary/composite-design-token.html"
          }
        ]
      }
    ]
  }
---

# Composite Design Token

A composite design token represents one design decision with a value made up of several related properties. For example, a shadow can combine a color, two offsets, a blur radius, and a spread. A component can use the named shadow as one decision.

## How is a composite token different from a group?

A group organizes separate tokens. In the DTCG format, a composite token declares one `$value` that contains the parts of a single decision. In a group named `elevation`, `card` and `dialog` could be two separate shadow tokens. Each of those tokens can carry its own set of shadow properties.

## DTCG example of a shadow token

```json
{
  "elevation": {
    "card": {
      "$type": "shadow",
      "$value": {
        "color": { "colorSpace": "srgb", "components": [0, 0, 0], "alpha": 0.16 },
        "offsetX": { "value": 0, "unit": "px" },
        "offsetY": { "value": 2, "unit": "px" },
        "blur": { "value": 8, "unit": "px" },
        "spread": { "value": 0, "unit": "px" }
      }
    }
  }
}
```

Here `elevation` is the group and `elevation.card` is the token path. This shadow uses the five required properties in a single value. The format also allows an optional `inset` flag. Use the fields supported by the token’s type. The [DTCG Format Module](/glossary/design-tokens-format-module-dtcg.html) defines each composite type and which properties may reference other tokens.

## When should you use a composite token?

Use one when the properties belong together in the consuming interface. If several components need the same card shadow, one token gives them a shared way to request that shadow. If an offset also needs to be reused independently, define an offset token and reference it inside the shadow where the format and tools support that reference.

Check what each consumer expects. For the example above, a web build could produce `0 2px 8px 0 rgb(0 0 0 / 16%)` for CSS `box-shadow`. Another platform may expect separate parameters. Verify the generated output and judge the rendered result in a real component before adopting the token across the library.

## Related terms

- [Design Tokens](/glossary/design-tokens.html)
- [Design Tokens Format Module (DTCG)](/glossary/design-tokens-format-module-dtcg.html)
- [Semantic Tokens](/glossary/semantic-tokens.html)
- [Design Primitives](/glossary/design-primitives.html)

## Sources

- [Design Tokens Format Module 2025.10, DTCG](https://www.designtokens.org/tr/2025.10/format/)
