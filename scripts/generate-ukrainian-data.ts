import fs from 'fs';
import path from 'path';
import { glossaryCategories, glossaryTerms, supportingPages, GlossaryTerm, SupportingPage } from '../src/data/glossaryData.ts';

// Master translation dictionary for categories
const CATEGORIES_UK = [
  {
    id: "ux-product-architecture",
    name: "UX та архітектура продукту",
    count: 49,
    description: "Концептуальні моделі, таксономії інформаційної архітектури, методологія OOUX та навігаційні системи для складних цифрових продуктів.",
    primaryFocus: "Структурна узгодженість, OOUX, інформаційна архітектура та навігаційні моделі",
    representativeSpecs: "OOUX, ORCA, Dublin Core, IA Core Model, Schema.org",
    maturityDistribution: "32 Established, 12 Emerging, 5 Proprietary"
  },
  {
    id: "design-systems-engineering",
    name: "Дизайн-системи та інженерія",
    count: 50,
    description: "Дизайн-токени (DTCG), компонентна архітектура, доступність за стандартами WCAG та автоматизація передачі дизайну в код.",
    primaryFocus: "Семантичні токени, компонентні контракти, WCAG 2.2 AA та системні інструменти",
    representativeSpecs: "DTCG, W3C Design Tokens, WCAG 2.2, EN 301 549, SemVer",
    maturityDistribution: "38 Established, 9 Emerging, 3 Proprietary"
  },
  {
    id: "product-strategy-growth",
    name: "Продуктова стратегія та зростання",
    count: 39,
    description: "Одинична економіка (Unit Economics), механіки активації та утримання, продуктове відкриття (Product Discovery) та Product-Led Growth.",
    primaryFocus: "CAC/LTV моделі, когортний аналіз утримання, воронки конверсії та фреймворки зростання",
    representativeSpecs: "Unit Economics, PLG, Jobs to Be Done (JTBD), North Star Framework",
    maturityDistribution: "28 Established, 8 Emerging, 3 Coined"
  },
  {
    id: "ai-agentic-systems",
    name: "ШІ та агентні системи",
    count: 38,
    description: "Агентні робочі процеси, протокол контексту моделі (MCP), дизайн-гарантії для LLM, оцінювання (Evals) та Generative UI.",
    primaryFocus: "Оркестрація агентів, управління контекстом, системні промпти та оцінювання надійності ШІ",
    representativeSpecs: "Model Context Protocol (MCP), LLMs.txt, Agent Skills (SKILL.md), HITL",
    maturityDistribution: "8 Established, 24 Emerging, 6 Coined / Framework-Specific"
  }
];

const CATEGORY_MAP: Record<string, string> = {
  "UX & Product Architecture": "UX та архітектура продукту",
  "Design Systems & Engineering": "Дизайн-системи та інженерія",
  "Product Strategy & Growth": "Продуктова стратегія та зростання",
  "AI & Agentic Systems": "ШІ та агентні системи"
};

