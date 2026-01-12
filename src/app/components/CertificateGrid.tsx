"use client";
import React from 'react';
import { FiAward, FiExternalLink, FiCalendar } from "react-icons/fi";
// Pastikan path data ini benar sesuai struktur foldermu
import { certificatesData } from '../data/certificates'; 

const CertificateGrid = () => {
  return (
    // PENTING: Tambahkan id="certificates" disini agar DockNav bisa scroll kesini
    <section id="certificates" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      
      {/* Title Section */}
      <div className="flex items-end gap-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] dark:text-black">
            Certifications & Awards
        </h2>
        <span className="text-sm text-gray-500 mb-1 hidden md:block">
            / Bukti kompetensi & prestasi
        </span>
      </div>

      {/* GRID SYSTEM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {certificatesData.map((cert) => (
          <div 
            key={cert.id}
            className={`
                relative rounded-[24px] p-6 md:p-8 flex flex-col justify-between group overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
                ${cert.isDark 
                    ? 'bg-[#1D1D1F] text-white border-gray-800' 
                    : 'bg-white text-gray-900 border-gray-200'}
            `}
          >
            {/* Background Decoration */}
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] -z-0 opacity-20 transition-opacity group-hover:opacity-40
                ${cert.isDark ? 'bg-blue-600' : 'bg-orange-400'}
            `} />

            {/* Top Content: Icon & Issuer */}
            <div className="relative z-10 flex justify-between items-start mb-6">
                <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center text-xl backdrop-blur-md border
                    ${cert.isDark ? 'bg-white/10 border-white/10' : 'bg-gray-100 border-gray-200'}
                `}>
                    <FiAward />
                </div>
                
                {/* Date Badge */}
                <div className={`
                    flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border
                    ${cert.isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-500'}
                `}>
                    <FiCalendar className="mb-0.5" /> {cert.date}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                <div className={`text-xs font-bold uppercase tracking-widest mb-2 opacity-60`}>
                    {cert.issuer}
                </div>
                <h3 className="text-2xl font-bold leading-tight mb-3">
                    {cert.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 opacity-80 line-clamp-3`}>
                    {cert.description}
                </p>

                {/* Link/Action */}
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className={`
                    inline-flex items-center gap-2 text-sm font-semibold hover:underline
                    ${cert.isDark ? 'text-blue-400' : 'text-blue-600'}
                `}>
                    View Credential <FiExternalLink />
                </a>
            </div>
            
          </div>
        ))}

      </div>
    </section>
  );
};

export default CertificateGrid;