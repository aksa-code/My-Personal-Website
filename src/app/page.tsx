"use client";
import React, { useState } from 'react';
import Hero from './components/Hero';
import TechStack from './components/TechStack'; 
import ProjectGrid from './components/ProjectGrid';
import CertificateGrid from './components/CertificateGrid'; 
import DockNav from './components/DockNav';
import Contact from './components/Contact';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <main className="min-h-screen bg-[#FAFAFA] pb-32 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Hero />
      </div>

      <TechStack />
      
      <ProjectGrid/>

      <CertificateGrid />

      <DockNav />
      
      <Contact />

    </main>
  );
}