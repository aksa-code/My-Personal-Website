"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, User, Layers, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectDetailViewProps {
  project: Project;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project }) => {
  const hasLiveLink = project.link && project.link !== "#" && project.link !== "";

  // --- LOGIC SLIDER ---
  const sliderImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    if (sliderImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#FAFAFA] text-[#1D1D1F] pb-20 pt-24 md:pt-32"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">

        {/* HEADER SECTION */}
        <div className="mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              
              {/* --- CATEGORY BADGES (LEAD & CHILD) --- */}
              <div className="flex flex-wrap gap-2 mb-4">
                {(Array.isArray(project.category) ? project.category : [project.category]).map((cat, index) => (
                  <span
                    key={index}
                    className={`inline-block px-3 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-wider uppercase transition-all ${
                      index === 0 
                        ? "bg-blue-600 text-white shadow-sm" // LEAD Category: Warna Solid
                        : "bg-blue-100 text-blue-700 border border-blue-200" // CHILD Category: Warna Soft
                    }`}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-3">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-500">
                {project.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {hasLiveLink && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1D1D1F] text-white font-medium hover:bg-black hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-md"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* --- IMAGE SLIDER / CAROUSEL --- */}
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-xl shadow-gray-200 mb-12 bg-gray-100 group border border-gray-200">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(5px)" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={sliderImages[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                fill
                className="object-cover object-center"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {sliderImages.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {sliderImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 shadow-sm ${
                        idx === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">

          {/* Metadata Sidebar */}
          <div className="md:col-span-4 space-y-8 order-2 md:order-1">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6 sticky top-24">
              <div>
                <h3 className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  <User className="w-4 h-4 mr-2" /> Role
                </h3>
                <p className="font-medium text-gray-900 text-base">
                  {project.role || "Designer"}
                </p>
              </div>
              <div className="h-px bg-gray-100" />
              <div>
                <h3 className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  <Calendar className="w-4 h-4 mr-2" /> Year
                </h3>
                <p className="font-medium text-gray-900 text-base">
                  {project.year || "2024"}
                </p>
              </div>
              <div className="h-px bg-gray-100" />
              <div>
                <h3 className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  <Layers className="w-4 h-4 mr-2" /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech, index) => (
                    <span key={index} className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-lg border border-gray-200">
                      {tech}
                    </span>
                  )) || <span className="text-gray-400 text-sm">-</span>}
                </div>
              </div>
            </div>
          </div>

          {/* Description Content */}
          <div className="md:col-span-8 order-1 md:order-2">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                {project.description || "Deskripsi detail project belum ditambahkan."}
              </p>
            </div>

            {project.features && project.features.length > 0 && (
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                <ul className="space-y-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenge && (
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-3 text-blue-600">The Challenge</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {project.challenge}
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </motion.div>
  );
};