// Authoritative Ukrainian terminology mapping
const TERM_NAMES_UK: Record<string, { name: string; alt?: string | string[] }> = {
  "object-oriented-ux": { name: "Об'єктно-орієнтований UX (OOUX)", alt: ["OOUX", "Object-Oriented UX"] },
  "orca-framework": { name: "Фреймворк ORCA", alt: ["ORCA Framework", "ORCA"] },
  "object-mapping": { name: "Картування об'єктів (Object Mapping)", alt: ["Object Mapping", "Карта об'єктів"] },
  "domain-context-modeling": { name: "Моделювання контексту предметної області", alt: ["Domain Context Modeling"] },
  "cardinality-ux-architecture": { name: "Кардинальність у UX-архітектурі", alt: ["Cardinality", "Зв'язки кардинальності"] },
  "structural-navigation-model": { name: "Модель структурної навігації", alt: ["Structural Navigation Model"] },
  "state-transition-matrix": { name: "Матриця переходів станів", alt: ["State Transition Matrix"] },
  "junction-object": { name: "Об'єкт зв'язку (Junction Object)", alt: ["Junction Object", "Проміжний об'єкт"] },
  "object-prioritization": { name: "Пріоритезація об'єктів", alt: ["Object Prioritization"] },
  "orca-relationship-requirements": { name: "Вимоги до зв'язків у фреймворку ORCA", alt: ["ORCA Relationship Requirements"] },
  "object-guide": { name: "Картка об'єкта (Object Guide)", alt: ["Object Guide"] },
  "cta-matrix": { name: "Матриця закликів до дії (CTA Matrix)", alt: ["CTA Matrix"] },
  "nested-object-matrix": { name: "Матриця вкладених об'єктів", alt: ["Nested Object Matrix"] },
  "noun-foraging": { name: "Пошук іменників (Noun Foraging)", alt: ["Noun Foraging"] },
  "ooux-ux-fails": { name: "Типові UX-помилки, які вирішує OOUX", alt: ["OOUX UX Fails"] },
  "object-attributes-ooux": { name: "Атрибути об'єктів в OOUX", alt: ["Object Attributes"] },
  "object-inheritance-ooux": { name: "Успадкування об'єктів в OOUX", alt: ["Object Inheritance"] },
  "object-representation-ooux": { name: "Представлення об'єктів в OOUX", alt: ["Object Representation"] },
  "object-oriented-user-stories": { name: "Об'єктно-орієнтовані історії користувачів", alt: ["Object-Oriented User Stories"] },
  "ooux-prototyping-and-testing": { name: "Прототипування та тестування в OOUX", alt: ["OOUX Prototyping"] },
  "orca-sprint": { name: "Спринт за методологією ORCA", alt: ["ORCA Sprint"] },
  "relationship-prioritization": { name: "Пріоритезація зв'язків", alt: ["Relationship Prioritization"] },
  "attribute-prioritization": { name: "Пріоритезація атрибутів", alt: ["Attribute Prioritization"] },
  "cta-prioritization": { name: "Пріоритезація CTA", alt: ["CTA Prioritization"] },
  "shapeshifter-matrix": { name: "Матриця трансформації станів (Shapeshifter Matrix)", alt: ["Shapeshifter Matrix"] },
  "tree-systems-ooux": { name: "Деревоподібні системи в OOUX", alt: ["Tree Systems"] },
  "content-prototyping": { name: "Контентне прототипування", alt: ["Content Prototyping"] },
  "information-architecture": { name: "Інформаційна архітектура (IA)", alt: ["Information Architecture", "IA"] },
  "core-model": { name: "Модель ядра (Core Model)", alt: ["Core Model"] },
  "mental-model-mapping": { name: "Картування ментальних моделей", alt: ["Mental Model Mapping"] },
  "content-modeling": { name: "Моделювання контенту", alt: ["Content Modeling"] },
  "operational-ux": { name: "Операційний UX (Operational UX)", alt: ["Operational UX"] },
  "service-blueprinting": { name: "Сервісний блюпринтинг (Service Blueprinting)", alt: ["Service Blueprinting"] },
  "polyhierarchy": { name: "Поліієрархія (Polyhierarchy)", alt: ["Polyhierarchy"] },
  "controlled-vocabulary": { name: "Контрольований словник", alt: ["Controlled Vocabulary"] },
  "faceted-classification": { name: "Фасетна класифікація", alt: ["Faceted Classification"] },
  "task-model": { name: "Модель завдань (Task Model)", alt: ["Task Model"] },
  "wayfinding-system": { name: "Система орієнтування в інтерфейсі (Wayfinding)", alt: ["Wayfinding System"] },
  "semantic-zoom": { name: "Семантичне масштабування (Semantic Zoom)", alt: ["Semantic Zoom"] },
  "breadcrumb-hierarchy": { name: "Ієрархія хлібних крихт", alt: ["Breadcrumb Hierarchy"] },
  "progressive-disclosure": { name: "Покрокове розкриття інформації (Progressive Disclosure)", alt: ["Progressive Disclosure"] },
  "enterprise-information-architecture": { name: "Корпоративна інформаційна архітектура", alt: ["Enterprise IA"] },
  "conceptual-schema": { name: "Концептуальна схема", alt: ["Conceptual Schema"] },
  "enterprise-ux-strategy": { name: "Стратегія корпоративного UX", alt: ["Enterprise UX Strategy"] },
  "customer-journey-mapping": { name: "Картування шляху клієнта (CJM)", alt: ["Customer Journey Mapping", "CJM"] },
  "affordance-layering": { name: "Шарування афордансів (Affordance Layering)", alt: ["Affordance Layering"] },
  "conversational-ux": { name: "Розмовний UX (Conversational UX)", alt: ["Conversational UX"] },
  "design-critique": { name: "Дизайн-критика (Design Critique)", alt: ["Design Critique"] },
  "researchops": { name: "ResearchOps", alt: ["Research Operations", "ResearchOps"] },
  "design-system": { name: "Дизайн-система (Design System)", alt: ["Design System"] },
  "design-tokens": { name: "Дизайн-токени (Design Tokens)", alt: ["Design Tokens"] },
  "design-tokens-format-module-dtcg": { name: "Формат дизайн-токенів DTCG", alt: ["DTCG", "Design Tokens Format Module"] },
  "semantic-tokens": { name: "Семантичні токени (Semantic Tokens)", alt: ["Semantic Tokens"] },
  "design-primitives": { name: "Примітиви дизайну (Design Primitives)", alt: ["Design Primitives"] },
  "figma-variables-modes": { name: "Змінні та режими у Figma (Variables & Modes)", alt: ["Figma Variables & Modes"] },
  "style-dictionary": { name: "Style Dictionary", alt: ["Style Dictionary"] },
  "token-resolver-engine": { name: "Двигун обчислення токенів (Token Resolver)", alt: ["Token Resolver Engine"] },
  "composite-design-token": { name: "Складений дизайн-токен (Composite Token)", alt: ["Composite Design Token"] },
  "design-system-governance": { name: "Управління дизайн-системою (Governance)", alt: ["Design System Governance"] },
  "design-system-versioning-semver": { name: "Версіонування дизайн-систем (SemVer)", alt: ["Design System SemVer"] },
  "design-to-code-workflow": { name: "Робочий процес від дизайну до коду", alt: ["Design-to-Code Workflow"] },
  "designops": { name: "DesignOps", alt: ["Design Operations", "DesignOps"] },
  "figma-code-connect": { name: "Figma Code Connect", alt: ["Code Connect"] },
  "figma-mcp-server": { name: "Figma MCP Server", alt: ["Figma MCP"] },
  "code-to-design-workflow": { name: "Робочий процес від коду до дизайну", alt: ["Code-to-Design Workflow"] },
  "design-system-adoption": { name: "Впровадження дизайн-системи (Adoption)", alt: ["Design System Adoption"] },
  "design-system-audit": { name: "Аудит дизайн-системи", alt: ["Design System Audit"] },
  "design-system-documentation": { name: "Документація дизайн-системи", alt: ["Design System Documentation"] },
  "design-system-metrics": { name: "Метрики дизайн-системи", alt: ["Design System Metrics"] },
  "design-system-migration": { name: "Міграція дизайн-системи", alt: ["Design System Migration"] },
  "design-system-theming": { name: "Темізація в дизайн-системах (Theming)", alt: ["Design System Theming"] },
  "pattern-library": { name: "Бібліотека патернів (Pattern Library)", alt: ["Pattern Library"] },
  "component-libraries": { name: "Бібліотеки компонентів", alt: ["Component Libraries"] },
  "component-architecture": { name: "Компонентна архітектура", alt: ["Component Architecture"] },
  "headless-ui-architecture": { name: "Архітектура Headless UI", alt: ["Headless UI Architecture"] },
  "design-engineering": { name: "Дизайн-інженерія (Design Engineering)", alt: ["Design Engineering"] },
  "visual-regression-testing": { name: "Тестування візуальної регресії", alt: ["Visual Regression Testing"] },
  "component-telemetry": { name: "Телеметрія компонентів", alt: ["Component Telemetry"] },
  "semantic-html": { name: "Семантичний HTML (Semantic HTML)", alt: ["Semantic HTML"] },
  "aria-accessible-rich-internet-applications": { name: "ARIA (Accessible Rich Internet Applications)", alt: ["WAI-ARIA", "ARIA"] },
  "accessibility-wcag": { name: "Доступність веб-інтерфейсів (WCAG)", alt: ["WCAG", "Web Content Accessibility Guidelines"] },
  "european-accessibility-act": { name: "Європейський акт про доступність (EAA)", alt: ["EAA", "European Accessibility Act"] },
  "en-301-549": { name: "Стандарт доступності EN 301 549", alt: ["EN 301 549"] },
  "ada-web-accessibility": { name: "Веб-доступність за ADA", alt: ["ADA Title III"] },
  "section-508": { name: "Розділ 508 (Section 508)", alt: ["Section 508"] },
  "web-accessibility-audit": { name: "Аудит веб-доступності", alt: ["Accessibility Audit"] },
  "accessible-forms": { name: "Доступні форми (Accessible Forms)", alt: ["Accessible Forms"] },
  "keyboard-accessibility": { name: "Клавіатурна доступність", alt: ["Keyboard Accessibility"] },
  "web-components": { name: "Веб-компоненти (Web Components)", alt: ["Web Components"] },
  "atomic-design": { name: "Атомарний дизайн (Atomic Design)", alt: ["Atomic Design"] },
  "interaction-invariant": { name: "Інваріант взаємодії (Interaction Invariant)", alt: ["Interaction Invariant"] },
  "fluid-typography-spacing-system": { name: "Флюїдна типографіка та система відступів", alt: ["Fluid Typography & Spacing"] },
  "ai-ready-design-system": { name: "Дизайн-система, готова до ШІ", alt: ["AI-Ready Design System"] },
  "alt-text": { name: "Альтернативний текст (Alt Text)", alt: ["Alt Text", "Текстовий еквівалент"] },
  "design-debt": { name: "Дизайн-борг (Design Debt)", alt: ["Design Debt"] },
  "design-qa": { name: "Контроль якості дизайну (Design QA)", alt: ["Design QA"] },
  "shadcn-ui": { name: "shadcn/ui", alt: ["shadcn/ui"] },
  "storybook": { name: "Storybook", alt: ["Storybook"] },
  "touch-target-size": { name: "Розмір області дотику (Touch Target Size)", alt: ["Touch Target Size"] },
  "wcag-color-contrast": { name: "Колірний контраст за WCAG", alt: ["Color Contrast", "WCAG Contrast"] },
  "zoom-text-resize-reflow": { name: "Масштабування тексту та перебудова (Reflow)", alt: ["Text Resize & Reflow"] },
  "agentic-ai": { name: "Агентний штучний інтелект (Agentic AI)", alt: ["Agentic AI"] },
  "ai-agent": { name: "ШІ-агент (AI Agent)", alt: ["AI Agent"] },
  "agent-harness": { name: "Тестовий каркас агента (Agent Harness)", alt: ["Agent Harness"] },
  "design-harness": { name: "Дизайн-каркас (Design Harness)", alt: ["Design Harness"] },
  "model-context-protocol-mcp": { name: "Model Context Protocol (MCP)", alt: ["MCP", "Model Context Protocol"] },
  "agent-skills-skill-md": { name: "Навички агентів (SKILL.md)", alt: ["Agent Skills", "SKILL.md"] },
  "context-engineering": { name: "Контекстна інженерія (Context Engineering)", alt: ["Context Engineering"] },
  "prompt-engineering": { name: "Промпт-інженерія (Prompt Engineering)", alt: ["Prompt Engineering"] },
  "retrieval-augmented-generation-rag": { name: "Генерація з доповненим пошуком (RAG)", alt: ["RAG", "Retrieval-Augmented Generation"] },
  "tool-calling-function-calling": { name: "Виклик інструментів та функцій", alt: ["Tool Calling", "Function Calling"] },
  "human-in-the-loop-hitl": { name: "Людина в контурі прийняття рішень (HITL)", alt: ["HITL", "Human-in-the-Loop"] },
  "generative-ui": { name: "Генеративний користувацький інтерфейс (Generative UI)", alt: ["Generative UI", "GenUI"] },
  "ai-native-design": { name: "ШІ-нативний дизайн (AI-Native Design)", alt: ["AI-Native Design"] },
  "vibe-coding": { name: "Вайб-кодинг (Vibe Coding)", alt: ["Vibe Coding"] },
  "structured-data-for-llms": { name: "Структуровані дані для LLM", alt: ["Structured Data for LLMs"] },
  "llms-txt-proposal": { name: "Стандарт llms.txt", alt: ["llms.txt"] },
  "multimodal-ai": { name: "Мультимодальний ШІ (Multimodal AI)", alt: ["Multimodal AI"] },
  "knowledge-graphs-ai-context": { name: "Графи знань для ШІ-контексту", alt: ["Knowledge Graphs for AI"] },
  "agentic-ux": { name: "Агентний UX (Agentic UX)", alt: ["Agentic UX"] },
  "system-prompts-guardrails": { name: "Системні промпти та захисні бар'єри", alt: ["System Prompts & Guardrails"] },
  "synthetic-user-testing": { name: "Тестування за допомогою синтетичних користувачів", alt: ["Synthetic User Testing"] },
  "autonomous-workflow-orchestration": { name: "Автономна оркестрація робочих процесів", alt: ["Autonomous Workflow Orchestration"] },
  "evaluation-harness-ai-evals": { name: "Каркас оцінювання ШІ (AI Evals)", alt: ["AI Evals", "Evaluation Harness"] },
  "context-drift": { name: "Дрейф контексту (Context Drift)", alt: ["Context Drift"] },
  "multi-agent-systems-mas": { name: "Мультиагентні системи (MAS)", alt: ["Multi-Agent Systems", "MAS"] },
  "ai-assisted-design": { name: "Дизайн за підтримки ШІ (AI-Assisted Design)", alt: ["AI-Assisted Design"] },
  "ai-grounding": { name: "Заземлення ШІ (AI Grounding)", alt: ["AI Grounding"] },
  "ai-hallucination": { name: "Галюцинації ШІ (AI Hallucination)", alt: ["AI Hallucination"] },
  "ai-model-routing": { name: "Маршрутизація моделей ШІ (Model Routing)", alt: ["AI Model Routing"] },
  "ai-prototyping": { name: "ШІ-прототипування (AI Prototyping)", alt: ["AI Prototyping"] },
  "ai-transparency": { name: "Прозорість ШІ (AI Transparency)", alt: ["AI Transparency"] },
  "ai-ux-research": { name: "UX-дослідження з ШІ (AI UX Research)", alt: ["AI UX Research"] },
  "context-window": { name: "Контекстне вікно (Context Window)", alt: ["Context Window"] },
  "explainable-ai": { name: "Пояснюваний штучний інтелект (XAI)", alt: ["Explainable AI", "XAI"] },
  "prompt-injection": { name: "Промпт-ін'єкція (Prompt Injection)", alt: ["Prompt Injection"] },
  "responsible-ai-design": { name: "Відповідальний дизайн систем ШІ", alt: ["Responsible AI Design"] },
  "structured-outputs": { name: "Структуровані виводи (Structured Outputs)", alt: ["Structured Outputs"] },
  "trust-calibration-ai": { name: "Калібрування довіри до ШІ (Trust Calibration)", alt: ["Trust Calibration"] },
  "conversion-rate-optimization-cro": { name: "Оптимізація коефіцієнта конверсії (CRO)", alt: ["CRO", "Conversion Rate Optimization"] },
  "ab-testing-split-testing": { name: "A/B-тестування (Спліт-тестування)", alt: ["A/B Testing", "Split Testing"] },
  "continuous-experimentation": { name: "Безперервне експериментування", alt: ["Continuous Experimentation"] },
  "conversion-funnel-architecture": { name: "Архітектура воронки конверсії", alt: ["Conversion Funnel Architecture"] },
  "lead-capture-mechanics": { name: "Механіки захоплення лідів (Lead Capture)", alt: ["Lead Capture Mechanics"] },
  "checkout-flow-optimization": { name: "Оптимізація процесу чекауту", alt: ["Checkout Flow Optimization"] },
  "product-discovery": { name: "Продуктове відкриття (Product Discovery)", alt: ["Product Discovery"] },
  "jobs-to-be-done-jtbd": { name: "Концепція Jobs to Be Done (JTBD)", alt: ["JTBD", "Jobs to Be Done"] },
  "product-led-growth-plg": { name: "Зростання на основі продукту (PLG)", alt: ["PLG", "Product-Led Growth"] },
  "north-star-metric-nsm": { name: "Метрика північної зірки (North Star Metric)", alt: ["North Star Metric", "NSM"] },
  "product-strategy-canvas": { name: "Канва продуктової стратегії", alt: ["Product Strategy Canvas"] },
  "b2b-saas-interaction-model": { name: "Модель взаємодії в B2B SaaS", alt: ["B2B SaaS Interaction Model"] },
  "b2c-engagement-loops": { name: "Петлі залучення в B2C", alt: ["B2C Engagement Loops"] },
  "product-telemetry-analytics": { name: "Продуктова телеметрія та аналітика", alt: ["Product Telemetry & Analytics"] },
  "growth-design": { name: "Дизайн зростання (Growth Design)", alt: ["Growth Design"] },
  "design-strategy-alignment": { name: "Узгодження дизайн-стратегії", alt: ["Design Strategy Alignment"] },
  "product-market-fit-pmf-engine": { name: "Двигун Product-Market Fit (PMF Engine)", alt: ["PMF Engine"] },
  "ltv-to-cac-ratio": { name: "Співвідношення LTV до CAC", alt: ["LTV:CAC Ratio"] },
  "activation-metric": { name: "Метрика активації (Activation Metric)", alt: ["Activation Metric"] },
  "time-to-value-ttv": { name: "Час до отримання цінності (Time to Value / TTV)", alt: ["TTV", "Time to Value"] },
  "churn-mitigation-architecture": { name: "Архітектура запобігання відтоку (Churn Mitigation)", alt: ["Churn Mitigation Architecture"] },
  "feature-flag-strategy": { name: "Стратегія функціональних прапорців (Feature Flags)", alt: ["Feature Flag Strategy"] },
  "value-proposition-canvas": { name: "Канва ціннісної пропозиції", alt: ["Value Proposition Canvas"] },
  "user-retention": { name: "Утримання користувачів (User Retention)", alt: ["User Retention"] },
  "product-qualified-lead-pql": { name: "Кваліфікований продуктом лід (PQL)", alt: ["PQL", "Product-Qualified Lead"] },
  "ai-unit-economics": { name: "Одинична економіка ШІ (AI Unit Economics)", alt: ["AI Unit Economics"] },
  "cac-payback-period": { name: "Період окупності CAC", alt: ["CAC Payback Period"] },
  "contribution-margin": { name: "Маржинальний прибуток (Contribution Margin)", alt: ["Contribution Margin"] },
  "cost-to-serve": { name: "Вартість обслуговування (Cost to Serve)", alt: ["Cost to Serve"] },
  "customer-acquisition-cost-cac": { name: "Вартість залучення клієнта (CAC)", alt: ["CAC", "Customer Acquisition Cost"] },
  "customer-lifetime-value-ltv": { name: "Довічна цінність клієнта (LTV)", alt: ["LTV", "Customer Lifetime Value"] },
  "gross-margin": { name: "Валова маржа (Gross Margin)", alt: ["Gross Margin"] },
  "net-revenue-retention-nrr": { name: "Чисте утримання виторгу (NRR)", alt: ["NRR", "Net Revenue Retention"] },
  "outcome-based-pricing": { name: "Ціноутворення на основі результатів", alt: ["Outcome-Based Pricing"] },
  "pricing-metric": { name: "Цінова метрика (Pricing Metric)", alt: ["Pricing Metric"] },
  "unit-economics": { name: "Одинична економіка (Unit Economics)", alt: ["Unit Economics"] },
  "usage-based-pricing": { name: "Ціноутворення на основі споживання", alt: ["Usage-Based Pricing"] }
};

