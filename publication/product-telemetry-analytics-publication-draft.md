---
url: "https://lexkonovalov.com/glossary/product-telemetry-analytics.html"
title: "Product Telemetry and Analytics | Product Design Glossary"
description: "Learn how product telemetry supports analytics. An invoice example shows how to define events, verify their triggers, and count outcomes reliably."
canonical: "https://lexkonovalov.com/glossary/product-telemetry-analytics.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Product Telemetry and Analytics | Product Design Glossary", "og:description": "Learn how product telemetry supports analytics. An invoice example shows how to define events, verify their triggers, and count outcomes reliably.", "og:url": "https://lexkonovalov.com/glossary/product-telemetry-analytics.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Product Strategy & Growth, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use product-telemetry-analytics as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all 4 related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/product-telemetry-analytics.html#webpage",
        "url": "https://lexkonovalov.com/glossary/product-telemetry-analytics.html",
        "name": "Product Telemetry and Analytics | Product Design Glossary",
        "description": "Learn how product telemetry supports analytics. An invoice example shows how to define events, verify their triggers, and count outcomes reliably.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/product-telemetry-analytics.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/product-telemetry-analytics.html#breadcrumbs"
        },
        "citation": [
          "https://amplitude.com/docs/get-started/plan-your-implementation",
          "https://www.amplitude.com/docs/data/user-properties-and-events"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/product-telemetry-analytics.html#term",
        "name": "Product Telemetry & Analytics",
        "termCode": "product-telemetry-analytics",
        "description": "Product telemetry is the data a product records about actions and system behavior. Product analytics uses that data to answer questions about how people use the product and where they reach or miss important outcomes. Data can come from the interface, backend services, or both.",
        "url": "https://lexkonovalov.com/glossary/product-telemetry-analytics.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/product-telemetry-analytics.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/product-telemetry-analytics.html#breadcrumbs",
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
            "name": "Product Telemetry & Analytics",
            "item": "https://lexkonovalov.com/glossary/product-telemetry-analytics.html"
          }
        ]
      }
    ]
  }
---

# Product Telemetry & Analytics

Product telemetry is the data a product records about actions and system behavior. Product analytics uses that data to answer questions about how people use the product and where they reach or miss important outcomes. Data can come from the interface, backend services, or both.

## What belongs in a tracking plan?

Start with a decision. To learn whether new accounts send their first invoice, identify the events needed to measure that outcome. For each event, document its name, exact trigger, source, required properties, and owner. Choose an identifier and timestamp that let you link related events and count at the right level.

## Example of an invoice tracking plan

| Event | Trigger and source | What it tells you |
|---|---|---|
| Account Created | The backend successfully creates an account | When the account enters the signup cohort |
| Invoice Preview Opened | The interface displays the preview | Whether someone saw the preview |
| Invoice Sent | The sending service records a successful send | Whether the account reached the activation milestone |

In this example, the tracking plan uses an account identifier to join signup and sending. The send event includes an invoice ID and a test flag. Use a stable event ID to deduplicate repeated delivery of the same event. In this product, a successful send means the provider accepted the message for delivery. Delivery, payment, and a click on “Send” are separate signals.

## How do you check the data before using it?

1. **Verify the trigger.** Run a successful send, a failed send, and a test send. Check that only a qualifying real send counts toward activation.
2. **Check repeated events.** Retry the same operation and check how the event pipeline handles duplicates. For activation, count each eligible account once within the seven-day window.
3. **Reconcile a sample.** Compare the analytics events with the product records and investigate mismatched counts, missing IDs, and delayed events.
4. **Limit what you collect.** Use the properties needed for the analysis. Invoice content and recipient details can stay out of this tracking plan.

A sequence of preview and send events can show how often accounts continue after seeing the preview. To find out why, observe users trying to send an invoice or ask about the decision they made at that step.

## Related terms

- [Component Telemetry](/glossary/component-telemetry.html)
- [Continuous Experimentation](/glossary/continuous-experimentation.html)
- [A/B Testing (Split Testing)](/glossary/ab-testing-split-testing.html)
- [Activation Metric](/glossary/activation-metric.html)

## Sources

- [Plan your implementation, Amplitude Docs](https://amplitude.com/docs/get-started/plan-your-implementation)
- [User properties and event properties, Amplitude Docs](https://www.amplitude.com/docs/data/user-properties-and-events)
