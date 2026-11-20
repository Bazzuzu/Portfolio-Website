---
url: "https://lexkonovalov.com/glossary/activation-metric.html"
title: "Activation Metric and Rate | Product Design Glossary"
description: "Learn how to choose an activation event, calculate activation rate, and check whether early product behavior is associated with later retention."
canonical: "https://lexkonovalov.com/glossary/activation-metric.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Activation Metric and Rate | Product Design Glossary", "og:description": "Learn how to choose an activation event, calculate activation rate, and check whether early product behavior is associated with later retention.", "og:url": "https://lexkonovalov.com/glossary/activation-metric.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Product Strategy & Growth, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use activation-metric as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all 4 related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/activation-metric.html#webpage",
        "url": "https://lexkonovalov.com/glossary/activation-metric.html",
        "name": "Activation Metric and Rate | Product Design Glossary",
        "description": "Learn how to choose an activation event, calculate activation rate, and check whether early product behavior is associated with later retention.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/activation-metric.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/activation-metric.html#breadcrumbs"
        },
        "citation": [
          "https://info.amplitude.com/rs/138-CDN-550/images/Mastering_Engagement_Playbook_02_26_19_Amplitude.pdf",
          "https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation",
          "https://amplitude.com/blog/time-to-value-drives-user-retention"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/activation-metric.html#term",
        "name": "Activation Metric",
        "termCode": "activation-metric",
        "description": "An activation metric measures whether new users or accounts reach a milestone that indicates initial product value. An activation event records the behavior used to identify that milestone. The activation rate is the percentage of eligible new users or accounts that reach it within a specified time window.",
        "url": "https://lexkonovalov.com/glossary/activation-metric.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/activation-metric.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/activation-metric.html#breadcrumbs",
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
            "name": "Activation Metric",
            "item": "https://lexkonovalov.com/glossary/activation-metric.html"
          }
        ]
      }
    ]
  }
---

# Activation Metric

An activation metric measures whether new users or accounts reach a milestone that indicates initial product value. An activation event records the behavior used to identify that milestone. The activation rate is the percentage of eligible new users or accounts that reach it within a specified time window.

## How do you choose an activation event?

Start with the outcome people came for. In an invoicing product, account creation and opening a template are setup steps. Sending a first invoice is a stronger candidate when the product’s job is to help businesses bill their clients. If users can send test invoices, distinguish those from real ones in the event definition.

Use research to check whether the action reflects progress users care about. Then use behavioral data to test whether it is associated with later meaningful use. Some products need a milestone made up of several actions. In a shared workspace, for example, value may depend on two people completing a task together.

## How do you calculate activation rate?

**Activation rate = eligible new users or accounts that reach the milestone within the window ÷ all eligible new users or accounts in the cohort × 100.**

In the invoicing example, count new accounts that send a first real invoice within seven days of signup. If 120 of 200 eligible accounts do so, seven-day activation is **60%**. Count each account once, including accounts where several teammates send invoices. Report the cohort after every account has had seven days to activate.

## How do you validate the milestone?

Compare later usage for accounts that reach the milestone and accounts that do not reach it by day seven. Use a later outcome both groups can reach, such as sending any real invoice during days 15–30 after signup. A second invoice would require a first and would favor accounts that have already sent one. Set the same observation window and check whether the pattern holds across comparable cohorts.

An association can help you choose a milestone. It cannot establish that prompting the action will improve retention. Accounts with more urgent invoicing needs may be more likely to do both. Test a change that helps users achieve the outcome and check its effect on activation and later use.

Read activation rate alongside [time to value](/glossary/time-to-value-ttv.html). One tells you how many accounts reached the milestone within a window. The other tells you how long it took for accounts that reached it.

## Related terms

- [Time-to-Value (TTV)](/glossary/time-to-value-ttv.html)
- [Product-Led Growth (PLG)](/glossary/product-led-growth-plg.html)
- [Conversion Funnel](/glossary/conversion-funnel-architecture.html)
- [Product Telemetry & Analytics](/glossary/product-telemetry-analytics.html)

## Sources

- [Mastering Engagement Playbook, Amplitude](https://info.amplitude.com/rs/138-CDN-550/images/Mastering_Engagement_Playbook_02_26_19_Amplitude.pdf)
- [How Amplitude calculates retention](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation)
- [Time to Value, Amplitude](https://amplitude.com/blog/time-to-value-drives-user-retention)
