---
url: "https://lexkonovalov.com/glossary/pattern-library.html"
title: "Pattern Library vs. Component Library | Product Design Glossary"
description: "Learn what a UI pattern library documents, how it differs from a component catalog, and how patterns connect shared components to complete user tasks."
canonical: "https://lexkonovalov.com/glossary/pattern-library.html"
language: "en-US"
categories: ["Design Systems & Engineering", "UX & Product Architecture"]
topic_cluster: "Design systems"
open_graph: {"og:type": "website", "og:title": "Pattern Library vs. Component Library | Product Design Glossary", "og:description": "Learn what a UI pattern library documents, how it differs from a component catalog, and how patterns connect shared components to complete user tasks.", "og:url": "https://lexkonovalov.com/glossary/pattern-library.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render only the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data. Use one H1 and existing glossary styling. Add this new entry to the glossary index and the existing category values supplied above; topic_cluster is editorial grouping, not an instruction to rename site-wide categories.
  
  Apply the exact title, description, canonical, language and Open Graph values. Override automatic title suffixes for this page. Synchronize existing Twitter title, description and image fields. Use clean canonical URLs without tracking parameters.
  
  Emit the full structured_data graph below in a script of type application/ld+json. Merge nodes by @id rather than duplicating them. Reuse #term, #terms and #breadcrumbs; use #webpage or consistently reuse the site's equivalent page ID. Keep the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve other terms when merging DefinedTermSet. Its name is Product Design Glossary and its ID is distinct from WebSite. Synchronize the DefinedTerm description with the visible opening definition. Do not add FAQPage or HowTo. Fill publication and modification dates only from actual publication history.
  
  Render visible breadcrumbs matching the graph. Preserve all supplied contextual, related-term and source links. Keep Previous/Next navigation. Render tables with semantic headers and make wide tables usable on mobile. Treat code and examples as illustrative; do not execute them as deployment instructions.
  
  Serve this entry at the exact canonical route above after checking for a conflicting existing route or redirect. Preserve all other existing glossary URLs. Make the article and metadata available in initial HTML through the site's existing static generation or prerendering path. Add the canonical to the sitemap; use the actual deployment date for lastmod if maintained.
  
  Implement the specific inbound links listed below in the corresponding source pages, inside relevant existing sections or their Related terms lists. Do not create duplicate paragraphs when that link already exists. New target dependencies must ship together, or in dependency order with links activated when destinations exist.
  
  Run the existing build; inspect generated HTML for the article, one H1, canonical, title, metadata, internal links and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Check direct page loads, crawlability and unintended noindex/robots restrictions. Follow the project's authorized deployment workflow, then verify the published page. Report checks that cannot be run.
inbound_links: [{"source": "/glossary/component-libraries.html", "placement": "Link the comparison between reusable components and task-level guidance.", "anchor": "pattern library"}, {"source": "/glossary/design-system.html", "placement": "Link the patterns and guidance discussion.", "anchor": "patterns"}]
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/pattern-library.html#webpage",
        "url": "https://lexkonovalov.com/glossary/pattern-library.html",
        "name": "Pattern Library vs. Component Library | Product Design Glossary",
        "description": "Learn what a UI pattern library documents, how it differs from a component catalog, and how patterns connect shared components to complete user tasks.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/pattern-library.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/pattern-library.html#breadcrumbs"
        },
        "citation": [
          "https://design-system.service.gov.uk/patterns/",
          "https://design-system.service.gov.uk/community/contribution-criteria/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/pattern-library.html#term",
        "name": "Pattern Library",
        "termCode": "pattern-library",
        "description": "A UI pattern library documents reusable approaches to recurring interaction problems, such as entering an address or reviewing information before submission. A pattern explains how components, content, and behavior work together in a particular kind of task.",
        "url": "https://lexkonovalov.com/glossary/pattern-library.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/pattern-library.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/pattern-library.html#breadcrumbs",
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
            "name": "Pattern Library",
            "item": "https://lexkonovalov.com/glossary/pattern-library.html"
          }
        ]
      }
    ]
  }
---

# Pattern Library

A UI pattern library documents reusable approaches to recurring interaction problems, such as entering an address or reviewing information before submission. A pattern explains how components, content, and behavior work together in a particular kind of task.

## What belongs in a UI pattern?

A useful pattern describes the problem, the context in which the approach works, its interaction flow, and the decisions a team must adapt.

It can include relevant components, example content, accessibility considerations, and known limitations. The goal is to help someone solve a recurring problem, not simply reproduce a screenshot.

Teams use “pattern library” differently. State whether a particular library includes interaction patterns, component examples, visual styles, or a combination.

## Pattern library vs. component library vs. design system

| Resource | Main question |
|---|---|
| Component library | Which reusable building block can I implement? |
| Pattern library | How can those pieces support this recurring task? |
| Design system | Which shared decisions, resources, and practices govern the experience? |

A button is a component. Reviewing a request before sending it is a pattern that can combine headings, summaries, change links, and a confirmation action.

A pattern can be implemented using different components while retaining its important interaction principles.

## Example: reviewing a booking change

Suppose several products need users to review a proposed booking change. The pattern identifies the original and proposed values, any relevant consequences, and a clear route to correct a detail.

It also specifies what happens after submission, including an uncertain or failed result. One product may present this in a page, another in a dialog, depending on the task and constraints.

The pattern should explain which decisions are shared and which depend on the product. It should not invent a universal approval rule for every booking workflow.

## How do you create and maintain a pattern library?

Start with a repeated need observed in real product work. Compare existing implementations and the evidence behind them. Document the common approach and the reasons for any differences.

GOV.UK's pattern collection illustrates guidance organized around tasks and information needs, alongside a separate component collection.

Assign an owner and link working examples. Check that the pattern still fits the components and product constraints it depends on. When teams repeatedly need exceptions, investigate the pattern's scope instead of adding a new near-duplicate for every screen.

## Related terms

- [Component Libraries](/glossary/component-libraries.html)
- [Component Architecture](/glossary/component-architecture.html)
- [Design System Documentation](/glossary/design-system-documentation.html)
- [Design System Governance](/glossary/design-system-governance.html)

## Sources

- [Patterns, GOV.UK Design System](https://design-system.service.gov.uk/patterns/)
- [Contribution criteria, GOV.UK Design System](https://design-system.service.gov.uk/community/contribution-criteria/)
