import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://my-next-portfolio-wine.vercel.app/',
      lastModified: '2025-01-01',
      changeFrequency: 'yearly',
      priority: 1,
      images: ['https://i.ibb.co/2sYc7GR/IMG-7451.png'],
    },
    {
        url: 'https://my-next-portfolio-wine.vercel.app/About',
        lastModified: '2025-01-01',
        changeFrequency: 'yearly',
        priority: 0.8,
        images: ['https://i.ibb.co/Y23gG4W/IMG-2894.jpg'],
      },
      {
        url: 'https://my-next-portfolio-wine.vercel.app/Contact',
        lastModified: '2025-01-01',
        changeFrequency: 'yearly',
        priority: 0.8,
       
      },
      {
        url: 'https://my-next-portfolio-wine.vercel.app/Auth/SignIn',
        lastModified: '2025-01-01',
        changeFrequency: 'yearly',
        priority: 0.5,
       
      },
      {
        url: 'https://my-next-portfolio-wine.vercel.app/Auth/Login',
        lastModified: '2025-01-01',
        changeFrequency: 'yearly',
        priority: 0.5,
       
      },
      {
        url: 'https://my-next-portfolio-wine.vercel.app/Auth/Error',
        lastModified: '2025-01-01',
        changeFrequency: 'yearly',
        priority: 0.5,
       
      },
  ]
}