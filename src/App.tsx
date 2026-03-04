import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Competences from "./components/Competences";
import { Entreprise } from "./components/Entreprise";
import { Parcours } from "./components/Parcours";
import { Projets } from "./components/Projets";
import { Veille } from "./components/Veille";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-paccard-blue-dark antialiased">
      <Navbar />
      <main>
        <Hero />
        <Parcours />
        <Entreprise />
        <Competences />
        <Projets />
        <Veille />
      </main>
      <Footer />
    </div>
  );
}

export default App;
