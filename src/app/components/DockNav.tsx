"use client";
import React from 'react';
import { motion } from "framer-motion";
// 1. Tambahkan FiAward ke import
import { FiHome, FiGrid, FiMail, FiAward } from "react-icons/fi";

const DockNav = () => {
  const navItems = [
    { name: "Home", href: "#home", icon: <FiHome size={20} /> },
    { name: "Projects", href: "#projects", icon: <FiGrid size={20} /> },
    { name: "Certifications", href: "#certificates", icon: <FiAward size={20} /> },
    { name: "Contact", href: "#contact", icon: <FiMail size={20} /> },
  ];

  // --- FUNGSI SCROLL ---
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (href === "#home" || targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className="pointer-events-auto flex items-center gap-2 p-2 rounded-full bg-[#1D1D1F]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20"
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="relative group flex flex-col items-center justify-center w-12 h-12 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
          >
            {/* Icon */}
            <span className="text-gray-400 group-hover:text-white transition-colors">
              {item.icon}
            </span>

            {/* Tooltip */}
            <span className="absolute -top-10 px-2 py-1 bg-black text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {item.name}
            </span>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default DockNav;