import React, { useState } from 'react';

// Données des projets avec liens d'images uniques
const projetsData = [
  // --- PROJETS SCOLAIRES ---
  {
    id: "projet-1",
    category: "scolaire",
    title: "PRA & Sauvegarde",
    description: "Mise en place d'un Plan de Reprise d'Activité.",
    details: "Mise en œuvre d'un serveur UrBackup sur Debian en DMZ. Configuration de pfSense pour le filtrage et routage vers un hôte Windows physique servant de cible de stockage SMB.",
    // REMPLACE CE LIEN PAR TON IMAGE CLOUDFLARE
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop", 
    technologies: ["UrBackup", "Windows Server", "pfSense", "Debian"],
    pdf: "https://pub-0059eb78551446a0ac8e717c896e0b02.r2.dev/procedure/procedure_backup.pdf",
    link: "#"
  },
  {
    id: "projet-2",
    category: "scolaire",
    title: "Interface Web",
    description: "Création d'une interface moderne pour une application de gestion.",
    details: "Projet de fin de semestre axé sur l'UX/UI. Utilisation des hooks React avancés et gestion d'état globale.",
    // REMPLACE CE LIEN PAR TON IMAGE CLOUDFLARE
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
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
    // REMPLACE CE LIEN PAR TON IMAGE CLOUDFLARE
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2000&auto=format&fit=crop",
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
    // REMPLACE CE LIEN PAR TON IMAGE CLOUDFLARE
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
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
  technologies: string[];
  pdf: string;
  link: string;
};

const ProjectCard = ({ projet }: { projet: ProjetType }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group h-96 w-full [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        
        {/* --- FACE AVANT --- */}
        <div 
          className="absolute inset-0 [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg"
          style={{ 
            backgroundImage: `url('${projet.image}')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
          {/* Overlay sombre pour la lisibilité */}
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="text-2xl font-bold text-white mb-2">{projet.title}</h3>
            <p className="text-gray-200 mb-4 text-sm">{projet.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {projet.technologies.map((tech) => (
                <span key={tech} className="bg-blue-600/40 border border-blue-400/30 text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* --- FACE ARRIÈRE --- */}
        <div className="absolute inset-0 h-full w-full rounded-lg bg-slate-900 px-8 py-10 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] border border-white/10 shadow-xl flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold text-white mb-4">{projet.title}</h3>
          <p className="text-gray-400 text-xs leading-relaxed mb-6">{projet.details}</p>

          <a 
            href={projet.pdf} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded font-medium flex items-center justify-center gap-2 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Voir le PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export function Projets() {
  const projetsScolaires = projetsData.filter(p => p.category === 'scolaire');
  const projetsPros = projetsData.filter(p => p.category === 'pro');

  return (
    <section id="projets" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* SECTION SCOLAIRE */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-8 flex items-center gap-4">
            Projets Scolaires
            <span className="h-px bg-slate-800 flex-grow"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projetsScolaires.map(p => <ProjectCard key={p.id} projet={p} />)}
          </div>
        </div>

        {/* SECTION PRO */}
        <div>
          <h3 className="text-2xl font-semibold text-emerald-400 mb-8 flex items-center gap-4">
            Expérience Professionnelle
            <span className="h-px bg-slate-800 flex-grow"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projetsPros.map(p => <ProjectCard key={p.id} projet={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}