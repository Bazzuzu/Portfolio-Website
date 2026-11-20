---
url: "https://lexkonovalov.com/glossary/conceptual-schema.html"
title: "Conceptual Schema: Meaning & Example | Product Design Glossary"
description: "Learn what a conceptual schema defines, with a hotel example showing entities, relationships, and rules, plus conceptual, logical, and physical models."
canonical: "https://lexkonovalov.com/glossary/conceptual-schema.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Conceptual Schema: Meaning & Example | Product Design Glossary", "og:description": "Learn what a conceptual schema defines, with a hotel example showing entities, relationships, and rules, plus conceptual, logical, and physical models.", "og:url": "https://lexkonovalov.com/glossary/conceptual-schema.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, AI & Agentic Systems and term status "Established" in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use conceptual-schema as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with header cells that work on mobile. Preserve the supplied sources and all 4 related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/conceptual-schema.html#webpage",
        "url": "https://lexkonovalov.com/glossary/conceptual-schema.html",
        "name": "Conceptual Schema: Meaning & Example | Product Design Glossary",
        "description": "Learn what a conceptual schema defines, with a hotel example showing entities, relationships, and rules, plus conceptual, logical, and physical models.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/conceptual-schema.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/conceptual-schema.html#breadcrumbs"
        },
        "citation": [
          "https://www.cs.uct.ac.za/mit_notes/database/htmls/chp01.html",
          "https://www.ibm.com/think/topics/data-modeling",
          "https://www.ibm.com/think/topics/entity-relationship-diagram"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/conceptual-schema.html#term",
        "name": "Conceptual Schema",
        "termCode": "conceptual-schema",
        "description": "A conceptual schema describes the information a system represents: its entities, their properties, relationships, and constraints, independently of physical storage. It gives teams a shared definition of what the data means and which business rules it must satisfy.",
        "url": "https://lexkonovalov.com/glossary/conceptual-schema.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/conceptual-schema.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/conceptual-schema.html#breadcrumbs",
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
            "name": "Conceptual Schema",
            "item": "https://lexkonovalov.com/glossary/conceptual-schema.html"
          }
        ]
      }
    ]
  }
---

# Conceptual Schema

A conceptual schema describes the information a system represents: its entities, their properties, relationships, and constraints, independently of physical storage. It gives teams a shared definition of what the data means and which business rules it must satisfy.

In product design, this helps teams agree on concepts such as Customer, Reservation, or Payment before designing their screens and behavior. For example, the schema can define that every Reservation has one booking Guest. Reservation #1042 and its booker are individual records that must satisfy that rule.

## What does a conceptual schema contain?

- **Entities:** Types of things the system represents, such as a Reservation.
- **Attributes:** Properties that describe them, such as arrival date and status.
- **Relationships:** Connections between entities, such as a Reservation being assigned to a Room.
- **Constraints:** Rules about valid information, such as departure occurring after arrival.

An entity-relationship diagram can show the structure. Written definitions and rules supply details that a diagram alone may leave ambiguous.

## A conceptual schema example: hotel reservations

Consider a simplified hotel system that sells one room per reservation. Room assignment may happen after booking. These are example requirements, not universal hotel rules.

| Entity | Meaning | Example attributes |
|---|---|---|
| Guest | The person making the reservation | Name, contact details |
| Reservation | A booking for one room over a date range | Arrival date, departure date, status |
| Room | A physical room in the hotel | Room number |

The relationships and constraints are explicit:

- Each Reservation has exactly one booking Guest; a Guest can have zero or many Reservations.
- A Reservation has zero or one assigned Room. A Room can appear in many Reservations over time.
- Two confirmed or checked-in Reservations cannot occupy the same Room for overlapping nights. One stay may begin on another’s departure date.

This model reveals a UI requirement: the reservation view needs an unassigned-room state. Here, Guest means the booker. Tracking everyone who stays would require extending the model to represent occupants separately.

## Conceptual, logical, and physical models

In a common data-modeling workflow, the levels differ in detail:

| Level | Typical decision |
|---|---|
| Conceptual | What entities exist, what they mean, and how they relate. |
| Logical | Detailed attributes, identifiers, and relationship rules. |
| Physical | Database-specific tables, column types, indexes, and storage choices. |

Terminology varies. In the ANSI/SPARC three-schema architecture, the conceptual schema is the shared logical description of the database, between external user views and internal storage. It is not necessarily a lightweight early-stage diagram.

## How does this help UX work?

Use the schema to discuss labels, record relationships, empty states, and rules with users and domain experts. In the hotel example, ask what happens when a reservation changes rooms or includes multiple rooms; the answers may change the model.

[Object-Oriented UX](/glossary/object-oriented-ux.html) can bring related domain questions into interface design, alongside users’ tasks and available actions. Validate the shared information model against real workflows, and update it as requirements change.

## Related terms

- [Domain Context Modeling](/glossary/domain-context-modeling.html)
- [Object-Oriented UX](/glossary/object-oriented-ux.html)
- [Content Modeling](/glossary/content-modeling.html)
- [Knowledge Graphs (AI Context)](/glossary/knowledge-graphs-ai-context.html)

## Sources

- [Database architecture: the conceptual schema, University of Cape Town](https://www.cs.uct.ac.za/mit_notes/database/htmls/chp01.html)
- [What Is Data Modeling?, IBM](https://www.ibm.com/think/topics/data-modeling)
- [What Is an Entity Relationship Diagram?, IBM](https://www.ibm.com/think/topics/entity-relationship-diagram)
