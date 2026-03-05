import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Entreprise } from './components/Entreprise';
import { Competences } from './components/Competences';
import { Parcours } from './components/Parcours';
import { Projets } from './components/Projets';
import { Veille } from './components/Veille';
import { Footer } from './components/Footer';

function App() {
  return (
    // "min-h-screen" force le site à prendre toute la hauteur
    // "overflow-x-hidden" empêche le bug du scroll horizontal sur mobile
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      
      <Navbar />

      {/* Chaque section est enveloppée dans un container pour le responsive */}
      <main>
        <Hero />
        
        {/* On peut ajouter des IDs pour les liens de la Navbar */}
        <section id="parcours" className="py-10 md:py-20">
          <Parcours />
        </section>

        <section id="competences" className="py-10 md:py-20">
          <Competences />
        </section>

        <section id="projets" className="py-10 md:py-20">
          <Projets />
        </section>

        {/* Ta nouvelle veille dynamique */}
        <section id="veille" className="py-10 md:py-20">
          <Veille />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;