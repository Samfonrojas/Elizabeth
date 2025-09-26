import React from 'react';

interface HeroProps {
  onButtonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onButtonClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1554189097-94d3a2144d93?q=80&w=1920&auto=format&fit=crop')` }}>
      <div className="absolute inset-0 bg-white bg-opacity-60"></div>
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-4 animate-fade-in-down">
          Invierta en <span className="text-black">Valor</span>.
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-8 animate-fade-in-up">
          Invierta en <span className="text-black">Futuro</span>.
        </h2>
        <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-10">
          Aurea le abre las puertas al mundo de los metales preciosos y minerales estratégicos, pilares de la economía del mañana.
        </p>
        <button
          onClick={onButtonClick}
          className="bg-black text-white font-bold py-3 px-8 rounded-sm hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/20"
        >
          Ver Materiales
        </button>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;