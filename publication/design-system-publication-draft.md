---
url: "https://lexkonovalov.com/glossary/design-system.html"
title: "What Is a Design System? | Product Design Glossary"
description: "Learn what a design system includes and how it differs from a UI kit or component library. Follow a shared button from design to maintenance."
canonical: "https://lexkonovalov.com/glossary/design-system.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "What Is a Design System? | Product Design Glossary", "og:description": "Learn what a design system includes and how it differs from a UI kit or component library. Follow a shared button from design to maintenance.", "og:url": "https://lexkonovalov.com/glossary/design-system.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, Product Strategy & Growth and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use design-system as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-system.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-system.html",
        "name": "What Is a Design System? | Product Design Glossary",
        "description": "Learn what a design system includes and how it differs from a UI kit or component library. Follow a shared button from design to maintenance.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-system.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-system.html#breadcrumbs"
        },
        "citation": [
          "https://design-system.service.gov.uk/",
          "https://design-system.service.gov.uk/components/button/",
          "https://design-system.service.gov.uk/community/contribution-criteria/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-system.html#term",
        "name": "Design System",
        "termCode": "design-system",
        "description": "A design system is a maintained set of shared decisions, reusable components, and guidelines for designing and building a product or family of products. It gives teams a common way to create interfaces and a process for improving the pieces they share.",
        "url": "https://lexkonovalov.com/glossary/design-system.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-system.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/design-system.html#breadcrumbs",
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
            "name": "Design System",
            "item": "https://lexkonovalov.com/glossary/design-system.html"
          }
        ]
      }
    ]
  }
---

# Design System

A design system is a maintained set of shared decisions, reusable components, and guidelines for designing and building a product or family of products. It gives teams a common way to create interfaces and a process for improving the pieces they share.

## What does a design system include?

| Part | What it helps teams decide |
|---|---|
| Foundations and tokens | Which colors, spacing, and other design decisions to reuse |
| Components | How common controls such as buttons and text inputs look and behave |
| [Patterns](/glossary/pattern-library.html) and guidance | How to combine components for tasks such as entering an address or recovering from an error |
| Maintenance | Who reviews changes, how teams contribute, and how products adopt updates |

Start with the parts your teams repeatedly need. The GOV.UK Design System is a public example with styles, components, patterns, and contribution criteria.

## Design system vs. component library vs. UI kit

A **UI kit** typically provides reusable design assets in a design tool. A **component library** provides reusable interface components. A design system connects those assets and implementations to usage guidance and maintenance. A team can use a library from another organization and document the additional decisions its own products need.

## Example of a shared button

Suppose two teams use a primary button in checkout and account settings. They agree on how the button presents a label and keyboard focus, which tokens it uses, and when a secondary action should have less visual emphasis. The [component library](/glossary/component-libraries.html) provides the implementation. The system documents when to use it and how to request a change.

If checkout introduces a pending state, the teams review what happens to the label, feedback, and repeat submissions. They decide which behavior belongs in the shared component and which belongs to checkout. They test the button in both products. Checkout owns the payment request and its outcome, while the system can document how the button presents a pending action.

## How do you start a design system?

Pick one recurring pattern with a clear owner and two real places to try it. Document what should stay consistent and what product teams can configure. Check the result in context and record how consuming teams will get future fixes. Use feedback from the first two implementations to decide what to document or share next.

## Related terms

- [Design Tokens](/glossary/design-tokens.html)
- [Component Architecture](/glossary/component-architecture.html)
- [DesignOps](/glossary/designops.html)
- [Component Libraries](/glossary/component-libraries.html)
- [Design System Governance](/glossary/design-system-governance.html)

- [Design System Documentation](/glossary/design-system-documentation.html)

- [Design System Audit](/glossary/design-system-audit.html)

- [AI-ready Design System](/glossary/ai-ready-design-system.html)

## Sources

- [GOV.UK Design System](https://design-system.service.gov.uk/)
- [Button, GOV.UK Design System](https://design-system.service.gov.uk/components/button/)
- [Contribution criteria, GOV.UK Design System](https://design-system.service.gov.uk/community/contribution-criteria/)
