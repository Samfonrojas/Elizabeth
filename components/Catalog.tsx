import React from 'react';
import { METALS } from '../constants';
import MetalCard from './MetalCard';

interface CatalogProps {
  onConsultClick: () => void;
}

const Catalog: React.FC<CatalogProps> = ({ onConsultClick }) => {
  return (
    <section className="py-20 bg-white" id="catalog">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Catálogo de Materiales</h2>
          <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {METALS.map((metal) => (
            <MetalCard key={metal.name} metal={metal} onConsultClick={onConsultClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;