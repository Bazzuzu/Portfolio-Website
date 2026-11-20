---
url: "https://lexkonovalov.com/glossary/product-discovery.html"
title: "Product Discovery in UX | Product Design Glossary"
description: "Learn how product discovery reduces uncertainty before committing to a solution. See an invoicing example covering interviews and assumption tests."
canonical: "https://lexkonovalov.com/glossary/product-discovery.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Product Discovery in UX | Product Design Glossary", "og:description": "Learn how product discovery reduces uncertainty before committing to a solution. See an invoicing example covering interviews and assumption tests.", "og:url": "https://lexkonovalov.com/glossary/product-discovery.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Product Strategy & Growth, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use product-discovery as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all 4 related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/product-discovery.html#webpage",
        "url": "https://lexkonovalov.com/glossary/product-discovery.html",
        "name": "Product Discovery in UX | Product Design Glossary",
        "description": "Learn how product discovery reduces uncertainty before committing to a solution. See an invoicing example covering interviews and assumption tests.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/product-discovery.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/product-discovery.html#breadcrumbs"
        },
        "citation": [
          "https://www.producttalk.org/continuous-discovery-habits/",
          "https://www.svpg.com/four-big-risks/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/product-discovery.html#term",
        "name": "Product Discovery",
        "termCode": "product-discovery",
        "description": "Product discovery is the work of reducing uncertainty about which customer problems to address and which solutions are worth pursuing. Teams use research, prototypes, and assumption tests to make decisions before committing substantial delivery effort. Discovery can continue as the product is built and used.",
        "url": "https://lexkonovalov.com/glossary/product-discovery.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/product-discovery.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/product-discovery.html#breadcrumbs",
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
            "name": "Product Discovery",
            "item": "https://lexkonovalov.com/glossary/product-discovery.html"
          }
        ]
      }
    ]
  }
---

# Product Discovery

Product discovery is the work of reducing uncertainty about which customer problems to address and which solutions are worth pursuing. Teams use research, prototypes, and assumption tests to make decisions before committing substantial delivery effort. Discovery can continue as the product is built and used.

## What do teams learn in discovery?

Start with the outcome you want to improve and the decisions you need to make. Marty Cagan describes four risks: whether customers will value the solution, whether they can use it, whether the team can build it, and whether it works for the business.

Choose evidence that fits the risk. A prototype can show whether users understand an interaction. A technical investigation can establish whether the proposed behavior is feasible. Interview findings can explain why a problem matters and help the team decide which solutions to explore.

## Example: helping accounts send their first invoice

An invoicing team sees that many new accounts create drafts but few send a first real invoice. The team wants more eligible new accounts to send a first real invoice within seven days of signup.

| Discovery question | What the team does |
|---|---|
| Why do people hesitate? | Observe people preparing a real invoice and ask about the last time they stopped before sending. |
| Would a preview help? | Show a prototype that lets users see the client’s view. Ask them to explain what the client would receive and when. |
| Can the preview reflect the actual invoice? | Check with engineering that the preview and the final invoice use the same data and render consistently. |
| Is it worth supporting? | Estimate what it will cost to maintain accurate previews across invoice templates. Compare that effort with the value of helping more accounts send correctly. |

If the evidence supports the preview, the team can build it and evaluate whether it changes the share of new accounts sending a real invoice. Use usability sessions to check comprehension, then consider a [randomized test](/glossary/ab-testing-split-testing.html) to estimate the effect on activation if traffic supports one.

## How does discovery fit with delivery?

Keep the next important assumption visible while delivery proceeds. Teresa Torres’s continuous discovery approach advocates at least weekly customer contact by the team building the product and small research activities tied to a desired outcome. A team can start by recording the decision, the evidence that informed it, and what would change its mind.

## Related terms

- [Jobs to Be Done (JTBD)](/glossary/jobs-to-be-done-jtbd.html)
- [Continuous Experimentation](/glossary/continuous-experimentation.html)
- [Mental Model Mapping](/glossary/mental-model-mapping.html)
- [Product Strategy Canvas](/glossary/product-strategy-canvas.html)

- [AI in UX Research](/glossary/ai-ux-research.html)

## Sources

- [Continuous Discovery Habits, Teresa Torres](https://www.producttalk.org/continuous-discovery-habits/)
- [The Four Big Risks, Marty Cagan, Silicon Valley Product Group](https://www.svpg.com/four-big-risks/)
