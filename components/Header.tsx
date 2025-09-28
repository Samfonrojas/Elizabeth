import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-xl shadow-black/10 transform scale-100' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black tracking-widest transition-all duration-300 hover:scale-110 hover:text-gray-700 cursor-pointer">
          AUREA
        </h1>
        <nav>
          <button 
            onClick={onContactClick}
            className="text-black hover:text-gray-700 transition-all duration-300 font-medium transform hover:scale-110 hover:shadow-lg px-4 py-2 rounded-md hover:bg-black/5 active:scale-95"
          >
            Contacto
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;