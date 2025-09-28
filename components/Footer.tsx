import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 transition-all duration-300 hover:bg-gray-50">
      <div className="container mx-auto px-6 text-center text-gray-600">
        <p className="text-xl font-bold text-black mb-2 transition-all duration-300 hover:scale-110 cursor-pointer">AUREA</p>
        <p className="transition-all duration-300 hover:text-gray-800">&copy; {new Date().getFullYear()} Aurea Metales Preciosos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;