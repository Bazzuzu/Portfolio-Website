---
url: "https://lexkonovalov.com/glossary/customer-journey-mapping.html"
title: "Customer Journey Mapping: Steps and a UX Example"
description: "Learn how to build a customer journey map around one user goal, connect it to research, and turn moments of friction into testable improvements."
canonical: "https://lexkonovalov.com/glossary/customer-journey-mapping.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Customer Journey Mapping: Steps and a UX Example", "og:description": "Learn how to build a customer journey map around one user goal, connect it to research, and turn moments of friction into testable improvements.", "og:url": "https://lexkonovalov.com/glossary/customer-journey-mapping.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Product Strategy & Growth, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use customer-journey-mapping as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/customer-journey-mapping.html#webpage",
        "url": "https://lexkonovalov.com/glossary/customer-journey-mapping.html",
        "name": "Customer Journey Mapping: Steps and a UX Example",
        "description": "Learn how to build a customer journey map around one user goal, connect it to research, and turn moments of friction into testable improvements.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/customer-journey-mapping.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/customer-journey-mapping.html#breadcrumbs"
        },
        "citation": [
          "https://www.nngroup.com/articles/journey-mapping-101/",
          "https://www.nngroup.com/articles/ux-maps-glossary/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/customer-journey-mapping.html#term",
        "name": "Customer Journey Mapping",
        "termCode": "customer-journey-mapping",
        "description": "Customer journey mapping is the process of describing a person’s experience over time as they work toward a goal. The resulting journey map connects their actions, questions, and feelings across relevant touchpoints so a team can identify barriers and opportunities.",
        "url": "https://lexkonovalov.com/glossary/customer-journey-mapping.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/customer-journey-mapping.html#webpage"
        },
        "alternateName": [
          "Journey Mapping",
          "Customer Journey Map"
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
        "@id": "https://lexkonovalov.com/glossary/customer-journey-mapping.html#breadcrumbs",
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
            "name": "Customer Journey Mapping",
            "item": "https://lexkonovalov.com/glossary/customer-journey-mapping.html"
          }
        ]
      }
    ]
  }
---

# Customer Journey Mapping

Customer journey mapping is the process of describing a person’s experience over time as they work toward a goal. The resulting journey map connects their actions, questions, and feelings across relevant touchpoints so a team can identify barriers and opportunities.

## How do you create a customer journey map?

1. **Choose one actor and scenario.** Define whose experience you are mapping, their goal, and where the journey begins and ends.
2. **Collect evidence.** Use interviews, observation, support conversations, and behavioral data to understand what happens. Label assumptions and distinguish the current experience from a proposed one.
3. **Map the phases.** Record what the person does, what they need to know, and how they experience each phase. Ground thoughts and emotions in research.
4. **Choose an improvement.** Connect a barrier to an owner, a design hypothesis, and a way to evaluate the result.

## Example: A traveler changes a flight

The following is an illustrative starting point to validate through research.

| Phase | Traveler action | Question to investigate |
|---|---|---|
| Request | Opens the booking and asks to change the date. | Is the traveler clear about whether the original flight is still booked? |
| Evaluate | Reviews the new fare and conditions. | Can the traveler tell what the price covers and how long it is valid? |
| Confirm | Approves the quote and waits for an updated ticket. | Does the traveler know whether the change is complete and what to do if confirmation is delayed? |

The final phase suggests an opportunity to test a clearer status message and recovery path. Check whether travelers understand the current state and can get help when needed. A service blueprint can then identify the internal handoff responsible for the delay.

## How do AI agents affect the journey?

If an assistant acts for the traveler, include its actions, the points that need approval, and how the traveler checks progress. Use logs to examine the assistant’s behavior and user research to understand the person’s experience. Keep the map’s viewpoint explicit.

## Related terms

- [Service Blueprinting](/glossary/service-blueprinting.html)
- [Mental Model Mapping](/glossary/mental-model-mapping.html)
- [Conversion Funnel](/glossary/conversion-funnel-architecture.html)

## Sources

- [Journey Mapping 101, Nielsen Norman Group](https://www.nngroup.com/articles/journey-mapping-101/)
- [UX Maps: Glossary, Nielsen Norman Group](https://www.nngroup.com/articles/ux-maps-glossary/)
