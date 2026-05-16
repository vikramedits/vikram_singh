import { projects } from "@/data/portfolio";
import ProjectDetailClient from "@/components/projects/ProjectDetailClient";
import { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  return {
    title: project ? `${project.title} | Vikram Singh` : "Project Not Found",
    description: project?.description || "Project details",
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectDetailClient slug={slug} />;
}
