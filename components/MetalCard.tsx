import React from 'react';
import type { Metal } from '../types';

interface MetalCardProps {
  metal: Metal;
  onConsultClick: () => void;
}

const MetalCard: React.FC<MetalCardProps> = ({ metal, onConsultClick }) => {
  return (
    <div className="relative group overflow-hidden bg-white border border-gray-200 p-6 rounded-lg shadow-lg transition-all duration-300 hover:border-black/50 hover:shadow-black/20 hover:-translate-y-2">
      {/* Metallic Glint Effect */}
      <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-black/5 to-transparent transition-all duration-700 ease-in-out group-hover:left-full"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div>
            <h3 className="text-2xl font-bold text-black">{metal.name}</h3>
          </div>
        </div>
        <p className="text-gray-700 mb-4 h-20">{metal.description}</p>
        <div className="flex justify-end items-center">
          <button 
            onClick={onConsultClick}
            className="border border-black text-black text-sm font-bold py-2 px-4 rounded-sm hover:bg-black hover:text-white transition-colors duration-300"
          >
            Consultar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MetalCard;