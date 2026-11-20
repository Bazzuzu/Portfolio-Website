---
url: "https://lexkonovalov.com/glossary/service-blueprinting.html"
title: "Service Blueprinting: Components and a Practical Example"
description: "Learn how a service blueprint connects customer actions with frontstage, backstage, and support work, using a flight-change example."
canonical: "https://lexkonovalov.com/glossary/service-blueprinting.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Service Blueprinting: Components and a Practical Example", "og:description": "Learn how a service blueprint connects customer actions with frontstage, backstage, and support work, using a flight-change example.", "og:url": "https://lexkonovalov.com/glossary/service-blueprinting.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, Product Strategy & Growth and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use service-blueprinting as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/service-blueprinting.html#webpage",
        "url": "https://lexkonovalov.com/glossary/service-blueprinting.html",
        "name": "Service Blueprinting: Components and a Practical Example",
        "description": "Learn how a service blueprint connects customer actions with frontstage, backstage, and support work, using a flight-change example.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/service-blueprinting.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/service-blueprinting.html#breadcrumbs"
        },
        "citation": [
          "https://www.nngroup.com/articles/service-blueprints-definition/",
          "https://www.nngroup.com/articles/service-blueprinting-faq/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/service-blueprinting.html#term",
        "name": "Service Blueprinting",
        "termCode": "service-blueprinting",
        "description": "Service blueprinting is a method for mapping how an organization delivers a service. A service blueprint connects customer actions with the visible interactions, backstage work, and supporting processes that make those interactions possible.",
        "url": "https://lexkonovalov.com/glossary/service-blueprinting.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/service-blueprinting.html#webpage"
        },
        "alternateName": [
          "Service Blueprint"
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
        "@id": "https://lexkonovalov.com/glossary/service-blueprinting.html#breadcrumbs",
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
            "name": "Service Blueprinting",
            "item": "https://lexkonovalov.com/glossary/service-blueprinting.html"
          }
        ]
      }
    ]
  }
---

# Service Blueprinting

Service blueprinting is a method for mapping how an organization delivers a service. A service blueprint connects customer actions with the visible interactions, backstage work, and supporting processes that make those interactions possible.

## What does a service blueprint include?

Start with a specific customer journey and map the service work around it. The line of interaction marks customer contact with the organization. The line of visibility separates work customers can see from work behind the scenes. The line of internal interaction separates customer-facing staff from supporting functions.

Include evidence such as forms, messages, and documents that participants encounter. Add owners, dependencies, and timing where they help explain how the service works.

## Example: Changing a flight

This simplified blueprint follows a traveler who wants to move a booked flight.

| Layer | Request the change | Review the option | Complete the change |
|---|---|---|---|
| Customer action | Asks for a Friday flight. | Reviews the price and terms. | Approves the change and pays any amount due. |
| Frontstage interaction | The app acknowledges the request. | An agent presents the quote and its expiry. | The app reports the outcome. |
| Backstage action | An agent checks the booking and fare rules. | The booking system calculates a new fare. | Ticketing issues the revised ticket after the required checks. |
| Supporting processes and systems | Maintain booking records and access to fare inventory. | Provide pricing and payment services. | Process payment where needed and deliver confirmation. |
| Evidence | Request acknowledgment. | Dated quote and change conditions. | Revised ticket and confirmation message. |

The map can reveal a gap between payment and ticket issuance. The team can identify who handles a failure at that point, what confirms successful issuance, and what the traveler should be told while the issue is resolved.

## How do you use a blueprint?

Walk through the actual service with frontline and operations staff, supported by customer research and operational records. Mark uncertain steps, assign owners to the most important gaps, and test the proposed changes. A journey map supplies the customer’s perspective. The blueprint adds the work and dependencies behind that experience.

## Related terms

- [Customer Journey Mapping](/glossary/customer-journey-mapping.html)
- [Operational UX](/glossary/operational-ux.html)
- [Information Architecture (IA)](/glossary/information-architecture.html)

## Sources

- [Service Blueprints: Definition, Nielsen Norman Group](https://www.nngroup.com/articles/service-blueprints-definition/)
- [Service Blueprinting FAQ, Nielsen Norman Group](https://www.nngroup.com/articles/service-blueprinting-faq/)
