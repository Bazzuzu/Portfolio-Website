import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glossaryCategories, glossaryTerms } from '../src/data/glossaryData.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const llmsFullPath = path.resolve(__dirname, '../public/llms-full.txt');

let content = fs.readFileSync(llmsFullPath, 'utf-8');

if (!content.includes('## 6. Architectural Product Design Knowledge System')) {
  let section = `\n\n## 6. Architectural Product Design Knowledge System (A Canonical Glossary and Structural Ontology)
**Index URL:** https://lexkonovalov.com/glossary/

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

  fs.writeFileSync(llmsFullPath, content + section, 'utf-8');
  console.log('Appended glossary to public/llms-full.txt');
} else {
  console.log('Glossary already in public/llms-full.txt');
}
