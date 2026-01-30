"use client";
import React from 'react';
import { motion } from "framer-motion";
import { techStackData } from '../data/techstack';
// ✅ 1. Import Icon DaVinci Resolve
import { 
  SiFigma, 
  SiAdobeillustrator, 
  SiAdobeaftereffects, 
  SiAdobepremierepro, 
  SiLaravel, 
  SiFlutter, 
  SiNextdotjs,
  SiDavinciresolve 
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

const getIcon = (name: string) => {
  const n = name.toLowerCase();

  if (n.includes('figma')) return <SiFigma className="text-pink-500" />;
  if (n.includes('illustrator')) return <SiAdobeillustrator className="text-[#FF9A00]" />;
  if (n.includes('after effect')) return <SiAdobeaftereffects className="text-[#9999FF]" />;
  if (n.includes('premiere')) return <SiAdobepremierepro className="text-[#9999FF]" />;
  
  // ✅ 2. Tambahkan Logic Icon DaVinci
  if (n.includes('davinci')) return <SiDavinciresolve className="text-indigo-600" />; 

  if (n.includes('laravel')) return <SiLaravel className="text-red-600" />;
  if (n.includes('flutter')) return <SiFlutter className="text-blue-400" />;
  if (n.includes('next')) return <SiNextdotjs className="text-black" />;

  // Default Icon
  return <FaCode className="text-gray-400" />;
};

const TechStack = () => {
  // Gandakan array agar infinite loop mulus
  const infiniteTech = [...techStackData, ...techStackData];

  return (
    <section className="mt-4 mb-10 overflow-hidden relative z-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div
          className="flex w-full overflow-hidden"
          style={{
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