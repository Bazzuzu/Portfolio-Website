import fs from 'fs';
import path from 'path';
import { glossaryTerms } from '../src/data/glossaryData.ts';

export interface ParsedItem {
  file: string;
  isSupportingPage: boolean;
  slug: string;
  url: string;
  canonical: string;
  title: string;
  description: string;
  name: string;
  alternateName?: string | string[];
  category: string;
  secondaryCategory?: string;
  maturity: "Established" | "Emerging" | "Proprietary / Framework-Specific" | "Coined / Interpretive";
  definition: string;
  purpose: string;
  keyConcepts: string[];
  howItWorks: string;
  relatedTerms: string[];
  sources: string[];
  contentMarkdown: string;
  structuredDataGraph: any[];
}

export function parseAllPublicationDrafts(): { terms: ParsedItem[]; supporting: ParsedItem[] } {
  const pubDir = path.resolve('publication');
  const files = fs.readdirSync(pubDir).filter(f => f.endsWith('.md') && f !== 'README.md');

  const terms: ParsedItem[] = [];
  const supporting: ParsedItem[] = [];
  const existingMap = new Map();
  glossaryTerms.forEach(t => existingMap.set(t.slug, t));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(pubDir, file), 'utf8');
    const fmMatch = raw.match(/^---\s*([\s\S]*?)\s*---/);
    if (!fmMatch) {
      throw new Error(`File ${file} is missing front matter!`);
    }
    const fm = fmMatch[1];
    const body = raw.split(/^---\s*$/m).slice(2).join('---').trim();

    // Extract front matter fields
    const url = (fm.match(/url:\s*["\x27]([^"\x27]+)["\x27]/) || [])[1] || '';
    const canonical = (fm.match(/canonical:\s*["\x27]([^"\x27]+)["\x27]/) || [])[1] || url;
    const title = (fm.match(/title:\s*["\x27]([^"\x27]+)["\x27]/) || [])[1] || '';
    const description = (fm.match(/description:\s*["\x27]([^"\x27]+)["\x27]/) || [])[1] || '';

    // Extract structured_data
    const sdMatch = fm.match(/structured_data:\s*\|\s*([\s\S]*?)(?=\n[a-z_]+:|$)/);
    if (!sdMatch) {
      throw new Error(`File ${file} is missing structured_data!`);
    }
    const sdJson = JSON.parse(sdMatch[1].trim());
    const graph: any[] = sdJson['@graph'] || [];

    // Check if supporting page
    const isSupporting = file === 'ooux-topic-hub-publication-draft.md' || file === 'ooux-worked-example-publication-draft.md';

    let slug = '';
    if (file === 'ooux-topic-hub-publication-draft.md') {
      slug = 'ooux';
    } else if (file === 'ooux-worked-example-publication-draft.md') {
      slug = 'ooux-worked-example';
    } else {
      slug = url.replace('https://lexkonovalov.com/glossary/', '').replace(/\.html$/, '').replace(/\/$/, '');
    }

    // Extract name from DefinedTerm node or H1
    let name = '';
    const definedTermNode = graph.find(n => n['@type'] === 'DefinedTerm');
    if (definedTermNode && definedTermNode.name) {
      name = definedTermNode.name;
    } else {
      const h1Match = body.match(/^#\s+(.+)$/m);
      name = h1Match ? h1Match[1].trim() : title.split('|')[0].split('—')[0].split(':')[0].trim();
    }

    // Extract alternateName if present
    let alternateName: string | string[] | undefined = undefined;
    if (definedTermNode && definedTermNode.alternateName) {
      alternateName = definedTermNode.alternateName;
    }

    // Extract categories
    let category = '';
    let secondaryCategory: string | undefined = undefined;

    // 1. YAML array
    const catArrayMatch = fm.match(/categories:\s*\[(.*?)\]/);
    if (catArrayMatch) {
      const cats = catArrayMatch[1].split(',').map(c => c.replace(/["\x27]/g, '').trim());
      category = cats[0] || '';
      secondaryCategory = cats[1] || undefined;
    }

    // 2. Publishing instructions matching
    const piMatch = fm.match(/publishing_instructions:\s*\|\s*([\s\S]*?)(?=\n[a-z_]+:|$)/);
    const pi = piMatch ? piMatch[1] : '';

    if (!category) {
      const preserveMatch = pi.match(/Preserve\s+the\s+existing\s+categories\s+([^.\n]+)/i);
      if (preserveMatch) {
        const parts = preserveMatch[1].split(/,| and /i).map(s => s.trim()).filter(Boolean);
        category = parts[0] || '';
        secondaryCategory = parts[1] || undefined;
      }
    }

    if (!category) {
      const regUnderMatch = pi.match(/Register\s+(?:this entry in the glossary index\s+)?under\s+([^.\n]+)/i);
      if (regUnderMatch) {
        const parts = regUnderMatch[1].split(/\s+and\s+/i).map(s => s.trim().replace(/^the\s+/i, ''));
        category = parts[0] || '';
        secondaryCategory = parts[1] || undefined;
      }
    }

    if (!category) {
      const regInMatch = pi.match(/Register\s+[^.\n]+?\s+in\s+([^.\n]+?)(?:\s+using|\.|\n)/i);
      if (regInMatch) {
        category = regInMatch[1].trim().replace(/^the\s+/i, '').replace(/\s+category$/i, '');
      }
    }

    if (!category && existingMap.has(slug)) {
      category = existingMap.get(slug).category;
      if (!secondaryCategory) secondaryCategory = existingMap.get(slug).secondaryCategory;
    }

    // Clean up category strings
    const normalizeCat = (catStr: string): string => {
      if (!catStr) return '';
      let c = catStr.replace(/^the\s+/i, '').replace(/\s+category$/i, '').trim();
      if (c.includes('UX & Product Architecture')) return 'UX & Product Architecture';
      if (c.includes('Design Systems & Engineering') || c.includes('Design Systems and Engineering')) return 'Design Systems & Engineering';
      if (c.includes('Product Strategy & Growth') || c.includes('Product Strategy and Growth')) return 'Product Strategy & Growth';
      if (c.includes('AI & Agentic Systems') || c.includes('AI and Agentic Systems')) return 'AI & Agentic Systems';
      return c;
    };

    category = normalizeCat(category);
    if (secondaryCategory) {
      secondaryCategory = normalizeCat(secondaryCategory);
      if (secondaryCategory === category) secondaryCategory = undefined;
    }

    // Maturity level
    let maturity: "Established" | "Emerging" | "Proprietary / Framework-Specific" | "Coined / Interpretive" = "Established";
    if (pi.includes("Proprietary / Framework-Specific") || pi.includes("Proprietary")) {
      maturity = "Proprietary / Framework-Specific";
    } else if (pi.includes("Emerging")) {
      maturity = "Emerging";
    } else if (pi.includes("Coined / Interpretive")) {
      maturity = "Coined / Interpretive";
    }

    // Extract definition (first non-empty paragraph after H1)
    let definition = '';
    if (definedTermNode && definedTermNode.description) {
      definition = definedTermNode.description;
    } else {
      const lines = body.split('\n');
      let foundH1 = false;
      for (const line of lines) {
        if (line.startsWith('# ')) {
          foundH1 = true;
          continue;
        }
        if (foundH1 && line.trim() && !line.startsWith('#') && !line.startsWith('![')) {
          definition = line.trim();
          break;
        }
      }
    }

    // Extract purpose & howItWorks from body or construct from text
    let purpose = definition;
    let howItWorks = definition;
    const keyConcepts: string[] = [];

    // Extract keyConcepts from H2 headers
    const h2Matches = [...body.matchAll(/^##\s+(.+)$/gm)];
    for (const h2 of h2Matches) {
      const h2Text = h2[1].trim();
      if (!h2Text.toLowerCase().includes('related') && !h2Text.toLowerCase().includes('sources')) {
        keyConcepts.push(h2Text);
      }
    }

    // Extract Related terms from Markdown
    const relatedTerms: string[] = [];
    const relatedSection = body.match(/## Related terms\s*([\s\S]*?)(?=\n##|$)/i);
    if (relatedSection) {
      const relMatches = [...relatedSection[1].matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
      for (const rm of relMatches) {
        relatedTerms.push(rm[1].trim());
      }
    }

    // Extract Sources from Markdown
    const sources: string[] = [];
    const sourcesSection = body.match(/## Sources\s*([\s\S]*?)(?=\n##|$)/i);
    if (sourcesSection) {
      const srcMatches = [...sourcesSection[1].matchAll(/^-\s+\[?([^\]\n]+)\]?(?:\(([^)]+)\))?/gm)];
      for (const sm of srcMatches) {
        const title = sm[1].trim();
        const srcUrl = sm[2] ? sm[2].trim() : '';
        if (srcUrl) {
          sources.push(`${title} (${srcUrl})`);
        } else {
          sources.push(title);
        }
      }
    }
    // Also include citation URLs if missing
    const webPageNode = graph.find(n => n['@type'] === 'WebPage');
    if (sources.length === 0 && webPageNode && webPageNode.citation) {
      const cites = Array.isArray(webPageNode.citation) ? webPageNode.citation : [webPageNode.citation];
      sources.push(...cites);
    }

    const item: ParsedItem = {
      file,
      isSupportingPage: isSupporting,
      slug,
      url,
      canonical,
      title,
      description,
      name,
      alternateName,
      category,
      secondaryCategory,
      maturity,
      definition,
      purpose,
      keyConcepts: keyConcepts.slice(0, 5),
      howItWorks,
      relatedTerms,
      sources,
      contentMarkdown: body,
      structuredDataGraph: graph
    };

    if (isSupporting) {
      supporting.push(item);
    } else {
      terms.push(item);
    }
  }

  return { terms, supporting };
}
