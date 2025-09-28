import React from 'react';
import { METALS } from '../constants';
import MetalCard from './MetalCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CatalogProps {
  onConsultClick: () => void;
}

const Catalog: React.FC<CatalogProps> = ({ onConsultClick }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-white" id="catalog" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl font-bold text-black">Catálogo de Materiales</h2>
          <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {METALS.map((metal, index) => (
            <div 
              key={metal.name}
              className={`transition-all duration-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <MetalCard metal={metal} onConsultClick={onConsultClick} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;