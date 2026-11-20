---
url: "https://lexkonovalov.com/glossary/semantic-tokens.html"
title: "Semantic Tokens: Naming and Theming | Product Design Glossary"
description: "Learn how semantic tokens name a UI role and keep that role stable across themes. See how they differ from primitive tokens and aliases."
canonical: "https://lexkonovalov.com/glossary/semantic-tokens.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Semantic Tokens: Naming and Theming | Product Design Glossary", "og:description": "Learn how semantic tokens name a UI role and keep that role stable across themes. See how they differ from primitive tokens and aliases.", "og:url": "https://lexkonovalov.com/glossary/semantic-tokens.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use semantic-tokens as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/semantic-tokens.html#webpage",
        "url": "https://lexkonovalov.com/glossary/semantic-tokens.html",
        "name": "Semantic Tokens: Naming and Theming | Product Design Glossary",
        "description": "Learn how semantic tokens name a UI role and keep that role stable across themes. See how they differ from primitive tokens and aliases.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/semantic-tokens.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/semantic-tokens.html#breadcrumbs"
        },
        "citation": [
          "https://atlassian.design/foundations/tokens/design-tokens/",
          "https://www.designtokens.org/tr/2025.10/format/",
          "https://www.designtokens.org/tr/2025.10/resolver/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/semantic-tokens.html#term",
        "name": "Semantic Tokens",
        "termCode": "semantic-tokens",
        "description": "A semantic token is a design token whose name describes what a value is for, such as the color of link text. Teams can reuse the same role across components and assign it different values for light and dark themes.",
        "url": "https://lexkonovalov.com/glossary/semantic-tokens.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/semantic-tokens.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/semantic-tokens.html#breadcrumbs",
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
            "name": "Semantic Tokens",
            "item": "https://lexkonovalov.com/glossary/semantic-tokens.html"
          }
        ]
      }
    ]
  }
---

# Semantic Tokens

A semantic token is a design token whose name describes what a value is for, such as the color of link text. Teams can reuse the same role across components and assign it different values for light and dark themes.

## How do semantic tokens work across themes?

A checkout link might use `color.text.link`. In a light theme, that role might point to `color.blue.600`. In a dark theme, it might point to `color.blue.300`. The link still asks for the color assigned to link text. The theme supplies the appropriate value.

| Name | What the name tells you |
|---|---|
| `color.blue.600` | A step in a base palette |
| `color.text.link` | The role the color serves in the interface |
| `button.primary.background` | A decision scoped to a specific component and variant |

These names are illustrative. The palette step number is local to this system. Document how each role should be used and verify each foreground and background pairing in the actual interface.

## Is a semantic token the same as an alias?

“Semantic” describes what the name means. An alias is a reference to another token. A semantic token can use an alias to reuse a palette value, or it can store a value directly. The reference is a mechanism for sharing the value.

## How do you name and introduce semantic tokens?

1. **Start with a repeated purpose.** Inspect where teams use a color or spacing decision. Identify the purpose those uses share.
2. **Name the role.** Make the name useful when someone chooses a token. For example, link text and a selected background can use different roles even when they happen to share a value.
3. **Set values per theme and test them.** Check representative components, states, and backgrounds in the contexts where people use them.
4. **Move consumers to the shared role.** Review each use before replacing the original values. If a component needs its own change policy, document a component token for that decision.

Change the narrowest token that matches the intended scope. To update link text across checkout and settings, change the link text role. To update only one component, inspect whether it already has a dedicated token or setting.

## Related terms

- [Design Tokens](/glossary/design-tokens.html)
- [Design Primitives](/glossary/design-primitives.html)
- [Figma Variables & Modes](/glossary/figma-variables-modes.html)
- [Component Architecture](/glossary/component-architecture.html)

- [Theming](/glossary/design-system-theming.html)

## Sources

- [Design Tokens, Atlassian Design System](https://atlassian.design/foundations/tokens/design-tokens/)
- [Design Tokens Format Module 2025.10, DTCG](https://www.designtokens.org/tr/2025.10/format/)
- [Design Tokens Resolver Module 2025.10, DTCG](https://www.designtokens.org/tr/2025.10/resolver/)
