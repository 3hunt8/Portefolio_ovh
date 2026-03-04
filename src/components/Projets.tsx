import React, { useState } from 'react';

// Données des projets mises à jour avec catégories et détails
const projetsData = [
  // --- PROJETS SCOLAIRES ---
  {
    id: "projet-1",
    category: "scolaire",
    title: "API REST",
    description: "Développement d'une API RESTful pour la gestion de données.",
    details: "Ce projet a été réalisé lors de ma 2ème année. L'objectif était de comprendre l'architecture MVC et la gestion des routes sécurisées avec JWT.",
    image: "bg-project1", // Assure-toi que cette classe gère bien l'image de fond
    technologies: ["Node.js", "Express", "MongoDB"],
    pdf: "/documents/rapport-api.pdf", // Lien fictif vers ton PDF
    link: "#"
  },
  {
    id: "projet-2",
    category: "scolaire",
    title: "Interface Web",
    description: "Création d'une interface moderne pour une application de gestion.",
    details: "Projet de fin de semestre axé sur l'UX/UI. Utilisation des hooks React avancés et gestion d'état globale.",
    image: "bg-project2",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    pdf: "/documents/maquette-web.pdf",
    link: "#"
  },
  // --- PROJETS PROFESSIONNELS ---
  {
    id: "projet-3",
    category: "pro",
    title: "Système Linux",
    description: "Configuration d'un serveur Linux pour l'hébergement d'applications.",
    details: "Mise en place pour le client Alpha. Automatisation des sauvegardes via Cron et sécurisation SSH.",
    image: "bg-project3",
    technologies: ["Ubuntu", "Docker", "Nginx"],
    pdf: "/documents/doc-linux.pdf",
    link: "#"
  },
  {
    id: "projet-4",
    category: "pro",
    title: "Sécurité réseau",
    description: "Mise en place d'une infrastructure sécurisée pour une entreprise.",
    details: "Audit de sécurité et implémentation d'un pare-feu pfSense avec segmentation VLAN pour isoler les services critiques.",
    image: "bg-project4",
    technologies: ["Firewall", "VPN", "Monitoring"],
    pdf: "/documents/audit-secu.pdf",
    link: "#"
  }
];

type ProjetType = {
  id: string;
  category: string;
  title: string;
  description: string;
  details: string;
  image: string;
  technologies: string[]; // C'est un tableau de chaînes de caractères
  pdf: string;
  link: string;
};

// Sous-composant pour la carte individuelle (Gère l'animation)
const ProjectCard = ({ projet }: { projet: ProjetType }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="group h-96 w-full [perspective:1000px] cursor-pointer"
      onClick={handleFlip}
    >
      {/* Conteneur Interne qui tourne */}
      <div className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        
        {/* --- FACE AVANT --- */}
        <div className={`absolute inset-0 [backface-visibility:hidden] ${projet.image} bg-cover bg-center rounded-lg overflow-hidden shadow-lg`}>
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-gradient-to-t from-paccard-blue-dark via-paccard-blue-dark/70 to-transparent opacity-80" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="text-2xl font-bold text-white mb-2">{projet.title}</h3>
            <p className="text-gray-300 mb-4">{projet.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {projet.technologies.map((tech: string) => (
                <span key={`${projet.id}-${tech}`} className="bg-blue-light/30 text-white text-xs px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            
            <span className="text-blue-light text-sm flex items-center mt-2">
              Cliquez pour plus de détails
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>

        {/* --- FACE ARRIÈRE (Retournée) --- */}
        <div className="absolute inset-0 h-full w-full rounded-lg bg-gray-900 px-8 py-10 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] border border-white/10 shadow-xl flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold text-white mb-4">{projet.title}</h3>
          
          <div className="flex-grow flex items-center">
            <p className="text-gray-300 text-sm leading-relaxed">
              {projet.details}
            </p>
          </div>

          <div className="mt-6 w-full space-y-3">
            {/* Bouton PDF */}
            <a 
              href={projet.pdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full py-2 px-4 bg-red-600/80 hover:bg-red-600 text-white rounded transition-colors flex items-center justify-center gap-2"
              onClick={(e) => e.stopPropagation()} // Empêche la carte de se retourner quand on clique sur le lien
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Voir le PDF
            </a>

             {/* Bouton Retour (Optionnel, car on peut cliquer partout) */}
             <button className="text-gray-400 text-xs hover:text-white mt-2">
              (Cliquez pour retourner)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export function Projets() {
  // Séparation des projets
  const projetsScolaires = projetsData.filter(p => p.category === 'scolaire');
  const projetsPros = projetsData.filter(p => p.category === 'pro');

  return (
    <section id="projets" className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Mes Projets</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez les différents projets sur lesquels j'ai travaillé pendant ma formation et mon expérience professionnelle.
          </p>
        </div>

        {/* --- SECTION SCOLAIRE --- */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Projets Scolaires
            </h3>
            <div className="h-px bg-white/10 flex-grow ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projetsScolaires.map((projet) => (
              <ProjectCard key={projet.id} projet={projet} />
            ))}
          </div>
        </div>

        {/* --- SECTION PROFESSIONNELLE --- */}
        <div>
          <div className="flex items-center mb-8">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              Expérience Professionnelle
            </h3>
            <div className="h-px bg-white/10 flex-grow ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projetsPros.map((projet) => (
              <ProjectCard key={projet.id} projet={projet} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}