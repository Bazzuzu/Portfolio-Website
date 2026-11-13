// src/utils/markdownRenderer.ts
// Pure lightweight markdown to semantic HTML parser for glossary articles

export function renderMarkdownToHtml(markdown: string): string {
  if (!markdown) return '';

  const lines = markdown.trim().split('\n');
  const htmlParts: string[] = [];
  let inTable = false;
  let tableHeader: string[] = [];
  let tableRows: string[][] = [];
  let inOl = false;
  let olItems: string[] = [];
  let inUl = false;
  let ulItems: string[] = [];
  let inCodeBlock = false;
  let codeBlockLang = '';
  let codeBlockLines: string[] = [];
  let sectionOpen = false;

  const flushCodeBlock = () => {
    if (!inCodeBlock) return;
    const escapedCode = codeBlockLines
      .join('\n')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    htmlParts.push(
      `<div class="glossary-code-block-wrapper">\n<pre class="glossary-code-block"><code${
        codeBlockLang ? ` class="language-${codeBlockLang}"` : ''
      }>${escapedCode}</code></pre>\n</div>\n`
    );
    inCodeBlock = false;
    codeBlockLang = '';
    codeBlockLines = [];
  };

  const flushTable = () => {
    if (!inTable) return;
    let tableHtml = '<div class="glossary-table-wrapper">\n<table class="glossary-table">\n';
    if (tableHeader.length > 0) {
      tableHtml += '<thead>\n<tr>\n' + tableHeader.map(th => `<th>${formatInline(th)}</th>`).join('\n') + '\n</tr>\n</thead>\n';
    }
    if (tableRows.length > 0) {
      tableHtml += '<tbody>\n';
      for (const row of tableRows) {
        tableHtml += '<tr>\n' + row.map(td => `<td>${formatInline(td)}</td>`).join('\n') + '\n</tr>\n';
      }
      tableHtml += '</tbody>\n';
    }
    tableHtml += '</table>\n</div>\n';
    htmlParts.push(tableHtml);
    inTable = false;
    tableHeader = [];
    tableRows = [];
  };

  const flushOl = () => {
    if (!inOl) return;
    htmlParts.push('<ol class="glossary-term-ol">\n' + olItems.map(item => `<li>${formatInline(item)}</li>`).join('\n') + '\n</ol>\n');
    inOl = false;
    olItems = [];
  };

  const flushUl = () => {
    if (!inUl) return;
    htmlParts.push('<ul class="glossary-term-ul">\n' + ulItems.map(item => `<li>${formatInline(item)}</li>`).join('\n') + '\n</ul>\n');
    inUl = false;
    ulItems = [];
  };

  const flushListsAndTables = () => {
    flushTable();
    flushOl();
    flushUl();
  };

  function formatInline(text: string): string {
    return text
      // bold
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      // italic
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      // inline code
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // links [text](url)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, linkText, url) => {
        const isExternal = url.startsWith('http://') || url.startsWith('https://');
        if (isExternal) {
          return `<a href="${url}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
        }
        return `<a href="${url}">${linkText}</a>`;
      });
  }

  // Skip leading H1 if present because the page template hero header already renders the single authoritative H1
  let startIndex = 0;
  if (lines[0] && lines[0].startsWith('# ')) {
    startIndex = 1;
  }

  for (let i = startIndex; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    // Check code blocks first so empty lines inside fenced blocks are preserved
    if (inCodeBlock) {
      if (line.startsWith('```')) {
        flushCodeBlock();
      } else {
        codeBlockLines.push(rawLine);
      }
      continue;
    }

    if (line.startsWith('```')) {
      flushListsAndTables();
      inCodeBlock = true;
      codeBlockLang = line.slice(3).trim();
      codeBlockLines = [];
      continue;
    }

    if (!line) {
      flushListsAndTables();
      continue;
    }

    // Heading 2: ## ...
    if (line.startsWith('## ')) {
      flushListsAndTables();
      if (sectionOpen) {
        htmlParts.push('</section>\n');
        sectionOpen = false;
      }
      const title = line.replace(/^##\s+/, '');
      const sectionId = 'section-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      htmlParts.push(`<section class="glossary-term-section" aria-labelledby="${sectionId}">\n<h2 id="${sectionId}" class="glossary-term-section__title">${formatInline(title)}</h2>\n`);
      sectionOpen = true;
      continue;
    }

    // Table row: | ... |
    if (line.startsWith('|') && line.endsWith('|')) {
      if (/^\|[\s\-:|]+\|$/.test(line)) {
        continue;
      }
      const cells = line.slice(1, -1).split('|').map(c => c.trim());
      if (!inTable) {
        inTable = true;
        tableHeader = cells;
      } else {
        tableRows.push(cells);
      }
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Ordered list item: 1. ...
    const olMatch = line.match(/^\d+\.\s+(.*)$/);
    if (olMatch) {
      if (!inUl && !inOl) {
        flushListsAndTables();
        inOl = true;
      }
      olItems.push(olMatch[1]);
      continue;
    } else if (inOl) {
      flushOl();
    }

    // Unordered list item: - ...
    const ulMatch = line.match(/^-\s+(.*)$/);
    if (ulMatch) {
      if (!inOl && !inUl) {
        flushListsAndTables();
        inUl = true;
      }
      ulItems.push(ulMatch[1]);
      continue;
    } else if (inUl) {
      flushUl();
    }

    // Standard paragraph
    htmlParts.push(`<p class="glossary-term-section__text">${formatInline(line)}</p>\n`);
  }

  flushCodeBlock();
  flushListsAndTables();
  if (sectionOpen) {
    htmlParts.push('</section>\n');
  }

  return htmlParts.join('');
}
