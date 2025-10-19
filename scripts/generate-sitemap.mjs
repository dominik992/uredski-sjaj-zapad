#!/usr/bin/env node
// Generates sitemap.xml into dist/ based on known routes
import fs from 'fs';
import path from 'path';

const SITE_URL = process.env.SITE_URL || 'https://www.uredskisjajzapad.hr';
const distDir = path.resolve(process.cwd(), 'dist');
const outPath = path.join(distDir, 'sitemap.xml');

// Parse routes from src/App.tsx using a conservative regex
const appPath = path.resolve(process.cwd(), 'src', 'App.tsx');
let routes = ['/'];
try {
  const appCode = fs.readFileSync(appPath, 'utf8');
  // Match patterns like: <Route path="/something" element={<... />} />
  const routeRegex = /<Route\s+path=\"([^\"]+)\"/g;
  const found = new Set();
  let m;
  while ((m = routeRegex.exec(appCode)) !== null) {
    const p = m[1];
    if (typeof p === 'string' && p.trim()) {
      found.add(p.trim());
    }
  }
  if (found.size > 0) {
    routes = Array.from(found);
  }
} catch (e) {
  console.warn('Could not parse routes from src/App.tsx, falling back to ["/"]');
}

/**
 * Generates a minimal sitemap.xml content.
 */
function generateSitemapXml(baseUrl, paths) {
  const urlset = paths
    .map((p) => {
      const loc = new URL(p.replace(/\/+/g, '/'), baseUrl).toString();
      return `    <url>\n      <loc>${loc}</loc>\n      <changefreq>weekly</changefreq>\n      <priority>0.8</priority>\n    </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function main() {
  ensureDir(distDir);
  const xml = generateSitemapXml(SITE_URL, routes);
  fs.writeFileSync(outPath, xml, 'utf8');
  console.log(`Sitemap written to ${outPath}`);
}

main();


