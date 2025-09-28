import React from 'react';
import type { Metal } from '../types';

interface MetalCardProps {
  metal: Metal;
  onConsultClick: () => void;
}

const MetalCard: React.FC<MetalCardProps> = ({ metal, onConsultClick }) => {
  return (
    <div className="relative group overflow-hidden bg-white border border-gray-200 p-6 rounded-lg shadow-lg transition-all duration-500 hover:border-black/50 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-4 hover:rotate-1 active:scale-95">
      {/* Metallic Glint Effect */}
      <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-all duration-1000 ease-in-out group-hover:left-full"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div>
            <h3 className="text-2xl font-bold text-black transition-all duration-300 group-hover:scale-105">{metal.name}</h3>
          </div>
        </div>
        <p className="text-gray-700 mb-4 h-20 transition-all duration-300 group-hover:text-gray-900">{metal.description}</p>
        <div className="flex justify-end items-center">
          <button 
            onClick={onConsultClick}
            className="border border-black text-black text-sm font-bold py-2 px-4 rounded-sm hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95"
          >
            Consultar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MetalCard;