"use client";
import React from 'react';

// --- ATUR KATEGORI YANG MAU MUNCUL DISINI ---
// Pastikan tulisannya SAMA PERSIS dengan yang ada di data/projects.ts
const CATEGORIES = [
  "All", 
  "Visual Branding",
  "Logo Design",
  "Web Dev", 
  "Mobile Dev", 
  "UI Design", 
  "Fullstack"
];

interface    FilterProjects {
  current: string;
  onFilterChange: (category: string) => void;
  className?: string;
}

const FilterBar: React.FC<   FilterProjects> = ({ current, onFilterChange, className = "" }) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          // Mencegah error hydration jika ada perbedaan render
          suppressHydrationWarning={true} 
          onClick={() => onFilterChange(cat)}
          className={`
            px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border
            ${current === cat 
              ? 'bg-[#1D1D1F] text-white border-[#1D1D1F] shadow-md'  // Style Aktif (Hitam)
              : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-black'} // Style Tidak Aktif
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;