// Helper to rewrite markdown internal links to /uk/glossary/
function rewriteMarkdownLinksToUk(md: string): string {
  if (!md) return '';
  return md
    .replace(/https:\/\/lexkonovalov\.com\/glossary\//g, 'https://lexkonovalov.com/uk/glossary/')
    .replace(/(?<!\/uk)\/glossary\//g, '/uk/glossary/')
    .replace(/\/uk\/uk\//g, '/uk/');
}

// Translate common article headings
function translateMarkdownHeadings(md: string): string {
  if (!md) return '';
  return md
    .replace(/^## Related terms/gmi, '## Пов\'язані терміни')
    .replace(/^## Sources/gmi, '## Джерела')
    .replace(/^## References/gmi, '## Джерела та посилання')
    .replace(/^## Overview/gmi, '## Загальний огляд')
    .replace(/^## Summary/gmi, '## Підсумок')
    .replace(/^## Decision table/gmi, '## Таблиця прийняття рішень')
    .replace(/^## Best practices/gmi, '## Найкращі інженерні практики');
}

// Generate localized structuredDataGraph
function localizeStructuredDataGraph(graph: any[], termNameUk: string, slug: string, descUk: string): any[] {
  if (!graph || graph.length === 0) return [];
  const canonicalUk = slug === 'ooux' 
    ? 'https://lexkonovalov.com/uk/glossary/ooux/'
    : (slug === 'ooux-worked-example' ? 'https://lexkonovalov.com/uk/glossary/ooux-worked-example.html' : `https://lexkonovalov.com/uk/glossary/${slug}.html`);

  return graph.map(node => {
    const copy = { ...node };
    if (copy.url) {
      copy.url = copy.url.replace('https://lexkonovalov.com/glossary/', 'https://lexkonovalov.com/uk/glossary/');
    }
    if (copy['@id']) {
      copy['@id'] = copy['@id'].replace('https://lexkonovalov.com/glossary/', 'https://lexkonovalov.com/uk/glossary/');
    }
    if (copy['@type'] === 'DefinedTerm') {
      copy.name = termNameUk;
      copy.description = descUk;
      copy.inLanguage = "uk-UA";
      if (copy.inDefinedTermSet) {
        copy.inDefinedTermSet = {
          "@type": "DefinedTermSet",
          "@id": "https://lexkonovalov.com/uk/glossary/#terms",
          "name": "Словник продуктового дизайну",
          "url": "https://lexkonovalov.com/uk/glossary/",
          "inLanguage": "uk-UA"
        };
      }
    }
    if (copy['@type'] === 'WebPage') {
      copy.name = `${termNameUk} | Словник продуктового дизайну`;
      copy.description = descUk;
      copy.inLanguage = "uk-UA";
    }
    if (copy['@type'] === 'BreadcrumbList' && Array.isArray(copy.itemListElement)) {
      copy.itemListElement = copy.itemListElement.map((item: any) => {
        if (item.position === 1) {
          return { ...item, name: "Головна" };
        }
        if (item.position === 2) {
          return { ...item, name: "Словник продуктового дизайну", item: "https://lexkonovalov.com/uk/glossary/" };
        }
        if (item.position === 3) {
          return { ...item, name: termNameUk, item: canonicalUk };
        }
        return item;
      });
    }
    return copy;
  });
}

console.log('Loading translated definitions from batch outputs...');
const definitionsUk: Record<string, string> = {};
for (let i = 1; i <= 4; i++) {
  const p = path.resolve(`scripts/translations/output_${i}.json`);
  if (fs.existsSync(p)) {
    const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
    for (const [slug, item] of Object.entries(data)) {
      definitionsUk[slug] = (item as any).definitionUk;
    }
  }
}
console.log(`Loaded ${Object.keys(definitionsUk).length} authoritative Ukrainian definitions.`);

console.log('Generating Ukrainian glossary data for 176 terms and 2 supporting pages...');

// Translate terms
const localizedTerms: GlossaryTerm[] = glossaryTerms.map(term => {
  const naming = TERM_NAMES_UK[term.slug] || { name: term.name, alt: term.alternateName };
  const catUk = CATEGORY_MAP[term.category] || term.category;
  const secCatUk = term.secondaryCategory ? (CATEGORY_MAP[term.secondaryCategory] || term.secondaryCategory) : undefined;
  const canonicalUk = `https://lexkonovalov.com/uk/glossary/${term.slug}.html`;

  const defUk = definitionsUk[term.slug] || term.definition;

  let contentMd = term.contentMarkdown ? rewriteMarkdownLinksToUk(term.contentMarkdown) : '';
  contentMd = translateMarkdownHeadings(contentMd);

  // Replace H1 and intro definition paragraph in Markdown
  contentMd = contentMd.replace(/^#\s+.+$/m, `# ${naming.name}`);
  if (term.definition && defUk) {
    contentMd = contentMd.replace(term.definition, defUk);
  }

  // Localized description & SEO
  const seoTitleUk = `${naming.name} | Словник продуктового дизайну — Lex Konovalov`;
  const seoDescUk = defUk;

  const graphUk = localizeStructuredDataGraph(term.structuredDataGraph || [], naming.name, term.slug, defUk);

  return {
    ...term,
    name: naming.name,
    alternateName: naming.alt || term.alternateName,
    category: catUk,
    secondaryCategory: secCatUk,
    definition: defUk,
    purpose: defUk,
    canonicalUrl: canonicalUk,
    seoTitle: seoTitleUk,
    seoDescription: seoDescUk,
    contentMarkdown: contentMd,
    structuredDataGraph: graphUk
  };
});

// Translate supporting pages
const localizedSupporting: SupportingPage[] = supportingPages.map(page => {
  let nameUk = page.name;
  let titleUk = page.title;
  let descUk = page.description;
  let canonicalUk = page.canonicalUrl.replace('https://lexkonovalov.com/glossary/', 'https://lexkonovalov.com/uk/glossary/');

  if (page.slug === 'ooux') {
    nameUk = "Об'єктно-орієнтований UX (OOUX)";
    titleUk = "Об'єктно-орієнтований UX (OOUX) та фреймворк ORCA | Словник продуктового дизайну";
    descUk = "Вичерпний посібник з методології Object-Oriented UX (OOUX) та 4-етапного фреймворку ORCA. Дізнайтеся, як проектувати цифрові продукти навколо ментальних моделей користувачів.";
  } else if (page.slug === 'ooux-worked-example') {
    nameUk = "Практичний приклад застосування OOUX";
    titleUk = "Практичний приклад застосування OOUX: Робочий процес бронювання | Lex Konovalov";
    descUk = "Наскрізний практичний приклад застосування 4 раундів фреймворку ORCA до робочого процесу бронювання подорожей.";
  }

  let contentMd = page.contentMarkdown ? rewriteMarkdownLinksToUk(page.contentMarkdown) : '';
  contentMd = translateMarkdownHeadings(contentMd);
  contentMd = contentMd.replace(/^#\s+.+$/m, `# ${nameUk}`);

  const catUk = page.category ? (CATEGORY_MAP[page.category] || page.category) : undefined;
  const secCatUk = page.secondaryCategory ? (CATEGORY_MAP[page.secondaryCategory] || page.secondaryCategory) : undefined;
  const graphUk = localizeStructuredDataGraph(page.structuredDataGraph || [], nameUk, page.slug, descUk);

  return {
    ...page,
    name: nameUk,
    title: titleUk,
    description: descUk,
    canonicalUrl: canonicalUk,
    category: catUk,
    secondaryCategory: secCatUk,
    contentMarkdown: contentMd,
    structuredDataGraph: graphUk
  };
});

const fileContent = `// src/data/glossaryData.uk.ts
// Авторитетна українська локалізація канонічного глоссарію продуктового дизайну (${localizedTerms.length} термінів)

import { GlossaryCategory, GlossaryTerm, SupportingPage } from './glossaryData';

export const glossaryCategoriesUk: GlossaryCategory[] = ${JSON.stringify(CATEGORIES_UK, null, 2)};

export const supportingPagesUk: SupportingPage[] = ${JSON.stringify(localizedSupporting, null, 2)};

export const glossaryTermsUk: GlossaryTerm[] = ${JSON.stringify(localizedTerms, null, 2)};
`;

const outPath = path.resolve('src/data/glossaryData.uk.ts');
fs.writeFileSync(outPath, fileContent, 'utf-8');
console.log(`Generated ${outPath} with ${localizedTerms.length} terms and ${localizedSupporting.length} supporting pages!`);
