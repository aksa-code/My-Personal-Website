"use client";
import React from 'react';
import { motion } from "framer-motion";
import { techStackData } from '../data/certificates';
import { SiReact, SiNextdotjs, SiTailwindcss, SiLaravel, SiMysql, SiFlutter, SiFigma, SiGithub, SiTypescript } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const getIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('react')) return <SiReact className="text-blue-400" />;
  if (n.includes('next')) return <SiNextdotjs className="text-black" />;
  if (n.includes('tailwind')) return <SiTailwindcss className="text-cyan-400" />;
  if (n.includes('laravel')) return <SiLaravel className="text-red-500" />;
  if (n.includes('flutter')) return <SiFlutter className="text-blue-400" />;
  if (n.includes('figma')) return <SiFigma className="text-pink-500" />;
  if (n.includes('git')) return <SiGithub className="text-gray-800" />;
  if (n.includes('type')) return <SiTypescript className="text-blue-600" />;
  return <FaCode className="text-gray-400" />; 
};

const TechStack = () => {
  const infiniteTech = [...techStackData, ...techStackData];

  return (
    <section className="mt-4 mb-10 overflow-hidden relative z-20"> 
      
      {/* PERBAIKAN DISINI:
         1. max-w-7xl -> max-w-6xl (Agar container lebih kecil, sejajar dengan layout text/gambar di atas)
         2. px-4 -> px-6 md:px-12 (Agar batas kiri kanan lebih masuk ke dalam)
      */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <div 
            className="flex w-full overflow-hidden"
            style={{
                // Area fade selebar 64px di kiri kanan agar transisi lebih lembut tapi tetap di dalam batas
                maskImage: 'linear-gradient(to right, transparent, black 64px, black calc(100% - 64px), transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 64px, black calc(100% - 64px), transparent)'
            }}
        >

          <motion.div 
            className="flex gap-4 md:gap-8 whitespace-nowrap py-2"
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ 
              ease: "linear", 
              duration: 25, 
              repeat: Infinity 
            }}
          >
            {infiniteTech.map((tech, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-default min-w-max"
              >
                <span className="text-lg md:text-xl">{getIcon(tech)}</span>
                <span className="font-semibold text-gray-600 text-sm md:text-base">{tech}</span>
              </div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default TechStack;