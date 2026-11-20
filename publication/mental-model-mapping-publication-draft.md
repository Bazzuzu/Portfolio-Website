---
url: "https://lexkonovalov.com/glossary/mental-model-mapping.html"
title: "Mental Model Mapping: Definition, Research, and Example"
description: "Learn how mental model mapping connects people's goals and expectations to product support, with a travel-planning example and research checks."
canonical: "https://lexkonovalov.com/glossary/mental-model-mapping.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Mental Model Mapping: Definition, Research, and Example", "og:description": "Learn how mental model mapping connects people's goals and expectations to product support, with a travel-planning example and research checks.", "og:url": "https://lexkonovalov.com/glossary/mental-model-mapping.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, Product Strategy & Growth and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use mental-model-mapping as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/mental-model-mapping.html#webpage",
        "url": "https://lexkonovalov.com/glossary/mental-model-mapping.html",
        "name": "Mental Model Mapping: Definition, Research, and Example",
        "description": "Learn how mental model mapping connects people's goals and expectations to product support, with a travel-planning example and research checks.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/mental-model-mapping.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/mental-model-mapping.html#breadcrumbs"
        },
        "citation": [
          "https://www.nngroup.com/articles/mental-models/",
          "https://indiyoung.com/examples-mmd-moviegoer/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/mental-model-mapping.html#term",
        "name": "Mental Model Mapping",
        "termCode": "mental-model-mapping",
        "description": "Mental model mapping is a research and synthesis practice for representing how people understand, approach, and make decisions about an activity or system. Designers use it to identify where a product supports those expectations and where gaps or mismatches occur.",
        "url": "https://lexkonovalov.com/glossary/mental-model-mapping.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/mental-model-mapping.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/mental-model-mapping.html#breadcrumbs",
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
            "name": "Mental Model Mapping",
            "item": "https://lexkonovalov.com/glossary/mental-model-mapping.html"
          }
        ]
      }
    ]
  }
---

# Mental Model Mapping

Mental model mapping is a research and synthesis practice for representing how people understand, approach, and make decisions about an activity or system. Designers use it to identify where a product supports those expectations and where gaps or mismatches occur.

A mental model reflects a person's understanding; it can be incomplete or differ from how the system actually works. Research is needed to distinguish observed expectations from a team's assumptions.

## How to build a useful map

Gather accounts of real experiences through interviews and, where appropriate, observation. Look for recurring goals, reasoning, expectations, and workarounds. Preserve meaningful differences between people.

Indi Young's mental model diagrams organize patterns in people's thinking and compare them with the support an organization provides. That is one established approach; teams should name the method they use.

## Example: planning a family trip

Research might show that travelers first work out school-date constraints, then compare total trip cost, and only later choose specific flights.

A map could group those activities and the reasoning behind them. The team could compare each group with existing support: a date picker, fare results, baggage information, and a saved-trip feature.

If users expect the displayed price to include baggage while the product adds it later, the mismatch becomes a concrete design question to investigate.

## Keep the evidence visible

Link the map to research observations and label hypotheses. Avoid treating a navigation tree or an internally invented persona as evidence of users' thinking.

A task model describes activities and dependencies. Mental model mapping examines the understanding and reasoning behind behavior; the two can inform each other. Update the map when new research challenges its patterns.

## Related terms

- [Information Architecture (IA)](/glossary/information-architecture.html)
- [Jobs to Be Done (JTBD)](/glossary/jobs-to-be-done-jtbd.html)
- [Task Model](/glossary/task-model.html)
- [Conceptual Schema](/glossary/conceptual-schema.html)

## Sources

- [Nielsen Norman Group: Mental Models](https://www.nngroup.com/articles/mental-models/)
- [Indi Young: Moviegoer Mental Model Diagram](https://indiyoung.com/examples-mmd-moviegoer/)
