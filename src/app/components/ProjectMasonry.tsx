"use client";
import React from 'react';
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { portfolioData } from '../data/projects';

const ProjectMasonry = () => {
  const { projects } = portfolioData;

  return (
    // PERUBAHAN DISINI:
    // 1. Ubah max-w-[1400px] MENJADI max-w-6xl (supaya sama dengan Hero)
    // 2. Padding (px-6 md:px-12) pastikan sama dengan layout Hero
    <section id="projects" className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
      
      {/* Header Section */}
      <div className="mb-10 text-left"> {/* Pastikan text-left biar rata kiri sama Hero */}
         <h2 className="text-3xl md:text-5xl font-bold text-[#1D1D1F] mb-4">
           Selected Works.
         </h2>
         <p className="text-gray-500 max-w-xl">
           Kumpulan eksplorasi kode dan desain dalam format yang tidak terikat aturan baku.
         </p>
      </div>

      {/* MASONRY LAYOUT ENGINE */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        
        {projects.map((project, index) => {
            const isDark = index % 3 === 1; 
            const isLargeText = index % 3 === 0; 

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`
                    break-inside-avoid relative rounded-[32px] overflow-hidden group transition-all duration-500 hover:shadow-2xl
                    ${isDark ? 'bg-[#1D1D1F] text-white' : 'bg-white text-gray-900 border border-gray-100'}
                `}
              >
                {/* Image Area */}
                <div className="relative overflow-hidden w-full">
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Action Button Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <a href={project.link || "#"} className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 hover:scale-110 transition">
                            <FiArrowUpRight size={32} />
                        </a>
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                    <div className={`
                        text-[10px] font-bold uppercase tracking-widest mb-3
                        ${isDark ? 'text-gray-400' : 'text-blue-600'}
                    `}>
                        {project.category}
                    </div>

                    <h3 className={`font-bold mb-3 leading-tight ${isLargeText ? 'text-3xl' : 'text-xl'}`}>
                        {project.title}
                    </h3>

                    <p className={`text-sm mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                            <span key={i} className={`
                                px-3 py-1 rounded-full text-[10px] font-semibold border
                                ${isDark 
                                    ? 'bg-white/10 border-white/10 text-gray-200' 
                                    : 'bg-gray-50 border-gray-200 text-gray-600'}
                            `}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

              </motion.div>
            );
        })}

      </div>
    </section>
  );
};

export default ProjectMasonry;