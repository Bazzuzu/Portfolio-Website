import fs from 'fs';
import path from 'path';
import { parseAllPublicationDrafts, ParsedItem } from './parse-publication.ts';
import { glossaryCategories as baseCategories, glossaryTerms as initialTerms, supportingPages as initialSupporting } from '../src/data/glossaryData.ts';

// 1. Parse all drafts
const { terms: allParsedTerms, supporting: allParsedSupporting } = parseAllPublicationDrafts();

const termsBySlug = new Map<string, ParsedItem>();
allParsedTerms.forEach(t => termsBySlug.set(t.slug, t));

const supportingBySlug = new Map<string, ParsedItem>();
allParsedSupporting.forEach(s => supportingBySlug.set(s.slug, s));

// Maintain in-memory state across sequential batch executions
const currentTerms = [...initialTerms];
const currentSupporting = [...(initialSupporting || [])];

// Define Batch memberships
export const BATCH_DEFINITIONS = [
  {
    batchNumber: 1,
    name: "OOUX Expansion & Topic Hubs",
    domain: "UX & Product Architecture (OOUX Cluster)",
    newTermSlugs: [
      "object-attributes-ooux",
      "object-inheritance-ooux",
      "object-representation-ooux",
      "object-oriented-user-stories",
      "ooux-prototyping-and-testing",
      "orca-sprint",
      "relationship-prioritization",
      "attribute-prioritization",
      "cta-prioritization",
      "shapeshifter-matrix",
      "tree-systems-ooux",
      "content-prototyping"
    ],
    supportingSlugs: ["ooux", "ooux-worked-example"],
    updatedSlugs: [
      "object-oriented-ux",
      "orca-framework",
      "object-mapping",
      "domain-context-modeling",
      "cardinality-ux-architecture",
      "structural-navigation-model",
      "state-transition-matrix",
      "junction-object",
      "object-prioritization",
      "orca-relationship-requirements",
      "object-guide",
      "cta-matrix",
      "nested-object-matrix",
      "noun-foraging",
      "ooux-ux-fails"
    ]
  },
  {
    batchNumber: 2,
    name: "UX & Information Architecture Core Systems",
    domain: "UX & Product Architecture (IA & Systems Strategy)",
    newTermSlugs: [
      "conversational-ux",
      "design-critique",
      "researchops"
    ],
    supportingSlugs: [],
    updatedSlugs: [
      "information-architecture",
      "core-model",
      "mental-model-mapping",
      "content-modeling",
      "operational-ux",
      "service-blueprinting",
      "polyhierarchy",
      "controlled-vocabulary",
      "faceted-classification",
      "task-model",
      "wayfinding-system",
      "semantic-zoom",
      "breadcrumb-hierarchy",
      "progressive-disclosure",
      "enterprise-information-architecture",
      "conceptual-schema",
      "enterprise-ux-strategy",
      "customer-journey-mapping",
      "affordance-layering"
    ]
  },
  {
    batchNumber: 3,
    name: "Design Systems, Tooling & Workflows",
    domain: "Design Systems & Engineering (Foundations, Tokens & Tooling)",
    newTermSlugs: [
      "figma-code-connect",
      "figma-mcp-server",
      "code-to-design-workflow",
      "design-system-adoption",
      "design-system-audit",
      "design-system-documentation",
      "design-system-metrics",
      "design-system-migration",
      "design-system-theming",
      "pattern-library"
    ],
    supportingSlugs: [],
    updatedSlugs: [
      "design-system",
      "design-tokens",
      "design-tokens-format-module-dtcg",
      "semantic-tokens",
      "design-primitives",
      "figma-variables-modes",
      "style-dictionary",
      "token-resolver-engine",
      "composite-design-token",
      "design-system-governance",
      "design-system-versioning-semver",
      "design-to-code-workflow",
      "designops"
    ]
  },
  {
    batchNumber: 4,
    name: "Component Engineering, UI Quality & Accessibility",
    domain: "Design Systems & Engineering (Components & Accessibility Standards)",
    newTermSlugs: [
      "ai-ready-design-system",
      "alt-text",
      "design-debt",
      "design-qa",
      "shadcn-ui",
      "storybook",
      "touch-target-size",
      "wcag-color-contrast",
      "zoom-text-resize-reflow"
    ],
    supportingSlugs: [],
    updatedSlugs: [
      "component-libraries",
      "component-architecture",
      "headless-ui-architecture",
      "design-engineering",
      "visual-regression-testing",
      "component-telemetry",
      "semantic-html",
      "aria-accessible-rich-internet-applications",
      "accessibility-wcag",
      "european-accessibility-act",
      "en-301-549",
      "ada-web-accessibility",
      "section-508",
      "web-accessibility-audit",
      "accessible-forms",
      "keyboard-accessibility",
      "web-components",
      "atomic-design",
      "interaction-invariant",
      "fluid-typography-spacing-system"
    ]
  },
  {
    batchNumber: 5,
    name: "AI Agentic Systems & Growth Unit Economics",
    domain: "AI & Agentic Systems and Product Strategy & Growth",
    newTermSlugs: [
      // 13 AI terms
      "ai-assisted-design",
      "ai-grounding",
      "ai-hallucination",
      "ai-model-routing",
      "ai-prototyping",
      "ai-transparency",
      "ai-ux-research",
      "context-window",
      "explainable-ai",
      "prompt-injection",
      "responsible-ai-design",
      "structured-outputs",
      "trust-calibration-ai",
      // 12 Growth terms
      "ai-unit-economics",
      "cac-payback-period",
      "contribution-margin",
      "cost-to-serve",
      "customer-acquisition-cost-cac",
      "customer-lifetime-value-ltv",
      "gross-margin",
      "net-revenue-retention-nrr",
      "outcome-based-pricing",
      "pricing-metric",
      "unit-economics",
      "usage-based-pricing"
    ],
    supportingSlugs: [],
    updatedSlugs: [
      // 25 AI terms
      "agentic-ai",
      "ai-agent",
      "agent-harness",
      "design-harness",
      "model-context-protocol-mcp",
      "agent-skills-skill-md",
      "context-engineering",
      "prompt-engineering",
      "retrieval-augmented-generation-rag",
      "tool-calling-function-calling",
      "human-in-the-loop-hitl",
      "generative-ui",
      "ai-native-design",
      "vibe-coding",
      "structured-data-for-llms",
      "llms-txt-proposal",
      "multimodal-ai",
      "knowledge-graphs-ai-context",
      "agentic-ux",
      "system-prompts-guardrails",
      "synthetic-user-testing",
      "autonomous-workflow-orchestration",
      "evaluation-harness-ai-evals",
      "context-drift",
      "multi-agent-systems-mas",
      // 25 Growth terms
      "conversion-rate-optimization-cro",
      "ab-testing-split-testing",
      "continuous-experimentation",
      "conversion-funnel-architecture",
      "lead-capture-mechanics",
      "checkout-flow-optimization",
      "product-discovery",
      "jobs-to-be-done-jtbd",
      "product-led-growth-plg",
      "north-star-metric-nsm",
      "product-strategy-canvas",
      "b2b-saas-interaction-model",
      "b2c-engagement-loops",
      "product-telemetry-analytics",
      "growth-design",
      "design-strategy-alignment",
      "product-market-fit-pmf-engine",
      "ltv-to-cac-ratio",
      "activation-metric",
      "time-to-value-ttv",
      "churn-mitigation-architecture",
      "feature-flag-strategy",
      "value-proposition-canvas",
      "user-retention",
      "product-qualified-lead-pql"
    ]
  }
];

