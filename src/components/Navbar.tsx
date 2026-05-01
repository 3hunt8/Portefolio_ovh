import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export function Navbar() {
  // État pour le fond de la navbar au scroll
  const [isScrolled, setIsScrolled] = useState(false);
  // État pour ouvrir/fermer le menu sur téléphone
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Ton lien de CV centralisé
  const cvLink = "https://pub-0059eb78551446a0ac8e717c896e0b02.r2.dev/cv/CV_ESCT_Toulouse_Alexis_Neyroud_v2_2.pdf";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour fermer le menu mobile quand on clique sur un lien
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold" aria-label="Accueil">
            <span className="text-white">ANEY</span>
            <span className="text-blue-400">ROUD</span>
          </a>
        </div>

        {/* Navigation Bureau */}
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

        {/* Bouton CV Bureau */}
        <Button className="hidden md:flex bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-5 text-sm" variant="default" asChild>
          <a 
            href={cvLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center" 
            aria-label="Consulter mon CV"
          >
            TÉLÉCHARGER MON CV
            <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </Button>

        {/* Bouton Hamburger (Menu Mobile) */}
        <button 
          className="md:hidden flex items-center text-white focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              // Icône Croix (quand ouvert)
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              // Icône Hamburger (quand fermé)
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile Déroulant */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-900 shadow-xl absolute top-full left-0 w-full border-t border-blue-800 animate-fadeIn">
          <div className="container mx-auto py-4 px-4">
            <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
              <a href="/" onClick={closeMobileMenu} className="text-white text-lg font-medium hover:text-blue-400 transition-colors">
                Accueil
              </a>
              <a href="#parcours" onClick={closeMobileMenu} className="text-white text-lg font-medium hover:text-blue-400 transition-colors">
                Parcours
              </a>
              <a href="#entreprise" onClick={closeMobileMenu} className="text-white text-lg font-medium hover:text-blue-400 transition-colors">
                Entreprise
              </a>
              <a href="#competences" onClick={closeMobileMenu} className="text-white text-lg font-medium hover:text-blue-400 transition-colors">
                Compétences
              </a>
              <a href="#projets" onClick={closeMobileMenu} className="text-white text-lg font-medium hover:text-blue-400 transition-colors">
                Projets
              </a>
              <a href="#veille" onClick={closeMobileMenu} className="text-white text-lg font-medium hover:text-blue-400 transition-colors">
                Veille
              </a>
              <a href="#contact" onClick={closeMobileMenu} className="text-white text-lg font-medium hover:text-blue-400 transition-colors">
                Contact
              </a>
              
              {/* Bouton CV version mobile */}
              <div className="pt-4 mt-2 border-t border-blue-800">
                <a 
                  href={cvLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 px-5 text-sm font-bold w-full"
                >
                  TÉLÉCHARGER MON CV
                  <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}