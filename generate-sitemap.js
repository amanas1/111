import fs from 'fs';
const seoData = JSON.parse(fs.readFileSync('./src/data/seo-data.json', 'utf8'));


const BASE_URL = 'https://mana.kz';
const currentDate = new Date().toISOString().split('T')[0];

const generateSitemap = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add Homepage
  xml += `  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>\n`;

  // Add all service + district combinations (150+ pages)
  seoData.services.forEach(service => {
    seoData.districts.forEach(district => {
      xml += `  <url>
    <loc>${BASE_URL}/uslugi/${service.id}/${district.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
    });
  });

  xml += '</urlset>';

  fs.writeFileSync('./public/sitemap.xml', xml);
  console.log('✅ Sitemap generated successfully with', seoData.services.length * seoData.districts.length + 1, 'URLs');
};

generateSitemap();
