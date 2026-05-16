import { blogPosts } from "@/data/portfolio";
import BlogDetailClient from "@/components/blog/BlogDetailClient";
import { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  return {
    title: post ? `${post.title} | Vikram Singh Blog` : "Post Not Found",
    description: post?.excerpt || "Blog post details",
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogDetailClient slug={slug} />;
}
