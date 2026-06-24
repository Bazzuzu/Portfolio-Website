import luxuryTravel1 from "../assets/images/luxury-travel-1.jpg";
import luxuryTravel2 from "../assets/images/luxury-travel-2.jpg";
import luxuryTravel3 from "../assets/images/luxury-travel-3.jpg";
import checkout1 from "../assets/images/checkout-1.jpg";
import checkout2 from "../assets/images/checkout-2.jpg";
import checkout3 from "../assets/images/checkout-3.jpg";
import fintech1 from "../assets/images/fintech-1.jpg";
import fintech2 from "../assets/images/fintech-2.jpg";
import fintech3 from "../assets/images/fintech-3.jpg";
import otherLlm from "../assets/images/other-llm.jpg";
import otherDs from "../assets/images/other-ds.jpg";
import otherAsync from "../assets/images/other-async.jpg";
import otherToken from "../assets/images/other-token.jpg";

export interface DiscoverySection {
  discoveryTitle?: string;
  discoverySubtitle?: string;
  discoveryLeftTitle?: string;
  discoveryRightTitle?: string;
  discoveryLeft?: string;
  discoveryRight?: string;
  discoveryImages?: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  tag: string;
  tags?: string[];
  headline: string;
  description: string;
  role: string;
  scope: string;
  status: string;
  users: string;
  images: string[];
  imageCaptions?: string[];
  challenge: string;
  solution: string;
  impact: string;
  discoverySubtitle?: string;
  discoveryTitle?: string;
  discoveryLeftTitle?: string;
  discoveryRightTitle?: string;
  discoveryLeft?: string;
  discoveryRight?: string;
  discoveryImages?: string[];
  discoverySections?: DiscoverySection[];
}

export interface OtherProject {
  id: string;
  title: string;
  image: string;
}

export interface MediumArticle {
  id: string;
  published: string;
  category: string;
  title: string;
  url: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  designerName: string;
  designerTitle: string;
  heroHeadline: string;
  heroSubheadline: string;
  email: string;
  aboutBadge: string;
  aboutTitle: string;
  aboutBio: string;
  cvUrl: string;
  companies: string[];
  experienceList: Experience[];
  socialLinks: { name: string; url: string }[];
  phone: string;
  location: string;
  caseStudies: CaseStudy[];
  otherProjects: OtherProject[];
  mediumArticles: MediumArticle[];
}

