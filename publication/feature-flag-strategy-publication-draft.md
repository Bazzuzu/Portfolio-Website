---
url: "https://lexkonovalov.com/glossary/feature-flag-strategy.html"
title: "Feature Flags: Rollouts and A/B Tests | Product Design Glossary"
description: "Learn how to plan feature flags for staged rollouts and experiments. Set eligibility, monitor outcomes, and define fallback behavior and cleanup."
canonical: "https://lexkonovalov.com/glossary/feature-flag-strategy.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Feature Flags: Rollouts and A/B Tests | Product Design Glossary", "og:description": "Learn how to plan feature flags for staged rollouts and experiments. Set eligibility, monitor outcomes, and define fallback behavior and cleanup.", "og:url": "https://lexkonovalov.com/glossary/feature-flag-strategy.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Product Strategy & Growth, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use feature-flag-strategy as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all 4 related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/feature-flag-strategy.html#webpage",
        "url": "https://lexkonovalov.com/glossary/feature-flag-strategy.html",
        "name": "Feature Flags: Rollouts and A/B Tests | Product Design Glossary",
        "description": "Learn how to plan feature flags for staged rollouts and experiments. Set eligibility, monitor outcomes, and define fallback behavior and cleanup.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/feature-flag-strategy.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/feature-flag-strategy.html#breadcrumbs"
        },
        "citation": [
          "https://martinfowler.com/articles/feature-toggles.html",
          "https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/",
          "https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/feature-flag-strategy.html#term",
        "name": "Feature Flag Strategy",
        "termCode": "feature-flag-strategy",
        "description": "A feature flag strategy defines how a team uses configurable switches to control which users or accounts get a feature. Flags let teams deploy code separately from exposing it. A strategy covers who gets access, how the team checks the release, what happens when a flag is turned off, and when the team can remove it.",
        "url": "https://lexkonovalov.com/glossary/feature-flag-strategy.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/feature-flag-strategy.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/feature-flag-strategy.html#breadcrumbs",
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
            "name": "Feature Flag Strategy",
            "item": "https://lexkonovalov.com/glossary/feature-flag-strategy.html"
          }
        ]
      }
    ]
  }
---

# Feature Flag Strategy

A feature flag strategy defines how a team uses configurable switches to control which users or accounts get a feature. Flags let teams deploy code separately from exposing it. A strategy covers who gets access, how the team checks the release, what happens when a flag is turned off, and when the team can remove it.

## How do rollouts and experiments use flags?

| Use | What the flag controls | What the team decides |
|---|---|---|
| Staged rollout | Which eligible accounts can use the feature as exposure expands | Whether the feature is ready for more accounts |
| A/B test | Which experience each assigned account receives | Whether the tested change affects a predefined outcome |
| Operational switch | Whether a capability stays enabled during a problem | When to use the fallback and how to recover |

A flag can deliver the variants in an [A/B test](/glossary/ab-testing-split-testing.html). Estimating the effect still requires sound assignment, tracking, and analysis. A staged rollout can surface problems, but changes in metrics as exposure expands can also reflect changes in the audience.

## Example of a staged rollout

An invoicing team releases a new preview to internal accounts, then to a small share of eligible customer accounts. Keep exposure consistent within an account so teammates working on the same invoice see the same experience. Before expanding, the team reviews preview failures and the share of eligible exposed accounts that send a first real invoice within seven days of signup. It agrees in advance which problems warrant pausing, such as a loss of draft data.

The team tests what happens if it switches back while an invoice draft is open. Check that the draft remains available in the original experience. Previously sent invoices should still appear in the customer’s history. Plan a separate recovery path for changes that persist after the flag is turned off.

## What should a flag plan include?

- **Purpose and owner.** Record the decision the flag supports and who can change it.
- **Eligibility and fallback.** Define the audience, assignment rules, and the default when flag configuration is unavailable. Test both experiences.
- **Monitoring and response.** Specify which signals prompt a pause, an expansion, or a switch back.
- **Cleanup.** Give temporary flags a review date. After the release decision, remove the flag and unused code path when it is safe to do so.

## Related terms

- [Continuous Experimentation](/glossary/continuous-experimentation.html)
- [A/B Testing (Split Testing)](/glossary/ab-testing-split-testing.html)
- [Design Engineering](/glossary/design-engineering.html)
- [DesignOps](/glossary/designops.html)

## Sources

- [Feature Toggles, Pete Hodgson](https://martinfowler.com/articles/feature-toggles.html)
- [Patterns of Trustworthy Experimentation: Pre-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)
- [Patterns of Trustworthy Experimentation: During-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/)
