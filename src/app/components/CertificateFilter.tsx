"use client";
import React from 'react';

// --- ATUR KATEGORI MANUAL DISINI ---
const CATEGORIES = [
  "All", 
  "Leadership", 
  "Committee", 
  "Organization", 
  "Web Dev",
  "Workshop"
];

interface FilterProps {
  current: string;
  onFilterChange: (category: string) => void;
}

const CertificateFilter: React.FC<FilterProps> = ({ current, onFilterChange }) => {
  return (
    // UBAHAN 1: 'flex-wrap' agar tombol turun ke bawah (multiline) di HP
    <div className="flex flex-wrap gap-2 justify-start">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          // UBAHAN 2: Tambahkan (e) dan preventDefault()
          // Ini mencegah browser melakukan "scroll jump" atau refresh saat tombol ditekan
          onClick={(e) => {
            e.preventDefault(); 
            onFilterChange(cat);
          }}
          className={`
            px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border whitespace-nowrap
            ${current === cat 
              ? 'bg-[#1D1D1F] text-white border-[#1D1D1F] shadow-md' // Style Aktif
              : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-black'} // Style Tidak Aktif
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CertificateFilter;