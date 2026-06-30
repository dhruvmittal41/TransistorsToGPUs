/**
 * Sitemap Generator Script
 * Run this script to automatically generate sitemap.xml from course structure
 * 
 * Usage: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'https://dhruvmittal41.github.io/TransistorsToGPUs';
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');
const COURSE_STRUCTURE_PATH = path.join(__dirname, '../src/data/navigation/courseStructure.ts');

// Read and parse course structure
function getCourseStructure() {
  try {
    const content = fs.readFileSync(COURSE_STRUCTURE_PATH, 'utf-8');
    
    // This is a simple parser - in production you might want to use babel or typescript compiler
    // For now, we'll use regex to extract the structure
    const topicRegex = /{\s*id:\s*["']([^"']+)["'][\s\S]*?slug:\s*["']([^"']+)["'][\s\S]*?title:\s*["']([^"']+)["'][\s\S]*?order:\s*(\d+)[\s\S]*?subtopics:\s*\[([\s\S]*?)\]/g;
    const subtopicRegex = /{\s*id:\s*["']([^"']+)["'][\s\S]*?slug:\s*["']([^"']+)["'][\s\S]*?title:\s*["']([^"']+)["'][\s\S]*?order:\s*(\d+)/g;
    
    const topics = [];
    let topicMatch;
    
    while ((topicMatch = topicRegex.exec(content)) !== null) {
      const [, id, slug, title, order, subtopicsStr] = topicMatch;
      const subtopics = [];
      let subtopicMatch;
      
      while ((subtopicMatch = subtopicRegex.exec(subtopicsStr)) !== null) {
        const [, subId, subSlug, subTitle, subOrder] = subtopicMatch;
        subtopics.push({ id: subId, slug: subSlug, title: subTitle, order: parseInt(subOrder) });
      }
      
      topics.push({ id, slug, title, order: parseInt(order), subtopics });
    }
    
    return topics;
  } catch (error) {
    console.error('Error reading course structure:', error.message);
    return [];
  }
}

// Generate XML sitemap
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  const topics = getCourseStructure();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Static pages
  const staticPages = [
    { loc: BASE_URL + '/', priority: '1.0', changefreq: 'weekly' },
    { loc: BASE_URL + '/#/courses', priority: '0.9', changefreq: 'weekly' },
    { loc: BASE_URL + '/#/about', priority: '0.5', changefreq: 'monthly' },
    { loc: BASE_URL + '/#/research', priority: '0.7', changefreq: 'monthly' },
  ];
  
  staticPages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${page.loc}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n\n';
  });
  
  // Dynamic topic pages
  topics.forEach(topic => {
    if (topic.subtopics && topic.subtopics.length > 0) {
      topic.subtopics.forEach(subtopic => {
        xml += '  <url>\n';
        xml += `    <loc>${BASE_URL}/#/topic/${topic.slug}/${subtopic.slug}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += '    <changefreq>monthly</changefreq>\n';
        xml += '    <priority>0.8</priority>\n';
        xml += '  </url>\n\n';
      });
    }
  });
  
  xml += '</urlset>\n';
  
  return xml;
}

// Main execution
try {
  console.log('🔍 Reading course structure...');
  const sitemap = generateSitemap();
  
  console.log('✍️  Writing sitemap.xml...');
  fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf-8');
  
  console.log('✅ Sitemap generated successfully!');
  console.log(`📍 Location: ${SITEMAP_PATH}`);
  
  // Count URLs
  const urlCount = (sitemap.match(/<url>/g) || []).length;
  console.log(`📊 Total URLs: ${urlCount}`);
  
} catch (error) {
  console.error('❌ Error generating sitemap:', error.message);
  process.exit(1);
}
