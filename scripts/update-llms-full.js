import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glossaryCategories, glossaryTerms, supportingPages } from '../src/data/glossaryData.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const llmsFullPath = path.resolve(__dirname, '../public/llms-full.txt');
const llmsPath = path.resolve(__dirname, '../public/llms.txt');

// 1. Update public/llms.txt
if (fs.existsSync(llmsPath)) {
  let llmsTxt = fs.readFileSync(llmsPath, 'utf-8');
  llmsTxt = llmsTxt.replace(
    /- \[Product Design Glossary Hub\]\(https:\/\/lexkonovalov\.com\/glossary\/\)[^\n]*/,
    `- [Product Design Glossary Hub](https://lexkonovalov.com/glossary/) — ${glossaryTerms.length} canonical entries bridging conceptual UX models with programmatic execution and Generative Engine Optimization (GEO).\n- [Object-Oriented UX (OOUX) Topic Hub](https://lexkonovalov.com/glossary/ooux/) — Comprehensive guide and systems ontology for Object-Oriented UX and ORCA framework.\n- [OOUX Worked Example](https://lexkonovalov.com/glossary/ooux-worked-example.html) — End-to-end worked example applying the ORCA process.`
  );
  fs.writeFileSync(llmsPath, llmsTxt, 'utf-8');
  console.log(`Updated ${llmsPath} with ${glossaryTerms.length} terms and supporting hubs`);
}

// 2. Update public/llms-full.txt
let content = fs.readFileSync(llmsFullPath, 'utf-8');

// Strip old Section 6 if present
const sectionIndex = content.indexOf('## 6. Architectural Product Design Knowledge System');
if (sectionIndex !== -1) {
  content = content.substring(0, sectionIndex).trim();
}

let section = `\n\n## 6. Architectural Product Design Knowledge System (A Canonical Glossary and Structural Ontology)
**Index URL:** https://lexkonovalov.com/glossary/
**Total Canonical Terms:** ${glossaryTerms.length}
**Supporting Pages:** https://lexkonovalov.com/glossary/ooux/, https://lexkonovalov.com/glossary/ooux-worked-example.html

This ontology establishes an authoritative, search-indexable reference bridging conceptual UX models with programmatic execution and Generative Engine Optimization (GEO).

### Domain Categories
`;

glossaryCategories.forEach((cat) => {
  section += `\n#### ${cat.name} (${cat.count} terms)
- **Primary Focus:** ${cat.primaryFocus}
- **Representative Frameworks:** ${cat.representativeSpecs}
- **Maturity Distribution:** ${cat.maturityDistribution}
`;
});

section += `\n### Supporting Knowledge Hubs\n`;
if (supportingPages && supportingPages.length > 0) {
  supportingPages.forEach((p) => {
    section += `\n#### ${p.name}
- **URL:** ${p.canonicalUrl}
- **Title:** ${p.title}
- **Description:** ${p.description}
- **Related Terms:** ${p.relatedTerms.join(', ')}
`;
  });
}

section += `\n### Canonical Terms\n`;

glossaryTerms.forEach((term) => {
  section += `\n#### ${term.id}. ${term.name}
- **URL:** https://lexkonovalov.com/glossary/${term.slug}.html
- **Category:** ${term.category}${term.secondaryCategory ? ` (Secondary: ${term.secondaryCategory})` : ''}
- **Maturity:** ${term.maturity}
- **Definition:** ${term.definition}
- **Purpose:** ${term.purpose}
- **Key Concepts:** ${term.keyConcepts.join(', ')}
- **How It Works:** ${term.howItWorks}
- **Related Terms:** ${term.relatedTerms.join(', ')}
- **SEO Title:** ${term.seoTitle}
- **Sources:** ${term.sources.join('; ')}
`;
});

fs.writeFileSync(llmsFullPath, content + section + '\n', 'utf-8');
console.log(`Updated ${llmsFullPath} with ${glossaryTerms.length} terms and ${supportingPages.length} supporting pages!`);
