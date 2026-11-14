// src/data/glossaryData.ts
// Canonical 110-term taxonomy across four foundational product design domains

export type MaturityLevel = 
  | "Established"
  | "Emerging"
  | "Proprietary / Framework-Specific"
  | "Coined / Interpretive";

export interface GlossaryCategory {
  id: string;
  name: string;
  count: number;
  description: string;
  primaryFocus: string;
  representativeSpecs: string;
  maturityDistribution: string;
}

export interface GlossaryTerm {
  id: string;
  name: string;
  slug: string;
  category: string;
  secondaryCategory?: string;
  maturity: MaturityLevel;
  definition: string;
  purpose: string;
  keyConcepts: string[];
  howItWorks: string;
  relatedTerms: string[];
  seoTitle?: string;
  seoDescription?: string;
  alternateName?: string | string[];
  canonicalUrl?: string;
  contentMarkdown?: string;
  structuredDataGraph?: any[];
  sources: string[];
}

export const GLOSSARY_COLLECTION_NAME = "Product Design Glossary";
export const GLOSSARY_COLLECTION_ID = "https://lexkonovalov.com/glossary/#terms";

export const glossaryCategories: GlossaryCategory[] = [
  {
    id: "ux-product-architecture",
    name: "UX & Product Architecture",
    count: 33,
    description: "Information Architecture, Domain Modeling, and Conceptual Integrity for complex systems.",
    primaryFocus: "Information Architecture, Domain Modeling, Conceptual Integrity",
    representativeSpecs: "OOUX, ORCA, Core Model, Semantic Zoom, Mental Modeling",
    maturityDistribution: "70% Established, 20% Proprietary, 10% Emerging"
  },
  {
    id: "design-systems-engineering",
    name: "Design Systems & Engineering",
    count: 25,
    description: "Deterministic contracts between design tools and multi-platform production code repositories.",
    primaryFocus: "Token Interoperability, Component Contracts, Accessibility",
    representativeSpecs: "W3C DTCG Format Module 2025.10, WCAG 2.2/3.0, W3C Web Components",
    maturityDistribution: "75% Established, 25% Emerging"
  },
  {
    id: "product-strategy-growth",
    name: "Product Strategy & Growth",
    count: 27,
    description: "Connecting UX decisions with business outcomes, continuous experimentation, and unit economics.",
    primaryFocus: "Experimentation, Unit Economics, Conversion Architecture",
    representativeSpecs: "Continuous Discovery, JTBD, Product-Led Growth, Telemetry",
    maturityDistribution: "80% Established, 20% Emerging"
  },
  {
    id: "ai-agentic-systems",
    name: "AI & Agentic Systems",
    count: 25,
    description: "Probabilistic, intent-driven systems, agent harnesses, and runtime generative interfaces.",
    primaryFocus: "Agentic Orchestration, Context Ingestion, Dynamic Run-Time UI",
    representativeSpecs: "Model Context Protocol (MCP), Agent Skills (SKILL.md), Vercel Generative UI",
    maturityDistribution: "20% Established, 55% Emerging, 25% Coined"
  }
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    "id": "001",
    "name": "Object-Oriented UX",
    "slug": "object-oriented-ux",
    "alternateName": "OOUX",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "Object-Oriented UX (OOUX) is a design approach that structures digital products around objects in users’ mental models—the things they recognize and expect to work with, such as trips, travelers, and bookings. Teams define these objects, their relationships, attributes, and available actions before designing screens and flows.",
    "purpose": "Prevents fragmented user experiences, disjointed navigation paths, and developer-designer misalignments by establishing shared, entity-based conceptual models prior to visual UI wireframing.",
    "keyConcepts": [
      "Conceptual objects",
      "entity integrity",
      "cognitive mapping",
      "affordance consistency"
    ],
    "howItWorks": "Designers identify core domain entities, trace their relationships, define their attributes, and map permissible user operations to eliminate procedural silos.",
    "relatedTerms": [
      "ORCA Framework",
      "Object Mapping",
      "Domain Context Modeling",
      "Conceptual Schema",
      "Information Architecture (IA)",
      "Four UX Fails in OOUX"
    ],
    "seoTitle": "Object-Oriented UX (OOUX) | Product Design Glossary",
    "seoDescription": "Object-Oriented UX (OOUX) defines objects, relationships, attributes, and user actions before screen design. Explore ORCA through a travel booking example.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/object-oriented-ux.html",
    "sources": [
      "Object-Oriented UX, Sophia V. Prater, A List Apart (https://alistapart.com/article/object-oriented-ux/)",
      "Introducing ORCA, Sophia V. Prater (https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)"
    ],
    "contentMarkdown": `# Object-Oriented UX (OOUX)

Object-Oriented UX (OOUX) is a design approach that structures digital products around objects in users’ mental models—the things they recognize and expect to work with, such as trips, travelers, and bookings. Teams define these objects, their relationships, attributes, and available actions before designing screens and flows.

## What does OOUX look like in practice?

Consider a travel operations tool with trips, travelers, and bookings. Modeling the relationship between a trip and its bookings helps the team decide what agents can navigate to from a trip.

The trip page can list its bookings, with each one opening its details and available actions. An authorized agent can select a booking and cancel it. Its status then updates wherever that booking appears, including the trip page and search results. The object model gives the team a shared basis for navigation, content, and actions.

## How does ORCA relate to OOUX?

OOUX provides the design principles. [ORCA](/glossary/orca-framework.html) is Sophia Prater’s process for applying them through Objects, Relationships, Calls to action, and Attributes. Teams revisit these four elements as they discover requirements and refine the model. [Introducing ORCA, Sophia Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)

| ORCA element | Design question | Travel operations example |
|---|---|---|
| Objects | What things do people work with? | Trip, Traveler, Booking |
| Relationships | How are those things connected? | A trip includes travelers and bookings. |
| Calls to action | What can each user role do? | An authorized agent can cancel a booking. |
| Attributes | What information describes each object? | A booking has a confirmation number and status. |

An [object map](/glossary/object-mapping.html) records these decisions so the team can use the same model when designing screens, navigation, and flows.

## When is OOUX useful?

OOUX is particularly useful when the same objects appear across multiple workflows or when different roles need different actions on an object. For example, a travel agent and an accountant may both work with the same booking, while needing different information and permissions.

Start by examining the things people name in interviews and existing workflows. Use their language to identify candidate objects. Then walk through a task such as “find and cancel a booking.” Check that the model identifies the booking, its connection to the trip, its status, and which roles can cancel it. Teams also use OOUX to diagnose and prevent common interface anti-patterns, described as the [Four UX Fails in OOUX](/glossary/ooux-ux-fails.html)—masked, shape-shifting, broken, and isolated objects.

## Related terms

- [ORCA Framework](/glossary/orca-framework.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Domain Context Modeling](/glossary/domain-context-modeling.html)
- [Conceptual Schema](/glossary/conceptual-schema.html)
- [Information Architecture (IA)](/glossary/information-architecture.html)

## Sources

- [Object-Oriented UX, Sophia V. Prater, A List Apart](https://alistapart.com/article/object-oriented-ux/)
- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/object-oriented-ux.html#webpage",
                "url": "https://lexkonovalov.com/glossary/object-oriented-ux.html",
                "name": "Object-Oriented UX (OOUX) | Product Design Glossary",
                "description": "Object-Oriented UX (OOUX) defines objects, relationships, attributes, and user actions before screen design. Explore ORCA through a travel booking example.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/object-oriented-ux.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/object-oriented-ux.html#breadcrumbs"
                },
                "citation": [
                      "https://alistapart.com/article/object-oriented-ux/",
                      "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/object-oriented-ux.html#term",
                "name": "Object-Oriented UX",
                "alternateName": "OOUX",
                "termCode": "object-oriented-ux",
                "description": "Object-Oriented UX (OOUX) is a design approach that structures digital products around objects in users’ mental models—the things they recognize and expect to work with, such as trips, travelers, and bookings. Teams define these objects, their relationships, attributes, and available actions before designing screens and flows.",
                "url": "https://lexkonovalov.com/glossary/object-oriented-ux.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/object-oriented-ux.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/object-oriented-ux.html#breadcrumbs",
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
                            "name": "Object-Oriented UX (OOUX)",
                            "item": "https://lexkonovalov.com/glossary/object-oriented-ux.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "002",
    "name": "ORCA Framework",
    "slug": "orca-framework",
    "alternateName": [
      "ORCA Process",
      "ORCA"
    ],
    "category": "UX & Product Architecture",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Proprietary / Framework-Specific",
    "definition": "The ORCA framework is Sophia Prater’s process for applying Object-Oriented UX (OOUX). ORCA stands for Objects, Relationships, Calls to action (CTAs), and Attributes. Teams use it to turn user research into a model of a product’s objects, their connections, available actions, and information.",
    "purpose": "Deconstructs complex enterprise requirements into unambiguous structural components, ensuring domain models directly inform navigation, relational integrity, and component logic.",
    "keyConcepts": [
      "Discovery round",
      "Requirements matrix",
      "CTA matrices",
      "Object mapping passes"
    ],
    "howItWorks": "Teams extract domain nouns, map bidirectional relationships, define state-dependent operations, and enumerate descriptive metadata across iterative passes.",
    "relatedTerms": [
      "Object-Oriented UX (OOUX)",
      "Object Mapping",
      "Cardinality (UX Architecture)",
      "State Transition Matrix",
      "Four UX Fails in OOUX",
      "Noun Foraging",
      "Nested Object Matrix",
      "CTA Matrix",
      "Object Guide",
      "Object Prioritization",
      "ORCA Relationship Requirements (MCSFD)"
    ],
    "seoTitle": "ORCA Framework in UX | Product Design Glossary",
    "seoDescription": "ORCA is Sophia Prater’s process for applying Object-Oriented UX (OOUX). Learn its four elements and four rounds, with an example of turning requirements into interface decisions.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/orca-framework.html",
    "sources": [
      "Introducing ORCA, Sophia V. Prater (https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)",
      "Prioritizing Prioritization for Product Designers, Sophia V. Prater (https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)",
      "OOUX Masterclass course outline, OOUX.com (https://ooux.com/selfpacedoouxmasterclass)"
    ],
    "contentMarkdown": `# ORCA Framework

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

Prater’s full ORCA process has 15 steps across four iterative rounds. The four elements are revisited and refined throughout the process.

1. **Discovery.** Identify objects from research through [Noun Foraging](/glossary/noun-foraging.html). Map their relationships with a [Nested Object Matrix](/glossary/nested-object-matrix.html), record actions by object and role in a [CTA Matrix](/glossary/cta-matrix.html), and build an initial [object map](/glossary/object-mapping.html). Capture questions for further research.
2. **Requirements.** Define relationship rules using [ORCA Relationship Requirements (MCSFD)](/glossary/orca-relationship-requirements.html), permissions, and required fields. Document object definitions in an [Object Guide](/glossary/object-guide.html) and expand the CTA matrix into user stories with conditions for each action.
3. **Prioritization.** [Object Prioritization](/glossary/object-prioritization.html) decides what belongs in the release and which information and actions deserve prominence in the interface.
4. **Representation.** Turn the model into cards, lists, detail views, and a connected prototype. Test whether users recognize the objects, find their connections, and understand the available actions.

This sequence provides a starting point. The rounds can be adapted to the project. Prater describes moving Prioritization ahead of detailed Requirements when time is limited. [Prioritizing Prioritization for Product Designers, Sophia Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)

## An ORCA example in practice

For Ticket #1042, the reopening rule connects a user role, the ticket’s status, and its relationship to an agent. These requirements guide who sees the action, when it is available, and what information is needed to complete it.

The team can prototype the ticket view to test whether supervisors can find the action and understand why they need to assign an agent.

## When should you use ORCA?

Use ORCA when a team needs to agree on connected objects, role permissions, or business rules before designing screens. It helps prevent fragmented systems and common pitfalls like the [Four UX Fails in OOUX](/glossary/ooux-ux-fails.html). Start with one object and a real task. Check the model with users and domain experts, and return to research wherever important questions remain unanswered.

## Related terms

- [Object-Oriented UX (OOUX)](/glossary/object-oriented-ux.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Cardinality (UX Architecture)](/glossary/cardinality-ux-architecture.html)
- [State Transition Matrix](/glossary/state-transition-matrix.html)

## Sources

- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [Prioritizing Prioritization for Product Designers, Sophia V. Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)
- [OOUX Masterclass course outline, OOUX.com](https://ooux.com/selfpacedoouxmasterclass)`,
    "structuredDataGraph": [
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
  },
  {
    "id": "003",
    "name": "Object Mapping",
    "slug": "object-mapping",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "Object mapping is the practice of organizing the things users work with into a shared model of object types, relationships, attributes, and available actions. In Object-Oriented UX (OOUX), an object map helps teams decide what information and actions belong together before designing screens.",
    "purpose": "Provides a single conceptual source of truth for cross-functional teams, validating information models against real-world user expectations and database schemas.",
    "keyConcepts": [
      "Entity nodes",
      "nested attributes",
      "link cardinality",
      "state markers."
    ],
    "howItWorks": "Core entities are mapped on visual canvases using standardized card notation, displaying primary metadata, associated child objects, and contextual actions.",
    "relatedTerms": [
      "ORCA Framework",
      "Conceptual Schema",
      "Domain Context Modeling",
      "Content Modeling"
    ],
    "seoTitle": "Object Mapping in UX | Product Design Glossary",
    "seoDescription": "Learn how to create an object map in OOUX, with a travel booking example covering object types, relationships, attributes, and user actions.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/object-mapping.html",
    "sources": [
      "Object-Oriented UX, Sophia V. Prater (https://alistapart.com/article/object-oriented-ux/)",
      "Introducing ORCA, Sophia V. Prater (https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)",
      "OOUX Foundations, Sophia V. Prater (https://ooux.com/offerings/foundations)"
    ],
    "contentMarkdown": `# Object Mapping

Object mapping is the practice of organizing the things users work with into a shared model of object types, relationships, attributes, and available actions. In Object-Oriented UX (OOUX), an object map helps teams decide what information and actions belong together before designing screens.

## How do you create an object map?

1. **Find candidate objects.** Look for nouns in interviews, workflows, and support requests through [Noun Foraging](/glossary/noun-foraging.html). Check which things users recognize, refer to repeatedly, and need to distinguish from one another in an [Object Guide](/glossary/object-guide.html). Check which things users recognize, refer to repeatedly, and need to distinguish from one another.
2. **Describe each object.** Capture the information users need to identify it and make decisions about it. For a booking, that might be its confirmation number and status.
3. **Map relationships and actions.** Ask what each object connects to, what users need to do with it, and which roles can act. Keep uncertain rules visible for follow-up.
4. **Walk through a real task.** Try a routine case and an exception. Revise the map when either case exposes missing information, a connection, or an action.

An object type describes a class of things, such as Booking. Booking B-52 is one instance. Booking status describes the booking. Traveler is a separate object in this example because agents look up travelers, update their details, and view their other trips.

## Object map example for travel operations

| Object type | Useful attributes | Relationships | Example action |
|---|---|---|---|
| Trip | Reference, travel dates | Bookings and travelers | Add a booking |
| Booking | Reference, status, supplier confirmation number when available | One trip | Request cancellation if eligible |
| Traveler | Name, contact details | Trips they are associated with | Update contact details |

For an agent handling a cancellation, the map suggests a path from Trip to Booking. A booking summary can show the reference and status so the agent can pick the right record. The [state transition matrix](/glossary/state-transition-matrix.html) specifies what happens after an eligible agent requests cancellation.

## How does the object map fit into ORCA?

[ORCA](/glossary/orca-framework.html) gives teams several ways to investigate an object model. A [Nested Object Matrix](/glossary/nested-object-matrix.html) records relationships between object types. A [CTA Matrix](/glossary/cta-matrix.html) records what each role needs to do with each object. Deciding what belongs in the release relies on [Object Prioritization](/glossary/object-prioritization.html), while interface audits watch out for the [Four UX Fails in OOUX](/glossary/ooux-ux-fails.html). The object map organizes attributes by object and builds on the relationships already identified. The example above shows actions alongside those findings for easy reference.

Use the map to decide what belongs in each view. A search result might show the booking reference and status. The detail view can add fare rules and cancellation options while keeping the same reference and status labels.

## Related terms

- [ORCA Framework](/glossary/orca-framework.html)
- [Conceptual Schema](/glossary/conceptual-schema.html)
- [Domain Context Modeling](/glossary/domain-context-modeling.html)
- [Content Modeling](/glossary/content-modeling.html)

## Sources

- [Object-Oriented UX, Sophia V. Prater](https://alistapart.com/article/object-oriented-ux/)
- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [OOUX Foundations, Sophia V. Prater](https://ooux.com/offerings/foundations)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/object-mapping.html#webpage",
                "url": "https://lexkonovalov.com/glossary/object-mapping.html",
                "name": "Object Mapping in UX | Product Design Glossary",
                "description": "Learn how to create an object map in OOUX, with a travel booking example covering object types, relationships, attributes, and user actions.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/object-mapping.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/object-mapping.html#breadcrumbs"
                },
                "citation": [
                      "https://alistapart.com/article/object-oriented-ux/",
                      "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
                      "https://ooux.com/offerings/foundations"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/object-mapping.html#term",
                "name": "Object Mapping",
                "termCode": "object-mapping",
                "description": "Object mapping is the practice of organizing the things users work with into a shared model of object types, relationships, attributes, and available actions. In Object-Oriented UX (OOUX), an object map helps teams decide what information and actions belong together before designing screens.",
                "url": "https://lexkonovalov.com/glossary/object-mapping.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/object-mapping.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/object-mapping.html#breadcrumbs",
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
                            "name": "Object Mapping",
                            "item": "https://lexkonovalov.com/glossary/object-mapping.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "004",
    "name": "Domain Context Modeling",
    "slug": "domain-context-modeling",
    "category": "UX & Product Architecture",
    "secondaryCategory": "AI & Agentic Systems",
    "maturity": "Emerging",
    "definition": "Domain context modeling is the practice of documenting where a business term, object model, or rule applies and how information moves between contexts. It helps product teams design workflows where different groups work with related information but need different meanings, rules, or levels of detail.",
    "purpose": "Resolves semantic ambiguities across cross-functional products and guarantees that AI reasoning engines and humans share identical contextual boundaries.",
    "keyConcepts": [
      "Bounded contexts",
      "semantic boundaries",
      "context packets",
      "source of truth rules."
    ],
    "howItWorks": "Practitioners delineate domain models into isolated contextual modules, cataloging authoritative terms, data schemas, and agent action boundaries.",
    "relatedTerms": [
      "Object-Oriented UX",
      "Context Engineering",
      "Knowledge Graphs (AI Context)",
      "Controlled Vocabulary",
      "Object Guide"
    ],
    "seoTitle": "Domain Context Modeling in UX | Product Design Glossary",
    "seoDescription": "Learn how to map where business terms and rules apply. A travel operations example shows how sales and ticketing use different models for related work.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/domain-context-modeling.html",
    "sources": [
      "Domain-Driven Design Reference, Eric Evans (https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf)",
      "Bounded Context, Martin Fowler (https://martinfowler.com/bliki/BoundedContext.html)",
      "Object-Oriented UX, Sophia V. Prater (https://alistapart.com/article/object-oriented-ux/)"
    ],
    "contentMarkdown": `# Domain Context Modeling

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
2. **Document the model and its scope.** Record terms, objects, key relationships, and the rules that apply to them in an [Object Guide](/glossary/object-guide.html). Identify where the same word carries different meanings.
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
- [Object-Oriented UX, Sophia V. Prater](https://alistapart.com/article/object-oriented-ux/)`,
    "structuredDataGraph": [
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
  },
  {
    "id": "005",
    "name": "Cardinality (UX Architecture)",
    "slug": "cardinality-ux-architecture",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "In UX architecture, cardinality describes how many records of one object type can relate to a record of another type. It helps designers support the number of related records users may encounter, from an empty list to a collection they need to search.",
    "purpose": "Dictates interface layout structures, container types, pagination behaviors, and relational navigational paths to prevent dead ends and cognitive mismatch.",
    "keyConcepts": [
      "One-to-one (1 : 1)",
      "one-to-many (1 : N)",
      "many-to-many (N : M)",
      "directional traversal"
    ],
    "howItWorks": "Designers evaluate entity links during the relationships phase, choosing appropriate navigation controls such as master-detail splits, inline lists, or relational tags.",
    "relatedTerms": [
      "Object Mapping",
      "Information Architecture",
      "ORCA Framework",
      "Structural Navigation Model",
      "Information Architecture (IA)"
    ],
    "seoTitle": "Cardinality in UX: Examples | Product Design Glossary",
    "seoDescription": "Learn how one-to-one, one-to-many, and many-to-many relationships shape UX. Use cardinality to design for empty, single, and large sets of records.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html",
    "sources": [
      "Discovery Live: Relationship Discovery, OOUX (https://discoverylive.ooux.com/)",
      "Introducing ORCA, Sophia V. Prater (https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)",
      "What Is an Entity Relationship Diagram?, IBM (https://www.ibm.com/think/topics/entity-relationship-diagram)"
    ],
    "contentMarkdown": `# Cardinality (UX Architecture)

In UX architecture, cardinality describes how many records of one object type can relate to a record of another type. It helps designers support the number of related records users may encounter, from an empty list to a collection they need to search.

## What are the types of cardinality?

Ask the relationship question in both directions. These examples describe the rules of an illustrative travel operations tool.

| Relationship | Example | What the interface needs to support |
|---|---|---|
| One-to-one | A traveler has at most one preferences profile, and each profile belongs to exactly one traveler. | Show preferences when a profile exists and offer a way to create one when it is missing. |
| One-to-many | A trip can have zero or more bookings, and each booking belongs to exactly one trip. | Provide a way to view and manage multiple bookings from the trip. |
| Many-to-many | A trip can include multiple travelers, and each traveler can take multiple trips. | Let agents associate an existing traveler with another trip and find the traveler’s trips when needed. |

## Why do minimum and maximum counts matter?

“One-to-many” leaves open whether a trip can exist before its first booking. In the example, the minimum is zero bookings per trip and one trip per booking. A new trip needs a useful empty state, and the booking creation flow needs a trip selection when it starts outside a trip.

Distinguish the maximum the product allows from what people usually see. If most trips have two bookings but group trips can have dozens, test both sizes. Typical volume, tasks, and access rules help determine whether a simple list or a searchable table makes sense.

## How does cardinality affect ORCA design decisions?

ORCA teams can first record that Trips and Bookings are related using a [Nested Object Matrix](/glossary/nested-object-matrix.html), then use cardinality and [ORCA Relationship Requirements (MCSFD)](/glossary/orca-relationship-requirements.html) to clarify the relationship during the Requirements round. Where a many-to-many relationship carries its own attributes, such as reservation status, teams define a [Junction Object](/glossary/junction-object.html). Use the [object map](/glossary/object-mapping.html) to find rules that need more detail.

- Can an agent add the first booking directly from the empty Bookings section?
- Can an agent move a booking to another trip, and what would need to be checked?
- Can an agent link a traveler who already appears on another trip, and how should the interface prevent duplicate records?

A relationship can exist in the model even when one role cannot see it or has no reason to navigate in both directions. Decide what each role needs to see and do before turning the relationship into a link.

## Related terms

- [Object Mapping](/glossary/object-mapping.html)
- [Information Architecture (IA)](/glossary/information-architecture.html)
- [ORCA Framework](/glossary/orca-framework.html)
- [Structural Navigation Model](/glossary/structural-navigation-model.html)

## Sources

- [Discovery Live: Relationship Discovery, OOUX](https://discoverylive.ooux.com/)
- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [What Is an Entity Relationship Diagram?, IBM](https://www.ibm.com/think/topics/entity-relationship-diagram)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html#webpage",
                "url": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html",
                "name": "Cardinality in UX: Examples | Product Design Glossary",
                "description": "Learn how one-to-one, one-to-many, and many-to-many relationships shape UX. Use cardinality to design for empty, single, and large sets of records.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html#breadcrumbs"
                },
                "citation": [
                      "https://discoverylive.ooux.com/",
                      "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
                      "https://www.ibm.com/think/topics/entity-relationship-diagram"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html#term",
                "name": "Cardinality (UX Architecture)",
                "termCode": "cardinality-ux-architecture",
                "description": "In UX architecture, cardinality describes how many records of one object type can relate to a record of another type. It helps designers support the number of related records users may encounter, from an empty list to a collection they need to search.",
                "url": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html#breadcrumbs",
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
                            "name": "Cardinality (UX Architecture)",
                            "item": "https://lexkonovalov.com/glossary/cardinality-ux-architecture.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "006",
    "name": "Information Architecture (IA)",
    "slug": "information-architecture",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "Information Architecture (IA) is the structural discipline of organizing, structuring, labeling, and classifying digital content and functionality to support findability, intuitive wayfinding, and cognitive comprehension across digital ecosystems.",
    "purpose": "Bridges business content objectives with human search behaviors, minimizing cognitive friction and information overload in large data repositories.",
    "keyConcepts": [
      "Taxonomy",
      "ontology",
      "labeling systems",
      "search system mechanics",
      "wayfinding."
    ],
    "howItWorks": "Evaluates user search patterns, content inventories, and domain contexts to construct coherent structural navigation hierarchies and associative metadata webs.",
    "relatedTerms": [
      "Core Model",
      "Polyhierarchy",
      "Wayfinding System",
      "Controlled Vocabulary"
    ],
    "seoTitle": "What is Information Architecture? Modern IA Principles",
    "sources": [
      "Louis Rosenfeld, Peter Morville, & Jorge Arango, Information Architecture for the Web and Beyond, O'Reilly",
      "Abby Covert, How to Make Sense of Any Mess"
    ]
  },
  {
    "id": "007",
    "name": "Core Model",
    "slug": "core-model",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Proprietary / Framework-Specific",
    "definition": "The Core Model is an inside-out information architecture framework that designs digital touchpoints by identifying core pages where specific user tasks intersect with measurable business goals, prioritizing these nodes over hierarchical site trees.",
    "purpose": "Overcomes internal organizational biases and bloated navigational hierarchies by directly serving search-first, task-oriented user entry behaviors.",
    "keyConcepts": [
      "Inward paths",
      "core task fulfillment",
      "forward paths",
      "business objectives."
    ],
    "howItWorks": "Teams map incoming traffic sources (inward paths), define essential user tasks and business objectives for the node, and establish contextually relevant onward routes (forward paths).",
    "relatedTerms": [
      "Information Architecture",
      "Wayfinding System",
      "Conversion Funnel"
    ],
    "seoTitle": "The Core Model: Inside-Out Information Architecture Guide",
    "sources": [
      "Are Halland, The Core Model: Designing Inside Out for Better Results, A List Apart",
      "TheCoreModel.com (https://www.thecoremodel.com)"
    ]
  },
  {
    "id": "008",
    "name": "Enterprise Information Architecture",
    "slug": "enterprise-information-architecture",
    "alternateName": [
      "Enterprise IA",
      "EIA"
    ],
    "category": "UX & Product Architecture",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "Enterprise information architecture (EIA) organizes information across an organization’s products, repositories, and services so people can find, understand, and use it. It connects shared vocabulary, classification, metadata, navigation, search, and governance across teams and systems.",
    "purpose": "Prevents operational silos, fractured data views, and enterprise friction by harmonizing disparate business software suites under coherent navigation and semantic models.",
    "keyConcepts": [
      "Multi-tenancy",
      "unified metadata models",
      "access-level scoping",
      "distributed ontologies."
    ],
    "howItWorks": "Integrates corporate domain schemas with role-based access models, deploying centralized taxonomies and modular interaction patterns across business suites.",
    "relatedTerms": [
      "Information Architecture (IA)",
      "Domain Context Modeling",
      "Controlled Vocabulary",
      "Operational UX"
    ],
    "seoTitle": "Enterprise Information Architecture | Product Design Glossary",
    "seoDescription": "Understand enterprise information architecture through shared vocabulary, metadata, navigation, and governance, with a practical expense-claim example.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/enterprise-information-architecture.html",
    "sources": [
      "Introduction to SharePoint information architecture, Microsoft (https://learn.microsoft.com/en-us/sharepoint/information-architecture-modern-experience)",
      "Intranet Information Architecture (IA) Trends, Nielsen Norman Group (https://www.nngroup.com/articles/intranet-information-architecture-ia/)",
      "Information architecture consulting, Peter Morville / Semantic Studios (https://semanticstudios.com/consulting/)"
    ],
    "contentMarkdown": `# Enterprise Information Architecture

Enterprise information architecture (EIA) organizes information across an organization’s products, repositories, and services so people can find, understand, and use it. It connects shared vocabulary, classification, metadata, navigation, search, and governance across teams and systems.

In UX practice, this includes intranets, employee portals, and business applications. Teams coordinate definitions across owners and workflows: the same customer, policy, or expense claim may appear in several places.

## What does enterprise information architecture include?

| Area | Question it answers |
|---|---|
| Shared vocabulary | Do teams mean the same thing by “customer,” “account,” or “approved”? |
| Taxonomy and metadata | How is information classified, described, filtered, and retrieved? |
| Objects and relationships | How do records connect to people, documents, and other records? |
| Navigation and search | How can users reach information across products and repositories? |
| Governance | Who owns definitions, resolves conflicts, and maintains the structure? |

Access rules also shape what different users can find and see. Shared definitions can support different role-specific views without requiring every team to use the same navigation.

## An enterprise IA example: expense claims

Consider an illustrative employee portal connected to an expense system. An employee submits Claim #482; a manager reviews it; finance processes reimbursement.

The team defines one claim identifier and distinguishes **Submitted**, **Approved**, and **Paid**. Approval means the manager accepted the claim; payment means reimbursement was completed. That distinction needs to remain clear wherever the claim appears.

| User | Entry point | Information needed |
|---|---|---|
| Employee | My expenses | Claim status, receipts, and payment date |
| Manager | Claims awaiting approval | Amount, policy, and supporting receipts |
| Finance | Approved claims | Payment details and reimbursement status |

These views refer to the same claim. Links connect it to its receipts and the relevant policy. Metadata such as owner, date, and status supports search and filtering.

An assigned owner maintains the status definitions and checks how changes affect each system.

## How do you start?

Start with one task that crosses a team or system boundary. Interview the people involved, inventory the records and content they use, and note conflicting labels or duplicate sources.

Agree on definitions and ownership with domain experts. Identify the authoritative source for each record or policy. Then prototype navigation, search results, and record relationships. Use card sorting to explore groupings, tree testing to check findability, and usability testing to evaluate the complete task.

Measure whether people find the right information and complete the task accurately. Search failures, wrong destinations, and time spent locating records can reveal structural problems.

## How is enterprise IA different from a sitemap?

A sitemap describes a hierarchy of pages. Enterprise IA also coordinates meaning, metadata, relationships, and ownership across systems. One deliverable might be a sitemap; others include a vocabulary, taxonomy, content model, or governance plan. The appropriate structure depends on users’ work and the information involved.

## Related terms

- [Information Architecture (IA)](/glossary/information-architecture.html)
- [Domain Context Modeling](/glossary/domain-context-modeling.html)
- [Controlled Vocabulary](/glossary/controlled-vocabulary.html)
- [Operational UX](/glossary/operational-ux.html)

## Sources

- [Introduction to SharePoint information architecture, Microsoft](https://learn.microsoft.com/en-us/sharepoint/information-architecture-modern-experience)
- [Intranet Information Architecture (IA) Trends, Nielsen Norman Group](https://www.nngroup.com/articles/intranet-information-architecture-ia/)
- [Information architecture consulting, Peter Morville / Semantic Studios](https://semanticstudios.com/consulting/)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/enterprise-information-architecture.html#webpage",
                "url": "https://lexkonovalov.com/glossary/enterprise-information-architecture.html",
                "name": "Enterprise Information Architecture | Product Design Glossary",
                "description": "Understand enterprise information architecture through shared vocabulary, metadata, navigation, and governance, with a practical expense-claim example.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/enterprise-information-architecture.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/enterprise-information-architecture.html#breadcrumbs"
                },
                "citation": [
                      "https://learn.microsoft.com/en-us/sharepoint/information-architecture-modern-experience",
                      "https://www.nngroup.com/articles/intranet-information-architecture-ia/",
                      "https://semanticstudios.com/consulting/"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/enterprise-information-architecture.html#term",
                "name": "Enterprise Information Architecture",
                "alternateName": [
                      "Enterprise IA",
                      "EIA"
                ],
                "termCode": "enterprise-information-architecture",
                "description": "Enterprise information architecture (EIA) organizes information across an organization’s products, repositories, and services so people can find, understand, and use it. It connects shared vocabulary, classification, metadata, navigation, search, and governance across teams and systems.",
                "url": "https://lexkonovalov.com/glossary/enterprise-information-architecture.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/enterprise-information-architecture.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/enterprise-information-architecture.html#breadcrumbs",
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
                            "name": "Enterprise Information Architecture",
                            "item": "https://lexkonovalov.com/glossary/enterprise-information-architecture.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "009",
    "name": "Mental Model Mapping",
    "slug": "mental-model-mapping",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "Mental Model Mapping is the research practice of systematically diagramming a user's internal cognitive beliefs, situational reasoning, and workflows relative to a real-world task, independent of technological constraints.",
    "purpose": "Identifies systemic disconnects between how users believe a system functions and the underlying system mechanics, guiding intentional interaction architectures.",
    "keyConcepts": [
      "Cognitive schema",
      "task space mapping",
      "conceptual gap analysis",
      "behavioral patterns."
    ],
    "howItWorks": "Qualitative behavioral research is synthesized into affinity matrices showing user motivations, contrasted against existing technological touchpoints to discover missing capabilities.",
    "relatedTerms": [
      "Information Architecture",
      "Jobs to Be Done (JTBD)",
      "Task Model",
      "Conceptual Schema"
    ],
    "seoTitle": "Mental Model Mapping: Aligning UX with User Cognition",
    "sources": [
      "Indi Young, Mental Models: Aligning Design Strategy with Human Behavior, Rosenfeld Media",
      "Don Norman, The Design of Everyday Things"
    ]
  },
  {
    "id": "010",
    "name": "Content Modeling",
    "slug": "content-modeling",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "Content Modeling is the formal specification of structural content types, their discrete metadata attributes, editorial constraints, and systemic relationships decoupled from visual presentation templates.",
    "purpose": "Enables modular content reuse, headless content delivery across multi-platform surfaces, and consistent information parsing for search engines and language models.",
    "keyConcepts": [
      "Content types",
      "structural attributes",
      "presentation agnosticism",
      "relational references."
    ],
    "howItWorks": "Content strategists and architects dissect editorial requirements into typed models, defining character constraints, validation rules, and inter-entity associations in headless CMS engines.",
    "relatedTerms": [
      "Object Mapping",
      "Structured Data for LLMs",
      "Headless UI Architecture"
    ],
    "seoTitle": "Content Modeling Guide: Structuring Headless Content",
    "sources": [
      "Rachel Lovinger, Nimble: A Thinking Person's Guide to Content Modeling, A List Apart",
      "Carrie Hane & Mike Atherton, Designing Connected Content, New Riders"
    ]
  },
  {
    "id": "011",
    "name": "Operational UX",
    "slug": "operational-ux",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Coined / Interpretive",
    "definition": "Operational UX is an interaction design paradigm focused on high-density, mission-critical operational tools—such as logistics, travel dispatch, and financial execution—where cognitive throughput, error recovery, and speed outweigh visual aesthetics.",
    "purpose": "Eliminates operational fatigue, prevents catastrophic human error, and optimizes workflow latency for workforce operators processing high volumes of transactions under time pressure.",
    "keyConcepts": [
      "Cognitive throughput",
      "situational awareness",
      "dense spatial utilization",
      "keyboard orchestration."
    ],
    "howItWorks": "Interfaces are engineered with compact information density, deterministic keyboard shortcuts, explicit system state indicators, and inline validation to maximize operational velocity.",
    "relatedTerms": [
      "Enterprise Information Architecture",
      "State Transition Matrix",
      "Semantic Zoom",
      "Interaction Invariant"
    ],
    "seoTitle": "Operational UX: Designing High-Density Mission-Critical Systems",
    "sources": [
      "Daniel Rosenberg, UX Magic, Interaction Design Foundation",
      "Nielsen Norman Group, Enterprise Software Design Principles"
    ]
  },
  {
    "id": "012",
    "name": "Service Blueprinting",
    "slug": "service-blueprinting",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "Service Blueprinting is an operational diagramming methodology that visualizes end-to-end service delivery processes, mapping customer touchpoints against frontstage employee actions, backstage operational workflows, and internal support systems.",
    "purpose": "Uncovers cross-departmental bottlenecks, system failures, and hidden technical dependencies that disrupt customer-facing interactions.",
    "keyConcepts": [
      "Line of visibility",
      "frontstage interactions",
      "backstage operations",
      "support processes."
    ],
    "howItWorks": "Cross-functional workflows are chronologically mapped on vertical swimlanes across the line of customer interaction, exposing technological triggers and operational friction.",
    "relatedTerms": [
      "Customer Journey Mapping",
      "Operational UX",
      "Information Architecture"
    ],
    "seoTitle": "What is a Service Blueprint? Components & Blueprinting Methods",
    "sources": [
      "G. Lynn Shostack, Designing Services That Deliver, Harvard Business Review",
      "Jim Kalbach, Mapping Experiences, O'Reilly"
    ]
  },
  {
    "id": "013",
    "name": "Structural Navigation Model",
    "slug": "structural-navigation-model",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "A structural navigation model describes the main and local paths people use to move through a product's information architecture. It shows how sections and views are organized, what users can reach from each level, and how they can move back to a broader view.",
    "purpose": "Establishes predictable spatial anchors, allowing users to build reliable mental cognitive maps of location, history, and available trajectories within deep applications.",
    "keyConcepts": [
      "Navigational topology",
      "hub-and-spoke",
      "hierarchical nesting",
      "horizontal traversal."
    ],
    "howItWorks": "Architects select topological paradigms aligned to task types, deploying persistent orientation components such as navigation rails, menus, and relational hyperlinks.",
    "relatedTerms": [
      "Information Architecture",
      "Wayfinding System",
      "Breadcrumb Hierarchy",
      "Polyhierarchy",
      "Information Architecture (IA)"
    ],
    "seoTitle": "Structural Navigation Model | Product Design Glossary",
    "seoDescription": "Learn how a structural navigation model organizes menus and paths. See how object relationships add contextual links in a travel operations tool.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/structural-navigation-model.html",
    "sources": [
      "Designing Web Navigation: Types of Navigation Summary, James Kalbach (https://www.oreilly.com/library/view/designing-web-navigation/9780596528102/ch04s03.html)",
      "Object-Oriented UX, Sophia V. Prater (https://alistapart.com/article/object-oriented-ux/)",
      "Tree Testing: Evaluate Menu Labels and Categories, Nielsen Norman Group (https://www.nngroup.com/articles/tree-testing/)"
    ],
    "contentMarkdown": `# Structural Navigation Model

A structural navigation model describes the main and local paths people use to move through a product's information architecture. It shows how sections and views are organized, what users can reach from each level, and how they can move back to a broader view.

## How does structural navigation differ from contextual navigation?

Structural navigation follows the product's organization. For example, **Trips → Trip details → Bookings** follows a section down to a local view. Contextual navigation connects related information where a user needs it. A link from a trip's traveler list to a Traveler record is a contextual route that can cross sections.

Keep a record’s name and identifying details consistent across entry points. An agent who arrives from search should recognize the same booking they see on a trip.

## Navigation example for a travel operations tool

| Route | Design decision |
|---|---|
| Main menu → Trips → Trip details | Trips gives agents a stable starting point for work organized around trips. |
| Trip details → Bookings | Local navigation keeps a trip's bookings within reach while the agent reviews that trip. |
| Trip details → Traveler record | A contextual link lets the agent inspect a related traveler and their other trips. |
| Search → Booking details | A direct entry should show the booking's identity and link to its trip when the user has access. |

The [object map](/glossary/object-mapping.html) explains which records are related. Use the navigation model to choose which relationships become routes. Use the product's hierarchy to choose the breadcrumb trail. Use a separate return control when agents need to get back to a filtered list.

## How do you design and test the model?

1. **Start with common tasks.** Identify where users begin and which views they need to reach. Use [Object Prioritization](/glossary/object-prioritization.html) to distinguish primary entry points from nested records, and choose main sections and local views that match those tasks.
2. **Add useful contextual links.** Decide which related records users need nearby. Use [cardinality](/glossary/cardinality-ux-architecture.html) to anticipate how many results a path may expose.
3. **Plan orientation and return paths.** Check that titles, local navigation, and breadcrumbs make sense on direct entry. For an agent returning from a booking, consider whether the trip's prior list filters should be restored.
4. **Test the routes separately.** Use tree testing to evaluate labels and hierarchy. Use a prototype to test contextual links and direct entry, where placement and screen context matter.

Test whether an agent can open a booking from search, find its trip, and return to the booking list without losing their place.

## Related terms

- [Information Architecture (IA)](/glossary/information-architecture.html)
- [Wayfinding System](/glossary/wayfinding-system.html)
- [Breadcrumb Hierarchy](/glossary/breadcrumb-hierarchy.html)
- [Polyhierarchy](/glossary/polyhierarchy.html)

## Sources

- [Designing Web Navigation: Types of Navigation Summary, James Kalbach](https://www.oreilly.com/library/view/designing-web-navigation/9780596528102/ch04s03.html)
- [Object-Oriented UX, Sophia V. Prater](https://alistapart.com/article/object-oriented-ux/)
- [Tree Testing: Evaluate Menu Labels and Categories, Nielsen Norman Group](https://www.nngroup.com/articles/tree-testing/)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/structural-navigation-model.html#webpage",
                "url": "https://lexkonovalov.com/glossary/structural-navigation-model.html",
                "name": "Structural Navigation Model | Product Design Glossary",
                "description": "Learn how a structural navigation model organizes menus and paths. See how object relationships add contextual links in a travel operations tool.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/structural-navigation-model.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/structural-navigation-model.html#breadcrumbs"
                },
                "citation": [
                      "https://www.oreilly.com/library/view/designing-web-navigation/9780596528102/ch04s03.html",
                      "https://alistapart.com/article/object-oriented-ux/",
                      "https://www.nngroup.com/articles/tree-testing/"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/structural-navigation-model.html#term",
                "name": "Structural Navigation Model",
                "termCode": "structural-navigation-model",
                "description": "A structural navigation model describes the main and local paths people use to move through a product's information architecture. It shows how sections and views are organized, what users can reach from each level, and how they can move back to a broader view.",
                "url": "https://lexkonovalov.com/glossary/structural-navigation-model.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/structural-navigation-model.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/structural-navigation-model.html#breadcrumbs",
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
                            "name": "Structural Navigation Model",
                            "item": "https://lexkonovalov.com/glossary/structural-navigation-model.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "014",
    "name": "State Transition Matrix",
    "slug": "state-transition-matrix",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "A state transition matrix is a table that shows which events can trigger a transition from each state and what state follows. UX teams use it to design actions, feedback, and recovery paths for objects such as bookings, tickets, and purchase requests.",
    "purpose": "Precludes unaccounted application states, prevents invalid user actions, and establishes complete interaction logic for complex multi-role workflows.",
    "keyConcepts": [
      "Finite state machines",
      "state mutation",
      "event triggers",
      "transition guards."
    ],
    "howItWorks": "Designers construct a two-dimensional grid of current states versus triggering actions, identifying permissible target states and disabling forbidden edge cases.",
    "relatedTerms": [
      "Object-Oriented UX",
      "ORCA Framework",
      "Operational UX",
      "Interaction Invariant"
    ],
    "seoTitle": "State Transition Matrix in UX | Product Design Glossary",
    "seoDescription": "See how to build a state transition matrix for UX. A booking example maps current states, events, next states, and the rules that govern user actions.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/state-transition-matrix.html",
    "sources": [
      "State Chart XML (SCXML), W3C (https://www.w3.org/TR/scxml/)",
      "Introducing ORCA, Sophia V. Prater (https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)"
    ],
    "contentMarkdown": `# State Transition Matrix

A state transition matrix is a table that shows which events can trigger a transition from each state and what state follows. UX teams use it to design actions, feedback, and recovery paths for objects such as bookings, tickets, and purchase requests.

## How do you read a state transition matrix?

Rows show current states. Columns show events, which can come from a user or an external system. A cell identifies the next state for that combination. When a transition depends on a rule, record the condition, also called a guard.

## Example of a booking state transition matrix

In this example, an agent submits a booking and waits for the supplier to confirm it. Cancellation also requires a supplier response. While cancellation is pending, the agent can see the request status and cannot submit a second request.

| Current state | Submit booking | Confirm booking | Request cancellation | Accept cancellation | Decline cancellation |
|---|---|---|---|---|---|
| Draft | Awaiting confirmation | — | — | — | — |
| Awaiting confirmation | — | Confirmed | — | — | — |
| Confirmed | — | — | Cancellation pending | — | — |
| Cancellation pending | — | — | — | Canceled | Confirmed |
| Canceled | — | — | — | — | — |

A dash means the event has no valid transition in this example. Confirming the booking and accepting or declining cancellation are supplier events. The booking moves out of Draft once a complete submission succeeds. An agent can request cancellation only when their role and the fare rules allow it. If the supplier declines cancellation, restore Confirmed status and show the reason if available.

This example covers the confirmation path and two cancellation outcomes. Extend the model for booking rejection, timeouts, and other cases your product supports.

## How does the matrix inform ORCA actions?

The Calls to Action part of [ORCA](/glossary/orca-framework.html) identifies actions people need, organized initially in a [CTA Matrix](/glossary/cta-matrix.html). The matrix helps specify how those actions behave at each stage of the object's lifecycle. For example, agents can see “Cancellation pending” in the booking list and open the detail view to check when the request was sent.

Record what users see when an event fails or arrives late. If a booking changed after the agent opened it, refresh its status and explain why the requested action cannot proceed. Use the same rules in list and detail views.

Review the table with design, engineering, and operations. Walk through one routine case, one blocked action, and one delayed response. Add missing transitions or feedback before the workflow is built.

## Related terms

- [Object-Oriented UX](/glossary/object-oriented-ux.html)
- [ORCA Framework](/glossary/orca-framework.html)
- [Operational UX](/glossary/operational-ux.html)
- [Interaction Invariant](/glossary/interaction-invariant.html)

## Sources

- [State Chart XML (SCXML), W3C](https://www.w3.org/TR/scxml/)
- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/state-transition-matrix.html#webpage",
                "url": "https://lexkonovalov.com/glossary/state-transition-matrix.html",
                "name": "State Transition Matrix in UX | Product Design Glossary",
                "description": "See how to build a state transition matrix for UX. A booking example maps current states, events, next states, and the rules that govern user actions.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/state-transition-matrix.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/state-transition-matrix.html#breadcrumbs"
                },
                "citation": [
                      "https://www.w3.org/TR/scxml/",
                      "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/state-transition-matrix.html#term",
                "name": "State Transition Matrix",
                "termCode": "state-transition-matrix",
                "description": "A state transition matrix is a table that shows which events can trigger a transition from each state and what state follows. UX teams use it to design actions, feedback, and recovery paths for objects such as bookings, tickets, and purchase requests.",
                "url": "https://lexkonovalov.com/glossary/state-transition-matrix.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/state-transition-matrix.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/state-transition-matrix.html#breadcrumbs",
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
                            "name": "State Transition Matrix",
                            "item": "https://lexkonovalov.com/glossary/state-transition-matrix.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "015",
    "name": "Polyhierarchy",
    "slug": "polyhierarchy",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "Polyhierarchy is an architectural taxonomy classification pattern wherein a single entity or piece of content simultaneously occupies multiple legitimate structural categories within an organization tree.",
    "purpose": "Accommodates divergent user mental models and alternate discovery paths, preventing search failures caused by rigid, singular classification silos.",
    "keyConcepts": [
      "Multiple inheritance",
      "canonical indexing",
      "taxonomy nodes",
      "relational routing."
    ],
    "howItWorks": "The database assigns multiple categorical parent references to an entity while enforcing canonical URI references to avoid SEO duplication penalties.",
    "relatedTerms": [
      "Information Architecture",
      "Faceted Classification",
      "Core Model",
      "Controlled Vocabulary"
    ],
    "seoTitle": "Polyhierarchy in Information Architecture: UX Classification Patterns",
    "sources": [
      "Karl Fast & Peter Morville, Information Architecture, O'Reilly",
      "ISO 25964 Thesauri and Interoperability with Other Vocabularies"
    ]
  },
  {
    "id": "016",
    "name": "Controlled Vocabulary",
    "slug": "controlled-vocabulary",
    "category": "UX & Product Architecture",
    "secondaryCategory": "AI & Agentic Systems",
    "maturity": "Established",
    "definition": "A Controlled Vocabulary is an explicitly managed, normalized list of authorized terms, phrases, and semantic synonyms used across a product ecosystem to eliminate ambiguity in labeling, data entry, and indexing.",
    "purpose": "Eliminates lexical fragmentation, prevents synonymous confusion across disparate teams, and supports deterministic entity parsing for search algorithms and AI systems.",
    "keyConcepts": [
      "Term normalization",
      "synonym rings",
      "preferred labels",
      "semantic precision."
    ],
    "howItWorks": "Information architects define standard terminology registries, mapping colloquially used variants and synonyms back to a standardized canonical entity.",
    "relatedTerms": [
      "Information Architecture",
      "Domain Context Modeling",
      "Structured Data for LLMs"
    ],
    "seoTitle": "Controlled Vocabularies in Product UX & Search Architecture",
    "sources": [
      "ANSI/NISO Z.19 Guidelines for the Construction, Format, and Management of Monolingual Controlled Vocabularies",
      "Amy Warner, Lexical Analysis for IA"
    ]
  },
  {
    "id": "017",
    "name": "Faceted Classification",
    "slug": "faceted-classification",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "Faceted Classification is an indexing and retrieval structure allowing users to browse, filter, and narrow complex datasets by dynamically combining multiple orthogonal, non-hierarchical attribute dimensions.",
    "purpose": "Powers high-precision discovery in vast, multi-attribute enterprise catalogs and e-commerce inventories without forcing users down rigid navigational paths.",
    "keyConcepts": [
      "Orthogonal facets",
      "parametric filtering",
      "attribute aggregation",
      "dynamic counts."
    ],
    "howItWorks": "Content attributes are indexed along independent dimensions (e.g., Price, Dimension, Material), allowing real-time parametric queries to filter active datasets.",
    "relatedTerms": [
      "Information Architecture",
      "Polyhierarchy",
      "Content Modeling"
    ],
    "seoTitle": "Faceted Classification: Designing Advanced UX Filter Architectures",
    "sources": [
      "S. R. Ranganathan, The Colon Classification",
      "Daniel Tunkelang, Faceted Search, Morgan & Claypool"
    ]
  },
  {
    "id": "018",
    "name": "Task Model",
    "slug": "task-model",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "A Task Model is a formal breakdown of the physical and cognitive operations, preconditions, decisions, and system validations required for a user to accomplish an intended objective.",
    "purpose": "Identifies cognitive burden, redundant confirmation loops, and procedural friction points within digital processes before writing software requirements.",
    "keyConcepts": [
      "Hierarchical task analysis",
      "cognitive triggers",
      "preconditions",
      "operational dependencies."
    ],
    "howItWorks": "Designers dissect goals into sub-tasks, charting preconditions, required system inputs, decision forks, and final success criteria.",
    "relatedTerms": [
      "Jobs to Be Done (JTBD)",
      "Mental Model Mapping",
      "Service Blueprinting"
    ],
    "seoTitle": "Task Modeling in Product Design: Methods & Hierarchical Analysis",
    "sources": [
      "Dan Diaper & Neville Stanton, The Handbook of Task Analysis for Human-Computer Interaction",
      "Don Norman, The Design of Everyday Things"
    ]
  },
  {
    "id": "019",
    "name": "Wayfinding System",
    "slug": "wayfinding-system",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "A Wayfinding System encompasses the perceptual cues, navigational milestones, spatial signposts, and contextual indicators that inform users of their location, orientation, and available movement paths.",
    "purpose": "Prevents spatial disorientation in deep, complex multi-page software, reducing anxiety and supporting fluid task progression.",
    "keyConcepts": [
      "Orientation cues",
      "spatial landmarks",
      "environmental feedback",
      "progressive routing."
    ],
    "howItWorks": "Designers combine persistent contextual anchors—such as active page highlights, structural breadcrumbs, headers, and visual progress rails—to orient users.",
    "relatedTerms": [
      "Information Architecture",
      "Breadcrumb Hierarchy",
      "Structural Navigation Model",
      "Semantic Zoom"
    ],
    "seoTitle": "Digital Wayfinding Systems: Principles of Spatial UX Navigation",
    "sources": [
      "Kevin Lynch, The Image of the City",
      "Per Mollerup, Wayshowing > Wayfinding: Basic Codes for Designing Effective Wayfinding"
    ]
  },
  {
    "id": "020",
    "name": "Semantic Zoom",
    "slug": "semantic-zoom",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "Semantic Zoom is an interaction design technique where changing magnification levels does not merely scale interface pixels, but fundamentally alters the depth, density, and nature of the displayed semantic information.",
    "purpose": "Enables users to transition smoothly between macro-level structural overviews and micro-level operational details without losing global context.",
    "keyConcepts": [
      "Information granularity",
      "level of detail (LoD)",
      "spatial zooming",
      "contextual morphing."
    ],
    "howItWorks": "When a user zooms in on a UI canvas or table, low-fidelity abstract aggregates dynamically morph into high-density detail views with contextual actions.",
    "relatedTerms": [
      "Operational UX",
      "Progressive Disclosure",
      "Affordance Layering",
      "Interaction Invariant"
    ],
    "seoTitle": "Semantic Zoom in UX: Designing Multi-Scale Interface Systems",
    "sources": [
      "Benjamin B. Bederson, PhotoMesa: A Zoomable Image Browser, ACM",
      "Daniel Rosenberg, UX Magic"
    ]
  },
  {
    "id": "021",
    "name": "Breadcrumb Hierarchy",
    "slug": "breadcrumb-hierarchy",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "A Breadcrumb Hierarchy is a secondary contextual navigation pattern that visualizes the current page's structural position within a website's architectural hierarchy, allowing single-click upward traversal.",
    "purpose": "Grounds users arriving via deep external links, reinforces information architecture, and provides search engine crawlers with semantic structural hierarchy.",
    "keyConcepts": [
      "Location breadcrumbs",
      "attribute breadcrumbs",
      "path breadcrumbs",
      "schema markup."
    ],
    "howItWorks": "The application dynamically evaluates the node's lineage in the structural taxonomy and renders an inline, serialized list of hyperlinked parent categories.",
    "relatedTerms": [
      "Information Architecture",
      "Structural Navigation Model",
      "Wayfinding System"
    ],
    "seoTitle": "Breadcrumb Hierarchy in UX: Structural Patterns & SEO Best Practices",
    "sources": [
      "Jakob Nielsen, Breadcrumb Navigation: Increasingly Useful, Nielsen Norman Group",
      "W3C WAI, Breadcrumb Pattern"
    ]
  },
  {
    "id": "022",
    "name": "Affordance Layering",
    "slug": "affordance-layering",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "Affordance Layering is the intentional sequencing of visual, physical, and cognitive interaction signifiers based on user proximity, pointer focus, or operational state.",
    "purpose": "Eliminates visual noise in high-density enterprise software by displaying secondary and tertiary action controls only when contextually relevant.",
    "keyConcepts": [
      "Perceived affordance",
      "progressive visibility",
      "interaction triggers",
      "focus reveal."
    ],
    "howItWorks": "Primary affordances remain permanently visible; secondary tools appear on pointer hover, row selection, or focus transitions, reducing cognitive clutter.",
    "relatedTerms": [
      "Progressive Disclosure",
      "Operational UX",
      "Interaction Invariant"
    ],
    "seoTitle": "Affordance Layering: Reducing Cognitive Noise in Enterprise UX",
    "sources": [
      "James J. Gibson, The Ecological Approach to Visual Perception",
      "Don Norman, Signifiers, Not Affordances, ACM Interactions"
    ]
  },
  {
    "id": "023",
    "name": "Progressive Disclosure",
    "slug": "progressive-disclosure",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "Progressive disclosure is an interaction design technique that shows essential information and controls first, then reveals less frequently needed options when users request them. It helps people focus on their current task while keeping additional capabilities available.",
    "purpose": "Minimizes upfront cognitive load, avoids intimidating novice users, and streamlines primary task completion without stripping away advanced power features.",
    "keyConcepts": [
      "Cognitive pacing",
      "disclosure toggles",
      "layered complexity",
      "default states."
    ],
    "howItWorks": "The interface surfaces only critical path decisions; secondary options are housed behind explicit disclosures (e.g., \"Advanced Settings\" or accordions) upon user demand.",
    "relatedTerms": [
      "Affordance Layering",
      "Semantic Zoom",
      "Task Model",
      "Operational UX"
    ],
    "seoTitle": "Progressive Disclosure in UX | Product Design Glossary",
    "seoDescription": "What is progressive disclosure? See a practical UX example, what to keep visible, and how to make optional controls discoverable and accessible.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/progressive-disclosure.html",
    "sources": [
      "Progressive Disclosure, Jakob Nielsen, Nielsen Norman Group (https://www.nngroup.com/articles/progressive-disclosure/)",
      "Details, GOV.UK Design System (https://design-system.service.gov.uk/components/details/)",
      "Disclosure (Show/Hide) Pattern, W3C WAI (https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)"
    ],
    "contentMarkdown": `# Progressive Disclosure

Progressive disclosure is an interaction design technique that shows essential information and controls first, then reveals less frequently needed options when users request them. It helps people focus on their current task while keeping additional capabilities available.

## How does progressive disclosure work?

Start with the options people need for common tasks. Provide a clearly labeled way to reveal additional settings or information, such as “Export options” or “Technical specifications.”

Use task research and usability testing to decide what to show. Low usage alone does not prove that a feature is unimportant: people may be unable to find it.

An accordion or secondary dialog can support this pattern. Hiding required information does not.

## Example: exporting a report

Suppose a reporting tool serves managers who usually export the current report as a PDF, while analysts occasionally need a customized CSV.

| Initially visible | Available through “Export options” |
|---|---|
| File format, with PDF selected | CSV delimiter and encoding |
| Current date range and an Export button | Selection of columns for CSV export |
| Summary of any customized settings | Controls for editing those settings |

With CSV selected, “Export options” opens the delimiter, encoding, and column controls. If someone changes the selected columns and collapses the panel, a summary such as “CSV · 6 selected columns” remains visible. The export should not silently use forgotten settings.

This example assumes occasional customization. If analysts select columns on every export, keep those controls in their primary workflow. Test whether both groups can export the intended data without missing settings or repeatedly reopening the panel.

## What should stay visible?

Keep information people need to make an informed decision in the main flow: total cost, important restrictions, required inputs, and actionable errors. GOV.UK's guidance for the details component similarly advises against hiding content most users need.

Avoid burying frequent actions behind repeated expansion. Several nested disclosure levels can also make navigation difficult.

For an in-place disclosure, use an accessible control. The W3C disclosure pattern uses a button activated with Enter or Space and an \`aria-expanded\` state that reflects whether the content is open. Test the interaction with a keyboard and assistive technology.

## Progressive disclosure vs. staged disclosure

Progressive disclosure reveals optional detail on request. Staged disclosure divides a task into successive steps that users normally complete.

“Export options” is progressive disclosure. A checkout that moves through address, delivery, and payment is staged disclosure. Test whether users need to compare information across steps before separating it.

## Related terms

- [Affordance Layering](/glossary/affordance-layering.html)
- [Semantic Zoom](/glossary/semantic-zoom.html)
- [Task Model](/glossary/task-model.html)
- [Operational UX](/glossary/operational-ux.html)

## Sources

- [Progressive Disclosure, Jakob Nielsen, Nielsen Norman Group](https://www.nngroup.com/articles/progressive-disclosure/)
- [Details, GOV.UK Design System](https://design-system.service.gov.uk/components/details/)
- [Disclosure (Show/Hide) Pattern, W3C WAI](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/progressive-disclosure.html#webpage",
                "url": "https://lexkonovalov.com/glossary/progressive-disclosure.html",
                "name": "Progressive Disclosure in UX | Product Design Glossary",
                "description": "What is progressive disclosure? See a practical UX example, what to keep visible, and how to make optional controls discoverable and accessible.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/progressive-disclosure.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/progressive-disclosure.html#breadcrumbs"
                },
                "citation": [
                      "https://www.nngroup.com/articles/progressive-disclosure/",
                      "https://design-system.service.gov.uk/components/details/",
                      "https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/progressive-disclosure.html#term",
                "name": "Progressive Disclosure",
                "termCode": "progressive-disclosure",
                "description": "Progressive disclosure is an interaction design technique that shows essential information and controls first, then reveals less frequently needed options when users request them. It helps people focus on their current task while keeping additional capabilities available.",
                "url": "https://lexkonovalov.com/glossary/progressive-disclosure.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/progressive-disclosure.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/progressive-disclosure.html#breadcrumbs",
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
                            "name": "Progressive Disclosure",
                            "item": "https://lexkonovalov.com/glossary/progressive-disclosure.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "024",
    "name": "Conceptual Schema",
    "slug": "conceptual-schema",
    "category": "UX & Product Architecture",
    "secondaryCategory": "AI & Agentic Systems",
    "maturity": "Established",
    "definition": "A conceptual schema describes the information a system represents: its entities, their properties, relationships, and constraints, independently of physical storage. It gives teams a shared definition of what the data means and which business rules it must satisfy.",
    "purpose": "Ensures structural alignment between backend relational databases, frontend UI components, and user mental representations, eliminating architectural technical debt.",
    "keyConcepts": [
      "Semantic modeling",
      "entity integrity",
      "abstraction layers",
      "domain primitives."
    ],
    "howItWorks": "System architects and designers model core domain entities and relational constraints, standardizing systemic rules before API and interface definition.",
    "relatedTerms": [
      "Domain Context Modeling",
      "Object-Oriented UX",
      "Content Modeling",
      "Knowledge Graphs (AI Context)"
    ],
    "seoTitle": "Conceptual Schema: Meaning & Example | Product Design Glossary",
    "seoDescription": "Learn what a conceptual schema defines, with a hotel example showing entities, relationships, and rules, plus conceptual, logical, and physical models.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/conceptual-schema.html",
    "sources": [
      "Database architecture: the conceptual schema, University of Cape Town (https://www.cs.uct.ac.za/mit_notes/database/htmls/chp01.html)",
      "What Is Data Modeling?, IBM (https://www.ibm.com/think/topics/data-modeling)",
      "What Is an Entity Relationship Diagram?, IBM (https://www.ibm.com/think/topics/entity-relationship-diagram)"
    ],
    "contentMarkdown": `# Conceptual Schema

A conceptual schema describes the information a system represents: its entities, their properties, relationships, and constraints, independently of physical storage. It gives teams a shared definition of what the data means and which business rules it must satisfy.

In product design, this helps teams agree on concepts such as Customer, Reservation, or Payment before designing their screens and behavior. The schema describes information structure; individual records are instances of that structure.

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
- [What Is an Entity Relationship Diagram?, IBM](https://www.ibm.com/think/topics/entity-relationship-diagram)`,
    "structuredDataGraph": [
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
  },
  {
    "id": "025",
    "name": "Interaction Invariant",
    "slug": "interaction-invariant",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "An Interaction Invariant is a foundational interaction rule, gesture, or behavioral principle that remains completely uniform across every system state, module, and platform within a software suite.",
    "purpose": "Fosters strong muscle memory and deep psychological trust, allowing users to safely predict system responses without mental recalculation.",
    "keyConcepts": [
      "Behavioral constancy",
      "operational determinism",
      "cognitive consistency",
      "platform invariants"
    ],
    "howItWorks": "Designers codify universal interaction rules—such as uniform escape actions, persistent filtering logic, or standard keyboard bindings—that components cannot override.",
    "relatedTerms": [
      "Operational UX",
      "Mental Model Mapping",
      "Design System Governance",
      "Design Primitives"
    ],
    "seoTitle": "Interaction Invariants in Product Design: Designing Predictable UX",
    "sources": [
      "Daniel Rosenberg, UX Magic, IDF",
      "Bruce Tognazzini, First Principles of Interaction Design"
    ]
  },
  {
    "id": "026",
    "name": "Design System",
    "slug": "design-system",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "A Design System is a managed ecosystem of interdependent design foundations, token architectures, production code components, standards, and operational governance models that scale multi-brand digital product development.",
    "purpose": "Eliminates visual and functional divergence, curtails engineering rework, and ensures consistent quality, accessibility, and brand coherence across multi-platform software suites.",
    "keyConcepts": [
      "Design tokens",
      "component contracts",
      "operational governance",
      "systematic scalability."
    ],
    "howItWorks": "Integrates platform-agnostic token specifications with reusable code libraries and design tool libraries via automated deployment pipelines, governed by formal versioning.",
    "relatedTerms": [
      "Design Tokens",
      "Component Architecture",
      "DesignOps",
      "Design System Governance"
    ],
    "seoTitle": "What is a Design System? Architecture, Scalability & Setup",
    "sources": [
      "Nathan Curtis, Modular Web Design, New Riders",
      "Alla Kholmatova, Design Systems, Smashing Media"
    ]
  },
  {
    "id": "027",
    "name": "Design Tokens",
    "slug": "design-tokens",
    "alternateName": [
      "Design token"
    ],
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Design tokens are named values that represent reusable design decisions, such as colors, spacing, typography, and motion. They give designers and developers a shared way to describe and apply those decisions across components, themes, and platforms.",
    "purpose": "Serves as the single source of truth for design variables, automating synchronization across design tools, Web, iOS, and Android production repositories.",
    "keyConcepts": [
      "Name-value pairs",
      "platform agnosticism",
      "automation pipelines",
      "single source of truth."
    ],
    "howItWorks": "Designers update token values in design tools; build engines consume the JSON schema and compile native CSS variables, Swift constants, or Android XML files.",
    "relatedTerms": [
      "Design System",
      "Semantic Tokens",
      "Design Primitives",
      "Style Dictionary",
      "Design Tokens Format Module (DTCG)"
    ],
    "seoTitle": "Design Tokens: Definition & Examples | Product Design Glossary",
    "seoDescription": "Learn how design tokens represent reusable design decisions, with primitive and semantic examples, DTCG JSON, and a practical design-to-code workflow.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/design-tokens.html",
    "sources": [
      "Design tokens explained, Atlassian Design System (https://atlassian.design/foundations/tokens/design-tokens/)",
      "Design Tokens Format Module 2025.10, Design Tokens Community Group (https://www.designtokens.org/tr/2025.10/format/)",
      "Style Dictionary documentation (https://styledictionary.com/)"
    ],
    "contentMarkdown": `# Design Tokens

Design tokens are named values that represent reusable design decisions, such as colors, spacing, typography, and motion. They give designers and developers a shared way to describe and apply those decisions across components, themes, and platforms.

For example, a component can use a token named \`color.text.link\` instead of choosing a color independently. The name describes the intended use; its value can change with the theme.

## What are primitive, semantic, and component tokens?

Many design systems organize tokens into these layers. The naming and number of layers vary by system.

| Layer | Illustrative name | Role |
|---|---|---|
| Primitive | \`color.blue.600\` | Stores a base palette value. |
| Semantic | \`color.text.link\` | Assigns a value to a purpose. |
| Component | \`button.primary.background\` | Applies a decision to a specific component. |

A semantic token can reference a primitive through an alias. For example, \`color.text.link\` might reference \`color.blue.600\` in a light theme and a lighter blue in a dark theme. Components continue to use the semantic name. Check the resulting contrast in each context.

## A simple design token example

This example uses the DTCG 2025.10 format to define a spacing value and a token for card padding:

\`\`\`json
{
  "space": {
    "200": {
      "$type": "dimension",
      "$value": { "value": 8, "unit": "px" }
    }
  },
  "card": {
    "padding": {
      "$type": "dimension",
      "$value": "{space.200}"
    }
  }
}
\`\`\`

\`card.padding\` resolves to 8 pixels through its reference to \`space.200\`. To increase only card padding, point \`card.padding\` to a different spacing token. Changing \`space.200\` itself affects every token that references it. The names and values are illustrative.

## How do tokens get from design to code?

A team maintains token definitions in an agreed source, reviews changes, and uses tooling to produce the formats each platform needs. A tool such as Style Dictionary can transform token data into CSS, JavaScript, or native platform resources.

CSS custom properties and Figma variables can represent tokens in their respective environments. A shared naming scheme, compatible tooling, and an explicit release process connect them. Tokens themselves do not automatically synchronize design files and production code.

## Do design tokens have to use JSON?

Tokens are a design-system concept; the DTCG specification defines a JSON format for exchanging them between tools. The stable 2025.10 Format Module specifies types, values, groups, and references. It is a Community Group specification, not a W3C Standard.

Start with decisions that repeat across the interface. Document intended usage and check affected components before releasing changes. Add layers when they solve a concrete reuse or maintenance problem.

## Related terms

- [Design System](/glossary/design-system.html)
- [Semantic Tokens](/glossary/semantic-tokens.html)
- [Design Primitives](/glossary/design-primitives.html)
- [Style Dictionary](/glossary/style-dictionary.html)
- [Design Tokens Format Module (DTCG)](/glossary/design-tokens-format-module-dtcg.html)

## Sources

- [Design tokens explained, Atlassian Design System](https://atlassian.design/foundations/tokens/design-tokens/)
- [Design Tokens Format Module 2025.10, Design Tokens Community Group](https://www.designtokens.org/tr/2025.10/format/)
- [Style Dictionary documentation](https://styledictionary.com/)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/design-tokens.html#webpage",
                "url": "https://lexkonovalov.com/glossary/design-tokens.html",
                "name": "Design Tokens: Definition & Examples | Product Design Glossary",
                "description": "Learn how design tokens represent reusable design decisions, with primitive and semantic examples, DTCG JSON, and a practical design-to-code workflow.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/design-tokens.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/design-tokens.html#breadcrumbs"
                },
                "citation": [
                      "https://atlassian.design/foundations/tokens/design-tokens/",
                      "https://www.designtokens.org/tr/2025.10/format/",
                      "https://styledictionary.com/"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/design-tokens.html#term",
                "name": "Design Tokens",
                "alternateName": [
                      "Design token"
                ],
                "termCode": "design-tokens",
                "description": "Design tokens are named values that represent reusable design decisions, such as colors, spacing, typography, and motion. They give designers and developers a shared way to describe and apply those decisions across components, themes, and platforms.",
                "url": "https://lexkonovalov.com/glossary/design-tokens.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/design-tokens.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/design-tokens.html#breadcrumbs",
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
                            "name": "Design Tokens",
                            "item": "https://lexkonovalov.com/glossary/design-tokens.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "028",
    "name": "Design Tokens Format Module (DTCG)",
    "slug": "design-tokens-format-module-dtcg",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "The Design Tokens Format Module is the official technical specification produced by the W3C Design Tokens Community Group (DTCG) that defines the standardized JSON schema structure for declaring, typing, and resolving design token data.",
    "purpose": "Eliminates proprietary tool lock-in by establishing a universal file format interoperable across Figma, Penpot, Style Dictionary, and production build tooling.",
    "keyConcepts": [
      "$value",
      "$type",
      "curly bracket alias syntax {group.token}",
      "composite token types."
    ],
    "howItWorks": "The DTCG standard dictates how JSON token trees declare explicit types (e.g., color, dimension, duration) and resolve token aliases via period-separated paths.",
    "relatedTerms": [
      "Design Tokens",
      "Style Dictionary",
      "Semantic Tokens",
      "Token Resolver Engine"
    ],
    "seoTitle": "DTCG Design Tokens Format Module: The Official W3C Spec",
    "sources": [
      "W3C Design Tokens Community Group, Design Tokens Format Module Specification 2025.1013",
      "DTCG Community (https://www.w.org/community/design-tokens)"
    ]
  },
  {
    "id": "029",
    "name": "Semantic Tokens",
    "slug": "semantic-tokens",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Semantic Tokens (or Alias Tokens) are contextual design tokens whose names communicate intended UI purpose and intent (e.g., surface-danger-subtle) rather than raw literal values (e.g., red-500).",
    "purpose": "Decouples component implementation from literal brand values, enabling dynamic multi-theme switching, high-contrast modes, and seamless dark-mode re-theming.",
    "keyConcepts": [
      "Intentional naming",
      "alias references",
      "contextual abstraction",
      "theme aliasing."
    ],
    "howItWorks": "A semantic token maps its  to an underlying global primitive token alias (e.g., \"\": \"{color.palette.red.500}\"), resolving dynamically based on the active theme.",
    "relatedTerms": [
      "Design Tokens",
      "Design Primitives",
      "Figma Variables & Modes",
      "Component Architecture"
    ],
    "seoTitle": "Semantic Tokens: Naming Systems, Dark Mode, and Theming Architecture",
    "sources": [
      "Nathan Curtis, Naming Tokens in Design Systems",
      "W3C DTCG Format Specification"
    ]
  },
  {
    "id": "030",
    "name": "Design Primitives",
    "slug": "design-primitives",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Design Primitives (or Global Tokens) are the context-free, foundational scale values that define the raw physical bounds of a design system, including literal color ramps, base typography scales, and absolute spatial units.",
    "purpose": "Constrains designer choices to mathematically harmonious scales, preventing arbitrary pixel and color choices across products.",
    "keyConcepts": [
      "Literal scales",
      "context-free values",
      "global foundation",
      "mathematical ramps."
    ],
    "howItWorks": "Primitives are defined at the root level of a token tree and referenced strictly by intermediate semantic tokens, never consumed directly by production UI components.",
    "relatedTerms": [
      "Design Tokens",
      "Semantic Tokens",
      "Component Architecture",
      "Atomic Design"
    ],
    "seoTitle": "Design Primitives: Building Foundation Scales for Systems",
    "sources": [
      "Brad Frost, Atomic Design",
      "Nathan Curtis, Tokens in Design Systems"
    ]
  },
  {
    "id": "031",
    "name": "Component Architecture",
    "slug": "component-architecture",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Component Architecture is the structural engineering discipline of designing modular, encapsulated, accessible, and performant user interface code elements with standardized props, interfaces, and state boundaries.",
    "purpose": "Prevents brittle code repetition, eliminates leaky UI abstractions, and ensures predictable component composition across complex applications.",
    "keyConcepts": [
      "Encapsulation",
      "compositional props",
      "state decoupling",
      "API contracts."
    ],
    "howItWorks": "Developers isolate component concerns into headless logic hooks, semantic templates, and tokenized styling layers, enforcing strict TypeScript interfaces.",
    "relatedTerms": [
      "Component Libraries",
      "Headless UI Architecture",
      "Web Components",
      "Semantic HTML"
    ],
    "seoTitle": "UI Component Architecture: Scalable Component Engineering",
    "sources": [
      "Dan Abramov, Presentational and Container Components",
      "Addy Osmani, Learning JavaScript Design Patterns"
    ]
  },
  {
    "id": "032",
    "name": "Component Libraries",
    "slug": "component-libraries",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "A Component Library is a centralized, versioned repository of tested, production-ready frontend code components that implement a design system’s visual and interaction patterns.",
    "purpose": "Accelerates feature engineering velocity while ensuring systemic UI consistency, cross-browser support, and automated accessibility compliance across applications.",
    "keyConcepts": [
      "Centralized package",
      "version control",
      "automated test coverage",
      "visual documentation."
    ],
    "howItWorks": "Components are authored as independent packages, documented in interactive sandboxes, and published to private package managers.",
    "relatedTerms": [
      "Component Architecture",
      "Design System",
      "Headless UI Architecture",
      "DesignOps"
    ],
    "seoTitle": "Building Scalable Component Libraries: Best Practices Guide",
    "sources": [
      "Storybook.js Documentation",
      "Brad Frost, Atomic Design"
    ]
  },
  {
    "id": "033",
    "name": "Design System Governance",
    "slug": "design-system-governance",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "Design System Governance encompasses the organizational workflows, decision rights, deprecation policies, contribution pipelines, and review criteria that manage changes to a system over time.",
    "purpose": "Prevents design system decay, unvetted component fragmentation, and organizational gridlock by balancing centralized system stability with federated product team contributions.",
    "keyConcepts": [
      "Contribution models",
      "RFC processes",
      "deprecation lifecycles",
      "version contracts."
    ],
    "howItWorks": "Teams establish cross-functional review boards that evaluate component proposals against strict acceptance criteria, including automated test coverage and multi-brand parity.",
    "relatedTerms": [
      "DesignOps",
      "Design System",
      "Design System Versioning & SemVer",
      "Component Architecture"
    ],
    "seoTitle": "Design System Governance: Workflows, RFCs & Contribution Models",
    "sources": [
      "Nathan Curtis, Team Models for Design Systems",
      "Jina Anne, Governing Enterprise Systems"
    ]
  },
  {
    "id": "034",
    "name": "Design Engineering",
    "slug": "design-engineering",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Design Engineering is a specialized hybrid practice operating at the boundary of interaction design and frontend software engineering, building prototypes, design tooling, token pipelines, and UI runtimes.",
    "purpose": "Eliminates fidelity loss between design intent and production implementation, accelerating product innovation through rapid, code-level interaction prototyping.",
    "keyConcepts": [
      "Design-to-code pipelines",
      "high-fidelity code prototyping",
      "UI performance",
      "token toolchains."
    ],
    "howItWorks": "Design engineers construct custom plugins, maintain token build processes, build complex animations, and contribute directly to production component architectures.",
    "relatedTerms": [
      "Design-to-Code Workflow",
      "Design Tokens",
      "Component Architecture",
      "DesignOps"
    ],
    "seoTitle": "What is Design Engineering? Role, Skills, and Tooling",
    "sources": [
      "Maggie Appleton, The Ambient Medium: Design Engineering",
      "Brad Frost, The Design Engineer"
    ]
  },
  {
    "id": "035",
    "name": "Design-to-Code Workflow",
    "slug": "design-to-code-workflow",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "AI & Agentic Systems",
    "maturity": "Emerging",
    "definition": "The Design-to-Code Workflow is the automated continuous integration pipeline that parses design artifacts, extracts layout constraints and design tokens, and converts them into production-ready frontend code.",
    "purpose": "Eradicates manual, error-prone design handoffs, reducing developer translation time and eliminating visual regressions between canvas and browser.",
    "keyConcepts": [
      "Token synchronization",
      "AST transformations",
      "headless rendering",
      "automated PR generation."
    ],
    "howItWorks": "Changes in design tools trigger webhooks that export vector schemas into token parsers and AST generators, pushing automated code updates directly to Git repositories.",
    "relatedTerms": [
      "Design Tokens",
      "Style Dictionary",
      "Design Engineering",
      "Vibe Coding"
    ],
    "seoTitle": "Modern Design-to-Code: Automated Workflows & Toolchains",
    "sources": [
      "W3C DTCG Tools Pipeline",
      "Penpot Developer Integrations"
    ]
  },
  {
    "id": "036",
    "name": "Atomic Design",
    "slug": "atomic-design",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Atomic Design is a mental methodology for building user interface systems composed of five distinct, hierarchically nested stages: Atoms, Molecules, Organisms, Templates, and Pages.",
    "purpose": "Offers an intuitive mental framework for visualizing UI composition, promoting modular consistency and code reusability from basic HTML elements up to complete views.",
    "keyConcepts": [
      "Atoms",
      "molecules",
      "organisms",
      "templates",
      "structural composition."
    ],
    "howItWorks": "Designers craft elemental atoms (inputs, labels), combine them into functional molecules (search bars), nest them into organisms (headers), and assemble them into templates and concrete pages.",
    "relatedTerms": [
      "Component Architecture",
      "Design Primitives",
      "Component Libraries",
      "Design System"
    ],
    "seoTitle": "Atomic Design Methodology: Atoms to Pages Explained",
    "sources": [
      "Brad Frost, Atomic Design, Book Apart",
      "Dan Mall, Design That Scales"
    ]
  },
  {
    "id": "037",
    "name": "Figma Variables & Modes",
    "slug": "figma-variables-modes",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Proprietary / Framework-Specific",
    "definition": "Figma Variables & Modes is a native canvas data-binding architecture that stores reusable values (Colors, Numbers, Strings, Booleans) and enables instant contextual switching (e.g., Light/Dark themes, Spacing densities) across design frames.",
    "purpose": "Bridges design tool canvas states with production CSS variables and token aliasing structures, reducing artboard bloat across responsive and themed designs.",
    "keyConcepts": [
      "Variable types",
      "variable collections",
      "contextual modes",
      "token scoping."
    ],
    "howItWorks": "Designers assign variables to layer properties; when frames are switched to different modes, the canvas re-resolves all underlying variable values dynamically.",
    "relatedTerms": [
      "Semantic Tokens",
      "Design Tokens",
      "Design-to-Code Workflow",
      "Design Tokens Format Module (DTCG)"
    ],
    "seoTitle": "Figma Variables & Modes: Theming Architecture for Systems",
    "sources": [
      "Figma Schema Architecture Guides",
      "W3C DTCG Figma Plugin Guides"
    ]
  },
  {
    "id": "038",
    "name": "Semantic HTML",
    "slug": "semantic-html",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Semantic HTML is the foundational standard of using native markup elements according to their intrinsic linguistic and structural meaning (e.g., <main>, <nav>, <article>, <button>) rather than generic non-semantic containers (<div>, <span>).",
    "purpose": "Guarantees native digital accessibility, screen-reader navigation, machine comprehension, search engine indexing, and keyboard interoperability across web browsers.",
    "keyConcepts": [
      "Native semantics",
      "accessibility tree mapping",
      "document outline",
      "interactive defaults."
    ],
    "howItWorks": "Browsers parse semantic tags to construct the accessibility tree and establish default keyboard focus paths without requiring auxiliary JavaScript.",
    "relatedTerms": [
      "Accessibility and WCAG",
      "ARIA",
      "Web Components",
      "Structured Data for LLMs"
    ],
    "seoTitle": "Semantic HTML Guide: Accessibility, Architecture, and SEO",
    "sources": [
      "W3C HTML Specification",
      "WHATWG HTML Living Standard"
    ]
  },
  {
    "id": "039",
    "name": "Accessibility and WCAG",
    "slug": "accessibility-wcag",
    "alternateName": [
      "Web accessibility and WCAG"
    ],
    "category": "Design Systems & Engineering",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "Web accessibility means designing and building websites and tools that people with disabilities can use. The Web Content Accessibility Guidelines (WCAG), developed through the W3C Web Accessibility Initiative, provide testable requirements for making web content more accessible.",
    "purpose": "Eliminates barriers that prevent individuals with visual, auditory, motor, or cognitive disabilities from accessing digital products, while fulfilling legal compliance obligations.",
    "keyConcepts": [
      "POUR principles",
      "conformance levels (A",
      "AA",
      "AAA)",
      "contrast ratios",
      "non-text content."
    ],
    "howItWorks": "Teams implement specific technical criteria (e.g., WCAG 2.2 focus appearance, target sizes, dynamic contrast ratios), validating compliance through manual testing and automated audits.",
    "relatedTerms": [
      "Semantic HTML",
      "ARIA (Accessible Rich Internet Applications)",
      "Component Architecture",
      "Design System"
    ],
    "seoTitle": "Accessibility & WCAG 2.2 | Product Design Glossary",
    "seoDescription": "Understand WCAG 2.2, the POUR principles, A/AA/AAA levels, and practical checks for contrast, keyboard focus, target size, and accessible forms.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/accessibility-wcag.html",
    "sources": [
      "Introduction to Web Accessibility, W3C WAI (https://www.w3.org/WAI/fundamentals/accessibility-intro/)",
      "Accessibility Principles, W3C WAI (https://www.w3.org/WAI/fundamentals/accessibility-principles/)",
      "WCAG 2.2 Recommendation, W3C (https://www.w3.org/TR/WCAG22/)",
      "WCAG 2 Overview, W3C WAI (https://www.w3.org/WAI/standards-guidelines/wcag/)",
      "User Notification: Forms Tutorial, W3C WAI (https://www.w3.org/WAI/tutorials/forms/notifications/)",
      "Evaluating Web Accessibility, W3C WAI (https://www.w3.org/WAI/test-evaluate/)"
    ],
    "contentMarkdown": `# Accessibility and WCAG

Web accessibility means designing and building websites and tools that people with disabilities can use. The Web Content Accessibility Guidelines (WCAG), developed through the W3C Web Accessibility Initiative, provide testable requirements for making web content more accessible.

Accessibility addresses visual, auditory, motor, cognitive, and other access needs. WCAG provides a technical baseline; usability testing with people with disabilities helps teams understand barriers in real tasks.

## What are the four WCAG principles?

WCAG organizes its requirements under four principles, often abbreviated **POUR**:

| Principle | What it means in practice |
|---|---|
| Perceivable | Provide information people can perceive, such as text alternatives for meaningful images and captions for video. |
| Operable | Make controls usable with different input methods, including a keyboard. |
| Understandable | Use clear instructions, predictable behavior, and helpful error messages. |
| Robust | Expose content and controls so browsers and assistive technologies can interpret them. |

## What do A, AA, and AAA mean?

These are cumulative conformance levels. **A** covers Level A criteria; **AA** includes A and AA; **AAA** includes all three levels. A conformance claim records the version, level, scope, date, and technologies relied upon. It applies to full pages and complete processes, such as every step of checkout.

WCAG 2.2 is a W3C Recommendation. WCAG 3 remains a draft. WCAG conformance does not establish compliance with every applicable accessibility law.

## Which WCAG 2.2 checks matter in everyday design?

These examples are a starting point, not a complete audit:

- **Text contrast, 1.4.3 (AA):** Most text needs a contrast ratio of at least 4.5:1 against its background. Large-scale text needs 3:1: at least 18 pt, or 14 pt bold. The criterion includes exceptions, such as logos and inactive controls. [Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- **Target size, 2.5.8 (AA):** Pointer targets must be at least 24 × 24 CSS pixels unless an exception applies. These include sufficient spacing and inline links. [Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- **Focus visibility:** Keyboard focus must be visible under 2.4.7 (AA). Under 2.4.11 (AA), a focused component must not be entirely hidden by author-created content, such as a sticky banner. The separate Focus Appearance criterion, 2.4.13, is AAA. [Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)

## An accessible form example

Consider a quote-request form with an email field. A persistent label is programmatically associated with the field. Keyboard users can reach it and see focus. If the address is incomplete, the form displays “Enter an email address in the format name@example.com” and programmatically associates that message with the field.

The error message explains the problem without relying on color alone. Previously entered values remain available, and the submission confirmation is perceivable with assistive technology. Test the full submission flow, including errors and confirmation.

## How should teams test accessibility?

Combine automated checks with manual keyboard, zoom, and screen-reader testing. Include people with disabilities in usability research, and evaluate complete tasks as well as individual components. Automated tools can identify some failures; a clean scan does not prove WCAG conformance.

## Related terms

- [Semantic HTML](/glossary/semantic-html.html)
- [ARIA (Accessible Rich Internet Applications)](/glossary/aria-accessible-rich-internet-applications.html)
- [Component Architecture](/glossary/component-architecture.html)
- [Design System](/glossary/design-system.html)

## Sources

- [Introduction to Web Accessibility, W3C WAI](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [Accessibility Principles, W3C WAI](https://www.w3.org/WAI/fundamentals/accessibility-principles/)
- [WCAG 2.2 Recommendation, W3C](https://www.w3.org/TR/WCAG22/)
- [WCAG 2 Overview, W3C WAI](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [User Notification: Forms Tutorial, W3C WAI](https://www.w3.org/WAI/tutorials/forms/notifications/)
- [Evaluating Web Accessibility, W3C WAI](https://www.w3.org/WAI/test-evaluate/)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/accessibility-wcag.html#webpage",
                "url": "https://lexkonovalov.com/glossary/accessibility-wcag.html",
                "name": "Accessibility & WCAG 2.2 | Product Design Glossary",
                "description": "Understand WCAG 2.2, the POUR principles, A/AA/AAA levels, and practical checks for contrast, keyboard focus, target size, and accessible forms.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/accessibility-wcag.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/accessibility-wcag.html#breadcrumbs"
                },
                "citation": [
                      "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
                      "https://www.w3.org/WAI/fundamentals/accessibility-principles/",
                      "https://www.w3.org/TR/WCAG22/",
                      "https://www.w3.org/WAI/standards-guidelines/wcag/",
                      "https://www.w3.org/WAI/tutorials/forms/notifications/",
                      "https://www.w3.org/WAI/test-evaluate/",
                      "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
                      "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html",
                      "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/accessibility-wcag.html#term",
                "name": "Accessibility and WCAG",
                "alternateName": [
                      "Web accessibility and WCAG"
                ],
                "termCode": "accessibility-wcag",
                "description": "Web accessibility means designing and building websites and tools that people with disabilities can use. The Web Content Accessibility Guidelines (WCAG), developed through the W3C Web Accessibility Initiative, provide testable requirements for making web content more accessible.",
                "url": "https://lexkonovalov.com/glossary/accessibility-wcag.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/accessibility-wcag.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/accessibility-wcag.html#breadcrumbs",
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
                            "name": "Accessibility and WCAG",
                            "item": "https://lexkonovalov.com/glossary/accessibility-wcag.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "040",
    "name": "ARIA (Accessible Rich Internet Applications)",
    "slug": "aria-accessible-rich-internet-applications",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "WAI-ARIA (Accessible Rich Internet Applications) is a W3C specification providing semantic roles, states, and properties that extend HTML to communicate interactive component behaviors to assistive technologies.",
    "purpose": "Bridges accessibility gaps in complex, dynamic, custom user interface widgets (e.g., tree grids, custom modals, tabs) where native HTML elements do not exist.",
    "keyConcepts": [
      "Roles",
      "states",
      "properties",
      "live regions",
      "accessibility tree binding."
    ],
    "howItWorks": "Developers apply ARIA attributes (e.g., role=\"dialog\", aria-expanded=\"false\") to DOM elements, programmatically mutating their state during runtime user interactions.",
    "relatedTerms": [
      "Semantic HTML",
      "Accessibility and WCAG",
      "Component Architecture",
      "Headless UI Architecture"
    ],
    "seoTitle": "WAI-ARIA Basics: Roles, States, and Attributes for Web UX",
    "sources": [
      "W3C WAI, Accessible Rich Internet Applications (WAI-ARIA) 1.2 Specification",
      "MDN Web Docs, ARIA Authoring Practices Guide (APG)"
    ]
  },
  {
    "id": "041",
    "name": "Web Components",
    "slug": "web-components",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Web Components are a suite of native browser W3C standards—comprising Custom Elements, Shadow DOM, and HTML Templates—that allow developers to create modular, framework-agnostic UI widgets.",
    "purpose": "Enables the construction of enterprise design system libraries that function seamlessly across any JavaScript frontend framework (React, Vue, Angular, or vanilla JS) without vendor lock-in.",
    "keyConcepts": [
      "Custom elements",
      "Shadow DOM encapsulation",
      "HTML templates",
      "framework agnosticism."
    ],
    "howItWorks": "Developers define custom HTML tags via the customElements.define browser API, encapsulating internal CSS and DOM trees within an isolated Shadow Root.",
    "relatedTerms": [
      "Component Architecture",
      "Design System",
      "Semantic HTML",
      "Headless UI Architecture"
    ],
    "seoTitle": "Web Components in Enterprise Design Systems: Complete Guide",
    "sources": [
      "W3C Custom Elements Specification",
      "W3C Shadow DOM Specification",
      "MDN Web Components"
    ]
  },
  {
    "id": "042",
    "name": "DesignOps",
    "slug": "designops",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "DesignOps (Design Operations) is the management framework and operational infrastructure that optimizes design team workflows, tooling pipelines, governance, budgets, and cross-functional collaboration.",
    "purpose": "Scales design craft, reduces organizational friction, and measures design value within enterprise environments, freeing product designers to focus on core UX challenges.",
    "keyConcepts": [
      "Workflow orchestration",
      "tooling optimization",
      "team capability matrices",
      "design telemetry."
    ],
    "howItWorks": "DesignOps leads establish structured hiring, tooling procurement, cross-functional rituals, automated QA handoffs, and performance metrics across product design organizations.",
    "relatedTerms": [
      "Design System Governance",
      "Design Engineering",
      "Continuous Experimentation"
    ],
    "seoTitle": "What is DesignOps? Scaling Design Workflows and Infrastructure",
    "sources": [
      "Dave Malouf et al., DesignOps Handbook, InVision",
      "Meredith Black, DesignOps 101, Nielsen Norman Group"
    ]
  },
  {
    "id": "043",
    "name": "Style Dictionary",
    "slug": "style-dictionary",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Style Dictionary is an open-source, automated build system that parses design tokens defined in JSON/YAML and transforms them into platform-specific asset formats for Web, iOS, Android, and Flutter.",
    "purpose": "Eliminates manual translation of design values across tech stacks, ensuring cross-platform token synchronization from a single upstream codebase.",
    "keyConcepts": [
      "Transform groups",
      "formatters",
      "build actions",
      "platform targets."
    ],
    "howItWorks": "Configured pipelines ingest raw design token files, execute type-specific transforms (e.g., converting hex colors to Swift UIColor), and output ready-to-consume build artifacts.",
    "relatedTerms": [
      "Design Tokens",
      "Design Tokens Format Module (DTCG)",
      "Design Engineering",
      "Design-to-Code Workflow"
    ],
    "seoTitle": "Style Dictionary: Multi-Platform Design Token Compilation",
    "sources": [
      "Amazon Open Source, Style Dictionary Documentation (https://amzn.github.io/style-dictionary)",
      "W3C DTCG Tooling Guides"
    ]
  },
  {
    "id": "044",
    "name": "Token Resolver Engine",
    "slug": "token-resolver-engine",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Emerging",
    "definition": "A Token Resolver Engine is an algorithmic compilation tool that traverses recursive token alias graphs, resolves nested dependencies, evaluates conditional expressions, and outputs normalized concrete values.",
    "purpose": "Manages multi-tier token hierarchies and complex multi-brand theming layers without cyclic dependency crashes or run-time calculation overhead.",
    "keyConcepts": [
      "Alias resolution",
      "dependency graphing",
      "cyclic reference detection",
      "AST evaluation."
    ],
    "howItWorks": "Evaluates token tree nodes sequentially, replacing alias references ({color.brand.primary}) with resolved values from parent collections while throwing errors on circular references.",
    "relatedTerms": [
      "Design Tokens",
      "Design Tokens Format Module (DTCG)",
      "Style Dictionary",
      "Semantic Tokens"
    ],
    "seoTitle": "Token Resolver Engines: Resolving Complex Design Token Trees",
    "sources": [
      "W3C DTCG Resolver Module Specification",
      "Styleframe DTCG Engine"
    ]
  },
  {
    "id": "045",
    "name": "Headless UI Architecture",
    "slug": "headless-ui-architecture",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Headless UI Architecture is a frontend development paradigm that completely separates a component’s logic, accessibility attributes, state machines, and keyboard interactions from its visual presentation styles.",
    "purpose": "Maximizes design freedom and UI reusability by delivering battle-tested accessible behavior without opinionated CSS, preventing styling conflicts in component libraries.",
    "keyConcepts": [
      "Unstyled components",
      "logic hooks",
      "state machines",
      "full styling decoupling."
    ],
    "howItWorks": "Components provide accessibility attributes and event listeners via hooks or headless components, leaving style implementation to modern utility CSS or token engines.",
    "relatedTerms": [
      "Component Architecture",
      "Accessibility and WCAG",
      "Semantic HTML",
      "ARIA"
    ],
    "seoTitle": "Headless UI Architecture: Logic-First Component Engineering",
    "sources": [
      "Radix UI Documentation",
      "Floating UI Specifications",
      "Kent C. Dodds, Inversion of Control"
    ]
  },
  {
    "id": "046",
    "name": "Composite Design Token",
    "slug": "composite-design-token",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "A Composite Design Token is an advanced token type whose  is composed of an object containing multiple coordinated properties that define a single cohesive visual concept (e.g., Typography, Shadows, Borders).",
    "purpose": "Encapsulates interdependent design decisions into cohesive, reusable design units, preventing designers from applying mismatched font sizes, line heights, or blur radii.",
    "keyConcepts": [
      "Multi-property values",
      "typography bundles",
      "elevation matrices",
      "structural groupings."
    ],
    "howItWorks": "Defined in DTCG JSON schemas as a single node containing required child keys (e.g., fontFamily, fontSize, lineHeight), resolved together during platform transforms.",
    "relatedTerms": [
      "Design Tokens",
      "Design Tokens Format Module (DTCG)",
      "Semantic Tokens",
      "Design Primitives"
    ],
    "seoTitle": "Composite Design Tokens: Managing Typography, Shadows, and Borders",
    "sources": [
      "W3C Design Tokens Community Group Format Specification 2025.1013",
      "designtokens.org"
    ]
  },
  {
    "id": "047",
    "name": "Fluid Typography & Spacing System",
    "slug": "fluid-typography-spacing-system",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "A Fluid Typography & Spacing System uses mathematical clamp functions (e.g., CSS clamp()) to smoothly scale typography and layout spacing proportionally between defined viewport bounds without abrupt breakpoint jumps.",
    "purpose": "Eliminates jarring breakpoint transitions, provides seamless readability across arbitrary screen sizes, and reduces the complexity of managing dozens of responsive media queries.",
    "keyConcepts": [
      "CSS clamp()",
      "viewport-based scaling",
      "ideal rate of change",
      "minimum/maximum bounds."
    ],
    "howItWorks": "Uses linear interpolation equations (size = min + slope * (viewport - min_width)) bounded by clamp limits, dynamically scaling values directly in browser engines.",
    "relatedTerms": [
      "Design Primitives",
      "Component Architecture",
      "Design Tokens"
    ],
    "seoTitle": "Fluid Typography & Spacing Systems: Modern CSS Clamp Architecture",
    "sources": [
      "Utopia.fyi Responsive Systems",
      "Tim Brown, Flexible Typesetting, A Book Apart"
    ]
  },
  {
    "id": "048",
    "name": "Component Telemetry",
    "slug": "component-telemetry",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Emerging",
    "definition": "Component Telemetry is the systematic instrumenting of design system code components to track automated runtime metrics, including production usage counts, error boundaries, prop combinations, and user interaction patterns.",
    "purpose": "Replaces anecdotal design system feedback with hard quantitative data, revealing which components are adopted, misused, or ripe for deprecation across applications.",
    "keyConcepts": [
      "Runtime logging",
      "adoption tracking",
      "prop monitoring",
      "deprecation indicators."
    ],
    "howItWorks": "Lightweight analytics triggers embedded directly in component source files dispatch anonymized telemetry payloads to monitoring dashboards when components mount or error.",
    "relatedTerms": [
      "DesignOps",
      "Design System Governance",
      "Product Telemetry & Analytics",
      "Continuous Experimentation"
    ],
    "seoTitle": "Component Telemetry: Tracking Design System Adoption in Production",
    "sources": [
      "Cristiano Rastelli, Measuring Design System Adoption",
      "Omlet.dev Component Analytics"
    ]
  },
  {
    "id": "049",
    "name": "Visual Regression Testing",
    "slug": "visual-regression-testing",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Visual Regression Testing is an automated quality assurance methodology that captures pixel screenshots of UI components across code branches and compares them against baseline snapshots to catch unintended visual changes.",
    "purpose": "Prevents accidental CSS regressions, layout breaks, and cross-browser visual defects before code merges into production design systems.",
    "keyConcepts": [
      "Pixel diffing",
      "baseline snapshots",
      "threshold configurations",
      "headless browser automation."
    ],
    "howItWorks": "Automated CI pipelines deploy headless browsers, render components across viewports, take screenshots, and calculate differential image deltas against master baselines.",
    "relatedTerms": [
      "Component Architecture",
      "Design Engineering",
      "Design-to-Code Workflow"
    ],
    "seoTitle": "Visual Regression Testing: Automating UI Design System QA",
    "sources": [
      "Playwright Visual Comparisons (https://playwright.dev)",
      "Percy.io by BrowserStack",
      "Chromatic by Storybook"
    ]
  },
  {
    "id": "050",
    "name": "Design System Versioning & SemVer",
    "slug": "design-system-versioning-semver",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "Design System Versioning is the application of Semantic Versioning (SemVer: MAJOR.MINOR.PATCH) to both component code packages and design libraries to clearly communicate the structural impact of updates.",
    "purpose": "Prevents breaking changes from corrupting consumer codebases, providing product teams with clear upgrade paths and risk assessments for design system dependencies.",
    "keyConcepts": [
      "Breaking changes (MAJOR)",
      "backward-compatible enhancements (MINOR)",
      "bug fixes (PATCH)",
      "deprecation windows."
    ],
    "howItWorks": "Token or prop removals trigger MAJOR version increments; new components trigger MINOR updates; token color value tweaks trigger PATCH releases.",
    "relatedTerms": [
      "Design System Governance",
      "Component Architecture",
      "DesignOps"
    ],
    "seoTitle": "Semantic Versioning for Design Systems: Managing Breaking Changes",
    "sources": [
      "Tom Preston-Werner, Semantic Versioning 2.0.0",
      "Nathan Curtis, Versioning Design Systems. Category 03 — AI & Agentic Systems The emergence of Large Language Models (LLMs) and autonomous agents has shifted product design from deterministic user interface flows to probabilistic, intent-driven systems. Designers are no longer merely sculpting static visual containers",
      "they are building Agent Harnesses, curating domain contexts, and architecting real-time generative interfaces. Through standard protocols like the Model Context Protocol (MCP) and agent capabilities like Agent Skills, systems negotiate contextual resources, execute tool calls, and generate dynamic UI components during active user inference"
    ]
  },
  {
    "id": "051",
    "name": "Agentic AI",
    "slug": "agentic-ai",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "Agentic AI refers to autonomous artificial intelligence systems equipped with reasoning loops, memory systems, and tool access that pursue complex, multi-step goals with minimal real-time human intervention.",
    "purpose": "Elevates software from passive transactional execution to proactive, goal-oriented problem solving, autonomously executing intricate enterprise workflows.",
    "keyConcepts": [
      "Autonomous planning",
      "environmental tool invocation",
      "reflection loops",
      "iterative state tracking."
    ],
    "howItWorks": "The model decomposes broad user objectives into discrete sub-goals, evaluates intermediate outcomes, interacts with APIs, and iteratively refines plans until completion.",
    "relatedTerms": [
      "AI Agent",
      "Agent Harness",
      "Tool Calling (Function Calling)",
      "Autonomous Workflow Orchestration"
    ],
    "seoTitle": "What is Agentic AI? Autonomous Agents & Cognitive Architecture",
    "sources": [
      "Andrew Ng, Agentic Design Patterns",
      "Thoughtworks, Understanding AI Agents"
    ]
  },
  {
    "id": "052",
    "name": "AI Agent",
    "slug": "ai-agent",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "An AI Agent is an orchestrated computing system pairing a foundational reasoning model (LLM) with an external runtime harness that provides tools, context, long-term memory, and environment execution privileges.",
    "purpose": "Enables probabilistic reasoning models to execute deterministic operations, read live software environments, and alter real-world system states.",
    "keyConcepts": [
      "Reasoning engine (LLM)",
      "external harness",
      "tool interfaces",
      "sensory inputs."
    ],
    "howItWorks": "Formulated systematically as AI Agent ≈ Model + Harness. The model acts as the reasoning brain, while the harness provides tools, data, and feedback loops.",
    "relatedTerms": [
      "Agentic AI",
      "Agent Harness",
      "Model Context Protocol (MCP)",
      "Tool Calling (Function Calling)"
    ],
    "seoTitle": "AI Agents Explained: Architecture, Models, and Execution Harnesses",
    "sources": [
      "Birgitta Böckeler, AI Agent Harness, Thoughtworks",
      "Harrison Chase, LangChain Agent Architecture"
    ]
  },
  {
    "id": "053",
    "name": "Agent Harness",
    "slug": "agent-harness",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Emerging",
    "definition": "An Agent Harness is the comprehensive software runtime environment surrounding an AI model that supplies the context, tools, constraints, persistence layers, and feedback loops required to safely execute work.",
    "purpose": "Bridges raw model reasoning with real-world infrastructure, preventing stochastic hallucination by enforcing testing, permission bounds, and error recovery.",
    "keyConcepts": [
      "Context provisioning",
      "sandbox execution",
      "error-feedback loops",
      "security guardrails."
    ],
    "howItWorks": "Wraps the LLM in an execution loop: it injects relevant repository state, intercepts function calls, runs code in sandboxes, and feeds compiler errors back to the model.",
    "relatedTerms": [
      "Design Harness",
      "AI Agent",
      "Context Engineering",
      "Tool Calling (Function Calling)"
    ],
    "seoTitle": "The AI Agent Harness: Architecture, Tooling, and Sandboxing",
    "sources": [
      "Birgitta Böckeler, AI Agent Harness, Thoughtworks (October 2026)",
      "Anthropic Engineering Guides"
    ]
  },
  {
    "id": "054",
    "name": "Design Harness",
    "slug": "design-harness",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Coined / Interpretive",
    "definition": "A Design Harness is the structural environment of design systems, semantic tokens, DESIGN.md guidelines, and evaluation criteria that governs AI coding agents to prevent aesthetic and architectural drift.",
    "purpose": "Prevents AI-generated code from violating brand rules, introducing design debt, or fabricating non-existent UI components at high velocity.",
    "keyConcepts": [
      "Machine-readable design rules",
      "DESIGN.md",
      "blind eval gates",
      "drift detection."
    ],
    "howItWorks": "Injects machine-readable design tokens and component contracts into agent context while running automated visual/code linters to validate UI output before merge.",
    "relatedTerms": [
      "Agent Harness",
      "Design System",
      "Evaluation Harness (AI Evals)"
    ],
    "seoTitle": "What is a Design Harness? Enforcing UI Systems in Agentic Code",
    "sources": [
      "Samin, Design Harness: Governing Output at AI Velocity, Medium",
      "OpenDesign Labs, Design Harness Beta (September 2026)",
      "UX Harness"
    ]
  },
  {
    "id": "055",
    "name": "Model Context Protocol (MCP)",
    "slug": "model-context-protocol-mcp",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Emerging",
    "definition": "The Model Context Protocol (MCP) is an open standard created by Anthropic that standardizes how AI applications securely connect, share context, and invoke external tools, resources, and prompts across systems.",
    "purpose": "Replaces bespoke, fragmented point-to-point API connectors with a universal protocol, analogous to the Language Server Protocol (LSP) for developer tooling.",
    "keyConcepts": [
      "Host-Client-Server architecture",
      "Tools",
      "Resources",
      "Prompts",
      "JSON-RPC 2.022."
    ],
    "howItWorks": "An MCP Host spawns MCP Clients that connect to isolated MCP Servers over stdio or Streamable HTTP, discovering available tools and data via JSON-RPC.",
    "relatedTerms": [
      "Tool Calling (Function Calling)",
      "Context Engineering",
      "Agent Skills (SKILL.md)",
      "AI Agent"
    ],
    "seoTitle": "Model Context Protocol (MCP): The Universal Standard for AI Context",
    "sources": [
      "Anthropic, Introducing the Model Context Protocol",
      "ModelContextProtocol.io Specification"
    ]
  },
  {
    "id": "056",
    "name": "Agent Skills (SKILL.md)",
    "slug": "agent-skills-skill-md",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Emerging",
    "definition": "Agent Skills are structured file-system directories containing a SKILL.md manifest, procedural instructions, execution scripts, and resource references that supply agents with specialized capabilities on demand.",
    "purpose": "Scales agent capabilities modularly without bloating model prompt windows, loading context dynamically only when specific tasks are triggered.",
    "keyConcepts": [
      "File-system-first architecture",
      "SKILL.md manifest",
      "unbounded context",
      "modular execution."
    ],
    "howItWorks": "Agents scan skill catalogs; when a task matches a skill's metadata, the agent loads procedural files and executes localized helper scripts.",
    "relatedTerms": [
      "Model Context Protocol (MCP)",
      "Agent Harness",
      "Context Engineering",
      "Tool Calling (Function Calling)"
    ],
    "seoTitle": "Agent Skills & SKILL.md: Building Portable Capabilities for AI",
    "sources": [
      "Anthropic, Equipping Agents for the Real World with Agent Skills",
      "Agent Skills Open Specification"
    ]
  },
  {
    "id": "057",
    "name": "Context Engineering",
    "slug": "context-engineering",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Emerging",
    "definition": "Context Engineering is the systematic software practice of sourcing, filtering, structuring, and sequencing dynamic information payloads supplied to an LLM's context window for a given task.",
    "purpose": "Solves the \"needle in a haystack\" problem and context window bloat, maximizing model reasoning fidelity while minimizing inference latency and token costs.",
    "keyConcepts": [
      "Information pruning",
      "dynamic context assembly",
      "token budgeting",
      "prompt caching."
    ],
    "howItWorks": "Systems pull data from databases, active states, and RAG pipelines, compressing and ranking the payload into structured formats before dispatching the model prompt.",
    "relatedTerms": [
      "Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)",
      "Structured Data for LLMs",
      "Agent Harness"
    ],
    "seoTitle": "Context Engineering: Optimizing Information Flow in LLMs & Agents",
    "sources": [
      "Birgitta Böckeler, AI Agent Harness, Thoughtworks",
      "DomainDrivenUX Context Architecture"
    ]
  },
  {
    "id": "058",
    "name": "Prompt Engineering",
    "slug": "prompt-engineering",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Prompt Engineering is the craft of designing, formatting, and refining natural language inputs, system directives, and few-shot examples to steer LLMs toward desired output behaviors.",
    "purpose": "Calibrates stochastic model outputs to achieve syntactic correctness, tone compliance, and structured schemas without fine-tuning underlying model weights.",
    "keyConcepts": [
      "System prompts",
      "few-shot demonstration",
      "chain-of-thought",
      "output formatting constraints."
    ],
    "howItWorks": "Authors construct instructions specifying persona, context, step-by-step reasoning steps, and strict response schemas (such as JSON).",
    "relatedTerms": [
      "Context Engineering",
      "System Prompts & Guardrails",
      "Generative UI",
      "Vibe Coding"
    ],
    "seoTitle": "What is Prompt Engineering? Modern Techniques and Best Practices",
    "sources": [
      "Lilian Weng, Prompt Engineering Guides, OpenAI Cookbook",
      "Anthropic Interactive Prompting Guide"
    ]
  },
  {
    "id": "059",
    "name": "Retrieval-Augmented Generation (RAG)",
    "slug": "retrieval-augmented-generation-rag",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Retrieval-Augmented Generation (RAG) is an architectural pattern that retrieves relevant factual knowledge from external vectorized databases and injects it into an LLM's prompt context prior to response synthesis.",
    "purpose": "Prevents factual hallucinations and delivers up-to-date domain expertise without the massive computational expense of continuous model retraining.",
    "keyConcepts": [
      "Vector embeddings",
      "semantic similarity search",
      "chunking strategies",
      "dense retrieval."
    ],
    "howItWorks": "User queries are embedded into vector space, matched against document databases via cosine similarity, and top chunks are prepended to the prompt context.",
    "relatedTerms": [
      "Context Engineering",
      "Knowledge Graphs (AI Context)",
      "Structured Data for LLMs",
      "AI Agent"
    ],
    "seoTitle": "What is RAG? Retrieval-Augmented Generation Architecture",
    "sources": [
      "Patrick Lewis et al., Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks, Meta AI / NeurIPS",
      "Pinecone System Architecture"
    ]
  },
  {
    "id": "060",
    "name": "Tool Calling (Function Calling)",
    "slug": "tool-calling-function-calling",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "Tool Calling (or Function Calling) is an API capability where an LLM determines that an external action is needed, outputting a structured JSON object specifying function names and arguments rather than plain text.",
    "purpose": "Empowers probabilistic text models to safely invoke external software functions, query relational databases, and drive computational side effects.",
    "keyConcepts": [
      "Function signatures",
      "JSON Schema definitions",
      "programmatic execution",
      "argument parsing."
    ],
    "howItWorks": "The host application passes available tool schemas to the model; the model evaluates user intent, returns argument JSON, and pauses until the host returns execution results.",
    "relatedTerms": [
      "Model Context Protocol (MCP)",
      "Generative UI",
      "Agent Harness",
      "Agentic AI"
    ],
    "seoTitle": "Tool Calling Explained: How LLMs Invoke Code and APIs",
    "sources": [
      "OpenAI Function Calling Documentation",
      "Anthropic Tool Use Specification",
      "Vercel AI SDK"
    ]
  },
  {
    "id": "061",
    "name": "Human-in-the-Loop (HITL)",
    "slug": "human-in-the-loop-hitl",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "Human-in-the-Loop (HITL) is a governance and interaction design framework requiring explicit human verification, authorization, or correction at designated risk thresholds within automated agent workflows.",
    "purpose": "Balances the execution velocity of autonomous agents with human accountability, safety, and legal compliance in mission-critical applications.",
    "keyConcepts": [
      "Decision gates",
      "escalation triggers",
      "approval flows",
      "trust calibration."
    ],
    "howItWorks": "The agent pauses when encountering high-risk actions (e.g., database writes, financial transfers), rendering an approval UI for human sign-off before proceeding.",
    "relatedTerms": [
      "Agentic UX",
      "Agent Harness",
      "Operational UX",
      "Design System Governance"
    ],
    "seoTitle": "Human-in-the-Loop (HITL) Architecture: Designing Safe AI Workflows",
    "sources": [
      "Defense Innovation Board, AI Ethics Principles",
      "UX Product Design Harness Contract"
    ]
  },
  {
    "id": "062",
    "name": "Generative UI",
    "slug": "generative-ui",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Emerging",
    "definition": "Generative UI is an interface architecture where an AI system dynamically streams, assembles, and renders interactive, typed frontend UI components inline during conversation based on runtime user intent.",
    "purpose": "Moves conversational AI beyond static text and markdown, providing tailored visual affordances (e.g., flight booking cards, charts, interactive forms) directly inside conversation streams.",
    "keyConcepts": [
      "Dynamic component hydration",
      "streamable React Server Components",
      "tool-driven UI rendering."
    ],
    "howItWorks": "Tool calls made by the model map to registered design system components, which are streamed and mounted into the DOM using modern libraries.",
    "relatedTerms": [
      "AI-native Design",
      "Tool Calling (Function Calling)",
      "Component Architecture",
      "Model Context Protocol (MCP)"
    ],
    "seoTitle": "Generative UI: Dynamic Component Streaming with AI SDK",
    "sources": [
      "Vercel, AI SDK 3.0: Generative UI (https://vercel.com/blog/ai-sdk-3-generative-ui)",
      "Ultralytics, Generative UI Architecture"
    ]
  },
  {
    "id": "063",
    "name": "AI-native Design",
    "slug": "ai-native-design",
    "alternateName": [
      "AI-native product design"
    ],
    "category": "AI & Agentic Systems",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Coined / Interpretive",
    "definition": "AI-native design is an approach to product design in which AI capabilities are central to the product’s value and core workflows. Designers shape how people provide context, evaluate outputs, direct actions, and recover when the system makes mistakes.",
    "purpose": "Creates novel human-computer interaction paradigms that leverage autonomy, context awareness, and dynamic interfaces to solve previously intractable workflow challenges.",
    "keyConcepts": [
      "Probabilistic interactions",
      "ambient context",
      "variable UI layouts",
      "intent over navigation."
    ],
    "howItWorks": "Designers construct experiences where user intent replaces rigid navigational trees, pairing dynamic generative canvases with system constraints and telemetry.",
    "relatedTerms": [
      "Generative UI",
      "Agentic UX",
      "Design Harness",
      "Operational UX"
    ],
    "seoTitle": "AI-native Design: Meaning & Example | Product Design Glossary",
    "seoDescription": "Understand AI-native product design with a support-workflow example: define AI’s role, give users control, handle errors, and measure useful outcomes.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/ai-native-design.html",
    "sources": [
      "User Needs + Defining Success, Google People + AI Guidebook (https://pair.withgoogle.com/guidebook-v2/chapter/user-needs/)",
      "Mental Models, Google People + AI Guidebook (https://pair.withgoogle.com/guidebook-v2/chapter/mental-models/)",
      "Guidelines for Human-AI Interaction, Microsoft HAX Design Library (https://www.microsoft.com/en-us/haxtoolkit/library/)",
      "Errors + Graceful Failure, Google People + AI Guidebook (https://pair.withgoogle.com/guidebook-v2/chapter/errors-failing/)"
    ],
    "contentMarkdown": `# AI-native Design

AI-native design is an approach to product design in which AI capabilities are central to the product’s value and core workflows. Designers shape how people provide context, evaluate outputs, direct actions, and recover when the system makes mistakes.

The term is evolving. This glossary uses it as a working definition, not a formal methodology. AI may generate, classify, recommend, or predict; the appropriate interaction depends on the task.

## What makes a product AI-native?

A useful design question is: **How would the core workflow change if the AI capability were removed?** If the product’s main value depends on interpreting information, generating useful output, or adapting assistance, AI is central to the design.

Using AI to create wireframes or write code describes the designer’s process. AI-native describes the product experience. A chatbot, autonomous agent, or dynamically generated interface is one possible interaction pattern, not a requirement.

## An AI-native design example: support triage

Imagine a support workspace whose core workflow turns incoming messages into suggested categories, relevant account context, and draft replies. The following example is illustrative.

For “I paid yesterday, but my account is still locked,” the system proposes a billing category and a reply based on available account records and help content.

| Design decision | Example behavior |
|---|---|
| Context | Show which message, account record, and help article informed the suggestion. |
| Review | Let the agent inspect sources, change the category, and edit the draft. |
| Control | Require the agent to approve sending the reply; account changes follow separate permissions. |
| Recovery | If payment status is unavailable, avoid claiming payment is confirmed; show the limitation and offer a manual lookup. |

A polished draft can still contain a mistake. Source links help the agent verify claims; they do not guarantee that the response is correct. The design should make checking and correcting the output practical within the actual workload.

## What should designers define?

1. **The user outcome.** Identify the problem AI is suited to solve and compare the proposed workflow with the current way of doing the task.
2. **Capabilities and limits.** Explain what the system can do, what information it can access, and where its output needs review.
3. **Control and consequences.** Specify what AI may suggest or execute, when approval is needed, and what users can correct, dismiss, or undo.
4. **Failure behavior.** Design for missing context, incorrect output, unavailable services, and a usable manual path.
5. **Evaluation.** Test representative tasks, including difficult cases, and examine both output quality and the effort needed to review it. Repeat these checks when models, prompts, or source data change.

Google’s People + AI Guidebook and Microsoft’s HAX guidelines provide practical guidance for these interaction decisions.

## How do you know it helps?

For the support example, measure time to a correct resolution, incorrect replies, and the effort agents spend checking drafts. Draft acceptance alone cannot tell you whether the replies are correct. Compare results with the existing workflow and investigate where users need to intervene.

## Related terms

- [Generative UI](/glossary/generative-ui.html)
- [Agentic UX](/glossary/agentic-ux.html)
- [Design Harness](/glossary/design-harness.html)
- [Operational UX](/glossary/operational-ux.html)

## Sources

- [User Needs + Defining Success, Google People + AI Guidebook](https://pair.withgoogle.com/guidebook-v2/chapter/user-needs/)
- [Mental Models, Google People + AI Guidebook](https://pair.withgoogle.com/guidebook-v2/chapter/mental-models/)
- [Guidelines for Human-AI Interaction, Microsoft HAX Design Library](https://www.microsoft.com/en-us/haxtoolkit/library/)
- [Errors + Graceful Failure, Google People + AI Guidebook](https://pair.withgoogle.com/guidebook-v2/chapter/errors-failing/)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/ai-native-design.html#webpage",
                "url": "https://lexkonovalov.com/glossary/ai-native-design.html",
                "name": "AI-native Design: Meaning & Example | Product Design Glossary",
                "description": "Understand AI-native product design with a support-workflow example: define AI’s role, give users control, handle errors, and measure useful outcomes.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/ai-native-design.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/ai-native-design.html#breadcrumbs"
                },
                "citation": [
                      "https://pair.withgoogle.com/guidebook-v2/chapter/user-needs/",
                      "https://pair.withgoogle.com/guidebook-v2/chapter/mental-models/",
                      "https://www.microsoft.com/en-us/haxtoolkit/library/",
                      "https://pair.withgoogle.com/guidebook-v2/chapter/errors-failing/"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/ai-native-design.html#term",
                "name": "AI-native Design",
                "alternateName": [
                      "AI-native product design"
                ],
                "termCode": "ai-native-design",
                "description": "AI-native design is an approach to product design in which AI capabilities are central to the product’s value and core workflows. Designers shape how people provide context, evaluate outputs, direct actions, and recover when the system makes mistakes.",
                "url": "https://lexkonovalov.com/glossary/ai-native-design.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/ai-native-design.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/ai-native-design.html#breadcrumbs",
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
                            "name": "AI-native Design",
                            "item": "https://lexkonovalov.com/glossary/ai-native-design.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "064",
    "name": "Vibe Coding",
    "slug": "vibe-coding",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Coined / Interpretive",
    "definition": "Vibe Coding is a software development workflow where a human orchestrates code generation and application construction entirely via natural language prompts, selectively reviewing and testing running software without reading raw syntax.",
    "purpose": "Drastically lowers barriers to software creation, enabling rapid prototyping and concept iteration at high speed.",
    "keyConcepts": [
      "Material disengagement",
      "prompt-driven execution",
      "iterative goal satisfaction",
      "automated debugging loops."
    ],
    "howItWorks": "The user instructs an agent, observes the running application preview, and prompts iterative refinements while the agent writes and fixes code autonomously.",
    "relatedTerms": [
      "Design Engineering",
      "Design-to-Code Workflow",
      "Agent Harness",
      "AI Agent"
    ],
    "seoTitle": "What is Vibe Coding? Origins, Karpathy Definition, and Limits",
    "sources": [
      "Andrej Karpathy, Vibe Coding Announcement (February 2025)",
      "ArXiv Research, Material Disengagement in AI Programming"
    ]
  },
  {
    "id": "065",
    "name": "Structured Data for LLMs",
    "slug": "structured-data-for-llms",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Structured Data for LLMs refers to machine-readable semantic data schemas (e.g., JSON-LD, Schema.org, standard Markdown tables) optimized for deterministic extraction and reasoning by language models.",
    "purpose": "Guarantees accurate entity extraction by search engine crawlers and LLMs, minimizing synthesis distortion and powering Generative Engine Optimization (GEO).",
    "keyConcepts": [
      "Semantic markup",
      "JSON-LD",
      "knowledge graphs",
      "schema normalization."
    ],
    "howItWorks": "Product architectures serialize complex relational models into validated semantic trees, embedded in HTML <head> tags or exposed via dedicated API endpoints.",
    "relatedTerms": [
      "llms.txt Proposal",
      "Content Modeling",
      "Knowledge Graphs (AI Context)",
      "Controlled Vocabulary"
    ],
    "seoTitle": "Structured Data for LLMs: Optimizing for GEO and AI Crawlers",
    "sources": [
      "Schema.org Consortium",
      "W3C RDF / JSON-LD Recommendations",
      "Google Search Central"
    ]
  },
  {
    "id": "066",
    "name": "llms.txt Proposal",
    "slug": "llms-txt-proposal",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Emerging",
    "definition": "The llms.txt Proposal is a proposed web standard specifying a curated, Markdown-formatted navigation map located at a website's root (/llms.txt), pointing AI models and agents to core content pages.",
    "purpose": "Provides AI agents with a clean, low-token navigation index of high-value site documentation, bypassing the clutter of heavy HTML scripts and complex navigation trees.",
    "keyConcepts": [
      "/llms.txt root file",
      "curated link markdown",
      "low-token context aid",
      "/llms-full.txt companion."
    ],
    "howItWorks": "The server hosts a lightweight markdown file with H project names, summary blockquotes, and link lists with 1-line descriptions, accompanied by raw .md content mirrors.",
    "relatedTerms": [
      "Structured Data for LLMs",
      "Content Modeling",
      "Context Engineering"
    ],
    "seoTitle": "What is llms.txt? Jeremy Howard's Proposal Explained",
    "sources": [
      "Jeremy Howard, llms.txt Specification, Answer.AI (v, August 2026)",
      "W2B Agency Technical Guide"
    ]
  },
  {
    "id": "067",
    "name": "Multimodal AI",
    "slug": "multimodal-ai",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Multimodal AI refers to machine learning architectures capable of processing, synthesizing, and relating information across multiple diverse sensory modalities, including text, vector graphics, raster images, audio, and video.",
    "purpose": "Enables computers to comprehend real-world design artifacts—such as visual mockups, spatial whiteboards, and spoken design critiques—in their native formats.",
    "keyConcepts": [
      "Cross-attention mechanisms",
      "joint embedding spaces",
      "sensory fusion",
      "unified encoders."
    ],
    "howItWorks": "Deep neural networks map heterogeneous data streams (e.g., pixels and tokens) into shared high-dimensional vector spaces to compute cross-modal reasoning.",
    "relatedTerms": [
      "AI Agent",
      "Generative UI",
      "Semantic Zoom",
      "AI-native Design"
    ],
    "seoTitle": "Multimodal AI in Product Design: Vision, Audio & Canvas UX",
    "sources": [
      "OpenAI GPT-4V Technical Report",
      "DeepMind Gemini Architectural Overview"
    ]
  },
  {
    "id": "068",
    "name": "Knowledge Graphs (AI Context)",
    "slug": "knowledge-graphs-ai-context",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "A Knowledge Graph is a structured network representing real-world entities as nodes and their semantic interrelations as typed edges, used to provide explicit, relational context to AI systems.",
    "purpose": "Provides deterministic, verifiable ground-truth data structures for AI reasoning, eliminating the factual hallucinations common to unstructured vector embeddings.",
    "keyConcepts": [
      "Nodes (entities)",
      "edges (predicates)",
      "triple stores",
      "ontological reasoning."
    ],
    "howItWorks": "Information is structured as RDF triples (Subject -[Predicate]-> Object); query engines traverse these relationships to feed structured contextual subgraphs to LLMs.",
    "relatedTerms": [
      "Conceptual Schema",
      "Domain Context Modeling",
      "Retrieval-Augmented Generation (RAG)",
      "Structured Data for LLMs"
    ],
    "seoTitle": "Knowledge Graphs in AI: Structuring Graph Context for LLMs",
    "sources": [
      "Tim Berners-Lee, The Semantic Web, Scientific American",
      "MCP Memory Server Specification"
    ]
  },
  {
    "id": "069",
    "name": "Agentic UX",
    "slug": "agentic-ux",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Coined / Interpretive",
    "definition": "Agentic UX is the interaction design framework governing how autonomous digital agents communicate operational intent, progress states, uncertainty calibrations, and permission requests to human operators.",
    "purpose": "Establishes human trust, transparency, and situational control over autonomous processes executing multi-step operations without immediate supervision.",
    "keyConcepts": [
      "Intent signaling",
      "progress observability",
      "intervention triggers",
      "trust calibration."
    ],
    "howItWorks": "Designers build multi-state feedback systems, activity logs, reversible actions, and explicit decision checkpoints into agent workflows.",
    "relatedTerms": [
      "Human-in-the-Loop (HITL)",
      "Operational UX",
      "AI-native Design",
      "Agent Harness"
    ],
    "seoTitle": "Agentic UX: Designing for Autonomous AI Agents and Trust",
    "sources": [
      "Interaction Design Foundation, Designing for Agentic AI",
      "Thoughtworks Customer Insights"
    ]
  },
  {
    "id": "070",
    "name": "System Prompts & Guardrails",
    "slug": "system-prompts-guardrails",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "System Prompts & Guardrails are structural boundary rules and meta-instructions hardcoded into an AI application's execution harness to enforce safety, tone, data privacy, and operational constraints.",
    "purpose": "Prevents prompt injections, ensures regulatory compliance, restricts system permissions, and maintains brand voice integrity across generative responses.",
    "keyConcepts": [
      "Metaprompts",
      "input/output validation",
      "safety boundary rails",
      "prompt isolation."
    ],
    "howItWorks": "Upstream middleware evaluates inputs and model outputs against safety policies, intercepting and modifying non-compliant generations.",
    "relatedTerms": [
      "Context Engineering",
      "Agent Harness",
      "Design Harness",
      "Prompt Engineering"
    ],
    "seoTitle": "AI System Prompts & Guardrails: Architecture and Safety Patterns",
    "sources": [
      "NVIDIA NeMo Guardrails Specification",
      "Anthropic Claude System Prompting Architecture"
    ]
  },
  {
    "id": "071",
    "name": "Synthetic User Testing",
    "slug": "synthetic-user-testing",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Emerging",
    "definition": "Synthetic User Testing is the research simulation practice of executing automated user experience audits, heuristic reviews, and usability walk-throughs using AI agents prompted with precise behavioral personas.",
    "purpose": "Accelerates discovery cycles and catches glaring usability defects early in sprint cycles before investing time in expensive human cohort testing.",
    "keyConcepts": [
      "Persona prompting",
      "agentic simulation",
      "automated heuristic evaluations",
      "synthetic bias calibration."
    ],
    "howItWorks": "Personas are parameterized into agent harnesses that navigate digital prototypes, recording task completions, perceived friction points, and heuristic scores.",
    "relatedTerms": [
      "Product Discovery",
      "Continuous Experimentation",
      "Design Harness",
      "Evaluation Harness (AI Evals)"
    ],
    "seoTitle": "Synthetic User Testing: Running AI-Powered UX Audits",
    "sources": [
      "Jakob Nielsen, AI-Driven Usability Testing",
      "OpenDesign Labs Evaluation Benchmarks"
    ]
  },
  {
    "id": "072",
    "name": "Autonomous Workflow Orchestration",
    "slug": "autonomous-workflow-orchestration",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Emerging",
    "definition": "Autonomous Workflow Orchestration is the algorithmic coordination and execution of multi-agent computational pipelines, scheduling tasks, resolving dependencies, and synthesizing outputs across distributed sub-agents.",
    "purpose": "Enables the execution of massive enterprise procedures—such as supply chain optimization or legal compliance verification—without human micro-management.",
    "keyConcepts": [
      "Directed acyclic graphs (DAGs)",
      "state orchestration",
      "sub-agent delegation",
      "checkpoint recovery."
    ],
    "howItWorks": "A master orchestrator agent assigns partitioned tasks to specialized child agents, synchronizing intermediate outputs and merging final deliverables.",
    "relatedTerms": [
      "Multi-Agent Systems (MAS)",
      "Agentic AI",
      "AI Agent",
      "Agent Harness"
    ],
    "seoTitle": "Autonomous Workflow Orchestration: Multi-Agent Systems Architecture",
    "sources": [
      "LangGraph Framework Documentation",
      "Microsoft AutoGen Multi-Agent Architecture"
    ]
  },
  {
    "id": "073",
    "name": "Evaluation Harness (AI Evals)",
    "slug": "evaluation-harness-ai-evals",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Emerging",
    "definition": "An Evaluation Harness is an automated software testing suite that continuously benchmarks generative AI models and agents against standardized datasets, rubric criteria, and golden reference examples.",
    "purpose": "Quantifies generative quality, detects performance regressions across prompt adjustments or model upgrades, and ensures production reliability.",
    "keyConcepts": [
      "Golden datasets",
      "LLM-as-a-judge",
      "metric rubrics",
      "automated benchmarking."
    ],
    "howItWorks": "The harness runs hundreds of deterministic scenarios against the AI system, scoring outputs using automated assertions, reference comparisons, and model-based evaluators.",
    "relatedTerms": [
      "Design Harness",
      "Agent Harness",
      "Continuous Experimentation",
      "Visual Regression Testing"
    ],
    "seoTitle": "AI Evaluation Harnesses: Benchmarking and Testing LLM Agents",
    "sources": [
      "OpenAI Evals Framework",
      "Thoughtworks, Testing and Evaluating AI Agents"
    ]
  },
  {
    "id": "074",
    "name": "Context Drift",
    "slug": "context-drift",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Emerging",
    "definition": "Context Drift is the gradual degradation of an AI agent’s reasoning coherence, instruction fidelity, or goal focus as its conversational context window fills with lengthy histories and tool responses.",
    "purpose": "Pinpoints the root cause of late-session agent failures, guiding developers to implement periodic state summarization and context pruning mechanisms.",
    "keyConcepts": [
      "Context saturation",
      "attention dilution",
      "instruction degradation",
      "state decay."
    ],
    "howItWorks": "As token lengths expand, the model's self-attention attention weights disperse, reducing adherence to system prompts and causing task derailment.",
    "relatedTerms": [
      "Context Engineering",
      "Agent Harness",
      "Prompt Engineering",
      "Memory Management"
    ],
    "seoTitle": "Understanding Context Drift in LLMs and AI Agent Sessions",
    "sources": [
      "Nelson F. Liu et al., Lost in the Middle: How Language Models Use Long Contexts",
      "Thoughtworks Agent Research"
    ]
  },
  {
    "id": "075",
    "name": "Multi-Agent Systems (MAS)",
    "slug": "multi-agent-systems-mas",
    "category": "AI & Agentic Systems",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Multi-Agent Systems (MAS) are computational environments in which multiple autonomous software agents collaborate, negotiate, and execute specialized roles to solve complex, distributed tasks.",
    "purpose": "Prevents single-model cognitive overload by distributing responsibilities—such as research, critique, drafting, and testing—across modular agent personas.",
    "keyConcepts": [
      "Role specialization",
      "inter-agent communication protocols",
      "consensus mechanisms",
      "task delegation."
    ],
    "howItWorks": "Specialized agents exchange messages, challenge assumptions, and validate intermediate outputs via formal protocols (e.g., Critic-Actor loops) to achieve verified deliverables.",
    "relatedTerms": [
      "Agentic AI",
      "Autonomous Workflow Orchestration",
      "Agent Harness",
      "Model Context Protocol (MCP)"
    ],
    "seoTitle": "Multi-Agent Systems (MAS): Collaborative AI Architecture",
    "sources": [
      "Michael Wooldridge, An Introduction to MultiAgent Systems, Wiley",
      "Microsoft Research AutoGen. Category 04 — Product Strategy & Growth High-performance product design connects UX decisions with business outcomes and unit economics. Modern product organizations avoid vanity design output by aligning around continuous experimentation, clear behavioral funnels, and structured value discovery. From customer journey architectures in complex enterprise SaaS to high-velocity conversion optimization in TravelTech and consumer funnels, designers must master product metrics, Jobs to Be Done, and growth levers"
    ]
  },
  {
    "id": "076",
    "name": "Conversion Rate Optimization (CRO)",
    "slug": "conversion-rate-optimization-cro",
    "alternateName": [
      "CRO",
      "Conversion Rate Optimization"
    ],
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Conversion rate optimization (CRO) is the practice of improving a website or app to increase the proportion of users who complete a defined action, such as purchasing, signing up, or requesting a quote. Teams use research, analytics, and experiments to identify barriers and evaluate changes.",
    "purpose": "Increases revenue generation efficiency and customer acquisition ROI without requiring additional marketing or acquisition spend.",
    "keyConcepts": [
      "Conversion rate formula",
      "baseline analytics",
      "heuristic evaluation",
      "iterative testing."
    ],
    "howItWorks": "Formulated as Conversion Rate = (Conversions / Total Visitors) * 100. Teams isolate funnel friction, formulate behavioral hypotheses, and validate variations using controlled A/B testing.",
    "relatedTerms": [
      "A/B Testing (Split Testing)",
      "Conversion Funnel",
      "Checkout Flow Optimization",
      "Growth Design"
    ],
    "seoTitle": "Conversion Rate Optimization (CRO) | Product Design Glossary",
    "seoDescription": "Learn what CRO means, how to calculate conversion rate, and how to test UX improvements with a practical example and metrics that protect lead quality.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/conversion-rate-optimization-cro.html",
    "sources": [
      "Conversion rate optimization, Optimizely (https://www.optimizely.com/optimization-glossary/conversion-rate-optimization)",
      "Analytics dimensions and metrics, Google Analytics (https://support.google.com/analytics/table/13948007?hl=en)",
      "Primary metrics, secondary metrics, and monitoring goals, Optimizely (https://docs.optimizely.com/experimentation-strategy/docs/primary-metrics-secondary-metrics-and-monitoring-goals)"
    ],
    "contentMarkdown": `# Conversion Rate Optimization (CRO)

Conversion rate optimization (CRO) is the practice of improving a website or app to increase the proportion of users who complete a defined action, such as purchasing, signing up, or requesting a quote. Teams use research, analytics, and experiments to identify barriers and evaluate changes.

CRO helps teams get more value from existing traffic. Useful improvements make it easier for people to understand an offer, make a decision, and complete their task.

## How do you calculate conversion rate?

For a user-based metric:

**Conversion rate = users who complete the target action ÷ eligible users × 100.**

Count each converting user once within the defined measurement window. Do not substitute total event count: one person can submit more than once. For a session-based metric, divide sessions with a conversion by eligible sessions instead. Keep the action, audience, denominator, and measurement window consistent when comparing results.

For a quote-request page, eligible users could be the users who reach that page. If 200 of 10,000 eligible users request a quote, the conversion rate is **2%**. A rate of 2.5% represents a **0.5 percentage-point increase**, or a **25% relative lift**. These illustrative numbers show the size of a difference, not whether a change caused it or whether it is statistically reliable.

## How does a CRO process work?

1. **Define success.** Choose a primary metric and verify that events fire correctly. Add guardrails such as lead quality, refunds, or support requests.
2. **Find the barrier.** Use funnel data to locate drop-off. Combine it with usability sessions, interviews, or support feedback to investigate why people struggle.
3. **Form a hypothesis.** Connect an observed problem, a proposed change, and an expected outcome.
4. **Test and evaluate.** Where traffic supports it, use a randomized A/B test. Set the evaluation method and stopping criteria in advance; interpret the effect alongside its uncertainty and guardrails.
5. **Apply what you learn.** Release useful improvements, investigate inconclusive results, and monitor downstream outcomes.

## A CRO example: a quote request form

Suppose usability sessions show that travelers abandon a quote form because they think submitting it commits them to a purchase.

The team tests a clear explanation beside the submit button: “Request a quote. No payment required.” This copy is appropriate only if it accurately describes the service.

| Decision | Example |
|---|---|
| Hypothesis | Explaining the commitment will help interested travelers submit the form. |
| Primary metric | Percentage of eligible users who submit a quote request. |
| Guardrails | Qualified leads per eligible user and completed bookings per eligible user. |

More submissions can increase workload without producing more qualified leads. Review those downstream results before calling the change a success.

## What if traffic is too low for A/B testing?

Use usability testing and analytics to prioritize evident problems, such as broken validation or unclear requirements. Monitor changes after release, but treat before-and-after comparisons cautiously: traffic mix, campaigns, and seasonality can also affect conversion.

## Related terms

- [A/B Testing (Split Testing)](/glossary/ab-testing-split-testing.html)
- [Conversion Funnel Architecture](/glossary/conversion-funnel-architecture.html)
- [Checkout Flow Optimization](/glossary/checkout-flow-optimization.html)
- [Growth Design](/glossary/growth-design.html)

## Sources

- [Conversion rate optimization, Optimizely](https://www.optimizely.com/optimization-glossary/conversion-rate-optimization)
- [Analytics dimensions and metrics, Google Analytics](https://support.google.com/analytics/table/13948007?hl=en)
- [Primary metrics, secondary metrics, and monitoring goals, Optimizely](https://docs.optimizely.com/experimentation-strategy/docs/primary-metrics-secondary-metrics-and-monitoring-goals)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/conversion-rate-optimization-cro.html#webpage",
                "url": "https://lexkonovalov.com/glossary/conversion-rate-optimization-cro.html",
                "name": "Conversion Rate Optimization (CRO) | Product Design Glossary",
                "description": "Learn what CRO means, how to calculate conversion rate, and how to test UX improvements with a practical example and metrics that protect lead quality.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/conversion-rate-optimization-cro.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/conversion-rate-optimization-cro.html#breadcrumbs"
                },
                "citation": [
                      "https://www.optimizely.com/optimization-glossary/conversion-rate-optimization",
                      "https://support.google.com/analytics/table/13948007?hl=en",
                      "https://docs.optimizely.com/experimentation-strategy/docs/primary-metrics-secondary-metrics-and-monitoring-goals"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/conversion-rate-optimization-cro.html#term",
                "name": "Conversion Rate Optimization (CRO)",
                "alternateName": [
                      "CRO",
                      "Conversion Rate Optimization"
                ],
                "termCode": "conversion-rate-optimization-cro",
                "description": "Conversion rate optimization (CRO) is the practice of improving a website or app to increase the proportion of users who complete a defined action, such as purchasing, signing up, or requesting a quote. Teams use research, analytics, and experiments to identify barriers and evaluate changes.",
                "url": "https://lexkonovalov.com/glossary/conversion-rate-optimization-cro.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/conversion-rate-optimization-cro.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/conversion-rate-optimization-cro.html#breadcrumbs",
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
                            "name": "Conversion Rate Optimization (CRO)",
                            "item": "https://lexkonovalov.com/glossary/conversion-rate-optimization-cro.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "077",
    "name": "A/B Testing (Split Testing)",
    "slug": "ab-testing-split-testing",
    "alternateName": [
      "A/B Testing",
      "Split Testing"
    ],
    "category": "Product Strategy & Growth",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "A/B testing is a controlled experiment that randomly assigns eligible participants to different versions of a product experience and compares predefined outcomes. A well-run test helps estimate the effect of a change for the audience and conditions tested.",
    "purpose": "Replaces internal stakeholder opinions with empirical behavioral evidence, mitigating financial and operational risks when deploying new product designs.",
    "keyConcepts": [
      "Control vs. variant",
      "statistical significance (p-value)",
      "sample size power",
      "minimum detectable effect (MDE)"
    ],
    "howItWorks": "Traffic is split randomly by experimentation routing engines; user interactions are tracked, and statistical hypothesis tests evaluate metric differentials.",
    "relatedTerms": [
      "Continuous Experimentation",
      "Conversion Rate Optimization (CRO)",
      "Feature Flag Strategy",
      "Product Telemetry & Analytics"
    ],
    "seoTitle": "A/B Testing in UX | Product Design Glossary",
    "seoDescription": "Learn how to plan and interpret a UX A/B test. A practical example covers random assignment, success metrics, guardrails, and inconclusive results.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html",
    "sources": [
      "Patterns of Trustworthy Experimentation: Pre-Experiment Stage, Microsoft Research (https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)",
      "Patterns of Trustworthy Experimentation: During-Experiment Stage, Microsoft Research (https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/)",
      "Diagnosing Sample Ratio Mismatch in Online Controlled Experiments, Microsoft Research (https://www.microsoft.com/en-us/research/publication/diagnosing-sample-ratio-mismatch-in-online-controlled-experiments-a-taxonomy-and-rules-of-thumb-for-practitioners/)"
    ],
    "contentMarkdown": `# A/B Testing (Split Testing)

A/B testing is a controlled experiment that randomly assigns eligible participants to different versions of a product experience and compares predefined outcomes. A well-run test helps estimate the effect of a change for the audience and conditions tested.

## How do you plan a UX A/B test?

Suppose new accounts draft an invoice but hesitate to send it because they cannot see what their client will receive. The team tests a preview that shows the invoice as the client would see it.

| Decision | Example |
|---|---|
| Hypothesis | A preview helps more new accounts send a first real invoice by showing what the client will receive. |
| Control and treatment | Group A sees the current experience. Group B gets an option to preview the invoice as the client would see it. |
| Unit of randomization | Assign each eligible new account at signup so teammates use the same version. |
| Primary metric | Percentage of assigned accounts that send a first real invoice within seven days. |
| Guardrails | Accidental sends and invoice-related support requests per assigned account. |

Before launch, agree on the smallest effect worth acting on, the sample and duration needed, and the analysis and stopping rules. Make sure each account has the full outcome window before the final analysis. In this example, the denominator includes all eligible assigned accounts, including accounts that never open the preview.

## What should you check before reading the result?

Verify that assignment and events work in both variants. Compare the observed group sizes with the planned allocation. A statistically significant difference between the observed and planned group proportions is a **sample ratio mismatch**. It can indicate problems with assignment, eligibility, or tracking. Diagnose it before interpreting the treatment effect.

## How do you interpret an inconclusive test?

Review the estimated difference and its uncertainty alongside guardrails. Suppose the estimated change is +2 percentage points, with a 95% confidence interval from −1 to +5 points. The interval spans both a decrease and an improvement. If those outcomes would lead to different decisions, the test has left the decision uncertain.

Agree on the next step based on what is still unknown. Verify the implementation if data quality is in doubt. Revisit the hypothesis if users did not understand the preview. If you need a more precise estimate, plan a follow-up with enough traffic and a suitable analysis rule.

## Related terms

- [Continuous Experimentation](/glossary/continuous-experimentation.html)
- [Conversion Rate Optimization (CRO)](/glossary/conversion-rate-optimization-cro.html)
- [Feature Flag Strategy](/glossary/feature-flag-strategy.html)
- [Product Telemetry & Analytics](/glossary/product-telemetry-analytics.html)

## Sources

- [Patterns of Trustworthy Experimentation: Pre-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)
- [Patterns of Trustworthy Experimentation: During-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/)
- [Diagnosing Sample Ratio Mismatch in Online Controlled Experiments, Microsoft Research](https://www.microsoft.com/en-us/research/publication/diagnosing-sample-ratio-mismatch-in-online-controlled-experiments-a-taxonomy-and-rules-of-thumb-for-practitioners/)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html#webpage",
                "url": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html",
                "name": "A/B Testing in UX | Product Design Glossary",
                "description": "Learn how to plan and interpret a UX A/B test. A practical example covers random assignment, success metrics, guardrails, and inconclusive results.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html#breadcrumbs"
                },
                "citation": [
                      "https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/",
                      "https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/",
                      "https://www.microsoft.com/en-us/research/publication/diagnosing-sample-ratio-mismatch-in-online-controlled-experiments-a-taxonomy-and-rules-of-thumb-for-practitioners/"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html#term",
                "name": "A/B Testing (Split Testing)",
                "termCode": "ab-testing-split-testing",
                "description": "A/B testing is a controlled experiment that randomly assigns eligible participants to different versions of a product experience and compares predefined outcomes. A well-run test helps estimate the effect of a change for the audience and conditions tested.",
                "url": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html#webpage"
                },
                "alternateName": [
                      "A/B Testing",
                      "Split Testing"
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
                "@id": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html#breadcrumbs",
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
                            "name": "A/B Testing (Split Testing)",
                            "item": "https://lexkonovalov.com/glossary/ab-testing-split-testing.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "078",
    "name": "Continuous Experimentation",
    "slug": "continuous-experimentation",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "Continuous experimentation is a product team’s practice of repeatedly testing hypotheses, making decisions from the evidence, and using the results to improve what it tests next. It connects experiments to regular product work through a shared process and a record of what the team learned.",
    "purpose": "Transforms product development from risky, large-batch feature deployments into an agile, hypothesis-driven scientific discovery process.",
    "keyConcepts": [
      "High test velocity",
      "experimentation culture",
      "feature flag decoupling",
      "institutional learning."
    ],
    "howItWorks": "Product teams deploy features behind feature toggles, measuring immediate telemetry to determine whether variations are scaled globally, adjusted, or rolled back.",
    "relatedTerms": [
      "A/B Testing (Split Testing)",
      "Product Discovery",
      "Feature Flag Strategy",
      "Growth Design"
    ],
    "seoTitle": "Continuous Experimentation | Product Design Glossary",
    "seoDescription": "Learn how product teams turn experiments into a repeatable practice, record decisions, and use results to improve the next hypothesis.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/continuous-experimentation.html",
    "sources": [
      "Patterns of Trustworthy Experimentation: Pre-Experiment Stage, Microsoft Research (https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)",
      "Patterns of Trustworthy Experimentation: During-Experiment Stage, Microsoft Research (https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/)",
      "Patterns of Trustworthy Experimentation: Post-Experiment Stage, Microsoft Research (https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-post-experiment-stage/)"
    ],
    "contentMarkdown": `# Continuous Experimentation

Continuous experimentation is a product team’s practice of repeatedly testing hypotheses, making decisions from the evidence, and using the results to improve what it tests next. It connects experiments to regular product work through a shared process and a record of what the team learned.

## How does the cycle work?

1. **Choose a question.** Use research and behavioral data to identify a problem. Write down what change you expect, for whom, and why.
2. **Plan the evaluation.** When a randomized test is feasible, define the assignment unit, primary outcome, guardrails, and decision rules. Check that the relevant events work in both versions.
3. **Review the evidence.** Inspect data quality, estimate the effect, and account for uncertainty and guardrails before making a decision.
4. **Record and reuse the result.** Save the hypothesis, audience, variants, metric definitions, result, decision, and follow-up question. Bring that record into the next planning discussion.

An [A/B test](/glossary/ab-testing-split-testing.html) estimates the effect of a change. Continuous experimentation describes the team practice that connects tests over time. A feature flag can control exposure. To estimate a causal effect with an A/B test, the team also needs random assignment and reliable measurement.

## Example of using one test to plan the next

An invoicing team tests whether a client preview helps more new accounts send their first real invoice within seven days. The result is inconclusive, so the team records the uncertainty alongside the guardrails and its decision to keep the current version.

In follow-up sessions, some users still hesitate because they cannot tell whether the client will receive an email immediately. The next hypothesis addresses that specific uncertainty. The team can test comprehension with a prototype, then evaluate the product change with a randomized test if traffic supports it.

A shared experiment log is enough for a small team to get started. Keep inconclusive results and rollbacks alongside successful releases. Record the audience and context so the next team can decide whether the result applies to its work.

## Related terms

- [A/B Testing (Split Testing)](/glossary/ab-testing-split-testing.html)
- [Product Discovery](/glossary/product-discovery.html)
- [Feature Flag Strategy](/glossary/feature-flag-strategy.html)
- [Growth Design](/glossary/growth-design.html)

## Sources

- [Patterns of Trustworthy Experimentation: Pre-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)
- [Patterns of Trustworthy Experimentation: During-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/)
- [Patterns of Trustworthy Experimentation: Post-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-post-experiment-stage/)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/continuous-experimentation.html#webpage",
                "url": "https://lexkonovalov.com/glossary/continuous-experimentation.html",
                "name": "Continuous Experimentation | Product Design Glossary",
                "description": "Learn how product teams turn experiments into a repeatable practice, record decisions, and use results to improve the next hypothesis.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/continuous-experimentation.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/continuous-experimentation.html#breadcrumbs"
                },
                "citation": [
                      "https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/",
                      "https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/",
                      "https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-post-experiment-stage/"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/continuous-experimentation.html#term",
                "name": "Continuous Experimentation",
                "termCode": "continuous-experimentation",
                "description": "Continuous experimentation is a product team’s practice of repeatedly testing hypotheses, making decisions from the evidence, and using the results to improve what it tests next. It connects experiments to regular product work through a shared process and a record of what the team learned.",
                "url": "https://lexkonovalov.com/glossary/continuous-experimentation.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/continuous-experimentation.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/continuous-experimentation.html#breadcrumbs",
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
                            "name": "Continuous Experimentation",
                            "item": "https://lexkonovalov.com/glossary/continuous-experimentation.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "079",
    "name": "Conversion Funnel",
    "slug": "conversion-funnel-architecture",
    "alternateName": [
      "Conversion Funnel Architecture"
    ],
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "A conversion funnel is a model for measuring how many eligible users or accounts complete a defined sequence of steps toward an outcome. It shows completion and drop-off between milestones, such as viewing travel results, requesting a quote, and completing a booking.",
    "purpose": "Visualizes and quantifies user friction across critical journey steps, highlighting operational bottlenecks that depress customer throughput.",
    "keyConcepts": [
      "Step drop-off rates",
      "funnel leakage",
      "cognitive momentum",
      "activation thresholds."
    ],
    "howItWorks": "Designers map required user actions into discrete, measurable milestones, analyzing drop-off telemetry at each transition to optimize page transitions and forms.",
    "relatedTerms": [
      "Conversion Rate Optimization (CRO)",
      "Checkout Flow Optimization",
      "Time-to-Value (TTV)"
    ],
    "seoTitle": "Conversion Funnel: Steps and Drop-Off | Product Design Glossary",
    "seoDescription": "Learn how to build and read a conversion funnel. A travel quote example shows step conversion, overall conversion, and why denominators matter.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/conversion-funnel-architecture.html",
    "sources": [
      "Funnel exploration, Google Analytics Help (https://support.google.com/analytics/answer/9327974?hl=en)",
      "How Amplitude computes conversions through funnels, Amplitude Docs (https://amplitude.com/docs/analytics/charts/funnel-analysis/funnel-analysis-how-amplitude-computes-conversions)"
    ],
    "contentMarkdown": `# Conversion Funnel

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
- [How Amplitude computes conversions through funnels, Amplitude Docs](https://amplitude.com/docs/analytics/charts/funnel-analysis/funnel-analysis-how-amplitude-computes-conversions)`,
    "structuredDataGraph": [
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
  },
  {
    "id": "080",
    "name": "Lead Capture",
    "slug": "lead-capture-mechanics",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Lead capture is the process of collecting information from a prospective customer so a business can respond to their interest. In product design, it includes the offer, the form or interaction used to collect the information, and what happens after submission.",
    "purpose": "Balances user effort and friction against sales readiness, capturing high-intent prospective buyers and qualifying them for suitable follow-up.",
    "keyConcepts": [
      "Offer value exchange",
      "Request conversion",
      "Qualified lead rate",
      "Progressive disclosure in forms",
      "Error prevention and feedback"
    ],
    "howItWorks": "Designs progressive, accessible form experiences that preserve user context from upstream interactions, asks only for necessary qualification fields, and delivers immediate confirmation and expectations.",
    "relatedTerms": [
      "Conversion Rate Optimization (CRO)",
      "Conversion Funnel",
      "Progressive Disclosure",
      "Checkout Flow Optimization"
    ],
    "seoTitle": "Lead Capture Forms: Design and Metrics | Product Design Glossary",
    "sources": [
      "Question pages, GOV.UK Design System (https://design-system.service.gov.uk/patterns/question-pages/)",
      "Funnel exploration, Google Analytics Help (https://support.google.com/analytics/answer/9327974?hl=en)",
      "How to Improve Validation Errors, Baymard Institute (https://baymard.com/research-articles/adaptive-validation-error-messages)"
    ],
    "seoDescription": "Design a lead capture form around a clear offer and useful follow-up. See which fields to ask for and how to measure qualified leads.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/lead-capture-mechanics.html",
    "alternateName": [
      "Lead Capture Mechanics"
    ],
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/lead-capture-mechanics.html#webpage",
                "url": "https://lexkonovalov.com/glossary/lead-capture-mechanics.html",
                "name": "Lead Capture Forms: Design and Metrics | Product Design Glossary",
                "description": "Design a lead capture form around a clear offer and useful follow-up. See which fields to ask for and how to measure qualified leads.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/lead-capture-mechanics.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/lead-capture-mechanics.html#breadcrumbs"
                },
                "citation": [
                      "https://design-system.service.gov.uk/patterns/question-pages/",
                      "https://support.google.com/analytics/answer/9327974?hl=en",
                      "https://baymard.com/research-articles/adaptive-validation-error-messages"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/lead-capture-mechanics.html#term",
                "name": "Lead Capture",
                "termCode": "lead-capture-mechanics",
                "description": "Lead capture is the process of collecting information from a prospective customer so a business can respond to their interest. In product design, it includes the offer, the form or interaction used to collect the information, and what happens after submission.",
                "url": "https://lexkonovalov.com/glossary/lead-capture-mechanics.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/lead-capture-mechanics.html#webpage"
                },
                "alternateName": [
                      "Lead Capture Mechanics"
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
                "@id": "https://lexkonovalov.com/glossary/lead-capture-mechanics.html#breadcrumbs",
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
                            "name": "Lead Capture",
                            "item": "https://lexkonovalov.com/glossary/lead-capture-mechanics.html"
                      }
                ]
          }
    ],
    "contentMarkdown": `# Lead Capture

Lead capture is the process of collecting information from a prospective customer so a business can respond to their interest. In product design, it includes the offer, the form or interaction used to collect the information, and what happens after submission.

## What should a lead capture form ask for?

Ask how each field changes the response or qualification decision. For a quote, collect the details the team needs to prepare and deliver it. Tell people what they will receive and how you will contact them. Clearly label required and optional inputs and give people a way to correct errors.

In a travel quote flow, the traveler has already selected a route and dates on the results page. The form can carry those details forward, show a summary with a way to edit them, and ask for an email address to send the quote. Ask for a phone number only if the service needs it for that request, and explain why. After submission, confirm that the request was received and tell the traveler what to expect.

## How do you measure lead capture?

Count successful requests using a confirmed submission event. A tap on the submit button can include errors or retries. Use a consistent audience and time window, then follow the same requests through qualification and booking.

| Metric | Illustrative definition |
|---|---|
| Request conversion | Share of eligible results viewers who submit a quote request within 30 days of entry |
| Qualified lead rate per viewer | Share of those viewers whose request qualifies within the same window |
| Qualification rate per submitter | Share of submitters whose request qualifies within the same window |

In an example with 1,000 eligible viewers, 200 submit a request and 80 qualify. Request conversion is **20%**. The qualified lead rate is **8% per eligible viewer**. The qualification rate is **40% per submitter**. Count each traveler once per metric and use a qualification rule the sales team can apply consistently.

Use the [conversion funnel](/glossary/conversion-funnel-architecture.html) to compare form changes with downstream outcomes. If a shorter form gets more submissions, check qualified requests and bookings per eligible viewer. Use those results to decide whether to keep the shorter form or restore a field that materially affects follow-up.

## Related terms

- [Conversion Rate Optimization (CRO)](/glossary/conversion-rate-optimization-cro.html)
- [Conversion Funnel](/glossary/conversion-funnel-architecture.html)
- [Progressive Disclosure](/glossary/progressive-disclosure.html)
- [Checkout Flow Optimization](/glossary/checkout-flow-optimization.html)

## Sources

- [Question pages, GOV.UK Design System](https://design-system.service.gov.uk/patterns/question-pages/)
- [Funnel exploration, Google Analytics Help](https://support.google.com/analytics/answer/9327974?hl=en)
- [How to Improve Validation Errors, Baymard Institute](https://baymard.com/research-articles/adaptive-validation-error-messages)`
  },
  {
    "id": "081",
    "name": "Checkout Flow Optimization",
    "slug": "checkout-flow-optimization",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Checkout flow optimization is the practice of making it easier for customers to review an order, provide required information, pay, and understand the outcome. It addresses avoidable friction from checkout entry through confirmation.",
    "purpose": "Protects bottom-of-the-funnel revenue realization by removing unexpected costs, cognitive distractions, payment friction, and form validation hurdles.",
    "keyConcepts": [
      "Frictionless payments",
      "single-page vs. multi-step checkout",
      "trust signals",
      "inline form recovery."
    ],
    "howItWorks": "Designers implement guest checkouts, native mobile wallet integrations, explicit cost breakdowns, and real-time input error handling.",
    "relatedTerms": [
      "Conversion Rate Optimization (CRO)",
      "Conversion Funnel",
      "Operational UX"
    ],
    "seoTitle": "Checkout Flow Optimization | Product Design Glossary",
    "seoDescription": "Improve checkout with clear totals, usable forms, and payment recovery. A travel booking example shows what to measure beyond payment attempts.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/checkout-flow-optimization.html",
    "sources": [
      "Cart and Checkout Usability Research, Baymard Institute (https://baymard.com/research/checkout-usability)",
      "How to Improve Validation Errors, Baymard Institute (https://baymard.com/research-articles/adaptive-validation-error-messages)",
      "Payment UX, Baymard Institute (https://baymard.com/blog/payment-ux)",
      "How PaymentIntents work, Stripe documentation (https://docs.stripe.com/payments/paymentintents/lifecycle)"
    ],
    "contentMarkdown": `# Checkout Flow Optimization

Checkout flow optimization is the practice of making it easier for customers to review an order, provide required information, pay, and understand the outcome. It addresses avoidable friction from checkout entry through confirmation.

## What should you improve first?

| Friction | What to check |
|---|---|
| Unexpected costs | Show the total, currency, and applicable charges before customers commit. Explain changes to price when they occur. |
| Form errors | Label required fields and explain errors near the relevant input. Preserve valid details where safe so customers can correct the issue and continue. |
| Payment failure | Explain the payment status and give a next action, such as trying another method after a confirmed decline. |
| Unclear confirmation | Tell customers whether the order is confirmed or still processing, and show a reference when available. |

Use checkout events to find where people stop. Observe users attempting that step to understand whether they are confused, blocked, or reconsidering the purchase. Fix the barrier you can verify before changing the number of screens.

## Example of payment recovery in travel checkout

A traveler has reviewed the trip total and entered passenger details. Their payment is declined. Keep the passenger details available, explain the decline in plain language, and let the traveler choose another payment method. If availability or price changed while they were paying, show the new details before asking them to commit again.

A delayed response needs a different design. If the payment outcome is unknown, tell the traveler you are checking it and explain where they can see the result. Confirm the original attempt’s status before offering a retry. Keep payment and booking status distinct when the booking can still be pending after payment succeeds.

## How do you measure checkout improvements?

Define checkout entry and successful completion at the same unit, such as a booking attempt that can contain multiple payment retries. Count confirmed bookings per eligible checkout start within a defined window. Use payment failure and recovery rates to diagnose the outcome, then check duplicate charges, cancellations, and checkout-related support contacts as guardrails.

Use a separate success event for the quote request. Submitting a request records interest. Confirming a booking records a completed purchase in this example.

## Related terms

- [Conversion Rate Optimization (CRO)](/glossary/conversion-rate-optimization-cro.html)
- [Conversion Funnel](/glossary/conversion-funnel-architecture.html)
- [Operational UX](/glossary/operational-ux.html)

## Sources

- [Cart and Checkout Usability Research, Baymard Institute](https://baymard.com/research/checkout-usability)
- [How to Improve Validation Errors, Baymard Institute](https://baymard.com/research-articles/adaptive-validation-error-messages)
- [Payment UX, Baymard Institute](https://baymard.com/blog/payment-ux)
- [How PaymentIntents work, Stripe documentation](https://docs.stripe.com/payments/paymentintents/lifecycle)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/checkout-flow-optimization.html#webpage",
                "url": "https://lexkonovalov.com/glossary/checkout-flow-optimization.html",
                "name": "Checkout Flow Optimization | Product Design Glossary",
                "description": "Improve checkout with clear totals, usable forms, and payment recovery. A travel booking example shows what to measure beyond payment attempts.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/checkout-flow-optimization.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/checkout-flow-optimization.html#breadcrumbs"
                },
                "citation": [
                      "https://baymard.com/research/checkout-usability",
                      "https://baymard.com/research-articles/adaptive-validation-error-messages",
                      "https://baymard.com/blog/payment-ux",
                      "https://docs.stripe.com/payments/paymentintents/lifecycle"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/checkout-flow-optimization.html#term",
                "name": "Checkout Flow Optimization",
                "termCode": "checkout-flow-optimization",
                "description": "Checkout flow optimization is the practice of making it easier for customers to review an order, provide required information, pay, and understand the outcome. It addresses avoidable friction from checkout entry through confirmation.",
                "url": "https://lexkonovalov.com/glossary/checkout-flow-optimization.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/checkout-flow-optimization.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/checkout-flow-optimization.html#breadcrumbs",
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
                            "name": "Checkout Flow Optimization",
                            "item": "https://lexkonovalov.com/glossary/checkout-flow-optimization.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "082",
    "name": "Product Discovery",
    "slug": "product-discovery",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Product discovery is the work of reducing uncertainty about which customer problems to address and which solutions are worth pursuing. Teams use research, prototypes, and assumption tests to make decisions before committing substantial delivery effort. Discovery can continue as the product is built and used.",
    "purpose": "Mitigates value, usability, feasibility, and business viability risks through continuous customer contact, assumption testing, and rapid prototyping.",
    "keyConcepts": [
      "Four product risks (Value, Usability, Feasibility, Viability)",
      "Continuous discovery habits",
      "Assumption testing",
      "Discovery vs delivery",
      "Generative research"
    ],
    "howItWorks": "Engages cross-functional product trios in weekly customer interviews and rapid prototype evaluations to test critical assumptions before committing engineering resources.",
    "relatedTerms": [
      "Jobs to Be Done (JTBD)",
      "Continuous Experimentation",
      "Mental Model Mapping",
      "Product Strategy Canvas"
    ],
    "seoTitle": "Product Discovery in UX | Product Design Glossary",
    "sources": [
      "Continuous Discovery Habits, Teresa Torres (https://www.producttalk.org/continuous-discovery-habits/)",
      "The Four Big Risks, Marty Cagan, Silicon Valley Product Group (https://www.svpg.com/four-big-risks/)"
    ],
    "seoDescription": "Learn how product discovery reduces uncertainty before committing to a solution. See an invoicing example covering interviews and assumption tests.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/product-discovery.html",
    "structuredDataGraph": [
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
    ],
    "contentMarkdown": `# Product Discovery

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

## Sources

- [Continuous Discovery Habits, Teresa Torres](https://www.producttalk.org/continuous-discovery-habits/)
- [The Four Big Risks, Marty Cagan, Silicon Valley Product Group](https://www.svpg.com/four-big-risks/)`
  },
  {
    "id": "083",
    "name": "Jobs to Be Done (JTBD)",
    "slug": "jobs-to-be-done-jtbd",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Jobs to Be Done (JTBD) is a way to understand why people choose a product or another solution in a particular situation. The job is the progress they seek. It can have functional, emotional, and social dimensions.",
    "purpose": "Shifts product focus from surface demographics to the underlying progress and context that motivates users to hire or fire solutions.",
    "keyConcepts": [
      "Functional dimension",
      "Emotional dimension",
      "Social dimension",
      "Forces of progress (push, pull, inertia, anxiety)",
      "Hiring and firing alternatives"
    ],
    "howItWorks": "Investigates past customer switching moments through timeline interviews, identifying the specific triggering circumstances, trade-offs, and progress sought.",
    "relatedTerms": [
      "Mental Model Mapping",
      "Product Discovery",
      "Value Proposition Canvas",
      "Product Strategy Canvas"
    ],
    "seoTitle": "Jobs to Be Done (JTBD) in UX | Product Design Glossary",
    "sources": [
      "Jobs to Be Done Theory, Christensen Institute (https://www.christenseninstitute.org/theory/jobs-to-be-done/)",
      "The Jobs to Be Done Shaping Curriculum Decisions, Christensen Institute (https://www.christenseninstitute.org/wp-content/uploads/2021/04/Curriculum-Conundrum-4.20-update.pdf)"
    ],
    "seoDescription": "Learn how Jobs to Be Done explains customer choices. A travel example shows how to investigate the situation, alternatives, and progress people seek.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/jobs-to-be-done-jtbd.html",
    "alternateName": [
      "Jobs to Be Done",
      "JTBD"
    ],
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/jobs-to-be-done-jtbd.html#webpage",
                "url": "https://lexkonovalov.com/glossary/jobs-to-be-done-jtbd.html",
                "name": "Jobs to Be Done (JTBD) in UX | Product Design Glossary",
                "description": "Learn how Jobs to Be Done explains customer choices. A travel example shows how to investigate the situation, alternatives, and progress people seek.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/jobs-to-be-done-jtbd.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/jobs-to-be-done-jtbd.html#breadcrumbs"
                },
                "citation": [
                      "https://www.christenseninstitute.org/theory/jobs-to-be-done/",
                      "https://www.christenseninstitute.org/wp-content/uploads/2021/04/Curriculum-Conundrum-4.20-update.pdf"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/jobs-to-be-done-jtbd.html#term",
                "name": "Jobs to Be Done (JTBD)",
                "termCode": "jobs-to-be-done-jtbd",
                "description": "Jobs to Be Done (JTBD) is a way to understand why people choose a product or another solution in a particular situation. The job is the progress they seek. It can have functional, emotional, and social dimensions.",
                "url": "https://lexkonovalov.com/glossary/jobs-to-be-done-jtbd.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/jobs-to-be-done-jtbd.html#webpage"
                },
                "alternateName": [
                      "Jobs to Be Done",
                      "JTBD"
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
                "@id": "https://lexkonovalov.com/glossary/jobs-to-be-done-jtbd.html#breadcrumbs",
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
                            "name": "Jobs to Be Done (JTBD)",
                            "item": "https://lexkonovalov.com/glossary/jobs-to-be-done-jtbd.html"
                      }
                ]
          }
    ],
    "contentMarkdown": `# Jobs to Be Done (JTBD)

Jobs to Be Done (JTBD) is a way to understand why people choose a product or another solution in a particular situation. The job is the progress they seek. It can have functional, emotional, and social dimensions.

## What does a job look like?

Imagine a traveler planning a work trip with uncertain meeting times. They compare booking online, asking an assistant, and calling a travel agent. A possible job is to arrange a flight they can change with confidence if the meeting moves.

| Dimension | What might matter in this situation |
|---|---|
| Functional | Understand which itinerary can change and what the change may cost. |
| Emotional | Feel comfortable committing before the schedule is final. |
| Social | Be able to explain the decision and its costs to the person approving the trip. |

The same traveler might choose differently for a fixed-date vacation. The circumstances help explain why flexibility matters in one decision and price may matter more in another.

## How do you research a job?

1. **Ask about a specific decision.** Find someone who recently chose, switched, or stayed with an alternative. Ask them to reconstruct what happened.
2. **Look for the trigger and the alternatives.** What changed? What did they try first? Include workarounds, asking someone else, and delaying the decision.
3. **Trace the tradeoffs.** Ask what made the new option attractive and what made the old way hard to give up. Look for evidence in the details of the decision.
4. **Compare stories.** Look for recurring circumstances and desired progress. Treat the proposed job as a hypothesis. Look for cases where it does and does not explain the choice.

## How does JTBD inform design?

A traveler may ask for a flexible-fare filter. If the underlying problem is uncertainty about changing a specific ticket, show the change conditions and relevant costs where travelers compare offers. Test whether they can explain what would happen if their meeting moved.

Applying a filter is one possible step. The job helps you compare that step with other ways to give the traveler confidence that they can change the trip. Use [product discovery](/glossary/product-discovery.html) to compare ways to support that progress.

## Related terms

- [Mental Model Mapping](/glossary/mental-model-mapping.html)
- [Product Discovery](/glossary/product-discovery.html)
- [Value Proposition Canvas](/glossary/value-proposition-canvas.html)
- [Product Strategy Canvas](/glossary/product-strategy-canvas.html)

## Sources

- [Jobs to Be Done Theory, Christensen Institute](https://www.christenseninstitute.org/theory/jobs-to-be-done/)
- [The Jobs to Be Done Shaping Curriculum Decisions, Christensen Institute](https://www.christenseninstitute.org/wp-content/uploads/2021/04/Curriculum-Conundrum-4.20-update.pdf)`
  },
  {
    "id": "084",
    "name": "Product-Led Growth (PLG)",
    "slug": "product-led-growth-plg",
    "alternateName": [
      "PLG",
      "Product-led growth"
    ],
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Product-led growth (PLG) is a business strategy in which the product experience is the primary driver of customer acquisition, activation, retention, and expansion. People experience useful outcomes through the product, and that value supports adoption, paid conversion, or wider use within an organization.",
    "purpose": "Reduces customer acquisition costs (CAC) and accelerates enterprise expansion by empowering end-users to experience immediate value before sales interactions.",
    "keyConcepts": [
      "Self-serve onboarding",
      "freemium mechanics",
      "product viral loops",
      "product qualified leads (PQL)."
    ],
    "howItWorks": "Removes upfront paywalls and sales gates, engineering rapid time-to-value so that the user realizes organic utility and triggers expansion within their organization.",
    "relatedTerms": [
      "Time-to-Value (TTV)",
      "Activation Metric",
      "Growth Design",
      "B2B SaaS Interaction Model"
    ],
    "seoTitle": "Product-Led Growth (PLG) | Product Design Glossary",
    "seoDescription": "Learn how product-led growth connects product value to acquisition, activation, retention, and expansion, with a SaaS example and useful PLG metrics.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/product-led-growth-plg.html",
    "sources": [
      "Product-Led Growth: Definition and Examples, Wes Bush / ProductLed (https://productled.com/blog/product-led-growth-definition)",
      "Product-Led vs. Sales-Led Growth, Wes Bush / ProductLed (https://productled.com/blog/sales-led-growth-definition)",
      "How to Define PQLs, ProductLed (https://productled.com/blog/how-to-define-pqls)"
    ],
    "contentMarkdown": `# Product-Led Growth (PLG)

Product-led growth (PLG) is a business strategy in which the product experience is the primary driver of customer acquisition, activation, retention, and expansion. People experience useful outcomes through the product, and that value supports adoption, paid conversion, or wider use within an organization.

Free trials and freemium plans are common ways to let people try a product. Their effectiveness depends on whether users can solve a meaningful problem and have a reason to return.

## How does product-led growth work?

Teams design a path from discovering the product to experiencing value, building a habit where appropriate, and paying for capabilities they need. This involves onboarding, the core workflow, pricing, and support, with product, design, engineering, marketing, and sales working toward shared outcomes.

Self-service can make that path easier to start. Sales and customer-success teams can still help with evaluation, integration, procurement, or expansion into larger accounts.

## A PLG example: a team planning tool

Imagine a planning tool that lets a team try one shared project. This is an illustrative model, not a case study.

| Stage | Example product experience |
|---|---|
| Acquisition | A colleague receives an invitation to join a real project. |
| Activation | Two teammates coordinate work and complete their first shared task. |
| Retention | The team returns to plan and complete more work. |
| Monetization and expansion | The team chooses a paid plan when it needs additional projects or administrative controls. |

The design work includes a useful starting template, clear invitations, understandable permissions, and pricing that explains what an upgrade adds. Prompt invitations when users have work to share and explain what the invited person can access.

## How is PLG different from sales-led growth?

In a sales-led motion, sales interactions lead the evaluation and purchasing process. In PLG, hands-on product use leads much of that process. A hybrid approach can combine self-service adoption with sales assistance when an account needs it.

A free tier is a pricing choice. PLG is the broader strategy connecting product value to growth. Offering a free plan alone does not create that connection or guarantee lower acquisition costs.

## Which PLG metrics are useful?

- **Activation rate:** The proportion of new users or accounts reaching a defined milestone that indicates initial value.
- **Time to value:** How long it takes that audience to reach the milestone.
- **Retention:** Whether users or accounts return to perform meaningful work over time.
- **Paid conversion and expansion:** Whether customers begin paying and increase their use of paid capabilities.

Define the unit, cohort, and time window before comparing these metrics. In the planning example, measure activation at the team level. Check whether the proposed activation milestone is associated with later retention.

A [**product-qualified lead (PQL)**](/glossary/product-qualified-lead-pql.html) is a user qualified through product usage that signals meaningful value and potential readiness to buy or expand. Define the qualifying behavior for your product, using customer fit and intent to decide whether sales assistance is appropriate.

## Related terms

- [Time-to-Value (TTV)](/glossary/time-to-value-ttv.html)
- [Activation Metric](/glossary/activation-metric.html)
- [Growth Design](/glossary/growth-design.html)
- [B2B SaaS Interaction Model](/glossary/b2b-saas-interaction-model.html)

## Sources

- [Product-Led Growth: Definition and Examples, Wes Bush / ProductLed](https://productled.com/blog/product-led-growth-definition)
- [Product-Led vs. Sales-Led Growth, Wes Bush / ProductLed](https://productled.com/blog/sales-led-growth-definition)
- [How to Define PQLs, ProductLed](https://productled.com/blog/how-to-define-pqls)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/product-led-growth-plg.html#webpage",
                "url": "https://lexkonovalov.com/glossary/product-led-growth-plg.html",
                "name": "Product-Led Growth (PLG) | Product Design Glossary",
                "description": "Learn how product-led growth connects product value to acquisition, activation, retention, and expansion, with a SaaS example and useful PLG metrics.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/product-led-growth-plg.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/product-led-growth-plg.html#breadcrumbs"
                },
                "citation": [
                      "https://productled.com/blog/product-led-growth-definition",
                      "https://productled.com/blog/sales-led-growth-definition",
                      "https://productled.com/blog/how-to-define-pqls"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/product-led-growth-plg.html#term",
                "name": "Product-Led Growth (PLG)",
                "alternateName": [
                      "PLG",
                      "Product-led growth"
                ],
                "termCode": "product-led-growth-plg",
                "description": "Product-led growth (PLG) is a business strategy in which the product experience is the primary driver of customer acquisition, activation, retention, and expansion. People experience useful outcomes through the product, and that value supports adoption, paid conversion, or wider use within an organization.",
                "url": "https://lexkonovalov.com/glossary/product-led-growth-plg.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/product-led-growth-plg.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/product-led-growth-plg.html#breadcrumbs",
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
                            "name": "Product-Led Growth (PLG)",
                            "item": "https://lexkonovalov.com/glossary/product-led-growth-plg.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "085",
    "name": "North Star Metric (NSM)",
    "slug": "north-star-metric-nsm",
    "alternateName": [
      "North Star Metric",
      "NSM"
    ],
    "category": "Product Strategy & Growth",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "A North Star Metric (NSM) is a primary product metric that tracks a measurable sign of the value customers get from a product. Teams use it to align priorities and choose input metrics they can influence. Teams check whether changes in the metric are associated with durable business outcomes, such as customer retention or revenue.",
    "purpose": "Unifies cross-functional teams around a common goal, prevents conflicting departmental priorities, and ensures product decisions tie directly to sustained customer value.",
    "keyConcepts": [
      "Core value capture",
      "leading growth indicator",
      "input metrics tree",
      "team alignment."
    ],
    "howItWorks": "Leadership identifies the quantitative signal that reflects recurring customer success (e.g., \"Nights Booked\" for Airbnb), decomposing it into localized tactical input levers.",
    "relatedTerms": [
      "Product Strategy Canvas",
      "Product Telemetry & Analytics",
      "Activation Metric",
      "User Retention"
    ],
    "seoTitle": "North Star Metric: Examples and Inputs | Product Design Glossary",
    "seoDescription": "Learn how to choose a North Star Metric, define its inputs, and check whether it reflects customer value. Includes an invoicing product example.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/north-star-metric-nsm.html",
    "sources": [
      "About the North Star Framework, Amplitude (https://www.amplitude.com/books/north-star/about-north-star-framework)",
      "Defining Your North Star, Amplitude (https://amplitude.com/books/north-star/defining-your-North-Star)"
    ],
    "contentMarkdown": `# North Star Metric (NSM)

A North Star Metric (NSM) is a primary product metric that tracks a measurable sign of the value customers get from a product. Teams use it to align priorities and choose input metrics they can influence. Teams check whether changes in the metric are associated with durable business outcomes, such as customer retention or revenue.

## What makes a useful North Star Metric?

Start with the outcome people come for and how often they need it. Define the unit, qualifying behavior, and time period. Ask whether the metric could rise without customers getting more value. A count of invoices sent, for example, can rise because a few customers send more invoices. A count of accounts that send an invoice answers how widely the product delivers that outcome.

Check the connection to business outcomes over time. A metric can represent a meaningful activity while still being a weak indicator of renewals or paid adoption. Review results across customer groups and billing cycles before treating it as a dependable signal.

## Example for an invoicing product

Suppose small businesses use an invoicing product on a monthly cycle. The team chooses **monthly invoicing accounts** as its North Star. It counts distinct customer accounts that send at least one real invoice in a calendar month, excluding test invoices. Sending a real invoice represents progress toward billing a client. If the product also promises to help customers collect payment, the team should check whether the metric captures enough of that value.

| Metric role | Example |
|---|---|
| North Star | Distinct accounts sending at least one real invoice in a calendar month |
| Input for acquisition | Number of eligible new accounts created each month |
| Input for onboarding | Share of eligible new accounts sending a first real invoice within seven days |
| Input for repeat use | Share of last month’s invoicing accounts that send a real invoice this month |
| Guardrail | Invoice-related support requests per 100 invoicing accounts |

Inputs help teams locate opportunities. The [activation rate](/glossary/activation-metric.html) can improve while the North Star stays flat if fewer accounts sign up or established accounts stop invoicing. Use the inputs to investigate what changed. The seven-day activation window can cross a calendar month, and returning accounts can include customers who skipped a month.

## Related terms

- [Product Strategy Canvas](/glossary/product-strategy-canvas.html)
- [Product Telemetry & Analytics](/glossary/product-telemetry-analytics.html)
- [Activation Metric](/glossary/activation-metric.html)
- [User Retention](/glossary/user-retention.html)

## Sources

- [About the North Star Framework, Amplitude](https://www.amplitude.com/books/north-star/about-north-star-framework)
- [Defining Your North Star, Amplitude](https://amplitude.com/books/north-star/defining-your-North-Star)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/north-star-metric-nsm.html#webpage",
                "url": "https://lexkonovalov.com/glossary/north-star-metric-nsm.html",
                "name": "North Star Metric: Examples and Inputs | Product Design Glossary",
                "description": "Learn how to choose a North Star Metric, define its inputs, and check whether it reflects customer value. Includes an invoicing product example.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/north-star-metric-nsm.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/north-star-metric-nsm.html#breadcrumbs"
                },
                "citation": [
                      "https://www.amplitude.com/books/north-star/about-north-star-framework",
                      "https://amplitude.com/books/north-star/defining-your-North-Star"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/north-star-metric-nsm.html#term",
                "name": "North Star Metric (NSM)",
                "termCode": "north-star-metric-nsm",
                "description": "A North Star Metric (NSM) is a primary product metric that tracks a measurable sign of the value customers get from a product. Teams use it to align priorities and choose input metrics they can influence. Teams check whether changes in the metric are associated with durable business outcomes, such as customer retention or revenue.",
                "url": "https://lexkonovalov.com/glossary/north-star-metric-nsm.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/north-star-metric-nsm.html#webpage"
                },
                "alternateName": [
                      "North Star Metric",
                      "NSM"
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
                "@id": "https://lexkonovalov.com/glossary/north-star-metric-nsm.html#breadcrumbs",
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
                            "name": "North Star Metric (NSM)",
                            "item": "https://lexkonovalov.com/glossary/north-star-metric-nsm.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "086",
    "name": "Product Strategy Canvas",
    "slug": "product-strategy-canvas",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "A Product Strategy Canvas is a visual strategic planning framework that articulates target customer segments, market positioning, unique value propositions, capability horizons, and competitive moats on a single page.",
    "purpose": "Aligns executive leadership and delivery squads around a defensible product thesis, preventing feature-factory execution divorced from business strategy.",
    "keyConcepts": [
      "Strategic positioning",
      "competitive defensibility",
      "target segment prioritization",
      "outcome mapping."
    ],
    "howItWorks": "Teams articulate user problems, market alternatives, unique capabilities, and business levers, reviewing the canvas quarterly to steer roadmap priorities.",
    "relatedTerms": [
      "Value Proposition Canvas",
      "North Star Metric (NSM)",
      "Product Discovery",
      "Product–Market Fit (PMF)"
    ],
    "seoTitle": "Product Strategy Canvas: Modern Strategic Frameworks for Design",
    "sources": [
      "Melissa Perri, Escaping the Build Trap, O'Reilly",
      "Roman Pichler, Strategize: Product Strategy and Roadmapping"
    ]
  },
  {
    "id": "087",
    "name": "Customer Journey Mapping",
    "slug": "customer-journey-mapping",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Customer Journey Mapping is the research-based visualization of the sequential phases, touchpoints, emotional states, pain points, and expectations a user experiences while pursuing a goal across an organization.",
    "purpose": "Breaks down corporate organizational silos, exposing broken cross-channel transitions, redundant steps, and emotional friction across customer interactions.",
    "keyConcepts": [
      "Lifecycle stages",
      "cross-channel touchpoints",
      "emotional curves",
      "opportunity horizons."
    ],
    "howItWorks": "Synthesizes customer interviews, clickstream analytics, and support logs into a horizontal chronological timeline displaying what users do, feel, and think across every stage.",
    "relatedTerms": [
      "Service Blueprinting",
      "Mental Model Mapping",
      "Conversion Funnel"
    ],
    "seoTitle": "Customer Journey Mapping: UX Research Methods & Blueprints",
    "sources": [
      "Jim Kalbach, Mapping Experiences, O'Reilly",
      "Nielsen Norman Group, Customer Journey Mapping 101"
    ]
  },
  {
    "id": "088",
    "name": "Enterprise UX Strategy",
    "slug": "enterprise-ux-strategy",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Enterprise UX strategy is a plan for improving how people use enterprise software to accomplish organizational work. It connects user needs and business goals with priorities, measurable outcomes, and decisions about how teams will deliver and maintain improvements.",
    "purpose": "Eliminates the massive hidden costs of corporate training, workplace operational fatigue, and high employee error rates typical of legacy enterprise software.",
    "keyConcepts": [
      "Total cost of ownership (TCO)",
      "employee productivity ROI",
      "change management",
      "operational safety."
    ],
    "howItWorks": "Enterprise designers engage deep corporate stakeholders, audit regulatory obligations, and map multi-user authorization matrices to construct modern, consumer-grade workflows.",
    "relatedTerms": [
      "Operational UX",
      "Enterprise Information Architecture",
      "B2B SaaS Interaction Model"
    ],
    "seoTitle": "Enterprise UX Strategy | Product Design Glossary",
    "seoDescription": "Learn what enterprise UX strategy includes, how to prioritize complex workflows, and how to measure progress with a practical procurement example.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/enterprise-ux-strategy.html",
    "sources": [
      "UX Strategy: Definition and Components, Nielsen Norman Group (https://www.nngroup.com/articles/ux-strategy/)",
      "Complex Application Design: A 5-Layer Framework, Nielsen Norman Group (https://www.nngroup.com/articles/complex-application-design-framework/)"
    ],
    "contentMarkdown": `# Enterprise UX Strategy

Enterprise UX strategy is a plan for improving how people use enterprise software to accomplish organizational work. It connects user needs and business goals with priorities, measurable outcomes, and decisions about how teams will deliver and maintain improvements.

Its scope may cover one enterprise product or workflows spanning several systems. The work includes choosing which problems to solve first and which changes to defer.

## What makes enterprise UX strategy different?

Enterprise workflows often involve specialized roles, shared records, permissions, legacy integrations, and handoffs between departments. Improving one screen may do little if people still copy information between systems or wait for an unclear approval.

The people buying, administering, and using the software may have different needs. Research must include the people doing the work, not only stakeholders who authorize a purchase.

Strategy also needs to account for adoption: existing habits, training, migration, and the consequences of changing an established process.

## What should the strategy include?

Nielsen Norman Group describes UX strategy through vision, goals and measures, and a plan. A practical enterprise version should answer:

| Decision | Question to resolve |
|---|---|
| Scope and direction | Which users and workflows are we improving, and why? |
| Evidence and priorities | Where do observations, support issues, and workflow data show the most consequential problems? |
| Outcomes | What should improve, and what baseline will we compare against? |
| Constraints and ownership | Who owns decisions across teams, and which permissions, integrations, or controls must be preserved? |
| Delivery and adoption | What will we pilot first, who needs support, and how will we decide whether to expand? |

A short document and a prioritized roadmap can be enough if they identify the choices, owners, and measures.

## Example: improving purchase approvals

Suppose employees submit purchase requests in one tool, managers approve them by email, and finance re-enters the details in an accounting system.

In this illustrative scenario, research finds that requests stall because nobody can reliably see the current owner or missing information. A strategy could prioritize shared request status and clear responsibility before a broader interface redesign.

| Strategy element | Illustrative choice |
|---|---|
| Intended outcome | Help employees and finance resolve incomplete requests with less rework. |
| First initiative | Pilot shared request status and a named next approver in one department. |
| Measures | Track submission-to-decision time and the proportion of requests returned for missing information. |
| Guardrails | Preserve required approvals, access boundaries, and the decision history. |
| Rollout | Assign a process owner, support users during the pilot, and review results before expanding. |

Measure time spent working separately from time waiting for a handoff. This helps the team identify whether an interface change or a process change is needed.

## How is it different from information architecture?

Enterprise UX strategy sets direction and priorities. [Enterprise information architecture](/glossary/enterprise-information-architecture.html) defines how information is organized, labeled, and connected across the environment.

A design system supports consistent implementation, while a roadmap sequences the work. Each can help execute the strategy; none alone explains which user problems matter most or how success will be judged.

## Related terms

- [Operational UX](/glossary/operational-ux.html)
- [Enterprise Information Architecture](/glossary/enterprise-information-architecture.html)
- [B2B SaaS Interaction Model](/glossary/b2b-saas-interaction-model.html)

## Sources

- [UX Strategy: Definition and Components, Nielsen Norman Group](https://www.nngroup.com/articles/ux-strategy/)
- [Complex Application Design: A 5-Layer Framework, Nielsen Norman Group](https://www.nngroup.com/articles/complex-application-design-framework/)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/enterprise-ux-strategy.html#webpage",
                "url": "https://lexkonovalov.com/glossary/enterprise-ux-strategy.html",
                "name": "Enterprise UX Strategy | Product Design Glossary",
                "description": "Learn what enterprise UX strategy includes, how to prioritize complex workflows, and how to measure progress with a practical procurement example.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/enterprise-ux-strategy.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/enterprise-ux-strategy.html#breadcrumbs"
                },
                "citation": [
                      "https://www.nngroup.com/articles/ux-strategy/",
                      "https://www.nngroup.com/articles/complex-application-design-framework/"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/enterprise-ux-strategy.html#term",
                "name": "Enterprise UX Strategy",
                "termCode": "enterprise-ux-strategy",
                "description": "Enterprise UX strategy is a plan for improving how people use enterprise software to accomplish organizational work. It connects user needs and business goals with priorities, measurable outcomes, and decisions about how teams will deliver and maintain improvements.",
                "url": "https://lexkonovalov.com/glossary/enterprise-ux-strategy.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/enterprise-ux-strategy.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/enterprise-ux-strategy.html#breadcrumbs",
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
                            "name": "Enterprise UX Strategy",
                            "item": "https://lexkonovalov.com/glossary/enterprise-ux-strategy.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "089",
    "name": "B2B SaaS Interaction Model",
    "slug": "b2b-saas-interaction-model",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "A B2B SaaS Interaction Model is the structural interaction framework specifically engineered for multi-tenant, role-governed cloud platforms handling complex enterprise data, workflows, and administrative controls.",
    "purpose": "Balances high-density functional efficiency for daily power users with intuitive simplicity for executive buyers and occasional administrative reviewers.",
    "keyConcepts": [
      "Multi-tenancy",
      "role-based interfaces",
      "bulk operations",
      "workspace switching."
    ],
    "howItWorks": "Deploys adaptable screen architectures featuring collapsible rails, complex tabular data grids, contextual actions, and permission-aware view gating.",
    "relatedTerms": [
      "Operational UX",
      "Enterprise UX Strategy",
      "B2C Engagement Loops",
      "Cardinality (UX Architecture)"
    ],
    "seoTitle": "B2B SaaS Interaction Design: UI Patterns for Enterprise Software",
    "sources": [
      "Daniel Rosenberg, UX Magic",
      "Luke Wroblewski, Multi-Device Interaction Design"
    ]
  },
  {
    "id": "090",
    "name": "B2C Engagement Loops",
    "slug": "b2c-engagement-loops",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "A B2C engagement loop is a recurring cycle in a consumer product where an action and its outcome create a reason for the user to return and act again. The loop works when each return helps the person make progress on something they care about.",
    "purpose": "Drives organic retention and repeat engagement by reinforcing customer progress through intrinsic triggers, useful updates, and compounding utility.",
    "keyConcepts": [
      "Engagement loop vs growth loop",
      "Trigger and action",
      "Price watch cycle",
      "Return condition",
      "Notification controls"
    ],
    "howItWorks": "Captures initial user intent into a stateful watch or preference, automatically monitoring state changes to trigger contextually relevant, valuable alerts that prompt return visits and progress.",
    "relatedTerms": [
      "Product-Led Growth (PLG)",
      "Conversion Funnel",
      "Growth Design",
      "User Retention"
    ],
    "seoTitle": "B2C Engagement Loops: Example and Metrics | Product Design Glossary",
    "sources": [
      "Growth Loops are the New Funnels, Reforge (https://www.reforge.com/blog/growth-loops)",
      "Hooked Model, Nir Eyal (https://www.nirandfar.com/wp-content/uploads/2025/02/Hooked_Model_Canvas_Nir_Eyal.pdf)"
    ],
    "seoDescription": "Learn how an engagement loop creates a useful reason to return. A travel price watch example shows how to map the cycle and measure repeat value.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/b2c-engagement-loops.html",
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/b2c-engagement-loops.html#webpage",
                "url": "https://lexkonovalov.com/glossary/b2c-engagement-loops.html",
                "name": "B2C Engagement Loops: Example and Metrics | Product Design Glossary",
                "description": "Learn how an engagement loop creates a useful reason to return. A travel price watch example shows how to map the cycle and measure repeat value.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/b2c-engagement-loops.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/b2c-engagement-loops.html#breadcrumbs"
                },
                "citation": [
                      "https://www.reforge.com/blog/growth-loops",
                      "https://www.reforge.com/blog/growth-loops",
                      "https://www.nirandfar.com/wp-content/uploads/2025/02/Hooked_Model_Canvas_Nir_Eyal.pdf"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/b2c-engagement-loops.html#term",
                "name": "B2C Engagement Loops",
                "termCode": "b2c-engagement-loops",
                "description": "A B2C engagement loop is a recurring cycle in a consumer product where an action and its outcome create a reason for the user to return and act again. The loop works when each return helps the person make progress on something they care about.",
                "url": "https://lexkonovalov.com/glossary/b2c-engagement-loops.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/b2c-engagement-loops.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/b2c-engagement-loops.html#breadcrumbs",
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
                            "name": "B2C Engagement Loops",
                            "item": "https://lexkonovalov.com/glossary/b2c-engagement-loops.html"
                      }
                ]
          }
    ],
    "contentMarkdown": `# B2C Engagement Loops

A B2C engagement loop is a recurring cycle in a consumer product where an action and its outcome create a reason for the user to return and act again. The loop works when each return helps the person make progress on something they care about.

## What does an engagement loop look like?

Consider a traveler deciding when to book. They save a price watch for a route and dates. The watch lets them compare the current price against what they saw earlier. A price change that matches the traveler’s alert settings can bring them back. If they adjust the dates or budget, those preferences shape the next update.

| Step | What happens |
|---|---|
| Start | The traveler saves a watch for a trip they are considering. |
| Value | The watch preserves the search criteria and makes price changes easy to compare. |
| Reason to return | The price changes enough to matter to the traveler. |
| Next action | The traveler reviews the offer, refines the watch, or books and ends the cycle. |

Give the traveler control over what triggers a notification and how to stop it. If they have already booked, continuing to send alerts for that search can work against the experience.

## How is this different from a growth loop or a funnel?

A [conversion funnel](/glossary/conversion-funnel-architecture.html) measures progress through a defined sequence, such as results view to booking. An engagement loop explains how the output of one interaction can support the next. A growth loop, in Reforge’s framing, reinvests an output into a future cycle that drives growth. A price watch can support repeat use without bringing in a new customer each time.

Nir Eyal’s Hook Model offers another lens for examining recurring use. It describes a trigger, action, variable reward, and investment. Use it when those elements help explain the behavior you observe.

## How do you measure the loop?

For one measure, take active watches that received a qualifying alert during the reporting period. Count each watch once. Measure the share for which the traveler reviewed the updated price within seven days of its first qualifying alert in that period. Allow a full seven days for every included watch before comparing reporting periods. Track opt-outs and alerts per watch alongside the review rate.

Review whether the loop helps travelers make a decision. Booking or turning off a watch can be a successful end to the task, even if it reduces repeat visits.

## Related terms

- [Product-Led Growth (PLG)](/glossary/product-led-growth-plg.html)
- [Conversion Funnel](/glossary/conversion-funnel-architecture.html)
- [Growth Design](/glossary/growth-design.html)
- [User Retention](/glossary/user-retention.html)

## Sources

- [Growth Loops are the New Funnels, Reforge](https://www.reforge.com/blog/growth-loops)
- [Hooked Model, Nir Eyal](https://www.nirandfar.com/wp-content/uploads/2025/02/Hooked_Model_Canvas_Nir_Eyal.pdf)`
  },
  {
    "id": "091",
    "name": "Product Telemetry & Analytics",
    "slug": "product-telemetry-analytics",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "Product telemetry is the data a product records about actions and system behavior. Product analytics uses that data to answer questions about how people use the product and where they reach or miss important outcomes. Data can come from the interface, backend services, or both.",
    "purpose": "Provides objective, real-time behavioral evidence of how software is utilized in the wild, identifying drop-off friction and validating feature success against business targets.",
    "keyConcepts": [
      "Event tracking plans",
      "cohort analysis",
      "conversion funnels",
      "retention matrices."
    ],
    "howItWorks": "Engineers implement client-side event tracking schemas, piping clickstream payloads to data warehouses for cross-sectional user cohort analysis.",
    "relatedTerms": [
      "Component Telemetry",
      "Continuous Experimentation",
      "A/B Testing (Split Testing)",
      "Activation Metric"
    ],
    "seoTitle": "Product Telemetry and Analytics | Product Design Glossary",
    "seoDescription": "Learn how product telemetry supports analytics. An invoice example shows how to define events, verify their triggers, and count outcomes reliably.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/product-telemetry-analytics.html",
    "sources": [
      "Plan your implementation, Amplitude Docs (https://amplitude.com/docs/get-started/plan-your-implementation)",
      "User properties and event properties, Amplitude Docs (https://www.amplitude.com/docs/data/user-properties-and-events)"
    ],
    "contentMarkdown": `# Product Telemetry & Analytics

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
- [User properties and event properties, Amplitude Docs](https://www.amplitude.com/docs/data/user-properties-and-events)`,
    "structuredDataGraph": [
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
  },
  {
    "id": "092",
    "name": "Growth Design",
    "slug": "growth-design",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Growth design is a product design practice that combines user research, behavioral data, and experimentation to improve customer outcomes and measurable business growth. Its scope can include acquisition, activation, retention, referral, and revenue across the product journey.",
    "purpose": "Unifies design quality with aggressive business scalability, proving that UX decisions directly drive quantitative commercial outcomes.",
    "keyConcepts": [
      "Behavioral economics",
      "psychological friction removal",
      "experimentation velocity",
      "metric accountability."
    ],
    "howItWorks": "Growth designers formulate quantitative hypotheses, build targeted micro-interactions (e.g., onboarding personalization, referral prompts), and iterate via rapid A/B experiments.",
    "relatedTerms": [
      "Conversion Rate Optimization (CRO)",
      "Product-Led Growth (PLG)",
      "Continuous Experimentation",
      "Jobs to Be Done (JTBD)",
      "User Retention"
    ],
    "seoTitle": "Growth Design: Meaning & Example | Product Design Glossary",
    "seoDescription": "Understand growth design, how it relates to CRO and PLG, and how research and experiments can improve activation and retention without chasing clicks.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/growth-design.html",
    "sources": [
      "Practicing Growth Design, Lex Roman / Amplitude (https://amplitude.com/blog/practicing-growth-design)",
      "A Primer on Growth Design, Chetana Deorah and Lex Roman (https://speakerdeck.com/chetanadeorah/a-primer-on-growth-design)",
      "Primary metrics, secondary metrics, and monitoring goals, Optimizely (https://docs.optimizely.com/experimentation-strategy/docs/primary-metrics-secondary-metrics-and-monitoring-goals)"
    ],
    "contentMarkdown": `# Growth Design

Growth design is a product design practice that combines user research, behavioral data, and experimentation to improve customer outcomes and measurable business growth. Its scope can include acquisition, activation, [user retention](/glossary/user-retention.html), referral, and revenue across the product journey.

Growth designers identify where people struggle to get value, develop hypotheses about why, and evaluate changes with product, engineering, and analytics partners. The work can involve onboarding, core workflows, pricing, or communication around the product.

## How does growth design relate to product design, CRO, and PLG?

| Term | Main focus |
|---|---|
| Product design | Shaping a useful, usable product that serves users and the business. |
| Growth design | Applying design to a specific growth opportunity and measuring the outcome. |
| Conversion rate optimization (CRO) | Increasing the proportion of people completing a defined action. |
| Product-led growth (PLG) | A business strategy that makes product experience the primary driver of growth. |

These areas overlap. Growth design uses product design skills, and CRO can be part of its work. Growth design can support PLG, sales-led businesses, or hybrid models. Measurement and business outcomes also belong in broader product design.

## A growth design example: first invoice sent

Imagine an invoicing tool where many new accounts create a draft but never send it. Analytics reveals the drop-off; usability sessions reveal that users cannot tell what their clients will receive.

The team proposes a preview of the invoice as the client will see it, with an explanation of what happens after sending. The hypothesis is that resolving this uncertainty will help users send a correct first invoice. The measurement windows below are examples; choose windows that fit actual usage.

| Measurement | Illustrative definition |
|---|---|
| Primary outcome | Percentage of eligible new accounts sending a first invoice within seven days of signup. |
| Longer-term outcome | Percentage of the same eligible account cohort sending a second invoice within 30 days of signup. |
| Guardrails | Accidental sends, canceled invoices, and related support requests. |

Clicking “Preview” is a diagnostic event. It does not establish that users completed the task successfully. The team checks sending behavior and downstream outcomes before deciding whether to roll out the change.

## How do you run a growth design cycle?

1. **Choose an outcome.** Define the audience, behavior, measurement window, and guardrails.
2. **Investigate.** Combine funnel or cohort analysis with research into the user’s task and obstacles.
3. **Design a hypothesis.** Explain how a proposed change addresses the observed barrier.
4. **Evaluate.** Test comprehension and usability. When traffic supports it, use a randomized experiment to estimate the change’s effect.
5. **Learn and follow through.** Review uncertainty and downstream results, then refine, release, or discard the idea.

## What should growth design avoid?

Optimizing a visible metric can hide harm elsewhere. Making cancellation difficult might reduce recorded cancellations while increasing complaints and frustration. Judge improvements against useful outcomes and customer choice, with guardrails that reveal those tradeoffs.

Track what each experiment teaches you and whether the result improves the chosen outcome without violating its guardrails.

## Related terms

- [Conversion Rate Optimization (CRO)](/glossary/conversion-rate-optimization-cro.html)
- [Product-Led Growth (PLG)](/glossary/product-led-growth-plg.html)
- [Continuous Experimentation](/glossary/continuous-experimentation.html)
- [Jobs to Be Done (JTBD)](/glossary/jobs-to-be-done-jtbd.html)

## Sources

- [Practicing Growth Design, Lex Roman / Amplitude](https://amplitude.com/blog/practicing-growth-design)
- [A Primer on Growth Design, Chetana Deorah and Lex Roman](https://speakerdeck.com/chetanadeorah/a-primer-on-growth-design)
- [Primary metrics, secondary metrics, and monitoring goals, Optimizely](https://docs.optimizely.com/experimentation-strategy/docs/primary-metrics-secondary-metrics-and-monitoring-goals)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/growth-design.html#webpage",
                "url": "https://lexkonovalov.com/glossary/growth-design.html",
                "name": "Growth Design: Meaning & Example | Product Design Glossary",
                "description": "Understand growth design, how it relates to CRO and PLG, and how research and experiments can improve activation and retention without chasing clicks.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/growth-design.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/growth-design.html#breadcrumbs"
                },
                "citation": [
                      "https://amplitude.com/blog/practicing-growth-design",
                      "https://speakerdeck.com/chetanadeorah/a-primer-on-growth-design",
                      "https://docs.optimizely.com/experimentation-strategy/docs/primary-metrics-secondary-metrics-and-monitoring-goals"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/growth-design.html#term",
                "name": "Growth Design",
                "termCode": "growth-design",
                "description": "Growth design is a product design practice that combines user research, behavioral data, and experimentation to improve customer outcomes and measurable business growth. Its scope can include acquisition, activation, retention, referral, and revenue across the product journey.",
                "url": "https://lexkonovalov.com/glossary/growth-design.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/growth-design.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/growth-design.html#breadcrumbs",
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
                            "name": "Growth Design",
                            "item": "https://lexkonovalov.com/glossary/growth-design.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "093",
    "name": "Design Strategy Alignment",
    "slug": "design-strategy-alignment",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Design Strategy Alignment is the organizational practice of explicitly linking visual, interaction, and architectural design roadmaps to executive business strategies and revenue priorities.",
    "purpose": "Elevates design from a downstream production service to a strategic leadership partner, ensuring every design initiative drives recognized enterprise value.",
    "keyConcepts": [
      "Strategic OKR mapping",
      "business case modeling",
      "design executive advocacy",
      "outcome focus."
    ],
    "howItWorks": "Designers translate customer experience pain points into financial cost-benefit models, presenting design roadmaps framed in terms of business revenue and risk reduction.",
    "relatedTerms": [
      "Product Strategy Canvas",
      "North Star Metric (NSM)",
      "Product Discovery"
    ],
    "seoTitle": "Design Strategy Alignment: Connecting Product Craft to Business OKRs",
    "sources": [
      "Richard Rumelt, Good Strategy Bad Strategy, Crown Business",
      "Jesse James Garrett, The Elements of User Experience"
    ]
  },
  {
    "id": "094",
    "name": "Product–Market Fit (PMF)",
    "slug": "product-market-fit-pmf-engine",
    "category": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "Product–market fit (PMF) is the degree to which a product meets meaningful demand in a specific market. Teams assess it by looking for evidence that a defined group chooses the product, gets value when the need arises, and shows demand that can sustain the business.",
    "purpose": "Identifies and validates the core segment where exponential organic retention, word-of-mouth adoption, and sustainable commercial willingness-to-pay converge.",
    "keyConcepts": [
      "Cohort retention flattening",
      "Sean Ellis 40% benchmark",
      "Segment-specific fit",
      "Commercial demand evidence",
      "Superhuman PMF engine"
    ],
    "howItWorks": "Surveys target users on emotional disappointment upon product withdrawal while correlating responses with usage data and recurring renewal patterns across narrow customer profiles.",
    "relatedTerms": [
      "Jobs to Be Done (JTBD)",
      "North Star Metric (NSM)",
      "Product Discovery",
      "Churn Mitigation"
    ],
    "seoTitle": "Product–Market Fit (PMF) | Product Design Glossary",
    "sources": [
      "The Only Thing That Matters, Marc Andreessen (https://web.stanford.edu/class/ee204/ProductMarketFit.html)",
      "How Superhuman Built an Engine to Find Product Market Fit, Rahul Vohra (https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/)",
      "Build a retention analysis, Amplitude Docs (https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-build)"
    ],
    "seoDescription": "Learn what product–market fit means, how to assess it in a defined segment, and how to interpret the Superhuman survey and its 40% benchmark.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/product-market-fit-pmf-engine.html",
    "alternateName": [
      "Product-Market Fit",
      "PMF"
    ],
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/product-market-fit-pmf-engine.html#webpage",
                "url": "https://lexkonovalov.com/glossary/product-market-fit-pmf-engine.html",
                "name": "Product–Market Fit (PMF) | Product Design Glossary",
                "description": "Learn what product–market fit means, how to assess it in a defined segment, and how to interpret the Superhuman survey and its 40% benchmark.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/product-market-fit-pmf-engine.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/product-market-fit-pmf-engine.html#breadcrumbs"
                },
                "citation": [
                      "https://web.stanford.edu/class/ee204/ProductMarketFit.html",
                      "https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/",
                      "https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-build"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/product-market-fit-pmf-engine.html#term",
                "name": "Product–Market Fit (PMF)",
                "termCode": "product-market-fit-pmf-engine",
                "description": "Product–market fit (PMF) is the degree to which a product meets meaningful demand in a specific market. Teams assess it by looking for evidence that a defined group chooses the product, gets value when the need arises, and shows demand that can sustain the business.",
                "url": "https://lexkonovalov.com/glossary/product-market-fit-pmf-engine.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/product-market-fit-pmf-engine.html#webpage"
                },
                "alternateName": [
                      "Product-Market Fit",
                      "PMF"
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
                "@id": "https://lexkonovalov.com/glossary/product-market-fit-pmf-engine.html#breadcrumbs",
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
                            "name": "Product–Market Fit (PMF)",
                            "item": "https://lexkonovalov.com/glossary/product-market-fit-pmf-engine.html"
                      }
                ]
          }
    ],
    "contentMarkdown": `# Product–Market Fit (PMF)

Product–market fit (PMF) is the degree to which a product meets meaningful demand in a specific market. Teams assess it by looking for evidence that a defined group chooses the product, gets value when the need arises, and shows demand that can sustain the business.

## How do you assess product–market fit?

Start by naming the customer segment and the problem the product solves. For an invoicing tool, solo consultants who bill monthly may behave differently from teams that need approval workflows. Aggregating both can hide where the product fits.

| Evidence | What to examine |
|---|---|
| Continued use | Do customers return when the need comes up again? Compare cohorts over a period that matches their billing cycle. |
| Commercial demand | Are customers willing to pay or renew at the intended price? Check how much adoption depends on discounts or hands-on support. |
| Customer accounts of value | Which outcome would customers miss? What alternatives would they use if the product disappeared? |

For an invoicing product, signup and the first invoice sent show early progress. Repeated invoicing over several billing cycles and renewals at the intended price provide additional evidence. Compare these signals within the segment you intend to serve.

## What does the 40% PMF survey benchmark mean?

In his Superhuman case study, Rahul Vohra describes using a survey from Sean Ellis that asks how users would feel if they could no longer use the product. The score is the share of respondents who say they would be very disappointed. Vohra used 40% as a benchmark for that survey method and studied which benefits respondents valued and what held others back. Treat the threshold as a heuristic and assess it alongside behavior and commercial demand.

Report the response count and the criteria used to select people. If 20 of 50 respondents choose “very disappointed,” the result is **40% of respondents**. If you survey recent active users, report the score for that group. Check response bias and look separately at people who stopped using the product.

Use survey results to choose where to investigate next. If interviewees value faster invoicing but renewal is weak, check whether customers can complete the entire billing cycle and whether the price still makes sense for that segment.

## Related terms

- [Jobs to Be Done (JTBD)](/glossary/jobs-to-be-done-jtbd.html)
- [North Star Metric (NSM)](/glossary/north-star-metric-nsm.html)
- [Product Discovery](/glossary/product-discovery.html)
- [Churn Mitigation](/glossary/churn-mitigation-architecture.html)

## Sources

- [The Only Thing That Matters, Marc Andreessen](https://web.stanford.edu/class/ee204/ProductMarketFit.html)
- [How Superhuman Built an Engine to Find Product Market Fit, Rahul Vohra](https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/)
- [Build a retention analysis, Amplitude Docs](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-build)`
  },
  {
    "id": "095",
    "name": "LTV to CAC Ratio",
    "slug": "ltv-to-cac-ratio",
    "alternateName": [
      "LTV:CAC",
      "LTV/CAC ratio"
    ],
    "category": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "The LTV to CAC ratio compares customer lifetime value (LTV) with customer acquisition cost (CAC). In the gross-margin-adjusted SaaS calculation used here, LTV represents expected lifetime gross profit, rather than revenue alone.",
    "purpose": "Evaluates the long-term commercial sustainability and marketing efficiency of a software product, directly steering product investment decisions.",
    "keyConcepts": [
      "Unit economics",
      "payback period",
      "churn mitigation",
      "customer acquisition spend."
    ],
    "howItWorks": "Calculated as Ratio = Lifetime Value (LTV) / Customer Acquisition Cost (CAC), where LTV = (Average Revenue Per User (ARPU) * Gross Margin) / Churn Rate. A healthy benchmark for SaaS is generally considered 3 : 1 or higher.",
    "relatedTerms": [
      "Churn Mitigation",
      "Product-Led Growth (PLG)",
      "Activation Metric"
    ],
    "seoTitle": "LTV:CAC Ratio: Formula & Example | Product Design Glossary",
    "seoDescription": "Learn how to calculate LTV:CAC using gross margin, work through a SaaS example, and interpret the 3:1 benchmark alongside churn and CAC payback.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/ltv-to-cac-ratio.html",
    "sources": [
      "SaaS Metrics 2.0: Detailed Definitions, David Skok (https://www.forentrepreneurs.com/saas-metrics-2-definitions/)",
      "SaaS Metrics 2.0, David Skok (https://www.forentrepreneurs.com/saas-metrics-2/)",
      "What is the CAC payback period?, Stripe (https://stripe.com/resources/more/what-is-the-cac-payback-period)",
      "CAC in SaaS, Stripe (https://stripe.com/resources/more/cac-in-saas)"
    ],
    "contentMarkdown": `# LTV to CAC Ratio

The LTV to CAC ratio compares customer lifetime value (LTV) with customer acquisition cost (CAC). In the gross-margin-adjusted SaaS calculation used here, LTV represents expected lifetime gross profit, rather than revenue alone.

**LTV:CAC = customer lifetime value ÷ customer acquisition cost.**

A ratio of 4:1 means an estimated $4 in lifetime gross profit for each $1 spent acquiring a customer. It does not mean $4 in net profit: acquisition costs and other operating expenses still matter.

## How do you calculate LTV:CAC?

For a simplified subscription model:

- **LTV ≈ average monthly revenue per account × gross margin ÷ monthly customer churn rate.**
- **CAC = acquisition-related sales and marketing costs ÷ new paying customers acquired.**

Here, an account is one paying customer. Monthly customer churn is the share of accounts present at the start of the month that cancel during it. Use decimals for percentages: 80% becomes 0.80. Match the revenue and churn periods; do not substitute net revenue churn.

Include relevant salaries, commissions, tools, and campaign costs in CAC. Align costs and acquired customers with the sales cycle; dividing this month's spending by this month's wins can mislead when acquisition takes several months.

## A simple SaaS example

Assume similar customer accounts, stable monthly revenue and churn, and no expansion revenue.

| Input | Illustrative value |
|---|---:|
| Average monthly revenue per account | $100 |
| Gross margin | 80% |
| Monthly customer churn | 2% |
| Acquisition spending attributable to 100 new accounts | $100,000 |

- Estimated LTV = $100 × 0.80 ÷ 0.02 = **$4,000**.
- CAC = $100,000 ÷ 100 = **$1,000**.
- LTV:CAC = $4,000 ÷ $1,000 = **4:1**.

This is a simplified estimate, not a prediction that every account will generate $4,000.

## What is a good LTV:CAC ratio?

**3:1 is a common SaaS rule of thumb, not a universal threshold.** Check how LTV and CAC were calculated before comparing companies or benchmarks. David Skok's detailed definitions explicitly qualify their guideline with assumptions about gross margin and the LTV formula.

A ratio below 1:1 means estimated lifetime gross profit does not cover acquisition cost under this model. A higher ratio can reflect stronger retention or lower acquisition costs, but also optimistic assumptions or incomplete cost allocation.

Review **CAC payback** alongside the ratio: payback asks how long it takes to recover acquisition costs. A favorable lifetime ratio can still require a long wait for that recovery.

## What can make the estimate misleading?

The simple formula assumes stable churn, revenue, and margin. It breaks down at zero churn and does not model expansion or changing retention. Do not substitute negative net revenue churn into its denominator.

For those cases, model cohorts (customers acquired in the same period) with explicit retention, revenue, margin, and forecast-horizon assumptions. Compare segments and acquisition channels; a blended average can hide weak economics.

For product designers, LTV:CAC provides business context. Test more immediate outcomes, such as activation and retained usage, before attributing a change in lifetime economics to a redesign.

## Related terms

- [Churn Mitigation](/glossary/churn-mitigation-architecture.html)
- [Product-Led Growth (PLG)](/glossary/product-led-growth-plg.html)
- [Activation Metric](/glossary/activation-metric.html)

## Sources

- [SaaS Metrics 2.0: Detailed Definitions, David Skok](https://www.forentrepreneurs.com/saas-metrics-2-definitions/)
- [SaaS Metrics 2.0, David Skok](https://www.forentrepreneurs.com/saas-metrics-2/)
- [What is the CAC payback period?, Stripe](https://stripe.com/resources/more/what-is-the-cac-payback-period)
- [CAC in SaaS, Stripe](https://stripe.com/resources/more/cac-in-saas)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/ltv-to-cac-ratio.html#webpage",
                "url": "https://lexkonovalov.com/glossary/ltv-to-cac-ratio.html",
                "name": "LTV:CAC Ratio: Formula & Example | Product Design Glossary",
                "description": "Learn how to calculate LTV:CAC using gross margin, work through a SaaS example, and interpret the 3:1 benchmark alongside churn and CAC payback.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/ltv-to-cac-ratio.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/ltv-to-cac-ratio.html#breadcrumbs"
                },
                "citation": [
                      "https://www.forentrepreneurs.com/saas-metrics-2-definitions/",
                      "https://www.forentrepreneurs.com/saas-metrics-2/",
                      "https://stripe.com/resources/more/what-is-the-cac-payback-period",
                      "https://stripe.com/resources/more/cac-in-saas"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/ltv-to-cac-ratio.html#term",
                "name": "LTV to CAC Ratio",
                "termCode": "ltv-to-cac-ratio",
                "description": "The LTV to CAC ratio compares customer lifetime value (LTV) with customer acquisition cost (CAC). In the gross-margin-adjusted SaaS calculation used here, LTV represents expected lifetime gross profit, rather than revenue alone.",
                "url": "https://lexkonovalov.com/glossary/ltv-to-cac-ratio.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/ltv-to-cac-ratio.html#webpage"
                },
                "alternateName": [
                      "LTV:CAC",
                      "LTV/CAC ratio"
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
                "@id": "https://lexkonovalov.com/glossary/ltv-to-cac-ratio.html#breadcrumbs",
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
                            "name": "LTV to CAC Ratio",
                            "item": "https://lexkonovalov.com/glossary/ltv-to-cac-ratio.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "096",
    "name": "Activation Metric",
    "slug": "activation-metric",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "An activation metric measures whether new users or accounts reach a milestone that indicates initial product value. An activation event records the behavior used to identify that milestone. The activation rate is the percentage of eligible new users or accounts that reach it within a specified time window.",
    "purpose": "Serves as the primary operational target for product onboarding teams, directly correlating with sustained long-term user retention.",
    "keyConcepts": [
      "\"Aha! moment\"",
      "early behavioral threshold",
      "onboarding milestone",
      "retention correlation."
    ],
    "howItWorks": "Data teams correlate early user actions with 90-day retention curves, discovering leading indicators (e.g., Slack's \"2,000 messages sent\" or Facebook's \"7 friends in 10 days\").",
    "relatedTerms": [
      "Time-to-Value (TTV)",
      "Product-Led Growth (PLG)",
      "Conversion Funnel",
      "Product Telemetry & Analytics",
      "User Retention"
    ],
    "seoTitle": "Activation Metric and Rate | Product Design Glossary",
    "seoDescription": "Learn how to choose an activation event, calculate activation rate, and check whether early product behavior is associated with later retention.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/activation-metric.html",
    "sources": [
      "Mastering Engagement Playbook, Amplitude (https://info.amplitude.com/rs/138-CDN-550/images/Mastering_Engagement_Playbook_02_26_19_Amplitude.pdf)",
      "How Amplitude calculates retention (https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation)",
      "Time to Value, Amplitude (https://amplitude.com/blog/time-to-value-drives-user-retention)"
    ],
    "contentMarkdown": `# Activation Metric

An activation metric measures whether new users or accounts reach a milestone that indicates initial product value. An activation event records the behavior used to identify that milestone. The activation rate is the percentage of eligible new users or accounts that reach it within a specified time window.

## How do you choose an activation event?

Start with the outcome people came for. In an invoicing product, account creation and opening a template are setup steps. Sending a first invoice is a stronger candidate when the product’s job is to help businesses bill their clients. If users can send test invoices, distinguish those from real ones in the event definition.

Use research to check whether the action reflects progress users care about. Then use behavioral data to test whether it is associated with later meaningful use. Some products need a milestone made up of several actions. In a shared workspace, for example, value may depend on two people completing a task together.

## How do you calculate activation rate?

**Activation rate = eligible new users or accounts that reach the milestone within the window ÷ all eligible new users or accounts in the cohort × 100.**

In the invoicing example, count new accounts that send a first real invoice within seven days of signup. If 120 of 200 eligible accounts do so, seven-day activation is **60%**. Count each account once, including accounts where several teammates send invoices. Report the cohort after every account has had seven days to activate.

## How do you validate the milestone?

Compare later usage for accounts that reach the milestone and accounts that do not reach it by day seven. Use a later outcome both groups can reach, such as sending any real invoice during days 15–30 after signup. A second invoice would require a first and would favor accounts that have already sent one. Set the same observation window and check whether the pattern holds across comparable cohorts.

An association can help you choose a milestone. It cannot establish that prompting the action will improve [user retention](/glossary/user-retention.html). Accounts with more urgent invoicing needs may be more likely to do both. Test a change that helps users achieve the outcome and check its effect on activation and later use.

Read activation rate alongside [time to value](/glossary/time-to-value-ttv.html). One tells you how many accounts reached the milestone within a window. The other tells you how long it took for accounts that reached it.

## Related terms

- [Time-to-Value (TTV)](/glossary/time-to-value-ttv.html)
- [Product-Led Growth (PLG)](/glossary/product-led-growth-plg.html)
- [Conversion Funnel](/glossary/conversion-funnel-architecture.html)
- [Product Telemetry & Analytics](/glossary/product-telemetry-analytics.html)

## Sources

- [Mastering Engagement Playbook, Amplitude](https://info.amplitude.com/rs/138-CDN-550/images/Mastering_Engagement_Playbook_02_26_19_Amplitude.pdf)
- [How Amplitude calculates retention](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation)
- [Time to Value, Amplitude](https://amplitude.com/blog/time-to-value-drives-user-retention)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/activation-metric.html#webpage",
                "url": "https://lexkonovalov.com/glossary/activation-metric.html",
                "name": "Activation Metric and Rate | Product Design Glossary",
                "description": "Learn how to choose an activation event, calculate activation rate, and check whether early product behavior is associated with later retention.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/activation-metric.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/activation-metric.html#breadcrumbs"
                },
                "citation": [
                      "https://info.amplitude.com/rs/138-CDN-550/images/Mastering_Engagement_Playbook_02_26_19_Amplitude.pdf",
                      "https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation",
                      "https://amplitude.com/blog/time-to-value-drives-user-retention"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/activation-metric.html#term",
                "name": "Activation Metric",
                "termCode": "activation-metric",
                "description": "An activation metric measures whether new users or accounts reach a milestone that indicates initial product value. An activation event records the behavior used to identify that milestone. The activation rate is the percentage of eligible new users or accounts that reach it within a specified time window.",
                "url": "https://lexkonovalov.com/glossary/activation-metric.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/activation-metric.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/activation-metric.html#breadcrumbs",
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
                            "name": "Activation Metric",
                            "item": "https://lexkonovalov.com/glossary/activation-metric.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "097",
    "name": "Time-to-Value (TTV)",
    "slug": "time-to-value-ttv",
    "alternateName": [
      "Time to Value",
      "TTV"
    ],
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Time to value (TTV) is the elapsed time between a defined starting point and the first meaningful outcome a user or account gets from a product. Teams measure it in units of time, such as minutes, hours, or days.",
    "purpose": "Reduces early abandonment by eliminating friction, unnecessary setup steps, and cognitive hurdles during onboarding.",
    "keyConcepts": [
      "Friction reduction",
      "progressive onboarding",
      "immediate utility",
      "deferred setup."
    ],
    "howItWorks": "Designers streamline first-run wizards, defer registration forms, provide interactive templates, and utilize sample data so users experience core value immediately.",
    "relatedTerms": [
      "Activation Metric",
      "Product-Led Growth (PLG)",
      "Progressive Disclosure"
    ],
    "seoTitle": "Time to Value (TTV) | Product Design Glossary",
    "seoDescription": "Learn how to measure time to value from a defined start to a meaningful outcome, and why to report it alongside the share that reaches value.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/time-to-value-ttv.html",
    "sources": [
      "Time to Value, Amplitude (https://amplitude.com/blog/time-to-value-drives-user-retention)",
      "How Amplitude calculates retention (https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation)"
    ],
    "contentMarkdown": `# Time-to-Value (TTV)

Time to value (TTV) is the elapsed time between a defined starting point and the first meaningful outcome a user or account gets from a product. Teams measure it in units of time, such as minutes, hours, or days.

## How do you measure time to value?

Define the unit, start, and end. In an invoicing tool, the unit might be a new account, the start might be signup, and the end might be the first real invoice sent. For an account that signs up at 9 a.m. and sends its first invoice at 3 p.m. that day, TTV is **six hours**.

Choose an endpoint that reflects value for your users. If your product uses the first invoice sent as its [activation event](/glossary/activation-metric.html), time to activation and your operational measure of TTV use the same timestamps. If activation measures an earlier setup milestone, document the difference.

## Why report time alongside activation rate?

Suppose you compare two signup cohorts, each with 200 accounts and seven full days of observation.

| Cohort | Sent a real invoice within seven days | Median time among those accounts |
|---|---:|---:|
| Earlier cohort | 120 of 200 (60%) | 24 hours |
| Later cohort | 100 of 200 (50%) | 12 hours |

In the later cohort, the median was lower among accounts that sent an invoice. Fewer accounts reached the milestone overall. Accounts that never sent an invoice within seven days are excluded from both medians and remain in the activation-rate denominator. Compare both figures using the same eligibility rules and observation window.

## How can design reduce time to value?

Observe where people spend time before the milestone. A delay may come from the interface, missing information, or work that needs to happen outside the product. In the invoicing example, users might pause because they cannot see what a client will receive. A preview can help them check the invoice before sending.

Track the outcome after a change. A shorter setup flow can save clicks without changing elapsed time. Check for accidental sends and track the share of new accounts reaching the milestone.

## Related terms

- [Activation Metric](/glossary/activation-metric.html)
- [Product-Led Growth (PLG)](/glossary/product-led-growth-plg.html)
- [Progressive Disclosure](/glossary/progressive-disclosure.html)

## Sources

- [Time to Value, Amplitude](https://amplitude.com/blog/time-to-value-drives-user-retention)
- [How Amplitude calculates retention](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/time-to-value-ttv.html#webpage",
                "url": "https://lexkonovalov.com/glossary/time-to-value-ttv.html",
                "name": "Time to Value (TTV) | Product Design Glossary",
                "description": "Learn how to measure time to value from a defined start to a meaningful outcome, and why to report it alongside the share that reaches value.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/time-to-value-ttv.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/time-to-value-ttv.html#breadcrumbs"
                },
                "citation": [
                      "https://amplitude.com/blog/time-to-value-drives-user-retention",
                      "https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/time-to-value-ttv.html#term",
                "name": "Time-to-Value (TTV)",
                "termCode": "time-to-value-ttv",
                "description": "Time to value (TTV) is the elapsed time between a defined starting point and the first meaningful outcome a user or account gets from a product. Teams measure it in units of time, such as minutes, hours, or days.",
                "url": "https://lexkonovalov.com/glossary/time-to-value-ttv.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/time-to-value-ttv.html#webpage"
                },
                "alternateName": [
                      "Time to Value",
                      "TTV"
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
                "@id": "https://lexkonovalov.com/glossary/time-to-value-ttv.html#breadcrumbs",
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
                            "name": "Time-to-Value (TTV)",
                            "item": "https://lexkonovalov.com/glossary/time-to-value-ttv.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "098",
    "name": "Churn Mitigation",
    "slug": "churn-mitigation-architecture",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Churn mitigation is the work of reducing avoidable customer loss. In a subscription product, it includes addressing problems that lead customers to leave and helping them recover from billing issues that could end a subscription unintentionally.",
    "purpose": "Protects recurring revenue and customer lifetime value by detecting, preventing, and recovering from both voluntary cancellations and involuntary payment failures.",
    "keyConcepts": [
      "Voluntary churn",
      "Involuntary churn",
      "Smart retries",
      "Usage drop signal",
      "Retention recovery window"
    ],
    "howItWorks": "Differentiates voluntary from involuntary loss, deploying automated dunning and retries for billing issues, while analyzing behavioral drops to provide targeted retention interventions, pauses, or downgrades.",
    "relatedTerms": [
      "Product Telemetry & Analytics",
      "LTV to CAC Ratio",
      "Activation Metric",
      "User Retention"
    ],
    "seoTitle": "Churn Mitigation in SaaS | Product Design Glossary",
    "sources": [
      "Customer churn, Stripe (https://stripe.com/resources/more/customer-churn-101-what-it-is-why-it-happens-and-what-businesses-can-do-about-it)",
      "Automate payment retries, Stripe Docs (https://docs.stripe.com/billing/revenue-recovery/smart-retries)"
    ],
    "seoDescription": "Learn how to distinguish voluntary and involuntary churn, design a response for each, and measure sustained retention in a subscription product.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/churn-mitigation-architecture.html",
    "alternateName": [
      "Churn Mitigation Architecture",
      "Churn Reduction"
    ],
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/churn-mitigation-architecture.html#webpage",
                "url": "https://lexkonovalov.com/glossary/churn-mitigation-architecture.html",
                "name": "Churn Mitigation in SaaS | Product Design Glossary",
                "description": "Learn how to distinguish voluntary and involuntary churn, design a response for each, and measure sustained retention in a subscription product.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/churn-mitigation-architecture.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/churn-mitigation-architecture.html#breadcrumbs"
                },
                "citation": [
                      "https://stripe.com/resources/more/customer-churn-101-what-it-is-why-it-happens-and-what-businesses-can-do-about-it",
                      "https://docs.stripe.com/billing/revenue-recovery/smart-retries"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/churn-mitigation-architecture.html#term",
                "name": "Churn Mitigation",
                "termCode": "churn-mitigation-architecture",
                "description": "Churn mitigation is the work of reducing avoidable customer loss. In a subscription product, it includes addressing problems that lead customers to leave and helping them recover from billing issues that could end a subscription unintentionally.",
                "url": "https://lexkonovalov.com/glossary/churn-mitigation-architecture.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/churn-mitigation-architecture.html#webpage"
                },
                "alternateName": [
                      "Churn Mitigation Architecture",
                      "Churn Reduction"
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
                "@id": "https://lexkonovalov.com/glossary/churn-mitigation-architecture.html#breadcrumbs",
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
                            "name": "Churn Mitigation",
                            "item": "https://lexkonovalov.com/glossary/churn-mitigation-architecture.html"
                      }
                ]
          }
    ],
    "contentMarkdown": `# Churn Mitigation

Churn mitigation is the work of reducing avoidable customer loss. In a subscription product, it includes addressing problems that lead customers to leave and helping them recover from billing issues that could end a subscription unintentionally.

## What causes customer churn?

**Voluntary churn** occurs when a customer chooses to end a subscription or lets it expire intentionally. **Involuntary churn** occurs when the subscription ends for reasons such as an unresolved payment failure, even though the customer may want to continue. A failed charge is a billing event. Count churn when the account meets your definition of having left. For example, count it when a subscription ends after an unsuccessful recovery period.

A drop in usage can tell you where to investigate. In a monthly invoicing product, fewer invoice sends may reflect seasonality, a broken workflow, or a customer no longer needing the service. Check the pattern against the customer’s normal usage and look for evidence of the cause.

## What should the product do?

| Situation | Product response |
|---|---|
| The customer cannot complete a recurring task | Diagnose the barrier with product data and research. Fix it or offer relevant help. |
| The subscription no longer fits the customer’s needs | Explain any suitable downgrade or pause. Keep cancellation easy to find and explain when access ends. |
| A renewal payment fails | Explain what happened, how to update payment details, and what happens next. Use retries where the payment provider and failure reason allow them. |

## How do you measure the result?

For one definition of monthly customer churn, divide the number of paying accounts from the start of the month that are no longer paying at month-end by the number of paying accounts at the start. If 12 of 400 starting accounts leave under this rule, monthly customer churn is **3%**. This month-end measure treats an account that leaves and returns before month-end as still paying. A count of cancellations during the month answers a different question.

Measure each intervention against the problem it addresses. For billing recovery, track the share of accounts with a failed renewal that recover within a stated period. For a downgrade or pause, check whether customers remain subscribed or return to paid use over later billing cycles. Track complaints and support contacts alongside the outcome. If completed cancellations fall, check how many customers remain subscribed over the next billing cycle and whether users can still cancel without assistance.

## Related terms

- [Product Telemetry & Analytics](/glossary/product-telemetry-analytics.html)
- [LTV to CAC Ratio](/glossary/ltv-to-cac-ratio.html)
- [Activation Metric](/glossary/activation-metric.html)
- [User Retention](/glossary/user-retention.html)

## Sources

- [Customer churn, Stripe](https://stripe.com/resources/more/customer-churn-101-what-it-is-why-it-happens-and-what-businesses-can-do-about-it)
- [Automate payment retries, Stripe Docs](https://docs.stripe.com/billing/revenue-recovery/smart-retries)`
  },
  {
    "id": "099",
    "name": "Feature Flag Strategy",
    "slug": "feature-flag-strategy",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "A feature flag strategy defines how a team uses configurable switches to control which users or accounts get a feature. Flags let teams deploy code separately from exposing it. A strategy covers who gets access, how the team checks the release, what happens when a flag is turned off, and when the team can remove it.",
    "purpose": "Decouples code deployment from feature release, enabling progressive delivery, granular audience segmentation, rapid kill-switches, and trustworthy A/B experimentation.",
    "keyConcepts": [
      "Staged rollout",
      "A/B test toggles",
      "Operational kill-switch",
      "Fallback behavior",
      "Flag cleanup lifecycle"
    ],
    "howItWorks": "Runtime evaluations check user or account attributes against targeted rule configurations, serving experimental or baseline variants while telemetry monitors errors and business metrics before general availability.",
    "relatedTerms": [
      "Continuous Experimentation",
      "A/B Testing (Split Testing)",
      "Design Engineering",
      "DesignOps"
    ],
    "seoTitle": "Feature Flags: Rollouts and A/B Tests | Product Design Glossary",
    "sources": [
      "Feature Toggles, Pete Hodgson (https://martinfowler.com/articles/feature-toggles.html)",
      "Patterns of Trustworthy Experimentation: Pre-Experiment Stage, Microsoft Research (https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)",
      "Patterns of Trustworthy Experimentation: During-Experiment Stage, Microsoft Research (https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/)"
    ],
    "seoDescription": "Learn how to plan feature flags for staged rollouts and experiments. Set eligibility, monitor outcomes, and define fallback behavior and cleanup.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/feature-flag-strategy.html",
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/feature-flag-strategy.html#webpage",
                "url": "https://lexkonovalov.com/glossary/feature-flag-strategy.html",
                "name": "Feature Flags: Rollouts and A/B Tests | Product Design Glossary",
                "description": "Learn how to plan feature flags for staged rollouts and experiments. Set eligibility, monitor outcomes, and define fallback behavior and cleanup.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/feature-flag-strategy.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/feature-flag-strategy.html#breadcrumbs"
                },
                "citation": [
                      "https://martinfowler.com/articles/feature-toggles.html",
                      "https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/",
                      "https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/feature-flag-strategy.html#term",
                "name": "Feature Flag Strategy",
                "termCode": "feature-flag-strategy",
                "description": "A feature flag strategy defines how a team uses configurable switches to control which users or accounts get a feature. Flags let teams deploy code separately from exposing it. A strategy covers who gets access, how the team checks the release, what happens when a flag is turned off, and when the team can remove it.",
                "url": "https://lexkonovalov.com/glossary/feature-flag-strategy.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/feature-flag-strategy.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/feature-flag-strategy.html#breadcrumbs",
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
                            "name": "Feature Flag Strategy",
                            "item": "https://lexkonovalov.com/glossary/feature-flag-strategy.html"
                      }
                ]
          }
    ],
    "contentMarkdown": `# Feature Flag Strategy

A feature flag strategy defines how a team uses configurable switches to control which users or accounts get a feature. Flags let teams deploy code separately from exposing it. A strategy covers who gets access, how the team checks the release, what happens when a flag is turned off, and when the team can remove it.

## How do rollouts and experiments use flags?

| Use | What the flag controls | What the team decides |
|---|---|---|
| Staged rollout | Which eligible accounts can use the feature as exposure expands | Whether the feature is ready for more accounts |
| A/B test | Which experience each assigned account receives | Whether the tested change affects a predefined outcome |
| Operational switch | Whether a capability stays enabled during a problem | When to use the fallback and how to recover |

A flag can deliver the variants in an [A/B test](/glossary/ab-testing-split-testing.html). Estimating the effect still requires sound assignment, tracking, and analysis. A staged rollout can surface problems, but changes in metrics as exposure expands can also reflect changes in the audience.

## Example of a staged rollout

An invoicing team releases a new preview to internal accounts, then to a small share of eligible customer accounts. Keep exposure consistent within an account so teammates working on the same invoice see the same experience. Before expanding, the team reviews preview failures and the share of eligible exposed accounts that send a first real invoice within seven days of signup. It agrees in advance which problems warrant pausing, such as a loss of draft data.

The team tests what happens if it switches back while an invoice draft is open. Check that the draft remains available in the original experience. Previously sent invoices should still appear in the customer’s history. Plan a separate recovery path for changes that persist after the flag is turned off.

## What should a flag plan include?

- **Purpose and owner.** Record the decision the flag supports and who can change it.
- **Eligibility and fallback.** Define the audience, assignment rules, and the default when flag configuration is unavailable. Test both experiences.
- **Monitoring and response.** Specify which signals prompt a pause, an expansion, or a switch back.
- **Cleanup.** Give temporary flags a review date. After the release decision, remove the flag and unused code path when it is safe to do so.

## Related terms

- [Continuous Experimentation](/glossary/continuous-experimentation.html)
- [A/B Testing (Split Testing)](/glossary/ab-testing-split-testing.html)
- [Design Engineering](/glossary/design-engineering.html)
- [DesignOps](/glossary/designops.html)

## Sources

- [Feature Toggles, Pete Hodgson](https://martinfowler.com/articles/feature-toggles.html)
- [Patterns of Trustworthy Experimentation: Pre-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)
- [Patterns of Trustworthy Experimentation: During-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/)`
  },
  {
    "id": "100",
    "name": "Value Proposition Canvas",
    "slug": "value-proposition-canvas",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "The Value Proposition Canvas is a strategic mapping tool that maps a target customer’s profile (Jobs, Pains, Gains) against an organization’s value map (Products & Services, Pain Relievers, Gain Creators).",
    "purpose": "Ensures structural alignment between product feature development and genuine user needs, preventing companies from launching unviable products.",
    "keyConcepts": [
      "Customer profile",
      "value map",
      "pain relievers",
      "gain creators",
      "solution fit."
    ],
    "howItWorks": "Cross-functional squads map validated customer pains and jobs on the right canvas side, ensuring every proposed product capability on the left directly alleviates an identified pain or unlocks a gain.",
    "relatedTerms": [
      "Jobs to Be Done (JTBD)",
      "Product Discovery",
      "Product Strategy Canvas",
      "Product–Market Fit (PMF)"
    ],
    "seoTitle": "The Value Proposition Canvas: Designing User-Centered Products",
    "sources": [
      "Alexander Osterwalder et al., Value Proposition Design, Wiley",
      "Strategyzer Methodology"
    ]
  },
  {
    "id": "101",
    "name": "Noun Foraging",
    "slug": "noun-foraging",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Proprietary / Framework-Specific",
    "definition": "Noun foraging is a discovery activity in Object-Oriented UX (OOUX) that uses nouns from research to identify candidate objects. The goal is to find the things people recognize and work with, such as trips, bookings, and travelers.",
    "purpose": "Identifies core mental model entities from user research and domain materials, preventing premature UI wireframing before objects are defined.",
    "keyConcepts": [
      "SIP test",
      "Structure Instances Purpose",
      "Candidate objects",
      "Entity discovery"
    ],
    "howItWorks": "Extracts nouns from user transcripts, documentation, and existing interfaces, then filters them through the SIP criteria (Structure, Instances, Purpose) to separate true domain objects from attributes or actions.",
    "relatedTerms": [
      "ORCA Framework",
      "Object Mapping",
      "Nested Object Matrix",
      "Object Guide"
    ],
    "seoTitle": "Noun Foraging in OOUX | Product Design Glossary",
    "seoDescription": "Learn how noun foraging turns UX research into candidate objects. A travel operations example shows how to use structure, instances, and purpose.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/noun-foraging.html",
    "sources": [
      "Introducing ORCA, Sophia V. Prater (https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)",
      "Object-Oriented UX with Sophia Prater, InfoQ interview (https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)",
      "Object-Oriented UX, Sophia V. Prater (https://alistapart.com/article/object-oriented-ux/)"
    ],
    "contentMarkdown": `# Noun Foraging

Noun foraging is a discovery activity in Object-Oriented UX (OOUX) that uses nouns from research to identify candidate objects. The goal is to find the things people recognize and work with, such as trips, bookings, and travelers.

## How do you do noun foraging?

1. **Start with evidence.** Review interview notes, support conversations, or a walkthrough of an existing process. Record the noun and the sentence it came from.
2. **Group terms by meaning.** A single concept may have multiple names. Keep similar terms separate until you know they refer to the same thing.
3. **Look for structure, instances, and purpose.** Sophia Prater uses this check, called SIP, to evaluate possible objects. Ask what information and relationships give the thing structure, what individual examples look like, and why people need to work with it.
4. **Validate the shortlist.** Ask users or domain experts to walk through a real case. Record open questions before taking the candidates into the relationship model.

Frequency can help you spot a candidate. An infrequently mentioned object may still matter when it controls an important handoff or exception.

## Example from travel operations

Imagine an agent says, “I open the trip, check which traveler it’s for, and look at the booking status before I call the supplier.” That sentence offers several candidates.

| Term in the notes | What to investigate |
|---|---|
| Trip | The agent recognizes individual trips and uses each one to gather bookings and travelers. Example instance: Trip T-104. |
| Traveler | The agent can find a person and view their other trips. Keep Traveler on the shortlist. |
| Booking | Booking B-52 has its own reference and status. Agents can check or request changes to it. |
| Status | In this example it describes the booking. Capture it as a candidate attribute. |
| Supplier | Ask whether agents look up supplier records or only need a supplier name on the booking in this scope. |

Ask an agent to show you a “reservation” and a “booking.” If they point to different records or stages, preserve the distinction in the shortlist.

## What comes next in ORCA?

Noun foraging helps define the Objects in [ORCA](/glossary/orca-framework.html). Take the shortlist into a [nested object matrix](/glossary/nested-object-matrix.html) to investigate relationships. Use an [Object Guide](/glossary/object-guide.html) to capture definitions once the team has tested what the terms mean.

## Related terms

- [ORCA Framework](/glossary/orca-framework.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Nested Object Matrix](/glossary/nested-object-matrix.html)
- [Object Guide](/glossary/object-guide.html)

## Sources

- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [Object-Oriented UX with Sophia Prater, InfoQ interview](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)
- [Object-Oriented UX, Sophia V. Prater](https://alistapart.com/article/object-oriented-ux/)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/noun-foraging.html#webpage",
                "url": "https://lexkonovalov.com/glossary/noun-foraging.html",
                "name": "Noun Foraging in OOUX | Product Design Glossary",
                "description": "Learn how noun foraging turns UX research into candidate objects. A travel operations example shows how to use structure, instances, and purpose.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/noun-foraging.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/noun-foraging.html#breadcrumbs"
                },
                "citation": [
                      "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
                      "https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/",
                      "https://alistapart.com/article/object-oriented-ux/"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/noun-foraging.html#term",
                "name": "Noun Foraging",
                "termCode": "noun-foraging",
                "description": "Noun foraging is a discovery activity in Object-Oriented UX (OOUX) that uses nouns from research to identify candidate objects. The goal is to find the things people recognize and work with, such as trips, bookings, and travelers.",
                "url": "https://lexkonovalov.com/glossary/noun-foraging.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/noun-foraging.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/noun-foraging.html#breadcrumbs",
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
                            "name": "Noun Foraging",
                            "item": "https://lexkonovalov.com/glossary/noun-foraging.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "102",
    "name": "Nested Object Matrix",
    "slug": "nested-object-matrix",
    "alternateName": [
      "NOM",
      "Nested-Object Matrix"
    ],
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Proprietary / Framework-Specific",
    "definition": "A Nested Object Matrix (NOM) is an ORCA grid that lists the same object types across its columns and down its rows. Each intersection describes how instances of one type relate to instances of the other. Teams use it to investigate relationships and identify where users may need access to related records.",
    "purpose": "Maps bidirectional relationships between domain objects to expose navigational pathways and prevent isolated or dead-end views.",
    "keyConcepts": [
      "Host-target grid",
      "Bidirectional relationships",
      "Cardinality mapping",
      "Nested navigation"
    ],
    "howItWorks": "Plots object types as columns (hosts) and rows (nested targets), testing each intersection in both directions to establish explicit connection cardinality and user navigation access.",
    "relatedTerms": [
      "ORCA Framework",
      "Object Mapping",
      "Noun Foraging",
      "Cardinality (UX Architecture)",
      "ORCA Relationship Requirements (MCSFD)",
      "Junction Object"
    ],
    "seoTitle": "Nested Object Matrix in OOUX | Product Design Glossary",
    "seoDescription": "Build a Nested Object Matrix in ORCA. Use a travel operations example to map relationships in both directions and identify useful navigation paths.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/nested-object-matrix.html",
    "sources": [
      "Introducing ORCA, Sophia V. Prater (https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)",
      "Object-Oriented UX with Sophia Prater, InfoQ interview (https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)",
      "Object-Oriented UX, Sophia V. Prater (https://alistapart.com/article/object-oriented-ux/)"
    ],
    "contentMarkdown": `# Nested Object Matrix

A Nested Object Matrix (NOM) is an ORCA grid that lists the same object types across its columns and down its rows. Each intersection describes how instances of one type relate to instances of the other. Teams use it to investigate relationships and identify where users may need access to related records.

## How do you read a Nested Object Matrix?

In Sophia Prater’s convention, the top row contains the **host objects**. Read a cell by starting with the column heading and describing how that host relates to the object type on the left. Use verbs and counts where you know them. To check the reverse direction, swap the row and column. Trip → Booking answers which bookings are on a trip. Booking → Trip answers which trip owns the booking.

## A Nested Object Matrix for travel operations

In this example, a trip can exist before it has a booking. Each booking belongs to exactly one trip. Travelers may appear on multiple trips.

| Related object ↓ / Host object → | Trip | Booking | Traveler |
|---|---|---|---|
| Trip | — | Belongs to exactly one trip | Can be linked to multiple trips |
| Booking | Has zero or more bookings | — | — |
| Traveler | Can include multiple travelers | — | — |

A dash marks a cell with no direct relationship in this example. In a working matrix, mark an untested relationship as “To verify” so the team can distinguish it from an empty cell. For example, a booking can lead to travelers through its trip. If the product needs to identify which travelers are covered by a particular booking, investigate that as a separate relationship.

## How do you build the matrix?

1. **List the same object types on both axes.** Start with the shortlist from [noun foraging](/glossary/noun-foraging.html).
2. **Describe each relevant relationship in plain language.** Put distinct relationships in the same cell when the same object types connect in several ways.
3. **Check minimums and maximums in both directions.** “Has bookings” leaves open whether the first booking is required. Write the [cardinality](/glossary/cardinality-ux-architecture.html) explicitly when a rule is known. Teams use [ORCA Relationship Requirements (MCSFD)](/glossary/orca-relationship-requirements.html) to detail mechanics, sorting, and filtering, and introduce a [Junction Object](/glossary/junction-object.html) when the connection itself carries data.
4. **Decide what users need to reach.** Test whether an agent who opens a booking from search can find its trip. Check that the trip is visible to that agent before adding the link.

The matrix focuses on relationships. The [object map](/glossary/object-mapping.html) builds on those findings to organize the information that describes each object. A [CTA Matrix](/glossary/cta-matrix.html) records what different roles can do with them.

## Related terms

- [ORCA Framework](/glossary/orca-framework.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Noun Foraging](/glossary/noun-foraging.html)
- [Cardinality (UX Architecture)](/glossary/cardinality-ux-architecture.html)

## Sources

- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [Object-Oriented UX with Sophia Prater, InfoQ interview](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)
- [Object-Oriented UX, Sophia V. Prater](https://alistapart.com/article/object-oriented-ux/)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/nested-object-matrix.html#webpage",
                "url": "https://lexkonovalov.com/glossary/nested-object-matrix.html",
                "name": "Nested Object Matrix in OOUX | Product Design Glossary",
                "description": "Build a Nested Object Matrix in ORCA. Use a travel operations example to map relationships in both directions and identify useful navigation paths.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/nested-object-matrix.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/nested-object-matrix.html#breadcrumbs"
                },
                "citation": [
                      "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
                      "https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/",
                      "https://alistapart.com/article/object-oriented-ux/"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/nested-object-matrix.html#term",
                "name": "Nested Object Matrix",
                "termCode": "nested-object-matrix",
                "description": "A Nested Object Matrix (NOM) is an ORCA grid that lists the same object types across its columns and down its rows. Each intersection describes how instances of one type relate to instances of the other. Teams use it to investigate relationships and identify where users may need access to related records.",
                "url": "https://lexkonovalov.com/glossary/nested-object-matrix.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/nested-object-matrix.html#webpage"
                },
                "alternateName": [
                      "NOM",
                      "Nested-Object Matrix"
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
                "@id": "https://lexkonovalov.com/glossary/nested-object-matrix.html#breadcrumbs",
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
                            "name": "Nested Object Matrix",
                            "item": "https://lexkonovalov.com/glossary/nested-object-matrix.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "103",
    "name": "CTA Matrix",
    "slug": "cta-matrix",
    "alternateName": [
      "Call-to-Action Matrix"
    ],
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Proprietary / Framework-Specific",
    "definition": "A CTA Matrix, or call-to-action matrix, is an ORCA grid that maps user roles to object types and records the actions each role needs to take on each object. It gives teams a starting point for defining permissions, conditions, and interaction requirements before placing controls on screens.",
    "purpose": "Connects user roles, objects, and actions systematically, defining CRUD and custom intent calls before designing visual buttons or menus.",
    "keyConcepts": [
      "Role-object actions",
      "CRUD operations",
      "Action prerequisites",
      "State changes"
    ],
    "howItWorks": "Lays out user roles against domain objects to document permitted actions, conditional constraints, and resulting object state transitions.",
    "relatedTerms": [
      "ORCA Framework",
      "Object Mapping",
      "Nested Object Matrix",
      "State Transition Matrix"
    ],
    "seoTitle": "CTA Matrix in OOUX | Product Design Glossary",
    "seoDescription": "Learn how an ORCA CTA Matrix maps roles to actions on objects. See a booking example with permissions, eligibility rules, and cancellation feedback.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/cta-matrix.html",
    "sources": [
      "Introducing ORCA, Sophia V. Prater (https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)",
      "Object-Oriented UX with Sophia Prater, InfoQ interview (https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)",
      "Prioritizing Prioritization for Product Designers, Sophia V. Prater (https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)"
    ],
    "contentMarkdown": `# CTA Matrix

A CTA Matrix, or call-to-action matrix, is an ORCA grid that maps user roles to object types and records the actions each role needs to take on each object. It gives teams a starting point for defining permissions, conditions, and interaction requirements before placing controls on screens.

## What goes in a CTA Matrix?

Put roles down the rows and object types across the columns. Write actions as verbs in the cells. A role can describe a person’s relationship to the object, such as the agent assigned to a trip, when that relationship affects what they can do.

Start with what each role needs to do. Review access and business rules before treating a proposed action as an approved requirement. A verb such as “Request cancellation” can become a button, menu item, or part of a guided workflow once the team designs the interaction.

## CTA Matrix example for travel operations

Consider a tool where an assigned agent manages the trip and a support reviewer investigates issues without changing records. This example focuses on a few actions from each role.

| Role | Trip | Booking | Traveler |
|---|---|---|---|
| Assigned agent | View trip, add booking | View booking, request cancellation if eligible | View traveler, update contact details if permitted |
| Support reviewer | View trip | View booking | View permitted traveler details |

Turn “Request cancellation” into a user story. An assigned agent needs to request cancellation on an eligible confirmed booking when a traveler changes plans. When the request succeeds, show Cancellation pending so the agent knows the supplier still has to respond. The supplier’s response determines the next state.

## How do you turn matrix entries into requirements?

1. **Clarify who can act.** Check role, assignment, and record access separately where they affect the action.
2. **Describe when the action is available.** Record the booking state and eligibility rules. Mark unresolved rules for follow-up.
3. **Specify the result and feedback.** Include what the user sees after success, a blocked attempt, or a delayed response. Use a [state transition matrix](/glossary/state-transition-matrix.html) to track the lifecycle.
4. **Choose placement in the interface.** Give frequent or time-sensitive actions appropriate prominence. Test whether users can find and understand them where the object appears.

In [ORCA](/glossary/orca-framework.html), teams begin this work during Discovery and expand matrix entries into user stories during Requirements. Use the matrix to agree on who can act. The application enforces those rules when the action is requested.

## Related terms

- [ORCA Framework](/glossary/orca-framework.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Nested Object Matrix](/glossary/nested-object-matrix.html)
- [State Transition Matrix](/glossary/state-transition-matrix.html)

## Sources

- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [Object-Oriented UX with Sophia Prater, InfoQ interview](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)
- [Prioritizing Prioritization for Product Designers, Sophia V. Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/cta-matrix.html#webpage",
                "url": "https://lexkonovalov.com/glossary/cta-matrix.html",
                "name": "CTA Matrix in OOUX | Product Design Glossary",
                "description": "Learn how an ORCA CTA Matrix maps roles to actions on objects. See a booking example with permissions, eligibility rules, and cancellation feedback.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/cta-matrix.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/cta-matrix.html#breadcrumbs"
                },
                "citation": [
                      "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
                      "https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/",
                      "https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/cta-matrix.html#term",
                "name": "CTA Matrix",
                "termCode": "cta-matrix",
                "description": "A CTA Matrix, or call-to-action matrix, is an ORCA grid that maps user roles to object types and records the actions each role needs to take on each object. It gives teams a starting point for defining permissions, conditions, and interaction requirements before placing controls on screens.",
                "url": "https://lexkonovalov.com/glossary/cta-matrix.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/cta-matrix.html#webpage"
                },
                "alternateName": [
                      "Call-to-Action Matrix"
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
                "@id": "https://lexkonovalov.com/glossary/cta-matrix.html#breadcrumbs",
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
                            "name": "CTA Matrix",
                            "item": "https://lexkonovalov.com/glossary/cta-matrix.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "104",
    "name": "Object Guide",
    "slug": "object-guide",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Proprietary / Framework-Specific",
    "definition": "An Object Guide is a structured glossary of the objects in an Object-Oriented UX (OOUX) model. It records what each object means, how people recognize it, and which distinctions the team needs to preserve in product language and requirements. In ORCA, teams develop the guide during the Requirements round.",
    "purpose": "Establishes domain semantic clarity and disambiguation, eliminating synonymous confusion and defining identity attributes for each entity.",
    "keyConcepts": [
      "Domain glossary",
      "Disambiguation",
      "Attribute taxonomy",
      "Controlled vocabulary"
    ],
    "howItWorks": "Documents each object type with canonical definitions, visual and functional identifiers, differentiating examples, and explicit anti-patterns or exclusions.",
    "relatedTerms": [
      "ORCA Framework",
      "Object Mapping",
      "Noun Foraging",
      "CTA Matrix"
    ],
    "seoTitle": "Object Guide in OOUX | Product Design Glossary",
    "seoDescription": "Learn what an Object Guide documents in ORCA. Use a practical Booking entry to define an object, clarify its boundaries, and capture open questions.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/object-guide.html",
    "sources": [
      "Introducing ORCA, Sophia V. Prater (https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)",
      "Prioritizing Prioritization for Product Designers, Sophia V. Prater (https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)",
      "Object-Oriented UX with Sophia Prater, InfoQ interview (https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)"
    ],
    "contentMarkdown": `# Object Guide

An Object Guide is a structured glossary of the objects in an Object-Oriented UX (OOUX) model. It records what each object means, how people recognize it, and which distinctions the team needs to preserve in product language and requirements. In ORCA, teams develop the guide during the Requirements round.

## What should an Object Guide include?

Start with a short definition and a recognizable example. Add the distinctions that affect the work. The fields below are a lightweight starting point for a travel operations product.

| Field | Example entry for Booking |
|---|---|
| Preferred name | Booking |
| Definition | A record used to arrange travel services with a supplier. It tracks the request from draft through the supplier’s response and any later changes. |
| Instance | Booking B-52 for the outbound flight on Trip T-104. |
| Why it matters | Agents use the booking to track the supplier response, check fare rules, and request changes when eligible. |
| Boundary | An Offer contains proposed travel and pricing. A Booking tracks the supplier request. Accepting the offer and confirming the booking are separate events. |
| Key relationship | Each booking belongs to one trip. A trip may exist before it has any bookings. |
| Open question | Do agents use “reservation” as a synonym for Booking, or only after a supplier has confirmed it? |

Use the definition to decide which record owns each status. The Offer can show Accepted while the Booking shows Awaiting confirmation. That tells an agent the traveler has agreed to the offer and the supplier’s response is still outstanding.

## How does the guide work with other ORCA artifacts?

Use the guide to agree on what an object represents. The [nested object matrix](/glossary/nested-object-matrix.html) records its relationships across the model. The [CTA Matrix](/glossary/cta-matrix.html) records actions by role, and the [object map](/glossary/object-mapping.html) organizes the information each object needs. Link to those artifacts when an entry needs more detail.

## How do you keep an Object Guide useful?

Ask sales and ticketing to classify two records: an offer the traveler accepted and a booking the supplier has yet to confirm. If they disagree on the names or statuses, record the difference and agree on what appears at the handoff.

Review the entry when a change affects its definition, labels, or rules. Link to the decision or research note so the next person can see why the definition changed.

## Related terms

- [ORCA Framework](/glossary/orca-framework.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Noun Foraging](/glossary/noun-foraging.html)
- [CTA Matrix](/glossary/cta-matrix.html)

## Sources

- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [Prioritizing Prioritization for Product Designers, Sophia V. Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)
- [Object-Oriented UX with Sophia Prater, InfoQ interview](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/object-guide.html#webpage",
                "url": "https://lexkonovalov.com/glossary/object-guide.html",
                "name": "Object Guide in OOUX | Product Design Glossary",
                "description": "Learn what an Object Guide documents in ORCA. Use a practical Booking entry to define an object, clarify its boundaries, and capture open questions.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/object-guide.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/object-guide.html#breadcrumbs"
                },
                "citation": [
                      "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
                      "https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e",
                      "https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/object-guide.html#term",
                "name": "Object Guide",
                "termCode": "object-guide",
                "description": "An Object Guide is a structured glossary of the objects in an Object-Oriented UX (OOUX) model. It records what each object means, how people recognize it, and which distinctions the team needs to preserve in product language and requirements. In ORCA, teams develop the guide during the Requirements round.",
                "url": "https://lexkonovalov.com/glossary/object-guide.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/object-guide.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/object-guide.html#breadcrumbs",
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
                            "name": "Object Guide",
                            "item": "https://lexkonovalov.com/glossary/object-guide.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "105",
    "name": "Four UX Fails in OOUX",
    "slug": "ooux-ux-fails",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Proprietary / Framework-Specific",
    "definition": "The four UX fails in Object-Oriented UX (OOUX) are masked, shape-shifting, broken, and isolated objects. Sophia Prater uses these patterns to diagnose why people may struggle to recognize objects, understand them across views, find their actions, or reach related records.",
    "purpose": "Provides a diagnostic framework to audit interfaces for object clarity, preventing disguised, polymorphic, un-actionable, or disconnected entities.",
    "keyConcepts": [
      "Masked objects",
      "Shape-shifter objects",
      "Broken objects",
      "Isolated objects"
    ],
    "howItWorks": "Audits product screens against four failure modes to ensure objects look like themselves, maintain consistent representation across views, provide accessible actions, and link bidirectionally.",
    "relatedTerms": [
      "Object-Oriented UX (OOUX)",
      "ORCA Framework",
      "Object Mapping",
      "Structural Navigation Model"
    ],
    "seoTitle": "Four UX Fails in OOUX | Product Design Glossary",
    "seoDescription": "Review an interface for four OOUX problems: masked, shape-shifting, broken, and isolated objects. See practical examples and fixes for each.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/ooux-ux-fails.html",
    "sources": [
      "The Life-changing Magic of OOUX Tidying Up, Sophia V. Prater (https://speakerdeck.com/sophiavux/the-life-changing-magic-of-ooux-tidying-up)",
      "Designing With ORCA, OOUX (https://ooux.com/offerings/fourfails)"
    ],
    "contentMarkdown": `# Four UX Fails in OOUX

The four UX fails in Object-Oriented UX (OOUX) are masked, shape-shifting, broken, and isolated objects. Sophia Prater uses these patterns to diagnose why people may struggle to recognize objects, understand them across views, find their actions, or reach related records.

## How do you spot the four problems?

| Problem | Example in a travel operations tool | What to change |
|---|---|---|
| Masked object | A proposed Offer and a supplier Booking both appear as “Trip item,” with no indication of which is which. | Give each type a recognizable label and show the details people use to tell them apart. |
| Shape-shifting object | Booking B-52 appears in search with its reference and status, then appears in the trip as an unlabeled date with no visible reference. | Keep identifying cues consistent across views. Choose how much detail each view needs. |
| Broken object | The booking’s status is in one workspace, its fare rules in another, and the cancellation action in a separate admin menu. | Bring the relevant information and actions together around the booking, with access appropriate to the role. |
| Isolated object | An agent opens a booking from search and must start a new search to find its trip, even though they can view both records. | Add a contextual link from the booking to its trip where the agent needs it. |

If the agent recognizes Booking B-52 but cannot find “Request cancellation,” check for a broken object. If they can act on the booking but cannot reach its trip, check for an isolated object.

## How do you run a review?

Pick one object and follow it through a task. For Booking B-52, open the record from search and from its trip. Ask the agent to identify it, check whether cancellation is available, and find the related trip. Observe where they pause, look elsewhere, or mistake one record for another.

Use the [object map](/glossary/object-mapping.html) to check which identifying fields belong on the record, where its actions should appear, and which relationships warrant a link. Fix the issue that interrupts the task first. A compact search result and a full detail page can look different while preserving the cues that help the agent recognize the booking.

## Related terms

- [Object-Oriented UX (OOUX)](/glossary/object-oriented-ux.html)
- [ORCA Framework](/glossary/orca-framework.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Structural Navigation Model](/glossary/structural-navigation-model.html)

## Sources

- [The Life-changing Magic of OOUX Tidying Up, Sophia V. Prater](https://speakerdeck.com/sophiavux/the-life-changing-magic-of-ooux-tidying-up)
- [Designing With ORCA, OOUX](https://ooux.com/offerings/fourfails)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/ooux-ux-fails.html#webpage",
                "url": "https://lexkonovalov.com/glossary/ooux-ux-fails.html",
                "name": "Four UX Fails in OOUX | Product Design Glossary",
                "description": "Review an interface for four OOUX problems: masked, shape-shifting, broken, and isolated objects. See practical examples and fixes for each.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/ooux-ux-fails.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/ooux-ux-fails.html#breadcrumbs"
                },
                "citation": [
                      "https://speakerdeck.com/sophiavux/the-life-changing-magic-of-ooux-tidying-up",
                      "https://ooux.com/offerings/fourfails"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/ooux-ux-fails.html#term",
                "name": "Four UX Fails in OOUX",
                "termCode": "ooux-ux-fails",
                "description": "The four UX fails in Object-Oriented UX (OOUX) are masked, shape-shifting, broken, and isolated objects. Sophia Prater uses these patterns to diagnose why people may struggle to recognize objects, understand them across views, find their actions, or reach related records.",
                "url": "https://lexkonovalov.com/glossary/ooux-ux-fails.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/ooux-ux-fails.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/ooux-ux-fails.html#breadcrumbs",
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
                            "name": "Four UX Fails in OOUX",
                            "item": "https://lexkonovalov.com/glossary/ooux-ux-fails.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "106",
    "name": "Object Prioritization",
    "slug": "object-prioritization",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Proprietary / Framework-Specific",
    "definition": "Object prioritization is the ORCA activity of deciding which objects a release needs and how prominently people should encounter them. It helps teams narrow the scope of an object model and choose how users enter it before designing menus and screens.",
    "purpose": "Aligns system architecture with MVP scope and navigation hierarchy by ranking core domain entities by frequency and business importance.",
    "keyConcepts": [
      "Primary vs secondary objects",
      "Entry points",
      "Structural hierarchy",
      "Scope control"
    ],
    "howItWorks": "Ranks objects based on user task frequency, revenue impact, and dependency ordering to establish top-level navigation versus nested views.",
    "relatedTerms": [
      "ORCA Framework",
      "Object Mapping",
      "Object Guide",
      "Structural Navigation Model"
    ],
    "seoTitle": "Object Prioritization in OOUX | Product Design Glossary",
    "seoDescription": "Learn how ORCA teams choose which objects a release needs and which deserve prominent access. See a worked example for a travel operations tool.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/object-prioritization.html",
    "sources": [
      "Introducing ORCA, Sophia V. Prater (https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)",
      "Prioritizing Prioritization for Product Designers, Sophia V. Prater (https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)",
      "Designing With ORCA, OOUX (https://ooux.com/offerings/fourfails)"
    ],
    "contentMarkdown": `# Object Prioritization

Object prioritization is the ORCA activity of deciding which objects a release needs and how prominently people should encounter them. It helps teams narrow the scope of an object model and choose how users enter it before designing menus and screens.

## What are you prioritizing?

Release scope and navigation prominence are separate decisions. A Booking may be essential to the first release while agents can reach it through a Trip and search. The team can give Bookings a main navigation entry later if agents regularly need to work across trips.

Consider what people need to complete the release’s main tasks, how often they need to find the object on its own, and what other objects or actions depend on it. Use work observations and examples from the [object map](/glossary/object-mapping.html) to make the decision concrete.

## Example of prioritizing objects for a first release

Suppose a travel operations team starts with one goal: let agents find a trip and manage its bookings.

| Candidate | Release decision | How people reach it |
|---|---|---|
| Trip | Include it as the starting point for managing travel. | Main navigation and search. |
| Booking | Include it so agents can track supplier responses and request cancellation. | Trip details and search by booking reference. |
| Traveler | Keep it as a shared record so agents can recognize the person across trips. | From a trip’s traveler list. |
| Supplier | Show the supplier name as booking information. Defer separate supplier profiles until agents need to manage them. | In booking details. |

The supplier decision reduces the release scope to the information agents use to identify a booking. If agents later need to update supplier contacts or see all bookings for a supplier, revisit the model.

## How do you check your decisions?

Walk through a routine task and an exception. In this example, an agent may receive a supplier message with only a booking reference. Check that search gets them to the booking and that the booking links back to the right trip when they have access.

When you combine, defer, or simplify an object, review its relationships, actions, and attributes. Decide which information or behavior the release still needs and where it belongs. Record the evidence that would change your decision, such as agents repeatedly needing a queue of bookings across trips.

## Related terms

- [ORCA Framework](/glossary/orca-framework.html)
- [Object Mapping](/glossary/object-mapping.html)
- [Object Guide](/glossary/object-guide.html)
- [Structural Navigation Model](/glossary/structural-navigation-model.html)

## Sources

- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [Prioritizing Prioritization for Product Designers, Sophia V. Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)
- [Designing With ORCA, OOUX](https://ooux.com/offerings/fourfails)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/object-prioritization.html#webpage",
                "url": "https://lexkonovalov.com/glossary/object-prioritization.html",
                "name": "Object Prioritization in OOUX | Product Design Glossary",
                "description": "Learn how ORCA teams choose which objects a release needs and which deserve prominent access. See a worked example for a travel operations tool.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/object-prioritization.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/object-prioritization.html#breadcrumbs"
                },
                "citation": [
                      "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
                      "https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e",
                      "https://ooux.com/offerings/fourfails"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/object-prioritization.html#term",
                "name": "Object Prioritization",
                "termCode": "object-prioritization",
                "description": "Object prioritization is the ORCA activity of deciding which objects a release needs and how prominently people should encounter them. It helps teams narrow the scope of an object model and choose how users enter it before designing menus and screens.",
                "url": "https://lexkonovalov.com/glossary/object-prioritization.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/object-prioritization.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/object-prioritization.html#breadcrumbs",
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
                            "name": "Object Prioritization",
                            "item": "https://lexkonovalov.com/glossary/object-prioritization.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "107",
    "name": "ORCA Relationship Requirements",
    "slug": "orca-relationship-requirements",
    "alternateName": [
      "MCSFD"
    ],
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Proprietary / Framework-Specific",
    "definition": "ORCA relationship requirements describe how a connection between objects works in a product. Sophia Prater uses MCSFD as a checklist for five decisions: mechanics, cardinality, sorting, filtering, and dependency. Teams use it to turn a relationship they discovered into rules they can design and test.",
    "purpose": "Transforms abstract connections between objects into concrete UI behavior and data rules through a structured 5-part checklist.",
    "keyConcepts": [
      "Mechanics",
      "Cardinality",
      "Sorting",
      "Filtering",
      "Dependency (MCSFD)"
    ],
    "howItWorks": "Applies the MCSFD checklist across every object relationship to define how associations are created, counted, ordered, filtered, and lifecycle-dependent.",
    "relatedTerms": [
      "ORCA Framework",
      "Nested Object Matrix",
      "Cardinality (UX Architecture)",
      "Junction Object"
    ],
    "seoTitle": "ORCA Relationship Requirements (MCSFD) | Product Design Glossary",
    "seoDescription": "Use ORCA’s MCSFD checklist to specify how objects connect, how many records relate, how lists work, and what happens when a linked record changes.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html",
    "sources": [
      "Introducing ORCA, Sophia V. Prater (https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)",
      "Object-Oriented UX with Sophia Prater, InfoQ (https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)",
      "Prioritizing Prioritization for Product Designers, Sophia V. Prater (https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)"
    ],
    "contentMarkdown": `# ORCA Relationship Requirements

ORCA relationship requirements describe how a connection between objects works in a product. Sophia Prater uses MCSFD as a checklist for five decisions: mechanics, cardinality, sorting, filtering, and dependency. Teams use it to turn a relationship they discovered into rules they can design and test.

## What does MCSFD cover?

Take one connection from a [Nested Object Matrix](/glossary/nested-object-matrix.html). In this example, an agent opens Trip T-104 to find Booking B-52 and check whether the supplier has responded.

| Decision | Question | Example rule |
|---|---|---|
| Mechanics | How is the connection created or changed? | Adding a booking from a trip assigns that trip automatically. When adding one elsewhere, the agent selects a trip. |
| Cardinality | How many records can relate in each direction? | A trip can have zero or more bookings. Each booking belongs to exactly one trip. |
| Sorting | Which order helps people scan the related records? | Show the earliest service date first. Put bookings without a service date after dated bookings. |
| Filtering | Which subset helps with a task? | Agents can filter by Awaiting confirmation to find bookings the supplier has yet to confirm. |
| Dependency | What happens to related records when one changes or is removed? | Archiving a trip preserves its linked bookings. Agents with access can still review their history. |

These are product rules for the example. Confirm the equivalent rules with the people who do the work and the team that maintains the system.

## How do these rules affect the design?

A trip with zero bookings needs a clear way for an authorized agent to add the first booking. If a status filter hides all bookings, the empty message can explain that no bookings match and offer to clear the filter. The agent can tell whether they need to create a booking or change the filter.

Apply the checklist in the direction that supports the task. On a Trip, sorting its bookings may matter. On a Booking, there is only one linked Trip, so sorting adds nothing to that view.

Review exceptions before finalizing the rule. Ask what an agent sees when opening a booking from search after its trip was archived. Confirm which records are still visible, which actions remain available, and where the agent can find the trip history.

## Related terms

- [ORCA Framework](/glossary/orca-framework.html)
- [Nested Object Matrix](/glossary/nested-object-matrix.html)
- [Cardinality (UX Architecture)](/glossary/cardinality-ux-architecture.html)
- [Junction Object](/glossary/junction-object.html)

## Sources

- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [Object-Oriented UX with Sophia Prater, InfoQ](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)
- [Prioritizing Prioritization for Product Designers, Sophia V. Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html#webpage",
                "url": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html",
                "name": "ORCA Relationship Requirements (MCSFD) | Product Design Glossary",
                "description": "Use ORCA’s MCSFD checklist to specify how objects connect, how many records relate, how lists work, and what happens when a linked record changes.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html#breadcrumbs"
                },
                "citation": [
                      "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
                      "https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/",
                      "https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html#term",
                "name": "ORCA Relationship Requirements",
                "termCode": "orca-relationship-requirements",
                "description": "ORCA relationship requirements describe how a connection between objects works in a product. Sophia Prater uses MCSFD as a checklist for five decisions: mechanics, cardinality, sorting, filtering, and dependency. Teams use it to turn a relationship they discovered into rules they can design and test.",
                "url": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html#webpage"
                },
                "alternateName": [
                      "MCSFD"
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
                "@id": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html#breadcrumbs",
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
                            "name": "ORCA Relationship Requirements",
                            "item": "https://lexkonovalov.com/glossary/orca-relationship-requirements.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "108",
    "name": "Junction Object",
    "slug": "junction-object",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Proprietary / Framework-Specific",
    "definition": "A junction object represents a relationship as an object in its own right. It is useful when the connection itself carries information that matters to users. In Object-Oriented UX (OOUX), it gives that information a clear place in the model and helps teams decide where people should see or change it.",
    "purpose": "Elevates complex many-to-many associations into first-class objects capable of carrying their own attributes, metadata, and lifecycle states.",
    "keyConcepts": [
      "Associative entity",
      "Many-to-many relationship",
      "Relationship metadata",
      "Attribute ownership"
    ],
    "howItWorks": "Promotes a relational link into a discrete entity (e.g. Booking between Traveler and Trip) when metadata or actions belong to the relationship rather than either endpoint.",
    "relatedTerms": [
      "Object Mapping",
      "Cardinality (UX Architecture)",
      "Nested Object Matrix",
      "ORCA Relationship Requirements"
    ],
    "seoTitle": "Junction Objects in OOUX | Product Design Glossary",
    "seoDescription": "Learn when to model a relationship as a junction object. A travel operations example shows where trip-specific traveler details belong.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/junction-object.html",
    "sources": [
      "Object-Oriented UX: The Backbone of the Design Process, Sophia Prater interview (https://itx.com/podcast/166-sophia-prater-on-object-oriented-ux-the-backbone-of-the-design-process/)",
      "Object-Oriented UX with Sophia Prater, InfoQ (https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)"
    ],
    "contentMarkdown": `# Junction Object

A junction object represents a relationship as an object in its own right. It is useful when the connection itself carries information that matters to users. In Object-Oriented UX (OOUX), it gives that information a clear place in the model and helps teams decide where people should see or change it.

## Example of a junction object

A traveler can be linked to several trips, and a trip can include several travelers. Suppose agents also need to know whether each traveler has confirmed they will join a particular trip. One traveler can be Confirmed for Trip T-104 and Invited for another trip at the same time.

| Where the information belongs | Example |
|---|---|
| Traveler | Name and contact details |
| Trip | Reference and travel dates |
| Trip Participation | One trip, one traveler, participation status, and response date when available |

Trip Participation is the junction object. In this example, the product allows one participation record for each traveler and trip pair. If an agent changes the status for Trip T-104 to Confirmed, any Invited status on a different trip stays as it was.

## When is a junction object useful?

Ask whether the same person or record can have different values depending on what it is linked to. A traveler’s contact details normally describe the person. Their response to a particular trip invitation describes their participation in that trip.

Then check what people do with the relationship. In this example, an invitation creates a participation record, a response updates it, and removal ends that traveler’s association with the trip. Naming the junction object lets the team talk about these actions without confusing a trip-specific change with an edit to the traveler’s profile.

## How does it show up in the interface?

In the trip’s traveler list, show the traveler’s name alongside their participation status. Opening the name can lead to the Traveler record. An action such as “Remove from trip” applies to the participation and leaves the traveler profile intact.

The junction object can be represented by that row and its actions. Give it a detail view if people need to inspect a response history or manage more information than the row can show. Use the [nested object matrix](/glossary/nested-object-matrix.html) to record how Trip Participation connects to Trip and Traveler.

## Related terms

- [Object Mapping](/glossary/object-mapping.html)
- [Cardinality (UX Architecture)](/glossary/cardinality-ux-architecture.html)
- [Nested Object Matrix](/glossary/nested-object-matrix.html)
- [ORCA Relationship Requirements](/glossary/orca-relationship-requirements.html)

## Sources

- [Object-Oriented UX: The Backbone of the Design Process, Sophia Prater interview](https://itx.com/podcast/166-sophia-prater-on-object-oriented-ux-the-backbone-of-the-design-process/)
- [Object-Oriented UX with Sophia Prater, InfoQ](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/junction-object.html#webpage",
                "url": "https://lexkonovalov.com/glossary/junction-object.html",
                "name": "Junction Objects in OOUX | Product Design Glossary",
                "description": "Learn when to model a relationship as a junction object. A travel operations example shows where trip-specific traveler details belong.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/junction-object.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/junction-object.html#breadcrumbs"
                },
                "citation": [
                      "https://itx.com/podcast/166-sophia-prater-on-object-oriented-ux-the-backbone-of-the-design-process/",
                      "https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/junction-object.html#term",
                "name": "Junction Object",
                "termCode": "junction-object",
                "description": "A junction object represents a relationship as an object in its own right. It is useful when the connection itself carries information that matters to users. In Object-Oriented UX (OOUX), it gives that information a clear place in the model and helps teams decide where people should see or change it.",
                "url": "https://lexkonovalov.com/glossary/junction-object.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/junction-object.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/junction-object.html#breadcrumbs",
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
                            "name": "Junction Object",
                            "item": "https://lexkonovalov.com/glossary/junction-object.html"
                      }
                ]
          }
    ]
  },
  {
    "id": "109",
    "name": "User Retention",
    "slug": "user-retention",
    "category": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "User retention measures how many people in a starting group return to use a product over time. A retention rate uses a defined group, a return behavior, and a time window. For a product used by teams, the same approach can measure retention at the account level.",
    "purpose": "Measures sustained product engagement and value delivery over time, distinguishing one-time activation from habitual, long-term adoption.",
    "keyConcepts": [
      "Cohort analysis",
      "Return condition",
      "Time window",
      "Account-level retention",
      "Retention curve"
    ],
    "howItWorks": "Tracks a defined cohort of users or accounts from a shared starting milestone, evaluating the percentage that executes a meaningful qualifying return event within designated subsequent time windows.",
    "relatedTerms": [
      "Activation Metric",
      "Time-to-Value (TTV)",
      "North Star Metric (NSM)",
      "Churn Mitigation"
    ],
    "seoTitle": "User Retention: Definition and Formula | Product Design Glossary",
    "seoDescription": "Learn how to calculate user retention with a cohort, a meaningful return event, and a time window. Includes a worked account retention example.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/user-retention.html",
    "sources": [
      "Build a retention analysis, Amplitude Docs (https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-build)",
      "How the Retention Analysis chart calculates retention, Amplitude Docs (https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation)",
      "How time works in a retention analysis, Amplitude Docs (https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-time)"
    ],
    "contentMarkdown": `# User Retention

User retention measures how many people in a starting group return to use a product over time. A retention rate uses a defined group, a return behavior, and a time window. For a product used by teams, the same approach can measure retention at the account level.

## How do you calculate a retention rate?

**Retention rate = eligible cohort members who meet the return condition ÷ all eligible members of the starting cohort × 100.**

A cohort is a group that shares a starting condition, such as signing up in the same week. Define what counts as returning, then give every cohort member the full observation window. Choose a return event that reflects the product’s job, such as sending an invoice for an invoicing tool.

## Example of account retention

An invoicing team wants to know whether new accounts keep using the product after initial activation. The cohort includes 120 eligible new accounts that sent their first real invoice within seven days of signup. The return condition is sending another real invoice during days 15–30 after signup.

If 72 of those accounts meet the return condition, the **retention rate for this activated cohort is 60%** (72 ÷ 120 × 100). Count each account once, even if its team sends several invoices. Read the result after all accounts have finished day 30.

To compare later use across activated and non-activated accounts, use a return condition both can meet. Sending any real invoice during days 15–30 works for that question. It answers a different question from repeat use among accounts that already sent an invoice.

## Which time window should you use?

Match the window to the natural usage cycle. A daily collaboration tool and a monthly invoicing product can show very different patterns. Day-30 retention counts a return on that day. A days 15–30 window counts any qualifying return in that interval. For “day 30 or later,” state the reporting cutoff and give cohorts comparable follow-up time.

Read retention alongside [activation](/glossary/activation-metric.html). Activation tracks initial progress. Retention tracks a return to meaningful work. A drop in usage retention can prompt investigation into who stopped returning and why. Subscription churn measures a separate outcome, such as cancellation or nonrenewal.

## Related terms

- [Activation Metric](/glossary/activation-metric.html)
- [Time-to-Value (TTV)](/glossary/time-to-value-ttv.html)
- [North Star Metric (NSM)](/glossary/north-star-metric-nsm.html)
- [Churn Mitigation](/glossary/churn-mitigation-architecture.html)

## Sources

- [Build a retention analysis, Amplitude Docs](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-build)
- [How the Retention Analysis chart calculates retention, Amplitude Docs](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation)
- [How time works in a retention analysis, Amplitude Docs](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-time)`,
    "structuredDataGraph": [
          {
                "@type": "WebPage",
                "@id": "https://lexkonovalov.com/glossary/user-retention.html#webpage",
                "url": "https://lexkonovalov.com/glossary/user-retention.html",
                "name": "User Retention: Definition and Formula | Product Design Glossary",
                "description": "Learn how to calculate user retention with a cohort, a meaningful return event, and a time window. Includes a worked account retention example.",
                "inLanguage": "en-US",
                "isPartOf": {
                      "@id": "https://lexkonovalov.com/#website"
                },
                "mainEntity": {
                      "@id": "https://lexkonovalov.com/glossary/user-retention.html#term"
                },
                "breadcrumb": {
                      "@id": "https://lexkonovalov.com/glossary/user-retention.html#breadcrumbs"
                },
                "citation": [
                      "https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-build",
                      "https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation",
                      "https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-time"
                ]
          },
          {
                "@type": "DefinedTerm",
                "@id": "https://lexkonovalov.com/glossary/user-retention.html#term",
                "name": "User Retention",
                "termCode": "user-retention",
                "description": "User retention measures how many people in a starting group return to use a product over time. A retention rate uses a defined group, a return behavior, and a time window. For a product used by teams, the same approach can measure retention at the account level.",
                "url": "https://lexkonovalov.com/glossary/user-retention.html",
                "inDefinedTermSet": {
                      "@id": "https://lexkonovalov.com/glossary/#terms"
                },
                "mainEntityOfPage": {
                      "@id": "https://lexkonovalov.com/glossary/user-retention.html#webpage"
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
                "@id": "https://lexkonovalov.com/glossary/user-retention.html#breadcrumbs",
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
                            "name": "User Retention",
                            "item": "https://lexkonovalov.com/glossary/user-retention.html"
                      }
                ]
          }
    ]
  },
  {
    "slug": "product-qualified-lead-pql",
    "id": "110",
    "name": "Product-Qualified Lead (PQL)",
    "category": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "A product-qualified lead (PQL) is a prospective buyer whose product use provides evidence that they may be ready to purchase. Teams combine usage with customer fit and intent to decide whether to offer help, route the lead to sales, or keep the experience self-service.",
    "purpose": "Bridges self-serve product adoption and sales-assisted expansion by identifying accounts whose organic usage and commercial fit warrant high-touch engagement.",
    "keyConcepts": [
      "PQL vs MQL vs Activation",
      "Usage threshold signal",
      "Product-qualified account (PQA)",
      "Intent triggers",
      "Product-led sales (PLS)"
    ],
    "howItWorks": "Evaluates live telemetry against predefined behavioral milestones, combining usage volume with firmographic fit and explicit feature intent to alert go-to-market teams.",
    "relatedTerms": [
      "Product-Led Growth (PLG)",
      "Activation Metric",
      "Lead Capture",
      "Product Telemetry & Analytics"
    ],
    "seoTitle": "Product-Qualified Lead (PQL) | Product Design Glossary",
    "seoDescription": "Learn what a product-qualified lead is and how to combine usage, customer fit, and intent. Includes a worked example for a team planning tool.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/product-qualified-lead-pql.html",
    "alternateName": [
      "Product-Qualified Lead",
      "PQL"
    ],
    "sources": [
      "How to Define PQLs, ProductLed (https://productled.com/blog/how-to-define-pqls)",
      "Product Qualified Leads in Freemium, OpenView (https://openviewpartners.com/blog/freemium-startup-product-qualified-leads/)",
      "Product-Led Sales AMA with Kyle Poyar, Pocus (https://www.pocus.com/blog/product-led-sales-pls-ama-kyle-poyar-openview-pls-benchmarks)"
    ],
    "structuredDataGraph": [
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
    ],
    "contentMarkdown": `# Product-Qualified Lead (PQL)

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
- [Product-Led Sales AMA with Kyle Poyar, Pocus](https://www.pocus.com/blog/product-led-sales-pls-ama-kyle-poyar-openview-pls-benchmarks)`
  }
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  const normalized = slug.replace(/\.html$/, "").toLowerCase();
  return glossaryTerms.find((t) => t.slug.toLowerCase() === normalized);
}

export function getTermById(id: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.id === id);
}

export function getTermsByCategory(category: string): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.category.toLowerCase() === category.toLowerCase());
}

export function getAlphabeticalLetters(): string[] {
  const lettersSet = new Set<string>();
  glossaryTerms.forEach((t) => {
    const firstChar = t.name.trim().charAt(0).toUpperCase();
    if (/[A-Z]/.test(firstChar)) {
      lettersSet.add(firstChar);
    }
  });
  return Array.from(lettersSet).sort();
}

export function getTermsGroupedByLetter(): Record<string, GlossaryTerm[]> {
  const grouped: Record<string, GlossaryTerm[]> = {};
  
  // Sort alphabetically
  const sorted = [...glossaryTerms].sort((a, b) => a.name.localeCompare(b.name));
  
  sorted.forEach((term) => {
    const firstChar = term.name.trim().charAt(0).toUpperCase();
    const key = /[A-Z]/.test(firstChar) ? firstChar : "#";
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(term);
  });
  
  return grouped;
}

export function searchGlossary(query: string): GlossaryTerm[] {
  if (!query.trim()) return glossaryTerms;
  const q = query.toLowerCase().trim();
  return glossaryTerms.filter((term) => 
    term.name.toLowerCase().includes(q) ||
    term.definition.toLowerCase().includes(q) ||
    term.slug.toLowerCase().includes(q) ||
    term.keyConcepts.some((k) => k.toLowerCase().includes(q)) ||
    term.category.toLowerCase().includes(q)
  );
}
