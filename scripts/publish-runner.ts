import { execSync } from 'child_process';
import fs from 'fs';
import { executeBatch, BATCH_DEFINITIONS } from './publish-orchestrator.ts';

function runCommand(cmd: string) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

function safeGitCommit(commitMsg: string) {
  if (fs.existsSync('.git/index.lock')) {
    fs.unlinkSync('.git/index.lock');
  }
  runCommand('git add -A');
  if (fs.existsSync('.git/index.lock')) {
    fs.unlinkSync('.git/index.lock');
  }
  runCommand(`git commit -m "${commitMsg}"`);
}

async function main() {
  const batchesToRun = [3, 4, 5];

  for (const bNum of batchesToRun) {
    const bDef = BATCH_DEFINITIONS.find(b => b.batchNumber === bNum)!;
    console.log(`\n======================================================`);
    console.log(`STARTING BATCH ${bNum}: ${bDef.name}`);
    console.log(`======================================================\n`);

    // 1. Apply data updates
    const result = executeBatch(bNum);
    console.log(`Batch ${bNum} data applied:`, result);

    // 2. Generate static HTML pages and sitemap
    console.log('\nGenerating static pages...');
    runCommand('node scripts/generate-glossary-static.js');

    // 3. Update LLM context files
    console.log('\nUpdating LLM context files...');
    runCommand('node scripts/update-llms-full.js');

    // 4. Type check
    console.log('\nRunning TypeScript check...');
    runCommand('npx tsc --noEmit');

    // 5. Build
    console.log('\nBuilding project with Vite...');
    runCommand('npm run build');

    // 6. Git commit
    console.log('\nCommitting batch...');
    const commitMsg = `feat(glossary): publish batch ${bNum} - ${bDef.name} (${bDef.newTermSlugs.length} new, ${bDef.updatedSlugs.length} updated)`;
    safeGitCommit(commitMsg);

    console.log(`\nSUCCESS: Batch ${bNum} published and committed!`);
  }

  console.log(`\n======================================================`);
  console.log(`ALL BATCHES 1-5 COMPLETED SUCCESSFULLY!`);
  console.log(`======================================================\n`);
}

main().catch(err => {
  console.error('Fatal error during batch execution:', err);
  process.exit(1);
});
