import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const catalogRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={scrollToContact} />
      <main>
        <Hero onButtonClick={scrollToCatalog} />
        <div ref={catalogRef}>
          <Catalog onConsultClick={scrollToContact} />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;