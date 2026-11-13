// src/data/glossaryData.ts
// Canonical 100-term taxonomy across four foundational product design domains

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
    count: 25,
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
    count: 25,
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
      "Information Architecture (IA)"
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

Start by examining the things people name in interviews and existing workflows. Use their language to identify candidate objects. Then walk through a task such as “find and cancel a booking.” Check that the model identifies the booking, its connection to the trip, its status, and which roles can cancel it.

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
      "State Transition Matrix"
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

1. **Discovery.** Identify objects from research. Map their relationships, record actions by object and role in a CTA matrix, and build an initial [object map](/glossary/object-mapping.html). Capture questions for further research.
2. **Requirements.** Define relationship rules, permissions, and required fields. Document object definitions in an Object Guide and expand the CTA matrix into user stories with conditions for each action.
3. **Prioritization.** Decide what belongs in the release and which information and actions deserve prominence in the interface.
4. **Representation.** Turn the model into cards, lists, detail views, and a connected prototype. Test whether users recognize the objects, find their connections, and understand the available actions.

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
    "definition": "Object Mapping is the visual diagramming technique used to plot domain entities, structural relationships, metadata schemas, and action affordances in an interconnected matrix before UI prototyping.",
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
    "seoTitle": "Object Mapping in UX: Methods, Diagrams, and Workflows",
    "sources": [
      "Sophia Prater, Object Mapping Workshop Guide",
      "Abby Covert, How to Make Sense of Any Mess"
    ]
  },
  {
    "id": "004",
    "name": "Domain Context Modeling",
    "slug": "domain-context-modeling",
    "category": "UX & Product Architecture",
    "secondaryCategory": "AI & Agentic Systems",
    "maturity": "Emerging",
    "definition": "Domain Context Modeling is an architectural practice that defines the bounded semantic contexts, entities, and operational constraints of a business domain to create interoperable mental structures for human users, software systems, and AI agents.",
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
      "Controlled Vocabulary"
    ],
    "seoTitle": "Domain Context Modeling: Structuring Meaning for UX & AI",
    "sources": [
      "Eric Evans, Domain-Driven Design, Addison-Wesley",
      "DomainDrivenUX, Domain Context Modeling Guide (https://www.domaindrivenux.com)"
    ]
  },
  {
    "id": "005",
    "name": "Cardinality (UX Architecture)",
    "slug": "cardinality-ux-architecture",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "In UX architecture, Cardinality defines the numerical and structural relationships between connected domain objects, specifically classifying whether associations are one-to-one, one-to-many, or many-to-many across user navigation paths.",
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
      "Structural Navigation Model"
    ],
    "seoTitle": "Cardinality in UX Architecture: Designing Object Relationships",
    "sources": [
      "Sophia Prater, Object-Oriented UX: Relationships and Cardinality",
      "Heidi Adkisson, Designing Relational Data Displays"
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
      "Conversion Funnel Architecture"
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
    "definition": "A Structural Navigation Model is the formal architectural topology—such as hierarchical trees, hub-and-spoke models, nested matrices, or linear sequences—that governs spatial traversal throughout a software system.",
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
      "Polyhierarchy"
    ],
    "seoTitle": "Structural Navigation Models in Product Design & Information Architecture",
    "sources": [
      "Peter Morville & Louis Rosenfeld, Information Architecture for the World Wide Web, O'Reilly",
      "James Kalbach, Designing Web Navigation, O'Reilly"
    ]
  },
  {
    "id": "014",
    "name": "State Transition Matrix",
    "slug": "state-transition-matrix",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "A State Transition Matrix is a formal analytical table documenting all possible operational states of a digital entity (e.g., Draft, Pending, Approved, Archived), mapping them against triggering events and user access permissions.",
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
    "seoTitle": "State Transition Matrices in UX: Documenting Complex Logic",
    "sources": [
      "David Harel, Statecharts: A Visual Formalism for Complex Systems",
      "Sophia Prater, ORCA CTAs and Object States"
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
    "definition": "Progressive Disclosure is an interaction design principle that defers complex, infrequent, or advanced features to secondary screens or disclosure panels, presenting only essential options initially.",
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
    "seoTitle": "Progressive Disclosure in UX: Managing Complexity & Cognitive Load",
    "sources": [
      "Jakob Nielsen, Progressive Disclosure, Nielsen Norman Group",
      "Alan Cooper et al., About Face: The Essentials of Interaction Design"
    ]
  },
  {
    "id": "024",
    "name": "Conceptual Schema",
    "slug": "conceptual-schema",
    "category": "UX & Product Architecture",
    "secondaryCategory": "AI & Agentic Systems",
    "maturity": "Established",
    "definition": "A Conceptual Schema is a high-level, implementation-independent representation of the business domain concepts, their essential properties, and semantic relationships across an entire product ecosystem.",
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
    "seoTitle": "What is a Conceptual Schema? UX & Data Architecture Guide",
    "sources": [
      "ISO/IEC 11179 Information Technology — Metadata Registries",
      "Eric Evans, Domain-Driven Design"
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
    "category": "Design Systems & Engineering",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "The Web Content Accessibility Guidelines (WCAG) are the internationally recognized technical standards developed by the W3C Web Accessibility Initiative (WAI), defining requirements to ensure digital content is Perceivable, Operable, Understandable, and Robust (POUR).",
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
      "ARIA",
      "Component Architecture",
      "Design System Governance"
    ],
    "seoTitle": "WCAG Accessibility Guidelines: Complete Compliance Guide",
    "sources": [
      "W3C Web Accessibility Initiative (WAI), Web Content Accessibility Guidelines (WCAG) 2.2",
      "ISO/IEC 40500:2012"
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
      "Conversion Funnel Architecture",
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
    "category": "Product Strategy & Growth",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "A/B Testing (or Split Testing) is a controlled empirical experimentation method where two or more variants of a user experience are served randomly to concurrent user segments to determine which drives a statistically significant improvement in target metrics.",
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
    "seoTitle": "A/B Testing Guide for Product Designers: Statistical Rigor in UX",
    "sources": [
      "Ron Kohavi, Diane Tang, & Ya Xu, Trustworthy Online Controlled Experiments, Cambridge University Press",
      "Optimizely Engineering"
    ]
  },
  {
    "id": "078",
    "name": "Continuous Experimentation",
    "slug": "continuous-experimentation",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "Continuous Experimentation is the organizational capability to iteratively deploy, measure, and learn from dozens of concurrent micro-experiments embedded directly into daily production sprint cycles.",
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
    "seoTitle": "Continuous Experimentation: Building High-Velocity Growth Teams",
    "sources": [
      "Stefan Thomke, Experimentation Works: The Surprising Power of Business Experiments, Harvard Business Review Press"
    ]
  },
  {
    "id": "079",
    "name": "Conversion Funnel Architecture",
    "slug": "conversion-funnel-architecture",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Conversion Funnel Architecture is the deliberate structural sequencing of user steps—from initial acquisition through consideration, activation, and final transaction—engineered to minimize cognitive drop-off.",
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
    "seoTitle": "Conversion Funnel Architecture: Mapping & Optimizing UX Drop-Off",
    "sources": [
      "Brian Balfour, Growth Loops and Funnels",
      "Reforge Growth Series"
    ]
  },
  {
    "id": "080",
    "name": "Lead Capture Mechanics",
    "slug": "lead-capture-mechanics",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Lead Capture Mechanics encompass the strategic interaction patterns, forms, value exchanges, and progressive profiling techniques designed to capture prospective customer information.",
    "purpose": "Maximizes top-of-funnel customer acquisition by offering compelling value propositions in exchange for contact information without introducing excessive form friction.",
    "keyConcepts": [
      "Progressive profiling",
      "value exchange",
      "form micro-copy",
      "frictionless authentication."
    ],
    "howItWorks": "Surfaces minimal input fields during initial user touchpoints, gathering secondary qualifying attributes dynamically over subsequent user sessions.",
    "relatedTerms": [
      "Conversion Rate Optimization (CRO)",
      "Conversion Funnel Architecture",
      "Progressive Disclosure"
    ],
    "seoTitle": "Lead Capture Mechanics: Designing High-Converting Forms & UX",
    "sources": [
      "Luke Wroblewski, Web Form Design: Filling in the Blanks, Rosenfeld Media",
      "CXL Institute"
    ]
  },
  {
    "id": "081",
    "name": "Checkout Flow Optimization",
    "slug": "checkout-flow-optimization",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Checkout Flow Optimization is the specialized UX practice of refining the final transactional, payment, and booking pathways of digital products to eliminate cart abandonment.",
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
      "Conversion Funnel Architecture",
      "Operational UX"
    ],
    "seoTitle": "Checkout Flow Optimization: Eliminating Transactional Cart Friction",
    "sources": [
      "Baymard Institute, E-Commerce Checkout Usability Studies",
      "Stripe Checkout Architecture"
    ]
  },
  {
    "id": "082",
    "name": "Product Discovery",
    "slug": "product-discovery",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Product Discovery is the continuous, collaborative process of conducting user research, prototyping, and testing to determine what to build, validating value, usability, feasibility, and business viability before engineering commits code.",
    "purpose": "Prevents engineering teams from building features that users do not need, do not understand, or refuse to pay for, eliminating product waste.",
    "keyConcepts": [
      "Dual-track agile",
      "continuous interviews",
      "assumption testing",
      "prototype validation."
    ],
    "howItWorks": "Product triads (Design, Engineering, Product Management) continuously test business and user assumptions using quick experiments running parallel to delivery sprints.",
    "relatedTerms": [
      "Jobs to Be Done (JTBD)",
      "Continuous Experimentation",
      "Mental Model Mapping",
      "Product Strategy Canvas"
    ],
    "seoTitle": "Product Discovery Guide: Continuous Discovery Habits for Teams",
    "sources": [
      "Teresa Torres, Continuous Discovery Habits, Product Talk LLC",
      "Marty Cagan, Inspired: How to Create Tech Products Customers Love, Wiley"
    ]
  },
  {
    "id": "083",
    "name": "Jobs to Be Done (JTBD)",
    "slug": "jobs-to-be-done-jtbd",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Jobs to Be Done (JTBD) is a strategic innovation framework asserting that customers do not buy products; they \"hire\" products to make progress within specific circumstances and accomplish functional, emotional, or social jobs.",
    "purpose": "Focuses innovation on underlying human motivations and desired progress rather than shallow demographic attributes or surface feature requests.",
    "keyConcepts": [
      "Core job",
      "functional/emotional progress",
      "pushing/pulling forces",
      "anxiety/habit friction."
    ],
    "howItWorks": "Researchers interview users to uncover the catalyst events, emotional anxieties, and progress goals that trigger switching from an old solution to a new product.",
    "relatedTerms": [
      "Mental Model Mapping",
      "Product Discovery",
      "Value Proposition Canvas",
      "Product Strategy Canvas"
    ],
    "seoTitle": "The Jobs to Be Done (JTBD) Framework: A Guide for Product UX",
    "sources": [
      "Clayton Christensen, Competing Against Time, Harvard Business Review Press",
      "Bob Moesta, Demand-Side Sales 101"
    ]
  },
  {
    "id": "084",
    "name": "Product-Led Growth (PLG)",
    "slug": "product-led-growth-plg",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Product-Led Growth (PLG) is a business go-to-market strategy that relies on the product experience itself—such as free tiers, self-serve onboarding, and viral expansion loops—as the primary driver of acquisition, retention, and expansion.",
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
    "seoTitle": "What is Product-Led Growth (PLG)? Principles & Product UX",
    "sources": [
      "Wes Bush, Product-Led Growth, ProductLed",
      "OpenView Venture Partners"
    ]
  },
  {
    "id": "085",
    "name": "North Star Metric (NSM)",
    "slug": "north-star-metric-nsm",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "A North Star Metric (NSM) is the single key metric that best captures the core customer value delivered by a product, serving as the unifying focal point for company-wide strategic growth and product development.",
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
      "Activation Metric"
    ],
    "seoTitle": "The North Star Metric Guide: Identifying Your Core Product Driver",
    "sources": [
      "Sean Ellis, Hacking Growth, Currency",
      "John Cutler, The North Star Playbook, Amplitude"
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
      "Product-Market Fit (PMF) Engine"
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
      "Conversion Funnel Architecture"
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
    "definition": "Enterprise UX Strategy is the deliberate architectural alignment of enterprise software design with complex corporate workflows, employee productivity, regulatory governance, and business change management.",
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
    "seoTitle": "Enterprise UX Strategy: Transforming Complex Enterprise Software",
    "sources": [
      "Jesse James Garrett, The Elements of User Experience",
      "Nielsen Norman Group Enterprise UX Reports"
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
    "definition": "B2C Engagement Loops are closed-system behavioral loops where user action generates a reinvestment, which compounds system value and produces a contextual trigger that re-engages the user back into the product.",
    "purpose": "Drives organic customer retention, viral network effects, and sustained platform usage without relying exclusively on expensive paid push notifications or advertising.",
    "keyConcepts": [
      "Trigger",
      "action",
      "variable investment",
      "compounding feedback."
    ],
    "howItWorks": "Users perform an action (e.g., posting content); the platform rewards them (e.g., social validation); this investment creates a new external trigger that pulls them back into the loop.",
    "relatedTerms": [
      "Product-Led Growth (PLG)",
      "Conversion Funnel Architecture",
      "Growth Design"
    ],
    "seoTitle": "B2C Engagement Loops: Behavioral UX Retention Models",
    "sources": [
      "Nir Eyal, Hooked: How to Build Habit-Forming Products, Portfolio",
      "Brian Balfour, Growth Loops"
    ]
  },
  {
    "id": "091",
    "name": "Product Telemetry & Analytics",
    "slug": "product-telemetry-analytics",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "Product Telemetry & Analytics is the technical framework of capturing, ingesting, and analyzing behavioral events, feature interactions, performance logs, and user flows across client-side applications.",
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
      "A/B Testing (Split Testing)"
    ],
    "seoTitle": "Product Telemetry & Event Analytics for UX Product Designers",
    "sources": [
      "Mixpanel Product Analytics Guides",
      "Amplitude Behavioral Analytics Playbook"
    ]
  },
  {
    "id": "092",
    "name": "Growth Design",
    "slug": "growth-design",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Growth Design is an interaction design discipline that applies behavioral psychology, experimentation, and design craft directly to move business metrics across acquisition, activation, retention, referral, and revenue.",
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
      "Jobs to Be Done (JTBD)"
    ],
    "seoTitle": "What is Growth Design? Driving Commercial Impact with UX",
    "sources": [
      "Chetana Deorah, What is Growth Design?",
      "Lex Roman, Growth Design Principles"
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
    "name": "Product-Market Fit (PMF) Engine",
    "slug": "product-market-fit-pmf-engine",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "The Product-Market Fit (PMF) Engine is a structured operational framework that measures, scores, and refines a product's value proposition against target market segments until organic, exponential retention occurs.",
    "purpose": "Prevents startups and new enterprise ventures from prematurely burning capital scaling marketing before the core product experience proves sustainable retention.",
    "keyConcepts": [
      "The Sean Ellis 40% test",
      "cohort retention flattening",
      "Net Promoter validation",
      "viral coefficients."
    ],
    "howItWorks": "Surveys users on how disappointed they would be if the product disappeared; if >= 40% answer \"very disappointed,\" the team doubles down on the specific features those users love.",
    "relatedTerms": [
      "Jobs to Be Done (JTBD)",
      "North Star Metric (NSM)",
      "Product Discovery",
      "Churn Mitigation Architecture"
    ],
    "seoTitle": "The Product-Market Fit Engine: Measuring and Achieving PMF",
    "sources": [
      "Rahul Vohra, How Superhuman Built an Engine to Find Product Market Fit, First Round Review",
      "Marc Andreessen, The Only Thing That Matters"
    ]
  },
  {
    "id": "095",
    "name": "LTV to CAC Ratio",
    "slug": "ltv-to-cac-ratio",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "The LTV to CAC Ratio is a financial unit economics metric comparing the total lifetime revenue value generated by a customer against the total cost incurred to acquire them.",
    "purpose": "Evaluates the long-term commercial sustainability and marketing efficiency of a software product, directly steering product investment decisions.",
    "keyConcepts": [
      "Unit economics",
      "payback period",
      "churn mitigation",
      "customer acquisition spend."
    ],
    "howItWorks": "Calculated as Ratio = Lifetime Value (LTV) / Customer Acquisition Cost (CAC), where LTV = (Average Revenue Per User (ARPU) * Gross Margin) / Churn Rate. A healthy benchmark for SaaS is generally considered 3 : 1 or higher.",
    "relatedTerms": [
      "Churn Mitigation Architecture",
      "Product-Led Growth (PLG)",
      "Activation Metric"
    ],
    "seoTitle": "LTV to CAC Ratio in SaaS: Calculating Product Unit Economics",
    "sources": [
      "David Skok, SaaS Metrics 2.0: A Guide to Measuring and Improving What Matters, For Entrepreneurs"
    ]
  },
  {
    "id": "096",
    "name": "Activation Metric",
    "slug": "activation-metric",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "An Activation Metric is the precise behavioral milestone that indicates a new user has experienced the core value proposition of a product (\"Aha! moment\") within a specific timeframe.",
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
      "Conversion Funnel Architecture",
      "Product Telemetry & Analytics"
    ],
    "seoTitle": "The Activation Metric: Defining the \"Aha! Moment\" in Onboarding",
    "sources": [
      "Chamath Palihapitiya, How We Put Facebook on the Path to 1 Billion Users",
      "Reforge Retention Series"
    ]
  },
  {
    "id": "097",
    "name": "Time-to-Value (TTV)",
    "slug": "time-to-value-ttv",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Time-to-Value (TTV) measures the elapsed duration—in steps, clicks, or minutes—from a user's initial account creation to their first realization of tangible product value.",
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
    "seoTitle": "Time-to-Value (TTV) in UX: Accelerating User Onboarding",
    "sources": [
      "Wes Bush, The Product-Led Playbook",
      "Samuel Hulick, UserOnboard: The Elements of User Onboarding"
    ]
  },
  {
    "id": "098",
    "name": "Churn Mitigation Architecture",
    "slug": "churn-mitigation-architecture",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Churn Mitigation Architecture is the deliberate system of product signals, automated health checks, offboarding flows, and value-recovery loops designed to retain at-risk customers.",
    "purpose": "Protects recurring subscription revenue by identifying customer disengagement early and resolving dissatisfaction before account cancellation.",
    "keyConcepts": [
      "Predictive health scores",
      "offboarding surveys",
      "pause/downgrade options",
      "exit feedback loops."
    ],
    "howItWorks": "Telemetry algorithms detect drops in user logins or feature usage, triggering contextual re-engagement interventions, self-serve account pauses, or targeted customer success outreach.",
    "relatedTerms": [
      "Product Telemetry & Analytics",
      "LTV to CAC Ratio",
      "Activation Metric"
    ],
    "seoTitle": "Churn Mitigation Architecture: Retaining SaaS Customers with UX",
    "sources": [
      "Lincoln Murphy, Customer Success: How Innovative Companies Are Reducing Churn, Wiley",
      "Zuora Subscription Index"
    ]
  },
  {
    "id": "099",
    "name": "Feature Flag Strategy",
    "slug": "feature-flag-strategy",
    "category": "Product Strategy & Growth",
    "secondaryCategory": "Design Systems & Engineering",
    "maturity": "Established",
    "definition": "A Feature Flag Strategy is an engineering and product methodology that decouples code deployment from feature release using conditional runtime switches managed via software toggles.",
    "purpose": "Enables progressive rollouts, dark launches, and targeted user group testing while allowing instant rollbacks of problematic code without redeploying software.",
    "keyConcepts": [
      "Dark launching",
      "progressive rollouts",
      "kill switches",
      "targeted canary deployments."
    ],
    "howItWorks": "Code is wrapped in conditional statements querying a centralized flag management engine, dynamically enabling UI changes for specific user percentages or enterprise accounts.",
    "relatedTerms": [
      "Continuous Experimentation",
      "A/B Testing (Split Testing)",
      "Design Engineering",
      "DesignOps"
    ],
    "seoTitle": "Feature Flag Strategy: Progressive Rollouts and Canary Testing",
    "sources": [
      "Martin Fowler, Feature Toggles (Feature Flags)",
      "Pete Hodgson, Exploring Feature Branching and Toggles"
    ]
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
      "Product-Market Fit (PMF) Engine"
    ],
    "seoTitle": "The Value Proposition Canvas: Designing User-Centered Products",
    "sources": [
      "Alexander Osterwalder et al., Value Proposition Design, Wiley",
      "Strategyzer Methodology"
    ]
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
