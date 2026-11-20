---
url: "https://lexkonovalov.com/glossary/design-harness.html"
title: "Design Harness: Guiding and Checking AI-Generated Interfaces"
description: "Learn how a design harness gives AI coding agents component references, design rules, and checks, with a practical booking-form implementation example."
canonical: "https://lexkonovalov.com/glossary/design-harness.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Design Harness: Guiding and Checking AI-Generated Interfaces", "og:description": "Learn how a design harness gives AI coding agents component references, design rules, and checks, with a practical booking-form implementation example.", "og:url": "https://lexkonovalov.com/glossary/design-harness.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use design-harness as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-harness.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-harness.html",
        "name": "Design Harness: Guiding and Checking AI-Generated Interfaces",
        "description": "Learn how a design harness gives AI coding agents component references, design rules, and checks, with a practical booking-form implementation example.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-harness.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-harness.html#breadcrumbs"
        },
        "citation": [
          "https://developers.figma.com/docs/code-connect/",
          "https://storybook.js.org/docs/writing-tests"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-harness.html#term",
        "name": "Design Harness",
        "termCode": "design-harness",
        "description": "A design harness is a set of design references, implementation constraints, and validation tools that guides AI-assisted interface development. It helps an agent work with a product's existing components, tokens, patterns, and acceptance criteria.",
        "url": "https://lexkonovalov.com/glossary/design-harness.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-harness.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/design-harness.html#breadcrumbs",
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
            "name": "Design Harness",
            "item": "https://lexkonovalov.com/glossary/design-harness.html"
          }
        ]
      }
    ]
  }
---

# Design Harness

A design harness is a set of design references, implementation constraints, and validation tools that guides AI-assisted interface development. It helps an agent work with a product's existing components, tokens, patterns, and acceptance criteria.

The term is emerging and its scope varies. There is no single required file format or toolchain. A team should state what its harness includes and which checks it actually enforces.

## What it can contain

- Component documentation and working usage examples.
- Token names and rules for spacing, typography, and color.
- Interaction, content, and accessibility requirements.
- Representative component states and test data.
- Automated checks and a process for reviewing results.

[Figma Code Connect](/glossary/figma-code-connect.html) can link design components to implementation references. [Storybook](/glossary/storybook.html) can document component states and support interaction, visual, and accessibility tests. These are possible ingredients in a harness.

## Example: building a booking form

A task gives an agent the existing field components, date-selection rules, error messages, and responsive examples. It also specifies how focus should move after validation fails.

The agent implements the form and runs the relevant checks. A reviewer then inspects the submitted-data behavior, keyboard interaction, error recovery, and layout with realistic content.

If a required component does not support the scenario, record the gap and make an explicit implementation decision.

## Keep the checks meaningful

Separate instructions from enforced checks. Documentation can request token use; a configured rule or review process determines whether deviations are caught.

Automated accessibility checks cover only some issues. Include manual evaluation and task testing where needed. Maintain the harness when the underlying design system changes.

## Which rules should an AI agent receive?

Give the agent the actual component names, supported imports and properties, token roles, relevant states, and acceptance criteria. Specify where to retrieve the current references and what to do when a required capability is missing.

For example, a rule can require the agent to check the documented date-field API before using a range property. The review then checks the code against that API and tests the field in the complete task.

An [AI-ready design system](/glossary/ai-ready-design-system.html) supplies maintained context. The harness assembles it for a task, while [design QA](/glossary/design-qa.html) helps inspect the resulting experience.

## Related terms

- [Agent Harness](/glossary/agent-harness.html)
- [Design System](/glossary/design-system.html)
- [Evaluation Harness (AI Evals)](/glossary/evaluation-harness-ai-evals.html)

- [AI-assisted Design](/glossary/ai-assisted-design.html)

## Sources

- [Figma: Code Connect Introduction](https://developers.figma.com/docs/code-connect/)
- [Storybook: Testing UI Components](https://storybook.js.org/docs/writing-tests)
