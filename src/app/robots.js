// src/app/robots.js
// Next.js generates /robots.txt automatically from this file.

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/broker/', '/api/'],
    },
    sitemap: 'https://miceandelephants.com/sitemap.xml',
  };
}
