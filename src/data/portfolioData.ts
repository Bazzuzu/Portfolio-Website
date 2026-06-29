import traveltechHero from "../assets/images/case-studies/luxury-travel-os/01-traveltech-erp-user-journey-before-after.webp";
import traveltechVideoAnalysis from "../assets/images/case-studies/luxury-travel-os/02-asynchronous-video-analysis-ux-audit.webp";
import traveltechEdgeCaseMapping from "../assets/images/case-studies/luxury-travel-os/03-edge-case-mapping-cross-functional-handoffs.webp";
import traveltechOouxMap from "../assets/images/case-studies/luxury-travel-os/04-ooux-object-relationship-map-leads-offers-deals.webp";
import traveltechRbacMatrix from "../assets/images/case-studies/luxury-travel-os/05-rbac-matrix-role-based-access-control-ui.webp";
import traveltechUnifiedTimeline from "../assets/images/case-studies/luxury-travel-os/06-unified-timeline-automated-routing-ui.webp";
import traveltechStatusBar from "../assets/images/case-studies/luxury-travel-os/07-erp-status-transparency-bar.webp";
import traveltechHighDensityUi from "../assets/images/case-studies/luxury-travel-os/08-high-density-ui-travel-agent-dashboard.webp";
import traveltechTabularData from "../assets/images/case-studies/luxury-travel-os/09-compact-rows-monospaced-fonts-tabular-data.webp";
import traveltechKeyboardNav from "../assets/images/case-studies/luxury-travel-os/10-keyboard-first-navigation-hotkeys-ui.webp";
import traveltechErrorPrevention from "../assets/images/case-studies/luxury-travel-os/11-high-density-erp-error-prevention.webp";
import traveltechTokenizedUi from "../assets/images/case-studies/luxury-travel-os/12-tokenized-ui-kit-atomic-foundation.webp";
import traveltechDevReadyComponents from "../assets/images/case-studies/luxury-travel-os/13-dev-ready-smart-components-lego-system.webp";
import checkout1 from "../assets/images/case-studies/checkout-rate-optimization/b2c-checkout-conversion-flow.webp";
import checkout2 from "../assets/images/case-studies/checkout-rate-optimization/b2c-checkout-mobile-funnel.webp";
import checkout3 from "../assets/images/case-studies/checkout-rate-optimization/b2c-checkout-metrics-dashboard.webp";
import mobileLeadBeforeAfter from "../assets/images/case-studies/checkout-rate-optimization/mobile-lead-generation-funnel-before-after.webp";
import mobileLeadStickyCta from "../assets/images/case-studies/checkout-rate-optimization/sticky-cta-trust-injection-mobile-ui.webp";
import fintech1 from "../assets/images/case-studies/ai-modular-system/fintech-saas-investment-workspace-hero.webp";
import fintech2 from "../assets/images/case-studies/ai-modular-system/fintech-saas-dashboard-analytics.webp";
import fintech3 from "../assets/images/case-studies/ai-modular-system/fintech-saas-portfolio-tracker.webp";
import luxuryTravelDesktopRedesign from "../assets/images/case-studies/ai-modular-system/luxury-travel-desktop-redesign-before-after.webp";
import smartTriggerChat from "../assets/images/case-studies/ai-modular-system/smart-trigger-chat-choreography-ui.webp";
import aiReadyModularCms from "../assets/images/case-studies/ai-modular-system/ai-ready-modular-cms-design-system.webp";
import otherLlm from "../assets/images/other-projects/other-projects-llm-landing-page-generator.webp";
import otherDs from "../assets/images/other-projects/other-projects-design-system-tokens.webp";
import otherAsync from "../assets/images/other-projects/other-projects-async-collaboration.webp";
import otherToken from "../assets/images/other-projects/other-projects-token-structure.webp";

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
  pageTitle?: string;
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
  href: string;
  ariaLabel: string;
  imgAlt: string;
}

