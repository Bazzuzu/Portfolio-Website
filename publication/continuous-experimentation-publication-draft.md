---
url: "https://lexkonovalov.com/glossary/continuous-experimentation.html"
title: "Continuous Experimentation | Product Design Glossary"
description: "Learn how product teams turn experiments into a repeatable practice, record decisions, and use results to improve the next hypothesis."
canonical: "https://lexkonovalov.com/glossary/continuous-experimentation.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Continuous Experimentation | Product Design Glossary", "og:description": "Learn how product teams turn experiments into a repeatable practice, record decisions, and use results to improve the next hypothesis.", "og:url": "https://lexkonovalov.com/glossary/continuous-experimentation.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Product Strategy & Growth, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use continuous-experimentation as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all 4 related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/continuous-experimentation.html#webpage",
        "url": "https://lexkonovalov.com/glossary/continuous-experimentation.html",
        "name": "Continuous Experimentation | Product Design Glossary",
        "description": "Learn how product teams turn experiments into a repeatable practice, record decisions, and use results to improve the next hypothesis.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/continuous-experimentation.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/continuous-experimentation.html#breadcrumbs"
        },
        "citation": [
          "https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/",
          "https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/",
          "https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-post-experiment-stage/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/continuous-experimentation.html#term",
        "name": "Continuous Experimentation",
        "termCode": "continuous-experimentation",
        "description": "Continuous experimentation is a product team’s practice of repeatedly testing hypotheses, making decisions from the evidence, and using the results to improve what it tests next. It connects experiments to regular product work through a shared process and a record of what the team learned.",
        "url": "https://lexkonovalov.com/glossary/continuous-experimentation.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/continuous-experimentation.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/continuous-experimentation.html#breadcrumbs",
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
            "name": "Continuous Experimentation",
            "item": "https://lexkonovalov.com/glossary/continuous-experimentation.html"
          }
        ]
      }
    ]
  }
---

# Continuous Experimentation

Continuous experimentation is a product team’s practice of repeatedly testing hypotheses, making decisions from the evidence, and using the results to improve what it tests next. It connects experiments to regular product work through a shared process and a record of what the team learned.

## How does the cycle work?

1. **Choose a question.** Use research and behavioral data to identify a problem. Write down what change you expect, for whom, and why.
2. **Plan the evaluation.** When a randomized test is feasible, define the assignment unit, primary outcome, guardrails, and decision rules. Check that the relevant events work in both versions.
3. **Review the evidence.** Inspect data quality, estimate the effect, and account for uncertainty and guardrails before making a decision.
4. **Record and reuse the result.** Save the hypothesis, audience, variants, metric definitions, result, decision, and follow-up question. Bring that record into the next planning discussion.

An [A/B test](/glossary/ab-testing-split-testing.html) estimates the effect of a change. Continuous experimentation describes the team practice that connects tests over time. A feature flag can control exposure. To estimate a causal effect with an A/B test, the team also needs random assignment and reliable measurement.

## Example of using one test to plan the next

An invoicing team tests whether a client preview helps more new accounts send their first real invoice within seven days. The result is inconclusive, so the team records the uncertainty alongside the guardrails and its decision to keep the current version.

In follow-up sessions, some users still hesitate because they cannot tell whether the client will receive an email immediately. The next hypothesis addresses that specific uncertainty. The team can test comprehension with a prototype, then evaluate the product change with a randomized test if traffic supports it.

A shared experiment log is enough for a small team to get started. Keep inconclusive results and rollbacks alongside successful releases. Record the audience and context so the next team can decide whether the result applies to its work.

## Related terms

- [A/B Testing (Split Testing)](/glossary/ab-testing-split-testing.html)
- [Product Discovery](/glossary/product-discovery.html)
- [Feature Flag Strategy](/glossary/feature-flag-strategy.html)
- [Growth Design](/glossary/growth-design.html)

## Sources

- [Patterns of Trustworthy Experimentation: Pre-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)
- [Patterns of Trustworthy Experimentation: During-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/)
- [Patterns of Trustworthy Experimentation: Post-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-post-experiment-stage/)
