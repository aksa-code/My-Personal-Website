"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiCopy, FiCheck } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const MY_EMAIL = "emailkamu@example.com"; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(MY_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Pesan terkirim! (Demo)");
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[120px] -z-10 opacity-30 pointer-events-none"></div>

      {/* --- UPDATE WIDTH --- 
          1. max-w-6xl : Jauh lebih ramping (standar container website).
          2. px-6 md:px-12 : Padding samping agar konten tidak mepet pinggir layar HP.
      */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* --- LEFT SIDE: INFO --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-6 tracking-tight">
              Let's work together.
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-md">
              Punya ide proyek menarik? Saya siap membantu merealisasikannya dengan kode yang rapi dan desain yang memikat.
            </p>

            <div className="space-y-5 max-w-sm">
              
              {/* Card Email */}
              <div 
                onClick={handleCopyEmail}
                className="group cursor-pointer p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                  <FiMail />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Mail me at</p>
                  <p className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                    {MY_EMAIL}
                  </p>
                </div>
                <div className="ml-auto text-gray-300 pr-2">
                  {copied 
                    ? <FiCheck className="text-green-500" /> 
                    : <FiCopy className="group-hover:text-blue-500" />
                  }
                </div>
              </div>

              {/* Location */}
              <div className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center text-xl shrink-0">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Based in</p>
                  <p className="text-base md:text-lg font-semibold text-gray-900">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>

            </div>
          </motion.div>


          {/* --- RIGHT SIDE: FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] p-8 shadow-xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-black/10 focus:ring-0 transition-all outline-none font-medium text-sm md:text-base"
                  required 
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@mail.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-black/10 focus:ring-0 transition-all outline-none font-medium text-sm md:text-base"
                  required 
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Ceritakan detail proyekmu..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-black/10 focus:ring-0 transition-all outline-none font-medium text-sm md:text-base resize-none"
                  required 
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full py-3.5 bg-[#1D1D1F] text-white rounded-xl font-bold text-base hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Kirim Pesan <FiSend />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;