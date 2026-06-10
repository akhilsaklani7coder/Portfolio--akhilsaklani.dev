/**
 * Post-build Sitemap & Robots.txt Generator
 * 
 * Generates sitemap.xml and robots.txt in the dist/ directory after
 * Vite build completes. This ensures the production bundle always
 * has fresh, up-to-date SEO files.
 * 
 * Usage: node scripts/generate-sitemap.js
 * (automatically run via the "build" npm script)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://akhilsaklani.is-a.dev';
const DIST_DIR = path.resolve(__dirname, '..', 'dist');

// All public pages/routes to include in the sitemap
const pages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/projects', changefreq: 'weekly', priority: '0.8' },
];

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  const urlEntries = pages
    .map(
      (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

  return sitemap;
}

function generateRobotsTxt() {
  return `# robots.txt for ${SITE_URL}
# Generated automatically during build

User-agent: *
Allow: /
Disallow: /assets/

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

// Ensure dist directory exists (it should after vite build)
if (!fs.existsSync(DIST_DIR)) {
  console.error('Error: dist/ directory not found. Run vite build first.');
  process.exit(1);
}

// Write sitemap.xml
const sitemapContent = generateSitemap();
fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapContent, 'utf-8');
console.log('✓ Generated dist/sitemap.xml');

// Write robots.txt
const robotsContent = generateRobotsTxt();
fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsContent, 'utf-8');
console.log('✓ Generated dist/robots.txt');

console.log(`✓ Sitemap includes ${pages.length} pages for ${SITE_URL}`);
