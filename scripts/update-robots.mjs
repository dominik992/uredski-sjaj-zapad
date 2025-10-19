#!/usr/bin/env node
// Ensures robots.txt in dist/ exists and contains a Sitemap: reference
import fs from 'fs';
import path from 'path';

const distDir = path.resolve(process.cwd(), 'dist');
const robotsPath = path.join(distDir, 'robots.txt');
const sitemapUrl = '/sitemap.xml';

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function main() {
  ensureDir(distDir);

  let content = '';
  if (fs.existsSync(robotsPath)) {
    content = fs.readFileSync(robotsPath, 'utf8');
  } else {
    // default permissive robots
    content = 'User-agent: *\nAllow: /\n';
  }

  // Normalize line endings
  const lines = content.split(/\r?\n/).filter(Boolean);

  // Remove existing Sitemap lines to avoid duplicates
  const filtered = lines.filter((l) => !/^\s*Sitemap:\s*/i.test(l));
  filtered.push(`Sitemap: ${sitemapUrl}`);

  const next = filtered.join('\n') + '\n';
  fs.writeFileSync(robotsPath, next, 'utf8');
  console.log(`robots.txt updated at ${robotsPath}`);
}

main();


