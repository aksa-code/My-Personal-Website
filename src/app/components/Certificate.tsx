import React from 'react';
import { FiDatabase, FiCheckCircle } from "react-icons/fi";

const Certificate = () => {
  return (
    <div className="md:col-span-1 relative overflow-hidden rounded-3xl bg-[#1A1A1A] text-white p-8 shadow-xl flex flex-col justify-between min-h-[300px] group">
       
       {/* Efek Glow di Background */}
       <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition duration-500"></div>
       
       <div>
         <div className="flex justify-between items-start">
            <div className="p-3 bg-white/10 rounded-2xl w-fit mb-6 backdrop-blur-sm">
                <FiDatabase className="w-8 h-8 text-blue-400" />
            </div>
            <FiCheckCircle className="text-green-400/50" />
         </div>
         
         <h2 className="font-heading text-2xl font-bold leading-tight mb-1">
           Certified IT Specialist
         </h2>
         <p className="text-gray-400 text-sm">Databases (Pearson VUE)</p>
       </div>
       
       <div className="mt-4 border-t border-white/10 pt-4">
         <div className="flex justify-between text-xs text-gray-500 font-mono">
             <span>ID: yAR6-uTnH</span>
             <span>Valid: 2030</span>
         </div>
       </div>
    </div>
  );
};

export default Certificate;