import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold" aria-label="Accueil">
            <span className="text-white">ANEY</span>
            <span className="text-blue-400">ROUD</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8" aria-label="Primary navigation">
          <a href="#parcours" className="text-white uppercase tracking-widest text-sm font-medium hover:text-blue-400 transition-colors">
            Parcours
          </a>
          <a href="#entreprise" className="text-white uppercase tracking-widest text-sm font-medium hover:text-blue-400 transition-colors">
            Entreprise
          </a>
          <a href="#competences" className="text-white uppercase tracking-widest text-sm font-medium hover:text-blue-400 transition-colors">
            Compétences
          </a>
          <a href="#projets" className="text-white uppercase tracking-widest text-sm font-medium hover:text-blue-400 transition-colors">
            Projets
          </a>
          <a href="#veille" className="text-white uppercase tracking-widest text-sm font-medium hover:text-blue-400 transition-colors">
            Veille
          </a>
          <a href="#contact" className="text-white uppercase tracking-widest text-sm font-medium hover:text-blue-400 transition-colors">
            Contact
          </a>
        </nav>

        <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-5 text-sm" variant="default">
          <a href="/src/assets/cv/doc.docx" className="flex items-center" aria-label="Télécharger mon CV">
            TÉLÉCHARGER MON CV
            <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </Button>

        {/* Mobile menu button (hidden on desktop) */}
        <button 
          className="md:hidden flex items-center text-white focus:outline-none" 
          aria-expanded="false"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="\src\assets\cv\devoircejm.pdf">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu - would be shown conditionally with a state */}
      {/* 
      <div className="md:hidden bg-blue-900 shadow-md">
        <div className="container mx-auto py-4 px-4">
          <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
            <a href="/" className="text-white text-lg font-medium hover:text-blue-400 transition-colors">
              Accueil
            </a>
            <a href="#competences" className="text-white text-lg font-medium hover:text-blue-400 transition-colors">
              Entreprise
            </a>
            <a href="#competences" className="text-white text-lg font-medium hover:text-blue-400 transition-colors">
              Compétences
            </a>
            <a href="#projets" className="text-white text-lg font-medium hover:text-blue-400 transition-colors">
              Projets
            </a>
            <a href="#veille" className="text-white text-lg font-medium hover:text-blue-400 transition-colors">
              Veille
            </a>
            <a href="#contact" className="text-white text-lg font-medium hover:text-blue-400 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
      */}
    </header>
  );
}