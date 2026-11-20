---
url: "https://lexkonovalov.com/glossary/design-qa.html"
title: "Design QA: Checking the Implemented Experience | Product Design Glossary"
description: "Learn what design QA checks, how it fits software quality assurance, and how to review behavior, content, accessibility, and layout in a working product."
canonical: "https://lexkonovalov.com/glossary/design-qa.html"
language: "en-US"
categories: ["Design Systems & Engineering"]
topic_cluster: "Design OPS"
open_graph: {"og:type": "website", "og:title": "Design QA: Checking the Implemented Experience | Product Design Glossary", "og:description": "Learn what design QA checks, how it fits software quality assurance, and how to review behavior, content, accessibility, and layout in a working product.", "og:url": "https://lexkonovalov.com/glossary/design-qa.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render only the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data. Use one H1 and existing glossary styling. Add this new entry to the glossary index and the existing category values supplied above; topic_cluster is editorial grouping, not an instruction to rename site-wide categories.
  
  Apply the exact title, description, canonical, language and Open Graph values. Override automatic title suffixes for this page. Synchronize existing Twitter title, description and image fields. Use clean canonical URLs without tracking parameters.
  
  Emit the full structured_data graph below in a script of type application/ld+json. Merge nodes by @id rather than duplicating them. Reuse #term, #terms and #breadcrumbs; use #webpage or consistently reuse the site's equivalent page ID. Keep the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve other terms when merging DefinedTermSet. Its name is Product Design Glossary and its ID is distinct from WebSite. Synchronize the DefinedTerm description with the visible opening definition. Do not add FAQPage or HowTo. Fill publication and modification dates only from actual publication history.
  
  Render visible breadcrumbs matching the graph. Preserve all supplied contextual, related-term and source links. Keep Previous/Next navigation. Render tables with semantic headers and make wide tables usable on mobile. Treat code and examples as illustrative; do not execute them as deployment instructions.
  
  Serve this entry at the exact canonical route above after checking for a conflicting existing route or redirect. Preserve all other existing glossary URLs. Make the article and metadata available in initial HTML through the site's existing static generation or prerendering path. Add the canonical to the sitemap; use the actual deployment date for lastmod if maintained.
  
  Implement the specific inbound links listed below in the corresponding source pages, inside relevant existing sections or their Related terms lists. Do not create duplicate paragraphs when that link already exists. New target dependencies must ship together, or in dependency order with links activated when destinations exist.
  
  Run the existing build; inspect generated HTML for the article, one H1, canonical, title, metadata, internal links and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Check direct page loads, crawlability and unintended noindex/robots restrictions. Follow the project's authorized deployment workflow, then verify the published page. Report checks that cannot be run.
inbound_links: [{"source": "/glossary/design-to-code-workflow.html", "placement": "Link the step about reviewing a working implementation.", "anchor": "design QA"}, {"source": "/glossary/visual-regression-testing.html", "placement": "Add a related link about broader implementation review.", "anchor": "Design QA"}]
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-qa.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-qa.html",
        "name": "Design QA: Checking the Implemented Experience | Product Design Glossary",
        "description": "Learn what design QA checks, how it fits software quality assurance, and how to review behavior, content, accessibility, and layout in a working product.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-qa.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-qa.html#breadcrumbs"
        },
        "citation": [
          "https://storybook.js.org/docs/writing-tests",
          "https://www.w3.org/WAI/test-evaluate/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-qa.html#term",
        "name": "Design QA",
        "termCode": "design-qa",
        "description": "Design QA is the review of an implemented interface against its intended design and experience requirements. It checks whether the working product presents information and behaves as expected across relevant states, content, devices, and input methods.",
        "url": "https://lexkonovalov.com/glossary/design-qa.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-qa.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/design-qa.html#breadcrumbs",
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
            "name": "Design QA",
            "item": "https://lexkonovalov.com/glossary/design-qa.html"
          }
        ]
      }
    ]
  }
---

# Design QA

Design QA is the review of an implemented interface against its intended design and experience requirements. It checks whether the working product presents information and behaves as expected across relevant states, content, devices, and input methods.

## What does design QA cover?

A useful review considers the task, not only how closely a screenshot resembles a design file.

| Area | Example check |
|---|---|
| Information and content | Correct labels, values, hierarchy, and error instructions |
| Interaction | Validation, loading, cancellation, success, and failure |
| Responsive layout | Long content, narrow views, zoom, and overflow |
| Accessibility | Keyboard operation, focus, semantics, and perceivable feedback |
| Shared system use | Correct components, tokens, variants, and intentional exceptions |

Define the acceptance criteria before implementation where possible. Resolve unclear requirements rather than treating every difference as a defect.

## Example: reviewing a request form

Suppose the design shows a quote-request form and confirmation. In the working preview, the reviewer enters a long name, submits an invalid email address, and tests a delayed response.

The field labels remain visible, the error identifies the problem, entered values are retained, and the completion message reflects the actual result. The reviewer also checks keyboard access and the mobile layout.

If the button looks correct but submits the request twice, visual approval is insufficient. Record the behavior, reproduction steps, expected result, and affected environment.

## Design QA vs. software QA vs. design critique

Software QA covers broader product quality, including areas such as functional correctness and integration. Design QA contributes experience-specific criteria and review.

A [design critique](/glossary/design-critique.html) examines a design proposal and its reasoning. Design QA checks what was implemented. Either can reveal that the intended design itself needs revision.

Keep responsibility collaborative. A designer can identify a discrepancy without being the sole owner of every test or fix.

## Which checks can be automated?

[Visual regression testing](/glossary/visual-regression-testing.html) can flag appearance changes. Interaction and accessibility tooling can test configured cases. Storybook provides ways to build checks around component stories.

These methods need appropriate coverage and review. Automated accessibility tools cannot establish full accessibility on their own, and component tests do not exercise every product workflow.

Retest the specific issue after a fix and check the surrounding task when it may be affected. Record accepted exceptions so the same intentional decision is not repeatedly reported as a defect.

## Related terms

- [Visual Regression Testing](/glossary/visual-regression-testing.html)
- [Storybook](/glossary/storybook.html)
- [Web Accessibility Audit](/glossary/web-accessibility-audit.html)
- [Design-to-Code Workflow](/glossary/design-to-code-workflow.html)

## Sources

- [How to test UIs with Storybook](https://storybook.js.org/docs/writing-tests)
- [Evaluating Web Accessibility, W3C WAI](https://www.w3.org/WAI/test-evaluate/)
