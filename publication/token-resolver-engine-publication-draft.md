---
url: "https://lexkonovalov.com/glossary/token-resolver-engine.html"
title: "Design Token Resolution and Theming | Product Design Glossary"
description: "See how token resolution selects theme sources, applies precedence, and follows aliases. Includes a light and dark example using DTCG concepts."
canonical: "https://lexkonovalov.com/glossary/token-resolver-engine.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Design Token Resolution and Theming | Product Design Glossary", "og:description": "See how token resolution selects theme sources, applies precedence, and follows aliases. Includes a light and dark example using DTCG concepts.", "og:url": "https://lexkonovalov.com/glossary/token-resolver-engine.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use token-resolver-engine as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/token-resolver-engine.html#webpage",
        "url": "https://lexkonovalov.com/glossary/token-resolver-engine.html",
        "name": "Design Token Resolution and Theming | Product Design Glossary",
        "description": "See how token resolution selects theme sources, applies precedence, and follows aliases. Includes a light and dark example using DTCG concepts.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/token-resolver-engine.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/token-resolver-engine.html#breadcrumbs"
        },
        "citation": [
          "https://www.designtokens.org/tr/2025.10/resolver/",
          "https://www.designtokens.org/tr/2025.10/format/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/token-resolver-engine.html#term",
        "name": "Token Resolver Engine",
        "termCode": "token-resolver-engine",
        "description": "A token resolver is software that determines which values apply to design tokens for a given context, such as a light or dark theme. It can combine token sources in a defined order and follow references to determine the values a consuming tool should use.",
        "url": "https://lexkonovalov.com/glossary/token-resolver-engine.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/token-resolver-engine.html#webpage"
        },
        "alternateName": [
          "Design Token Resolver"
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
        "@id": "https://lexkonovalov.com/glossary/token-resolver-engine.html#breadcrumbs",
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
            "name": "Token Resolver Engine",
            "item": "https://lexkonovalov.com/glossary/token-resolver-engine.html"
          }
        ]
      }
    ]
  }
---

# Token Resolver Engine

A token resolver is software that determines which values apply to design tokens for a given context, such as a light or dark theme. It can combine token sources in a defined order and follow references to determine the values a consuming tool should use.

## What does a resolver do?

The DTCG [Format Module](/glossary/design-tokens-format-module-dtcg.html) defines token values and references. The separate Resolver Module defines how to select and combine sources for a context. For example, a resolver document can list a base set and then a theme modifier in `resolutionOrder`. The input selects a context such as `dark` for that modifier. Under the Resolver Module’s ordering rules, if selected sources declare the same token more than once, the last declaration wins.

A context choice and an alias answer different questions. The context selects which declaration of `color.text.link` applies. The alias points to the palette token whose value the link should use.

## Example of resolving link text

Suppose Base defines both palette colors and a default link role. The theme modifier adds no sources for Light and adds one source, Dark, for Dark mode.

| Context | Sources applied in order | Winning reference for `color.text.link` |
|---|---|---|
| Light | Base | `{color.blue.600}` |
| Dark | Base, then Dark | `{color.blue.300}` |

The palette is present in both results because each context includes Base. After selecting the winning declaration, follow its reference to the corresponding color value. The component still uses the same link role.

## What should you test?

- **Source order.** Confirm that Dark selects the override. If the value stays the same, check whether Base was applied after Dark.
- **References.** Check that the target exists in the final token set and that aliases do not form a cycle. For a missing target, start by checking which sources were selected.
- **Consumer output.** Verify the intended value in both contexts. A build tool can emit a literal or preserve the alias in a platform format that supports it.

Resolution determines what applies. Formatting determines how those decisions are represented, such as CSS custom properties. One tool can handle both jobs, or you can run a separate resolver before the platform build.

## Related terms

- [Design Tokens](/glossary/design-tokens.html)
- [Design Tokens Format Module (DTCG)](/glossary/design-tokens-format-module-dtcg.html)
- [Style Dictionary](/glossary/style-dictionary.html)
- [Semantic Tokens](/glossary/semantic-tokens.html)

## Sources

- [Design Tokens Resolver Module 2025.10, DTCG](https://www.designtokens.org/tr/2025.10/resolver/)
- [Design Tokens Format Module 2025.10, DTCG](https://www.designtokens.org/tr/2025.10/format/)
