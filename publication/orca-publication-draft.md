---
url: "https://lexkonovalov.com/glossary/orca-framework.html"
title: "ORCA Framework in UX | Product Design Glossary"
description: "ORCA is Sophia Prater’s OOUX process. Learn its four elements and four rounds, with an example of turning requirements into interface decisions."
canonical: "https://lexkonovalov.com/glossary/orca-framework.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "ORCA Framework in UX | Product Design Glossary", "og:description": "ORCA is Sophia Prater’s OOUX process. Learn its four elements and four rounds, with an example of turning requirements into interface decisions.", "og:url": "https://lexkonovalov.com/glossary/orca-framework.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Use the front matter for implementation only.

  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields with the same values.

  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.

  Apply the collection name Product Design Glossary in the shared glossary configuration. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Populate any date fields from actual publication history.

  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, and a semantic table that works on mobile. Preserve the supplied sources and all related-term and contextual links, plus existing Previous/Next glossary navigation. Use orca-framework as termCode. The only article content is the Markdown body below the front matter. Verify the glossary index links to this URL. Publish linked OOUX expansion destinations before or with this revision.

  Serve the page at the existing URL and include it in the sitemap. Update lastmod to the actual deployment date if the sitemap maintains that field. Check the public page’s crawlability and unintended indexing restrictions.

  Run the existing build and inspect the resulting metadata, links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/orca-framework.html#webpage",
        "url": "https://lexkonovalov.com/glossary/orca-framework.html",
        "name": "ORCA Framework in UX | Product Design Glossary",
        "description": "ORCA is Sophia Prater’s OOUX process. Learn its four elements and four rounds, with an example of turning requirements into interface decisions.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/orca-framework.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/orca-framework.html#breadcrumbs"
        },
        "citation": [
          "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
          "https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e",
          "https://ooux.com/selfpacedoouxmasterclass"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/orca-framework.html#term",
        "name": "ORCA Framework",
        "alternateName": [
          "ORCA Process",
          "ORCA"
        ],
        "termCode": "orca-framework",
        "description": "The ORCA framework is Sophia Prater’s process for applying Object-Oriented UX (OOUX). ORCA stands for Objects, Relationships, Calls to action (CTAs), and Attributes. Teams use it to turn user research into a model of a product’s objects, their connections, available actions, and information.",
        "url": "https://lexkonovalov.com/glossary/orca-framework.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/orca-framework.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/orca-framework.html#breadcrumbs",
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
            "name": "ORCA Framework",
            "item": "https://lexkonovalov.com/glossary/orca-framework.html"
          }
        ]
      }
    ]
  }
---

# ORCA Framework

The ORCA framework is Sophia Prater’s process for applying Object-Oriented UX (OOUX). ORCA stands for Objects, Relationships, Calls to action (CTAs), and Attributes. Teams use it to turn user research into a model of a product’s objects, their connections, available actions, and information.

[Object-Oriented UX](/glossary/object-oriented-ux.html) provides the design principles. ORCA provides activities for defining the model and using it to design and test interfaces.

## What does ORCA stand for?

Consider one illustrative object in a support tool, Ticket #1042 about a missing invoice.

| ORCA element | Ticket example |
|---|---|
| **Object** | Ticket is the object type. Ticket #1042 is one instance. |
| **Relationships** | Linked customer — Acme Studio. Assigned agent — none. |
| **Calls to action** | A supervisor can reopen the ticket after selecting an agent. |
| **Attributes** | Subject — Missing invoice. Status — Closed. Priority — Normal. |

Customer and Agent are objects with their own records. The ticket links to those records through relationships. Status and priority describe the ticket as attributes.

## How does the ORCA process work?

ORCA works through four iterative rounds. Teams revisit and refine Objects, Relationships, Calls to action, and Attributes as the model develops.

1. **Discovery.** Identify objects from research. Map their relationships, record actions by object and role in a [CTA Matrix](/glossary/cta-matrix.html), and build an initial [object map](/glossary/object-mapping.html). Capture questions for further research.
2. **Requirements.** Define relationship rules, permissions, and required fields. Document object definitions in an [Object Guide](/glossary/object-guide.html) and expand the CTA matrix into [object-oriented user stories](/glossary/object-oriented-user-stories.html). Clarify the rules for the object's [attributes](/glossary/object-attributes-ooux.html).
3. **Prioritization.** Decide what belongs in the release and which [information](/glossary/attribute-prioritization.html) and [actions](/glossary/cta-prioritization.html) deserve prominence in the interface.
4. **Representation.** Turn the model into cards, lists, detail views, and a connected prototype. Use a [Shapeshifter Matrix](/glossary/shapeshifter-matrix.html) to examine intentional variants. Test whether users recognize the objects, find their connections, and understand the available actions.

This sequence provides a starting point. The rounds can be adapted to the project. Prater describes moving Prioritization ahead of detailed Requirements when time is limited. [Prioritizing Prioritization for Product Designers, Sophia Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)

## An ORCA example in practice

For Ticket #1042, the reopening rule connects a user role, the ticket’s status, and its relationship to an agent. These requirements guide who sees the action, when it is available, and what information is needed to complete it.

The team can prototype the ticket view to test whether supervisors can find the action and understand why they need to assign an agent.

## When should you use ORCA?

Use ORCA when a team needs to agree on connected objects, role permissions, or business rules before designing screens. Start with one object and a real task. Check the model with users and domain experts, and return to research wherever important questions remain unanswered.

## Related terms

- [Object-Oriented UX (OOUX)](/glossary/object-oriented-ux.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Cardinality (UX Architecture)](/glossary/cardinality-ux-architecture.html)
- [State Transition Matrix](/glossary/state-transition-matrix.html)

## Sources

- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [Prioritizing Prioritization for Product Designers, Sophia V. Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)
- [OOUX Masterclass course outline, OOUX.com](https://ooux.com/selfpacedoouxmasterclass)
