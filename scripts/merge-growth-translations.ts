import fs from 'fs';
import path from 'path';
import { glossaryTermsUk } from '../src/data/glossaryData.uk.ts';

const rootDir = process.cwd();
const growthDir = path.resolve(rootDir, 'scripts/translations/growth');

console.log('Loading translated markdown files from scripts/translations/growth/...');

const translatedArticles: Record<string, string> = {};
let foundBatches = 0;

for (let i = 1; i <= 8; i++) {
  const p = path.join(growthDir, `output_${i}.json`);
  if (fs.existsSync(p)) {
    try {
      const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
      for (const [slug, md] of Object.entries(data)) {
        translatedArticles[slug] = md as string;
      }
      foundBatches++;
      console.log(`Loaded batch output_${i}.json (${Object.keys(data).length} terms)`);
    } catch (e) {
      console.error(`Error reading ${p}:`, e);
    }
  } else {
    console.warn(`Missing batch output_${i}.json`);
  }
}

console.log(`Total translated terms loaded: ${Object.keys(translatedArticles).length} across ${foundBatches} batches.`);

if (Object.keys(translatedArticles).length === 0) {
  console.log('No translations ready yet.');
  process.exit(1);
}

// Read current glossaryData.uk.ts
const glossaryUkPath = path.resolve(rootDir, 'src/data/glossaryData.uk.ts');
let fileContent = fs.readFileSync(glossaryUkPath, 'utf-8');

// Update contentMarkdown for each translated term in glossaryTermsUk
let updatedCount = 0;
const updatedTerms = glossaryTermsUk.map(term => {
  if (translatedArticles[term.slug]) {
    updatedCount++;
    return {
      ...term,
      contentMarkdown: translatedArticles[term.slug]
    };
  }
  return term;
});

console.log(`Updated ${updatedCount} terms in memory.`);

// Write back to src/data/glossaryData.uk.ts
// We preserve the categories and supporting pages, only updating glossaryTermsUk
const categoriesExport = fileContent.match(/export const glossaryCategoriesUk:.*?\];/s)?.[0];
const supportingExport = fileContent.match(/export const supportingPagesUk:.*?\];/s)?.[0];

if (!categoriesExport || !supportingExport) {
  console.error('Could not find categories or supporting pages export in glossaryData.uk.ts');
  process.exit(1);
}

const newFileContent = `import { GlossaryCategory, GlossaryTerm, SupportingPage } from './glossaryData.ts';

${categoriesExport}

export const glossaryTermsUk: GlossaryTerm[] = ${JSON.stringify(updatedTerms, null, 2)};

${supportingExport}
`;

fs.writeFileSync(glossaryUkPath, newFileContent, 'utf-8');
console.log(`Successfully updated ${glossaryUkPath} with ${updatedCount} fully translated articles!`);
