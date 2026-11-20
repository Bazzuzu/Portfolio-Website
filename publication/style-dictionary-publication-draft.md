---
url: "https://lexkonovalov.com/glossary/style-dictionary.html"
title: "Style Dictionary for Design Tokens | Product Design Glossary"
description: "Learn how Style Dictionary builds platform files from design tokens. See a small CSS example and what to verify before adopting DTCG inputs."
canonical: "https://lexkonovalov.com/glossary/style-dictionary.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Style Dictionary for Design Tokens | Product Design Glossary", "og:description": "Learn how Style Dictionary builds platform files from design tokens. See a small CSS example and what to verify before adopting DTCG inputs.", "og:url": "https://lexkonovalov.com/glossary/style-dictionary.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use style-dictionary as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
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
        "@id": "https://lexkonovalov.com/glossary/style-dictionary.html#webpage",
        "url": "https://lexkonovalov.com/glossary/style-dictionary.html",
        "name": "Style Dictionary for Design Tokens | Product Design Glossary",
        "description": "Learn how Style Dictionary builds platform files from design tokens. See a small CSS example and what to verify before adopting DTCG inputs.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/style-dictionary.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/style-dictionary.html#breadcrumbs"
        },
        "citation": [
          "https://styledictionary.com/reference/config/",
          "https://styledictionary.com/reference/hooks/formats/predefined/",
          "https://styledictionary.com/info/dtcg/",
          "https://styledictionary.com/getting-started/using_the_cli/",
          "https://styledictionary.com/reference/hooks/transforms/predefined/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/style-dictionary.html#term",
        "name": "Style Dictionary",
        "termCode": "style-dictionary",
        "description": "Style Dictionary is an open-source build tool that transforms shared design tokens into files for applications to consume. A build can produce CSS custom properties for the web and different outputs for other platforms from the same source definitions.",
        "url": "https://lexkonovalov.com/glossary/style-dictionary.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/style-dictionary.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/style-dictionary.html#breadcrumbs",
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
            "name": "Style Dictionary",
            "item": "https://lexkonovalov.com/glossary/style-dictionary.html"
          }
        ]
      }
    ]
  }
---

# Style Dictionary

Style Dictionary is an open-source build tool that transforms shared design tokens into files for applications to consume. A build can produce CSS custom properties for the web and different outputs for other platforms from the same source definitions.

## How does a Style Dictionary build work?

Choose the source files, configure a platform, then specify how tokens should be transformed and written. A **transform** can change a token’s name or value for the target. A **format** decides how the result appears in a file. A transform group gives a platform a reusable set of transforms.

## Example of building CSS variables

Put one DTCG number token in `tokens.json`:

```json
{
  "opacity": {
    "muted": { "$type": "number", "$value": 0.6 }
  }
}
```

Save the following as `config.json`. It converts token paths to kebab-case names and uses the built-in CSS variable format.

```json
{
  "source": ["tokens.json"],
  "platforms": {
    "css": {
      "transforms": ["name/kebab"],
      "buildPath": "dist/",
      "files": [
        { "destination": "tokens.css", "format": "css/variables" }
      ]
    }
  }
}
```

With Style Dictionary installed, run `npx style-dictionary build` from the directory containing both files. The expected output is `--opacity-muted: 0.6;` under `:root` in `dist/tokens.css`. An application can load that file and use the property where the design calls for that opacity.

## How do themes and aliases affect the build?

Decide which token values apply to each theme before generating its output. You might build one file per theme or emit variables under different CSS selectors. With `css/variables`, the `outputReferences` option can preserve eligible aliases as CSS variable references. Check that the referenced properties exist in the output the application loads.

Style Dictionary supports DTCG inputs. Its documentation identifies DTCG 2025.10 support as incomplete. Check the version you use against the types, references, and theme behavior your project needs. Run the build on a small fixture, inspect the output, and load it in one consuming component before bringing over the full token set.

## Related terms

- [Design Tokens](/glossary/design-tokens.html)
- [Design Tokens Format Module (DTCG)](/glossary/design-tokens-format-module-dtcg.html)
- [Design Engineering](/glossary/design-engineering.html)
- [Design-to-Code Workflow](/glossary/design-to-code-workflow.html)

## Sources

- [Configuration, Style Dictionary](https://styledictionary.com/reference/config/)
- [Built-in formats, Style Dictionary](https://styledictionary.com/reference/hooks/formats/predefined/)
- [DTCG support, Style Dictionary](https://styledictionary.com/info/dtcg/)
- [Using the CLI, Style Dictionary](https://styledictionary.com/getting-started/using_the_cli/)
- [Built-in transforms, Style Dictionary](https://styledictionary.com/reference/hooks/transforms/predefined/)
