---
url: "https://lexkonovalov.com/glossary/product-qualified-lead-pql.html"
title: "Product-Qualified Lead (PQL) | Product Design Glossary"
description: "Learn what a product-qualified lead is and how to combine usage, customer fit, and intent. Includes a worked example for a team planning tool."
canonical: "https://lexkonovalov.com/glossary/product-qualified-lead-pql.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Product-Qualified Lead (PQL) | Product Design Glossary", "og:description": "Learn what a product-qualified lead is and how to combine usage, customer fit, and intent. Includes a worked example for a team planning tool.", "og:url": "https://lexkonovalov.com/glossary/product-qualified-lead-pql.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the glossary entry at https://lexkonovalov.com/glossary/product-qualified-lead-pql.html after checking the route for conflicts. Register Product-Qualified Lead (PQL) under Product Strategy & Growth. Use the existing sort and navigation rules and refresh derived counts.
  
  Render the Markdown body as the article. Apply the supplied title, description, canonical, language, Open Graph, and existing Twitter fields. Use one H1, semantic table headers, and visible breadcrumbs matching the graph.
  
  Emit structured_data as JSON-LD. Merge nodes by @id and retain the existing WebSite, Person, and DefinedTermSet identities. Use product-qualified-lead-pql as termCode and keep the DefinedTerm description identical to the opening paragraph. Use actual publication dates when maintained.
  
  Add the canonical URL to the glossary index and sitemap. Link the term from the existing PQL paragraph on the Product-Led Growth page when both pages are live. Keep the destination https://lexkonovalov.com/glossary/product-led-growth-plg.html.
  
  Run the existing build. Check direct loads, HTTP 200, initial and rendered HTML, indexability, metadata, related links, and JSON-LD. Validate the graph with Schema.org Validator and the breadcrumb with Google's Rich Results Test. Follow the project deployment workflow and verify the live result.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/product-qualified-lead-pql.html#webpage",
        "url": "https://lexkonovalov.com/glossary/product-qualified-lead-pql.html",
        "name": "Product-Qualified Lead (PQL) | Product Design Glossary",
        "description": "Learn what a product-qualified lead is and how to combine usage, customer fit, and intent. Includes a worked example for a team planning tool.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/product-qualified-lead-pql.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/product-qualified-lead-pql.html#breadcrumbs"
        },
        "citation": [
          "https://productled.com/blog/how-to-define-pqls",
          "https://openviewpartners.com/blog/freemium-startup-product-qualified-leads/",
          "https://www.pocus.com/blog/product-led-sales-pls-ama-kyle-poyar-openview-pls-benchmarks"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/product-qualified-lead-pql.html#term",
        "name": "Product-Qualified Lead (PQL)",
        "termCode": "product-qualified-lead-pql",
        "description": "A product-qualified lead (PQL) is a prospective buyer whose product use provides evidence that they may be ready to purchase. Teams combine usage with customer fit and intent to decide whether to offer help, route the lead to sales, or keep the experience self-service.",
        "url": "https://lexkonovalov.com/glossary/product-qualified-lead-pql.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/product-qualified-lead-pql.html#webpage"
        },
        "alternateName": [
          "Product-Qualified Lead",
          "PQL"
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
        "@id": "https://lexkonovalov.com/glossary/product-qualified-lead-pql.html#breadcrumbs",
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
            "name": "Product-Qualified Lead (PQL)",
            "item": "https://lexkonovalov.com/glossary/product-qualified-lead-pql.html"
          }
        ]
      }
    ]
  }
---

# Product-Qualified Lead (PQL)

A product-qualified lead (PQL) is a prospective buyer whose product use provides evidence that they may be ready to purchase. Teams combine usage with customer fit and intent to decide whether to offer help, route the lead to sales, or keep the experience self-service.

## How is a PQL different from activation or an MQL?

An [activation event](/glossary/activation-metric.html) indicates initial product value. A PQL rule identifies a prospect for a commercial next step. A marketing-qualified lead (MQL) is qualified primarily through marketing engagement and fit. The same person may qualify through more than one route.

## Example for a team planning tool

A planning product offers one shared project for free. A team activates when two teammates complete their first shared task. Several weeks later, an administrator requests help enabling controls available on the paid plan. The workspace shows evidence of account-level fit and usage. The administrator’s request gives the team a specific person to help and a reason to follow up.

| Signal | Example |
|---|---|
| Product use | Teammates complete shared tasks and return to do more work. |
| Fit | The team needs controls the paid plan supports. |
| Intent | A workspace administrator asks about enabling those controls. |
| Next step | Answer the question or offer a setup conversation when appropriate. |

In a team product, decide whether the rule qualifies an individual or an account. Account-level qualification is often called a **product-qualified account (PQA)**. The workspace may show the usage signal while a specific administrator is the appropriate contact.

## How do you validate a PQL rule?

Write the events, qualifying conditions, time window, and unit before comparing results. Check whether flagged prospects go on to buy at a higher rate than comparable eligible prospects. Review false positives, such as active users who have no purchasing role or teams that are well served by the free plan.

Evaluate outreach separately from the rule. For example, if there is enough traffic, randomly assign eligible qualified prospects to an offer of help or the usual experience and compare paid conversion. Keep qualification tied to a useful next step and respect the customer’s contact preferences.

## Related terms

- [Product-Led Growth (PLG)](/glossary/product-led-growth-plg.html)
- [Activation Metric](/glossary/activation-metric.html)
- [Lead Capture](/glossary/lead-capture-mechanics.html)
- [Product Telemetry & Analytics](/glossary/product-telemetry-analytics.html)

## Sources

- [How to Define PQLs, ProductLed](https://productled.com/blog/how-to-define-pqls)
- [Product Qualified Leads in Freemium, OpenView](https://openviewpartners.com/blog/freemium-startup-product-qualified-leads/)
- [Product-Led Sales AMA with Kyle Poyar, Pocus](https://www.pocus.com/blog/product-led-sales-pls-ama-kyle-poyar-openview-pls-benchmarks)
