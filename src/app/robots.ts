import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return { rules: [{ userAgent: '*', allow: '/' }], sitemap: 'https://kaustubh-sen.vercel.app/sitemap.xml' }; }
