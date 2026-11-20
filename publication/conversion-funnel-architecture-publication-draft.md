---
url: "https://lexkonovalov.com/glossary/conversion-funnel-architecture.html"
title: "Conversion Funnel: Steps and Drop-Off | Product Design Glossary"
description: "Learn how to build and read a conversion funnel. A travel quote example shows step conversion, overall conversion, and why denominators matter."
canonical: "https://lexkonovalov.com/glossary/conversion-funnel-architecture.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Conversion Funnel: Steps and Drop-Off | Product Design Glossary", "og:description": "Learn how to build and read a conversion funnel. A travel quote example shows step conversion, overall conversion, and why denominators matter.", "og:url": "https://lexkonovalov.com/glossary/conversion-funnel-architecture.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Product Strategy & Growth, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use conversion-funnel-architecture as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all 3 related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
  
  
  Set the visible term name to Conversion Funnel in the page, glossary index, and breadcrumb. Keep the existing conversion-funnel-architecture slug and termCode. Update displayed link labels where practical while preserving their destinations. Retain the previous title as an alternate name.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/conversion-funnel-architecture.html#webpage",
        "url": "https://lexkonovalov.com/glossary/conversion-funnel-architecture.html",
        "name": "Conversion Funnel: Steps and Drop-Off | Product Design Glossary",
        "description": "Learn how to build and read a conversion funnel. A travel quote example shows step conversion, overall conversion, and why denominators matter.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/conversion-funnel-architecture.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/conversion-funnel-architecture.html#breadcrumbs"
        },
        "citation": [
          "https://support.google.com/analytics/answer/9327974?hl=en",
          "https://amplitude.com/docs/analytics/charts/funnel-analysis/funnel-analysis-how-amplitude-computes-conversions"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/conversion-funnel-architecture.html#term",
        "name": "Conversion Funnel",
        "termCode": "conversion-funnel-architecture",
        "description": "A conversion funnel is a model for measuring how many eligible users or accounts complete a defined sequence of steps toward an outcome. It shows completion and drop-off between milestones, such as viewing travel results, requesting a quote, and completing a booking.",
        "url": "https://lexkonovalov.com/glossary/conversion-funnel-architecture.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/conversion-funnel-architecture.html#webpage"
        },
        "alternateName": [
          "Conversion Funnel Architecture"
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
        "@id": "https://lexkonovalov.com/glossary/conversion-funnel-architecture.html#breadcrumbs",
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
            "name": "Conversion Funnel",
            "item": "https://lexkonovalov.com/glossary/conversion-funnel-architecture.html"
          }
        ]
      }
    ]
  }
---

# Conversion Funnel

A conversion funnel is a model for measuring how many eligible users or accounts complete a defined sequence of steps toward an outcome. It shows completion and drop-off between milestones, such as viewing travel results, requesting a quote, and completing a booking.

## How do you define the steps?

Choose milestones you can identify reliably. Define who enters the funnel, what counts as completing each step, and how much time people have to progress. Decide whether participants must enter at the first step. In Google Analytics, a closed funnel starts at the first step, while an open funnel can admit users at later steps.

Keep the unit consistent. For a travel quote funnel, count unique travelers across the steps and use linked records to follow the same request through qualification and booking. Specify what “qualified lead” means in your business before comparing results.

## How do you calculate funnel conversion?

Suppose 1,000 travelers view results. Count each traveler once per step if they complete that step in sequence within 30 days of entry. Qualification and booking must refer to the same quote request.

| Step | Travelers reaching the step | Conversion from previous step |
|---|---:|---:|
| View results | 1,000 | — |
| Submit quote request | 200 | 20% |
| Have the request qualified | 80 | 40% |
| Complete the booking | 20 | 25% |

**Step conversion** divides a step’s count by the previous step’s count. Here, qualified lead to booking is 20 ÷ 80 = **25%**. **Overall conversion** divides the final count by the entry count. Here, results to booking is 20 ÷ 1,000 = **2%**. Label the denominator so readers can tell which part of the journey each rate describes.

## What does drop-off tell you?

The funnel shows where fewer people continue. It can reflect a design problem, a deliberate choice, or a business rule. In this example, travelers may choose to browse without requesting a quote, and some requests will fail qualification by design.

Check tracking first, then investigate a promising step with research. For example, observe whether travelers understand what submitting a quote request commits them to. If you change the form, monitor completed bookings and lead quality as well as submissions. The funnel helps locate the question your research or experiment needs to answer.

## Related terms

- [Conversion Rate Optimization (CRO)](/glossary/conversion-rate-optimization-cro.html)
- [Checkout Flow Optimization](/glossary/checkout-flow-optimization.html)
- [Time-to-Value (TTV)](/glossary/time-to-value-ttv.html)

## Sources

- [Funnel exploration, Google Analytics Help](https://support.google.com/analytics/answer/9327974?hl=en)
- [How Amplitude computes conversions through funnels, Amplitude Docs](https://amplitude.com/docs/analytics/charts/funnel-analysis/funnel-analysis-how-amplitude-computes-conversions)
