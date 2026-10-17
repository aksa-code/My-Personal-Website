import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
// Sesuaikan path import ini dengan struktur folder kamu
import { portfolioData } from '../../data/projects'; 
import { ProjectDetailView } from '../../components/ProjectDetail';

interface PageProps {
  params: Promise<{ id: string }>;
}

// Metadata unik per project (judul, deskripsi, canonical)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id.toString() === id);

  if (!project) return {};

  return {
    title: project.title,
    description: project.subtitle,
    alternates: { canonical: `/projects/${id}` },
    openGraph: {
      type: 'article',
      title: project.title,
      description: project.subtitle,
      url: `/projects/${id}`,
    },
  };
}

// Halaman ini berjalan di Server (Server Component)
export default async function ProjectPage({ params }: PageProps) {
  // 1. Ambil ID dari URL (Next.js 15 butuh await, Next.js 14 tidak, tapi ini aman)
  const resolvedParams = await params; 
  const { id } = resolvedParams;

  // 2. Cari project di data/projects.ts yang ID-nya cocok
  const project = portfolioData.projects.find((p) => p.id.toString() === id);

  // 3. Kalau tidak ketemu, tampilkan halaman 404
  if (!project) {
    notFound();
  }

  // 4. Tampilkan Komponen ProjectDetailView
  return <ProjectDetailView project={project} />;
}

// Opsional: Generate halaman statis untuk performa (SSG)
export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id.toString(),
  }));
}