"use client";
import React from 'react';
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

interface CardProps {
  title: string;
  role: string;
  image?: string;
  link?: string;
  isDark?: boolean;
  className?: string;
}

const ProjectCard: React.FC<CardProps> = ({ title, role, image, isDark, className }) => {
  return (
    <div className={`block w-full h-full ${className || ''}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`
          group relative overflow-hidden 
          rounded-[24px] md:rounded-[32px] 
          p-6 md:p-8 
          flex flex-col 
          
          /* UKURAN KARTU */
          h-[380px] md:h-full md:min-h-[450px]
          
          shadow-sm hover:shadow-2xl hover:shadow-black/5 
          transition-all duration-500
          ${isDark ? 'bg-[#1D1D1F] text-white' : 'bg-white text-[#1D1D1F]'}
        `}
      >

        {/* --- Content Text (FIXED HEIGHT LEBIH TINGGI) --- */}
        {/* PERBAIKAN: */}
        {/* h-[120px] md:h-[160px] -> Memberikan ruang lebih lega untuk judul panjang. */}
        {/* Ini memastikan gambar dibawahnya tetap sejajar garisnya. */}
        <div className="z-10 relative pointer-events-none mb-2 flex-none h-[120px] md:h-[160px] flex flex-col justify-start">
          <h3 className={`text-xs md:text-sm font-semibold tracking-wide uppercase mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {role}
          </h3>
          {/* line-clamp-4: Mengizinkan hingga 4 baris teks sebelum disingkat (...) */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight line-clamp-4">
            {title}
          </h2>
        </div>

        {/* --- Button Floating --- */}
        <div className={`
          absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-20
          ${isDark ? 'bg-white/20 text-white' : 'bg-[#F5F5F7] text-black'}
        `}>
          <FiArrowUpRight size={20} />
        </div>

        {/* --- Image Area (MIDDLE POSITION) --- */}
        <div className="flex-1 w-full flex items-center justify-center relative overflow-hidden">
          
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-transform duration-500 group-hover:scale-[1.03]">
             {image ? (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover object-center select-none"
                />
              ) : (
                <div className={`w-full h-full opacity-30 blur-2xl ${isDark ? 'bg-blue-600' : 'bg-blue-200'}`}></div>
              )}
          </div>

        </div>

      </motion.div>
    </div>
  );
};

export default ProjectCard;