"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FiAward, FiEye, FiCalendar, FiX } from "react-icons/fi";
import { certificatesData } from '../data/certificates';
import CertificateFilter from './CertificateFilter';

const CertificateGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredCerts = certificatesData.filter((cert) => {
    if (activeFilter === "All") return true;
    return cert.category === activeFilter;
  });

  return (
    // PERUBAHAN 1: Mengurangi padding vertical section (py-8 md:py-12) agar lebih rapat dengan section bawah
    <section id="certificates" className="py-8 md:py-12 px-0 md:px-12 max-w-6xl mx-auto overflow-hidden">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between px-6 md:px-0 mb-6 gap-2">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1D1D1F] dark:text-black">
            Certifications
          </h2>
          <span className="text-sm text-gray-500 block mt-2">
            Bukti kompetensi, kepemimpinan & partisipasi aktif.
          </span>
        </div>
      </div>

      {/* FILTER BAR - Margin bottom dikurangi (mb-6) */}
      <div className="px-6 md:px-0 mb-6">
        <CertificateFilter 
          current={activeFilter} 
          onFilterChange={setActiveFilter} 
        />
      </div>

      {/* GRID CONTENT */}
      {/* PERUBAHAN 2: Menghapus 'min-h-[400px]' agar container tidak memaksa tinggi berlebih */}
      <div className="
          flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-6 
          md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 md:pb-0 md:px-0 md:overflow-visible
          scrollbar-hide
        ">
        <AnimatePresence mode='wait'>
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="
                relative
                min-w-[280px] w-[85vw] md:w-auto md:min-w-0
                snap-center md:snap-align-none shrink-0 md:shrink
                
                /* Tinggi Kartu Compact */
                h-[260px] md:h-[300px]
              "
            >
              <div 
                onClick={() => setSelectedImage(cert.image)}
                role="button"
                className={`
                  relative h-full rounded-[24px] p-5 flex flex-col justify-between group overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer
                  ${cert.isDark 
                    ? 'bg-[#1D1D1F] text-white border-gray-800' 
                    : 'bg-white text-gray-900 border-gray-200'}
                `}
              >
                
                {/* Background Decoration */}
                <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-[50px] -z-0 pointer-events-none transition-opacity group-hover:opacity-40
                    ${cert.isDark ? 'bg-blue-600 opacity-20' : 'bg-orange-400 opacity-20'}
                  `} 
                />

                {/* Top: Icon & Date */}
                <div className="relative z-10 flex justify-between items-start mb-2">
                  <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center text-lg backdrop-blur-md border
                      ${cert.isDark ? 'bg-white/10 border-white/10' : 'bg-gray-100 border-gray-200'}
                    `}>
                    <FiAward />
                  </div>
                  <div className={`
                      flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-mono border
                      ${cert.isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-500'}
                    `}>
                    <FiCalendar className="mb-0.5" /> {cert.date}
                  </div>
                </div>

                {/* Bottom: Content */}
                <div className="relative z-10 flex flex-col justify-end">
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">
                    {cert.issuer}
                  </div>
                  
                  <h3 className="text-lg font-bold leading-tight mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-xs leading-relaxed mb-3 opacity-80 line-clamp-2">
                    {cert.description}
                  </p>
                  
                  <div className={`
                      inline-flex items-center gap-2 text-xs font-semibold group-hover:underline w-fit
                      ${cert.isDark ? 'text-blue-400' : 'text-blue-600'}
                    `}>
                    View Credential <FiEye />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Empty State */}
        {filteredCerts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="col-span-full w-full flex flex-col items-center justify-center py-8 px-4 text-center border-2 border-dashed border-gray-200 rounded-3xl"
          >
            <div className="bg-gray-100 p-3 rounded-full mb-3 text-xl">📂</div>
            <h3 className="text-base font-bold text-gray-800">Tidak ditemukan</h3>
            <p className="text-gray-500 max-w-sm mt-1 text-xs">
               Belum ada sertifikat di kategori ini.
            </p>
          </motion.div>
        )}
      </div>

      {/* MODAL IMAGE PREVIEW */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center cursor-default"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:top-4 md:right-4 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/20 backdrop-blur-md cursor-pointer"
              >
                <FiX size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Certificate Evidence"
                className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default CertificateGrid;