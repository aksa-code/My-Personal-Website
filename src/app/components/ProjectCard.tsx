"use client";
import React from 'react';
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

interface CardProps {
  title: string;
  subtitle: string;
  image?: string;
  isDark?: boolean; // Untuk card spesial (Certiport)
  className?: string; // Untuk custom size (col-span)
}

const AppleCard: React.FC<CardProps> = ({ title, subtitle, image, isDark, className }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }} // Efek breathing saat hover
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      
      className={`
        relative overflow-hidden rounded-[32px] p-8 flex flex-col justify-between h-[400px] shadow-sm hover:shadow-2xl hover:shadow-black/5 transition-all duration-500
        ${isDark ? 'bg-[#1D1D1F] text-white' : 'bg-white text-[#1D1D1F]'}
        ${className}
      `}
    >
      
      {/* Content Top */}
      <div className="z-10 relative">
        <h3 className={`text-sm font-semibold tracking-wide uppercase mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {subtitle}
        </h3>
        <h2 className="text-3xl font-bold tracking-tight leading-tight">
          {title}
        </h2>
      </div>

      {/* Button Floating (Mirip tombol App Store) */}
      <div className={`
        absolute top-8 right-8 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
        ${isDark ? 'bg-white/20 text-white' : 'bg-[#F5F5F7] text-black'}
      `}>
        <FiArrowUpRight size={20} />
      </div>

      {/* Image / Visual Area */}
      <div className="absolute inset-x-0 bottom-0 h-3/5 w-full flex justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
         {image ? (
            <img src={image} alt={title} className="w-[85%] h-full object-cover rounded-t-2xl shadow-xl" />
         ) : (
            // Abstract Gradient jika tidak ada gambar
            <div className={`w-full h-full opacity-30 blur-3xl ${isDark ? 'bg-blue-600' : 'bg-blue-200'}`}></div>
         )}
      </div>
      
    </motion.div>
  );
};

export default AppleCard;