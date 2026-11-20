---
url: "https://lexkonovalov.com/glossary/ab-testing-split-testing.html"
title: "A/B Testing in UX | Product Design Glossary"
description: "Learn how to plan and interpret a UX A/B test. A practical example covers random assignment, success metrics, guardrails, and inconclusive results."
canonical: "https://lexkonovalov.com/glossary/ab-testing-split-testing.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "A/B Testing in UX | Product Design Glossary", "og:description": "Learn how to plan and interpret a UX A/B test. A practical example covers random assignment, success metrics, guardrails, and inconclusive results.", "og:url": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Product Strategy & Growth, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use ab-testing-split-testing as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all 4 related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html#webpage",
        "url": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html",
        "name": "A/B Testing in UX | Product Design Glossary",
        "description": "Learn how to plan and interpret a UX A/B test. A practical example covers random assignment, success metrics, guardrails, and inconclusive results.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html#breadcrumbs"
        },
        "citation": [
          "https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/",
          "https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/",
          "https://www.microsoft.com/en-us/research/publication/diagnosing-sample-ratio-mismatch-in-online-controlled-experiments-a-taxonomy-and-rules-of-thumb-for-practitioners/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html#term",
        "name": "A/B Testing (Split Testing)",
        "termCode": "ab-testing-split-testing",
        "description": "A/B testing is a controlled experiment that randomly assigns eligible participants to different versions of a product experience and compares predefined outcomes. A well-run test helps estimate the effect of a change for the audience and conditions tested.",
        "url": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html#webpage"
        },
        "alternateName": [
          "A/B Testing",
          "Split Testing"
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
        "@id": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html#breadcrumbs",
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
            "name": "A/B Testing (Split Testing)",
            "item": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html"
          }
        ]
      }
    ]
  }
---

# A/B Testing (Split Testing)

A/B testing is a controlled experiment that randomly assigns eligible participants to different versions of a product experience and compares predefined outcomes. A well-run test helps estimate the effect of a change for the audience and conditions tested.

## How do you plan a UX A/B test?

Suppose new accounts draft an invoice but hesitate to send it because they cannot see what their client will receive. The team tests a preview that shows the invoice as the client would see it.

| Decision | Example |
|---|---|
| Hypothesis | A preview helps more new accounts send a first real invoice by showing what the client will receive. |
| Control and treatment | Group A sees the current experience. Group B gets an option to preview the invoice as the client would see it. |
| Unit of randomization | Assign each eligible new account at signup so teammates use the same version. |
| Primary metric | Percentage of assigned accounts that send a first real invoice within seven days. |
| Guardrails | Accidental sends and invoice-related support requests per assigned account. |

Before launch, agree on the smallest effect worth acting on, the sample and duration needed, and the analysis and stopping rules. Make sure each account has the full outcome window before the final analysis. In this example, the denominator includes all eligible assigned accounts, including accounts that never open the preview.

## What should you check before reading the result?

Verify that assignment and events work in both variants. Compare the observed group sizes with the planned allocation. A statistically significant difference between the observed and planned group proportions is a **sample ratio mismatch**. It can indicate problems with assignment, eligibility, or tracking. Diagnose it before interpreting the treatment effect.

## How do you interpret an inconclusive test?

Review the estimated difference and its uncertainty alongside guardrails. Suppose the estimated change is +2 percentage points, with a 95% confidence interval from −1 to +5 points. The interval spans both a decrease and an improvement. If those outcomes would lead to different decisions, the test has left the decision uncertain.

Agree on the next step based on what is still unknown. Verify the implementation if data quality is in doubt. Revisit the hypothesis if users did not understand the preview. If you need a more precise estimate, plan a follow-up with enough traffic and a suitable analysis rule.

## Related terms

- [Continuous Experimentation](/glossary/continuous-experimentation.html)
- [Conversion Rate Optimization (CRO)](/glossary/conversion-rate-optimization-cro.html)
- [Feature Flag Strategy](/glossary/feature-flag-strategy.html)
- [Product Telemetry & Analytics](/glossary/product-telemetry-analytics.html)

## Sources

- [Patterns of Trustworthy Experimentation: Pre-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)
- [Patterns of Trustworthy Experimentation: During-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/)
- [Diagnosing Sample Ratio Mismatch in Online Controlled Experiments, Microsoft Research](https://www.microsoft.com/en-us/research/publication/diagnosing-sample-ratio-mismatch-in-online-controlled-experiments-a-taxonomy-and-rules-of-thumb-for-practitioners/)
