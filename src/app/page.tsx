import React from 'react';
import Hero from './components/Hero';
import ProjectMasonry from './components/ProjectMasonry';
import CertificateGrid from './components/CertificateGrid'; // Component Baru
import TechStack from './components/TechStack'; // Component Baru
import DockNav from './components/DockNav';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] pb-32 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. HERO */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Hero />
      </div>

      {/* 4. TECH STACK */}
      <TechStack />

      {/* 2. PROJECT (Masonry) */}
      <ProjectMasonry />

      {/* 3. CERTIFICATES (Flexible Grid) */}
      <CertificateGrid />

      {/* 5. DOCK NAV */}
      <DockNav />
      
      <Contact />

    </main>
  );
}