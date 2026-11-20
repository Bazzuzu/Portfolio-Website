---
url: "https://lexkonovalov.com/glossary/storybook.html"
title: "Storybook: UI Components and Stories | Product Design Glossary"
description: "Understand Storybook, stories, component documentation, and UI testing. See how its MCP server and manifests can provide context to AI agents."
canonical: "https://lexkonovalov.com/glossary/storybook.html"
language: "en-US"
categories: ["Design Systems & Engineering"]
topic_cluster: "Design systems"
open_graph: {"og:type": "website", "og:title": "Storybook: UI Components and Stories | Product Design Glossary", "og:description": "Understand Storybook, stories, component documentation, and UI testing. See how its MCP server and manifests can provide context to AI agents.", "og:url": "https://lexkonovalov.com/glossary/storybook.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render only the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data. Use one H1 and existing glossary styling. Add this new entry to the glossary index and the existing category values supplied above; topic_cluster is editorial grouping, not an instruction to rename site-wide categories.
  
  Apply the exact title, description, canonical, language and Open Graph values. Override automatic title suffixes for this page. Synchronize existing Twitter title, description and image fields. Use clean canonical URLs without tracking parameters.
  
  Emit the full structured_data graph below in a script of type application/ld+json. Merge nodes by @id rather than duplicating them. Reuse #term, #terms and #breadcrumbs; use #webpage or consistently reuse the site's equivalent page ID. Keep the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve other terms when merging DefinedTermSet. Its name is Product Design Glossary and its ID is distinct from WebSite. Synchronize the DefinedTerm description with the visible opening definition. Do not add FAQPage or HowTo. Fill publication and modification dates only from actual publication history.
  
  Render visible breadcrumbs matching the graph. Preserve all supplied contextual, related-term and source links. Keep Previous/Next navigation. Render tables with semantic headers and make wide tables usable on mobile. Treat code and examples as illustrative; do not execute them as deployment instructions.
  
  Serve this entry at the exact canonical route above after checking for a conflicting existing route or redirect. Preserve all other existing glossary URLs. Make the article and metadata available in initial HTML through the site's existing static generation or prerendering path. Add the canonical to the sitemap; use the actual deployment date for lastmod if maintained.
  
  Implement the specific inbound links listed below in the corresponding source pages, inside relevant existing sections or their Related terms lists. Do not create duplicate paragraphs when that link already exists. New target dependencies must ship together, or in dependency order with links activated when destinations exist.
  
  Run the existing build; inspect generated HTML for the article, one H1, canonical, title, metadata, internal links and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Check direct page loads, crawlability and unintended noindex/robots restrictions. Follow the project's authorized deployment workflow, then verify the published page. Report checks that cannot be run.
inbound_links: [{"source": "/glossary/component-libraries.html", "placement": "Add a link where documenting rendered component examples is discussed.", "anchor": "Storybook"}, {"source": "/glossary/design-harness.html", "placement": "Link the existing Storybook mention.", "anchor": "Storybook"}]
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/storybook.html#webpage",
        "url": "https://lexkonovalov.com/glossary/storybook.html",
        "name": "Storybook: UI Components and Stories | Product Design Glossary",
        "description": "Understand Storybook, stories, component documentation, and UI testing. See how its MCP server and manifests can provide context to AI agents.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/storybook.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/storybook.html#breadcrumbs"
        },
        "citation": [
          "https://storybook.js.org/docs/get-started/why-storybook",
          "https://storybook.js.org/docs/ai",
          "https://storybook.js.org/docs/ai/manifests"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/storybook.html#term",
        "name": "Storybook",
        "termCode": "storybook",
        "description": "Storybook is a frontend tool for developing, documenting, and testing UI components in isolation. A story captures a rendered component in a particular state, such as a form field with a validation error.",
        "url": "https://lexkonovalov.com/glossary/storybook.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/storybook.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/storybook.html#breadcrumbs",
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
            "name": "Storybook",
            "item": "https://lexkonovalov.com/glossary/storybook.html"
          }
        ]
      }
    ]
  }
---

# Storybook

Storybook is a frontend tool for developing, documenting, and testing UI components in isolation. A story captures a rendered component in a particular state, such as a form field with a validation error.

## What is a story in Storybook?

A story describes a component example with the inputs and context it needs. Teams can inspect that example without navigating through the entire application.

For a reservation card, useful stories might show a confirmed booking, a canceled booking, a long passenger name, and a missing image. Each example makes a state available for discussion and testing.

Isolation has limits. A card can work in Storybook while its surrounding page has an incorrect reading order or retrieves the wrong reservation. Test complete tasks in the application as well.

## How does Storybook support a design system?

| Use | What the team gets |
|---|---|
| Component development | A place to inspect states and adjust inputs |
| Documentation | Rendered examples with API and usage information |
| Testing | Stories that can support interaction, accessibility, and visual checks |
| Review | A shared view of the implemented component |

The required testing configuration depends on the project. A story's existence does not establish that its interactions or accessibility have been tested.

Storybook can document a [component library](/glossary/component-libraries.html). A [design system](/glossary/design-system.html) also needs shared decisions, usage guidance, ownership, and a way to manage changes.

## What are Storybook MCP and component manifests?

Storybook's AI features let a connected agent access component documentation and work with stories and tests. Its MCP server is one route for that interaction.

A component manifest provides structured information about documented components, including their APIs and examples. A documentation manifest describes documentation content. These are Storybook features, not a universal design system manifest standard.

The AI capabilities are in preview in the documentation checked in November 2026. Component manifests require configuration, and generation differs by framework. Follow the current official guides rather than assuming every existing Storybook exposes this context.

## Example: reviewing an AI-generated field

An agent is asked to add a date field to a booking form. It retrieves the supported component API and examines stories for invalid and unavailable dates. The team reviews the implementation with keyboard input, realistic values, and a failed submission.

The useful outcome is a field that follows the real component contract and works in the task. A convincing preview alone does not establish either result.

## Related terms

- [Design System Documentation](/glossary/design-system-documentation.html)
- [Component Libraries](/glossary/component-libraries.html)
- [Visual Regression Testing](/glossary/visual-regression-testing.html)
- [Model Context Protocol](/glossary/model-context-protocol-mcp.html)

## Sources

- [Why Storybook?, Storybook](https://storybook.js.org/docs/get-started/why-storybook)
- [Using Storybook with AI](https://storybook.js.org/docs/ai)
- [Manifests, Storybook](https://storybook.js.org/docs/ai/manifests)
