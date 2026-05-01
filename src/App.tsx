import { Navbar } from './components/Navbar';
import  Hero  from './components/Hero';
import { Entreprise } from './components/Entreprise';
import  Competences  from './components/Competences';
import { Parcours } from './components/Parcours';
import { Projets } from './components/Projets';
import { Veille } from './components/Veille';
import { APropos } from './components/APropos';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      
      <Navbar />

      <main>
        <Hero />

        <section id="parcours" className="py-10 md:py-20">
          <Parcours />
        </section>
        
        <section id="entreprise" className="py-10 md:py-20">
          <Entreprise />
        </section>

        <section id="competences" className="py-10 md:py-20">
          <Competences />
        </section>

        <section id="projets" className="py-10 md:py-20">
          <Projets />
        </section>

        <section id="veille" className="py-10 md:py-20">
          <Veille />
        </section>

        <section id="apropos" className="py-10 md:py-20">
          <APropos />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;