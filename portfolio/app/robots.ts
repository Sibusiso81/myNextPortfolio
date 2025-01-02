import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/Auth/SingIn', '/Auth/Login', '/Auth/Error'],
    },
    sitemap: 'https://acme.com/sitemap.xml',
  }
}