"use client";

import React, { useState } from 'react'; // Tambahkan useState
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../data/projects';
import FilterBar from './FilterBar_Projects'; // Pastikan nama file import sesuai (misal: FilterBar.tsx)

const ProjectGrid = () => {
  // 1. STATE DISIMPAN DISINI (Bukan di page.tsx lagi)
  const [filter, setFilter] = useState("All");

  const { projects } = portfolioData;

  // 2. LOGIC FILTER
  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    // Cek apakah array category mengandung filter yang dipilih
    return project.category.includes(filter);
  });

  return (
    <section id="projects" className="py-8 pb-4 md:py-20 px-0 md:px-12 max-w-6xl mx-auto overflow-hidden">

      {/* --- HEADER SECTION --- */}
      <div className="px-6 md:px-0 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="text-left max-w-lg">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1D1D1F] mb-3">
            Selected Works.
          </h2>
          <p className="text-sm md:text-base text-gray-500">
            Eksplorasi kode dan desain dalam format yang tidak terikat aturan baku.
          </p>
        </div>

        <div className="w-full md:w-auto">
          {/* FilterBar dikontrol oleh State lokal di sini */}
          <FilterBar
            current={filter}
            onFilterChange={setFilter}
            className="justify-start md:justify-end"
          />
        </div>
      </div>

      {/* --- PROJECTS GRID --- */}
      <motion.div
        layout
        className="
          /* Mobile: Scroll Samping */
          flex gap-4 overflow-x-auto snap-x snap-mandatory pb-10 px-6 
          /* Desktop: Grid 2-3 Kolom */
          md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0 md:px-0 md:overflow-visible
          scrollbar-hide 
        "
      >
        <AnimatePresence mode='wait'>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="min-w-[85vw] md:min-w-0 snap-center" // Style responsif kamu (Mobile lebar 85%, Desktop normal)
            >
              <Link href={`/projects/${project.id}`} className="block h-full cursor-pointer">
                <ProjectCard
                  title={project.title}
                  role={project.role || ""}
                  image={project.image}
                  link="" // Link dikosongkan karena sudah dibungkus tag <Link>
                />
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="col-span-full flex flex-col items-center justify-center text-center w-full py-12 px-4 border-2 border-dashed border-gray-200 rounded-2xl md:mx-0 mx-6"
          >
            <p className="text-gray-400 italic mb-2">
              "Belum ada project public untuk kategori <strong>{filter}</strong>."
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ProjectGrid;