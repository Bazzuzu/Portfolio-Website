---
url: "https://lexkonovalov.com/glossary/user-retention.html"
title: "User Retention: Definition and Formula | Product Design Glossary"
description: "Learn how to calculate user retention with a cohort, a meaningful return event, and a time window. Includes a worked account retention example."
canonical: "https://lexkonovalov.com/glossary/user-retention.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "User Retention: Definition and Formula | Product Design Glossary", "og:description": "Learn how to calculate user retention with a cohort, a meaningful return event, and a time window. Includes a worked account retention example.", "og:url": "https://lexkonovalov.com/glossary/user-retention.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the glossary entry at https://lexkonovalov.com/glossary/user-retention.html after checking the route for conflicts. Register User Retention under Product Strategy & Growth. Use the glossary's existing sorting and navigation rules and refresh derived counts.
  
  Render the Markdown body as the article. Apply the supplied title, description, canonical, language, Open Graph, and existing Twitter fields. Use one H1 and visible breadcrumbs matching the graph.
  
  Emit structured_data as JSON-LD. Merge nodes by @id and retain the existing WebSite, Person, and DefinedTermSet identities. Use user-retention as termCode and keep the DefinedTerm description identical to the opening paragraph. Use actual publication dates when maintained.
  
  Add the canonical URL to the glossary index and sitemap. Add contextual links to User Retention from Activation Metric, Growth Design, and Churn Mitigation Architecture once the destination is live. Publish the North Star Metric update with this entry or after it so its related link resolves. Preserve existing destinations.
  
  Run the existing build. Check direct loads, HTTP 200, initial and rendered HTML, indexability, metadata, related links, and JSON-LD. Validate the graph with Schema.org Validator and the breadcrumb with Google's Rich Results Test. Follow the project deployment workflow and verify the live result.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/user-retention.html#webpage",
        "url": "https://lexkonovalov.com/glossary/user-retention.html",
        "name": "User Retention: Definition and Formula | Product Design Glossary",
        "description": "Learn how to calculate user retention with a cohort, a meaningful return event, and a time window. Includes a worked account retention example.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/user-retention.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/user-retention.html#breadcrumbs"
        },
        "citation": [
          "https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-build",
          "https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation",
          "https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-time"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/user-retention.html#term",
        "name": "User Retention",
        "termCode": "user-retention",
        "description": "User retention measures how many people in a starting group return to use a product over time. A retention rate uses a defined group, a return behavior, and a time window. For a product used by teams, the same approach can measure retention at the account level.",
        "url": "https://lexkonovalov.com/glossary/user-retention.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/user-retention.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/user-retention.html#breadcrumbs",
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
            "name": "User Retention",
            "item": "https://lexkonovalov.com/glossary/user-retention.html"
          }
        ]
      }
    ]
  }
---

# User Retention

User retention measures how many people in a starting group return to use a product over time. A retention rate uses a defined group, a return behavior, and a time window. For a product used by teams, the same approach can measure retention at the account level.

## How do you calculate a retention rate?

**Retention rate = eligible cohort members who meet the return condition ÷ all eligible members of the starting cohort × 100.**

A cohort is a group that shares a starting condition, such as signing up in the same week. Define what counts as returning, then give every cohort member the full observation window. Choose a return event that reflects the product’s job, such as sending an invoice for an invoicing tool.

## Example of account retention

An invoicing team wants to know whether new accounts keep using the product after initial activation. The cohort includes 120 eligible new accounts that sent their first real invoice within seven days of signup. The return condition is sending another real invoice during days 15–30 after signup.

If 72 of those accounts meet the return condition, the **retention rate for this activated cohort is 60%** (72 ÷ 120 × 100). Count each account once, even if its team sends several invoices. Read the result after all accounts have finished day 30.

To compare later use across activated and non-activated accounts, use a return condition both can meet. Sending any real invoice during days 15–30 works for that question. It answers a different question from repeat use among accounts that already sent an invoice.

## Which time window should you use?

Match the window to the natural usage cycle. A daily collaboration tool and a monthly invoicing product can show very different patterns. Day-30 retention counts a return on that day. A days 15–30 window counts any qualifying return in that interval. For “day 30 or later,” state the reporting cutoff and give cohorts comparable follow-up time.

Read retention alongside [activation](/glossary/activation-metric.html). Activation tracks initial progress. Retention tracks a return to meaningful work. A drop in usage retention can prompt investigation into who stopped returning and why. Subscription churn measures a separate outcome, such as cancellation or nonrenewal.

## Related terms

- [Activation Metric](/glossary/activation-metric.html)
- [Time-to-Value (TTV)](/glossary/time-to-value-ttv.html)
- [North Star Metric (NSM)](/glossary/north-star-metric-nsm.html)
- [Churn Mitigation Architecture](/glossary/churn-mitigation-architecture.html)

## Sources

- [Build a retention analysis, Amplitude Docs](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-build)
- [How the Retention Analysis chart calculates retention, Amplitude Docs](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation)
- [How time works in a retention analysis, Amplitude Docs](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-time)
