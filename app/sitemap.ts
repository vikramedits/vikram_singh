import { MetadataRoute } from 'next'
import { projects, blogPosts } from '@/data/portfolio'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vikramsingh.in'

  // Dynamic project routes
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Dynamic blog routes
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    ...projectUrls,
    ...blogUrls,
  ]
}
