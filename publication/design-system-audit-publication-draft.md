---
url: "https://lexkonovalov.com/glossary/design-system-audit.html"
title: "Design System Audit Checklist | Product Design Glossary"
description: "Learn how to audit design assets, code, tokens, documentation, and real product usage, then turn discrepancies into a focused design system backlog."
canonical: "https://lexkonovalov.com/glossary/design-system-audit.html"
language: "en-US"
categories: ["Design Systems & Engineering"]
topic_cluster: "Design OPS"
open_graph: {"og:type": "website", "og:title": "Design System Audit Checklist | Product Design Glossary", "og:description": "Learn how to audit design assets, code, tokens, documentation, and real product usage, then turn discrepancies into a focused design system backlog.", "og:url": "https://lexkonovalov.com/glossary/design-system-audit.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render only the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data. Use one H1 and existing glossary styling. Add this new entry to the glossary index and the existing category values supplied above; topic_cluster is editorial grouping, not an instruction to rename site-wide categories.
  
  Apply the exact title, description, canonical, language and Open Graph values. Override automatic title suffixes for this page. Synchronize existing Twitter title, description and image fields. Use clean canonical URLs without tracking parameters.
  
  Emit the full structured_data graph below in a script of type application/ld+json. Merge nodes by @id rather than duplicating them. Reuse #term, #terms and #breadcrumbs; use #webpage or consistently reuse the site's equivalent page ID. Keep the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve other terms when merging DefinedTermSet. Its name is Product Design Glossary and its ID is distinct from WebSite. Synchronize the DefinedTerm description with the visible opening definition. Do not add FAQPage or HowTo. Fill publication and modification dates only from actual publication history.
  
  Render visible breadcrumbs matching the graph. Preserve all supplied contextual, related-term and source links. Keep Previous/Next navigation. Render tables with semantic headers and make wide tables usable on mobile. Treat code and examples as illustrative; do not execute them as deployment instructions.
  
  Serve this entry at the exact canonical route above after checking for a conflicting existing route or redirect. Preserve all other existing glossary URLs. Make the article and metadata available in initial HTML through the site's existing static generation or prerendering path. Add the canonical to the sitemap; use the actual deployment date for lastmod if maintained.
  
  Implement the specific inbound links listed below in the corresponding source pages, inside relevant existing sections or their Related terms lists. Do not create duplicate paragraphs when that link already exists. New target dependencies must ship together, or in dependency order with links activated when destinations exist.
  
  Run the existing build; inspect generated HTML for the article, one H1, canonical, title, metadata, internal links and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Check direct page loads, crawlability and unintended noindex/robots restrictions. Follow the project's authorized deployment workflow, then verify the published page. Report checks that cannot be run.
inbound_links: [{"source": "/glossary/design-system.html", "placement": "Add a link where teams inspect current assets before choosing shared work.", "anchor": "design system audit"}, {"source": "/glossary/design-system-governance.html", "placement": "Link when gathering evidence for consolidation or retirement decisions.", "anchor": "audit"}]
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-system-audit.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-system-audit.html",
        "name": "Design System Audit Checklist | Product Design Glossary",
        "description": "Learn how to audit design assets, code, tokens, documentation, and real product usage, then turn discrepancies into a focused design system backlog.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-system-audit.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-system-audit.html#breadcrumbs"
        },
        "citation": [
          "https://design-system.service.gov.uk/community/contribution-criteria/",
          "https://designsystem.digital.gov/maturity-model/",
          "https://www.w3.org/WAI/test-evaluate/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-system-audit.html#term",
        "name": "Design System Audit",
        "termCode": "design-system-audit",
        "description": "A design system audit is a structured review of a system's assets, implementation, guidance, and use in products. It identifies gaps and inconsistencies so teams can decide what to fix, consolidate, document, or retire.",
        "url": "https://lexkonovalov.com/glossary/design-system-audit.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-system-audit.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/design-system-audit.html#breadcrumbs",
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
            "name": "Design System Audit",
            "item": "https://lexkonovalov.com/glossary/design-system-audit.html"
          }
        ]
      }
    ]
  }
---

# Design System Audit

A design system audit is a structured review of a system's assets, implementation, guidance, and use in products. It identifies gaps and inconsistencies so teams can decide what to fix, consolidate, document, or retire.

## What should a design system audit cover?

Set the scope before gathering findings. Record the products, libraries, packages, versions, flows, and dates included.

| Area | Questions to investigate |
|---|---|
| Design assets | Are components current, findable, and clearly named? |
| Code | Which implementations and versions are actually used? |
| Tokens | Are roles consistent, and where are values overridden? |
| Documentation | Do examples match supported APIs and behavior? |
| Product experience | Do shared parts work together in real tasks? |
| Ownership | Can teams resolve a gap or request a change? |

A visual inventory is a useful starting point. It cannot establish whether the code API, keyboard behavior, or maintenance process is correct.

## Example: three implementations of a date field

Suppose an audit finds three date fields with similar appearance. One uses the current shared component, one uses an old version, and one is a local implementation.

Check why each exists. The local field may support a genuine requirement the shared component lacks. The old version may be blocked by a compatibility issue.

Record the evidence, affected tasks, likely impact, owner, and proposed next step. “Replace everything with the newest field” is premature until the team understands those differences.

## How do you turn findings into action?

Group findings by cause, such as an unclear API, a missing interaction state, or an outdated migration guide. Separate a correction to one product from a change to the shared system.

Prioritize by user impact, repetition, dependencies, and effort. Assign a concrete outcome: fix a focus problem, document an exception, consolidate a duplicate, or retire an unsupported asset.

Keep a record of what was inspected. An audit covering two flows should not be reported as a complete organization-wide assessment.

## Design system audit vs. accessibility audit

An audit can find accessibility problems, but a design system inventory is not a WCAG conformance evaluation. That requires a defined accessibility scope and appropriate evaluation methods.

Likewise, passing component checks does not establish accessibility for every consuming page. Use a [web accessibility audit](/glossary/web-accessibility-audit.html) and task testing where the question concerns complete experiences.

Repeat the relevant checks after remediation. A backlog entry marked complete is not evidence that the original discrepancy has disappeared.

## Related terms

- [Design System Adoption](/glossary/design-system-adoption.html)
- [Design System Metrics](/glossary/design-system-metrics.html)
- [Design Debt](/glossary/design-debt.html)
- [Web Accessibility Audit](/glossary/web-accessibility-audit.html)

## Sources

- [Contribution criteria, GOV.UK Design System](https://design-system.service.gov.uk/community/contribution-criteria/)
- [USWDS maturity model](https://designsystem.digital.gov/maturity-model/)
- [Evaluating Web Accessibility, W3C WAI](https://www.w3.org/WAI/test-evaluate/)
