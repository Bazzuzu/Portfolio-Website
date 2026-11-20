---
url: "https://lexkonovalov.com/glossary/design-system-governance.html"
title: "Design System Governance | Product Design Glossary"
description: "Learn how design system governance assigns ownership, evaluates contributions, and helps teams adopt changes. Includes a shared dialog example."
canonical: "https://lexkonovalov.com/glossary/design-system-governance.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Design System Governance | Product Design Glossary", "og:description": "Learn how design system governance assigns ownership, evaluates contributions, and helps teams adopt changes. Includes a shared dialog example.", "og:url": "https://lexkonovalov.com/glossary/design-system-governance.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, Product Strategy & Growth and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use design-system-governance as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-system-governance.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-system-governance.html",
        "name": "Design System Governance | Product Design Glossary",
        "description": "Learn how design system governance assigns ownership, evaluates contributions, and helps teams adopt changes. Includes a shared dialog example.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-system-governance.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-system-governance.html#breadcrumbs"
        },
        "citation": [
          "https://design-system.service.gov.uk/community/propose-a-component-or-pattern/",
          "https://design-system.service.gov.uk/community/develop-a-component-or-pattern/",
          "https://design-system.service.gov.uk/community/contribution-criteria/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-system-governance.html#term",
        "name": "Design System Governance",
        "termCode": "design-system-governance",
        "description": "Design system governance is how teams decide what belongs in a shared system, who can change it, and how those changes reach the products that use it. It defines who owns decisions, how contributors make proposals, what reviewers check, and who supports adoption.",
        "url": "https://lexkonovalov.com/glossary/design-system-governance.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-system-governance.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/design-system-governance.html#breadcrumbs",
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
            "name": "Design System Governance",
            "item": "https://lexkonovalov.com/glossary/design-system-governance.html"
          }
        ]
      }
    ]
  }
---

# Design System Governance

Design system governance is how teams decide what belongs in a shared system, who can change it, and how those changes reach the products that use it. It defines who owns decisions, how contributors make proposals, what reviewers check, and who supports adoption.

## What decisions does governance cover?

Give teams a clear route for asking for a change and a clear owner for deciding what happens. The GOV.UK Design System publishes a proposal process, contribution criteria, and guidance for developing components and patterns. A smaller system can use a shared issue tracker and named maintainers.

| Decision | What to agree on |
|---|---|
| Scope | Which needs are shared across products and which can stay within one product? |
| Evidence | What examples, user research, or compatibility checks support the proposal? |
| Responsibility | Who proposes, reviews, maintains, and communicates the change? |
| Adoption | Who updates guidance, writes migration steps, and supports consuming teams? |

## Example of reviewing a shared dialog change

A checkout team requests a wider dialog for reviewing a booking change. It shows where the current width makes it hard to compare the original and proposed fares. The system maintainers check whether other products need the same option and whether it affects focus, small screens, or longer content.

If a wider layout serves several teams, the maintainers can approve an optional variant with the existing default unchanged. Assign someone to build, document, and maintain it. A comparison layout that only checkout needs can stay in checkout and use the existing dialog behavior. Record the decision and its reason so another team can revisit it when it has new evidence.

## How can a small team keep governance lightweight?

Ask for a short proposal with the problem, candidate change, and affected consumers. Agree on a review owner and check the change in at least one real screen. If consumers need to change their code or designs, include a [version and migration plan](/glossary/design-system-versioning-semver.html). Close the loop by updating the documentation and telling the teams whose work is affected.

## Centralized and federated ownership

A centralized model places shared-system decisions with a core team. In a federated model, people from product teams share defined system responsibilities. A hybrid can combine central maintenance with distributed contributions.

State which decisions are shared and who resolves disagreements. Federation without explicit review and maintenance responsibilities can leave a component with several contributors but no accountable owner.

## What should a design system RFC contain?

A request for comments (RFC) can be a short proposal recording the problem, evidence, affected consumers, proposed change, alternatives, and compatibility implications. Set a review owner and a way to record the outcome.

The contribution model should also explain who implements, documents, supports, and eventually retires the result. Record an approved exception with its reason and review condition; do not make a new shared component merely to close a request.

## Related terms

- [DesignOps](/glossary/designops.html)
- [Design System](/glossary/design-system.html)
- [Design System Versioning & SemVer](/glossary/design-system-versioning-semver.html)
- [Component Architecture](/glossary/component-architecture.html)

- [Design System Adoption](/glossary/design-system-adoption.html)

- [Design System Audit](/glossary/design-system-audit.html)

- [Design Debt](/glossary/design-debt.html)

## Sources

- [Propose a component or pattern, GOV.UK Design System](https://design-system.service.gov.uk/community/propose-a-component-or-pattern/)
- [Develop a component or pattern, GOV.UK Design System](https://design-system.service.gov.uk/community/develop-a-component-or-pattern/)
- [Contribution criteria, GOV.UK Design System](https://design-system.service.gov.uk/community/contribution-criteria/)
