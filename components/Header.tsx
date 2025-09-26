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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg shadow-black/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black tracking-widest">
          AUREA
        </h1>
        <nav>
          <button 
            onClick={onContactClick}
            className="text-black hover:text-gray-700 transition-colors duration-300 font-medium"
          >
            Contacto
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;