export interface OtherProject {
  id: string;
  title: string;
  image: string;
  alt: string;
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
  email: "lex.konovalov@gmail.com",
  phone: "+34 624 532 991",
  location: "Alicante, Spain",
  aboutBadge: "ABOUT ME",
  aboutTitle: "Design as a driver of core business performance.",
  aboutBio: "I design complex systems, digital platforms, and B2B workflows that turn operational constraints into measurable product value. Rather than applying surface-level aesthetics (pixel play), I dive into data structures, marketing psychology, and operational constraints to solve real friction points for agents, businesses, and consumers.\n\nWith over 8 years in the field, I bring a unique hybrid viewpoint of conversion marketing, system design engineering, and agile project delivery.",
  cvUrl: "#",
  companies: ["Mews Systems", "Booking.com", "Adyen", "Stripe SaaS"],
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/lex-konovalov/" },
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
      id: "how-ooux-reduced-error-rates-in-traveltech",
      title: "Building the OS for Travel",
      pageTitle: "How Did OOUX Reduce Error Rates for 400+ Agents in TravelTech?",
      tag: "ERP / B2B",
      tags: ["B2B Enterprise", "Information Architecture", "OOUX", "Design Systems", "High-Density UI"],
      headline: "From «Excel Hell» to a Unified Enterprise Ecosystem",
      description: "Designed a scalable ERP unifying 5 departments. The tokenized OOUX architecture enabled 100% engineering autonomy post-launch.",
      href: "/cases/how-ooux-reduced-error-rates-in-traveltech",
      ariaLabel: "Read how OOUX mapping reduced agent error rates for 400+ agents in TravelTech",
      imgAlt: "TravelTech ERP dashboard interface designed to reduce cognitive load for 400+ agents",
      role: "Lead Product Designer (End-to-End: Architecture, UX/UI, Design Ops)",
      scope: "B2B TravelTech, Enterprise ERP",
      status: "Shipped & Scaled (Self-sustaining system)",
      users: "400+ Agents, Managers, and Accountants (5 Departments)",
      images: [traveltechHero],
      imageCaptions: ["Comparison of legacy fragmented travel agent workflow vs unified ERP cockpit"],
      challenge: "Business Class processes luxury travel bookings at $3,000–$30,000 per transaction. With 250 agents working across Excel, legacy GDS terminals, and fragmented email threads, the operational ceiling was real: complex bookings got avoided, pricing errors happened regularly, and a 15-minute delay meant losing a client permanently.",
      solution: "Replace this fragmented ecosystem with a unified system, designed from scratch. No existing product to iterate on. No instrumentation on the old process — we had behavioral signals and stakeholder testimony, not dashboards.",
      impact: "Agents gradually stopped avoiding complex bookings — the cognitive cost dropped enough to make them worthwhile. Pricing errors tied to manual data-bridging effectively disappeared.\n\nFor 2+ years post-launch, engineering shipped new modules independently with design involvement only twice. Processing time down ~40% by manager estimate — no baseline instrumentation existed, so behavioral signals are the honest metric here.",
      discoverySections: [
        {
          discoveryTitle: "The Discovery: Uncovering the \"Black Box\" of Operational Chaos",
          discoveryLeftTitle: "The Business Reality:",
          discoveryLeft: "Building an ERP requires understanding the business better than the users themselves. I couldn't just \"digitize\" the old process; I had to fix it.",
          discoveryRightTitle: "The Investigation:",
          discoveryRight: "• Asynchronous Video Analysis: I analyzed 30+ recorded sessions across the skill spectrum (from novices to power users). This helped distinguish essential \"muscle memory\" shortcuts that experts rely on from the usability blockers confusing new hires.\n\n• Edge-Case Mapping: I facilitated workshops to stress-test the system against complex scenarios (e.g., partial refunds, ancillary re-configuration). We mapped the cross-functional handoffs to ensure the architecture wouldn't break under real-world pressure.",
          discoveryImages: [traveltechVideoAnalysis, traveltechEdgeCaseMapping]
        },
        {
          discoveryTitle: "The Architecture: Structuring the Chaos via OOUX",
          discoveryLeftTitle: "The Structural Pivot:",
          discoveryLeft: "Instead of designing pages, I designed objects. I mapped the relationships between Leads, Offers, and Deals to create a scalable Information Architecture (IA). More details on my Medium article.",
          discoveryRightTitle: "Security by Design:",
          discoveryRight: "I defined a granular RBAC (Role-Based Access Control) matrix (Superuser vs. Agent). This ensured data security and interface simplicity—users only see the tools relevant to their specific role, reducing cognitive noise.",
          discoveryImages: [traveltechOouxMap, traveltechRbacMatrix]
        },
        {
          discoveryTitle: "The Workflow: Creating a \"Single Source of Truth\"",
          discoveryLeftTitle: "The \"Assembly Line\" Logic:",
          discoveryLeft: "I replaced fragmented email threads with a Unified Timeline. As a deal moves through the pipeline, it is automatically assigned to the relevant department (e.g., Verify ➔ Ticketing).",
          discoveryRightTitle: "Automated Routing & Status:",
          discoveryRight: "Automated Routing: Tasks are pushed to agents based on load and expertise, removing the \"manager bottleneck.\"\n\nStatus Transparency: A unified status bar allows any stakeholder to see exactly where a deal is stuck (e.g., \"Pending Payment\" in Bookkeeping), eliminating status-check meetings.",
          discoveryImages: [traveltechUnifiedTimeline, traveltechStatusBar]
        },
        {
          discoveryTitle: "The Interface: Designing for Power Users & Muscle Memory",
          discoveryLeftTitle: "The Constraint:",
          discoveryLeft: "Travel agents are \"Power Users\" operating under high pressure. They don't need \"white space\"; they need information density and speed.",
          discoveryRightTitle: "The Solution (High-Density UI):",
          discoveryRight: "• Data Visibility: Utilized compact rows and monospaced fonts for tabular data to maximize information above the fold.\n\n• Keyboard-First Navigation: To ease the transition from legacy GDS terminals, I implemented Keyboard-First Navigation. This allowed veteran agents to leverage their existing muscle memory (hotkeys) while benefiting from modern error prevention.",
          discoveryImages: [traveltechHighDensityUi, traveltechTabularData, traveltechKeyboardNav, traveltechErrorPrevention]
        },
        {
          discoveryTitle: "The Scale: Empowering Engineering with a \"Lego\" System",
          discoveryLeftTitle: "The Challenge:",
          discoveryLeft: "As the sole designer on a massive product, I needed to prevent myself from becoming a bottleneck.",
          discoveryRightTitle: "The System & Legacy:",
          discoveryRight: "The System: I built a Tokenized UI Kit focused on logic, not just visuals. Defined strict tokens for Typography, Spacing, and Colors, and created \"smart\" components (Tables, Inputs, Modals) that developers could assemble like Lego blocks.\n\nThe Legacy: This system allowed the engineering team to launch new features and modules independently for 2 years with zero design intervention.",
          discoveryImages: [traveltechTokenizedUi, traveltechDevReadyComponents]
        },
        {
          discoveryTitle: "The Verdict & Legacy",
          discoveryLeftTitle: "Outcomes:",
          discoveryLeft: "• Engineering Autonomy: The tokenized UI Kit empowered the development team to scale the product without design support.\n\n• Architectural Robustness: The core OOUX model proved so stable that no major refactors were needed post-launch.\n\n• Unified Ecosystem: Successfully merged 5 fragmented departments into a single workflow, eliminating data silos.",
          discoveryRightTitle: "Reflection: The \"Invisible\" Designer",
          discoveryRight: "My ultimate goal was to make myself obsolete. By investing heavily in the Discovery Phase and building a rigid Design System, I ensured the product could thrive without my daily oversight. This project taught me that the best B2B design is an infrastructure that empowers others to build.",
          discoveryImages: []
        }
      ]
    },
    {
      id: "how-to-achieve-30-percent-conversion-lift-in-b2c",
      title: "Optimizing Mobile Lead Gen",
      tag: "Conversion / UX",
      tags: ["B2C Checkout", "Conversion Rate Optimization (CRO)", "A/B Testing", "Mobile-First", "Lead Generation"],
      headline: "How Did a Psychology-Driven Redesign Drive a +29% Mobile Lead Lift?",
      description: "Redesigned a critical entry point to capture impulsive mobile traffic. Lowering cognitive load resulted in a 30% increase in request submissions.",
      href: "/cases/how-to-achieve-30-percent-conversion-lift-in-b2c",
      ariaLabel: "Read how a psychology-driven redesign achieved a 30% mobile conversion lift in B2C lead generation",
      imgAlt: "Mobile UI demonstrating sticky footer CTA and strategic trust pilot integration for CRO",
      role: "Lead Product Designer (Research, UI/UX, A/B Testing)",
      scope: "End-to-End Mobile Funnel Redesign (Audit ➔ A/B Testing)",
      status: "Completed (A/B Test Validated)",
      users: "High-Intent Mobile Travelers (70% of total traffic)",
      images: [mobileLeadBeforeAfter],
      imageCaptions: ["Comparison of legacy mobile travel checkout vs optimized high-conversion thumb-zone UI"],
      challenge: "Business Class processes luxury travel bookings at $3,000–$30,000 per transaction. The barrier to entry should be near zero. Our UX audit revealed a 'Leaky Bucket.' While users arrived with specific dates and high intent from Kayak/Google, the interface fought against them: hierarchy collapse caused rage clicks on non-clickable price tags, crucial trust signals were buried in the footer, and inline placeholders with small touch targets caused input errors.",
      solution: "A mobile-first redesign built around speed and anxiety reduction. Key interventions included: 1) a Persistent Sticky Footer containing the price and 'Lock This Fare' CTA always within the 'Thumb Zone'; 2) strategic trust placement, moving Trustpilot ratings (4.7/5) and 'Verified by Agents' badges from the footer directly below the point of action.",
      impact: "A controlled A/B experiment demonstrated a +29.6% uplift in successful submissions, a +70.4% increase in CTA clicks, and reduced the average time-to-convert from 2:05 to a crisp 1:36. Key Event Rate stabilized at 11% (nearly doubling historic performance).",
      discoverySections: [
        {
          discoveryTitle: "3. Information Gain: The Failed Hypothesis",
          discoveryLeftTitle: "The Failed Assumption:",
          discoveryLeft: "We initially tested adding more upfront context (detailed fare rules and urgency banners) to validate the high price tag before the user scrolled. We assumed this would build confidence.",
          discoveryRightTitle: "The Reality & Pivot:",
          discoveryRight: "It created cognitive overload. Users ignored the text, and the extra scroll depth caused the primary CTA to drop out of view, lowering conversion. We shifted from a 'Data Collection' mindset to a 'Value Exchange' mindset, stripping the noise.",
          discoveryImages: [mobileLeadBeforeAfter]
        },
        {
          discoveryTitle: "4. The Strategy: Frictionless Value Exchange",
          discoveryLeftTitle: "1. Always-On Conversion Path:",
          discoveryLeft: "Implemented a Persistent Sticky Footer containing the price and the 'Lock This Fare' button. This ensures the conversion path is always within the 'Thumb Zone,' regardless of scroll depth, which skyrocketed CTA clicks by +70.4%.",
          discoveryRightTitle: "2. Strategic Trust Injection:",
          discoveryRight: "Moved the Trustpilot rating (4.7/5) and 'Verified by Agents' badge from the footer to directly below the CTA. Providing social proof exactly at the Point of Action reduces high-ticket anxiety and bounce rates.",
          discoveryImages: [mobileLeadStickyCta]
        },
        {
          discoveryTitle: "5. The Verdict: A/B Test Results & Validation",
          discoveryLeftTitle: "Experiment Parameters:",
          discoveryLeft: "We ran a controlled A/B experiment to filter out seasonal trends. The data proved that clarity is the ultimate persuasion tool. Control Group registered +5.0% natural variance with a 2:05 average time-to-convert.",
          discoveryRightTitle: "The Win & Stabilization:",
          discoveryRight: "The Winning Variant registered a +29.6% uplift in requests and cut the average time-to-convert down to 1:36. Key Event Rate stabilized at 11%, nearly doubling historic performance.",
          discoveryImages: []
        },
        {
          discoveryTitle: "6. The Takeaway & Future Roadmap",
          discoveryLeftTitle: "Impulsive Volume Optimization:",
discoveryLeft: "By removing friction and respecting the mobile user's context, we didn't just fix a page—we unlocked a revenue channel. We successfully maximized volume (Conversion Rate).",
          discoveryRightTitle: "Future Backlog Hypotheses:",
          discoveryRight: "The behavioral data uncovered deeper opportunities to drive value. I have formulated a new backlog of hypotheses focused on cross-selling and dynamic packaging to increase Revenue Per User (RPU) in upcoming validation cycles.",
          discoveryImages: []
        }
      ]
    },
    {
      id: "how-ai-ready-modular-system-fixed-luxury-travel-identity-crisis",
      title: "Homepage & Funnel Structure",
      tag: "Strategy / AI",
      tags: ["Product Strategy", "AI Integration", "Design Governance", "Stakeholder Management", "Core Web Vitals"],
      headline: "How Did an AI-Ready Modular System Fix a Luxury Travel Identity Crisis?",
      description: "A strategic overhaul to build trust and guide users effectively. Aligning the visual hierarchy with business goals led to a 27% lift in click-throughs to booking.",
      href: "/cases/how-ai-ready-modular-system-fixed-luxury-travel-identity-crisis",
      ariaLabel: "Read how an AI-ready modular system fixed a luxury travel identity crisis and increased CTR by 27%",
      imgAlt: "Desktop redesign transforming a generic travel aggregator into a premium concierge platform",
      role: "Lead Product Designer (Strategy, UI/UX, Logic Architecture)",
      scope: "UX Strategy & AI-Ready Modular Design System",
      status: "Shipped & Scaled (CMS-integrated)",
      users: "Marketing Teams & High-Ticket Luxury Travelers",
      images: [luxuryTravelDesktopRedesign],
      imageCaptions: ["Desktop redesign transforming a generic travel aggregator into a premium concierge platform"],
      challenge: "Business-Class.com is a premium concierge service, but the legacy interface mimicked a DIY search engine. This 'Expectation Mismatch' caused high friction and bounce rates. Users entered the site with a 'DIY' mindset, expecting instant automated results. Fighting the user's mental model was killing conversion. I needed to gently transition their mindset from 'I want to search' to 'I need an expert', establishing immediate trust for high-ticket ($5k+) purchases.",
      solution: "A strategic UX realignment combining semantic shifts, smart defaults, and an AI-powered modular design system integrated directly into the CMS. We changed CTAs to reduce perceived commitment ('Check Your Price'), introduced smart defaults, resolved video backgrounds for Core Web Vitals (LCP), and implemented smart-trigger chats. We then built 15+ flexible modules that leverage AI to populate SEO text.",
      impact: "We achieved a +27% lift in CTR to the booking funnel, 95% faster landing page creation for marketing via AI modular page generation, and full WCAG AA accessibility compliance.",
      discoverySections: [
        {
          discoveryTitle: "3. Information Gain: The 'Recent Searches' Fallacy",
          discoveryLeftTitle: "The Failed Assumption:",
          discoveryLeft: "I assumed business class travelers have a non-linear decision journey, making a 'Recent Searches' shortcut critical for returning users to resume their bookings.",
          discoveryRightTitle: "The Reality & Pivot:",
          discoveryRight: "Post-launch data showed near-zero engagement. It competed for attention with the 'Popular Destinations' list, adding unnecessary cognitive load. Following the data, we deprecated the module in the next sprint to reduce decision fatigue.",
          discoveryImages: [luxuryTravelDesktopRedesign]
        },
        {
          discoveryTitle: "4. The Strategy: Semantic Shifts & Smart Defaults",
          discoveryLeftTitle: "CTAs & MVPs:",
          discoveryLeft: "The Semantic Shift: Changed the primary CTA from 'Search Flights' to 'Check Your Price' to reduce perceived commitment.\n\nThe 'Wizard of Oz' MVP: Launched a manually curated quick-select destination list to validate engagement before building dynamic sorting.",
          discoveryRightTitle: "Smart Defaults:",
          discoveryRight: "Implemented IP-based detection to pre-fill 'Origin' and 'Dates' fields. This solved 'Empty State Anxiety' for first-time visitors, helping them initiate searches instantly.",
          discoveryImages: []
        },
        {
          discoveryTitle: "5. Stakeholder Management & Technical Trade-offs",
          discoveryLeftTitle: "1. Video Background vs. LCP:",
          discoveryLeft: "Marketing pushed for a heavy video background for a 'Luxury Feel.' I optimized the asset and implemented a static 'skeleton' image for instant loading, satisfying marketing while protecting Core Web Vitals (LCP).",
          discoveryRightTitle: "2. Aggressive Chat triggers:",
          discoveryRight: "Sales wanted an auto-opening chat. I proved this diluted lead quality. We engineered a 'Smart Trigger' protocol: chat is suppressed while typing, engages after 15s of inactivity, and pauses the carousel.",
          discoveryImages: [smartTriggerChat]
        },
        {
          discoveryTitle: "6. The Scale: Empowering Marketing with AI",
          discoveryLeftTitle: "Design System Governance:",
          discoveryLeft: "Marketing needed to launch 300+ route-specific SEO pages but was bottlenecked by development. I architected a modular system of 15+ flexible blocks (Hero, Reviews, Trust) directly into the CMS with strict styling constraints.",
          discoveryRightTitle: "AI Integration & Results:",
          discoveryRight: "The CMS system now leverages AI to populate SEO-optimized text within these modules. This reduced page production time by 95%, allowing the marketing team to scale operations instantly.",
          discoveryImages: [aiReadyModularCms]
        }
      ]
    }
  ],
  otherProjects: [
    {
      id: "other-llm-prototyping",
      title: "ERP Module LLM Prototyping Experience",
      image: otherLlm,
      alt: "ERP module interface prototype designed for seamless integration with LLMs and AI agents"
    },
    {
      id: "other-design-system",
      title: "Enterprise Design System Sync",
      image: otherDs,
      alt: "Design system synchronization tool mapping Figma design components directly to React code variables"
    },
    {
      id: "other-async-ops",
      title: "Asynchronous Operations Dashboard",
      image: otherAsync,
      alt: "Asynchronous task orchestration dashboard designed to reduce cognitive load in complex B2B workflows"
    },
    {
      id: "other-token-handshake",
      title: "Global Checkout Tokenizer Engine",
      image: otherToken,
      alt: "Financial checkout tokenization engine interface showing secure payment security verification steps"
    }
  ],
  mediumArticles: [
    {
      id: "art-1",
      published: "Jun 18",
      category: "Agentic UX",
      title: "Designing for the Zero-Click Reality",
      url: "https://medium.com/@lex.konovalov/designing-for-the-zero-click-reality-fa63463a1de4"
    },
    {
      id: "art-2",
      published: "Jun 4",
      category: "Design Ops",
      title: "Design Layer #12: The Token Tax and the Death of the Handoff",
      url: "https://medium.com/@lex.konovalov/design-layer-12-the-token-tax-and-the-death-of-the-handoff-e081acb363c3"
    },
    {
      id: "art-3",
      published: "Apr 17",
      category: "AI, GEO",
      title: "Your Product Page Was Built for Humans. The Next Buyer Is an Algorithm.",
      url: "https://medium.com/@lex.konovalov/your-product-page-was-built-for-humans-the-next-buyer-is-an-algorithm-da612d4aeeab"
    },
    {
      id: "art-4",
      published: "Apr 13",
      category: "SEO, Accessibility",
      title: "Your Accessibility Tree Is Now Your SEO",
      url: "https://medium.com/@lex.konovalov/your-accessibility-tree-is-now-your-seo-322ff33ae81b"
    },
    {
      id: "art-5",
      published: "Dec 30",
      category: "Design Eng",
      title: "Your next design Tool isn't Figma. It's the Terminal.",
      url: "https://medium.com/@lex.konovalov/your-next-design-tool-isnt-figma-it-s-the-terminal-0a78b88f86d4"
    },
    {
      id: "art-6",
      published: "Dec 13",
      category: "OOUX, B2B",
      title: "How I used OOUX and Domain Modeling to build a complex Travel ERP from scratch",
      url: "https://medium.com/@lex.konovalov/how-i-used-ooux-and-domain-modeling-to-build-a-complex-travel-erp-from-scratch-f1e8dc5088ba"
    },
    {
      id: "art-7",
      published: "Mar 31",
      category: "Weekly digest",
      title: "Your Next User Might Be an Agent",
      url: "https://medium.com/@lex.konovalov/your-next-user-might-be-an-agent-7607730e2f5b"
    }
  ]
};
