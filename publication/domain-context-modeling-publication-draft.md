---
url: "https://lexkonovalov.com/glossary/domain-context-modeling.html"
title: "Domain Context Modeling in UX | Product Design Glossary"
description: "Learn how to map where business terms and rules apply. A travel operations example shows how sales and ticketing use different models for related work."
canonical: "https://lexkonovalov.com/glossary/domain-context-modeling.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Domain Context Modeling in UX | Product Design Glossary", "og:description": "Learn how to map where business terms and rules apply. A travel operations example shows how sales and ticketing use different models for related work.", "og:url": "https://lexkonovalov.com/glossary/domain-context-modeling.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, AI & Agentic Systems and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use domain-context-modeling as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all 4 related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/domain-context-modeling.html#webpage",
        "url": "https://lexkonovalov.com/glossary/domain-context-modeling.html",
        "name": "Domain Context Modeling in UX | Product Design Glossary",
        "description": "Learn how to map where business terms and rules apply. A travel operations example shows how sales and ticketing use different models for related work.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/domain-context-modeling.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/domain-context-modeling.html#breadcrumbs"
        },
        "citation": [
          "https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf",
          "https://martinfowler.com/bliki/BoundedContext.html",
          "https://alistapart.com/article/object-oriented-ux/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/domain-context-modeling.html#term",
        "name": "Domain Context Modeling",
        "termCode": "domain-context-modeling",
        "description": "Domain context modeling is the practice of documenting where a business term, object model, or rule applies and how information moves between contexts. It helps product teams design workflows where different groups work with related information but need different meanings, rules, or levels of detail.",
        "url": "https://lexkonovalov.com/glossary/domain-context-modeling.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/domain-context-modeling.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/domain-context-modeling.html#breadcrumbs",
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
            "name": "Domain Context Modeling",
            "item": "https://lexkonovalov.com/glossary/domain-context-modeling.html"
          }
        ]
      }
    ]
  }
---

# Domain Context Modeling

Domain context modeling is the practice of documenting where a business term, object model, or rule applies and how information moves between contexts. It helps product teams design workflows where different groups work with related information but need different meanings, rules, or levels of detail.

A useful concept from domain-driven design (DDD) is the **bounded context**, the boundary within which a model applies. Within that boundary, the people doing the work and the people building the software can agree on what their terms mean and how the modeled things behave.

## A trip in sales and ticketing

Suppose a travel operations tool serves a sales team that proposes itineraries and a ticketing team that manages supplier bookings. Both teams refer to the same trip, but an accepted offer and a confirmed booking describe different events.

| Question | Sales | Ticketing |
|---|---|---|
| What does the team work with? | Trip and Offer, including proposed itineraries and quoted prices | Booking and its supplier reference, status, and fare rules |
| What decision matters? | Is this the offer the traveler wants to accept? | Is the supplier booking confirmed, and can it be changed? |
| What should the team own? | The accepted offer and the details agreed with the traveler | The supplier confirmation and booking status |

At handoff, ticketing receives the accepted itinerary and trip reference. Ticketing links each booking to that trip. When a supplier confirms a booking, sales can see its confirmation status alongside the accepted offer.

## How do you model a domain context?

Look for changes in language, rules, and ownership when you draw a model boundary. The sales and ticketing teams illustrate a possible boundary in this example.

1. **Follow a handoff.** Observe what each team calls the work, what it decides, and what it needs from the other team.
2. **Document the model and its scope.** Record terms, objects, key relationships, and the rules that apply to them. Identify where the same word carries different meanings.
3. **Agree on what crosses the boundary.** Specify identifiers, status mappings, and which team or system updates each shared fact.
4. **Test an exception.** Walk through a supplier rejection after a traveler accepts an offer. Check that each team can understand the situation and continue its work.

## How does this relate to OOUX?

[OOUX](/glossary/object-oriented-ux.html) helps a team identify the objects people recognize and work with. Domain context modeling helps the team decide where a particular definition or rule holds. An [object map](/glossary/object-mapping.html) for ticketing can then show Booking in the context of the people who manage it.

## Related terms

- [Object-Oriented UX](/glossary/object-oriented-ux.html)
- [Context Engineering](/glossary/context-engineering.html)
- [Knowledge Graphs (AI Context)](/glossary/knowledge-graphs-ai-context.html)
- [Controlled Vocabulary](/glossary/controlled-vocabulary.html)

## Sources

- [Domain-Driven Design Reference, Eric Evans](https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf)
- [Bounded Context, Martin Fowler](https://martinfowler.com/bliki/BoundedContext.html)
- [Object-Oriented UX, Sophia V. Prater](https://alistapart.com/article/object-oriented-ux/)