export const portfolioData: PortfolioData = {
  designerName: "Oleksandr Konovalov",
  designerTitle: "Lead Product Designer",
  heroHeadline: "Mapping complex logic. Optimizing conversion.",
  heroSubheadline: "I use Object-Oriented UX to map dense B2B platforms and data to optimize B2C checkouts. 5+ years as a Core Product Designer in TravelTech. Currently scaling architectures with AI-integrated design systems and semantic tokens.",
  email: "oleksandr.konovalov@gmail.com",
  phone: "+34 624 532 991",
  location: "Alicante, Spain",
  aboutBadge: "ABOUT ME",
  aboutTitle: "Design as a driver of core business performance.",
  aboutBio: "I design complex systems, digital platforms, and B2B workflows that turn operational constraints into measurable product value. Rather than applying surface-level aesthetics (pixel play), I dive into data structures, marketing psychology, and operational constraints to solve real friction points for agents, businesses, and consumers.\n\nWith over 8 years in the field, I bring a unique hybrid viewpoint of conversion marketing, system design engineering, and agile project delivery.",
  cvUrl: "#",
  companies: ["Mews Systems", "Booking.com", "Adyen", "Stripe SaaS"],
  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Read.cv", url: "https://read.cv" },
    { name: "Dribbble", url: "https://dribbble.com" }
  ],
  experienceList: [
    {
      role: "Lead Staff Product Designer",
      company: "Mews Systems",
      period: "2023 - Present",
      description: "Driving the redesign of host-guest interface workflows, optimizing operational dashboards for boutique hotels. Reduced employee onboarding cycles by 35% through design token consistency and micro-workflow automation."
    },
    {
      role: "Senior UX Architect",
      company: "Booking.com",
      period: "2020 - 2023",
      description: "Spearheaded checkout-flow experimentation funnels, running multi-variant A/B tests. Contributed directly to an incremental 1.8% lift in payment step conversion rate globally."
    },
    {
      role: "Product Designer - Core Infrastructure",
      company: "Adyen Payments",
      period: "2018 - 2020",
      description: "Designed multi-currency payment checkout widgets used by millions of merchants worldwide. Engineered and aligned the Figma-to-Code design token handshake system."
    }
  ],
  caseStudies: [
    {
      id: "luxury-travel-os",
      title: "Building the OS for Luxury Travel",
      tag: "B2B/Enterprise ERP",
      tags: ["B2B/Enterprise", "Information Architecture", "OOUX", "Design Systems", "Stakeholder Management"],
      headline: "From «Excel Hell» and Legacy GDS Terminals to a Unified Luxury Operating Engine.",
      description: "Replaced highly fragmented command-line blue screens, multi-tab Excel sheets, and chaotic email threads with a custom-engineered enterprise application, empowering agents to process $30,000 bookings with zero pricing errors.",
      role: "Lead Product Designer (Architecture, UX/UI, Design Ops)",
      scope: "End-to-End Design (from Data Modeling to UI Kit)",
      status: "Shipped & Scaled (Self-sustaining system)",
      users: "Internal Agents, Managers, Accountants (5 Depts)",
      images: [luxuryTravel1, luxuryTravel2, luxuryTravel3],
      imageCaptions: [
        "Workspace displaying multi-segment itineraries, parsed GDS flight records, and pricing diagnostics.",
        "Unified agent booking command center enabling keyboard-centric, terminal-fast data entries.",
        "Structured cross-department invoicing console synchronized with client financial databases."
      ],
      challenge: "Agents process premium and corporate travel bookings valued between $3,000 and $30,000. Operating across three legacy GDS terminals (such as Amadeus command lines), 15+ open Excel spreadsheets, and dozens of emails, they suffered from extreme cognitive overload. High-value, multi-segment complex bookings were avoided. Manual pricing calculations caused costly errors, and a strict 15-minute SLA on corporate leads pressured the team to the absolute brink.",
      solution: "I architected and designed a unified luxury flight booking workspace from scratch. Key features included an intelligent GDS PNR Parser that instantly renders cryptic CLI texts into clean, visual segment interactive graphs, a visual route builder with live pricing indicators, and automated invoicing integration. This bridged the sales, operations, ticketing, and accounting workflows into a seamless, keyboard-driven UI.",
      impact: "Pricing errors tied to manual data transfers completely dropped to zero. Agents stopped avoiding complex multi-stop booking leads, increasing corporate close rates by 22%. Global processing time was cut by over 80% — typical complex customized flight bookings that once took 45 minutes of manual cross-referencing now settle in less than 6 minutes. Moreover, design modularity allowed engineering to build 10+ custom internal sub-modules autonomously.",
      discoveryTitle: "The Discovery: Uncovering the \"Black Box\" of Operational Chaos",
      discoveryLeftTitle: "The Business Reality:",
      discoveryLeft: "Building an ERP requires understanding the business better than the users themselves. I couldn't just \"digitize\" the old process; I had to fix it.",
      discoveryRightTitle: "The Investigation:",
      discoveryRight: "Asynchronous Video Analysis: I analyzed 30+ recorded sessions across the skill spectrum (from novices to power users). This helped distinguish essential \"muscle memory\" shortcuts that experts rely on from the usability blockers confusing new hires.\n\nEdge-Case Mapping: I facilitated workshops to stress-test the system against complex scenarios (e.g., partial refunds, ancillary re-configuration). We mapped the cross-functional handoffs to ensure the architecture wouldn't break under real-world pressure.",
      discoveryImages: [luxuryTravel1, luxuryTravel2]
    },
    {
      id: "checkout-rate-optimization",
      title: "Optimizing Mobile Lead Gen",
      tag: "Conversion UX",
      tags: ["Conversion UX", "A/B Testing", "Form Optimization", "Quantitative Research", "Friction Reduction"],
      headline: "Optimizing the payment gateway for frictionless e-commerce.",
      description: "A series of UX interventions and structured checkout experiments that elevated global conversion rates by 14.2% while establishing strict data privacy compliances.",
      role: "Conversion Specialist & Lead UX Researcher",
      scope: "Checkout Redesign & Multi-variant A/B Funnels",
      status: "Completed, fully integrated into production",
      users: "B2C Shoppers across 4 continents",
      images: [checkout1, checkout2, checkout3],
      imageCaptions: [
        "High-performance mobile checkout layout with instant, friendly alphanumeric validation.",
        "Optimized progressive form structure designed to lower payment-stage drop-off rates.",
        "Detailed session-map and eye-tracking findings used to refine secondary interactive micro-layouts."
      ],
      challenge: "Despite robust marketing acquisition, checkout drop-off rates remained stubborn at 68%. Rigid input forms, unclear card diagnostics, and lack of contextual regional payment options frustrated users mid-transaction.",
      solution: "Engineered an intelligent, auto-detecting form system, streamlined multi-stage checkout into a single-container progressive disclosure UI. Optimized feedback cycles on declined cards, providing descriptive suggestions rather than dry error states.",
      impact: "We registered a permanent +14.2% lift in finalized checkouts on web-channels and a 22.4% reduction in support tickets inquiring about transaction errors. Average checkout speed reduced from 2.4 minutes to a crisp 48 seconds.",
      discoveryTitle: "The Discovery: Micro-Anxieties in Financial Transactions",
      discoveryLeftTitle: "The Business Reality:",
      discoveryLeft: "Even slight layout shifts or abstract loading icons trigger buyer hesitations. We needed to reassure trust and utility at each key action step.",
      discoveryRightTitle: "The Investigation:",
      discoveryRight: "Biometric and Eye-Tracking Diagnostics: Validated that form labels outside input boundaries provide significantly less cognitive friction than internal placeholders which disappear during typing.\n\nLocalized Fallbacks: Designed smart routing so if a secondary gateway failed, the transaction migrated in the background without exposing technical errors to the cart owner.",
      discoveryImages: [checkout1, checkout2]
    },
    {
      id: "fintech-investment-workspace",
      title: "Homepage & Funnel Structure",
      tag: "SaaS / fintech",
      tags: ["SaaS / Fintech", "Dashboard Design", "User Onboarding", "KYC/AML Compliance", "Design Infrastructure"],
      headline: "Simplifying wealth-management dashboards for retail investors.",
      description: "Redesigning a high-friction retail investment dashboard to promote long-term portfolio strategies, resulting in a 30% reduction in churn during the onboarding KYC verification stage.",
      role: "Principal Product Designer & System Architect",
      scope: "SaaS Workspace Architecture & Design Token Restructure",
      status: "Released across iOS, Android, and Web platforms",
      users: "SaaS retail investors & account managers",
      images: [fintech1, fintech2, fintech3],
      imageCaptions: [
        "Simplified step-by-step onboarding wizard breaking down tax declarations into digestible cards.",
        "Interactive bento-grid modular workspace illustrating asset growth profiles and history indicators.",
        "Design infrastructure token schema aligning Figma layout styles with physical frontend code variables."
      ],
      challenge: "Onboarding drop-offs peaked on the identity verification (KYC/AML) screen due to complex tax declarations, unclear legal definitions, and massive text blocks that felt overwhelming.",
      solution: "Broke down complex queries into a structured conversational wizard, backed by visual dynamic progression bars. Built micro-learn panels with plain-English definitions of crucial financial terms.",
      impact: "Onboarding success skyrocketed by 30%. User satisfaction indices rose from 3.2 to 4.7 out of 5, while the design library reduced frontend component bloat by over 50%.",
      discoverySections: [
        {
          discoveryTitle: "Configuration 1: Two Columns of Text + 1 Full-Width Focal Image",
          discoverySubtitle: "An layout option prioritizing single high-fidelity captures of target interface states",
          discoveryLeftTitle: "The Mobile Conversion Funnel:",
          discoveryLeft: "With over 60% of our active traffic coming via portable viewports, ensuring that form structures maintain strict sizing constraints was our critical priority. A single wide image allows the reader to follow a sequential cognitive flow without visual distraction.",
          discoveryRightTitle: "A/B Layout Insights:",
          discoveryRight: "Our quantitative tests proved that user attention maps are far more linear on portable viewports. Single-column, full-width layouts resulted in a 14% higher reading retention score compared to multi-column inline galleries.",
          discoveryImages: [checkout1]
        },
        {
          discoveryTitle: "Configuration 2: Two Columns of Text + 2 Symmetrical Images",
          discoverySubtitle: "An ideal viewport arrangement for dual comparisons and adaptive breakpoint previews",
          discoveryLeftTitle: "The Desktop Dashboard Workspace:",
          discoveryLeft: "While mobile optimization addresses swift interactions, desktop viewports require highly integrated bento panels and consistent structural alignment. We placed mobile next to desktop to preview synchronization instantly.",
          discoveryRightTitle: "Responsive Interface Audits:",
          discoveryRight: "We mapped out cross-device synchronization flows to guarantee that actions initiated on-the-go seamlessly propagated to accounting terminals in less than 300ms, minimizing discrepancies.",
          discoveryImages: [checkout2, luxuryTravel2]
        },
        {
          discoveryTitle: "Configuration 3: Two Columns of Text + 1 Full-Width + 2 Inline Images",
          discoverySubtitle: "A hierarchical arrangement presenting a master system view followed by micro-interaction details",
          discoveryLeftTitle: "Advanced Data Parsing Engine:",
          discoveryLeft: "Our system takes complex, unstructured entries and breaks them down using smart, localized algorithms. This asymmetric three-image setup offers a macro view of the environment, plus close-ups of specific UX modules.",
          discoveryRightTitle: "User Testing Discoveries:",
          discoveryRight: "During research labs, users responded enthusiastically to interactive charts that dynamically updated as inputs changed. The symmetrical supporting grid helps isolate each key parameter.",
          discoveryImages: [luxuryTravel1, checkout3, fintech1]
        },
        {
          discoveryTitle: "Configuration 4: Two Columns of Text + 4 Symmetrical Images",
          discoverySubtitle: "A symmetrical grid of four high-fidelity screens representing different phases of the design sprint",
          discoveryLeftTitle: "Cognitive Processing & Focus:",
          discoveryLeft: "Too much visual data can lead to user fatigue. We addressed this by chunking information into localized widgets with consistent spacing and clear labels.",
          discoveryRightTitle: "System Interface Convergence:",
          discoveryRight: "To keep our application consistent, we created a single design token system in token files. Moving variables directly to CSS let us update colors instantly.",
          discoveryImages: [fintech3, fintech2, checkout2, checkout1]
        },
        {
          discoveryTitle: "Configuration 5: Symmetrical Image Board with 8 Photos (No Text Columns)",
          discoverySubtitle: "When text-blocks are absent, the component transforms into an absolute visual catalog of UX deliverables, scaling dynamically up to eight records",
          discoveryImages: [
            luxuryTravel1,
            luxuryTravel2,
            checkout3,
            checkout2,
            checkout1,
            fintech1,
            fintech2,
            fintech3
          ]
        }
      ]
    }
  ],
  otherProjects: [
    {
      id: "other-llm-prototyping",
      title: "ERP Module LLM Prototyping Experience",
      image: otherLlm
    },
    {
      id: "other-design-system",
      title: "Enterprise Design System Sync",
      image: otherDs
    },
    {
      id: "other-async-ops",
      title: "Asynchronous Operations Dashboard",
      image: otherAsync
    },
    {
      id: "other-token-handshake",
      title: "Global Checkout Tokenizer Engine",
      image: otherToken
    }
  ],
  mediumArticles: [
    {
      id: "art-1",
      published: "Apr 17",
      category: "AI, GEO",
      title: "Your Product Page Was Built for Humans. The Next Buyer Is an Algorithm.",
      url: "https://medium.com/@lex.konovalov/your-product-page-was-built-for-humans-the-next-buyer-is-an-algorithm-da612d4aeeab"
    },
    {
      id: "art-2",
      published: "Apr 13",
      category: "Weekly digest",
      title: "Your Accessibility Tree Is Now Your SEO",
      url: "https://medium.com/@lex.konovalov/your-accessibility-tree-is-now-your-seo-322ff33ae81b"
    },
    {
      id: "art-3",
      published: "Apr 9",
      category: "Design Systems",
      title: "Design Systems in April 2026: The Infrastructure Is Here. Most Teams Still Aren’t.",
      url: "https://medium.com/@lex.konovalov/design-systems-in-april-2026-the-infrastructure-is-here-most-teams-still-arent-7b2649aee0f1"
    },
    {
      id: "art-4",
      published: "Apr 9",
      category: "Weekly digest",
      title: "The Subscription Model Just Broke",
      url: "https://medium.com/@lex.konovalov/the-subscription-model-just-broke-eb7c8651a2d4"
    },
    {
      id: "art-5",
      published: "Mar 31",
      category: "Weekly digest",
      title: "Your Next User Might Be an Agent",
      url: "https://medium.com/@lex.konovalov/your-next-user-might-be-an-agent-7607730e2f5b"
    },
    {
      id: "art-6",
      published: "Mar 31",
      category: "Weekly digest",
      title: "UI Is Cheap Now. What’s Expensive?",
      url: "https://medium.com/@lex.konovalov/ui-is-cheap-now-whats-expensive-157dc2095f6e"
    },
    {
      id: "art-7",
      published: "Mar 31",
      category: "Weekly digest",
      title: "The Design Handoff Is Dead. Now What?",
      url: "https://medium.com/@lex.konovalov/the-design-handoff-is-dead-now-what-cbf7eaee179f"
    }
  ]
};
