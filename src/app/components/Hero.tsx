"use client";
import React from 'react';
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { portfolioData } from '../data/projects';

const Hero = () => {
  const { hero } = portfolioData;

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-auto md:min-h-screen flex items-start pt-24 md:pt-12 pb-10 md:pb-20 overflow-hidden"
    >

      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 w-full">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">

          {/* --- 1. TEXT CONTENT --- */}
          <div className="w-full md:w-[55%] z-10 relative">
            {/* Badge Available */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {hero.status}
            </motion.div>

            {/* --- HEADLINE & MOBILE PHOTO (LAYOUT BARU) --- */}
            {/* Menggunakan flex biasa (tanpa justify-between) + gap-3 agar gambar nempel dekat judul */}
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              
              {/* 1. Headline Text */}
              {/* text-3xl di mobile agar muat 2 baris pas */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-[1.1] md:leading-[1.15] flex-1"
              >
                {/* Memaksa 2 baris dengan <br/> */}
                {hero.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {hero.subtitle}
                </span>
              </motion.h1>

              {/* 2. Mobile Photo (Lingkaran) */}
              {/* Ukuran w-16 h-16 (64px) agar tidak terlalu besar dan memakan tempat judul */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block md:hidden shrink-0" 
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md bg-gray-100">
                   <img
                      src="/images/Hero/FOTO 3X4.png"
                      alt="Profile Mobile"
                      className="w-full h-full object-cover"
                   />
                </div>
              </motion.div>
            </div>
            {/* --- END WRAPPER --- */}

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold text-gray-800 mb-4"
            >
              {hero.name}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-500 leading-relaxed max-w-xl mb-8"
            >
              {hero.desc}
            </motion.p>

            {/* Buttons & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="px-8 py-4 bg-[#1D1D1F] text-white rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                Lihat Karya <FiArrowRight />
              </a>

              <div className="flex items-center gap-2 px-4">
                {hero.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition-all"
                  >
                    {social.name === 'GitHub' && <FiGithub size={20} />}
                    {social.name === 'LinkedIn' && <FiLinkedin size={20} />}
                    {social.name === 'Behance' && <FaBehance size={20} />}
                    {social.name === 'Instagram' && <FiInstagram size={20} />}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- 2. DESKTOP IMAGE CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:flex w-full md:w-[45%] justify-end relative p-8"
          >
            <div className="relative z-10 w-full max-w-[450px] aspect-[4/5] rounded-[40px] overflow-hidden bg-gray-100 border border-gray-200 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
              <img
                src="/images/Hero/FOTO 3X4.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl -z-10 opacity-60 animate-pulse"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;