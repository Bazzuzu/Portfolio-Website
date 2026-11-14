// src/data/glossaryData.ts
// Canonical 117-term taxonomy across four foundational product design domains

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
    "id": "ux-product-architecture",
    "name": "UX & Product Architecture",
    "count": 34,
    "description": "Information Architecture, Domain Modeling, and Conceptual Integrity for complex systems.",
    "primaryFocus": "Information Architecture, Domain Modeling, Conceptual Integrity",
    "representativeSpecs": "OOUX, ORCA, Core Model, Semantic Zoom, Mental Modeling",
    "maturityDistribution": "70% Established, 20% Proprietary, 10% Emerging"
  },
  {
    "id": "design-systems-engineering",
    "name": "Design Systems & Engineering",
    "count": 31,
    "description": "Deterministic contracts between design tools and multi-platform production code repositories.",
    "primaryFocus": "Token Interoperability, Component Contracts, Accessibility",
    "representativeSpecs": "W3C DTCG Format Module 2025.10, WCAG 2.2/3.0, W3C Web Components",
    "maturityDistribution": "75% Established, 25% Emerging"
  },
  {
    "id": "product-strategy-growth",
    "name": "Product Strategy & Growth",
    "count": 27,
    "description": "Connecting UX decisions with business outcomes, continuous experimentation, and unit economics.",
    "primaryFocus": "Experimentation, Unit Economics, Conversion Architecture",
    "representativeSpecs": "Continuous Discovery, JTBD, Product-Led Growth, Telemetry",
    "maturityDistribution": "80% Established, 20% Emerging"
  },
  {
    "id": "ai-agentic-systems",
    "name": "AI & Agentic Systems",
    "count": 25,
    "description": "Probabilistic, intent-driven systems, agent harnesses, and runtime generative interfaces.",
    "primaryFocus": "Agentic Orchestration, Context Ingestion, Dynamic Run-Time UI",
    "representativeSpecs": "Model Context Protocol (MCP), Agent Skills (SKILL.md), Vercel Generative UI",
    "maturityDistribution": "20% Established, 55% Emerging, 25% Coined"
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
    "contentMarkdown": "# Object-Oriented UX (OOUX)\n\nObject-Oriented UX (OOUX) is a design approach that structures digital products around objects in users’ mental models—the things they recognize and expect to work with, such as trips, travelers, and bookings. Teams define these objects, their relationships, attributes, and available actions before designing screens and flows.\n\n## What does OOUX look like in practice?\n\nConsider a travel operations tool with trips, travelers, and bookings. Modeling the relationship between a trip and its bookings helps the team decide what agents can navigate to from a trip.\n\nThe trip page can list its bookings, with each one opening its details and available actions. An authorized agent can select a booking and cancel it. Its status then updates wherever that booking appears, including the trip page and search results. The object model gives the team a shared basis for navigation, content, and actions.\n\n## How does ORCA relate to OOUX?\n\nOOUX provides the design principles. [ORCA](/glossary/orca-framework.html) is Sophia Prater’s process for applying them through Objects, Relationships, Calls to action, and Attributes. Teams revisit these four elements as they discover requirements and refine the model. [Introducing ORCA, Sophia Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)\n\n| ORCA element | Design question | Travel operations example |\n|---|---|---|\n| Objects | What things do people work with? | Trip, Traveler, Booking |\n| Relationships | How are those things connected? | A trip includes travelers and bookings. |\n| Calls to action | What can each user role do? | An authorized agent can cancel a booking. |\n| Attributes | What information describes each object? | A booking has a confirmation number and status. |\n\nAn [object map](/glossary/object-mapping.html) records these decisions so the team can use the same model when designing screens, navigation, and flows.\n\n## When is OOUX useful?\n\nOOUX is particularly useful when the same objects appear across multiple workflows or when different roles need different actions on an object. For example, a travel agent and an accountant may both work with the same booking, while needing different information and permissions.\n\nStart by examining the things people name in interviews and existing workflows. Use their language to identify candidate objects. Then walk through a task such as “find and cancel a booking.” Check that the model identifies the booking, its connection to the trip, its status, and which roles can cancel it. Teams also use OOUX to diagnose and prevent common interface anti-patterns, described as the [Four UX Fails in OOUX](/glossary/ooux-ux-fails.html)—masked, shape-shifting, broken, and isolated objects.\n\n## Related terms\n\n- [ORCA Framework](/glossary/orca-framework.html)\n- [Object Mapping](/glossary/object-mapping.html)\n- [Domain Context Modeling](/glossary/domain-context-modeling.html)\n- [Conceptual Schema](/glossary/conceptual-schema.html)\n- [Information Architecture (IA)](/glossary/information-architecture.html)\n\n## Sources\n\n- [Object-Oriented UX, Sophia V. Prater, A List Apart](https://alistapart.com/article/object-oriented-ux/)\n- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)",
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
    "contentMarkdown": "# ORCA Framework\n\nThe ORCA framework is Sophia Prater’s process for applying Object-Oriented UX (OOUX). ORCA stands for Objects, Relationships, Calls to action (CTAs), and Attributes. Teams use it to turn user research into a model of a product’s objects, their connections, available actions, and information.\n\n[Object-Oriented UX](/glossary/object-oriented-ux.html) provides the design principles. ORCA provides activities for defining the model and using it to design and test interfaces.\n\n## What does ORCA stand for?\n\nConsider one illustrative object in a support tool, Ticket #1042 about a missing invoice.\n\n| ORCA element | Ticket example |\n|---|---|\n| **Object** | Ticket is the object type. Ticket #1042 is one instance. |\n| **Relationships** | Linked customer — Acme Studio. Assigned agent — none. |\n| **Calls to action** | A supervisor can reopen the ticket after selecting an agent. |\n| **Attributes** | Subject — Missing invoice. Status — Closed. Priority — Normal. |\n\nCustomer and Agent are objects with their own records. The ticket links to those records through relationships. Status and priority describe the ticket as attributes.\n\n## How does the ORCA process work?\n\nPrater’s full ORCA process has 15 steps across four iterative rounds. The four elements are revisited and refined throughout the process.\n\n1. **Discovery.** Identify objects from research through [Noun Foraging](/glossary/noun-foraging.html). Map their relationships with a [Nested Object Matrix](/glossary/nested-object-matrix.html), record actions by object and role in a [CTA Matrix](/glossary/cta-matrix.html), and build an initial [object map](/glossary/object-mapping.html). Capture questions for further research.\n2. **Requirements.** Define relationship rules using [ORCA Relationship Requirements (MCSFD)](/glossary/orca-relationship-requirements.html), permissions, and required fields. Document object definitions in an [Object Guide](/glossary/object-guide.html) and expand the CTA matrix into user stories with conditions for each action.\n3. **Prioritization.** [Object Prioritization](/glossary/object-prioritization.html) decides what belongs in the release and which information and actions deserve prominence in the interface.\n4. **Representation.** Turn the model into cards, lists, detail views, and a connected prototype. Test whether users recognize the objects, find their connections, and understand the available actions.\n\nThis sequence provides a starting point. The rounds can be adapted to the project. Prater describes moving Prioritization ahead of detailed Requirements when time is limited. [Prioritizing Prioritization for Product Designers, Sophia Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)\n\n## An ORCA example in practice\n\nFor Ticket #1042, the reopening rule connects a user role, the ticket’s status, and its relationship to an agent. These requirements guide who sees the action, when it is available, and what information is needed to complete it.\n\nThe team can prototype the ticket view to test whether supervisors can find the action and understand why they need to assign an agent.\n\n## When should you use ORCA?\n\nUse ORCA when a team needs to agree on connected objects, role permissions, or business rules before designing screens. It helps prevent fragmented systems and common pitfalls like the [Four UX Fails in OOUX](/glossary/ooux-ux-fails.html). Start with one object and a real task. Check the model with users and domain experts, and return to research wherever important questions remain unanswered.\n\n## Related terms\n\n- [Object-Oriented UX (OOUX)](/glossary/object-oriented-ux.html)\n- [Object Mapping](/glossary/object-mapping.html)\n- [Cardinality (UX Architecture)](/glossary/cardinality-ux-architecture.html)\n- [State Transition Matrix](/glossary/state-transition-matrix.html)\n\n## Sources\n\n- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)\n- [Prioritizing Prioritization for Product Designers, Sophia V. Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)\n- [OOUX Masterclass course outline, OOUX.com](https://ooux.com/selfpacedoouxmasterclass)",
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
    "contentMarkdown": "# Object Mapping\n\nObject mapping is the practice of organizing the things users work with into a shared model of object types, relationships, attributes, and available actions. In Object-Oriented UX (OOUX), an object map helps teams decide what information and actions belong together before designing screens.\n\n## How do you create an object map?\n\n1. **Find candidate objects.** Look for nouns in interviews, workflows, and support requests through [Noun Foraging](/glossary/noun-foraging.html). Check which things users recognize, refer to repeatedly, and need to distinguish from one another in an [Object Guide](/glossary/object-guide.html). Check which things users recognize, refer to repeatedly, and need to distinguish from one another.\n2. **Describe each object.** Capture the information users need to identify it and make decisions about it. For a booking, that might be its confirmation number and status.\n3. **Map relationships and actions.** Ask what each object connects to, what users need to do with it, and which roles can act. Keep uncertain rules visible for follow-up.\n4. **Walk through a real task.** Try a routine case and an exception. Revise the map when either case exposes missing information, a connection, or an action.\n\nAn object type describes a class of things, such as Booking. Booking B-52 is one instance. Booking status describes the booking. Traveler is a separate object in this example because agents look up travelers, update their details, and view their other trips.\n\n## Object map example for travel operations\n\n| Object type | Useful attributes | Relationships | Example action |\n|---|---|---|---|\n| Trip | Reference, travel dates | Bookings and travelers | Add a booking |\n| Booking | Reference, status, supplier confirmation number when available | One trip | Request cancellation if eligible |\n| Traveler | Name, contact details | Trips they are associated with | Update contact details |\n\nFor an agent handling a cancellation, the map suggests a path from Trip to Booking. A booking summary can show the reference and status so the agent can pick the right record. The [state transition matrix](/glossary/state-transition-matrix.html) specifies what happens after an eligible agent requests cancellation.\n\n## How does the object map fit into ORCA?\n\n[ORCA](/glossary/orca-framework.html) gives teams several ways to investigate an object model. A [Nested Object Matrix](/glossary/nested-object-matrix.html) records relationships between object types. A [CTA Matrix](/glossary/cta-matrix.html) records what each role needs to do with each object. Deciding what belongs in the release relies on [Object Prioritization](/glossary/object-prioritization.html), while interface audits watch out for the [Four UX Fails in OOUX](/glossary/ooux-ux-fails.html). The object map organizes attributes by object and builds on the relationships already identified. The example above shows actions alongside those findings for easy reference.\n\nUse the map to decide what belongs in each view. A search result might show the booking reference and status. The detail view can add fare rules and cancellation options while keeping the same reference and status labels.\n\n## Related terms\n\n- [ORCA Framework](/glossary/orca-framework.html)\n- [Conceptual Schema](/glossary/conceptual-schema.html)\n- [Domain Context Modeling](/glossary/domain-context-modeling.html)\n- [Content Modeling](/glossary/content-modeling.html)\n\n## Sources\n\n- [Object-Oriented UX, Sophia V. Prater](https://alistapart.com/article/object-oriented-ux/)\n- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)\n- [OOUX Foundations, Sophia V. Prater](https://ooux.com/offerings/foundations)",
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
    "contentMarkdown": "# Domain Context Modeling\n\nDomain context modeling is the practice of documenting where a business term, object model, or rule applies and how information moves between contexts. It helps product teams design workflows where different groups work with related information but need different meanings, rules, or levels of detail.\n\nA useful concept from domain-driven design (DDD) is the **bounded context**, the boundary within which a model applies. Within that boundary, the people doing the work and the people building the software can agree on what their terms mean and how the modeled things behave.\n\n## A trip in sales and ticketing\n\nSuppose a travel operations tool serves a sales team that proposes itineraries and a ticketing team that manages supplier bookings. Both teams refer to the same trip, but an accepted offer and a confirmed booking describe different events.\n\n| Question | Sales | Ticketing |\n|---|---|---|\n| What does the team work with? | Trip and Offer, including proposed itineraries and quoted prices | Booking and its supplier reference, status, and fare rules |\n| What decision matters? | Is this the offer the traveler wants to accept? | Is the supplier booking confirmed, and can it be changed? |\n| What should the team own? | The accepted offer and the details agreed with the traveler | The supplier confirmation and booking status |\n\nAt handoff, ticketing receives the accepted itinerary and trip reference. Ticketing links each booking to that trip. When a supplier confirms a booking, sales can see its confirmation status alongside the accepted offer.\n\n## How do you model a domain context?\n\nLook for changes in language, rules, and ownership when you draw a model boundary. The sales and ticketing teams illustrate a possible boundary in this example.\n\n1. **Follow a handoff.** Observe what each team calls the work, what it decides, and what it needs from the other team.\n2. **Document the model and its scope.** Record terms, objects, key relationships, and the rules that apply to them in an [Object Guide](/glossary/object-guide.html). Identify where the same word carries different meanings.\n3. **Agree on what crosses the boundary.** Specify identifiers, status mappings, and which team or system updates each shared fact.\n4. **Test an exception.** Walk through a supplier rejection after a traveler accepts an offer. Check that each team can understand the situation and continue its work.\n\n## How does this relate to OOUX?\n\n[OOUX](/glossary/object-oriented-ux.html) helps a team identify the objects people recognize and work with. Domain context modeling helps the team decide where a particular definition or rule holds. An [object map](/glossary/object-mapping.html) for ticketing can then show Booking in the context of the people who manage it.\n\n## Related terms\n\n- [Object-Oriented UX](/glossary/object-oriented-ux.html)\n- [Context Engineering](/glossary/context-engineering.html)\n- [Knowledge Graphs (AI Context)](/glossary/knowledge-graphs-ai-context.html)\n- [Controlled Vocabulary](/glossary/controlled-vocabulary.html)\n\n## Sources\n\n- [Domain-Driven Design Reference, Eric Evans](https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf)\n- [Bounded Context, Martin Fowler](https://martinfowler.com/bliki/BoundedContext.html)\n- [Object-Oriented UX, Sophia V. Prater](https://alistapart.com/article/object-oriented-ux/)",
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
    "contentMarkdown": "# Cardinality (UX Architecture)\n\nIn UX architecture, cardinality describes how many records of one object type can relate to a record of another type. It helps designers support the number of related records users may encounter, from an empty list to a collection they need to search.\n\n## What are the types of cardinality?\n\nAsk the relationship question in both directions. These examples describe the rules of an illustrative travel operations tool.\n\n| Relationship | Example | What the interface needs to support |\n|---|---|---|\n| One-to-one | A traveler has at most one preferences profile, and each profile belongs to exactly one traveler. | Show preferences when a profile exists and offer a way to create one when it is missing. |\n| One-to-many | A trip can have zero or more bookings, and each booking belongs to exactly one trip. | Provide a way to view and manage multiple bookings from the trip. |\n| Many-to-many | A trip can include multiple travelers, and each traveler can take multiple trips. | Let agents associate an existing traveler with another trip and find the traveler’s trips when needed. |\n\n## Why do minimum and maximum counts matter?\n\n“One-to-many” leaves open whether a trip can exist before its first booking. In the example, the minimum is zero bookings per trip and one trip per booking. A new trip needs a useful empty state, and the booking creation flow needs a trip selection when it starts outside a trip.\n\nDistinguish the maximum the product allows from what people usually see. If most trips have two bookings but group trips can have dozens, test both sizes. Typical volume, tasks, and access rules help determine whether a simple list or a searchable table makes sense.\n\n## How does cardinality affect ORCA design decisions?\n\nORCA teams can first record that Trips and Bookings are related using a [Nested Object Matrix](/glossary/nested-object-matrix.html), then use cardinality and [ORCA Relationship Requirements (MCSFD)](/glossary/orca-relationship-requirements.html) to clarify the relationship during the Requirements round. Where a many-to-many relationship carries its own attributes, such as reservation status, teams define a [Junction Object](/glossary/junction-object.html). Use the [object map](/glossary/object-mapping.html) to find rules that need more detail.\n\n- Can an agent add the first booking directly from the empty Bookings section?\n- Can an agent move a booking to another trip, and what would need to be checked?\n- Can an agent link a traveler who already appears on another trip, and how should the interface prevent duplicate records?\n\nA relationship can exist in the model even when one role cannot see it or has no reason to navigate in both directions. Decide what each role needs to see and do before turning the relationship into a link.\n\n## Related terms\n\n- [Object Mapping](/glossary/object-mapping.html)\n- [Information Architecture (IA)](/glossary/information-architecture.html)\n- [ORCA Framework](/glossary/orca-framework.html)\n- [Structural Navigation Model](/glossary/structural-navigation-model.html)\n\n## Sources\n\n- [Discovery Live: Relationship Discovery, OOUX](https://discoverylive.ooux.com/)\n- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)\n- [What Is an Entity Relationship Diagram?, IBM](https://www.ibm.com/think/topics/entity-relationship-diagram)",
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
    "contentMarkdown": "# Enterprise Information Architecture\n\nEnterprise information architecture (EIA) organizes information across an organization’s products, repositories, and services so people can find, understand, and use it. It connects shared vocabulary, classification, metadata, navigation, search, and governance across teams and systems.\n\nIn UX practice, this includes intranets, employee portals, and business applications. Teams coordinate definitions across owners and workflows: the same customer, policy, or expense claim may appear in several places.\n\n## What does enterprise information architecture include?\n\n| Area | Question it answers |\n|---|---|\n| Shared vocabulary | Do teams mean the same thing by “customer,” “account,” or “approved”? |\n| Taxonomy and metadata | How is information classified, described, filtered, and retrieved? |\n| Objects and relationships | How do records connect to people, documents, and other records? |\n| Navigation and search | How can users reach information across products and repositories? |\n| Governance | Who owns definitions, resolves conflicts, and maintains the structure? |\n\nAccess rules also shape what different users can find and see. Shared definitions can support different role-specific views without requiring every team to use the same navigation.\n\n## An enterprise IA example: expense claims\n\nConsider an illustrative employee portal connected to an expense system. An employee submits Claim #482; a manager reviews it; finance processes reimbursement.\n\nThe team defines one claim identifier and distinguishes **Submitted**, **Approved**, and **Paid**. Approval means the manager accepted the claim; payment means reimbursement was completed. That distinction needs to remain clear wherever the claim appears.\n\n| User | Entry point | Information needed |\n|---|---|---|\n| Employee | My expenses | Claim status, receipts, and payment date |\n| Manager | Claims awaiting approval | Amount, policy, and supporting receipts |\n| Finance | Approved claims | Payment details and reimbursement status |\n\nThese views refer to the same claim. Links connect it to its receipts and the relevant policy. Metadata such as owner, date, and status supports search and filtering.\n\nAn assigned owner maintains the status definitions and checks how changes affect each system.\n\n## How do you start?\n\nStart with one task that crosses a team or system boundary. Interview the people involved, inventory the records and content they use, and note conflicting labels or duplicate sources.\n\nAgree on definitions and ownership with domain experts. Identify the authoritative source for each record or policy. Then prototype navigation, search results, and record relationships. Use card sorting to explore groupings, tree testing to check findability, and usability testing to evaluate the complete task.\n\nMeasure whether people find the right information and complete the task accurately. Search failures, wrong destinations, and time spent locating records can reveal structural problems.\n\n## How is enterprise IA different from a sitemap?\n\nA sitemap describes a hierarchy of pages. Enterprise IA also coordinates meaning, metadata, relationships, and ownership across systems. One deliverable might be a sitemap; others include a vocabulary, taxonomy, content model, or governance plan. The appropriate structure depends on users’ work and the information involved.\n\n## Related terms\n\n- [Information Architecture (IA)](/glossary/information-architecture.html)\n- [Domain Context Modeling](/glossary/domain-context-modeling.html)\n- [Controlled Vocabulary](/glossary/controlled-vocabulary.html)\n- [Operational UX](/glossary/operational-ux.html)\n\n## Sources\n\n- [Introduction to SharePoint information architecture, Microsoft](https://learn.microsoft.com/en-us/sharepoint/information-architecture-modern-experience)\n- [Intranet Information Architecture (IA) Trends, Nielsen Norman Group](https://www.nngroup.com/articles/intranet-information-architecture-ia/)\n- [Information architecture consulting, Peter Morville / Semantic Studios](https://semanticstudios.com/consulting/)",
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
    "contentMarkdown": "# Structural Navigation Model\n\nA structural navigation model describes the main and local paths people use to move through a product's information architecture. It shows how sections and views are organized, what users can reach from each level, and how they can move back to a broader view.\n\n## How does structural navigation differ from contextual navigation?\n\nStructural navigation follows the product's organization. For example, **Trips → Trip details → Bookings** follows a section down to a local view. Contextual navigation connects related information where a user needs it. A link from a trip's traveler list to a Traveler record is a contextual route that can cross sections.\n\nKeep a record’s name and identifying details consistent across entry points. An agent who arrives from search should recognize the same booking they see on a trip.\n\n## Navigation example for a travel operations tool\n\n| Route | Design decision |\n|---|---|\n| Main menu → Trips → Trip details | Trips gives agents a stable starting point for work organized around trips. |\n| Trip details → Bookings | Local navigation keeps a trip's bookings within reach while the agent reviews that trip. |\n| Trip details → Traveler record | A contextual link lets the agent inspect a related traveler and their other trips. |\n| Search → Booking details | A direct entry should show the booking's identity and link to its trip when the user has access. |\n\nThe [object map](/glossary/object-mapping.html) explains which records are related. Use the navigation model to choose which relationships become routes. Use the product's hierarchy to choose the breadcrumb trail. Use a separate return control when agents need to get back to a filtered list.\n\n## How do you design and test the model?\n\n1. **Start with common tasks.** Identify where users begin and which views they need to reach. Use [Object Prioritization](/glossary/object-prioritization.html) to distinguish primary entry points from nested records, and choose main sections and local views that match those tasks.\n2. **Add useful contextual links.** Decide which related records users need nearby. Use [cardinality](/glossary/cardinality-ux-architecture.html) to anticipate how many results a path may expose.\n3. **Plan orientation and return paths.** Check that titles, local navigation, and breadcrumbs make sense on direct entry. For an agent returning from a booking, consider whether the trip's prior list filters should be restored.\n4. **Test the routes separately.** Use tree testing to evaluate labels and hierarchy. Use a prototype to test contextual links and direct entry, where placement and screen context matter.\n\nTest whether an agent can open a booking from search, find its trip, and return to the booking list without losing their place.\n\n## Related terms\n\n- [Information Architecture (IA)](/glossary/information-architecture.html)\n- [Wayfinding System](/glossary/wayfinding-system.html)\n- [Breadcrumb Hierarchy](/glossary/breadcrumb-hierarchy.html)\n- [Polyhierarchy](/glossary/polyhierarchy.html)\n\n## Sources\n\n- [Designing Web Navigation: Types of Navigation Summary, James Kalbach](https://www.oreilly.com/library/view/designing-web-navigation/9780596528102/ch04s03.html)\n- [Object-Oriented UX, Sophia V. Prater](https://alistapart.com/article/object-oriented-ux/)\n- [Tree Testing: Evaluate Menu Labels and Categories, Nielsen Norman Group](https://www.nngroup.com/articles/tree-testing/)",
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
    "contentMarkdown": "# State Transition Matrix\n\nA state transition matrix is a table that shows which events can trigger a transition from each state and what state follows. UX teams use it to design actions, feedback, and recovery paths for objects such as bookings, tickets, and purchase requests.\n\n## How do you read a state transition matrix?\n\nRows show current states. Columns show events, which can come from a user or an external system. A cell identifies the next state for that combination. When a transition depends on a rule, record the condition, also called a guard.\n\n## Example of a booking state transition matrix\n\nIn this example, an agent submits a booking and waits for the supplier to confirm it. Cancellation also requires a supplier response. While cancellation is pending, the agent can see the request status and cannot submit a second request.\n\n| Current state | Submit booking | Confirm booking | Request cancellation | Accept cancellation | Decline cancellation |\n|---|---|---|---|---|---|\n| Draft | Awaiting confirmation | — | — | — | — |\n| Awaiting confirmation | — | Confirmed | — | — | — |\n| Confirmed | — | — | Cancellation pending | — | — |\n| Cancellation pending | — | — | — | Canceled | Confirmed |\n| Canceled | — | — | — | — | — |\n\nA dash means the event has no valid transition in this example. Confirming the booking and accepting or declining cancellation are supplier events. The booking moves out of Draft once a complete submission succeeds. An agent can request cancellation only when their role and the fare rules allow it. If the supplier declines cancellation, restore Confirmed status and show the reason if available.\n\nThis example covers the confirmation path and two cancellation outcomes. Extend the model for booking rejection, timeouts, and other cases your product supports.\n\n## How does the matrix inform ORCA actions?\n\nThe Calls to Action part of [ORCA](/glossary/orca-framework.html) identifies actions people need, organized initially in a [CTA Matrix](/glossary/cta-matrix.html). The matrix helps specify how those actions behave at each stage of the object's lifecycle. For example, agents can see “Cancellation pending” in the booking list and open the detail view to check when the request was sent.\n\nRecord what users see when an event fails or arrives late. If a booking changed after the agent opened it, refresh its status and explain why the requested action cannot proceed. Use the same rules in list and detail views.\n\nReview the table with design, engineering, and operations. Walk through one routine case, one blocked action, and one delayed response. Add missing transitions or feedback before the workflow is built.\n\n## Related terms\n\n- [Object-Oriented UX](/glossary/object-oriented-ux.html)\n- [ORCA Framework](/glossary/orca-framework.html)\n- [Operational UX](/glossary/operational-ux.html)\n- [Interaction Invariant](/glossary/interaction-invariant.html)\n\n## Sources\n\n- [State Chart XML (SCXML), W3C](https://www.w3.org/TR/scxml/)\n- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)",
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
    "contentMarkdown": "# Progressive Disclosure\n\nProgressive disclosure is an interaction design technique that shows essential information and controls first, then reveals less frequently needed options when users request them. It helps people focus on their current task while keeping additional capabilities available.\n\n## How does progressive disclosure work?\n\nStart with the options people need for common tasks. Provide a clearly labeled way to reveal additional settings or information, such as “Export options” or “Technical specifications.”\n\nUse task research and usability testing to decide what to show. Low usage alone does not prove that a feature is unimportant: people may be unable to find it.\n\nAn accordion or secondary dialog can support this pattern. Hiding required information does not.\n\n## Example: exporting a report\n\nSuppose a reporting tool serves managers who usually export the current report as a PDF, while analysts occasionally need a customized CSV.\n\n| Initially visible | Available through “Export options” |\n|---|---|\n| File format, with PDF selected | CSV delimiter and encoding |\n| Current date range and an Export button | Selection of columns for CSV export |\n| Summary of any customized settings | Controls for editing those settings |\n\nWith CSV selected, “Export options” opens the delimiter, encoding, and column controls. If someone changes the selected columns and collapses the panel, a summary such as “CSV · 6 selected columns” remains visible. The export should not silently use forgotten settings.\n\nThis example assumes occasional customization. If analysts select columns on every export, keep those controls in their primary workflow. Test whether both groups can export the intended data without missing settings or repeatedly reopening the panel.\n\n## What should stay visible?\n\nKeep information people need to make an informed decision in the main flow: total cost, important restrictions, required inputs, and actionable errors. GOV.UK's guidance for the details component similarly advises against hiding content most users need.\n\nAvoid burying frequent actions behind repeated expansion. Several nested disclosure levels can also make navigation difficult.\n\nFor an in-place disclosure, use an accessible control. The W3C disclosure pattern uses a button activated with Enter or Space and an `aria-expanded` state that reflects whether the content is open. Test the interaction with a keyboard and assistive technology.\n\n## Progressive disclosure vs. staged disclosure\n\nProgressive disclosure reveals optional detail on request. Staged disclosure divides a task into successive steps that users normally complete.\n\n“Export options” is progressive disclosure. A checkout that moves through address, delivery, and payment is staged disclosure. Test whether users need to compare information across steps before separating it.\n\n## Related terms\n\n- [Affordance Layering](/glossary/affordance-layering.html)\n- [Semantic Zoom](/glossary/semantic-zoom.html)\n- [Task Model](/glossary/task-model.html)\n- [Operational UX](/glossary/operational-ux.html)\n\n## Sources\n\n- [Progressive Disclosure, Jakob Nielsen, Nielsen Norman Group](https://www.nngroup.com/articles/progressive-disclosure/)\n- [Details, GOV.UK Design System](https://design-system.service.gov.uk/components/details/)\n- [Disclosure (Show/Hide) Pattern, W3C WAI](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)",
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
    "contentMarkdown": "# Conceptual Schema\n\nA conceptual schema describes the information a system represents: its entities, their properties, relationships, and constraints, independently of physical storage. It gives teams a shared definition of what the data means and which business rules it must satisfy.\n\nIn product design, this helps teams agree on concepts such as Customer, Reservation, or Payment before designing their screens and behavior. The schema describes information structure; individual records are instances of that structure.\n\n## What does a conceptual schema contain?\n\n- **Entities:** Types of things the system represents, such as a Reservation.\n- **Attributes:** Properties that describe them, such as arrival date and status.\n- **Relationships:** Connections between entities, such as a Reservation being assigned to a Room.\n- **Constraints:** Rules about valid information, such as departure occurring after arrival.\n\nAn entity-relationship diagram can show the structure. Written definitions and rules supply details that a diagram alone may leave ambiguous.\n\n## A conceptual schema example: hotel reservations\n\nConsider a simplified hotel system that sells one room per reservation. Room assignment may happen after booking. These are example requirements, not universal hotel rules.\n\n| Entity | Meaning | Example attributes |\n|---|---|---|\n| Guest | The person making the reservation | Name, contact details |\n| Reservation | A booking for one room over a date range | Arrival date, departure date, status |\n| Room | A physical room in the hotel | Room number |\n\nThe relationships and constraints are explicit:\n\n- Each Reservation has exactly one booking Guest; a Guest can have zero or many Reservations.\n- A Reservation has zero or one assigned Room. A Room can appear in many Reservations over time.\n- Two confirmed or checked-in Reservations cannot occupy the same Room for overlapping nights. One stay may begin on another’s departure date.\n\nThis model reveals a UI requirement: the reservation view needs an unassigned-room state. Here, Guest means the booker. Tracking everyone who stays would require extending the model to represent occupants separately.\n\n## Conceptual, logical, and physical models\n\nIn a common data-modeling workflow, the levels differ in detail:\n\n| Level | Typical decision |\n|---|---|\n| Conceptual | What entities exist, what they mean, and how they relate. |\n| Logical | Detailed attributes, identifiers, and relationship rules. |\n| Physical | Database-specific tables, column types, indexes, and storage choices. |\n\nTerminology varies. In the ANSI/SPARC three-schema architecture, the conceptual schema is the shared logical description of the database, between external user views and internal storage. It is not necessarily a lightweight early-stage diagram.\n\n## How does this help UX work?\n\nUse the schema to discuss labels, record relationships, empty states, and rules with users and domain experts. In the hotel example, ask what happens when a reservation changes rooms or includes multiple rooms; the answers may change the model.\n\n[Object-Oriented UX](/glossary/object-oriented-ux.html) can bring related domain questions into interface design, alongside users’ tasks and available actions. Validate the shared information model against real workflows, and update it as requirements change.\n\n## Related terms\n\n- [Domain Context Modeling](/glossary/domain-context-modeling.html)\n- [Object-Oriented UX](/glossary/object-oriented-ux.html)\n- [Content Modeling](/glossary/content-modeling.html)\n- [Knowledge Graphs (AI Context)](/glossary/knowledge-graphs-ai-context.html)\n\n## Sources\n\n- [Database architecture: the conceptual schema, University of Cape Town](https://www.cs.uct.ac.za/mit_notes/database/htmls/chp01.html)\n- [What Is Data Modeling?, IBM](https://www.ibm.com/think/topics/data-modeling)\n- [What Is an Entity Relationship Diagram?, IBM](https://www.ibm.com/think/topics/entity-relationship-diagram)",
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
    "definition": "A design system is a maintained set of shared decisions, reusable components, and guidelines for designing and building a product or family of products. It gives teams a common way to create interfaces and a process for improving the pieces they share.",
    "purpose": "Establishes a single source of truth for design decisions and UI code, accelerating product development velocity and ensuring cross-platform brand and UX cohesion.",
    "keyConcepts": [
      "Foundations and tokens",
      "Component library",
      "UI kit vs design system",
      "Patterns and guidance",
      "System maintenance and contribution"
    ],
    "howItWorks": "Unifies tokens, reusable components, and interaction guidelines under continuous governance, allowing product teams to compose interfaces reliably while sharing bug fixes and improvements.",
    "relatedTerms": [
      "Design Tokens",
      "Component Architecture",
      "DesignOps",
      "Component Libraries",
      "Design System Governance"
    ],
    "seoTitle": "What Is a Design System? | Product Design Glossary",
    "sources": [
      "GOV.UK Design System (https://design-system.service.gov.uk/)",
      "Button, GOV.UK Design System (https://design-system.service.gov.uk/components/button/)",
      "Contribution criteria, GOV.UK Design System (https://design-system.service.gov.uk/community/contribution-criteria/)"
    ],
    "seoDescription": "Learn what a design system includes and how it differs from a UI kit or component library. Follow a shared button from design to maintenance.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/design-system.html",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-system.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-system.html",
        "name": "What Is a Design System? | Product Design Glossary",
        "description": "Learn what a design system includes and how it differs from a UI kit or component library. Follow a shared button from design to maintenance.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-system.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-system.html#breadcrumbs"
        },
        "citation": [
          "https://design-system.service.gov.uk/",
          "https://design-system.service.gov.uk/components/button/",
          "https://design-system.service.gov.uk/community/contribution-criteria/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-system.html#term",
        "name": "Design System",
        "termCode": "design-system",
        "description": "A design system is a maintained set of shared decisions, reusable components, and guidelines for designing and building a product or family of products. It gives teams a common way to create interfaces and a process for improving the pieces they share.",
        "url": "https://lexkonovalov.com/glossary/design-system.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-system.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/design-system.html#breadcrumbs",
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
            "name": "Design System",
            "item": "https://lexkonovalov.com/glossary/design-system.html"
          }
        ]
      }
    ],
    "contentMarkdown": "# Design System\n\nA design system is a maintained set of shared decisions, reusable components, and guidelines for designing and building a product or family of products. It gives teams a common way to create interfaces and a process for improving the pieces they share.\n\n## What does a design system include?\n\n| Part | What it helps teams decide |\n|---|---|\n| Foundations and tokens | Which colors, spacing, and other design decisions to reuse |\n| Components | How common controls such as buttons and text inputs look and behave |\n| Patterns and guidance | How to combine components for tasks such as entering an address or recovering from an error |\n| Maintenance | Who reviews changes, how teams contribute, and how products adopt updates |\n\nStart with the parts your teams repeatedly need. The GOV.UK Design System is a public example with styles, components, patterns, and contribution criteria.\n\n## Design system vs. component library vs. UI kit\n\nA **UI kit** typically provides reusable design assets in a design tool. A **component library** provides reusable interface components. A design system connects those assets and implementations to usage guidance and maintenance. A team can use a library from another organization and document the additional decisions its own products need.\n\n## Example of a shared button\n\nSuppose two teams use a primary button in checkout and account settings. They agree on how the button presents a label and keyboard focus, which tokens it uses, and when a secondary action should have less visual emphasis. The [component library](/glossary/component-libraries.html) provides the implementation. The system documents when to use it and how to request a change.\n\nIf checkout introduces a pending state, the teams review what happens to the label, feedback, and repeat submissions. They decide which behavior belongs in the shared component and which belongs to checkout. They test the button in both products. Checkout owns the payment request and its outcome, while the system can document how the button presents a pending action.\n\n## How do you start a design system?\n\nPick one recurring pattern with a clear owner and two real places to try it. Document what should stay consistent and what product teams can configure. Check the result in context and record how consuming teams will get future fixes. Use feedback from the first two implementations to decide what to document or share next.\n\n## Related terms\n\n- [Design Tokens](/glossary/design-tokens.html)\n- [Component Architecture](/glossary/component-architecture.html)\n- [DesignOps](/glossary/designops.html)\n- [Component Libraries](/glossary/component-libraries.html)\n- [Design System Governance](/glossary/design-system-governance.html)\n\n## Sources\n\n- [GOV.UK Design System](https://design-system.service.gov.uk/)\n- [Button, GOV.UK Design System](https://design-system.service.gov.uk/components/button/)\n- [Contribution criteria, GOV.UK Design System](https://design-system.service.gov.uk/community/contribution-criteria/)"
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
    "contentMarkdown": "# Design Tokens\n\nDesign tokens are named values that represent reusable design decisions, such as colors, spacing, typography, and motion. They give designers and developers a shared way to describe and apply those decisions across components, themes, and platforms.\n\nFor example, a component can use a token named `color.text.link` instead of choosing a color independently. The name describes the intended use; its value can change with the theme.\n\n## What are primitive, semantic, and component tokens?\n\nMany design systems organize tokens into these layers. The naming and number of layers vary by system.\n\n| Layer | Illustrative name | Role |\n|---|---|---|\n| Primitive | `color.blue.600` | Stores a base palette value. |\n| Semantic | `color.text.link` | Assigns a value to a purpose. |\n| Component | `button.primary.background` | Applies a decision to a specific component. |\n\nA semantic token can reference a primitive through an alias. For example, `color.text.link` might reference `color.blue.600` in a light theme and a lighter blue in a dark theme. Components continue to use the semantic name. Check the resulting contrast in each context.\n\n## A simple design token example\n\nThis example uses the DTCG 2025.10 format to define a spacing value and a token for card padding:\n\n```json\n{\n  \"space\": {\n    \"200\": {\n      \"$type\": \"dimension\",\n      \"$value\": { \"value\": 8, \"unit\": \"px\" }\n    }\n  },\n  \"card\": {\n    \"padding\": {\n      \"$type\": \"dimension\",\n      \"$value\": \"{space.200}\"\n    }\n  }\n}\n```\n\n`card.padding` resolves to 8 pixels through its reference to `space.200`. To increase only card padding, point `card.padding` to a different spacing token. Changing `space.200` itself affects every token that references it. The names and values are illustrative.\n\n## How do tokens get from design to code?\n\nA team maintains token definitions in an agreed source, reviews changes, and uses tooling to produce the formats each platform needs. A tool such as Style Dictionary can transform token data into CSS, JavaScript, or native platform resources.\n\nCSS custom properties and Figma variables can represent tokens in their respective environments. A shared naming scheme, compatible tooling, and an explicit release process connect them. Tokens themselves do not automatically synchronize design files and production code.\n\n## Do design tokens have to use JSON?\n\nTokens are a design-system concept; the DTCG specification defines a JSON format for exchanging them between tools. The stable 2025.10 Format Module specifies types, values, groups, and references. It is a Community Group specification, not a W3C Standard.\n\nStart with decisions that repeat across the interface. Document intended usage and check affected components before releasing changes. Add layers when they solve a concrete reuse or maintenance problem.\n\n## Related terms\n\n- [Design System](/glossary/design-system.html)\n- [Semantic Tokens](/glossary/semantic-tokens.html)\n- [Design Primitives](/glossary/design-primitives.html)\n- [Style Dictionary](/glossary/style-dictionary.html)\n- [Design Tokens Format Module (DTCG)](/glossary/design-tokens-format-module-dtcg.html)\n\n## Sources\n\n- [Design tokens explained, Atlassian Design System](https://atlassian.design/foundations/tokens/design-tokens/)\n- [Design Tokens Format Module 2025.10, Design Tokens Community Group](https://www.designtokens.org/tr/2025.10/format/)\n- [Style Dictionary documentation](https://styledictionary.com/)",
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
    "definition": "The Design Tokens Format Module is a specification from the Design Tokens Community Group (DTCG) for exchanging design tokens in JSON. It defines how a file represents named tokens, groups, types, values, and references. The group lists version 2025.10 as stable. It is a Community Group specification published outside the W3C Standards Track.",
    "purpose": "Standardizes cross-tool design token exchange syntax, decoupling token definitions from specific platforms, plugins, and proprietary design tool formats.",
    "keyConcepts": [
      "DTCG 2025.10 standard",
      "Token $type and $value",
      "Token reference syntax ({group.token})",
      "Format Module vs Resolver Module",
      "Tool interoperability"
    ],
    "howItWorks": "Defines a standardized JSON schema where design tokens are structured with explicit types, values, and alias references, enabling deterministic translation into multi-platform styling formats.",
    "relatedTerms": [
      "Design Tokens",
      "Style Dictionary",
      "Semantic Tokens",
      "Token Resolver Engine"
    ],
    "seoTitle": "DTCG Design Tokens Format Module | Product Design Glossary",
    "sources": [
      "Design Tokens Format Module 2025.10, DTCG (https://www.designtokens.org/tr/2025.10/format/)",
      "Design Tokens Resolver Module 2025.10, DTCG (https://www.designtokens.org/tr/2025.10/resolver/)",
      "Technical reports, DTCG (https://www.designtokens.org/technical-reports/)"
    ],
    "alternateName": [
      "DTCG Format Module",
      "Design Tokens Format Module"
    ],
    "seoDescription": "Learn what the DTCG Format Module specifies, with a 2025.10 JSON example of token types, values, and references. Check tool support before adopting it.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/design-tokens-format-module-dtcg.html",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-tokens-format-module-dtcg.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-tokens-format-module-dtcg.html",
        "name": "DTCG Design Tokens Format Module | Product Design Glossary",
        "description": "Learn what the DTCG Format Module specifies, with a 2025.10 JSON example of token types, values, and references. Check tool support before adopting it.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-tokens-format-module-dtcg.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-tokens-format-module-dtcg.html#breadcrumbs"
        },
        "citation": [
          "https://www.designtokens.org/tr/2025.10/format/",
          "https://www.designtokens.org/tr/2025.10/resolver/",
          "https://www.designtokens.org/technical-reports/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-tokens-format-module-dtcg.html#term",
        "name": "Design Tokens Format Module (DTCG)",
        "termCode": "design-tokens-format-module-dtcg",
        "description": "The Design Tokens Format Module is a specification from the Design Tokens Community Group (DTCG) for exchanging design tokens in JSON. It defines how a file represents named tokens, groups, types, values, and references. The group lists version 2025.10 as stable. It is a Community Group specification published outside the W3C Standards Track.",
        "url": "https://lexkonovalov.com/glossary/design-tokens-format-module-dtcg.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-tokens-format-module-dtcg.html#webpage"
        },
        "alternateName": [
          "DTCG Format Module",
          "Design Tokens Format Module"
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
        "@id": "https://lexkonovalov.com/glossary/design-tokens-format-module-dtcg.html#breadcrumbs",
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
            "name": "Design Tokens Format Module (DTCG)",
            "item": "https://lexkonovalov.com/glossary/design-tokens-format-module-dtcg.html"
          }
        ]
      }
    ],
    "contentMarkdown": "# Design Tokens Format Module (DTCG)\n\nThe Design Tokens Format Module is a specification from the Design Tokens Community Group (DTCG) for exchanging design tokens in JSON. It defines how a file represents named tokens, groups, types, values, and references. The group lists version 2025.10 as stable. It is a Community Group specification published outside the W3C Standards Track.\n\n## What does a DTCG token look like?\n\nThe following 2025.10 example groups two duration tokens under `motion`. The base duration is 150 milliseconds. The feedback token reuses it by reference.\n\n```json\n{\n  \"motion\": {\n    \"$type\": \"duration\",\n    \"fast\": {\n      \"$value\": { \"value\": 150, \"unit\": \"ms\" }\n    },\n    \"feedback\": {\n      \"$value\": \"{motion.fast}\"\n    }\n  }\n}\n```\n\nThe base token `motion.fast` inherits its duration type from the group. `motion.feedback` gets its type from the token it references. The curly-brace reference points to the token at `motion.fast`, so `motion.feedback` resolves to the same duration value of 150 milliseconds. The `motion` group organizes the tokens. Each child token has its own `$value`.\n\n## What does the Format Module cover?\n\nThe Format Module defines the exchange structure and the rules for interpreting it. It covers supported types, including composite types that combine related properties into one value. The separate Resolver Module describes how to resolve token values for different contexts, such as a light or dark theme.\n\nUse the format to share the data between tools. Your team still decides how to organize tokens, which names communicate a semantic role, and when to change a token. A platform build can turn the resolved values into the files an application uses.\n\n## How do you check interoperability?\n\nPick a small set of real tokens and verify what each tool can import, resolve, and export. Include the types you use and a reference across groups. If the workflow supports themes, check the same role in two contexts. Compare the resolved output with the values expected by the application. Test for broken references and circular references.\n\nRecord the supported specification version and any extensions your workflow relies on. A valid JSON file still needs to follow the format’s token rules. If a tool drops a reference or exports a literal instead, check whether the next tool still has the information your workflow needs.\n\n## Related terms\n\n- [Design Tokens](/glossary/design-tokens.html)\n- [Style Dictionary](/glossary/style-dictionary.html)\n- [Semantic Tokens](/glossary/semantic-tokens.html)\n- [Token Resolver Engine](/glossary/token-resolver-engine.html)\n\n## Sources\n\n- [Design Tokens Format Module 2025.10, DTCG](https://www.designtokens.org/tr/2025.10/format/)\n- [Design Tokens Resolver Module 2025.10, DTCG](https://www.designtokens.org/tr/2025.10/resolver/)\n- [Technical reports, DTCG](https://www.designtokens.org/technical-reports/)"
  },
  {
    "id": "029",
    "name": "Semantic Tokens",
    "slug": "semantic-tokens",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "A semantic token is a design token whose name describes what a value is for, such as the color of link text. Teams can reuse the same role across components and assign it different values for light and dark themes.",
    "purpose": "Abstracts raw visual values into purposeful UI roles, enabling scalable theming, dark mode mapping, and brand variation without modifying component code.",
    "keyConcepts": [
      "Role-based token naming",
      "Theme context mapping (Light vs Dark)",
      "Semantic token vs token alias",
      "Scope hierarchy",
      "Component-scoped tokens"
    ],
    "howItWorks": "Maps functional UI intent to underlying primitive palette values or literal definitions, allowing runtime theme switching to alter appearance globally while preserving design integrity.",
    "relatedTerms": [
      "Design Tokens",
      "Design Primitives",
      "Figma Variables & Modes",
      "Component Architecture"
    ],
    "seoTitle": "Semantic Tokens: Naming and Theming | Product Design Glossary",
    "sources": [
      "Design Tokens, Atlassian Design System (https://atlassian.design/foundations/tokens/design-tokens/)",
      "Design Tokens Format Module 2025.10, DTCG (https://www.designtokens.org/tr/2025.10/format/)",
      "Design Tokens Resolver Module 2025.10, DTCG (https://www.designtokens.org/tr/2025.10/resolver/)"
    ],
    "seoDescription": "Learn how semantic tokens name a UI role and keep that role stable across themes. See how they differ from primitive tokens and aliases.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/semantic-tokens.html",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/semantic-tokens.html#webpage",
        "url": "https://lexkonovalov.com/glossary/semantic-tokens.html",
        "name": "Semantic Tokens: Naming and Theming | Product Design Glossary",
        "description": "Learn how semantic tokens name a UI role and keep that role stable across themes. See how they differ from primitive tokens and aliases.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/semantic-tokens.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/semantic-tokens.html#breadcrumbs"
        },
        "citation": [
          "https://atlassian.design/foundations/tokens/design-tokens/",
          "https://www.designtokens.org/tr/2025.10/format/",
          "https://www.designtokens.org/tr/2025.10/resolver/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/semantic-tokens.html#term",
        "name": "Semantic Tokens",
        "termCode": "semantic-tokens",
        "description": "A semantic token is a design token whose name describes what a value is for, such as the color of link text. Teams can reuse the same role across components and assign it different values for light and dark themes.",
        "url": "https://lexkonovalov.com/glossary/semantic-tokens.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/semantic-tokens.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/semantic-tokens.html#breadcrumbs",
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
            "name": "Semantic Tokens",
            "item": "https://lexkonovalov.com/glossary/semantic-tokens.html"
          }
        ]
      }
    ],
    "contentMarkdown": "# Semantic Tokens\n\nA semantic token is a design token whose name describes what a value is for, such as the color of link text. Teams can reuse the same role across components and assign it different values for light and dark themes.\n\n## How do semantic tokens work across themes?\n\nA checkout link might use `color.text.link`. In a light theme, that role might point to `color.blue.600`. In a dark theme, it might point to `color.blue.300`. The link still asks for the color assigned to link text. The theme supplies the appropriate value.\n\n| Name | What the name tells you |\n|---|---|\n| `color.blue.600` | A step in a base palette |\n| `color.text.link` | The role the color serves in the interface |\n| `button.primary.background` | A decision scoped to a specific component and variant |\n\nThese names are illustrative. The palette step number is local to this system. Document how each role should be used and verify each foreground and background pairing in the actual interface.\n\n## Is a semantic token the same as an alias?\n\n“Semantic” describes what the name means. An alias is a reference to another token. A semantic token can use an alias to reuse a palette value, or it can store a value directly. The reference is a mechanism for sharing the value.\n\n## How do you name and introduce semantic tokens?\n\n1. **Start with a repeated purpose.** Inspect where teams use a color or spacing decision. Identify the purpose those uses share.\n2. **Name the role.** Make the name useful when someone chooses a token. For example, link text and a selected background can use different roles even when they happen to share a value.\n3. **Set values per theme and test them.** Check representative components, states, and backgrounds in the contexts where people use them.\n4. **Move consumers to the shared role.** Review each use before replacing the original values. If a component needs its own change policy, document a component token for that decision.\n\nChange the narrowest token that matches the intended scope. To update link text across checkout and settings, change the link text role. To update only one component, inspect whether it already has a dedicated token or setting.\n\n## Related terms\n\n- [Design Tokens](/glossary/design-tokens.html)\n- [Design Primitives](/glossary/design-primitives.html)\n- [Figma Variables & Modes](/glossary/figma-variables-modes.html)\n- [Component Architecture](/glossary/component-architecture.html)\n\n## Sources\n\n- [Design Tokens, Atlassian Design System](https://atlassian.design/foundations/tokens/design-tokens/)\n- [Design Tokens Format Module 2025.10, DTCG](https://www.designtokens.org/tr/2025.10/format/)\n- [Design Tokens Resolver Module 2025.10, DTCG](https://www.designtokens.org/tr/2025.10/resolver/)"
  },
  {
    "id": "030",
    "name": "Design Primitives",
    "slug": "design-primitives",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Design primitives are basic building blocks that a design system uses to compose more specific decisions or interfaces. In a token model, a primitive usually means a named base value. In a component library, it can mean a small reusable component for a basic task such as layout.",
    "purpose": "Establishes raw, unopinionated foundational values and low-level structural components upon which semantic decisions and complex patterns are assembled.",
    "keyConcepts": [
      "Primitive token vs semantic token",
      "Named scale steps (e.g. space.200)",
      "Primitive layout components (Stack, Inline)",
      "Scope of base value changes",
      "Foundational scales"
    ],
    "howItWorks": "Provides immutable, math-driven scales of color palettes, typographic steps, and spacing increments alongside atomic structural components to ensure foundational mathematical harmony.",
    "relatedTerms": [
      "Design Tokens",
      "Semantic Tokens",
      "Component Architecture",
      "Atomic Design"
    ],
    "seoTitle": "Design Primitives and Primitive Tokens | Product Design Glossary",
    "sources": [
      "Design Tokens, Atlassian Design System (https://atlassian.design/foundations/tokens/design-tokens/)",
      "Primitives overview, Atlassian Design System (https://atlassian.design/foundations/spacing/primitives)",
      "Design Tokens Format Module 2025.10, DTCG (https://www.designtokens.org/tr/2025.10/format/)"
    ],
    "seoDescription": "Understand design primitives, from base color and spacing tokens to layout components like Stack. Learn where each belongs in a design system.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/design-primitives.html",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-primitives.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-primitives.html",
        "name": "Design Primitives and Primitive Tokens | Product Design Glossary",
        "description": "Understand design primitives, from base color and spacing tokens to layout components like Stack. Learn where each belongs in a design system.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-primitives.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-primitives.html#breadcrumbs"
        },
        "citation": [
          "https://atlassian.design/foundations/tokens/design-tokens/",
          "https://atlassian.design/foundations/spacing/primitives",
          "https://www.designtokens.org/tr/2025.10/format/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-primitives.html#term",
        "name": "Design Primitives",
        "termCode": "design-primitives",
        "description": "Design primitives are basic building blocks that a design system uses to compose more specific decisions or interfaces. In a token model, a primitive usually means a named base value. In a component library, it can mean a small reusable component for a basic task such as layout.",
        "url": "https://lexkonovalov.com/glossary/design-primitives.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-primitives.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/design-primitives.html#breadcrumbs",
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
            "name": "Design Primitives",
            "item": "https://lexkonovalov.com/glossary/design-primitives.html"
          }
        ]
      }
    ],
    "contentMarkdown": "# Design Primitives\n\nDesign primitives are basic building blocks that a design system uses to compose more specific decisions or interfaces. In a token model, a primitive usually means a named base value. In a component library, it can mean a small reusable component for a basic task such as layout.\n\n## What are primitive tokens?\n\nA primitive token names a base value such as a palette color or a spacing step. For example, `space.200` might represent 8 pixels. A token scoped to a component, such as `card.padding`, can reference it. The base token gives multiple decisions a shared value, while the card token identifies the decision the component is using.\n\n| Term | Example | What it provides |\n|---|---|---|\n| Primitive token | `space.200` | A named value on a spacing scale |\n| Semantic token | `color.text.link` | A value for a named purpose |\n| Primitive component | Stack | A reusable way to arrange elements vertically |\n\nThese layers are conventions. A team may let a layout component expose steps from a spacing scale and use semantic color tokens for interface text. Document the choice so teams can tell which values are intended for direct use.\n\n## What does a primitive component do?\n\nA layout primitive provides a small piece of reusable structure. Atlassian’s primitives include Stack for vertical arrangement and Inline for horizontal arrangement. A team could use a Stack to arrange a field label, input, and hint with a consistent gap. The field component still defines how those parts relate and how errors are communicated.\n\n## When should you change a base value?\n\nSuppose cards need more padding, while form layouts should stay as they are. Find the token or setting specific to cards and choose the spacing value it should use. If you change the base scale itself, trace its references and check representative screens. The same step may set card padding and the gaps between form fields.\n\nStart with base values and components that solve recurring problems. Add a named layer when it helps people understand a decision or change it at the right scope.\n\n## Related terms\n\n- [Design Tokens](/glossary/design-tokens.html)\n- [Semantic Tokens](/glossary/semantic-tokens.html)\n- [Component Architecture](/glossary/component-architecture.html)\n- [Atomic Design](/glossary/atomic-design.html)\n\n## Sources\n\n- [Design Tokens, Atlassian Design System](https://atlassian.design/foundations/tokens/design-tokens/)\n- [Primitives overview, Atlassian Design System](https://atlassian.design/foundations/spacing/primitives)\n- [Design Tokens Format Module 2025.10, DTCG](https://www.designtokens.org/tr/2025.10/format/)"
  },
  {
    "id": "031",
    "name": "Component Architecture",
    "slug": "component-architecture",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Component architecture is how a user interface is divided into components and how those components share data, state, and behavior. In a design system, it defines what a reusable component owns, what its consumers can configure, and how it fits into a larger interaction.",
    "purpose": "Establishes modular component boundaries, public APIs, and state management patterns to ensure UI components remain decoupled, testable, and composable.",
    "keyConcepts": [
      "Public API contract",
      "Controlled vs uncontrolled state",
      "Component composition & slots",
      "Responsibility boundaries",
      "Variant explosion prevention"
    ],
    "howItWorks": "Divides interface layouts into hierarchical, single-responsibility components with explicitly typed props, event handlers, and slot projections.",
    "relatedTerms": [
      "Component Libraries",
      "Headless UI Architecture",
      "Web Components",
      "Semantic HTML"
    ],
    "seoTitle": "UI Component Architecture | Product Design Glossary",
    "sources": [
      "Sharing State Between Components, React (https://react.dev/learn/sharing-state-between-components)",
      "Dialog, Radix Primitives (https://www.radix-ui.com/primitives/docs/components/dialog)",
      "Dialog (Modal) Pattern, W3C WAI (https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)"
    ],
    "seoDescription": "Learn how to define a shared UI component’s public API, state, and composition. A dialog example shows where product behavior belongs.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/component-architecture.html",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/component-architecture.html#webpage",
        "url": "https://lexkonovalov.com/glossary/component-architecture.html",
        "name": "UI Component Architecture | Product Design Glossary",
        "description": "Learn how to define a shared UI component’s public API, state, and composition. A dialog example shows where product behavior belongs.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/component-architecture.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/component-architecture.html#breadcrumbs"
        },
        "citation": [
          "https://react.dev/learn/sharing-state-between-components",
          "https://www.radix-ui.com/primitives/docs/components/dialog",
          "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/component-architecture.html#term",
        "name": "Component Architecture",
        "termCode": "component-architecture",
        "description": "Component architecture is how a user interface is divided into components and how those components share data, state, and behavior. In a design system, it defines what a reusable component owns, what its consumers can configure, and how it fits into a larger interaction.",
        "url": "https://lexkonovalov.com/glossary/component-architecture.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/component-architecture.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/component-architecture.html#breadcrumbs",
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
            "name": "Component Architecture",
            "item": "https://lexkonovalov.com/glossary/component-architecture.html"
          }
        ]
      }
    ],
    "contentMarkdown": "# Component Architecture\n\nComponent architecture is how a user interface is divided into components and how those components share data, state, and behavior. In a design system, it defines what a reusable component owns, what its consumers can configure, and how it fits into a larger interaction.\n\n## What belongs in a component’s public API?\n\nThe public API is the set of inputs, events, and composition points consumers can rely on. For a dialog, it might include a title, content slots, an open state, and a callback for requests to open or close. Document what each option does and the behavior consumers can expect.\n\nDecide where state lives. An uncontrolled dialog manages whether it is open internally. In a controlled dialog, the application supplies the current state and handles requests to change it. Use controlled state when the workflow needs to coordinate opening or closing. For example, the application can close the dialog after a save succeeds.\n\n## Example of a shared dialog\n\nSuppose checkout and account settings both open a modal to review a change.\n\n| Responsibility | Where it belongs |\n|---|---|\n| Dialog behavior | The shared dialog handles modal focus, keyboard dismissal, and how its title is exposed to assistive technology. |\n| Review content | Each product supplies the text, details, and actions for its task. |\n| Business outcome | Checkout submits the booking change, shows any error, and closes the dialog after a successful save. |\n\nThis boundary lets a product change its workflow without creating a new modal implementation. Review both the isolated component and a real screen. For example, after the dialog closes, check that focus returns to the trigger or another logical element if the trigger is gone.\n\n## When should you add a variant or a separate component?\n\nAdd an option when consumers need a supported variation of the same interaction, such as a wider surface for comparison content. Compose the dialog with other components when the layout changes. Give a recurring workflow its own pattern or wrapper when it adds business rules that the base dialog cannot own. Before adding a shared option, try it in the screens that need it. Document the default and what each consumer can configure.\n\n## Related terms\n\n- [Component Libraries](/glossary/component-libraries.html)\n- [Headless UI Architecture](/glossary/headless-ui-architecture.html)\n- [Web Components](/glossary/web-components.html)\n- [Semantic HTML](/glossary/semantic-html.html)\n\n## Sources\n\n- [Sharing State Between Components, React](https://react.dev/learn/sharing-state-between-components)\n- [Dialog, Radix Primitives](https://www.radix-ui.com/primitives/docs/components/dialog)\n- [Dialog (Modal) Pattern, W3C WAI](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)"
  },
  {
    "id": "032",
    "name": "Component Libraries",
    "slug": "component-libraries",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "A UI component library is a collection of reusable interface components, such as buttons, text inputs, and dialogs. In software, it provides implementations teams can use across screens or products. Usage guidance and rendered examples help consumers choose and configure them.",
    "purpose": "Provides modular, production-ready UI building blocks that reduce code duplication, increase development speed, and enforce visual consistency across applications.",
    "keyConcepts": [
      "Reusable UI components",
      "Component API & options",
      "Component states (default, hover, focus, disabled)",
      "Storybook documentation",
      "Shared component criteria"
    ],
    "howItWorks": "Packages tested, accessible frontend components with clear properties, variants, and documentation for consumption across multiple digital products and microfrontends.",
    "relatedTerms": [
      "Component Architecture",
      "Design System",
      "Headless UI Architecture",
      "DesignOps"
    ],
    "seoTitle": "UI Component Libraries | Product Design Glossary",
    "sources": [
      "Button, GOV.UK Design System (https://design-system.service.gov.uk/components/button/)",
      "What’s a story?, Storybook documentation (https://storybook.js.org/docs/get-started/whats-a-story)",
      "GOV.UK Design System (https://design-system.service.gov.uk/)"
    ],
    "alternateName": [
      "Component Library",
      "UI Component Library"
    ],
    "seoDescription": "Learn what a component library contains, how it fits within a design system, and what to document and test before sharing a UI component.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/component-libraries.html",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/component-libraries.html#webpage",
        "url": "https://lexkonovalov.com/glossary/component-libraries.html",
        "name": "UI Component Libraries | Product Design Glossary",
        "description": "Learn what a component library contains, how it fits within a design system, and what to document and test before sharing a UI component.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/component-libraries.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/component-libraries.html#breadcrumbs"
        },
        "citation": [
          "https://design-system.service.gov.uk/components/button/",
          "https://storybook.js.org/docs/get-started/whats-a-story",
          "https://design-system.service.gov.uk/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/component-libraries.html#term",
        "name": "Component Libraries",
        "termCode": "component-libraries",
        "description": "A UI component library is a collection of reusable interface components, such as buttons, text inputs, and dialogs. In software, it provides implementations teams can use across screens or products. Usage guidance and rendered examples help consumers choose and configure them.",
        "url": "https://lexkonovalov.com/glossary/component-libraries.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/component-libraries.html#webpage"
        },
        "alternateName": [
          "Component Library",
          "UI Component Library"
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
        "@id": "https://lexkonovalov.com/glossary/component-libraries.html#breadcrumbs",
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
            "name": "Component Libraries",
            "item": "https://lexkonovalov.com/glossary/component-libraries.html"
          }
        ]
      }
    ],
    "contentMarkdown": "# Component Libraries\n\nA UI component library is a collection of reusable interface components, such as buttons, text inputs, and dialogs. In software, it provides implementations teams can use across screens or products. Usage guidance and rendered examples help consumers choose and configure them.\n\n## What belongs in a component library?\n\nA useful entry describes the supported options, states, and behavior. For a button, document options such as label and emphasis, plus states such as focus and disabled. Include usage guidance where a choice affects the task, such as using a link for navigation and a button to submit a form.\n\nA library can expose styled components or behavior that teams style themselves. The [design system](/glossary/design-system.html) covers the broader decisions about foundations, patterns, and maintenance. Storybook is one way to document and exercise library components. A story shows a rendered example of a component in a specified state.\n\n## Example of documenting a shared button\n\n| What to document | Example |\n|---|---|\n| Options | A text label and supported emphasis variants |\n| Behavior | Responds to pointer and keyboard activation when enabled |\n| Examples | Default, keyboard focus, a long label, and disabled |\n| Integration | How a form uses the button and shows feedback during submission |\n\nUse an isolated example to check supported states and a product screen to check the whole interaction. A checkout flow, for example, still needs to explain a pending submission and handle errors. Reusing the same button gives teams a shared control. The flow determines what the action does and what feedback users receive.\n\n## When should a pattern become a shared component?\n\nStart with an interaction that repeats across real screens. Compare how teams use it and decide which differences matter. If two teams need the same behavior and differ only in emphasis, a supported variant may be enough. If one needs a different workflow, keep that workflow in the product and reuse the smaller component where it fits.\n\nDocument who maintains the component and how consumers adopt fixes. When you change a supported option or state, test a representative screen that uses the component before releasing the change.\n\n## Related terms\n\n- [Component Architecture](/glossary/component-architecture.html)\n- [Design System](/glossary/design-system.html)\n- [Headless UI Architecture](/glossary/headless-ui-architecture.html)\n- [DesignOps](/glossary/designops.html)\n\n## Sources\n\n- [Button, GOV.UK Design System](https://design-system.service.gov.uk/components/button/)\n- [What’s a story?, Storybook documentation](https://storybook.js.org/docs/get-started/whats-a-story)\n- [GOV.UK Design System](https://design-system.service.gov.uk/)"
  },
  {
    "id": "033",
    "name": "Design System Governance",
    "slug": "design-system-governance",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "Design system governance is how teams decide what belongs in a shared system, who can change it, and how those changes reach the products that use it. It defines who owns decisions, how contributors make proposals, what reviewers check, and who supports adoption.",
    "purpose": "Establishes clear contribution criteria, review workflows, and ownership models so shared systems evolve sustainably without fragmentation or bottlenecks.",
    "keyConcepts": [
      "Contribution criteria",
      "Decision ownership",
      "Proposal review workflow",
      "Adoption & migration support",
      "Lightweight governance"
    ],
    "howItWorks": "Routes component proposals through multi-disciplinary review gates, evaluating shared need and accessibility before approving contributions into canonical libraries.",
    "relatedTerms": [
      "DesignOps",
      "Design System",
      "Design System Versioning & SemVer",
      "Component Architecture"
    ],
    "seoTitle": "Design System Governance | Product Design Glossary",
    "sources": [
      "Propose a component or pattern, GOV.UK Design System (https://design-system.service.gov.uk/community/propose-a-component-or-pattern/)",
      "Develop a component or pattern, GOV.UK Design System (https://design-system.service.gov.uk/community/develop-a-component-or-pattern/)",
      "Contribution criteria, GOV.UK Design System (https://design-system.service.gov.uk/community/contribution-criteria/)"
    ],
    "seoDescription": "Learn how design system governance assigns ownership, evaluates contributions, and helps teams adopt changes. Includes a shared dialog example.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/design-system-governance.html",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-system-governance.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-system-governance.html",
        "name": "Design System Governance | Product Design Glossary",
        "description": "Learn how design system governance assigns ownership, evaluates contributions, and helps teams adopt changes. Includes a shared dialog example.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-system-governance.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-system-governance.html#breadcrumbs"
        },
        "citation": [
          "https://design-system.service.gov.uk/community/propose-a-component-or-pattern/",
          "https://design-system.service.gov.uk/community/develop-a-component-or-pattern/",
          "https://design-system.service.gov.uk/community/contribution-criteria/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-system-governance.html#term",
        "name": "Design System Governance",
        "termCode": "design-system-governance",
        "description": "Design system governance is how teams decide what belongs in a shared system, who can change it, and how those changes reach the products that use it. It defines who owns decisions, how contributors make proposals, what reviewers check, and who supports adoption.",
        "url": "https://lexkonovalov.com/glossary/design-system-governance.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-system-governance.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/design-system-governance.html#breadcrumbs",
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
            "name": "Design System Governance",
            "item": "https://lexkonovalov.com/glossary/design-system-governance.html"
          }
        ]
      }
    ],
    "contentMarkdown": "# Design System Governance\n\nDesign system governance is how teams decide what belongs in a shared system, who can change it, and how those changes reach the products that use it. It defines who owns decisions, how contributors make proposals, what reviewers check, and who supports adoption.\n\n## What decisions does governance cover?\n\nGive teams a clear route for asking for a change and a clear owner for deciding what happens. The GOV.UK Design System publishes a proposal process, contribution criteria, and guidance for developing components and patterns. A smaller system can use a shared issue tracker and named maintainers.\n\n| Decision | What to agree on |\n|---|---|\n| Scope | Which needs are shared across products and which can stay within one product? |\n| Evidence | What examples, user research, or compatibility checks support the proposal? |\n| Responsibility | Who proposes, reviews, maintains, and communicates the change? |\n| Adoption | Who updates guidance, writes migration steps, and supports consuming teams? |\n\n## Example of reviewing a shared dialog change\n\nA checkout team requests a wider dialog for reviewing a booking change. It shows where the current width makes it hard to compare the original and proposed fares. The system maintainers check whether other products need the same option and whether it affects focus, small screens, or longer content.\n\nIf a wider layout serves several teams, the maintainers can approve an optional variant with the existing default unchanged. Assign someone to build, document, and maintain it. A comparison layout that only checkout needs can stay in checkout and use the existing dialog behavior. Record the decision and its reason so another team can revisit it when it has new evidence.\n\n## How can a small team keep governance lightweight?\n\nAsk for a short proposal with the problem, candidate change, and affected consumers. Agree on a review owner and check the change in at least one real screen. If consumers need to change their code or designs, include a [version and migration plan](/glossary/design-system-versioning-semver.html). Close the loop by updating the documentation and telling the teams whose work is affected.\n\n## Related terms\n\n- [DesignOps](/glossary/designops.html)\n- [Design System](/glossary/design-system.html)\n- [Design System Versioning & SemVer](/glossary/design-system-versioning-semver.html)\n- [Component Architecture](/glossary/component-architecture.html)\n\n## Sources\n\n- [Propose a component or pattern, GOV.UK Design System](https://design-system.service.gov.uk/community/propose-a-component-or-pattern/)\n- [Develop a component or pattern, GOV.UK Design System](https://design-system.service.gov.uk/community/develop-a-component-or-pattern/)\n- [Contribution criteria, GOV.UK Design System](https://design-system.service.gov.uk/community/contribution-criteria/)"
  },
  {
    "id": "034",
    "name": "Design Engineering",
    "slug": "design-engineering",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Design engineering is the practice of designing and building user interfaces through both interaction design and front-end development. It uses code to explore how an interface behaves and to carry design decisions into production.",
    "purpose": "Connects aesthetic intent and technical implementation by building production-grade UI components, interactive prototypes, and design system tooling directly in code.",
    "keyConcepts": [
      "In-browser prototyping",
      "production component authoring",
      "design systems tooling",
      "interaction fidelity",
      "accessibility ergonomics"
    ],
    "howItWorks": "Design engineers operate at the intersection of design tools and codebases, implementing interactive states, token pipelines, and robust UI primitives with production-grade engineering standards.",
    "relatedTerms": [
      "Design-to-Code Workflow",
      "Design Tokens",
      "Component Architecture",
      "DesignOps"
    ],
    "seoTitle": "Design Engineering: What Design Engineers Do | Product Design Glossary",
    "sources": [
      "Design Engineering at Vercel, Vercel (https://vercel.com/blog/design-engineering-at-vercel)",
      "Design Engineer Principles, Vercel (https://vercel.com/design/engineer)"
    ],
    "seoDescription": "Learn what design engineering is and how design engineers use browser prototypes, production components, and design system tooling to shape interfaces.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/design-engineering.html",
    "contentMarkdown": "# Design Engineering\n\nDesign engineering is the practice of designing and building user interfaces through both interaction design and front-end development. It uses code to explore how an interface behaves and to carry design decisions into production.\n\n## What does a design engineer do?\n\nA design engineer might prototype a complex interaction in the browser, implement a production component, or improve the tools that connect design and code. Typical decisions include how an interaction adapts to smaller screens, what belongs in a shared component, and which states should be tested.\n\nResponsibilities vary by team. Some design engineers work inside product teams and ship features. Others maintain shared components or build tooling that helps multiple teams work with a design system.\n\n## Example: Designing a booking-change dialog in the browser\n\nThe team needs a dialog that can display a short confirmation or a long list of fare rules. A design engineer builds a working version, tests the content at narrow widths, and checks how keyboard focus moves. They find that the long list needs a scrollable content region with reachable actions. They document that behavior and implement it in the shared Dialog so other teams can reuse it.\n\n## How does it relate to a design-to-code workflow?\n\nDesign engineering describes the practice and the skills people bring to it. A design-to-code workflow describes how a team moves a design into a working product, including component mapping, implementation, and review.\n\n## Related terms\n\n- [Design-to-Code Workflow](/glossary/design-to-code-workflow.html)\n- [Design Tokens](/glossary/design-tokens.html)\n- [Component Architecture](/glossary/component-architecture.html)\n- [DesignOps](/glossary/designops.html)\n\n## Sources\n\n- [Design Engineering at Vercel, Vercel](https://vercel.com/blog/design-engineering-at-vercel)\n- [Design Engineer Principles, Vercel](https://vercel.com/design/engineer)",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-engineering.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-engineering.html",
        "name": "Design Engineering: What Design Engineers Do | Product Design Glossary",
        "description": "Learn what design engineering is and how design engineers use browser prototypes, production components, and design system tooling to shape interfaces.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-engineering.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-engineering.html#breadcrumbs"
        },
        "citation": [
          "https://vercel.com/blog/design-engineering-at-vercel",
          "https://vercel.com/design/engineer"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-engineering.html#term",
        "name": "Design Engineering",
        "termCode": "design-engineering",
        "description": "Design engineering is the practice of designing and building user interfaces through both interaction design and front-end development. It uses code to explore how an interface behaves and to carry design decisions into production.",
        "url": "https://lexkonovalov.com/glossary/design-engineering.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-engineering.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/design-engineering.html#breadcrumbs",
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
            "name": "Design Engineering",
            "item": "https://lexkonovalov.com/glossary/design-engineering.html"
          }
        ]
      }
    ]
  },
  {
    "id": "035",
    "name": "Design-to-Code Workflow",
    "slug": "design-to-code-workflow",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "AI & Agentic Systems",
    "maturity": "Emerging",
    "definition": "A design-to-code workflow is the process of turning a design into a working product interface. It connects design components, tokens, and interaction specifications with production code, then checks the result in the browser or app.",
    "purpose": "Bridges the gap between Figma design assets and multi-platform production code through automated token extraction, component mapping, and rapid preview verification.",
    "keyConcepts": [
      "Figma Code Connect",
      "design tokens pipeline",
      "component mapping",
      "visual preview verification",
      "automated regression checks"
    ],
    "howItWorks": "Maps Figma component variants directly to production code components, compiles design tokens into platform styling artifacts, and generates interactive previews for design review.",
    "relatedTerms": [
      "Design Tokens",
      "Style Dictionary",
      "Design Engineering",
      "Vibe Coding",
      "Visual Regression Testing"
    ],
    "seoTitle": "Design-to-Code Workflow: From Figma to Production | Product Design Glossary",
    "sources": [
      "Figma Code Connect, Figma Developer Docs (https://developers.figma.com/docs/code-connect/)",
      "Use Code Snippets in Dev Mode, Figma (https://help.figma.com/hc/en-us/articles/15023202277399-Use-code-snippets-in-Dev-Mode/)",
      "Configuration, Style Dictionary (https://styledictionary.com/reference/config/)"
    ],
    "seoDescription": "Learn how a design-to-code workflow connects Figma components, design tokens, production code, and UI review. See what to automate and what to verify.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/design-to-code-workflow.html",
    "contentMarkdown": "# Design-to-Code Workflow\n\nA design-to-code workflow is the process of turning a design into a working product interface. It connects design components, tokens, and interaction specifications with production code, then checks the result in the browser or app.\n\n## What does a design-to-code workflow include?\n\n1. **Map designs to existing components.** Identify which production components, variants, and states the design uses. Resolve gaps with the team before building a new component.\n2. **Build platform outputs from shared tokens.** For example, transform a token source into CSS custom properties. Decide which source owns the values and where changes get reviewed.\n3. **Implement the interaction.** Assemble existing components and connect them to product data, validation, loading, and error handling.\n4. **Review a working preview.** Check the layout with realistic content and test keyboard behavior, focus, and state changes. Add automated checks for states that are easy to break.\n\n## Example: A booking-change dialog\n\nA designer uses the shared Dialog and Button in Figma. The developer finds their production counterparts, reuses the spacing and color tokens, and connects the dialog to the booking service. In the preview, the team checks a long fare description on mobile, a failed request, and where keyboard focus goes after the dialog closes.\n\n## What can the team automate?\n\nA token build can produce platform files, and screenshot comparisons can flag visual changes. With the Code Connect CLI, teams can publish usage snippets for mapped production components in Figma Dev Mode. The team still owns decisions about component behavior, real data, and whether the working interface matches the design intent.\n\n## Related terms\n\n- [Design Tokens](/glossary/design-tokens.html)\n- [Style Dictionary](/glossary/style-dictionary.html)\n- [Design Engineering](/glossary/design-engineering.html)\n- [Vibe Coding](/glossary/vibe-coding.html)\n- [Visual Regression Testing](/glossary/visual-regression-testing.html)\n\n## Sources\n\n- [Figma Code Connect, Figma Developer Docs](https://developers.figma.com/docs/code-connect/)\n- [Use Code Snippets in Dev Mode, Figma](https://help.figma.com/hc/en-us/articles/15023202277399-Use-code-snippets-in-Dev-Mode/)\n- [Configuration, Style Dictionary](https://styledictionary.com/reference/config/)",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-to-code-workflow.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-to-code-workflow.html",
        "name": "Design-to-Code Workflow: From Figma to Production | Product Design Glossary",
        "description": "Learn how a design-to-code workflow connects Figma components, design tokens, production code, and UI review. See what to automate and what to verify.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-to-code-workflow.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-to-code-workflow.html#breadcrumbs"
        },
        "citation": [
          "https://developers.figma.com/docs/code-connect/",
          "https://help.figma.com/hc/en-us/articles/15023202277399-Use-code-snippets-in-Dev-Mode/",
          "https://styledictionary.com/reference/config/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-to-code-workflow.html#term",
        "name": "Design-to-Code Workflow",
        "termCode": "design-to-code-workflow",
        "description": "A design-to-code workflow is the process of turning a design into a working product interface. It connects design components, tokens, and interaction specifications with production code, then checks the result in the browser or app.",
        "url": "https://lexkonovalov.com/glossary/design-to-code-workflow.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-to-code-workflow.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/design-to-code-workflow.html#breadcrumbs",
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
            "name": "Design-to-Code Workflow",
            "item": "https://lexkonovalov.com/glossary/design-to-code-workflow.html"
          }
        ]
      }
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
    "maturity": "Established",
    "definition": "Figma variables store reusable values that you can apply to supported design properties. A collection groups variables, and its modes provide different sets of values for those variables. Switching a frame’s mode changes how its bound properties resolve, so the same design can show a light or dark theme.",
    "purpose": "Enables native design token management, mode switching (light/dark, responsive density, multi-brand theming), and alias resolution directly within Figma design files.",
    "keyConcepts": [
      "Variable types (color, number, string, boolean)",
      "Collections and Modes",
      "Variable alias binding",
      "Mode inheritance and overrides",
      "DTCG JSON token import/export"
    ],
    "howItWorks": "Binds UI layer fills, strokes, dimensions, and text to variable aliases organized into collections, allowing parent frame mode toggles to cascade across nested child layers.",
    "relatedTerms": [
      "Semantic Tokens",
      "Design Tokens",
      "Design-to-Code Workflow",
      "Design Tokens Format Module (DTCG)"
    ],
    "seoTitle": "Figma Variables and Modes | Product Design Glossary",
    "sources": [
      "Overview of variables, collections, and modes, Figma (https://help.figma.com/hc/en-us/articles/14506821864087-Overview-of-variables-collections-and-modes)",
      "Modes for variables, Figma (https://help.figma.com/hc/en-us/articles/15343816063383-Modes-for-variables)"
    ],
    "seoDescription": "Learn how Figma variables, collections, and modes work. Use light and dark themes to test aliases, frame inheritance, and JSON import limits.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/figma-variables-modes.html",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/figma-variables-modes.html#webpage",
        "url": "https://lexkonovalov.com/glossary/figma-variables-modes.html",
        "name": "Figma Variables and Modes | Product Design Glossary",
        "description": "Learn how Figma variables, collections, and modes work. Use light and dark themes to test aliases, frame inheritance, and JSON import limits.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/figma-variables-modes.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/figma-variables-modes.html#breadcrumbs"
        },
        "citation": [
          "https://help.figma.com/hc/en-us/articles/14506821864087-Overview-of-variables-collections-and-modes",
          "https://help.figma.com/hc/en-us/articles/15343816063383-Modes-for-variables"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/figma-variables-modes.html#term",
        "name": "Figma Variables & Modes",
        "termCode": "figma-variables-modes",
        "description": "Figma variables store reusable values that you can apply to supported design properties. A collection groups variables, and its modes provide different sets of values for those variables. Switching a frame’s mode changes how its bound properties resolve, so the same design can show a light or dark theme.",
        "url": "https://lexkonovalov.com/glossary/figma-variables-modes.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/figma-variables-modes.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/figma-variables-modes.html#breadcrumbs",
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
            "name": "Figma Variables & Modes",
            "item": "https://lexkonovalov.com/glossary/figma-variables-modes.html"
          }
        ]
      }
    ],
    "contentMarkdown": "# Figma Variables & Modes\n\nFigma variables store reusable values that you can apply to supported design properties. A collection groups variables, and its modes provide different sets of values for those variables. Switching a frame’s mode changes how its bound properties resolve, so the same design can show a light or dark theme.\n\n## How do variables, collections, and modes work?\n\nFigma supports color, number, string, and Boolean variables. A variable can store a value directly or reference another variable through an alias. A collection defines which modes its variables share. Each mode supplies one value per variable.\n\n| In Figma | Example |\n|---|---|\n| Palette collection | Color variables named `blue/600` and `blue/300` |\n| Semantic colors collection | Light and Dark modes |\n| Semantic variable | `color/text/link`, referencing `blue/600` in Light and `blue/300` in Dark |\n\nBind the link’s text fill to the semantic variable. In the frame’s Appearance settings, choose Light or Dark for the Semantic colors collection. The same link layer keeps its variable binding as the color changes. Check contrast against the actual background in both themes.\n\n## Why is a layer still showing the wrong mode?\n\nFor a collection, an object set to Auto looks up its parent hierarchy for an explicit mode. If a nested frame has an explicit override, its children can use that mode even when the outer frame changes. Check the layer’s binding, the collection it comes from, and the nearest mode setting. When no override applies, Figma uses the applicable default.\n\nUse separate collections for choices that need to vary independently. A color theme and a spacing density can have separate modes so you can review Dark with either Compact or Comfortable spacing.\n\n## Can you use Figma variables as design tokens?\n\nVariables can represent token decisions inside Figma. Figma documents DTCG JSON import for supported token types and JSON export of variable modes. For example, its dimension import expects pixels, and its duration import expects seconds. Cross-collection alias import uses Figma-specific extension data.\n\nTry exporting Light and Dark and importing them into a test collection. Check both values and whether the link variable still references its palette variable. If Figma cannot find the target collection, check the mapping before using the files in a [design-to-code workflow](/glossary/design-to-code-workflow.html). Agree on which source owns the values and how a change reaches the application.\n\n## Related terms\n\n- [Semantic Tokens](/glossary/semantic-tokens.html)\n- [Design Tokens](/glossary/design-tokens.html)\n- [Design-to-Code Workflow](/glossary/design-to-code-workflow.html)\n- [Design Tokens Format Module (DTCG)](/glossary/design-tokens-format-module-dtcg.html)\n\n## Sources\n\n- [Overview of variables, collections, and modes, Figma](https://help.figma.com/hc/en-us/articles/14506821864087-Overview-of-variables-collections-and-modes)\n- [Modes for variables, Figma](https://help.figma.com/hc/en-us/articles/15343816063383-Modes-for-variables)"
  },
  {
    "id": "038",
    "name": "Semantic HTML",
    "slug": "semantic-html",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Semantic HTML means choosing HTML elements that describe the purpose of content and controls. Elements such as headings, links, buttons, and form labels give browsers information about a page’s structure and how people can interact with it.",
    "purpose": "Provides built-in keyboard navigation, native accessibility tree roles, search crawlability, and machine-actionable structure for assistive technologies and autonomous AI agents.",
    "keyConcepts": [
      "WHATWG living standard",
      "accessibility tree mapping",
      "native interactive controls",
      "form labeling ergonomics",
      "AI agent browser execution"
    ],
    "howItWorks": "Employs native semantic tags (<article>, <nav>, <button>, <input>) rather than unstyled div/span containers, giving browsers and assistive clients default behaviors and explicit roles.",
    "relatedTerms": [
      "Accessibility and WCAG",
      "ARIA (Accessible Rich Internet Applications)",
      "Web Components",
      "Structured Data for LLMs"
    ],
    "seoTitle": "Semantic HTML: Accessibility and AI Agents | Product Design Glossary",
    "sources": [
      "Sections, WHATWG HTML Living Standard (https://html.spec.whatwg.org/multipage/sections.html)",
      "Forms, WHATWG HTML Living Standard (https://html.spec.whatwg.org/multipage/forms.html)",
      "Labeling Controls, W3C WAI (https://www.w3.org/WAI/tutorials/forms/labels/)",
      "WebArena Agent Execution Traces (https://github.com/web-arena-x/webarena/blob/main/resources/README.md)",
      "AI Features and Your Website, Google Search Central (https://developers.google.com/search/docs/appearance/ai-features)"
    ],
    "seoDescription": "Learn how semantic HTML exposes page structure and controls, with practical examples for assistive technology and AI browser agents.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/semantic-html.html",
    "contentMarkdown": "# Semantic HTML\n\nSemantic HTML means choosing HTML elements that describe the purpose of content and controls. Elements such as headings, links, buttons, and form labels give browsers information about a page’s structure and how people can interact with it.\n\n## How does semantic HTML support accessibility?\n\nA browser uses HTML semantics to expose information such as roles, names, and states through its accessibility tree. A screen reader can use that information to identify a button or navigate by headings. An `<a href>` is a link to a destination. A native `<button>` is a control for an action and provides keyboard focus and activation by default. A generic `<div>` with a click handler needs extra work to provide comparable behavior.\n\n## Example: A quote request\n\n```html\n<form action=\"/quote\" method=\"post\">\n  <label for=\"quote-email\">Email address</label>\n  <input id=\"quote-email\" name=\"email\" type=\"email\" required>\n  <button type=\"submit\">Request a quote</button>\n</form>\n```\n\nThe label names the field, and the button text describes what happens next. In a real flow, test whether users can recover from validation errors and perceive the submission confirmation.\n\n## How does this help AI browser agents?\n\nSome browser agents use the accessibility tree to inspect a page. The WebArena benchmark, for example, records accessibility-tree observations alongside the agent’s actions. An agent using that view can look for an email field and a “Request a quote” button. Other agents may inspect the DOM or work from screenshots, so test the full task with the agent you care about.\n\nSearch discovery is a separate issue. For Google Search’s AI features, a supporting page must be indexed and eligible to appear with a snippet. Google requires no special markup for these features, and it selects supporting pages separately for each response.\n\n## Related terms\n\n- [Accessibility and WCAG](/glossary/accessibility-wcag.html)\n- [ARIA (Accessible Rich Internet Applications)](/glossary/aria-accessible-rich-internet-applications.html)\n- [Web Components](/glossary/web-components.html)\n- [Structured Data for LLMs](/glossary/structured-data-for-llms.html)\n\n## Sources\n\n- [Sections, WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/sections.html)\n- [Forms, WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/forms.html)\n- [Labeling Controls, W3C WAI](https://www.w3.org/WAI/tutorials/forms/labels/)\n- [WebArena Agent Execution Traces](https://github.com/web-arena-x/webarena/blob/main/resources/README.md)\n- [AI Features and Your Website, Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/semantic-html.html#webpage",
        "url": "https://lexkonovalov.com/glossary/semantic-html.html",
        "name": "Semantic HTML: Accessibility and AI Agents | Product Design Glossary",
        "description": "Learn how semantic HTML exposes page structure and controls, with practical examples for assistive technology and AI browser agents.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/semantic-html.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/semantic-html.html#breadcrumbs"
        },
        "citation": [
          "https://html.spec.whatwg.org/multipage/sections.html",
          "https://html.spec.whatwg.org/multipage/forms.html",
          "https://www.w3.org/WAI/tutorials/forms/labels/",
          "https://github.com/web-arena-x/webarena/blob/main/resources/README.md",
          "https://developers.google.com/search/docs/appearance/ai-features"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/semantic-html.html#term",
        "name": "Semantic HTML",
        "termCode": "semantic-html",
        "description": "Semantic HTML means choosing HTML elements that describe the purpose of content and controls. Elements such as headings, links, buttons, and form labels give browsers information about a page’s structure and how people can interact with it.",
        "url": "https://lexkonovalov.com/glossary/semantic-html.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/semantic-html.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/semantic-html.html#breadcrumbs",
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
            "name": "Semantic HTML",
            "item": "https://lexkonovalov.com/glossary/semantic-html.html"
          }
        ]
      }
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
    "contentMarkdown": "# Accessibility and WCAG\n\nWeb accessibility means designing and building websites and tools that people with disabilities can use. The Web Content Accessibility Guidelines (WCAG), developed through the W3C Web Accessibility Initiative, provide testable requirements for making web content more accessible.\n\nAccessibility addresses visual, auditory, motor, cognitive, and other access needs. WCAG provides a technical baseline; usability testing with people with disabilities helps teams understand barriers in real tasks.\n\n## What are the four WCAG principles?\n\nWCAG organizes its requirements under four principles, often abbreviated **POUR**:\n\n| Principle | What it means in practice |\n|---|---|\n| Perceivable | Provide information people can perceive, such as text alternatives for meaningful images and captions for video. |\n| Operable | Make controls usable with different input methods, including a keyboard. |\n| Understandable | Use clear instructions, predictable behavior, and helpful error messages. |\n| Robust | Expose content and controls so browsers and assistive technologies can interpret them. |\n\n## What do A, AA, and AAA mean?\n\nThese are cumulative conformance levels. **A** covers Level A criteria; **AA** includes A and AA; **AAA** includes all three levels. A conformance claim records the version, level, scope, date, and technologies relied upon. It applies to full pages and complete processes, such as every step of checkout.\n\nWCAG 2.2 is a W3C Recommendation. WCAG 3 remains a draft. WCAG conformance does not establish compliance with every applicable accessibility law.\n\n## Which WCAG 2.2 checks matter in everyday design?\n\nThese examples are a starting point, not a complete audit:\n\n- **Text contrast, 1.4.3 (AA):** Most text needs a contrast ratio of at least 4.5:1 against its background. Large-scale text needs 3:1: at least 18 pt, or 14 pt bold. The criterion includes exceptions, such as logos and inactive controls. [Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)\n- **Target size, 2.5.8 (AA):** Pointer targets must be at least 24 × 24 CSS pixels unless an exception applies. These include sufficient spacing and inline links. [Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)\n- **Focus visibility:** Keyboard focus must be visible under 2.4.7 (AA). Under 2.4.11 (AA), a focused component must not be entirely hidden by author-created content, such as a sticky banner. The separate Focus Appearance criterion, 2.4.13, is AAA. [Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)\n\n## An accessible form example\n\nConsider a quote-request form with an email field. A persistent label is programmatically associated with the field. Keyboard users can reach it and see focus. If the address is incomplete, the form displays “Enter an email address in the format name@example.com” and programmatically associates that message with the field.\n\nThe error message explains the problem without relying on color alone. Previously entered values remain available, and the submission confirmation is perceivable with assistive technology. Test the full submission flow, including errors and confirmation.\n\n## How should teams test accessibility?\n\nCombine automated checks with manual keyboard, zoom, and screen-reader testing. Include people with disabilities in usability research, and evaluate complete tasks as well as individual components. Automated tools can identify some failures; a clean scan does not prove WCAG conformance.\n\n## Related terms\n\n- [Semantic HTML](/glossary/semantic-html.html)\n- [ARIA (Accessible Rich Internet Applications)](/glossary/aria-accessible-rich-internet-applications.html)\n- [Component Architecture](/glossary/component-architecture.html)\n- [Design System](/glossary/design-system.html)\n\n## Sources\n\n- [Introduction to Web Accessibility, W3C WAI](https://www.w3.org/WAI/fundamentals/accessibility-intro/)\n- [Accessibility Principles, W3C WAI](https://www.w3.org/WAI/fundamentals/accessibility-principles/)\n- [WCAG 2.2 Recommendation, W3C](https://www.w3.org/TR/WCAG22/)\n- [WCAG 2 Overview, W3C WAI](https://www.w3.org/WAI/standards-guidelines/wcag/)\n- [User Notification: Forms Tutorial, W3C WAI](https://www.w3.org/WAI/tutorials/forms/notifications/)\n- [Evaluating Web Accessibility, W3C WAI](https://www.w3.org/WAI/test-evaluate/)",
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
    "definition": "WAI-ARIA is a W3C specification for exposing the roles, states, and properties of interface elements to assistive technology. It can describe information that native HTML alone does not express, such as whether a custom disclosure is expanded.",
    "purpose": "Bridges interactive accessibility gaps in complex dynamic web widgets by communicating programmatic roles, states, and relations to accessibility APIs.",
    "keyConcepts": [
      "WAI-ARIA 1.2 specification",
      "roles, states, and properties",
      "first rule of ARIA (prefer native HTML)",
      "ARIA authoring practices (APG)",
      "ARIA snapshots in testing"
    ],
    "howItWorks": "Applies aria-* attributes and role markers to DOM elements to communicate dynamic state (expanded, selected, busy) and relational bindings (labelledby, controls) without altering visual styles.",
    "relatedTerms": [
      "Semantic HTML",
      "Accessibility and WCAG",
      "Component Architecture",
      "Headless UI Architecture"
    ],
    "seoTitle": "What Is ARIA? Roles, States, and Properties | Product Design Glossary",
    "sources": [
      "WAI-ARIA 1.2, W3C (https://www.w3.org/TR/wai-aria-1.2/)",
      "Read Me First, W3C ARIA Authoring Practices Guide (https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/)",
      "Disclosure Pattern, W3C ARIA Authoring Practices Guide (https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)",
      "ARIA Snapshots, Playwright (https://playwright.dev/docs/aria-snapshots)",
      "WebArena Agent Execution Traces (https://github.com/web-arena-x/webarena/blob/main/resources/README.md)"
    ],
    "seoDescription": "Understand WAI-ARIA roles, states, and properties. See how aria-expanded describes a disclosure for assistive technology and browser agents.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html",
    "contentMarkdown": "# ARIA (Accessible Rich Internet Applications)\n\nWAI-ARIA is a W3C specification for exposing the roles, states, and properties of interface elements to assistive technology. It can describe information that native HTML alone does not express, such as whether a custom disclosure is expanded.\n\n## What do ARIA roles, states, and properties do?\n\nA role identifies what an element is, such as a dialog. A state describes a condition that can change, such as `aria-expanded`. A property describes an aspect or relationship, such as `aria-labelledby`, which points to the text that names an element.\n\nUse native HTML when it provides the semantics and behavior you need. Adding `role=\"button\"` to a `<div>` exposes a role. Keyboard focus and activation still need to be implemented.\n\n## Example: A fare-rules disclosure\n\nA native button labeled “Fare rules” reveals a hidden panel. While the panel is closed, the button has `aria-expanded=\"false\"`. Activating it shows the panel and sets `aria-expanded=\"true\"`. Closing it hides the panel and restores the false state. A native button gives you Enter and Space activation. Your code keeps the visible panel and reported state in sync. You can optionally use `aria-controls` to reference the panel’s ID.\n\n## How do you test the result?\n\nVerify that the button has the right name and state in the accessibility tree. Test it with a keyboard and a screen reader, and confirm that opening and closing the panel updates both the visible content and the exposed state. A Playwright ARIA snapshot can help catch changes in that exposed structure.\n\nAn AI browser agent that reads the accessibility tree can use the same role, name, and expanded state to find the button and decide whether to open it. Run the task with the intended agent to check whether it can open the panel and locate a specific rule. Keep that result separate from accessibility testing for people.\n\n## Related terms\n\n- [Semantic HTML](/glossary/semantic-html.html)\n- [Accessibility and WCAG](/glossary/accessibility-wcag.html)\n- [Component Architecture](/glossary/component-architecture.html)\n- [Headless UI Architecture](/glossary/headless-ui-architecture.html)\n\n## Sources\n\n- [WAI-ARIA 1.2, W3C](https://www.w3.org/TR/wai-aria-1.2/)\n- [Read Me First, W3C ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/)\n- [Disclosure Pattern, W3C ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)\n- [ARIA Snapshots, Playwright](https://playwright.dev/docs/aria-snapshots)\n- [WebArena Agent Execution Traces](https://github.com/web-arena-x/webarena/blob/main/resources/README.md)",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html#webpage",
        "url": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html",
        "name": "What Is ARIA? Roles, States, and Properties | Product Design Glossary",
        "description": "Understand WAI-ARIA roles, states, and properties. See how aria-expanded describes a disclosure for assistive technology and browser agents.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html#breadcrumbs"
        },
        "citation": [
          "https://www.w3.org/TR/wai-aria-1.2/",
          "https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/",
          "https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/",
          "https://playwright.dev/docs/aria-snapshots",
          "https://github.com/web-arena-x/webarena/blob/main/resources/README.md"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html#term",
        "name": "ARIA (Accessible Rich Internet Applications)",
        "termCode": "aria-accessible-rich-internet-applications",
        "description": "WAI-ARIA is a W3C specification for exposing the roles, states, and properties of interface elements to assistive technology. It can describe information that native HTML alone does not express, such as whether a custom disclosure is expanded.",
        "url": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html#webpage"
        },
        "alternateName": [
          "WAI-ARIA",
          "Accessible Rich Internet Applications"
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
        "@id": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html#breadcrumbs",
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
            "name": "ARIA (Accessible Rich Internet Applications)",
            "item": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html"
          }
        ]
      }
    ],
    "alternateName": [
      "WAI-ARIA",
      "Accessible Rich Internet Applications"
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
    "definition": "DesignOps, short for design operations, is the practice of improving how design teams work together and deliver work. It covers the processes, tools, and support teams use to onboard people, collaborate, review work, and share what they learn.",
    "purpose": "Scales design impact, reduces operational friction, clarifies decision governance, and streamlines cross-functional delivery across expanding product organizations.",
    "keyConcepts": [
      "Design onboarding & tooling",
      "ways of working & review cadence",
      "governance & adoption coordination",
      "knowledge sharing",
      "cross-functional alignment"
    ],
    "howItWorks": "Establishes standardized design reviews, maintains centralized documentation, coordinates design system migrations across product squads, and optimizes design tooling.",
    "relatedTerms": [
      "Design System Governance",
      "Design Engineering",
      "Continuous Experimentation",
      "Component Telemetry"
    ],
    "seoTitle": "What Is DesignOps? Design Operations in Practice | Product Design Glossary",
    "sources": [
      "DesignOps 101, Nielsen Norman Group (https://www.nngroup.com/articles/design-operations-101/)"
    ],
    "seoDescription": "Learn how DesignOps improves the way design teams work, with examples of onboarding, design reviews, and coordinating a design system migration.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/designops.html",
    "contentMarkdown": "# DesignOps\n\nDesignOps, short for design operations, is the practice of improving how design teams work together and deliver work. It covers the processes, tools, and support teams use to onboard people, collaborate, review work, and share what they learn.\n\n## What does DesignOps cover?\n\n- **Onboarding and access.** Help new designers find the current component library, research, and people who can answer questions.\n- **Ways of working.** Set up design reviews and make it clear who gives feedback, who makes decisions, and where the team records them.\n- **Coordination and adoption.** Maintain shared documentation, communicate changes, and help teams plan migrations that affect several products.\n\nA small team might start by assigning an owner to the design review and keeping decisions in one shared place. Larger organizations may have dedicated DesignOps staff.\n\n## DesignOps and design system governance\n\n[Design system governance](/glossary/design-system-governance.html) defines who can approve a change, how teams contribute, and how exceptions are handled. DesignOps helps affected teams put those decisions into practice through communication, documentation, and coordination. One person can be responsible for both.\n\nFor example, after maintainers approve a change to a shared booking-change dialog, DesignOps can help identify affected teams, assign migration owners, and make the new guidance easy to find.\n\n## Related terms\n\n- [Design System Governance](/glossary/design-system-governance.html)\n- [Design Engineering](/glossary/design-engineering.html)\n- [Continuous Experimentation](/glossary/continuous-experimentation.html)\n- [Component Telemetry](/glossary/component-telemetry.html)\n\n## Sources\n\n- [DesignOps 101, Nielsen Norman Group](https://www.nngroup.com/articles/design-operations-101/)",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/designops.html#webpage",
        "url": "https://lexkonovalov.com/glossary/designops.html",
        "name": "What Is DesignOps? Design Operations in Practice | Product Design Glossary",
        "description": "Learn how DesignOps improves the way design teams work, with examples of onboarding, design reviews, and coordinating a design system migration.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/designops.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/designops.html#breadcrumbs"
        },
        "citation": [
          "https://www.nngroup.com/articles/design-operations-101/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/designops.html#term",
        "name": "DesignOps",
        "termCode": "designops",
        "description": "DesignOps, short for design operations, is the practice of improving how design teams work together and deliver work. It covers the processes, tools, and support teams use to onboard people, collaborate, review work, and share what they learn.",
        "url": "https://lexkonovalov.com/glossary/designops.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/designops.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/designops.html#breadcrumbs",
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
            "name": "DesignOps",
            "item": "https://lexkonovalov.com/glossary/designops.html"
          }
        ]
      }
    ]
  },
  {
    "id": "043",
    "name": "Style Dictionary",
    "slug": "style-dictionary",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Style Dictionary is an open-source build tool that transforms shared design tokens into files for applications to consume. A build can produce CSS custom properties for the web and different outputs for other platforms from the same source definitions.",
    "purpose": "Automates the deterministic translation of platform-agnostic design tokens into native iOS, Android, web, and design tool artifacts from a single source of truth.",
    "keyConcepts": [
      "Token compilation build",
      "Transforms and transform groups",
      "Formats (css/variables, json, etc.)",
      "DTCG input support",
      "Platform targets (web, ios, android)"
    ],
    "howItWorks": "Parses hierarchical token definitions, resolves alias references, executes platform-specific transforms, and formats code files for automated downstream consumption.",
    "relatedTerms": [
      "Design Tokens",
      "Design Tokens Format Module (DTCG)",
      "Design Engineering",
      "Design-to-Code Workflow"
    ],
    "seoTitle": "Style Dictionary for Design Tokens | Product Design Glossary",
    "sources": [
      "Configuration, Style Dictionary (https://styledictionary.com/reference/config/)",
      "Built-in formats, Style Dictionary (https://styledictionary.com/reference/hooks/formats/predefined/)",
      "DTCG support, Style Dictionary (https://styledictionary.com/info/dtcg/)",
      "Using the CLI, Style Dictionary (https://styledictionary.com/getting-started/using_the_cli/)",
      "Built-in transforms, Style Dictionary (https://styledictionary.com/reference/hooks/transforms/predefined/)"
    ],
    "seoDescription": "Learn how Style Dictionary builds platform files from design tokens. See a small CSS example and what to verify before adopting DTCG inputs.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/style-dictionary.html",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/style-dictionary.html#webpage",
        "url": "https://lexkonovalov.com/glossary/style-dictionary.html",
        "name": "Style Dictionary for Design Tokens | Product Design Glossary",
        "description": "Learn how Style Dictionary builds platform files from design tokens. See a small CSS example and what to verify before adopting DTCG inputs.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/style-dictionary.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/style-dictionary.html#breadcrumbs"
        },
        "citation": [
          "https://styledictionary.com/reference/config/",
          "https://styledictionary.com/reference/hooks/formats/predefined/",
          "https://styledictionary.com/info/dtcg/",
          "https://styledictionary.com/getting-started/using_the_cli/",
          "https://styledictionary.com/reference/hooks/transforms/predefined/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/style-dictionary.html#term",
        "name": "Style Dictionary",
        "termCode": "style-dictionary",
        "description": "Style Dictionary is an open-source build tool that transforms shared design tokens into files for applications to consume. A build can produce CSS custom properties for the web and different outputs for other platforms from the same source definitions.",
        "url": "https://lexkonovalov.com/glossary/style-dictionary.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/style-dictionary.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/style-dictionary.html#breadcrumbs",
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
            "name": "Style Dictionary",
            "item": "https://lexkonovalov.com/glossary/style-dictionary.html"
          }
        ]
      }
    ],
    "contentMarkdown": "# Style Dictionary\n\nStyle Dictionary is an open-source build tool that transforms shared design tokens into files for applications to consume. A build can produce CSS custom properties for the web and different outputs for other platforms from the same source definitions.\n\n## How does a Style Dictionary build work?\n\nChoose the source files, configure a platform, then specify how tokens should be transformed and written. A **transform** can change a token’s name or value for the target. A **format** decides how the result appears in a file. A transform group gives a platform a reusable set of transforms.\n\n## Example of building CSS variables\n\nPut one DTCG number token in `tokens.json`:\n\n```json\n{\n  \"opacity\": {\n    \"muted\": { \"$type\": \"number\", \"$value\": 0.6 }\n  }\n}\n```\n\nSave the following as `config.json`. It converts token paths to kebab-case names and uses the built-in CSS variable format.\n\n```json\n{\n  \"source\": [\"tokens.json\"],\n  \"platforms\": {\n    \"css\": {\n      \"transforms\": [\"name/kebab\"],\n      \"buildPath\": \"dist/\",\n      \"files\": [\n        { \"destination\": \"tokens.css\", \"format\": \"css/variables\" }\n      ]\n    }\n  }\n}\n```\n\nWith Style Dictionary installed, run `npx style-dictionary build` from the directory containing both files. The expected output is `--opacity-muted: 0.6;` under `:root` in `dist/tokens.css`. An application can load that file and use the property where the design calls for that opacity.\n\n## How do themes and aliases affect the build?\n\nDecide which token values apply to each theme before generating its output. You might build one file per theme or emit variables under different CSS selectors. With `css/variables`, the `outputReferences` option can preserve eligible aliases as CSS variable references. Check that the referenced properties exist in the output the application loads.\n\nStyle Dictionary supports DTCG inputs. Its documentation identifies DTCG 2025.10 support as incomplete. Check the version you use against the types, references, and theme behavior your project needs. Run the build on a small fixture, inspect the output, and load it in one consuming component before bringing over the full token set.\n\n## Related terms\n\n- [Design Tokens](/glossary/design-tokens.html)\n- [Design Tokens Format Module (DTCG)](/glossary/design-tokens-format-module-dtcg.html)\n- [Design Engineering](/glossary/design-engineering.html)\n- [Design-to-Code Workflow](/glossary/design-to-code-workflow.html)\n\n## Sources\n\n- [Configuration, Style Dictionary](https://styledictionary.com/reference/config/)\n- [Built-in formats, Style Dictionary](https://styledictionary.com/reference/hooks/formats/predefined/)\n- [DTCG support, Style Dictionary](https://styledictionary.com/info/dtcg/)\n- [Using the CLI, Style Dictionary](https://styledictionary.com/getting-started/using_the_cli/)\n- [Built-in transforms, Style Dictionary](https://styledictionary.com/reference/hooks/transforms/predefined/)"
  },
  {
    "id": "044",
    "name": "Token Resolver Engine",
    "slug": "token-resolver-engine",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "A token resolver is software that determines which values apply to design tokens for a given context, such as a light or dark theme. It can combine token sources in a defined order and follow references to determine the values a consuming tool should use.",
    "purpose": "Resolves nested token alias references, contextual theme overrides, and mode inheritance rules deterministically according to DTCG resolution order specifications.",
    "keyConcepts": [
      "Resolution order precedence",
      "Context modifiers (theme, density, brand)",
      "Winning reference selection",
      "Circular reference prevention",
      "DTCG Resolver Module 2025.10"
    ],
    "howItWorks": "Applies cascading token sets in a declared sequence where subsequent modifiers override preceding values, traversing reference graphs until concrete primitives are resolved.",
    "relatedTerms": [
      "Design Tokens",
      "Design Tokens Format Module (DTCG)",
      "Style Dictionary",
      "Semantic Tokens"
    ],
    "seoTitle": "Design Token Resolution and Theming | Product Design Glossary",
    "sources": [
      "Design Tokens Resolver Module 2025.10, DTCG (https://www.designtokens.org/tr/2025.10/resolver/)",
      "Design Tokens Format Module 2025.10, DTCG (https://www.designtokens.org/tr/2025.10/format/)"
    ],
    "alternateName": [
      "Design Token Resolver"
    ],
    "seoDescription": "See how token resolution selects theme sources, applies precedence, and follows aliases. Includes a light and dark example using DTCG concepts.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/token-resolver-engine.html",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/token-resolver-engine.html#webpage",
        "url": "https://lexkonovalov.com/glossary/token-resolver-engine.html",
        "name": "Design Token Resolution and Theming | Product Design Glossary",
        "description": "See how token resolution selects theme sources, applies precedence, and follows aliases. Includes a light and dark example using DTCG concepts.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/token-resolver-engine.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/token-resolver-engine.html#breadcrumbs"
        },
        "citation": [
          "https://www.designtokens.org/tr/2025.10/resolver/",
          "https://www.designtokens.org/tr/2025.10/format/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/token-resolver-engine.html#term",
        "name": "Token Resolver Engine",
        "termCode": "token-resolver-engine",
        "description": "A token resolver is software that determines which values apply to design tokens for a given context, such as a light or dark theme. It can combine token sources in a defined order and follow references to determine the values a consuming tool should use.",
        "url": "https://lexkonovalov.com/glossary/token-resolver-engine.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/token-resolver-engine.html#webpage"
        },
        "alternateName": [
          "Design Token Resolver"
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
        "@id": "https://lexkonovalov.com/glossary/token-resolver-engine.html#breadcrumbs",
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
            "name": "Token Resolver Engine",
            "item": "https://lexkonovalov.com/glossary/token-resolver-engine.html"
          }
        ]
      }
    ],
    "contentMarkdown": "# Token Resolver Engine\n\nA token resolver is software that determines which values apply to design tokens for a given context, such as a light or dark theme. It can combine token sources in a defined order and follow references to determine the values a consuming tool should use.\n\n## What does a resolver do?\n\nThe DTCG [Format Module](/glossary/design-tokens-format-module-dtcg.html) defines token values and references. The separate Resolver Module defines how to select and combine sources for a context. For example, a resolver document can list a base set and then a theme modifier in `resolutionOrder`. The input selects a context such as `dark` for that modifier. Under the Resolver Module’s ordering rules, if selected sources declare the same token more than once, the last declaration wins.\n\nA context choice and an alias answer different questions. The context selects which declaration of `color.text.link` applies. The alias points to the palette token whose value the link should use.\n\n## Example of resolving link text\n\nSuppose Base defines both palette colors and a default link role. The theme modifier adds no sources for Light and adds one source, Dark, for Dark mode.\n\n| Context | Sources applied in order | Winning reference for `color.text.link` |\n|---|---|---|\n| Light | Base | `{color.blue.600}` |\n| Dark | Base, then Dark | `{color.blue.300}` |\n\nThe palette is present in both results because each context includes Base. After selecting the winning declaration, follow its reference to the corresponding color value. The component still uses the same link role.\n\n## What should you test?\n\n- **Source order.** Confirm that Dark selects the override. If the value stays the same, check whether Base was applied after Dark.\n- **References.** Check that the target exists in the final token set and that aliases do not form a cycle. For a missing target, start by checking which sources were selected.\n- **Consumer output.** Verify the intended value in both contexts. A build tool can emit a literal or preserve the alias in a platform format that supports it.\n\nResolution determines what applies. Formatting determines how those decisions are represented, such as CSS custom properties. One tool can handle both jobs, or you can run a separate resolver before the platform build.\n\n## Related terms\n\n- [Design Tokens](/glossary/design-tokens.html)\n- [Design Tokens Format Module (DTCG)](/glossary/design-tokens-format-module-dtcg.html)\n- [Style Dictionary](/glossary/style-dictionary.html)\n- [Semantic Tokens](/glossary/semantic-tokens.html)\n\n## Sources\n\n- [Design Tokens Resolver Module 2025.10, DTCG](https://www.designtokens.org/tr/2025.10/resolver/)\n- [Design Tokens Format Module 2025.10, DTCG](https://www.designtokens.org/tr/2025.10/format/)"
  },
  {
    "id": "045",
    "name": "Headless UI Architecture",
    "slug": "headless-ui-architecture",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Headless UI architecture separates reusable interface behavior from the visual design that makes it look and feel like part of a product. A headless component can provide state, keyboard interactions, and accessibility semantics while the consuming team supplies styling and integrates it into the workflow.",
    "purpose": "Delivers robust, fully accessible keyboard navigation and WAI-ARIA states without imposing visual opinions or styling lock-in.",
    "keyConcepts": [
      "Unstyled components & hooks",
      "Accessibility semantics & focus management",
      "Keyboard choreography (Tab, Shift+Tab, Escape)",
      "Separation of behavior and presentation",
      "Integration testing in context"
    ],
    "howItWorks": "Implements complex state machines, ARIA roles, and keyboard focus traps in headless hooks or unstyled render components, leaving CSS presentation entirely to the consuming application.",
    "relatedTerms": [
      "Component Architecture",
      "Accessibility and WCAG",
      "Semantic HTML",
      "ARIA (Accessible Rich Internet Applications)"
    ],
    "seoTitle": "Headless UI Architecture | Product Design Glossary",
    "sources": [
      "Dialog, Radix Primitives (https://www.radix-ui.com/primitives/docs/components/dialog)",
      "Dialog (Modal) Pattern, W3C WAI (https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)",
      "Modal, React Aria (https://react-aria.adobe.com/Modal)"
    ],
    "seoDescription": "Learn what headless UI provides and what your team still owns. A modal dialog example covers focus, labels, styling, and when to choose it.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/headless-ui-architecture.html",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/headless-ui-architecture.html#webpage",
        "url": "https://lexkonovalov.com/glossary/headless-ui-architecture.html",
        "name": "Headless UI Architecture | Product Design Glossary",
        "description": "Learn what headless UI provides and what your team still owns. A modal dialog example covers focus, labels, styling, and when to choose it.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/headless-ui-architecture.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/headless-ui-architecture.html#breadcrumbs"
        },
        "citation": [
          "https://www.radix-ui.com/primitives/docs/components/dialog",
          "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
          "https://react-aria.adobe.com/Modal"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/headless-ui-architecture.html#term",
        "name": "Headless UI Architecture",
        "termCode": "headless-ui-architecture",
        "description": "Headless UI architecture separates reusable interface behavior from the visual design that makes it look and feel like part of a product. A headless component can provide state, keyboard interactions, and accessibility semantics while the consuming team supplies styling and integrates it into the workflow.",
        "url": "https://lexkonovalov.com/glossary/headless-ui-architecture.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/headless-ui-architecture.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/headless-ui-architecture.html#breadcrumbs",
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
            "name": "Headless UI Architecture",
            "item": "https://lexkonovalov.com/glossary/headless-ui-architecture.html"
          }
        ]
      }
    ],
    "contentMarkdown": "# Headless UI Architecture\n\nHeadless UI architecture separates reusable interface behavior from the visual design that makes it look and feel like part of a product. A headless component can provide state, keyboard interactions, and accessibility semantics while the consuming team supplies styling and integrates it into the workflow.\n\n## What does a headless component provide?\n\nLibraries expose behavior in different ways. An unstyled component can render elements and connect their behavior. A hook can expose state and interaction properties for the elements the application renders. Check what the library renders and which properties you must pass to your own elements.\n\n## Example of a headless modal dialog\n\nA travel team uses a dialog primitive to review a booking change. Radix Dialog, for example, provides modal focus handling, Escape dismissal, and parts for a title and description. The team supplies the title, fare details, buttons, and visible focus treatment. The booking request and error recovery remain part of the product workflow.\n\n| Layer | What to verify |\n|---|---|\n| Behavior | Focus moves inside when the modal opens, Tab and Shift+Tab stay inside, and Escape closes it. |\n| Content | The dialog has an accessible name, and the text explains what the user is reviewing. |\n| Presentation | The contrast and focus indicator work in the actual theme. Longer text and zoom leave the content usable. |\n| Integration | Closing usually returns focus to the trigger. If the trigger is gone, focus moves to a logical next element. A failed booking change gets clear feedback. |\n\nA primitive can help implement an accessible pattern. Test the result in context because labels, styling, and the surrounding flow affect whether it works for users.\n\n## When should you choose headless UI?\n\nUse a headless approach when products need to share an interaction but require different visual treatments. It can also help a design system build its own styled wrapper around behavior it trusts. If teams already agree on the appearance and need a ready-to-use control, a styled component library can require less integration work. Compare the effort to implement and test the complete experience in a representative screen.\n\n## Related terms\n\n- [Component Architecture](/glossary/component-architecture.html)\n- [Accessibility and WCAG](/glossary/accessibility-wcag.html)\n- [Semantic HTML](/glossary/semantic-html.html)\n- [ARIA (Accessible Rich Internet Applications)](/glossary/aria-accessible-rich-internet-applications.html)\n\n## Sources\n\n- [Dialog, Radix Primitives](https://www.radix-ui.com/primitives/docs/components/dialog)\n- [Dialog (Modal) Pattern, W3C WAI](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)\n- [Modal, React Aria](https://react-aria.adobe.com/Modal)"
  },
  {
    "id": "046",
    "name": "Composite Design Token",
    "slug": "composite-design-token",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "A composite design token represents one design decision with a value made up of several related properties. For example, a shadow can combine a color, two offsets, a blur radius, and a spread. A component can use the named shadow as one decision.",
    "purpose": "Encapsulates multi-property design decisions (such as shadows, typography, and borders) into a single cohesive, type-safe token unit.",
    "keyConcepts": [
      "Composite token vs token group",
      "Multi-property $value object",
      "Shadow composite structure (color, offsets, blur, spread)",
      "Composite type validation",
      "Cross-platform output compilation"
    ],
    "howItWorks": "Groups tightly-coupled properties into a single semantic token object, ensuring dependent values resolve simultaneously when consumed by design components or code.",
    "relatedTerms": [
      "Design Tokens",
      "Design Tokens Format Module (DTCG)",
      "Semantic Tokens",
      "Design Primitives"
    ],
    "seoTitle": "Composite Design Tokens | Product Design Glossary",
    "sources": [
      "Design Tokens Format Module 2025.10, DTCG (https://www.designtokens.org/tr/2025.10/format/)"
    ],
    "alternateName": [
      "Composite Token"
    ],
    "seoDescription": "Learn how a composite design token differs from a group. See a DTCG shadow example and when to keep related properties in one token.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/composite-design-token.html",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/composite-design-token.html#webpage",
        "url": "https://lexkonovalov.com/glossary/composite-design-token.html",
        "name": "Composite Design Tokens | Product Design Glossary",
        "description": "Learn how a composite design token differs from a group. See a DTCG shadow example and when to keep related properties in one token.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/composite-design-token.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/composite-design-token.html#breadcrumbs"
        },
        "citation": [
          "https://www.designtokens.org/tr/2025.10/format/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/composite-design-token.html#term",
        "name": "Composite Design Token",
        "termCode": "composite-design-token",
        "description": "A composite design token represents one design decision with a value made up of several related properties. For example, a shadow can combine a color, two offsets, a blur radius, and a spread. A component can use the named shadow as one decision.",
        "url": "https://lexkonovalov.com/glossary/composite-design-token.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/composite-design-token.html#webpage"
        },
        "alternateName": [
          "Composite Token"
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
        "@id": "https://lexkonovalov.com/glossary/composite-design-token.html#breadcrumbs",
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
            "name": "Composite Design Token",
            "item": "https://lexkonovalov.com/glossary/composite-design-token.html"
          }
        ]
      }
    ],
    "contentMarkdown": "# Composite Design Token\n\nA composite design token represents one design decision with a value made up of several related properties. For example, a shadow can combine a color, two offsets, a blur radius, and a spread. A component can use the named shadow as one decision.\n\n## How is a composite token different from a group?\n\nA group organizes separate tokens. In the DTCG format, a composite token declares one `$value` that contains the parts of a single decision. In a group named `elevation`, `card` and `dialog` could be two separate shadow tokens. Each of those tokens can carry its own set of shadow properties.\n\n## DTCG example of a shadow token\n\n```json\n{\n  \"elevation\": {\n    \"card\": {\n      \"$type\": \"shadow\",\n      \"$value\": {\n        \"color\": { \"colorSpace\": \"srgb\", \"components\": [0, 0, 0], \"alpha\": 0.16 },\n        \"offsetX\": { \"value\": 0, \"unit\": \"px\" },\n        \"offsetY\": { \"value\": 2, \"unit\": \"px\" },\n        \"blur\": { \"value\": 8, \"unit\": \"px\" },\n        \"spread\": { \"value\": 0, \"unit\": \"px\" }\n      }\n    }\n  }\n}\n```\n\nHere `elevation` is the group and `elevation.card` is the token path. This shadow uses the five required properties in a single value. The format also allows an optional `inset` flag. Use the fields supported by the token’s type. The [DTCG Format Module](/glossary/design-tokens-format-module-dtcg.html) defines each composite type and which properties may reference other tokens.\n\n## When should you use a composite token?\n\nUse one when the properties belong together in the consuming interface. If several components need the same card shadow, one token gives them a shared way to request that shadow. If an offset also needs to be reused independently, define an offset token and reference it inside the shadow where the format and tools support that reference.\n\nCheck what each consumer expects. For the example above, a web build could produce `0 2px 8px 0 rgb(0 0 0 / 16%)` for CSS `box-shadow`. Another platform may expect separate parameters. Verify the generated output and judge the rendered result in a real component before adopting the token across the library.\n\n## Related terms\n\n- [Design Tokens](/glossary/design-tokens.html)\n- [Design Tokens Format Module (DTCG)](/glossary/design-tokens-format-module-dtcg.html)\n- [Semantic Tokens](/glossary/semantic-tokens.html)\n- [Design Primitives](/glossary/design-primitives.html)\n\n## Sources\n\n- [Design Tokens Format Module 2025.10, DTCG](https://www.designtokens.org/tr/2025.10/format/)"
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
    "definition": "Component telemetry is data collected while design system components run in a product. Teams use it to observe where components appear, which versions or variants are in use, and what happens when people interact with them.",
    "purpose": "Informs design system roadmaps, adoption metrics, and safe deprecation lifecycles through automated static code analysis and runtime interaction monitoring.",
    "keyConcepts": [
      "Static code inventory",
      "runtime usage tracking",
      "prop distribution metrics",
      "interaction & error telemetry",
      "safe deprecation planning"
    ],
    "howItWorks": "Pairs build-time AST scanners (like Omlet) with runtime event instrumentation (OpenTelemetry) to track production component usage, error rates, and prop combinations across repositories.",
    "relatedTerms": [
      "DesignOps",
      "Design System Governance",
      "Product Telemetry & Analytics",
      "Continuous Experimentation",
      "Design System Versioning & SemVer"
    ],
    "seoTitle": "Component Telemetry: Design System Usage | Product Design Glossary",
    "sources": [
      "Component Usage Across Code Repositories, Omlet (https://omlet.dev/)",
      "Semantic Conventions for Events, OpenTelemetry (https://opentelemetry.io/docs/specs/semconv/general/events/)"
    ],
    "seoDescription": "Understand component telemetry for design systems, from runtime usage and error events to code inventory and planning a component deprecation.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/component-telemetry.html",
    "contentMarkdown": "# Component Telemetry\n\nComponent telemetry is data collected while design system components run in a product. Teams use it to observe where components appear, which versions or variants are in use, and what happens when people interact with them.\n\n## What can you measure?\n\n| Signal | Question it answers |\n|---|---|\n| Static code and dependency inventory | Which repositories reference a component, pass a particular prop, or depend on a package version? |\n| Runtime usage | In which instrumented apps did the component open or appear during the measurement period? |\n| Runtime interaction or error events | What happened after the component opened, such as a confirmation click or submission failure? |\n\nA code reference shows where to investigate. A runtime event shows that the instrumented behavior was observed. An error rate also needs a relevant denominator, such as failed submissions out of all recorded attempts. Define the event and the coverage before comparing products. For example, count apps that recorded at least one dialog open out of apps that report that event, and state the date range.\n\n## Example: Removing a deprecated Dialog prop\n\nA design system team wants to remove a legacy Dialog prop. A code scan identifies repositories that still pass it. An event recorded when the dialog opens shows which instrumented products serve that configuration. The team uses both results to contact owners, prioritize migrations, and investigate gaps before scheduling removal.\n\nKeep the payload tied to the decision. For this migration, a component identifier, package version, variant or legacy flag, and product identifier can be enough. Leave booking IDs, form input, and dialog content out of the event. Record what is instrumented so that an absence of events can be interpreted correctly.\n\n## Related terms\n\n- [DesignOps](/glossary/designops.html)\n- [Design System Governance](/glossary/design-system-governance.html)\n- [Product Telemetry & Analytics](/glossary/product-telemetry-analytics.html)\n- [Continuous Experimentation](/glossary/continuous-experimentation.html)\n- [Design System Versioning (SemVer)](/glossary/design-system-versioning-semver.html)\n\n## Sources\n\n- [Component Usage Across Code Repositories, Omlet](https://omlet.dev/)\n- [Semantic Conventions for Events, OpenTelemetry](https://opentelemetry.io/docs/specs/semconv/general/events/)",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/component-telemetry.html#webpage",
        "url": "https://lexkonovalov.com/glossary/component-telemetry.html",
        "name": "Component Telemetry: Design System Usage | Product Design Glossary",
        "description": "Understand component telemetry for design systems, from runtime usage and error events to code inventory and planning a component deprecation.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/component-telemetry.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/component-telemetry.html#breadcrumbs"
        },
        "citation": [
          "https://omlet.dev/",
          "https://opentelemetry.io/docs/specs/semconv/general/events/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/component-telemetry.html#term",
        "name": "Component Telemetry",
        "termCode": "component-telemetry",
        "description": "Component telemetry is data collected while design system components run in a product. Teams use it to observe where components appear, which versions or variants are in use, and what happens when people interact with them.",
        "url": "https://lexkonovalov.com/glossary/component-telemetry.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/component-telemetry.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/component-telemetry.html#breadcrumbs",
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
            "name": "Component Telemetry",
            "item": "https://lexkonovalov.com/glossary/component-telemetry.html"
          }
        ]
      }
    ]
  },
  {
    "id": "049",
    "name": "Visual Regression Testing",
    "slug": "visual-regression-testing",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Visual regression testing compares screenshots of a user interface with approved reference images, called baselines, to flag unexpected changes in appearance. It can catch changes in spacing, layout, typography, and component states after a code update.",
    "purpose": "Prevents unintended styling regressions, clipping, layout shifts, and visual breakage across multi-platform releases through automated pixel-diff and DOM-capture baselines.",
    "keyConcepts": [
      "Baseline screenshots",
      "pixel diffing",
      "capture environment stability",
      "component state coverage",
      "interaction testing complement"
    ],
    "howItWorks": "Renders components in isolated test runners (e.g. Playwright, Storybook), captures viewport snapshots against approved golden images, and flags visual deviations for human approval.",
    "relatedTerms": [
      "Component Architecture",
      "Design Engineering",
      "Design-to-Code Workflow"
    ],
    "seoTitle": "Visual Regression Testing: UI Baselines | Product Design Glossary",
    "sources": [
      "Visual Comparisons, Playwright (https://playwright.dev/docs/test-snapshots)",
      "Visual Tests, Storybook (https://storybook.js.org/docs/writing-tests/visual-testing)"
    ],
    "seoDescription": "Learn how visual regression testing compares UI screenshots with approved baselines to catch unintended changes in layout, styling, and component states.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/visual-regression-testing.html",
    "contentMarkdown": "# Visual Regression Testing\n\nVisual regression testing compares screenshots of a user interface with approved reference images, called baselines, to flag unexpected changes in appearance. It can catch changes in spacing, layout, typography, and component states after a code update.\n\n## How does visual regression testing work?\n\n1. **Choose a state and approve a baseline.** Capture an intentionally rendered page or component at a specific viewport, with representative content.\n2. **Keep the capture environment stable.** Use consistent browser, operating system, fonts, viewport, and test data. Control animations and other changing content where practical.\n3. **Review the differences.** Inspect the baseline, new screenshot, and diff. Fix unintended changes and update the baseline only after approving the new appearance.\n\n## Example: A booking-change dialog on mobile\n\nCapture the open dialog at a mobile viewport with a long fare description and both action buttons visible. A change to a shared spacing token pushes the confirmation button below the visible area. The diff flags the layout shift. The reviewer opens the preview to check whether the action remains reachable and whether the new layout is acceptable.\n\n## What should you test alongside screenshots?\n\nUse interaction tests to check whether the dialog opens, the right button submits, and focus returns to the trigger when it closes. A screenshot can show the dialog at one moment. Keyboard and assistive technology checks cover behavior a screenshot cannot capture.\n\n## Related terms\n\n- [Component Architecture](/glossary/component-architecture.html)\n- [Design Engineering](/glossary/design-engineering.html)\n- [Design-to-Code Workflow](/glossary/design-to-code-workflow.html)\n\n## Sources\n\n- [Visual Comparisons, Playwright](https://playwright.dev/docs/test-snapshots)\n- [Visual Tests, Storybook](https://storybook.js.org/docs/writing-tests/visual-testing)",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/visual-regression-testing.html#webpage",
        "url": "https://lexkonovalov.com/glossary/visual-regression-testing.html",
        "name": "Visual Regression Testing: UI Baselines | Product Design Glossary",
        "description": "Learn how visual regression testing compares UI screenshots with approved baselines to catch unintended changes in layout, styling, and component states.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/visual-regression-testing.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/visual-regression-testing.html#breadcrumbs"
        },
        "citation": [
          "https://playwright.dev/docs/test-snapshots",
          "https://storybook.js.org/docs/writing-tests/visual-testing"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/visual-regression-testing.html#term",
        "name": "Visual Regression Testing",
        "termCode": "visual-regression-testing",
        "description": "Visual regression testing compares screenshots of a user interface with approved reference images, called baselines, to flag unexpected changes in appearance. It can catch changes in spacing, layout, typography, and component states after a code update.",
        "url": "https://lexkonovalov.com/glossary/visual-regression-testing.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/visual-regression-testing.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/visual-regression-testing.html#breadcrumbs",
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
            "name": "Visual Regression Testing",
            "item": "https://lexkonovalov.com/glossary/visual-regression-testing.html"
          }
        ]
      }
    ]
  },
  {
    "id": "050",
    "name": "Design System Versioning & SemVer",
    "slug": "design-system-versioning-semver",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "Design system versioning helps teams identify releases and understand what changes when they upgrade a shared system. Semantic Versioning (SemVer) is one scheme for versioning software packages based on changes to a declared public API.",
    "purpose": "Governs package releases and migration paths across consuming codebases, communicating backward-compatible vs breaking structural changes transparently.",
    "keyConcepts": [
      "Semantic Versioning (MAJOR.MINOR.PATCH)",
      "Public API compatibility contract",
      "Breaking change deprecation window",
      "Design file and code release alignment",
      "Migration guides & release notes"
    ],
    "howItWorks": "Increments PATCH for backward-compatible bug fixes, MINOR for new backward-compatible capabilities, and MAJOR for breaking public contract modifications.",
    "relatedTerms": [
      "Design System Governance",
      "Component Architecture",
      "DesignOps"
    ],
    "seoTitle": "Design System Versioning and SemVer | Product Design Glossary",
    "sources": [
      "Semantic Versioning 2.0.0 (https://semver.org/)"
    ],
    "alternateName": [
      "Design System Versioning"
    ],
    "seoDescription": "Apply SemVer to a design system package with a declared public API. See major, minor, and patch dialog changes and how to plan a migration.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html",
        "name": "Design System Versioning and SemVer | Product Design Glossary",
        "description": "Apply SemVer to a design system package with a declared public API. See major, minor, and patch dialog changes and how to plan a migration.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html#breadcrumbs"
        },
        "citation": [
          "https://semver.org/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html#term",
        "name": "Design System Versioning & SemVer",
        "termCode": "design-system-versioning-semver",
        "description": "Design system versioning helps teams identify releases and understand what changes when they upgrade a shared system. Semantic Versioning (SemVer) is one scheme for versioning software packages based on changes to a declared public API.",
        "url": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html#webpage"
        },
        "alternateName": [
          "Design System Versioning"
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
        "@id": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html#breadcrumbs",
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
            "name": "Design System Versioning & SemVer",
            "item": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html"
          }
        ]
      }
    ],
    "contentMarkdown": "# Design System Versioning & SemVer\n\nDesign system versioning helps teams identify releases and understand what changes when they upgrade a shared system. Semantic Versioning (SemVer) is one scheme for versioning software packages based on changes to a declared public API.\n\n## What counts as the public API?\n\nDocument which component exports, props, supported behaviors, and token names consumers can rely on. This is the compatibility contract for the package. Decide whether particular visual behavior is part of that contract and describe other visible changes in the release notes.\n\nDesign files and code can have different release schedules. Map a design library update to its matching code release when their changes are meant to be used together, and tell teams where to check compatibility.\n\n## Major, minor, and patch examples\n\nFor a stable package at `2.4.1`, treat each row as a separate release example.\n\n| Change | Next version | Why |\n|---|---|---|\n| Fix a dialog bug so focus returns to the trigger as documented | `2.4.2` | Backward-compatible bug fix |\n| Add an optional wide dialog variant and keep the current default | `2.5.0` | Backward-compatible addition |\n| Remove a documented dialog prop | `3.0.0` | Breaking change to the public API |\n\nA token color update does not automatically determine the version bump. Check the compatibility contract first. A change that breaks a declared guarantee needs a major bump even if it only changes a value. Communicate visible changes in any release. For example, removing a documented token name is different from correcting its value to match the documented design.\n\n## How do you plan a breaking change?\n\nIf you are renaming a public prop, add the replacement while keeping the old prop working. Mark the old one deprecated in a minor release and explain how to migrate. Agree on the deprecation window and check representative products before removing it in a major release.\n\nPublish migration notes with the affected consumers, a before-and-after example, and any manual checks. For a shared dialog, include a keyboard test in a real flow. For a prop rename, show the replacement prop and explain when teams can remove the old one from their code.\n\n## Related terms\n\n- [Design System Governance](/glossary/design-system-governance.html)\n- [Component Architecture](/glossary/component-architecture.html)\n- [DesignOps](/glossary/designops.html)\n\n## Sources\n\n- [Semantic Versioning 2.0.0](https://semver.org/)"
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
    "contentMarkdown": "# AI-native Design\n\nAI-native design is an approach to product design in which AI capabilities are central to the product’s value and core workflows. Designers shape how people provide context, evaluate outputs, direct actions, and recover when the system makes mistakes.\n\nThe term is evolving. This glossary uses it as a working definition, not a formal methodology. AI may generate, classify, recommend, or predict; the appropriate interaction depends on the task.\n\n## What makes a product AI-native?\n\nA useful design question is: **How would the core workflow change if the AI capability were removed?** If the product’s main value depends on interpreting information, generating useful output, or adapting assistance, AI is central to the design.\n\nUsing AI to create wireframes or write code describes the designer’s process. AI-native describes the product experience. A chatbot, autonomous agent, or dynamically generated interface is one possible interaction pattern, not a requirement.\n\n## An AI-native design example: support triage\n\nImagine a support workspace whose core workflow turns incoming messages into suggested categories, relevant account context, and draft replies. The following example is illustrative.\n\nFor “I paid yesterday, but my account is still locked,” the system proposes a billing category and a reply based on available account records and help content.\n\n| Design decision | Example behavior |\n|---|---|\n| Context | Show which message, account record, and help article informed the suggestion. |\n| Review | Let the agent inspect sources, change the category, and edit the draft. |\n| Control | Require the agent to approve sending the reply; account changes follow separate permissions. |\n| Recovery | If payment status is unavailable, avoid claiming payment is confirmed; show the limitation and offer a manual lookup. |\n\nA polished draft can still contain a mistake. Source links help the agent verify claims; they do not guarantee that the response is correct. The design should make checking and correcting the output practical within the actual workload.\n\n## What should designers define?\n\n1. **The user outcome.** Identify the problem AI is suited to solve and compare the proposed workflow with the current way of doing the task.\n2. **Capabilities and limits.** Explain what the system can do, what information it can access, and where its output needs review.\n3. **Control and consequences.** Specify what AI may suggest or execute, when approval is needed, and what users can correct, dismiss, or undo.\n4. **Failure behavior.** Design for missing context, incorrect output, unavailable services, and a usable manual path.\n5. **Evaluation.** Test representative tasks, including difficult cases, and examine both output quality and the effort needed to review it. Repeat these checks when models, prompts, or source data change.\n\nGoogle’s People + AI Guidebook and Microsoft’s HAX guidelines provide practical guidance for these interaction decisions.\n\n## How do you know it helps?\n\nFor the support example, measure time to a correct resolution, incorrect replies, and the effort agents spend checking drafts. Draft acceptance alone cannot tell you whether the replies are correct. Compare results with the existing workflow and investigate where users need to intervene.\n\n## Related terms\n\n- [Generative UI](/glossary/generative-ui.html)\n- [Agentic UX](/glossary/agentic-ux.html)\n- [Design Harness](/glossary/design-harness.html)\n- [Operational UX](/glossary/operational-ux.html)\n\n## Sources\n\n- [User Needs + Defining Success, Google People + AI Guidebook](https://pair.withgoogle.com/guidebook-v2/chapter/user-needs/)\n- [Mental Models, Google People + AI Guidebook](https://pair.withgoogle.com/guidebook-v2/chapter/mental-models/)\n- [Guidelines for Human-AI Interaction, Microsoft HAX Design Library](https://www.microsoft.com/en-us/haxtoolkit/library/)\n- [Errors + Graceful Failure, Google People + AI Guidebook](https://pair.withgoogle.com/guidebook-v2/chapter/errors-failing/)",
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
    "definition": "Structured data for LLMs is a broad term for publishing information in a machine-readable format that an AI system or its retrieval tools can use. On the web, one approach is to describe a page’s entities and relationships with the Schema.org vocabulary in JSON-LD.",
    "purpose": "Enhances semantic discoverability, unambiguous entity disambiguation, and structured grounding for search engine generative overviews and LLM retrieval-augmented agents.",
    "keyConcepts": [
      "JSON-LD 1.1 formatting",
      "Schema.org vocabularies (DefinedTerm, etc.)",
      "entity relationship graphs",
      "semantic HTML vs structured data",
      "AI Overviews indexing eligibility"
    ],
    "howItWorks": "Injects machine-readable JSON-LD graph objects into HTML documents, enabling web scrapers, semantic search engines, and LLM context pipelines to parse entity hierarchies directly.",
    "relatedTerms": [
      "llms.txt Proposal",
      "Content Modeling",
      "Knowledge Graphs (AI Context)",
      "Controlled Vocabulary",
      "Semantic HTML"
    ],
    "seoTitle": "Structured Data for LLMs and Schema.org | Product Design Glossary",
    "sources": [
      "Getting Started with Schema.org, Schema.org (https://schema.org/docs/gs.html)",
      "DefinedTerm, Schema.org (https://schema.org/DefinedTerm)",
      "JSON-LD 1.1, W3C (https://www.w3.org/TR/json-ld11/)",
      "Introduction to Structured Data, Google Search Central (https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)",
      "AI Features and Your Website, Google Search Central (https://developers.google.com/search/docs/appearance/ai-features)"
    ],
    "seoDescription": "Learn what JSON-LD and Schema.org tell machines about a web page, how that differs from HTML semantics, and what Google’s AI features require.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/structured-data-for-llms.html",
    "contentMarkdown": "# Structured Data for LLMs\n\nStructured data for LLMs is a broad term for publishing information in a machine-readable format that an AI system or its retrieval tools can use. On the web, one approach is to describe a page’s entities and relationships with the Schema.org vocabulary in JSON-LD.\n\n## What can structured data describe?\n\nSchema.org defines types and properties. JSON-LD is a format for expressing that information. A glossary page, for example, can identify its entry as a `DefinedTerm`, give it a name and description, and link it to a `DefinedTermSet`. The description should agree with the visible definition. Whether a particular system reads or uses those fields depends on how that system retrieves and processes pages.\n\n## How is it different from semantic HTML?\n\nJSON-LD can describe what a page is about. Semantic HTML describes the structure and controls that appear on the page. For example, the glossary entry’s JSON-LD can identify a term, while a native HTML button gives the browser the semantics for a control that opens a panel. Both can be useful on the same page.\n\n## Do Google’s AI features need special structured data?\n\nGoogle says its AI Overviews and AI Mode require no special Schema.org markup. A page needs to be indexed and eligible to appear with a snippet to be eligible as a supporting link. Whether a page appears as a source depends on the system and the query. Keep your visible content clear and use structured data to describe it faithfully.\n\n## Related terms\n\n- [llms.txt Proposal](/glossary/llms-txt-proposal.html)\n- [Content Modeling](/glossary/content-modeling.html)\n- [Knowledge Graphs (AI Context)](/glossary/knowledge-graphs-ai-context.html)\n- [Controlled Vocabulary](/glossary/controlled-vocabulary.html)\n- [Semantic HTML](/glossary/semantic-html.html)\n\n## Sources\n\n- [Getting Started with Schema.org, Schema.org](https://schema.org/docs/gs.html)\n- [DefinedTerm, Schema.org](https://schema.org/DefinedTerm)\n- [JSON-LD 1.1, W3C](https://www.w3.org/TR/json-ld11/)\n- [Introduction to Structured Data, Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)\n- [AI Features and Your Website, Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/structured-data-for-llms.html#webpage",
        "url": "https://lexkonovalov.com/glossary/structured-data-for-llms.html",
        "name": "Structured Data for LLMs and Schema.org | Product Design Glossary",
        "description": "Learn what JSON-LD and Schema.org tell machines about a web page, how that differs from HTML semantics, and what Google’s AI features require.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/structured-data-for-llms.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/structured-data-for-llms.html#breadcrumbs"
        },
        "citation": [
          "https://schema.org/docs/gs.html",
          "https://schema.org/DefinedTerm",
          "https://www.w3.org/TR/json-ld11/",
          "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
          "https://developers.google.com/search/docs/appearance/ai-features"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/structured-data-for-llms.html#term",
        "name": "Structured Data for LLMs",
        "termCode": "structured-data-for-llms",
        "description": "Structured data for LLMs is a broad term for publishing information in a machine-readable format that an AI system or its retrieval tools can use. On the web, one approach is to describe a page’s entities and relationships with the Schema.org vocabulary in JSON-LD.",
        "url": "https://lexkonovalov.com/glossary/structured-data-for-llms.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/structured-data-for-llms.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/structured-data-for-llms.html#breadcrumbs",
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
            "name": "Structured Data for LLMs",
            "item": "https://lexkonovalov.com/glossary/structured-data-for-llms.html"
          }
        ]
      }
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
    "contentMarkdown": "# Conversion Rate Optimization (CRO)\n\nConversion rate optimization (CRO) is the practice of improving a website or app to increase the proportion of users who complete a defined action, such as purchasing, signing up, or requesting a quote. Teams use research, analytics, and experiments to identify barriers and evaluate changes.\n\nCRO helps teams get more value from existing traffic. Useful improvements make it easier for people to understand an offer, make a decision, and complete their task.\n\n## How do you calculate conversion rate?\n\nFor a user-based metric:\n\n**Conversion rate = users who complete the target action ÷ eligible users × 100.**\n\nCount each converting user once within the defined measurement window. Do not substitute total event count: one person can submit more than once. For a session-based metric, divide sessions with a conversion by eligible sessions instead. Keep the action, audience, denominator, and measurement window consistent when comparing results.\n\nFor a quote-request page, eligible users could be the users who reach that page. If 200 of 10,000 eligible users request a quote, the conversion rate is **2%**. A rate of 2.5% represents a **0.5 percentage-point increase**, or a **25% relative lift**. These illustrative numbers show the size of a difference, not whether a change caused it or whether it is statistically reliable.\n\n## How does a CRO process work?\n\n1. **Define success.** Choose a primary metric and verify that events fire correctly. Add guardrails such as lead quality, refunds, or support requests.\n2. **Find the barrier.** Use funnel data to locate drop-off. Combine it with usability sessions, interviews, or support feedback to investigate why people struggle.\n3. **Form a hypothesis.** Connect an observed problem, a proposed change, and an expected outcome.\n4. **Test and evaluate.** Where traffic supports it, use a randomized A/B test. Set the evaluation method and stopping criteria in advance; interpret the effect alongside its uncertainty and guardrails.\n5. **Apply what you learn.** Release useful improvements, investigate inconclusive results, and monitor downstream outcomes.\n\n## A CRO example: a quote request form\n\nSuppose usability sessions show that travelers abandon a quote form because they think submitting it commits them to a purchase.\n\nThe team tests a clear explanation beside the submit button: “Request a quote. No payment required.” This copy is appropriate only if it accurately describes the service.\n\n| Decision | Example |\n|---|---|\n| Hypothesis | Explaining the commitment will help interested travelers submit the form. |\n| Primary metric | Percentage of eligible users who submit a quote request. |\n| Guardrails | Qualified leads per eligible user and completed bookings per eligible user. |\n\nMore submissions can increase workload without producing more qualified leads. Review those downstream results before calling the change a success.\n\n## What if traffic is too low for A/B testing?\n\nUse usability testing and analytics to prioritize evident problems, such as broken validation or unclear requirements. Monitor changes after release, but treat before-and-after comparisons cautiously: traffic mix, campaigns, and seasonality can also affect conversion.\n\n## Related terms\n\n- [A/B Testing (Split Testing)](/glossary/ab-testing-split-testing.html)\n- [Conversion Funnel Architecture](/glossary/conversion-funnel-architecture.html)\n- [Checkout Flow Optimization](/glossary/checkout-flow-optimization.html)\n- [Growth Design](/glossary/growth-design.html)\n\n## Sources\n\n- [Conversion rate optimization, Optimizely](https://www.optimizely.com/optimization-glossary/conversion-rate-optimization)\n- [Analytics dimensions and metrics, Google Analytics](https://support.google.com/analytics/table/13948007?hl=en)\n- [Primary metrics, secondary metrics, and monitoring goals, Optimizely](https://docs.optimizely.com/experimentation-strategy/docs/primary-metrics-secondary-metrics-and-monitoring-goals)",
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
    "contentMarkdown": "# A/B Testing (Split Testing)\n\nA/B testing is a controlled experiment that randomly assigns eligible participants to different versions of a product experience and compares predefined outcomes. A well-run test helps estimate the effect of a change for the audience and conditions tested.\n\n## How do you plan a UX A/B test?\n\nSuppose new accounts draft an invoice but hesitate to send it because they cannot see what their client will receive. The team tests a preview that shows the invoice as the client would see it.\n\n| Decision | Example |\n|---|---|\n| Hypothesis | A preview helps more new accounts send a first real invoice by showing what the client will receive. |\n| Control and treatment | Group A sees the current experience. Group B gets an option to preview the invoice as the client would see it. |\n| Unit of randomization | Assign each eligible new account at signup so teammates use the same version. |\n| Primary metric | Percentage of assigned accounts that send a first real invoice within seven days. |\n| Guardrails | Accidental sends and invoice-related support requests per assigned account. |\n\nBefore launch, agree on the smallest effect worth acting on, the sample and duration needed, and the analysis and stopping rules. Make sure each account has the full outcome window before the final analysis. In this example, the denominator includes all eligible assigned accounts, including accounts that never open the preview.\n\n## What should you check before reading the result?\n\nVerify that assignment and events work in both variants. Compare the observed group sizes with the planned allocation. A statistically significant difference between the observed and planned group proportions is a **sample ratio mismatch**. It can indicate problems with assignment, eligibility, or tracking. Diagnose it before interpreting the treatment effect.\n\n## How do you interpret an inconclusive test?\n\nReview the estimated difference and its uncertainty alongside guardrails. Suppose the estimated change is +2 percentage points, with a 95% confidence interval from −1 to +5 points. The interval spans both a decrease and an improvement. If those outcomes would lead to different decisions, the test has left the decision uncertain.\n\nAgree on the next step based on what is still unknown. Verify the implementation if data quality is in doubt. Revisit the hypothesis if users did not understand the preview. If you need a more precise estimate, plan a follow-up with enough traffic and a suitable analysis rule.\n\n## Related terms\n\n- [Continuous Experimentation](/glossary/continuous-experimentation.html)\n- [Conversion Rate Optimization (CRO)](/glossary/conversion-rate-optimization-cro.html)\n- [Feature Flag Strategy](/glossary/feature-flag-strategy.html)\n- [Product Telemetry & Analytics](/glossary/product-telemetry-analytics.html)\n\n## Sources\n\n- [Patterns of Trustworthy Experimentation: Pre-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)\n- [Patterns of Trustworthy Experimentation: During-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/)\n- [Diagnosing Sample Ratio Mismatch in Online Controlled Experiments, Microsoft Research](https://www.microsoft.com/en-us/research/publication/diagnosing-sample-ratio-mismatch-in-online-controlled-experiments-a-taxonomy-and-rules-of-thumb-for-practitioners/)",
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
    "contentMarkdown": "# Continuous Experimentation\n\nContinuous experimentation is a product team’s practice of repeatedly testing hypotheses, making decisions from the evidence, and using the results to improve what it tests next. It connects experiments to regular product work through a shared process and a record of what the team learned.\n\n## How does the cycle work?\n\n1. **Choose a question.** Use research and behavioral data to identify a problem. Write down what change you expect, for whom, and why.\n2. **Plan the evaluation.** When a randomized test is feasible, define the assignment unit, primary outcome, guardrails, and decision rules. Check that the relevant events work in both versions.\n3. **Review the evidence.** Inspect data quality, estimate the effect, and account for uncertainty and guardrails before making a decision.\n4. **Record and reuse the result.** Save the hypothesis, audience, variants, metric definitions, result, decision, and follow-up question. Bring that record into the next planning discussion.\n\nAn [A/B test](/glossary/ab-testing-split-testing.html) estimates the effect of a change. Continuous experimentation describes the team practice that connects tests over time. A feature flag can control exposure. To estimate a causal effect with an A/B test, the team also needs random assignment and reliable measurement.\n\n## Example of using one test to plan the next\n\nAn invoicing team tests whether a client preview helps more new accounts send their first real invoice within seven days. The result is inconclusive, so the team records the uncertainty alongside the guardrails and its decision to keep the current version.\n\nIn follow-up sessions, some users still hesitate because they cannot tell whether the client will receive an email immediately. The next hypothesis addresses that specific uncertainty. The team can test comprehension with a prototype, then evaluate the product change with a randomized test if traffic supports it.\n\nA shared experiment log is enough for a small team to get started. Keep inconclusive results and rollbacks alongside successful releases. Record the audience and context so the next team can decide whether the result applies to its work.\n\n## Related terms\n\n- [A/B Testing (Split Testing)](/glossary/ab-testing-split-testing.html)\n- [Product Discovery](/glossary/product-discovery.html)\n- [Feature Flag Strategy](/glossary/feature-flag-strategy.html)\n- [Growth Design](/glossary/growth-design.html)\n\n## Sources\n\n- [Patterns of Trustworthy Experimentation: Pre-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)\n- [Patterns of Trustworthy Experimentation: During-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/)\n- [Patterns of Trustworthy Experimentation: Post-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-post-experiment-stage/)",
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
    "contentMarkdown": "# Conversion Funnel\n\nA conversion funnel is a model for measuring how many eligible users or accounts complete a defined sequence of steps toward an outcome. It shows completion and drop-off between milestones, such as viewing travel results, requesting a quote, and completing a booking.\n\n## How do you define the steps?\n\nChoose milestones you can identify reliably. Define who enters the funnel, what counts as completing each step, and how much time people have to progress. Decide whether participants must enter at the first step. In Google Analytics, a closed funnel starts at the first step, while an open funnel can admit users at later steps.\n\nKeep the unit consistent. For a travel quote funnel, count unique travelers across the steps and use linked records to follow the same request through qualification and booking. Specify what “qualified lead” means in your business before comparing results.\n\n## How do you calculate funnel conversion?\n\nSuppose 1,000 travelers view results. Count each traveler once per step if they complete that step in sequence within 30 days of entry. Qualification and booking must refer to the same quote request.\n\n| Step | Travelers reaching the step | Conversion from previous step |\n|---|---:|---:|\n| View results | 1,000 | — |\n| Submit quote request | 200 | 20% |\n| Have the request qualified | 80 | 40% |\n| Complete the booking | 20 | 25% |\n\n**Step conversion** divides a step’s count by the previous step’s count. Here, qualified lead to booking is 20 ÷ 80 = **25%**. **Overall conversion** divides the final count by the entry count. Here, results to booking is 20 ÷ 1,000 = **2%**. Label the denominator so readers can tell which part of the journey each rate describes.\n\n## What does drop-off tell you?\n\nThe funnel shows where fewer people continue. It can reflect a design problem, a deliberate choice, or a business rule. In this example, travelers may choose to browse without requesting a quote, and some requests will fail qualification by design.\n\nCheck tracking first, then investigate a promising step with research. For example, observe whether travelers understand what submitting a quote request commits them to. If you change the form, monitor completed bookings and lead quality as well as submissions. The funnel helps locate the question your research or experiment needs to answer.\n\n## Related terms\n\n- [Conversion Rate Optimization (CRO)](/glossary/conversion-rate-optimization-cro.html)\n- [Checkout Flow Optimization](/glossary/checkout-flow-optimization.html)\n- [Time-to-Value (TTV)](/glossary/time-to-value-ttv.html)\n\n## Sources\n\n- [Funnel exploration, Google Analytics Help](https://support.google.com/analytics/answer/9327974?hl=en)\n- [How Amplitude computes conversions through funnels, Amplitude Docs](https://amplitude.com/docs/analytics/charts/funnel-analysis/funnel-analysis-how-amplitude-computes-conversions)",
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
    "contentMarkdown": "# Lead Capture\n\nLead capture is the process of collecting information from a prospective customer so a business can respond to their interest. In product design, it includes the offer, the form or interaction used to collect the information, and what happens after submission.\n\n## What should a lead capture form ask for?\n\nAsk how each field changes the response or qualification decision. For a quote, collect the details the team needs to prepare and deliver it. Tell people what they will receive and how you will contact them. Clearly label required and optional inputs and give people a way to correct errors.\n\nIn a travel quote flow, the traveler has already selected a route and dates on the results page. The form can carry those details forward, show a summary with a way to edit them, and ask for an email address to send the quote. Ask for a phone number only if the service needs it for that request, and explain why. After submission, confirm that the request was received and tell the traveler what to expect.\n\n## How do you measure lead capture?\n\nCount successful requests using a confirmed submission event. A tap on the submit button can include errors or retries. Use a consistent audience and time window, then follow the same requests through qualification and booking.\n\n| Metric | Illustrative definition |\n|---|---|\n| Request conversion | Share of eligible results viewers who submit a quote request within 30 days of entry |\n| Qualified lead rate per viewer | Share of those viewers whose request qualifies within the same window |\n| Qualification rate per submitter | Share of submitters whose request qualifies within the same window |\n\nIn an example with 1,000 eligible viewers, 200 submit a request and 80 qualify. Request conversion is **20%**. The qualified lead rate is **8% per eligible viewer**. The qualification rate is **40% per submitter**. Count each traveler once per metric and use a qualification rule the sales team can apply consistently.\n\nUse the [conversion funnel](/glossary/conversion-funnel-architecture.html) to compare form changes with downstream outcomes. If a shorter form gets more submissions, check qualified requests and bookings per eligible viewer. Use those results to decide whether to keep the shorter form or restore a field that materially affects follow-up.\n\n## Related terms\n\n- [Conversion Rate Optimization (CRO)](/glossary/conversion-rate-optimization-cro.html)\n- [Conversion Funnel](/glossary/conversion-funnel-architecture.html)\n- [Progressive Disclosure](/glossary/progressive-disclosure.html)\n- [Checkout Flow Optimization](/glossary/checkout-flow-optimization.html)\n\n## Sources\n\n- [Question pages, GOV.UK Design System](https://design-system.service.gov.uk/patterns/question-pages/)\n- [Funnel exploration, Google Analytics Help](https://support.google.com/analytics/answer/9327974?hl=en)\n- [How to Improve Validation Errors, Baymard Institute](https://baymard.com/research-articles/adaptive-validation-error-messages)"
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
    "contentMarkdown": "# Checkout Flow Optimization\n\nCheckout flow optimization is the practice of making it easier for customers to review an order, provide required information, pay, and understand the outcome. It addresses avoidable friction from checkout entry through confirmation.\n\n## What should you improve first?\n\n| Friction | What to check |\n|---|---|\n| Unexpected costs | Show the total, currency, and applicable charges before customers commit. Explain changes to price when they occur. |\n| Form errors | Label required fields and explain errors near the relevant input. Preserve valid details where safe so customers can correct the issue and continue. |\n| Payment failure | Explain the payment status and give a next action, such as trying another method after a confirmed decline. |\n| Unclear confirmation | Tell customers whether the order is confirmed or still processing, and show a reference when available. |\n\nUse checkout events to find where people stop. Observe users attempting that step to understand whether they are confused, blocked, or reconsidering the purchase. Fix the barrier you can verify before changing the number of screens.\n\n## Example of payment recovery in travel checkout\n\nA traveler has reviewed the trip total and entered passenger details. Their payment is declined. Keep the passenger details available, explain the decline in plain language, and let the traveler choose another payment method. If availability or price changed while they were paying, show the new details before asking them to commit again.\n\nA delayed response needs a different design. If the payment outcome is unknown, tell the traveler you are checking it and explain where they can see the result. Confirm the original attempt’s status before offering a retry. Keep payment and booking status distinct when the booking can still be pending after payment succeeds.\n\n## How do you measure checkout improvements?\n\nDefine checkout entry and successful completion at the same unit, such as a booking attempt that can contain multiple payment retries. Count confirmed bookings per eligible checkout start within a defined window. Use payment failure and recovery rates to diagnose the outcome, then check duplicate charges, cancellations, and checkout-related support contacts as guardrails.\n\nUse a separate success event for the quote request. Submitting a request records interest. Confirming a booking records a completed purchase in this example.\n\n## Related terms\n\n- [Conversion Rate Optimization (CRO)](/glossary/conversion-rate-optimization-cro.html)\n- [Conversion Funnel](/glossary/conversion-funnel-architecture.html)\n- [Operational UX](/glossary/operational-ux.html)\n\n## Sources\n\n- [Cart and Checkout Usability Research, Baymard Institute](https://baymard.com/research/checkout-usability)\n- [How to Improve Validation Errors, Baymard Institute](https://baymard.com/research-articles/adaptive-validation-error-messages)\n- [Payment UX, Baymard Institute](https://baymard.com/blog/payment-ux)\n- [How PaymentIntents work, Stripe documentation](https://docs.stripe.com/payments/paymentintents/lifecycle)",
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
    "contentMarkdown": "# Product Discovery\n\nProduct discovery is the work of reducing uncertainty about which customer problems to address and which solutions are worth pursuing. Teams use research, prototypes, and assumption tests to make decisions before committing substantial delivery effort. Discovery can continue as the product is built and used.\n\n## What do teams learn in discovery?\n\nStart with the outcome you want to improve and the decisions you need to make. Marty Cagan describes four risks: whether customers will value the solution, whether they can use it, whether the team can build it, and whether it works for the business.\n\nChoose evidence that fits the risk. A prototype can show whether users understand an interaction. A technical investigation can establish whether the proposed behavior is feasible. Interview findings can explain why a problem matters and help the team decide which solutions to explore.\n\n## Example: helping accounts send their first invoice\n\nAn invoicing team sees that many new accounts create drafts but few send a first real invoice. The team wants more eligible new accounts to send a first real invoice within seven days of signup.\n\n| Discovery question | What the team does |\n|---|---|\n| Why do people hesitate? | Observe people preparing a real invoice and ask about the last time they stopped before sending. |\n| Would a preview help? | Show a prototype that lets users see the client’s view. Ask them to explain what the client would receive and when. |\n| Can the preview reflect the actual invoice? | Check with engineering that the preview and the final invoice use the same data and render consistently. |\n| Is it worth supporting? | Estimate what it will cost to maintain accurate previews across invoice templates. Compare that effort with the value of helping more accounts send correctly. |\n\nIf the evidence supports the preview, the team can build it and evaluate whether it changes the share of new accounts sending a real invoice. Use usability sessions to check comprehension, then consider a [randomized test](/glossary/ab-testing-split-testing.html) to estimate the effect on activation if traffic supports one.\n\n## How does discovery fit with delivery?\n\nKeep the next important assumption visible while delivery proceeds. Teresa Torres’s continuous discovery approach advocates at least weekly customer contact by the team building the product and small research activities tied to a desired outcome. A team can start by recording the decision, the evidence that informed it, and what would change its mind.\n\n## Related terms\n\n- [Jobs to Be Done (JTBD)](/glossary/jobs-to-be-done-jtbd.html)\n- [Continuous Experimentation](/glossary/continuous-experimentation.html)\n- [Mental Model Mapping](/glossary/mental-model-mapping.html)\n- [Product Strategy Canvas](/glossary/product-strategy-canvas.html)\n\n## Sources\n\n- [Continuous Discovery Habits, Teresa Torres](https://www.producttalk.org/continuous-discovery-habits/)\n- [The Four Big Risks, Marty Cagan, Silicon Valley Product Group](https://www.svpg.com/four-big-risks/)"
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
    "contentMarkdown": "# Jobs to Be Done (JTBD)\n\nJobs to Be Done (JTBD) is a way to understand why people choose a product or another solution in a particular situation. The job is the progress they seek. It can have functional, emotional, and social dimensions.\n\n## What does a job look like?\n\nImagine a traveler planning a work trip with uncertain meeting times. They compare booking online, asking an assistant, and calling a travel agent. A possible job is to arrange a flight they can change with confidence if the meeting moves.\n\n| Dimension | What might matter in this situation |\n|---|---|\n| Functional | Understand which itinerary can change and what the change may cost. |\n| Emotional | Feel comfortable committing before the schedule is final. |\n| Social | Be able to explain the decision and its costs to the person approving the trip. |\n\nThe same traveler might choose differently for a fixed-date vacation. The circumstances help explain why flexibility matters in one decision and price may matter more in another.\n\n## How do you research a job?\n\n1. **Ask about a specific decision.** Find someone who recently chose, switched, or stayed with an alternative. Ask them to reconstruct what happened.\n2. **Look for the trigger and the alternatives.** What changed? What did they try first? Include workarounds, asking someone else, and delaying the decision.\n3. **Trace the tradeoffs.** Ask what made the new option attractive and what made the old way hard to give up. Look for evidence in the details of the decision.\n4. **Compare stories.** Look for recurring circumstances and desired progress. Treat the proposed job as a hypothesis. Look for cases where it does and does not explain the choice.\n\n## How does JTBD inform design?\n\nA traveler may ask for a flexible-fare filter. If the underlying problem is uncertainty about changing a specific ticket, show the change conditions and relevant costs where travelers compare offers. Test whether they can explain what would happen if their meeting moved.\n\nApplying a filter is one possible step. The job helps you compare that step with other ways to give the traveler confidence that they can change the trip. Use [product discovery](/glossary/product-discovery.html) to compare ways to support that progress.\n\n## Related terms\n\n- [Mental Model Mapping](/glossary/mental-model-mapping.html)\n- [Product Discovery](/glossary/product-discovery.html)\n- [Value Proposition Canvas](/glossary/value-proposition-canvas.html)\n- [Product Strategy Canvas](/glossary/product-strategy-canvas.html)\n\n## Sources\n\n- [Jobs to Be Done Theory, Christensen Institute](https://www.christenseninstitute.org/theory/jobs-to-be-done/)\n- [The Jobs to Be Done Shaping Curriculum Decisions, Christensen Institute](https://www.christenseninstitute.org/wp-content/uploads/2021/04/Curriculum-Conundrum-4.20-update.pdf)"
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
    "contentMarkdown": "# Product-Led Growth (PLG)\n\nProduct-led growth (PLG) is a business strategy in which the product experience is the primary driver of customer acquisition, activation, retention, and expansion. People experience useful outcomes through the product, and that value supports adoption, paid conversion, or wider use within an organization.\n\nFree trials and freemium plans are common ways to let people try a product. Their effectiveness depends on whether users can solve a meaningful problem and have a reason to return.\n\n## How does product-led growth work?\n\nTeams design a path from discovering the product to experiencing value, building a habit where appropriate, and paying for capabilities they need. This involves onboarding, the core workflow, pricing, and support, with product, design, engineering, marketing, and sales working toward shared outcomes.\n\nSelf-service can make that path easier to start. Sales and customer-success teams can still help with evaluation, integration, procurement, or expansion into larger accounts.\n\n## A PLG example: a team planning tool\n\nImagine a planning tool that lets a team try one shared project. This is an illustrative model, not a case study.\n\n| Stage | Example product experience |\n|---|---|\n| Acquisition | A colleague receives an invitation to join a real project. |\n| Activation | Two teammates coordinate work and complete their first shared task. |\n| Retention | The team returns to plan and complete more work. |\n| Monetization and expansion | The team chooses a paid plan when it needs additional projects or administrative controls. |\n\nThe design work includes a useful starting template, clear invitations, understandable permissions, and pricing that explains what an upgrade adds. Prompt invitations when users have work to share and explain what the invited person can access.\n\n## How is PLG different from sales-led growth?\n\nIn a sales-led motion, sales interactions lead the evaluation and purchasing process. In PLG, hands-on product use leads much of that process. A hybrid approach can combine self-service adoption with sales assistance when an account needs it.\n\nA free tier is a pricing choice. PLG is the broader strategy connecting product value to growth. Offering a free plan alone does not create that connection or guarantee lower acquisition costs.\n\n## Which PLG metrics are useful?\n\n- **Activation rate:** The proportion of new users or accounts reaching a defined milestone that indicates initial value.\n- **Time to value:** How long it takes that audience to reach the milestone.\n- **Retention:** Whether users or accounts return to perform meaningful work over time.\n- **Paid conversion and expansion:** Whether customers begin paying and increase their use of paid capabilities.\n\nDefine the unit, cohort, and time window before comparing these metrics. In the planning example, measure activation at the team level. Check whether the proposed activation milestone is associated with later retention.\n\nA [**product-qualified lead (PQL)**](/glossary/product-qualified-lead-pql.html) is a user qualified through product usage that signals meaningful value and potential readiness to buy or expand. Define the qualifying behavior for your product, using customer fit and intent to decide whether sales assistance is appropriate.\n\n## Related terms\n\n- [Time-to-Value (TTV)](/glossary/time-to-value-ttv.html)\n- [Activation Metric](/glossary/activation-metric.html)\n- [Growth Design](/glossary/growth-design.html)\n- [B2B SaaS Interaction Model](/glossary/b2b-saas-interaction-model.html)\n\n## Sources\n\n- [Product-Led Growth: Definition and Examples, Wes Bush / ProductLed](https://productled.com/blog/product-led-growth-definition)\n- [Product-Led vs. Sales-Led Growth, Wes Bush / ProductLed](https://productled.com/blog/sales-led-growth-definition)\n- [How to Define PQLs, ProductLed](https://productled.com/blog/how-to-define-pqls)",
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
    "contentMarkdown": "# North Star Metric (NSM)\n\nA North Star Metric (NSM) is a primary product metric that tracks a measurable sign of the value customers get from a product. Teams use it to align priorities and choose input metrics they can influence. Teams check whether changes in the metric are associated with durable business outcomes, such as customer retention or revenue.\n\n## What makes a useful North Star Metric?\n\nStart with the outcome people come for and how often they need it. Define the unit, qualifying behavior, and time period. Ask whether the metric could rise without customers getting more value. A count of invoices sent, for example, can rise because a few customers send more invoices. A count of accounts that send an invoice answers how widely the product delivers that outcome.\n\nCheck the connection to business outcomes over time. A metric can represent a meaningful activity while still being a weak indicator of renewals or paid adoption. Review results across customer groups and billing cycles before treating it as a dependable signal.\n\n## Example for an invoicing product\n\nSuppose small businesses use an invoicing product on a monthly cycle. The team chooses **monthly invoicing accounts** as its North Star. It counts distinct customer accounts that send at least one real invoice in a calendar month, excluding test invoices. Sending a real invoice represents progress toward billing a client. If the product also promises to help customers collect payment, the team should check whether the metric captures enough of that value.\n\n| Metric role | Example |\n|---|---|\n| North Star | Distinct accounts sending at least one real invoice in a calendar month |\n| Input for acquisition | Number of eligible new accounts created each month |\n| Input for onboarding | Share of eligible new accounts sending a first real invoice within seven days |\n| Input for repeat use | Share of last month’s invoicing accounts that send a real invoice this month |\n| Guardrail | Invoice-related support requests per 100 invoicing accounts |\n\nInputs help teams locate opportunities. The [activation rate](/glossary/activation-metric.html) can improve while the North Star stays flat if fewer accounts sign up or established accounts stop invoicing. Use the inputs to investigate what changed. The seven-day activation window can cross a calendar month, and returning accounts can include customers who skipped a month.\n\n## Related terms\n\n- [Product Strategy Canvas](/glossary/product-strategy-canvas.html)\n- [Product Telemetry & Analytics](/glossary/product-telemetry-analytics.html)\n- [Activation Metric](/glossary/activation-metric.html)\n- [User Retention](/glossary/user-retention.html)\n\n## Sources\n\n- [About the North Star Framework, Amplitude](https://www.amplitude.com/books/north-star/about-north-star-framework)\n- [Defining Your North Star, Amplitude](https://amplitude.com/books/north-star/defining-your-North-Star)",
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
    "contentMarkdown": "# Enterprise UX Strategy\n\nEnterprise UX strategy is a plan for improving how people use enterprise software to accomplish organizational work. It connects user needs and business goals with priorities, measurable outcomes, and decisions about how teams will deliver and maintain improvements.\n\nIts scope may cover one enterprise product or workflows spanning several systems. The work includes choosing which problems to solve first and which changes to defer.\n\n## What makes enterprise UX strategy different?\n\nEnterprise workflows often involve specialized roles, shared records, permissions, legacy integrations, and handoffs between departments. Improving one screen may do little if people still copy information between systems or wait for an unclear approval.\n\nThe people buying, administering, and using the software may have different needs. Research must include the people doing the work, not only stakeholders who authorize a purchase.\n\nStrategy also needs to account for adoption: existing habits, training, migration, and the consequences of changing an established process.\n\n## What should the strategy include?\n\nNielsen Norman Group describes UX strategy through vision, goals and measures, and a plan. A practical enterprise version should answer:\n\n| Decision | Question to resolve |\n|---|---|\n| Scope and direction | Which users and workflows are we improving, and why? |\n| Evidence and priorities | Where do observations, support issues, and workflow data show the most consequential problems? |\n| Outcomes | What should improve, and what baseline will we compare against? |\n| Constraints and ownership | Who owns decisions across teams, and which permissions, integrations, or controls must be preserved? |\n| Delivery and adoption | What will we pilot first, who needs support, and how will we decide whether to expand? |\n\nA short document and a prioritized roadmap can be enough if they identify the choices, owners, and measures.\n\n## Example: improving purchase approvals\n\nSuppose employees submit purchase requests in one tool, managers approve them by email, and finance re-enters the details in an accounting system.\n\nIn this illustrative scenario, research finds that requests stall because nobody can reliably see the current owner or missing information. A strategy could prioritize shared request status and clear responsibility before a broader interface redesign.\n\n| Strategy element | Illustrative choice |\n|---|---|\n| Intended outcome | Help employees and finance resolve incomplete requests with less rework. |\n| First initiative | Pilot shared request status and a named next approver in one department. |\n| Measures | Track submission-to-decision time and the proportion of requests returned for missing information. |\n| Guardrails | Preserve required approvals, access boundaries, and the decision history. |\n| Rollout | Assign a process owner, support users during the pilot, and review results before expanding. |\n\nMeasure time spent working separately from time waiting for a handoff. This helps the team identify whether an interface change or a process change is needed.\n\n## How is it different from information architecture?\n\nEnterprise UX strategy sets direction and priorities. [Enterprise information architecture](/glossary/enterprise-information-architecture.html) defines how information is organized, labeled, and connected across the environment.\n\nA design system supports consistent implementation, while a roadmap sequences the work. Each can help execute the strategy; none alone explains which user problems matter most or how success will be judged.\n\n## Related terms\n\n- [Operational UX](/glossary/operational-ux.html)\n- [Enterprise Information Architecture](/glossary/enterprise-information-architecture.html)\n- [B2B SaaS Interaction Model](/glossary/b2b-saas-interaction-model.html)\n\n## Sources\n\n- [UX Strategy: Definition and Components, Nielsen Norman Group](https://www.nngroup.com/articles/ux-strategy/)\n- [Complex Application Design: A 5-Layer Framework, Nielsen Norman Group](https://www.nngroup.com/articles/complex-application-design-framework/)",
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
    "contentMarkdown": "# B2C Engagement Loops\n\nA B2C engagement loop is a recurring cycle in a consumer product where an action and its outcome create a reason for the user to return and act again. The loop works when each return helps the person make progress on something they care about.\n\n## What does an engagement loop look like?\n\nConsider a traveler deciding when to book. They save a price watch for a route and dates. The watch lets them compare the current price against what they saw earlier. A price change that matches the traveler’s alert settings can bring them back. If they adjust the dates or budget, those preferences shape the next update.\n\n| Step | What happens |\n|---|---|\n| Start | The traveler saves a watch for a trip they are considering. |\n| Value | The watch preserves the search criteria and makes price changes easy to compare. |\n| Reason to return | The price changes enough to matter to the traveler. |\n| Next action | The traveler reviews the offer, refines the watch, or books and ends the cycle. |\n\nGive the traveler control over what triggers a notification and how to stop it. If they have already booked, continuing to send alerts for that search can work against the experience.\n\n## How is this different from a growth loop or a funnel?\n\nA [conversion funnel](/glossary/conversion-funnel-architecture.html) measures progress through a defined sequence, such as results view to booking. An engagement loop explains how the output of one interaction can support the next. A growth loop, in Reforge’s framing, reinvests an output into a future cycle that drives growth. A price watch can support repeat use without bringing in a new customer each time.\n\nNir Eyal’s Hook Model offers another lens for examining recurring use. It describes a trigger, action, variable reward, and investment. Use it when those elements help explain the behavior you observe.\n\n## How do you measure the loop?\n\nFor one measure, take active watches that received a qualifying alert during the reporting period. Count each watch once. Measure the share for which the traveler reviewed the updated price within seven days of its first qualifying alert in that period. Allow a full seven days for every included watch before comparing reporting periods. Track opt-outs and alerts per watch alongside the review rate.\n\nReview whether the loop helps travelers make a decision. Booking or turning off a watch can be a successful end to the task, even if it reduces repeat visits.\n\n## Related terms\n\n- [Product-Led Growth (PLG)](/glossary/product-led-growth-plg.html)\n- [Conversion Funnel](/glossary/conversion-funnel-architecture.html)\n- [Growth Design](/glossary/growth-design.html)\n- [User Retention](/glossary/user-retention.html)\n\n## Sources\n\n- [Growth Loops are the New Funnels, Reforge](https://www.reforge.com/blog/growth-loops)\n- [Hooked Model, Nir Eyal](https://www.nirandfar.com/wp-content/uploads/2025/02/Hooked_Model_Canvas_Nir_Eyal.pdf)"
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
    "contentMarkdown": "# Product Telemetry & Analytics\n\nProduct telemetry is the data a product records about actions and system behavior. Product analytics uses that data to answer questions about how people use the product and where they reach or miss important outcomes. Data can come from the interface, backend services, or both.\n\n## What belongs in a tracking plan?\n\nStart with a decision. To learn whether new accounts send their first invoice, identify the events needed to measure that outcome. For each event, document its name, exact trigger, source, required properties, and owner. Choose an identifier and timestamp that let you link related events and count at the right level.\n\n## Example of an invoice tracking plan\n\n| Event | Trigger and source | What it tells you |\n|---|---|---|\n| Account Created | The backend successfully creates an account | When the account enters the signup cohort |\n| Invoice Preview Opened | The interface displays the preview | Whether someone saw the preview |\n| Invoice Sent | The sending service records a successful send | Whether the account reached the activation milestone |\n\nIn this example, the tracking plan uses an account identifier to join signup and sending. The send event includes an invoice ID and a test flag. Use a stable event ID to deduplicate repeated delivery of the same event. In this product, a successful send means the provider accepted the message for delivery. Delivery, payment, and a click on “Send” are separate signals.\n\n## How do you check the data before using it?\n\n1. **Verify the trigger.** Run a successful send, a failed send, and a test send. Check that only a qualifying real send counts toward activation.\n2. **Check repeated events.** Retry the same operation and check how the event pipeline handles duplicates. For activation, count each eligible account once within the seven-day window.\n3. **Reconcile a sample.** Compare the analytics events with the product records and investigate mismatched counts, missing IDs, and delayed events.\n4. **Limit what you collect.** Use the properties needed for the analysis. Invoice content and recipient details can stay out of this tracking plan.\n\nA sequence of preview and send events can show how often accounts continue after seeing the preview. To find out why, observe users trying to send an invoice or ask about the decision they made at that step.\n\n## Related terms\n\n- [Component Telemetry](/glossary/component-telemetry.html)\n- [Continuous Experimentation](/glossary/continuous-experimentation.html)\n- [A/B Testing (Split Testing)](/glossary/ab-testing-split-testing.html)\n- [Activation Metric](/glossary/activation-metric.html)\n\n## Sources\n\n- [Plan your implementation, Amplitude Docs](https://amplitude.com/docs/get-started/plan-your-implementation)\n- [User properties and event properties, Amplitude Docs](https://www.amplitude.com/docs/data/user-properties-and-events)",
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
    "contentMarkdown": "# Growth Design\n\nGrowth design is a product design practice that combines user research, behavioral data, and experimentation to improve customer outcomes and measurable business growth. Its scope can include acquisition, activation, [user retention](/glossary/user-retention.html), referral, and revenue across the product journey.\n\nGrowth designers identify where people struggle to get value, develop hypotheses about why, and evaluate changes with product, engineering, and analytics partners. The work can involve onboarding, core workflows, pricing, or communication around the product.\n\n## How does growth design relate to product design, CRO, and PLG?\n\n| Term | Main focus |\n|---|---|\n| Product design | Shaping a useful, usable product that serves users and the business. |\n| Growth design | Applying design to a specific growth opportunity and measuring the outcome. |\n| Conversion rate optimization (CRO) | Increasing the proportion of people completing a defined action. |\n| Product-led growth (PLG) | A business strategy that makes product experience the primary driver of growth. |\n\nThese areas overlap. Growth design uses product design skills, and CRO can be part of its work. Growth design can support PLG, sales-led businesses, or hybrid models. Measurement and business outcomes also belong in broader product design.\n\n## A growth design example: first invoice sent\n\nImagine an invoicing tool where many new accounts create a draft but never send it. Analytics reveals the drop-off; usability sessions reveal that users cannot tell what their clients will receive.\n\nThe team proposes a preview of the invoice as the client will see it, with an explanation of what happens after sending. The hypothesis is that resolving this uncertainty will help users send a correct first invoice. The measurement windows below are examples; choose windows that fit actual usage.\n\n| Measurement | Illustrative definition |\n|---|---|\n| Primary outcome | Percentage of eligible new accounts sending a first invoice within seven days of signup. |\n| Longer-term outcome | Percentage of the same eligible account cohort sending a second invoice within 30 days of signup. |\n| Guardrails | Accidental sends, canceled invoices, and related support requests. |\n\nClicking “Preview” is a diagnostic event. It does not establish that users completed the task successfully. The team checks sending behavior and downstream outcomes before deciding whether to roll out the change.\n\n## How do you run a growth design cycle?\n\n1. **Choose an outcome.** Define the audience, behavior, measurement window, and guardrails.\n2. **Investigate.** Combine funnel or cohort analysis with research into the user’s task and obstacles.\n3. **Design a hypothesis.** Explain how a proposed change addresses the observed barrier.\n4. **Evaluate.** Test comprehension and usability. When traffic supports it, use a randomized experiment to estimate the change’s effect.\n5. **Learn and follow through.** Review uncertainty and downstream results, then refine, release, or discard the idea.\n\n## What should growth design avoid?\n\nOptimizing a visible metric can hide harm elsewhere. Making cancellation difficult might reduce recorded cancellations while increasing complaints and frustration. Judge improvements against useful outcomes and customer choice, with guardrails that reveal those tradeoffs.\n\nTrack what each experiment teaches you and whether the result improves the chosen outcome without violating its guardrails.\n\n## Related terms\n\n- [Conversion Rate Optimization (CRO)](/glossary/conversion-rate-optimization-cro.html)\n- [Product-Led Growth (PLG)](/glossary/product-led-growth-plg.html)\n- [Continuous Experimentation](/glossary/continuous-experimentation.html)\n- [Jobs to Be Done (JTBD)](/glossary/jobs-to-be-done-jtbd.html)\n\n## Sources\n\n- [Practicing Growth Design, Lex Roman / Amplitude](https://amplitude.com/blog/practicing-growth-design)\n- [A Primer on Growth Design, Chetana Deorah and Lex Roman](https://speakerdeck.com/chetanadeorah/a-primer-on-growth-design)\n- [Primary metrics, secondary metrics, and monitoring goals, Optimizely](https://docs.optimizely.com/experimentation-strategy/docs/primary-metrics-secondary-metrics-and-monitoring-goals)",
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
    "contentMarkdown": "# Product–Market Fit (PMF)\n\nProduct–market fit (PMF) is the degree to which a product meets meaningful demand in a specific market. Teams assess it by looking for evidence that a defined group chooses the product, gets value when the need arises, and shows demand that can sustain the business.\n\n## How do you assess product–market fit?\n\nStart by naming the customer segment and the problem the product solves. For an invoicing tool, solo consultants who bill monthly may behave differently from teams that need approval workflows. Aggregating both can hide where the product fits.\n\n| Evidence | What to examine |\n|---|---|\n| Continued use | Do customers return when the need comes up again? Compare cohorts over a period that matches their billing cycle. |\n| Commercial demand | Are customers willing to pay or renew at the intended price? Check how much adoption depends on discounts or hands-on support. |\n| Customer accounts of value | Which outcome would customers miss? What alternatives would they use if the product disappeared? |\n\nFor an invoicing product, signup and the first invoice sent show early progress. Repeated invoicing over several billing cycles and renewals at the intended price provide additional evidence. Compare these signals within the segment you intend to serve.\n\n## What does the 40% PMF survey benchmark mean?\n\nIn his Superhuman case study, Rahul Vohra describes using a survey from Sean Ellis that asks how users would feel if they could no longer use the product. The score is the share of respondents who say they would be very disappointed. Vohra used 40% as a benchmark for that survey method and studied which benefits respondents valued and what held others back. Treat the threshold as a heuristic and assess it alongside behavior and commercial demand.\n\nReport the response count and the criteria used to select people. If 20 of 50 respondents choose “very disappointed,” the result is **40% of respondents**. If you survey recent active users, report the score for that group. Check response bias and look separately at people who stopped using the product.\n\nUse survey results to choose where to investigate next. If interviewees value faster invoicing but renewal is weak, check whether customers can complete the entire billing cycle and whether the price still makes sense for that segment.\n\n## Related terms\n\n- [Jobs to Be Done (JTBD)](/glossary/jobs-to-be-done-jtbd.html)\n- [North Star Metric (NSM)](/glossary/north-star-metric-nsm.html)\n- [Product Discovery](/glossary/product-discovery.html)\n- [Churn Mitigation](/glossary/churn-mitigation-architecture.html)\n\n## Sources\n\n- [The Only Thing That Matters, Marc Andreessen](https://web.stanford.edu/class/ee204/ProductMarketFit.html)\n- [How Superhuman Built an Engine to Find Product Market Fit, Rahul Vohra](https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/)\n- [Build a retention analysis, Amplitude Docs](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-build)"
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
    "contentMarkdown": "# LTV to CAC Ratio\n\nThe LTV to CAC ratio compares customer lifetime value (LTV) with customer acquisition cost (CAC). In the gross-margin-adjusted SaaS calculation used here, LTV represents expected lifetime gross profit, rather than revenue alone.\n\n**LTV:CAC = customer lifetime value ÷ customer acquisition cost.**\n\nA ratio of 4:1 means an estimated $4 in lifetime gross profit for each $1 spent acquiring a customer. It does not mean $4 in net profit: acquisition costs and other operating expenses still matter.\n\n## How do you calculate LTV:CAC?\n\nFor a simplified subscription model:\n\n- **LTV ≈ average monthly revenue per account × gross margin ÷ monthly customer churn rate.**\n- **CAC = acquisition-related sales and marketing costs ÷ new paying customers acquired.**\n\nHere, an account is one paying customer. Monthly customer churn is the share of accounts present at the start of the month that cancel during it. Use decimals for percentages: 80% becomes 0.80. Match the revenue and churn periods; do not substitute net revenue churn.\n\nInclude relevant salaries, commissions, tools, and campaign costs in CAC. Align costs and acquired customers with the sales cycle; dividing this month's spending by this month's wins can mislead when acquisition takes several months.\n\n## A simple SaaS example\n\nAssume similar customer accounts, stable monthly revenue and churn, and no expansion revenue.\n\n| Input | Illustrative value |\n|---|---:|\n| Average monthly revenue per account | $100 |\n| Gross margin | 80% |\n| Monthly customer churn | 2% |\n| Acquisition spending attributable to 100 new accounts | $100,000 |\n\n- Estimated LTV = $100 × 0.80 ÷ 0.02 = **$4,000**.\n- CAC = $100,000 ÷ 100 = **$1,000**.\n- LTV:CAC = $4,000 ÷ $1,000 = **4:1**.\n\nThis is a simplified estimate, not a prediction that every account will generate $4,000.\n\n## What is a good LTV:CAC ratio?\n\n**3:1 is a common SaaS rule of thumb, not a universal threshold.** Check how LTV and CAC were calculated before comparing companies or benchmarks. David Skok's detailed definitions explicitly qualify their guideline with assumptions about gross margin and the LTV formula.\n\nA ratio below 1:1 means estimated lifetime gross profit does not cover acquisition cost under this model. A higher ratio can reflect stronger retention or lower acquisition costs, but also optimistic assumptions or incomplete cost allocation.\n\nReview **CAC payback** alongside the ratio: payback asks how long it takes to recover acquisition costs. A favorable lifetime ratio can still require a long wait for that recovery.\n\n## What can make the estimate misleading?\n\nThe simple formula assumes stable churn, revenue, and margin. It breaks down at zero churn and does not model expansion or changing retention. Do not substitute negative net revenue churn into its denominator.\n\nFor those cases, model cohorts (customers acquired in the same period) with explicit retention, revenue, margin, and forecast-horizon assumptions. Compare segments and acquisition channels; a blended average can hide weak economics.\n\nFor product designers, LTV:CAC provides business context. Test more immediate outcomes, such as activation and retained usage, before attributing a change in lifetime economics to a redesign.\n\n## Related terms\n\n- [Churn Mitigation](/glossary/churn-mitigation-architecture.html)\n- [Product-Led Growth (PLG)](/glossary/product-led-growth-plg.html)\n- [Activation Metric](/glossary/activation-metric.html)\n\n## Sources\n\n- [SaaS Metrics 2.0: Detailed Definitions, David Skok](https://www.forentrepreneurs.com/saas-metrics-2-definitions/)\n- [SaaS Metrics 2.0, David Skok](https://www.forentrepreneurs.com/saas-metrics-2/)\n- [What is the CAC payback period?, Stripe](https://stripe.com/resources/more/what-is-the-cac-payback-period)\n- [CAC in SaaS, Stripe](https://stripe.com/resources/more/cac-in-saas)",
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
    "contentMarkdown": "# Activation Metric\n\nAn activation metric measures whether new users or accounts reach a milestone that indicates initial product value. An activation event records the behavior used to identify that milestone. The activation rate is the percentage of eligible new users or accounts that reach it within a specified time window.\n\n## How do you choose an activation event?\n\nStart with the outcome people came for. In an invoicing product, account creation and opening a template are setup steps. Sending a first invoice is a stronger candidate when the product’s job is to help businesses bill their clients. If users can send test invoices, distinguish those from real ones in the event definition.\n\nUse research to check whether the action reflects progress users care about. Then use behavioral data to test whether it is associated with later meaningful use. Some products need a milestone made up of several actions. In a shared workspace, for example, value may depend on two people completing a task together.\n\n## How do you calculate activation rate?\n\n**Activation rate = eligible new users or accounts that reach the milestone within the window ÷ all eligible new users or accounts in the cohort × 100.**\n\nIn the invoicing example, count new accounts that send a first real invoice within seven days of signup. If 120 of 200 eligible accounts do so, seven-day activation is **60%**. Count each account once, including accounts where several teammates send invoices. Report the cohort after every account has had seven days to activate.\n\n## How do you validate the milestone?\n\nCompare later usage for accounts that reach the milestone and accounts that do not reach it by day seven. Use a later outcome both groups can reach, such as sending any real invoice during days 15–30 after signup. A second invoice would require a first and would favor accounts that have already sent one. Set the same observation window and check whether the pattern holds across comparable cohorts.\n\nAn association can help you choose a milestone. It cannot establish that prompting the action will improve [user retention](/glossary/user-retention.html). Accounts with more urgent invoicing needs may be more likely to do both. Test a change that helps users achieve the outcome and check its effect on activation and later use.\n\nRead activation rate alongside [time to value](/glossary/time-to-value-ttv.html). One tells you how many accounts reached the milestone within a window. The other tells you how long it took for accounts that reached it.\n\n## Related terms\n\n- [Time-to-Value (TTV)](/glossary/time-to-value-ttv.html)\n- [Product-Led Growth (PLG)](/glossary/product-led-growth-plg.html)\n- [Conversion Funnel](/glossary/conversion-funnel-architecture.html)\n- [Product Telemetry & Analytics](/glossary/product-telemetry-analytics.html)\n\n## Sources\n\n- [Mastering Engagement Playbook, Amplitude](https://info.amplitude.com/rs/138-CDN-550/images/Mastering_Engagement_Playbook_02_26_19_Amplitude.pdf)\n- [How Amplitude calculates retention](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation)\n- [Time to Value, Amplitude](https://amplitude.com/blog/time-to-value-drives-user-retention)",
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
    "contentMarkdown": "# Time-to-Value (TTV)\n\nTime to value (TTV) is the elapsed time between a defined starting point and the first meaningful outcome a user or account gets from a product. Teams measure it in units of time, such as minutes, hours, or days.\n\n## How do you measure time to value?\n\nDefine the unit, start, and end. In an invoicing tool, the unit might be a new account, the start might be signup, and the end might be the first real invoice sent. For an account that signs up at 9 a.m. and sends its first invoice at 3 p.m. that day, TTV is **six hours**.\n\nChoose an endpoint that reflects value for your users. If your product uses the first invoice sent as its [activation event](/glossary/activation-metric.html), time to activation and your operational measure of TTV use the same timestamps. If activation measures an earlier setup milestone, document the difference.\n\n## Why report time alongside activation rate?\n\nSuppose you compare two signup cohorts, each with 200 accounts and seven full days of observation.\n\n| Cohort | Sent a real invoice within seven days | Median time among those accounts |\n|---|---:|---:|\n| Earlier cohort | 120 of 200 (60%) | 24 hours |\n| Later cohort | 100 of 200 (50%) | 12 hours |\n\nIn the later cohort, the median was lower among accounts that sent an invoice. Fewer accounts reached the milestone overall. Accounts that never sent an invoice within seven days are excluded from both medians and remain in the activation-rate denominator. Compare both figures using the same eligibility rules and observation window.\n\n## How can design reduce time to value?\n\nObserve where people spend time before the milestone. A delay may come from the interface, missing information, or work that needs to happen outside the product. In the invoicing example, users might pause because they cannot see what a client will receive. A preview can help them check the invoice before sending.\n\nTrack the outcome after a change. A shorter setup flow can save clicks without changing elapsed time. Check for accidental sends and track the share of new accounts reaching the milestone.\n\n## Related terms\n\n- [Activation Metric](/glossary/activation-metric.html)\n- [Product-Led Growth (PLG)](/glossary/product-led-growth-plg.html)\n- [Progressive Disclosure](/glossary/progressive-disclosure.html)\n\n## Sources\n\n- [Time to Value, Amplitude](https://amplitude.com/blog/time-to-value-drives-user-retention)\n- [How Amplitude calculates retention](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation)",
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
    "contentMarkdown": "# Churn Mitigation\n\nChurn mitigation is the work of reducing avoidable customer loss. In a subscription product, it includes addressing problems that lead customers to leave and helping them recover from billing issues that could end a subscription unintentionally.\n\n## What causes customer churn?\n\n**Voluntary churn** occurs when a customer chooses to end a subscription or lets it expire intentionally. **Involuntary churn** occurs when the subscription ends for reasons such as an unresolved payment failure, even though the customer may want to continue. A failed charge is a billing event. Count churn when the account meets your definition of having left. For example, count it when a subscription ends after an unsuccessful recovery period.\n\nA drop in usage can tell you where to investigate. In a monthly invoicing product, fewer invoice sends may reflect seasonality, a broken workflow, or a customer no longer needing the service. Check the pattern against the customer’s normal usage and look for evidence of the cause.\n\n## What should the product do?\n\n| Situation | Product response |\n|---|---|\n| The customer cannot complete a recurring task | Diagnose the barrier with product data and research. Fix it or offer relevant help. |\n| The subscription no longer fits the customer’s needs | Explain any suitable downgrade or pause. Keep cancellation easy to find and explain when access ends. |\n| A renewal payment fails | Explain what happened, how to update payment details, and what happens next. Use retries where the payment provider and failure reason allow them. |\n\n## How do you measure the result?\n\nFor one definition of monthly customer churn, divide the number of paying accounts from the start of the month that are no longer paying at month-end by the number of paying accounts at the start. If 12 of 400 starting accounts leave under this rule, monthly customer churn is **3%**. This month-end measure treats an account that leaves and returns before month-end as still paying. A count of cancellations during the month answers a different question.\n\nMeasure each intervention against the problem it addresses. For billing recovery, track the share of accounts with a failed renewal that recover within a stated period. For a downgrade or pause, check whether customers remain subscribed or return to paid use over later billing cycles. Track complaints and support contacts alongside the outcome. If completed cancellations fall, check how many customers remain subscribed over the next billing cycle and whether users can still cancel without assistance.\n\n## Related terms\n\n- [Product Telemetry & Analytics](/glossary/product-telemetry-analytics.html)\n- [LTV to CAC Ratio](/glossary/ltv-to-cac-ratio.html)\n- [Activation Metric](/glossary/activation-metric.html)\n- [User Retention](/glossary/user-retention.html)\n\n## Sources\n\n- [Customer churn, Stripe](https://stripe.com/resources/more/customer-churn-101-what-it-is-why-it-happens-and-what-businesses-can-do-about-it)\n- [Automate payment retries, Stripe Docs](https://docs.stripe.com/billing/revenue-recovery/smart-retries)"
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
    "contentMarkdown": "# Feature Flag Strategy\n\nA feature flag strategy defines how a team uses configurable switches to control which users or accounts get a feature. Flags let teams deploy code separately from exposing it. A strategy covers who gets access, how the team checks the release, what happens when a flag is turned off, and when the team can remove it.\n\n## How do rollouts and experiments use flags?\n\n| Use | What the flag controls | What the team decides |\n|---|---|---|\n| Staged rollout | Which eligible accounts can use the feature as exposure expands | Whether the feature is ready for more accounts |\n| A/B test | Which experience each assigned account receives | Whether the tested change affects a predefined outcome |\n| Operational switch | Whether a capability stays enabled during a problem | When to use the fallback and how to recover |\n\nA flag can deliver the variants in an [A/B test](/glossary/ab-testing-split-testing.html). Estimating the effect still requires sound assignment, tracking, and analysis. A staged rollout can surface problems, but changes in metrics as exposure expands can also reflect changes in the audience.\n\n## Example of a staged rollout\n\nAn invoicing team releases a new preview to internal accounts, then to a small share of eligible customer accounts. Keep exposure consistent within an account so teammates working on the same invoice see the same experience. Before expanding, the team reviews preview failures and the share of eligible exposed accounts that send a first real invoice within seven days of signup. It agrees in advance which problems warrant pausing, such as a loss of draft data.\n\nThe team tests what happens if it switches back while an invoice draft is open. Check that the draft remains available in the original experience. Previously sent invoices should still appear in the customer’s history. Plan a separate recovery path for changes that persist after the flag is turned off.\n\n## What should a flag plan include?\n\n- **Purpose and owner.** Record the decision the flag supports and who can change it.\n- **Eligibility and fallback.** Define the audience, assignment rules, and the default when flag configuration is unavailable. Test both experiences.\n- **Monitoring and response.** Specify which signals prompt a pause, an expansion, or a switch back.\n- **Cleanup.** Give temporary flags a review date. After the release decision, remove the flag and unused code path when it is safe to do so.\n\n## Related terms\n\n- [Continuous Experimentation](/glossary/continuous-experimentation.html)\n- [A/B Testing (Split Testing)](/glossary/ab-testing-split-testing.html)\n- [Design Engineering](/glossary/design-engineering.html)\n- [DesignOps](/glossary/designops.html)\n\n## Sources\n\n- [Feature Toggles, Pete Hodgson](https://martinfowler.com/articles/feature-toggles.html)\n- [Patterns of Trustworthy Experimentation: Pre-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)\n- [Patterns of Trustworthy Experimentation: During-Experiment Stage, Microsoft Research](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/)"
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
    "contentMarkdown": "# Noun Foraging\n\nNoun foraging is a discovery activity in Object-Oriented UX (OOUX) that uses nouns from research to identify candidate objects. The goal is to find the things people recognize and work with, such as trips, bookings, and travelers.\n\n## How do you do noun foraging?\n\n1. **Start with evidence.** Review interview notes, support conversations, or a walkthrough of an existing process. Record the noun and the sentence it came from.\n2. **Group terms by meaning.** A single concept may have multiple names. Keep similar terms separate until you know they refer to the same thing.\n3. **Look for structure, instances, and purpose.** Sophia Prater uses this check, called SIP, to evaluate possible objects. Ask what information and relationships give the thing structure, what individual examples look like, and why people need to work with it.\n4. **Validate the shortlist.** Ask users or domain experts to walk through a real case. Record open questions before taking the candidates into the relationship model.\n\nFrequency can help you spot a candidate. An infrequently mentioned object may still matter when it controls an important handoff or exception.\n\n## Example from travel operations\n\nImagine an agent says, “I open the trip, check which traveler it’s for, and look at the booking status before I call the supplier.” That sentence offers several candidates.\n\n| Term in the notes | What to investigate |\n|---|---|\n| Trip | The agent recognizes individual trips and uses each one to gather bookings and travelers. Example instance: Trip T-104. |\n| Traveler | The agent can find a person and view their other trips. Keep Traveler on the shortlist. |\n| Booking | Booking B-52 has its own reference and status. Agents can check or request changes to it. |\n| Status | In this example it describes the booking. Capture it as a candidate attribute. |\n| Supplier | Ask whether agents look up supplier records or only need a supplier name on the booking in this scope. |\n\nAsk an agent to show you a “reservation” and a “booking.” If they point to different records or stages, preserve the distinction in the shortlist.\n\n## What comes next in ORCA?\n\nNoun foraging helps define the Objects in [ORCA](/glossary/orca-framework.html). Take the shortlist into a [nested object matrix](/glossary/nested-object-matrix.html) to investigate relationships. Use an [Object Guide](/glossary/object-guide.html) to capture definitions once the team has tested what the terms mean.\n\n## Related terms\n\n- [ORCA Framework](/glossary/orca-framework.html)\n- [Object Mapping](/glossary/object-mapping.html)\n- [Nested Object Matrix](/glossary/nested-object-matrix.html)\n- [Object Guide](/glossary/object-guide.html)\n\n## Sources\n\n- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)\n- [Object-Oriented UX with Sophia Prater, InfoQ interview](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)\n- [Object-Oriented UX, Sophia V. Prater](https://alistapart.com/article/object-oriented-ux/)",
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
    "contentMarkdown": "# Nested Object Matrix\n\nA Nested Object Matrix (NOM) is an ORCA grid that lists the same object types across its columns and down its rows. Each intersection describes how instances of one type relate to instances of the other. Teams use it to investigate relationships and identify where users may need access to related records.\n\n## How do you read a Nested Object Matrix?\n\nIn Sophia Prater’s convention, the top row contains the **host objects**. Read a cell by starting with the column heading and describing how that host relates to the object type on the left. Use verbs and counts where you know them. To check the reverse direction, swap the row and column. Trip → Booking answers which bookings are on a trip. Booking → Trip answers which trip owns the booking.\n\n## A Nested Object Matrix for travel operations\n\nIn this example, a trip can exist before it has a booking. Each booking belongs to exactly one trip. Travelers may appear on multiple trips.\n\n| Related object ↓ / Host object → | Trip | Booking | Traveler |\n|---|---|---|---|\n| Trip | — | Belongs to exactly one trip | Can be linked to multiple trips |\n| Booking | Has zero or more bookings | — | — |\n| Traveler | Can include multiple travelers | — | — |\n\nA dash marks a cell with no direct relationship in this example. In a working matrix, mark an untested relationship as “To verify” so the team can distinguish it from an empty cell. For example, a booking can lead to travelers through its trip. If the product needs to identify which travelers are covered by a particular booking, investigate that as a separate relationship.\n\n## How do you build the matrix?\n\n1. **List the same object types on both axes.** Start with the shortlist from [noun foraging](/glossary/noun-foraging.html).\n2. **Describe each relevant relationship in plain language.** Put distinct relationships in the same cell when the same object types connect in several ways.\n3. **Check minimums and maximums in both directions.** “Has bookings” leaves open whether the first booking is required. Write the [cardinality](/glossary/cardinality-ux-architecture.html) explicitly when a rule is known. Teams use [ORCA Relationship Requirements (MCSFD)](/glossary/orca-relationship-requirements.html) to detail mechanics, sorting, and filtering, and introduce a [Junction Object](/glossary/junction-object.html) when the connection itself carries data.\n4. **Decide what users need to reach.** Test whether an agent who opens a booking from search can find its trip. Check that the trip is visible to that agent before adding the link.\n\nThe matrix focuses on relationships. The [object map](/glossary/object-mapping.html) builds on those findings to organize the information that describes each object. A [CTA Matrix](/glossary/cta-matrix.html) records what different roles can do with them.\n\n## Related terms\n\n- [ORCA Framework](/glossary/orca-framework.html)\n- [Object Mapping](/glossary/object-mapping.html)\n- [Noun Foraging](/glossary/noun-foraging.html)\n- [Cardinality (UX Architecture)](/glossary/cardinality-ux-architecture.html)\n\n## Sources\n\n- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)\n- [Object-Oriented UX with Sophia Prater, InfoQ interview](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)\n- [Object-Oriented UX, Sophia V. Prater](https://alistapart.com/article/object-oriented-ux/)",
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
    "contentMarkdown": "# CTA Matrix\n\nA CTA Matrix, or call-to-action matrix, is an ORCA grid that maps user roles to object types and records the actions each role needs to take on each object. It gives teams a starting point for defining permissions, conditions, and interaction requirements before placing controls on screens.\n\n## What goes in a CTA Matrix?\n\nPut roles down the rows and object types across the columns. Write actions as verbs in the cells. A role can describe a person’s relationship to the object, such as the agent assigned to a trip, when that relationship affects what they can do.\n\nStart with what each role needs to do. Review access and business rules before treating a proposed action as an approved requirement. A verb such as “Request cancellation” can become a button, menu item, or part of a guided workflow once the team designs the interaction.\n\n## CTA Matrix example for travel operations\n\nConsider a tool where an assigned agent manages the trip and a support reviewer investigates issues without changing records. This example focuses on a few actions from each role.\n\n| Role | Trip | Booking | Traveler |\n|---|---|---|---|\n| Assigned agent | View trip, add booking | View booking, request cancellation if eligible | View traveler, update contact details if permitted |\n| Support reviewer | View trip | View booking | View permitted traveler details |\n\nTurn “Request cancellation” into a user story. An assigned agent needs to request cancellation on an eligible confirmed booking when a traveler changes plans. When the request succeeds, show Cancellation pending so the agent knows the supplier still has to respond. The supplier’s response determines the next state.\n\n## How do you turn matrix entries into requirements?\n\n1. **Clarify who can act.** Check role, assignment, and record access separately where they affect the action.\n2. **Describe when the action is available.** Record the booking state and eligibility rules. Mark unresolved rules for follow-up.\n3. **Specify the result and feedback.** Include what the user sees after success, a blocked attempt, or a delayed response. Use a [state transition matrix](/glossary/state-transition-matrix.html) to track the lifecycle.\n4. **Choose placement in the interface.** Give frequent or time-sensitive actions appropriate prominence. Test whether users can find and understand them where the object appears.\n\nIn [ORCA](/glossary/orca-framework.html), teams begin this work during Discovery and expand matrix entries into user stories during Requirements. Use the matrix to agree on who can act. The application enforces those rules when the action is requested.\n\n## Related terms\n\n- [ORCA Framework](/glossary/orca-framework.html)\n- [Object Mapping](/glossary/object-mapping.html)\n- [Nested Object Matrix](/glossary/nested-object-matrix.html)\n- [State Transition Matrix](/glossary/state-transition-matrix.html)\n\n## Sources\n\n- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)\n- [Object-Oriented UX with Sophia Prater, InfoQ interview](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)\n- [Prioritizing Prioritization for Product Designers, Sophia V. Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)",
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
    "contentMarkdown": "# Object Guide\n\nAn Object Guide is a structured glossary of the objects in an Object-Oriented UX (OOUX) model. It records what each object means, how people recognize it, and which distinctions the team needs to preserve in product language and requirements. In ORCA, teams develop the guide during the Requirements round.\n\n## What should an Object Guide include?\n\nStart with a short definition and a recognizable example. Add the distinctions that affect the work. The fields below are a lightweight starting point for a travel operations product.\n\n| Field | Example entry for Booking |\n|---|---|\n| Preferred name | Booking |\n| Definition | A record used to arrange travel services with a supplier. It tracks the request from draft through the supplier’s response and any later changes. |\n| Instance | Booking B-52 for the outbound flight on Trip T-104. |\n| Why it matters | Agents use the booking to track the supplier response, check fare rules, and request changes when eligible. |\n| Boundary | An Offer contains proposed travel and pricing. A Booking tracks the supplier request. Accepting the offer and confirming the booking are separate events. |\n| Key relationship | Each booking belongs to one trip. A trip may exist before it has any bookings. |\n| Open question | Do agents use “reservation” as a synonym for Booking, or only after a supplier has confirmed it? |\n\nUse the definition to decide which record owns each status. The Offer can show Accepted while the Booking shows Awaiting confirmation. That tells an agent the traveler has agreed to the offer and the supplier’s response is still outstanding.\n\n## How does the guide work with other ORCA artifacts?\n\nUse the guide to agree on what an object represents. The [nested object matrix](/glossary/nested-object-matrix.html) records its relationships across the model. The [CTA Matrix](/glossary/cta-matrix.html) records actions by role, and the [object map](/glossary/object-mapping.html) organizes the information each object needs. Link to those artifacts when an entry needs more detail.\n\n## How do you keep an Object Guide useful?\n\nAsk sales and ticketing to classify two records: an offer the traveler accepted and a booking the supplier has yet to confirm. If they disagree on the names or statuses, record the difference and agree on what appears at the handoff.\n\nReview the entry when a change affects its definition, labels, or rules. Link to the decision or research note so the next person can see why the definition changed.\n\n## Related terms\n\n- [ORCA Framework](/glossary/orca-framework.html)\n- [Object Mapping](/glossary/object-mapping.html)\n- [Noun Foraging](/glossary/noun-foraging.html)\n- [CTA Matrix](/glossary/cta-matrix.html)\n\n## Sources\n\n- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)\n- [Prioritizing Prioritization for Product Designers, Sophia V. Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)\n- [Object-Oriented UX with Sophia Prater, InfoQ interview](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)",
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
    "contentMarkdown": "# Four UX Fails in OOUX\n\nThe four UX fails in Object-Oriented UX (OOUX) are masked, shape-shifting, broken, and isolated objects. Sophia Prater uses these patterns to diagnose why people may struggle to recognize objects, understand them across views, find their actions, or reach related records.\n\n## How do you spot the four problems?\n\n| Problem | Example in a travel operations tool | What to change |\n|---|---|---|\n| Masked object | A proposed Offer and a supplier Booking both appear as “Trip item,” with no indication of which is which. | Give each type a recognizable label and show the details people use to tell them apart. |\n| Shape-shifting object | Booking B-52 appears in search with its reference and status, then appears in the trip as an unlabeled date with no visible reference. | Keep identifying cues consistent across views. Choose how much detail each view needs. |\n| Broken object | The booking’s status is in one workspace, its fare rules in another, and the cancellation action in a separate admin menu. | Bring the relevant information and actions together around the booking, with access appropriate to the role. |\n| Isolated object | An agent opens a booking from search and must start a new search to find its trip, even though they can view both records. | Add a contextual link from the booking to its trip where the agent needs it. |\n\nIf the agent recognizes Booking B-52 but cannot find “Request cancellation,” check for a broken object. If they can act on the booking but cannot reach its trip, check for an isolated object.\n\n## How do you run a review?\n\nPick one object and follow it through a task. For Booking B-52, open the record from search and from its trip. Ask the agent to identify it, check whether cancellation is available, and find the related trip. Observe where they pause, look elsewhere, or mistake one record for another.\n\nUse the [object map](/glossary/object-mapping.html) to check which identifying fields belong on the record, where its actions should appear, and which relationships warrant a link. Fix the issue that interrupts the task first. A compact search result and a full detail page can look different while preserving the cues that help the agent recognize the booking.\n\n## Related terms\n\n- [Object-Oriented UX (OOUX)](/glossary/object-oriented-ux.html)\n- [ORCA Framework](/glossary/orca-framework.html)\n- [Object Mapping](/glossary/object-mapping.html)\n- [Structural Navigation Model](/glossary/structural-navigation-model.html)\n\n## Sources\n\n- [The Life-changing Magic of OOUX Tidying Up, Sophia V. Prater](https://speakerdeck.com/sophiavux/the-life-changing-magic-of-ooux-tidying-up)\n- [Designing With ORCA, OOUX](https://ooux.com/offerings/fourfails)",
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
    "contentMarkdown": "# Object Prioritization\n\nObject prioritization is the ORCA activity of deciding which objects a release needs and how prominently people should encounter them. It helps teams narrow the scope of an object model and choose how users enter it before designing menus and screens.\n\n## What are you prioritizing?\n\nRelease scope and navigation prominence are separate decisions. A Booking may be essential to the first release while agents can reach it through a Trip and search. The team can give Bookings a main navigation entry later if agents regularly need to work across trips.\n\nConsider what people need to complete the release’s main tasks, how often they need to find the object on its own, and what other objects or actions depend on it. Use work observations and examples from the [object map](/glossary/object-mapping.html) to make the decision concrete.\n\n## Example of prioritizing objects for a first release\n\nSuppose a travel operations team starts with one goal: let agents find a trip and manage its bookings.\n\n| Candidate | Release decision | How people reach it |\n|---|---|---|\n| Trip | Include it as the starting point for managing travel. | Main navigation and search. |\n| Booking | Include it so agents can track supplier responses and request cancellation. | Trip details and search by booking reference. |\n| Traveler | Keep it as a shared record so agents can recognize the person across trips. | From a trip’s traveler list. |\n| Supplier | Show the supplier name as booking information. Defer separate supplier profiles until agents need to manage them. | In booking details. |\n\nThe supplier decision reduces the release scope to the information agents use to identify a booking. If agents later need to update supplier contacts or see all bookings for a supplier, revisit the model.\n\n## How do you check your decisions?\n\nWalk through a routine task and an exception. In this example, an agent may receive a supplier message with only a booking reference. Check that search gets them to the booking and that the booking links back to the right trip when they have access.\n\nWhen you combine, defer, or simplify an object, review its relationships, actions, and attributes. Decide which information or behavior the release still needs and where it belongs. Record the evidence that would change your decision, such as agents repeatedly needing a queue of bookings across trips.\n\n## Related terms\n\n- [ORCA Framework](/glossary/orca-framework.html)\n- [Object Mapping](/glossary/object-mapping.html)\n- [Object Guide](/glossary/object-guide.html)\n- [Structural Navigation Model](/glossary/structural-navigation-model.html)\n\n## Sources\n\n- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)\n- [Prioritizing Prioritization for Product Designers, Sophia V. Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)\n- [Designing With ORCA, OOUX](https://ooux.com/offerings/fourfails)",
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
    "contentMarkdown": "# ORCA Relationship Requirements\n\nORCA relationship requirements describe how a connection between objects works in a product. Sophia Prater uses MCSFD as a checklist for five decisions: mechanics, cardinality, sorting, filtering, and dependency. Teams use it to turn a relationship they discovered into rules they can design and test.\n\n## What does MCSFD cover?\n\nTake one connection from a [Nested Object Matrix](/glossary/nested-object-matrix.html). In this example, an agent opens Trip T-104 to find Booking B-52 and check whether the supplier has responded.\n\n| Decision | Question | Example rule |\n|---|---|---|\n| Mechanics | How is the connection created or changed? | Adding a booking from a trip assigns that trip automatically. When adding one elsewhere, the agent selects a trip. |\n| Cardinality | How many records can relate in each direction? | A trip can have zero or more bookings. Each booking belongs to exactly one trip. |\n| Sorting | Which order helps people scan the related records? | Show the earliest service date first. Put bookings without a service date after dated bookings. |\n| Filtering | Which subset helps with a task? | Agents can filter by Awaiting confirmation to find bookings the supplier has yet to confirm. |\n| Dependency | What happens to related records when one changes or is removed? | Archiving a trip preserves its linked bookings. Agents with access can still review their history. |\n\nThese are product rules for the example. Confirm the equivalent rules with the people who do the work and the team that maintains the system.\n\n## How do these rules affect the design?\n\nA trip with zero bookings needs a clear way for an authorized agent to add the first booking. If a status filter hides all bookings, the empty message can explain that no bookings match and offer to clear the filter. The agent can tell whether they need to create a booking or change the filter.\n\nApply the checklist in the direction that supports the task. On a Trip, sorting its bookings may matter. On a Booking, there is only one linked Trip, so sorting adds nothing to that view.\n\nReview exceptions before finalizing the rule. Ask what an agent sees when opening a booking from search after its trip was archived. Confirm which records are still visible, which actions remain available, and where the agent can find the trip history.\n\n## Related terms\n\n- [ORCA Framework](/glossary/orca-framework.html)\n- [Nested Object Matrix](/glossary/nested-object-matrix.html)\n- [Cardinality (UX Architecture)](/glossary/cardinality-ux-architecture.html)\n- [Junction Object](/glossary/junction-object.html)\n\n## Sources\n\n- [Introducing ORCA, Sophia V. Prater](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)\n- [Object-Oriented UX with Sophia Prater, InfoQ](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)\n- [Prioritizing Prioritization for Product Designers, Sophia V. Prater](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)",
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
    "contentMarkdown": "# Junction Object\n\nA junction object represents a relationship as an object in its own right. It is useful when the connection itself carries information that matters to users. In Object-Oriented UX (OOUX), it gives that information a clear place in the model and helps teams decide where people should see or change it.\n\n## Example of a junction object\n\nA traveler can be linked to several trips, and a trip can include several travelers. Suppose agents also need to know whether each traveler has confirmed they will join a particular trip. One traveler can be Confirmed for Trip T-104 and Invited for another trip at the same time.\n\n| Where the information belongs | Example |\n|---|---|\n| Traveler | Name and contact details |\n| Trip | Reference and travel dates |\n| Trip Participation | One trip, one traveler, participation status, and response date when available |\n\nTrip Participation is the junction object. In this example, the product allows one participation record for each traveler and trip pair. If an agent changes the status for Trip T-104 to Confirmed, any Invited status on a different trip stays as it was.\n\n## When is a junction object useful?\n\nAsk whether the same person or record can have different values depending on what it is linked to. A traveler’s contact details normally describe the person. Their response to a particular trip invitation describes their participation in that trip.\n\nThen check what people do with the relationship. In this example, an invitation creates a participation record, a response updates it, and removal ends that traveler’s association with the trip. Naming the junction object lets the team talk about these actions without confusing a trip-specific change with an edit to the traveler’s profile.\n\n## How does it show up in the interface?\n\nIn the trip’s traveler list, show the traveler’s name alongside their participation status. Opening the name can lead to the Traveler record. An action such as “Remove from trip” applies to the participation and leaves the traveler profile intact.\n\nThe junction object can be represented by that row and its actions. Give it a detail view if people need to inspect a response history or manage more information than the row can show. Use the [nested object matrix](/glossary/nested-object-matrix.html) to record how Trip Participation connects to Trip and Traveler.\n\n## Related terms\n\n- [Object Mapping](/glossary/object-mapping.html)\n- [Cardinality (UX Architecture)](/glossary/cardinality-ux-architecture.html)\n- [Nested Object Matrix](/glossary/nested-object-matrix.html)\n- [ORCA Relationship Requirements](/glossary/orca-relationship-requirements.html)\n\n## Sources\n\n- [Object-Oriented UX: The Backbone of the Design Process, Sophia Prater interview](https://itx.com/podcast/166-sophia-prater-on-object-oriented-ux-the-backbone-of-the-design-process/)\n- [Object-Oriented UX with Sophia Prater, InfoQ](https://www.infoq.com/podcasts/object-oriented-ux-sophia-prater/)",
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
    "contentMarkdown": "# User Retention\n\nUser retention measures how many people in a starting group return to use a product over time. A retention rate uses a defined group, a return behavior, and a time window. For a product used by teams, the same approach can measure retention at the account level.\n\n## How do you calculate a retention rate?\n\n**Retention rate = eligible cohort members who meet the return condition ÷ all eligible members of the starting cohort × 100.**\n\nA cohort is a group that shares a starting condition, such as signing up in the same week. Define what counts as returning, then give every cohort member the full observation window. Choose a return event that reflects the product’s job, such as sending an invoice for an invoicing tool.\n\n## Example of account retention\n\nAn invoicing team wants to know whether new accounts keep using the product after initial activation. The cohort includes 120 eligible new accounts that sent their first real invoice within seven days of signup. The return condition is sending another real invoice during days 15–30 after signup.\n\nIf 72 of those accounts meet the return condition, the **retention rate for this activated cohort is 60%** (72 ÷ 120 × 100). Count each account once, even if its team sends several invoices. Read the result after all accounts have finished day 30.\n\nTo compare later use across activated and non-activated accounts, use a return condition both can meet. Sending any real invoice during days 15–30 works for that question. It answers a different question from repeat use among accounts that already sent an invoice.\n\n## Which time window should you use?\n\nMatch the window to the natural usage cycle. A daily collaboration tool and a monthly invoicing product can show very different patterns. Day-30 retention counts a return on that day. A days 15–30 window counts any qualifying return in that interval. For “day 30 or later,” state the reporting cutoff and give cohorts comparable follow-up time.\n\nRead retention alongside [activation](/glossary/activation-metric.html). Activation tracks initial progress. Retention tracks a return to meaningful work. A drop in usage retention can prompt investigation into who stopped returning and why. Subscription churn measures a separate outcome, such as cancellation or nonrenewal.\n\n## Related terms\n\n- [Activation Metric](/glossary/activation-metric.html)\n- [Time-to-Value (TTV)](/glossary/time-to-value-ttv.html)\n- [North Star Metric (NSM)](/glossary/north-star-metric-nsm.html)\n- [Churn Mitigation](/glossary/churn-mitigation-architecture.html)\n\n## Sources\n\n- [Build a retention analysis, Amplitude Docs](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-build)\n- [How the Retention Analysis chart calculates retention, Amplitude Docs](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation)\n- [How time works in a retention analysis, Amplitude Docs](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-time)",
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
    "contentMarkdown": "# Product-Qualified Lead (PQL)\n\nA product-qualified lead (PQL) is a prospective buyer whose product use provides evidence that they may be ready to purchase. Teams combine usage with customer fit and intent to decide whether to offer help, route the lead to sales, or keep the experience self-service.\n\n## How is a PQL different from activation or an MQL?\n\nAn [activation event](/glossary/activation-metric.html) indicates initial product value. A PQL rule identifies a prospect for a commercial next step. A marketing-qualified lead (MQL) is qualified primarily through marketing engagement and fit. The same person may qualify through more than one route.\n\n## Example for a team planning tool\n\nA planning product offers one shared project for free. A team activates when two teammates complete their first shared task. Several weeks later, an administrator requests help enabling controls available on the paid plan. The workspace shows evidence of account-level fit and usage. The administrator’s request gives the team a specific person to help and a reason to follow up.\n\n| Signal | Example |\n|---|---|\n| Product use | Teammates complete shared tasks and return to do more work. |\n| Fit | The team needs controls the paid plan supports. |\n| Intent | A workspace administrator asks about enabling those controls. |\n| Next step | Answer the question or offer a setup conversation when appropriate. |\n\nIn a team product, decide whether the rule qualifies an individual or an account. Account-level qualification is often called a **product-qualified account (PQA)**. The workspace may show the usage signal while a specific administrator is the appropriate contact.\n\n## How do you validate a PQL rule?\n\nWrite the events, qualifying conditions, time window, and unit before comparing results. Check whether flagged prospects go on to buy at a higher rate than comparable eligible prospects. Review false positives, such as active users who have no purchasing role or teams that are well served by the free plan.\n\nEvaluate outreach separately from the rule. For example, if there is enough traffic, randomly assign eligible qualified prospects to an offer of help or the usual experience and compare paid conversion. Keep qualification tied to a useful next step and respect the customer’s contact preferences.\n\n## Related terms\n\n- [Product-Led Growth (PLG)](/glossary/product-led-growth-plg.html)\n- [Activation Metric](/glossary/activation-metric.html)\n- [Lead Capture](/glossary/lead-capture-mechanics.html)\n- [Product Telemetry & Analytics](/glossary/product-telemetry-analytics.html)\n\n## Sources\n\n- [How to Define PQLs, ProductLed](https://productled.com/blog/how-to-define-pqls)\n- [Product Qualified Leads in Freemium, OpenView](https://openviewpartners.com/blog/freemium-startup-product-qualified-leads/)\n- [Product-Led Sales AMA with Kyle Poyar, Pocus](https://www.pocus.com/blog/product-led-sales-pls-ama-kyle-poyar-openview-pls-benchmarks)"
  },
  {
    "id": "111",
    "name": "European Accessibility Act (EAA)",
    "slug": "european-accessibility-act",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "The European Accessibility Act (EAA) is an EU directive that sets accessibility requirements for certain products and services sold or provided in the EU. It covers consumer e-commerce, consumer banking, e-books, and specified digital aspects of passenger transport, among other services. The directive sets June 28, 2025, as the start date for applying national measures, with transition provisions for some cases.",
    "purpose": "Harmonizes accessibility standards across EU member states to remove cross-border market barriers and guarantee accessible digital commerce and public services for consumers with disabilities.",
    "keyConcepts": [
      "Directive (EU) 2019/882",
      "presumption of conformity",
      "consumer e-commerce scope",
      "microenterprise exemption",
      "Annex I functional requirements"
    ],
    "howItWorks": "Directs member states to enact national laws enforcing accessibility for covered consumer-facing digital services, referencing European harmonized standards (such as EN 301 549) to presume conformity.",
    "relatedTerms": [
      "Accessibility and WCAG",
      "EN 301 549",
      "Web Accessibility Audit",
      "ADA Web Accessibility"
    ],
    "seoTitle": "European Accessibility Act (EAA) for Digital Products",
    "seoDescription": "Learn which digital services the European Accessibility Act covers, what it means for e-commerce and checkout, and where to check national requirements.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/european-accessibility-act.html",
    "sources": [
      "Directive (EU) 2019/882, EUR-Lex (https://eur-lex.europa.eu/eli/dir/2019/882/oj?uri=CELEX%3A32019L0882)",
      "Accessibility Requirements for Products and Services, Your Europe (https://europa.eu/youreurope/business/selling-in-eu/selling-goods-services/accessibility/indexamp_en.htm)",
      "European Accessibility Act, Council of the European Union (https://www.consilium.europa.eu/en/policies/accessibility-goods-services/)"
    ],
    "contentMarkdown": "# European Accessibility Act (EAA)\n\nThe European Accessibility Act (EAA) is an EU directive that sets accessibility requirements for certain products and services sold or provided in the EU. It covers consumer e-commerce, consumer banking, e-books, and specified digital aspects of passenger transport, among other services. The directive sets June 28, 2025, as the start date for applying national measures, with transition provisions for some cases.\n\n## Which websites and apps does the EAA cover?\n\nScope depends on the service being offered. For e-commerce, the directive covers online services offered to consumers with a view to concluding a consumer contract. Websites and apps are channels through which those services can be offered. For websites and mobile apps of EU public sector bodies, see the Web Accessibility Directive and its relationship to [EN 301 549](/glossary/en-301-549.html).\n\nArticle 4(5) exempts microenterprises providing services. The definition in Article 3(23) uses fewer than 10 people and either annual turnover or an annual balance sheet total of no more than €2 million. The directive treats microenterprises dealing with products differently. Check the national implementing law and any relevant transition provisions for the service and country.\n\n## What should a product team check in checkout?\n\nFor a travel site selling bookings to consumers, start with the real journey from fare selection to purchase confirmation. Test choosing a fare without a mouse, identifying errors in the traveler form, and completing payment authentication with assistive technology. Include payment or identity steps supplied by third parties in the evaluation. Annex I specifically addresses accessibility of identification, security, and payment functions provided as part of an e-commerce service.\n\n## How does the EAA relate to WCAG and EN 301 549?\n\nThe EAA sets the legal requirements. [WCAG](/glossary/accessibility-wcag.html) gives teams testable web criteria, and [EN 301 549](/glossary/en-301-549.html) covers a broader range of information and communication technology. Article 15 ties a presumption of conformity to requirements covered by standards or parts of standards referenced for the directive in the EU Official Journal. For an assessment, identify the applicable national law, Annex I requirements, and any references published for the EAA.\n\n## Related terms\n\n- [Accessibility and WCAG](/glossary/accessibility-wcag.html)\n- [EN 301 549](/glossary/en-301-549.html)\n- [Web Accessibility Audit](/glossary/web-accessibility-audit.html)\n- [ADA Web Accessibility](/glossary/ada-web-accessibility.html)\n\n## Sources\n\n- [Directive (EU) 2019/882, EUR-Lex](https://eur-lex.europa.eu/eli/dir/2019/882/oj?uri=CELEX%3A32019L0882)\n- [Accessibility Requirements for Products and Services, Your Europe](https://europa.eu/youreurope/business/selling-in-eu/selling-goods-services/accessibility/indexamp_en.htm)\n- [European Accessibility Act, Council of the European Union](https://www.consilium.europa.eu/en/policies/accessibility-goods-services/)",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/european-accessibility-act.html#webpage",
        "url": "https://lexkonovalov.com/glossary/european-accessibility-act.html",
        "name": "European Accessibility Act (EAA) for Digital Products",
        "description": "Learn which digital services the European Accessibility Act covers, what it means for e-commerce and checkout, and where to check national requirements.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/european-accessibility-act.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/european-accessibility-act.html#breadcrumbs"
        },
        "citation": [
          "https://eur-lex.europa.eu/eli/dir/2019/882/oj?uri=CELEX%3A32019L0882",
          "https://europa.eu/youreurope/business/selling-in-eu/selling-goods-services/accessibility/indexamp_en.htm",
          "https://www.consilium.europa.eu/en/policies/accessibility-goods-services/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/european-accessibility-act.html#term",
        "name": "European Accessibility Act (EAA)",
        "termCode": "european-accessibility-act",
        "description": "The European Accessibility Act (EAA) is an EU directive that sets accessibility requirements for certain products and services sold or provided in the EU. It covers consumer e-commerce, consumer banking, e-books, and specified digital aspects of passenger transport, among other services. The directive sets June 28, 2025, as the start date for applying national measures, with transition provisions for some cases.",
        "url": "https://lexkonovalov.com/glossary/european-accessibility-act.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/european-accessibility-act.html#webpage"
        },
        "alternateName": [
          "EAA",
          "Directive (EU) 2019/882"
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
        "@id": "https://lexkonovalov.com/glossary/european-accessibility-act.html#breadcrumbs",
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
            "name": "European Accessibility Act (EAA)",
            "item": "https://lexkonovalov.com/glossary/european-accessibility-act.html"
          }
        ]
      }
    ],
    "alternateName": [
      "EAA",
      "Directive (EU) 2019/882"
    ]
  },
  {
    "id": "112",
    "name": "EN 301 549",
    "slug": "en-301-549",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "EN 301 549 is a European technical standard for accessibility in information and communication technology (ICT). It covers web content, non-web documents, software, hardware, and services. Its web requirements draw on WCAG, and its other clauses address accessibility needs specific to different products and services.",
    "purpose": "Provides European public procurement and regulatory bodies with a unified, harmonized technical specification for ICT accessibility across hardware, software, documents, and web interfaces.",
    "keyConcepts": [
      "ETSI standard",
      "harmonized European standard",
      "WCAG alignment",
      "v3.2.1 vs v4.1.1",
      "non-web ICT clauses"
    ],
    "howItWorks": "Maps technical criteria across digital channels; Clause 9 evaluates web content against WCAG success criteria, while Clauses 10 and 11 evaluate non-web documents and software interfaces.",
    "relatedTerms": [
      "Accessibility and WCAG",
      "European Accessibility Act (EAA)",
      "Web Accessibility Audit",
      "Section 508"
    ],
    "seoTitle": "EN 301 549: EU Accessibility Standard and WCAG",
    "seoDescription": "Understand EN 301 549, how it relates to WCAG and EU accessibility directives, and why the published and legally referenced versions can differ.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/en-301-549.html",
    "sources": [
      "EN 301 549 V3.2.1, ETSI (https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf)",
      "EN 301 549 V4.1.1, ETSI (https://www.etsi.org/deliver/etsi_en/301500_301599/301549/04.01.01_60/en_301549v040101p.pdf)",
      "Web Accessibility Directive, European Commission (https://digital-strategy.ec.europa.eu/en/policies/web-accessibility)",
      "Harmonized Standards for the Web Accessibility Directive, European Commission (https://single-market-economy.ec.europa.eu/single-market/goods/european-standards/harmonised-standards/accessibility-websites-and-mobile-applications_en)",
      "EN 301 549 Version Update, AccessibleEU (https://accessible-eu-centre.ec.europa.eu/content-corner/news/european-accessibility-standard-en-301-549-has-been-updated-2026-09-07_en)",
      "European Accessibility Act, EUR-Lex (https://eur-lex.europa.eu/eli/dir/2019/882/oj?uri=CELEX%3A32019L0882)"
    ],
    "contentMarkdown": "# EN 301 549\n\nEN 301 549 is a European technical standard for accessibility in information and communication technology (ICT). It covers web content, non-web documents, software, hardware, and services. Its web requirements draw on WCAG, and its other clauses address accessibility needs specific to different products and services.\n\n## How does EN 301 549 relate to WCAG?\n\n[WCAG](/glossary/accessibility-wcag.html) provides testable requirements for accessible web content. EN 301 549 has separate clauses for web content, non-web documents, and software, as well as requirements for other areas such as documentation and support. If a service includes a downloadable PDF, for example, a team should assess the document as well as the page containing its download link.\n\n## Which version of EN 301 549 applies?\n\nStatus checked in November 2026.\n\n| Reference | What to check |\n|---|---|\n| **EN 301 549 v3.2.1 (2021)** | The harmonized reference cited for the EU Web Accessibility Directive. Its web criteria align with WCAG 2.1 Level AA. Use the applicable requirements identified for websites or mobile apps in Annex A. |\n| **EN 301 549 v4.1.1 (2026)** | ETSI published this edition in September 2026. Its web requirements draw on WCAG 2.2 Level AA. Publication of the standard and citation in the EU Official Journal are separate steps. Check the Commission’s list for the directive you are applying. |\n| **Contract or procurement** | Use the version and specific clauses named in the contract or tender. Confirm whether reports, documents, software, or support are in scope. |\n\nThe Web Accessibility Directive (Directive (EU) 2016/2102) covers websites and mobile apps of EU public sector bodies. It also requires an accessibility statement and a feedback mechanism. The [European Accessibility Act](/glossary/european-accessibility-act.html) has its own scope and process for recognizing harmonized references.\n\n**Example.** For a municipal booking portal, document the exact version, include the complete booking journey, and check whether its downloadable confirmation is in scope. Record the applicable clause alongside each finding, even when the same issue also maps to a WCAG criterion.\n\n## Related terms\n\n- [Accessibility and WCAG](/glossary/accessibility-wcag.html)\n- [European Accessibility Act (EAA)](/glossary/european-accessibility-act.html)\n- [Web Accessibility Audit](/glossary/web-accessibility-audit.html)\n- [Section 508](/glossary/section-508.html)\n\n## Sources\n\n- [EN 301 549 V3.2.1, ETSI](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf)\n- [EN 301 549 V4.1.1, ETSI](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/04.01.01_60/en_301549v040101p.pdf)\n- [Web Accessibility Directive, European Commission](https://digital-strategy.ec.europa.eu/en/policies/web-accessibility)\n- [Harmonized Standards for the Web Accessibility Directive, European Commission](https://single-market-economy.ec.europa.eu/single-market/goods/european-standards/harmonised-standards/accessibility-websites-and-mobile-applications_en)\n- [EN 301 549 Version Update, AccessibleEU](https://accessible-eu-centre.ec.europa.eu/content-corner/news/european-accessibility-standard-en-301-549-has-been-updated-2026-09-07_en)\n- [European Accessibility Act, EUR-Lex](https://eur-lex.europa.eu/eli/dir/2019/882/oj?uri=CELEX%3A32019L0882)",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/en-301-549.html#webpage",
        "url": "https://lexkonovalov.com/glossary/en-301-549.html",
        "name": "EN 301 549: EU Accessibility Standard and WCAG",
        "description": "Understand EN 301 549, how it relates to WCAG and EU accessibility directives, and why the published and legally referenced versions can differ.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/en-301-549.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/en-301-549.html#breadcrumbs"
        },
        "citation": [
          "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf",
          "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/04.01.01_60/en_301549v040101p.pdf",
          "https://digital-strategy.ec.europa.eu/en/policies/web-accessibility",
          "https://single-market-economy.ec.europa.eu/single-market/goods/european-standards/harmonised-standards/accessibility-websites-and-mobile-applications_en",
          "https://accessible-eu-centre.ec.europa.eu/content-corner/news/european-accessibility-standard-en-301-549-has-been-updated-2026-09-07_en",
          "https://eur-lex.europa.eu/eli/dir/2019/882/oj?uri=CELEX%3A32019L0882"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/en-301-549.html#term",
        "name": "EN 301 549",
        "termCode": "en-301-549",
        "description": "EN 301 549 is a European technical standard for accessibility in information and communication technology (ICT). It covers web content, non-web documents, software, hardware, and services. Its web requirements draw on WCAG, and its other clauses address accessibility needs specific to different products and services.",
        "url": "https://lexkonovalov.com/glossary/en-301-549.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/en-301-549.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/en-301-549.html#breadcrumbs",
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
            "name": "EN 301 549",
            "item": "https://lexkonovalov.com/glossary/en-301-549.html"
          }
        ]
      }
    ]
  },
  {
    "id": "113",
    "name": "ADA Web Accessibility",
    "slug": "ada-web-accessibility",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "ADA web accessibility refers to providing people with disabilities access to online services under the Americans with Disabilities Act. Title II applies to U.S. state and local government entities. Title III applies to businesses and nonprofits that qualify as places of public accommodation.",
    "purpose": "Ensures equal access to digital public services and private commercial websites under United States civil rights law.",
    "keyConcepts": [
      "ADA Title II vs Title III",
      "DOJ web accessibility rule",
      "WCAG 2.1 AA benchmark",
      "public accommodation",
      "compliance deadlines"
    ],
    "howItWorks": "Enforces accessibility compliance through federal rulemaking and court interpretations; Title II mandates WCAG 2.1 AA compliance by 2027/2028, while Title III applies WCAG principles to public accommodations.",
    "relatedTerms": [
      "Accessibility and WCAG",
      "Section 508",
      "Web Accessibility Audit",
      "European Accessibility Act (EAA)"
    ],
    "seoTitle": "ADA Web Accessibility: Title II, Title III, and WCAG",
    "seoDescription": "Understand how ADA Title II and Title III apply to web accessibility, which rule cites WCAG 2.1 AA, and how the U.S. compliance dates differ.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/ada-web-accessibility.html",
    "sources": [
      "Guidance on Web Accessibility and the ADA, U.S. Department of Justice (https://www.ada.gov/resources/web-guidance/)",
      "ADA Title III Regulations, U.S. Department of Justice (https://www.ada.gov/law-and-regs/regulations/title-iii-regulations/)",
      "28 CFR § 35.200, Electronic Code of Federal Regulations (https://www.ecfr.gov/current/title-28/chapter-I/part-35/subpart-H/section-35.200)",
      "2026 Interim Final Rule Extending Compliance Dates, Federal Register (https://www.govinfo.gov/content/pkg/FR-2026-04-20/pdf/2026-07663.pdf)",
      "Title II Small Entity Compliance Guide, U.S. Department of Justice (https://www.ada.gov/resources/small-entity-compliance-guide/)"
    ],
    "contentMarkdown": "# ADA Web Accessibility\n\nADA web accessibility refers to providing people with disabilities access to online services under the Americans with Disabilities Act. Title II applies to U.S. state and local government entities. Title III applies to businesses and nonprofits that qualify as places of public accommodation.\n\n## How do Title II and Title III differ?\n\n| ADA title | Web accessibility requirements |\n|---|---|\n| **Title II** | The U.S. Department of Justice rule sets WCAG 2.1 Level AA as the technical standard for covered web content and mobile apps that state and local governments provide or make available, including through relevant vendor arrangements. The rule specifies exceptions and other conditions. |\n| **Title III** | The Department of Justice’s web guidance explains that covered public accommodations must make the goods and services they offer online accessible. Use WCAG as a technical benchmark and evaluate the obligations that apply to the business. |\n\n## What are the ADA Title II web rule deadlines?\n\nUnder the April 2026 interim final rule, state and local government entities with a population of 50,000 or more, excluding special districts, have until **April 26, 2027**. Entities below 50,000 and special district governments have until **April 26, 2028**. Existing Title II obligations continue to apply before these dates.\n\n## What should a product team do?\n\nFor a city’s online permit application, include the portal, its forms, and the submission and payment steps in the accessibility scope. Identify any applicable exceptions, then evaluate the covered process against WCAG 2.1 AA. For a private retailer, start with the scope of Title III and the applicable legal context. Use WCAG to turn barriers in browsing and checkout into testable findings. [Section 508](/glossary/section-508.html) is a separate federal ICT framework relevant to U.S. federal agencies and the products they procure.\n\n## Related terms\n\n- [Accessibility and WCAG](/glossary/accessibility-wcag.html)\n- [Section 508](/glossary/section-508.html)\n- [Web Accessibility Audit](/glossary/web-accessibility-audit.html)\n- [European Accessibility Act (EAA)](/glossary/european-accessibility-act.html)\n\n## Sources\n\n- [Guidance on Web Accessibility and the ADA, U.S. Department of Justice](https://www.ada.gov/resources/web-guidance/)\n- [ADA Title III Regulations, U.S. Department of Justice](https://www.ada.gov/law-and-regs/regulations/title-iii-regulations/)\n- [28 CFR § 35.200, Electronic Code of Federal Regulations](https://www.ecfr.gov/current/title-28/chapter-I/part-35/subpart-H/section-35.200)\n- [2026 Interim Final Rule Extending Compliance Dates, Federal Register](https://www.govinfo.gov/content/pkg/FR-2026-04-20/pdf/2026-07663.pdf)\n- [Title II Small Entity Compliance Guide, U.S. Department of Justice](https://www.ada.gov/resources/small-entity-compliance-guide/)",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/ada-web-accessibility.html#webpage",
        "url": "https://lexkonovalov.com/glossary/ada-web-accessibility.html",
        "name": "ADA Web Accessibility: Title II, Title III, and WCAG",
        "description": "Understand how ADA Title II and Title III apply to web accessibility, which rule cites WCAG 2.1 AA, and how the U.S. compliance dates differ.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/ada-web-accessibility.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/ada-web-accessibility.html#breadcrumbs"
        },
        "citation": [
          "https://www.ada.gov/resources/web-guidance/",
          "https://www.ada.gov/law-and-regs/regulations/title-iii-regulations/",
          "https://www.ecfr.gov/current/title-28/chapter-I/part-35/subpart-H/section-35.200",
          "https://www.govinfo.gov/content/pkg/FR-2026-04-20/pdf/2026-07663.pdf",
          "https://www.ada.gov/resources/small-entity-compliance-guide/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/ada-web-accessibility.html#term",
        "name": "ADA Web Accessibility",
        "termCode": "ada-web-accessibility",
        "description": "ADA web accessibility refers to providing people with disabilities access to online services under the Americans with Disabilities Act. Title II applies to U.S. state and local government entities. Title III applies to businesses and nonprofits that qualify as places of public accommodation.",
        "url": "https://lexkonovalov.com/glossary/ada-web-accessibility.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/ada-web-accessibility.html#webpage"
        },
        "alternateName": [
          "ADA Website Accessibility"
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
        "@id": "https://lexkonovalov.com/glossary/ada-web-accessibility.html#breadcrumbs",
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
            "name": "ADA Web Accessibility",
            "item": "https://lexkonovalov.com/glossary/ada-web-accessibility.html"
          }
        ]
      }
    ],
    "alternateName": [
      "ADA Website Accessibility"
    ]
  },
  {
    "id": "114",
    "name": "Section 508",
    "slug": "section-508",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Section 508 of the Rehabilitation Act requires U.S. federal agencies to make covered information and communication technology (ICT) accessible when they develop, procure, maintain, or use it. The Revised Section 508 Standards cover areas such as websites, electronic documents, software, hardware, and support documentation.",
    "purpose": "Regulates federal procurement and technology deployment in the United States to ensure all federal employees and public citizens with disabilities have comparable access to ICT.",
    "keyConcepts": [
      "Rehabilitation Act",
      "Revised 508 Standards",
      "WCAG 2.0 AA incorporation",
      "VPAT template",
      "Accessibility Conformance Report (ACR)"
    ],
    "howItWorks": "Requires federal agencies and prospective vendors to document compliance via ACRs (built on VPATs), incorporating WCAG 2.0 Level AA for digital and software interfaces.",
    "relatedTerms": [
      "Accessibility and WCAG",
      "ADA Web Accessibility",
      "EN 301 549",
      "Web Accessibility Audit"
    ],
    "seoTitle": "Section 508 Accessibility: Federal ICT and WCAG",
    "seoDescription": "Learn what Section 508 covers, where the federal standards use WCAG 2.0 AA, and how ACRs and VPATs support accessibility procurement.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/section-508.html",
    "sources": [
      "Revised Section 508 Standards, U.S. Access Board (https://www.access-board.gov/ict/)",
      "Accessibility Conformance Reports, General Services Administration (https://www.section508.gov/sell/acr/)"
    ],
    "contentMarkdown": "# Section 508\n\nSection 508 of the Rehabilitation Act requires U.S. federal agencies to make covered information and communication technology (ICT) accessible when they develop, procure, maintain, or use it. The Revised Section 508 Standards cover areas such as websites, electronic documents, software, hardware, and support documentation.\n\n## Which WCAG version does Section 508 use?\n\nThe Revised Section 508 Standards incorporate **WCAG 2.0 Level AA (including Level A)** for covered electronic content under E205.4 and for covered software under E207.2, with specified exceptions for some non-web criteria. Additional ICT requirements can apply. Teams using WCAG 2.2 for their own product work should still map evidence to the criteria and clauses the procurement names.\n\n## What are VPATs and ACRs?\n\nAn **Accessibility Conformance Report (ACR)** describes how a specific product or version meets applicable accessibility requirements. A **VPAT** is a template vendors can use to prepare that report. An ACR supports procurement review, and its scope and test evidence determine how much the buyer can infer about a real workflow.\n\n## Example: A SaaS tool for a federal agency\n\nA federal agency evaluating a case-management app might request an ACR for the version under consideration. The product team can document keyboard access to the case table, screen reader output for status changes, and the accessibility of generated reports. The agency can review the evidence against the procurement’s requirements and test a representative workflow. Record the product version, test scope, and limitations with enough detail for the agency to assess their impact.\n\n## Related terms\n\n- [Accessibility and WCAG](/glossary/accessibility-wcag.html)\n- [ADA Web Accessibility](/glossary/ada-web-accessibility.html)\n- [EN 301 549](/glossary/en-301-549.html)\n- [Web Accessibility Audit](/glossary/web-accessibility-audit.html)\n\n## Sources\n\n- [Revised Section 508 Standards, U.S. Access Board](https://www.access-board.gov/ict/)\n- [Accessibility Conformance Reports, General Services Administration](https://www.section508.gov/sell/acr/)",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/section-508.html#webpage",
        "url": "https://lexkonovalov.com/glossary/section-508.html",
        "name": "Section 508 Accessibility: Federal ICT and WCAG",
        "description": "Learn what Section 508 covers, where the federal standards use WCAG 2.0 AA, and how ACRs and VPATs support accessibility procurement.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/section-508.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/section-508.html#breadcrumbs"
        },
        "citation": [
          "https://www.access-board.gov/ict/",
          "https://www.section508.gov/sell/acr/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/section-508.html#term",
        "name": "Section 508",
        "termCode": "section-508",
        "description": "Section 508 of the Rehabilitation Act requires U.S. federal agencies to make covered information and communication technology (ICT) accessible when they develop, procure, maintain, or use it. The Revised Section 508 Standards cover areas such as websites, electronic documents, software, hardware, and support documentation.",
        "url": "https://lexkonovalov.com/glossary/section-508.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/section-508.html#webpage"
        },
        "alternateName": [
          "Rehabilitation Act Section 508",
          "Revised Section 508 Standards"
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
        "@id": "https://lexkonovalov.com/glossary/section-508.html#breadcrumbs",
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
            "name": "Section 508",
            "item": "https://lexkonovalov.com/glossary/section-508.html"
          }
        ]
      }
    ],
    "alternateName": [
      "Rehabilitation Act Section 508",
      "Revised Section 508 Standards"
    ]
  },
  {
    "id": "115",
    "name": "Web Accessibility Audit",
    "slug": "web-accessibility-audit",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "A web accessibility audit is a documented evaluation of a website or web app against a defined accessibility standard and scope. It identifies barriers, records how they were found, and gives teams evidence they can use to prioritize fixes and verify changes.",
    "purpose": "Systematically evaluates digital products against accessibility standards (e.g. WCAG 2.2 AA) to document barriers, determine legal conformance, and prioritize remediation.",
    "keyConcepts": [
      "WCAG-EM methodology",
      "representative sampling",
      "automated scanning vs manual evaluation",
      "assistive technology testing",
      "reproducible findings"
    ],
    "howItWorks": "Scopes critical user paths, combines automated rule checking with keyboard/screen-reader testing, and produces structured issue reports linked to specific success criteria.",
    "relatedTerms": [
      "Accessibility and WCAG",
      "Semantic HTML",
      "ARIA (Accessible Rich Internet Applications)",
      "EN 301 549",
      "ADA Web Accessibility"
    ],
    "seoTitle": "Web Accessibility Audit: How to Test and Report Findings",
    "seoDescription": "Learn how to scope a web accessibility audit, combine automated and manual tests, sample complete tasks, and write findings developers can reproduce.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/web-accessibility-audit.html",
    "sources": [
      "Evaluating Web Accessibility, W3C WAI (https://www.w3.org/WAI/test-evaluate/)",
      "WCAG Evaluation Methodology (WCAG-EM), W3C WAI (https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/)",
      "Involving Users in Evaluating Web Accessibility, W3C WAI (https://www.w3.org/WAI/test-evaluate/involving-users/)",
      "WCAG 2.2 Recommendation, W3C (https://www.w3.org/TR/WCAG22/)",
      "Understanding No Keyboard Trap, W3C WAI (https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)"
    ],
    "contentMarkdown": "# Web Accessibility Audit\n\nA web accessibility audit is a documented evaluation of a website or web app against a defined accessibility standard and scope. It identifies barriers, records how they were found, and gives teams evidence they can use to prioritize fixes and verify changes.\n\n## How do you run a web accessibility audit?\n\n1. **Define the scope and target.** Record the site or release, WCAG version and level or other applicable standard, and the browsers and assistive technologies used for testing.\n2. **Sample representative content and complete tasks.** Include common templates, shared components, different states, and critical journeys such as checkout. If a sampled page is part of a process, include the steps needed to complete that process.\n3. **Combine automated and manual tests.** Use scans for issues they can identify. Test keyboard operation, focus order, zoom and reflow, labels, errors, and announcements by hand. Include people with disabilities in usability evaluation to understand how barriers affect real tasks.\n4. **Report and retest.** Record the affected page or state, environment, steps to reproduce, expected behavior, actual result, user impact, and applicable criterion. Retest the fix across other instances of a shared component.\n\n## Example: A keyboard trap during checkout\n\n| Evidence | Example finding |\n|---|---|\n| Location and test | Checkout, payment-help dialog. Open it by keyboard and try to close it with the available controls. |\n| Actual result and impact | Focus stays inside the dialog. The visible close icon only responds to pointer input, so a keyboard user cannot return to payment. |\n| Criterion and fix | WCAG 2.1.2 No Keyboard Trap (Level A). Make the close control keyboard-operable and verify that focus returns to the trigger when the dialog closes. |\n\nThe report should identify what the sample covers and any areas that remain untested. A short check of one page can uncover barriers. A conformance evaluation requires a broader review of the defined scope.\n\n## Related terms\n\n- [Accessibility and WCAG](/glossary/accessibility-wcag.html)\n- [Semantic HTML](/glossary/semantic-html.html)\n- [ARIA (Accessible Rich Internet Applications)](/glossary/aria-accessible-rich-internet-applications.html)\n- [EN 301 549](/glossary/en-301-549.html)\n- [ADA Web Accessibility](/glossary/ada-web-accessibility.html)\n\n## Sources\n\n- [Evaluating Web Accessibility, W3C WAI](https://www.w3.org/WAI/test-evaluate/)\n- [WCAG Evaluation Methodology (WCAG-EM), W3C WAI](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/)\n- [Involving Users in Evaluating Web Accessibility, W3C WAI](https://www.w3.org/WAI/test-evaluate/involving-users/)\n- [WCAG 2.2 Recommendation, W3C](https://www.w3.org/TR/WCAG22/)\n- [Understanding No Keyboard Trap, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/web-accessibility-audit.html#webpage",
        "url": "https://lexkonovalov.com/glossary/web-accessibility-audit.html",
        "name": "Web Accessibility Audit: How to Test and Report Findings",
        "description": "Learn how to scope a web accessibility audit, combine automated and manual tests, sample complete tasks, and write findings developers can reproduce.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/web-accessibility-audit.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/web-accessibility-audit.html#breadcrumbs"
        },
        "citation": [
          "https://www.w3.org/WAI/test-evaluate/",
          "https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/",
          "https://www.w3.org/WAI/test-evaluate/involving-users/",
          "https://www.w3.org/TR/WCAG22/",
          "https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/web-accessibility-audit.html#term",
        "name": "Web Accessibility Audit",
        "termCode": "web-accessibility-audit",
        "description": "A web accessibility audit is a documented evaluation of a website or web app against a defined accessibility standard and scope. It identifies barriers, records how they were found, and gives teams evidence they can use to prioritize fixes and verify changes.",
        "url": "https://lexkonovalov.com/glossary/web-accessibility-audit.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/web-accessibility-audit.html#webpage"
        },
        "alternateName": [
          "Website Accessibility Audit",
          "Accessibility Audit"
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
        "@id": "https://lexkonovalov.com/glossary/web-accessibility-audit.html#breadcrumbs",
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
            "name": "Web Accessibility Audit",
            "item": "https://lexkonovalov.com/glossary/web-accessibility-audit.html"
          }
        ]
      }
    ],
    "alternateName": [
      "Website Accessibility Audit",
      "Accessibility Audit"
    ]
  },
  {
    "id": "116",
    "name": "Accessible Forms",
    "slug": "accessible-forms",
    "category": "UX & Product Architecture",
    "secondaryCategory": "Product Strategy & Growth",
    "maturity": "Established",
    "definition": "An accessible form lets people identify fields, enter information, correct mistakes, and complete submission using their preferred input method or assistive technology. It uses clear labels, predictable controls, and feedback users can find and understand.",
    "purpose": "Prevents abandonment, user frustration, and input errors by ensuring forms are operable via keyboard, screen reader, and voice input.",
    "keyConcepts": [
      "Explicit label association",
      "fieldset and legend",
      "inline error description",
      "WCAG 3.3.7 redundant entry",
      "status messages (aria-live)"
    ],
    "howItWorks": "Pairs form inputs with programmatic labels via for/id attributes, describes constraints and errors using aria-describedby, and retains user input across validation failures.",
    "relatedTerms": [
      "Accessibility and WCAG",
      "Semantic HTML",
      "ARIA (Accessible Rich Internet Applications)",
      "Keyboard Accessibility & Focus Management",
      "Web Accessibility Audit",
      "Lead Capture Mechanics"
    ],
    "seoTitle": "Accessible Forms: Labels, Errors, and Validation",
    "seoDescription": "Learn how to design accessible forms with clear labels, usable validation, and feedback that works with a keyboard and screen reader.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/accessible-forms.html",
    "sources": [
      "Labeling Controls, W3C WAI (https://www.w3.org/WAI/tutorials/forms/labels/)",
      "Validating Input, W3C WAI (https://www.w3.org/WAI/tutorials/forms/validation/)",
      "User Notification, W3C WAI (https://www.w3.org/WAI/tutorials/forms/notifications/)",
      "Understanding Error Suggestion, W3C WAI (https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html)",
      "Understanding Status Messages, W3C WAI (https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)",
      "Understanding Redundant Entry, W3C WAI (https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html)"
    ],
    "contentMarkdown": "# Accessible Forms\n\nAn accessible form lets people identify fields, enter information, correct mistakes, and complete submission using their preferred input method or assistive technology. It uses clear labels, predictable controls, and feedback users can find and understand.\n\n## What makes a form accessible?\n\n- **Give every control a clear name.** Use a visible label and associate it with the field, for example with an HTML `label` whose `for` matches the input’s `id`. Use a `fieldset` and `legend` for related controls when the group needs a shared label.\n- **Give instructions before people need them.** Identify required fields in text and expose the required state programmatically. Put format guidance beside the field and associate it with that field. A placeholder can show an example. Keep the label visible when the user types.\n- **Make errors easy to find and fix.** Identify the field and describe the error in text. Give a useful correction when you know it. Associate inline errors with their fields, for example with `aria-describedby`. On a longer form, an error summary with links to invalid fields can help users recover.\n- **Make the result perceivable.** If a success message appears on the same page without moving focus, expose it as a status message so assistive technology can announce it. If submission opens a confirmation page, give that page a clear heading and title.\n\n## Example: An email error in a quote request\n\nA traveler enters `alex@` and submits the form. The form keeps the traveler’s other entries and identifies the problem beside the Email address field: “Enter an email address in the format name@example.com.” A keyboard user can reach the field, and a screen reader can access the associated error.\n\nIf a later step in the same process needs the email again, prefill it or let the traveler select the email they already provided. WCAG 2.2’s Redundant Entry criterion (3.3.7, Level A) covers information users previously entered or received in the same process. It includes exceptions for essential re-entry, security, and information that is no longer valid.\n\n## How do you test an accessible form?\n\nComplete a successful submission and an error-and-recovery scenario with a keyboard and a screen reader. Check that labels are announced, errors can be located, user input is available after validation, and the final outcome is clear. Use the whole flow, including any external payment or verification step that is in scope.\n\n## Related terms\n\n- [Accessibility and WCAG](/glossary/accessibility-wcag.html)\n- [Semantic HTML](/glossary/semantic-html.html)\n- [ARIA (Accessible Rich Internet Applications)](/glossary/aria-accessible-rich-internet-applications.html)\n- [Keyboard Accessibility & Focus Management](/glossary/keyboard-accessibility.html)\n- [Web Accessibility Audit](/glossary/web-accessibility-audit.html)\n- [Lead Capture Mechanics](/glossary/lead-capture-mechanics.html)\n\n## Sources\n\n- [Labeling Controls, W3C WAI](https://www.w3.org/WAI/tutorials/forms/labels/)\n- [Validating Input, W3C WAI](https://www.w3.org/WAI/tutorials/forms/validation/)\n- [User Notification, W3C WAI](https://www.w3.org/WAI/tutorials/forms/notifications/)\n- [Understanding Error Suggestion, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html)\n- [Understanding Status Messages, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)\n- [Understanding Redundant Entry, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html)",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/accessible-forms.html#webpage",
        "url": "https://lexkonovalov.com/glossary/accessible-forms.html",
        "name": "Accessible Forms: Labels, Errors, and Validation",
        "description": "Learn how to design accessible forms with clear labels, usable validation, and feedback that works with a keyboard and screen reader.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/accessible-forms.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/accessible-forms.html#breadcrumbs"
        },
        "citation": [
          "https://www.w3.org/WAI/tutorials/forms/labels/",
          "https://www.w3.org/WAI/tutorials/forms/validation/",
          "https://www.w3.org/WAI/tutorials/forms/notifications/",
          "https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html",
          "https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html",
          "https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/accessible-forms.html#term",
        "name": "Accessible Forms",
        "termCode": "accessible-forms",
        "description": "An accessible form lets people identify fields, enter information, correct mistakes, and complete submission using their preferred input method or assistive technology. It uses clear labels, predictable controls, and feedback users can find and understand.",
        "url": "https://lexkonovalov.com/glossary/accessible-forms.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/accessible-forms.html#webpage"
        },
        "alternateName": [
          "Accessible Web Forms"
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
        "@id": "https://lexkonovalov.com/glossary/accessible-forms.html#breadcrumbs",
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
            "name": "Accessible Forms",
            "item": "https://lexkonovalov.com/glossary/accessible-forms.html"
          }
        ]
      }
    ],
    "alternateName": [
      "Accessible Web Forms"
    ]
  },
  {
    "id": "117",
    "name": "Keyboard Accessibility & Focus Management",
    "slug": "keyboard-accessibility",
    "category": "Design Systems & Engineering",
    "secondaryCategory": "UX & Product Architecture",
    "maturity": "Established",
    "definition": "Keyboard accessibility lets people navigate and operate an interface through a keyboard interface. Focus management determines which element receives keyboard input as people move through the page, open a dialog, or return to their task.",
    "purpose": "Ensures complete digital operability without a pointing device, enabling users with motor, cognitive, and visual disabilities to interact predictably.",
    "keyConcepts": [
      "WCAG 2.1.1 Keyboard",
      "2.1.2 No Keyboard Trap",
      "2.4.3 Focus Order",
      "2.4.7 Focus Visible",
      "2.4.11 Focus Not Obscured",
      "focus trapping and restoration"
    ],
    "howItWorks": "Maintains a logical DOM order, captures focus within active modal dialogs, restores focus to triggering elements upon dismissal, and guarantees non-obscured visible focus indicators.",
    "relatedTerms": [
      "Accessibility and WCAG",
      "Accessible Forms",
      "WCAG Color Contrast",
      "ARIA (Accessible Rich Internet Applications)",
      "Headless UI Architecture",
      "Web Accessibility Audit"
    ],
    "seoTitle": "Keyboard Accessibility & Focus Management | WCAG",
    "seoDescription": "Learn how to test keyboard access, focus order, visible focus, and focus return with a practical modal dialog example.",
    "canonicalUrl": "https://lexkonovalov.com/glossary/keyboard-accessibility.html",
    "sources": [
      "Understanding Keyboard, W3C WAI (https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)",
      "Understanding No Keyboard Trap, W3C WAI (https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)",
      "Understanding Focus Order, W3C WAI (https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)",
      "Understanding Focus Visible, W3C WAI (https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)",
      "Understanding Focus Not Obscured (Minimum), W3C WAI (https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)",
      "Modal Dialog Pattern, W3C ARIA Authoring Practices Guide (https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)"
    ],
    "contentMarkdown": "# Keyboard Accessibility & Focus Management\n\nKeyboard accessibility lets people navigate and operate an interface through a keyboard interface. Focus management determines which element receives keyboard input as people move through the page, open a dialog, or return to their task.\n\n## What should you test?\n\n| Check | What to look for |\n|---|---|\n| **Keyboard operation and exit (2.1.1 and 2.1.2, A)** | Reach and use controls without a mouse. Follow the expected keys for each widget. Make sure users can leave any component they enter. |\n| **Focus order (2.4.3, A)** | When navigating sequentially, focus follows an order that preserves meaning and operation. Start from a logical document order. |\n| **Visible focus (2.4.7, AA)** | The user can see which control currently has keyboard focus. Check default and custom focus styles. |\n| **Focus not obscured** | Under WCAG 2.2 criterion 2.4.11 (AA), content created by the site must leave at least part of the focused component visible. Test sticky headers, bottom bars, and overlays while tabbing. |\n\n## Example: A booking-change dialog\n\n1. Tab to the **Change booking** button and activate it. Focus moves inside the modal to a sensible starting point, such as the heading for a long dialog or the safer action for a hard-to-reverse change.\n2. Use **Tab** and **Shift+Tab** to move between controls. Sequential focus stays inside the open modal. Check that the dialog’s sticky footer does not cover focused controls in the scrolling content.\n3. Press **Escape** or use the visible close control. Focus normally returns to **Change booking**. If the trigger no longer exists or the user’s action leads to a different logical location, move focus to an appropriate element in that flow.\n\nA modal can keep focus inside while it is open and still provide a keyboard way out. The modal pattern depends on a working exit and sensible focus placement after closing.\n\n## Where should teams start?\n\nUse native buttons and links for common actions and navigation. For a custom widget, confirm its expected keyboard interaction and test it in context. Check focus return in the product as well as the component preview. In the product, the trigger might disappear when the booking changes.\n\n## Related terms\n\n- [Accessibility and WCAG](/glossary/accessibility-wcag.html)\n- [Accessible Forms](/glossary/accessible-forms.html)\n- [WCAG Color Contrast](/glossary/wcag-color-contrast.html)\n- [ARIA (Accessible Rich Internet Applications)](/glossary/aria-accessible-rich-internet-applications.html)\n- [Headless UI Architecture](/glossary/headless-ui-architecture.html)\n- [Web Accessibility Audit](/glossary/web-accessibility-audit.html)\n\n## Sources\n\n- [Understanding Keyboard, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)\n- [Understanding No Keyboard Trap, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)\n- [Understanding Focus Order, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)\n- [Understanding Focus Visible, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)\n- [Understanding Focus Not Obscured (Minimum), W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)\n- [Modal Dialog Pattern, W3C ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)",
    "structuredDataGraph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/keyboard-accessibility.html#webpage",
        "url": "https://lexkonovalov.com/glossary/keyboard-accessibility.html",
        "name": "Keyboard Accessibility & Focus Management | WCAG",
        "description": "Learn how to test keyboard access, focus order, visible focus, and focus return with a practical modal dialog example.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/keyboard-accessibility.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/keyboard-accessibility.html#breadcrumbs"
        },
        "citation": [
          "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html",
          "https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html",
          "https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html",
          "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
          "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html",
          "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/keyboard-accessibility.html#term",
        "name": "Keyboard Accessibility & Focus Management",
        "termCode": "keyboard-accessibility",
        "description": "Keyboard accessibility lets people navigate and operate an interface through a keyboard interface. Focus management determines which element receives keyboard input as people move through the page, open a dialog, or return to their task.",
        "url": "https://lexkonovalov.com/glossary/keyboard-accessibility.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/keyboard-accessibility.html#webpage"
        },
        "alternateName": [
          "Keyboard Accessibility",
          "Focus Management"
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
        "@id": "https://lexkonovalov.com/glossary/keyboard-accessibility.html#breadcrumbs",
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
            "name": "Keyboard Accessibility & Focus Management",
            "item": "https://lexkonovalov.com/glossary/keyboard-accessibility.html"
          }
        ]
      }
    ],
    "alternateName": [
      "Keyboard Accessibility",
      "Focus Management"
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