export function executeBatch(targetBatchNumber: number) {
  const batchDef = BATCH_DEFINITIONS.find(b => b.batchNumber === targetBatchNumber);
  if (!batchDef) throw new Error(`Invalid batch number: ${targetBatchNumber}`);

  console.log(`\n========================================`);
  console.log(`Executing Batch ${batchDef.batchNumber}: ${batchDef.name}`);
  console.log(`Domain: ${batchDef.domain}`);
  console.log(`New terms: ${batchDef.newTermSlugs.length}, Supporting: ${batchDef.supportingSlugs.length}, Updated: ${batchDef.updatedSlugs.length}`);
  console.log(`========================================\n`);

  // Read current glossaryData.ts path
  const gdPath = path.resolve('src/data/glossaryData.ts');

  const updatedTerms = currentTerms;
  const updatedSupporting = currentSupporting;

  // 1. Apply updates to existing terms
  for (const slug of batchDef.updatedSlugs) {
    const draft = termsBySlug.get(slug);
    if (!draft) {
      console.warn(`Warning: No draft found for updated slug: ${slug}`);
      continue;
    }
    const idx = updatedTerms.findIndex(t => t.slug === slug);
    if (idx >= 0) {
      const existing = updatedTerms[idx];
      updatedTerms[idx] = {
        ...existing,
        name: draft.name,
        definition: draft.definition,
        purpose: draft.purpose,
        keyConcepts: draft.keyConcepts,
        howItWorks: draft.howItWorks,
        seoTitle: draft.title,
        seoDescription: draft.description,
        canonicalUrl: draft.canonical,
        sources: draft.sources,
        relatedTerms: draft.relatedTerms,
        contentMarkdown: draft.contentMarkdown,
        structuredDataGraph: draft.structuredDataGraph,
        ...(draft.alternateName ? { alternateName: draft.alternateName } : {})
      };
      console.log(`[Batch ${targetBatchNumber}] Enriched existing term: ${slug}`);
    }
  }

  // 2. Append new terms
  for (const slug of batchDef.newTermSlugs) {
    const draft = termsBySlug.get(slug);
    if (!draft) {
      console.warn(`Warning: No draft found for new slug: ${slug}`);
      continue;
    }
    const existingIdx = updatedTerms.findIndex(t => t.slug === slug);
    if (existingIdx >= 0) {
      // Already present, update it
      const existing = updatedTerms[existingIdx];
      updatedTerms[existingIdx] = {
        ...existing,
        name: draft.name,
        definition: draft.definition,
        purpose: draft.purpose,
        keyConcepts: draft.keyConcepts,
        howItWorks: draft.howItWorks,
        seoTitle: draft.title,
        seoDescription: draft.description,
        canonicalUrl: draft.canonical,
        sources: draft.sources,
        relatedTerms: draft.relatedTerms,
        contentMarkdown: draft.contentMarkdown,
        structuredDataGraph: draft.structuredDataGraph,
        ...(draft.alternateName ? { alternateName: draft.alternateName } : {})
      };
    } else {
      const nextId = String(updatedTerms.length + 1).padStart(3, '0');
      const newTerm: any = {
        id: nextId,
        name: draft.name,
        slug: draft.slug,
        category: draft.category,
        secondaryCategory: draft.secondaryCategory,
        maturity: draft.maturity,
        definition: draft.definition,
        purpose: draft.purpose,
        keyConcepts: draft.keyConcepts,
        howItWorks: draft.howItWorks,
        relatedTerms: draft.relatedTerms,
        seoTitle: draft.title,
        seoDescription: draft.description,
        canonicalUrl: draft.canonical,
        sources: draft.sources,
        contentMarkdown: draft.contentMarkdown,
        structuredDataGraph: draft.structuredDataGraph
      };
      if (draft.alternateName) {
        newTerm.alternateName = draft.alternateName;
      }
      updatedTerms.push(newTerm);
      console.log(`[Batch ${targetBatchNumber}] Added new term [${nextId}] ${slug} (${draft.category})`);
    }
  }

  // 3. Add supporting pages (if any in this batch)
  for (const sSlug of batchDef.supportingSlugs) {
    const draft = supportingBySlug.get(sSlug);
    if (!draft) {
      console.warn(`Warning: No draft found for supporting slug: ${sSlug}`);
      continue;
    }
    const sIdx = updatedSupporting.findIndex(s => s.slug === sSlug);
    const supportingItem = {
      slug: draft.slug,
      url: draft.url,
      name: draft.name,
      title: draft.title,
      description: draft.description,
      canonicalUrl: draft.canonical,
      contentMarkdown: draft.contentMarkdown,
      structuredDataGraph: draft.structuredDataGraph,
      sources: draft.sources,
      relatedTerms: draft.relatedTerms,
      category: draft.category || undefined,
      secondaryCategory: draft.secondaryCategory || undefined
    };
    if (sIdx >= 0) {
      updatedSupporting[sIdx] = supportingItem;
    } else {
      updatedSupporting.push(supportingItem);
      console.log(`[Batch ${targetBatchNumber}] Added supporting page: ${sSlug}`);
    }
  }

  // Calculate actual category counts
  const categoryCounts: Record<string, number> = {};
  updatedTerms.forEach(t => {
    categoryCounts[t.category] = (categoryCounts[t.category] || 0) + 1;
  });

  const updatedCategories = baseCategories.map(cat => ({
    ...cat,
    count: categoryCounts[cat.name] || cat.count
  }));

  // Write updated src/data/glossaryData.ts
  const tsContent = `// src/data/glossaryData.ts
// Canonical ${updatedTerms.length}-term taxonomy across four foundational product design domains

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

export interface SupportingPage {
  slug: string;
  url: string;
  name: string;
  title: string;
  description: string;
  canonicalUrl: string;
  contentMarkdown: string;
  structuredDataGraph: any[];
  sources: string[];
  relatedTerms: string[];
  category?: string;
  secondaryCategory?: string;
}

export const GLOSSARY_COLLECTION_NAME = "Product Design Glossary";
export const GLOSSARY_COLLECTION_ID = "https://lexkonovalov.com/glossary/#terms";

export const glossaryCategories: GlossaryCategory[] = ${JSON.stringify(updatedCategories, null, 2)};

export const glossaryTerms: GlossaryTerm[] = ${JSON.stringify(updatedTerms, null, 2)};

export const supportingPages: SupportingPage[] = ${JSON.stringify(updatedSupporting, null, 2)};

export function getTermBySlug(slug: string): GlossaryTerm | SupportingPage | undefined {
  const normalized = slug.replace(/\\.html$/, "").toLowerCase().replace(/^\\/|\\/$/g, "");
  return glossaryTerms.find((t) => t.slug.toLowerCase() === normalized) ||
         supportingPages.find((p) => p.slug.toLowerCase() === normalized);
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
`;

  fs.writeFileSync(gdPath, tsContent, 'utf-8');
  console.log(`[Batch ${targetBatchNumber}] Updated src/data/glossaryData.ts (${updatedTerms.length} terms, ${updatedSupporting.length} supporting pages)`);

  return {
    termCount: updatedTerms.length,
    supportingCount: updatedSupporting.length,
    categoryCounts
  };
}
