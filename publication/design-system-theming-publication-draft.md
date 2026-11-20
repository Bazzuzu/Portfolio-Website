---
url: "https://lexkonovalov.com/glossary/design-system-theming.html"
title: "Design System Theming Explained | Product Design Glossary"
description: "Learn how design system theming maps shared roles to different values for dark mode, brands, and other contexts without rebuilding every component."
canonical: "https://lexkonovalov.com/glossary/design-system-theming.html"
language: "en-US"
categories: ["Design Systems & Engineering"]
topic_cluster: "Design systems"
open_graph: {"og:type": "website", "og:title": "Design System Theming Explained | Product Design Glossary", "og:description": "Learn how design system theming maps shared roles to different values for dark mode, brands, and other contexts without rebuilding every component.", "og:url": "https://lexkonovalov.com/glossary/design-system-theming.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render only the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data. Use one H1 and existing glossary styling. Add this new entry to the glossary index and the existing category values supplied above; topic_cluster is editorial grouping, not an instruction to rename site-wide categories.
  
  Apply the exact title, description, canonical, language and Open Graph values. Override automatic title suffixes for this page. Synchronize existing Twitter title, description and image fields. Use clean canonical URLs without tracking parameters.
  
  Emit the full structured_data graph below in a script of type application/ld+json. Merge nodes by @id rather than duplicating them. Reuse #term, #terms and #breadcrumbs; use #webpage or consistently reuse the site's equivalent page ID. Keep the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve other terms when merging DefinedTermSet. Its name is Product Design Glossary and its ID is distinct from WebSite. Synchronize the DefinedTerm description with the visible opening definition. Do not add FAQPage or HowTo. Fill publication and modification dates only from actual publication history.
  
  Render visible breadcrumbs matching the graph. Preserve all supplied contextual, related-term and source links. Keep Previous/Next navigation. Render tables with semantic headers and make wide tables usable on mobile. Treat code and examples as illustrative; do not execute them as deployment instructions.
  
  Serve this entry at the exact canonical route above after checking for a conflicting existing route or redirect. Preserve all other existing glossary URLs. Make the article and metadata available in initial HTML through the site's existing static generation or prerendering path. Add the canonical to the sitemap; use the actual deployment date for lastmod if maintained.
  
  Implement the specific inbound links listed below in the corresponding source pages, inside relevant existing sections or their Related terms lists. Do not create duplicate paragraphs when that link already exists. New target dependencies must ship together, or in dependency order with links activated when destinations exist.
  
  Run the existing build; inspect generated HTML for the article, one H1, canonical, title, metadata, internal links and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Check direct page loads, crawlability and unintended noindex/robots restrictions. Follow the project's authorized deployment workflow, then verify the published page. Report checks that cannot be run.
inbound_links: [{"source": "/glossary/semantic-tokens.html", "placement": "Link from the discussion of values across themes.", "anchor": "theming"}, {"source": "/glossary/figma-variables-modes.html", "placement": "Link when distinguishing Figma modes from a runtime theme.", "anchor": "design system theming"}]
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-system-theming.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-system-theming.html",
        "name": "Design System Theming Explained | Product Design Glossary",
        "description": "Learn how design system theming maps shared roles to different values for dark mode, brands, and other contexts without rebuilding every component.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-system-theming.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-system-theming.html#breadcrumbs"
        },
        "citation": [
          "https://developer.atlassian.com/platform/forge/design-tokens-and-theming/",
          "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-system-theming.html#term",
        "name": "Theming",
        "termCode": "design-system-theming",
        "description": "Theming is the practice of applying a coordinated set of design values to a shared interface. In a design system, a theme can change colors, typography, or other supported decisions while components retain a consistent purpose and API.",
        "url": "https://lexkonovalov.com/glossary/design-system-theming.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-system-theming.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/design-system-theming.html#breadcrumbs",
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
            "name": "Theming",
            "item": "https://lexkonovalov.com/glossary/design-system-theming.html"
          }
        ]
      }
    ]
  }
---

# Theming

Theming is the practice of applying a coordinated set of design values to a shared interface. In a design system, a theme can change colors, typography, or other supported decisions while components retain a consistent purpose and API.

## How does theming work with design tokens?

A component can request a semantic role such as `color.text.primary`. A theme supplies the value for that role. The component does not need a separate implementation for each palette.

Illustrative mappings might look like this:

| Role | Light theme | Dark theme |
|---|---|---|
| Primary text | A dark neutral | A light neutral |
| Page surface | A light neutral | A dark neutral |
| Link text | A darker brand color | A lighter brand color |

The table describes roles, not tested color combinations. Verify the actual values and states in the product.

## Theme vs. mode vs. component variant

A **theme** groups coordinated values. A design tool's **mode** is one mechanism for selecting values in a variable collection. A **component variant** represents a supported variation, such as primary and secondary button emphasis.

These concepts can work together, but changing a Figma mode does not by itself implement the corresponding runtime theme. Design assets, generated tokens, and application styles need an agreed mapping.

## Example: two brands with light and dark appearances

Suppose two booking products share a component library. Both use the same field behavior and keyboard interactions, but each has its own accent and typography choices. Each brand also supports light and dark appearances.

Keep brand identity and color appearance explicit. Decide which combinations are supported, how a user preference is selected and retained, and what happens when no preference is available.

A component may use a component-specific token that points to a semantic role. Keep that indirection only when it gives the team a useful scope for future changes.

## What should you test across themes?

Check readable text, focus indicators, control boundaries, validation states, selected states, and charts. Review images and icons that may disappear or convey the wrong meaning on a different surface.

Test in the application, including nested surfaces and overlays. A token palette cannot establish accessibility for every foreground and background pairing.

For multi-brand systems, document which differences are intentional and which behavior stays shared. A theme should not silently change what an action does.

## Related terms

- [Semantic Tokens](/glossary/semantic-tokens.html)
- [Figma Variables and Modes](/glossary/figma-variables-modes.html)
- [Design Tokens](/glossary/design-tokens.html)
- [WCAG Color Contrast](/glossary/wcag-color-contrast.html)

## Sources

- [Design tokens and theming, Atlassian](https://developer.atlassian.com/platform/forge/design-tokens-and-theming/)
- [Contrast (Minimum), W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
