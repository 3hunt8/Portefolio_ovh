import { useState } from 'react';
import { GraduationCap, Briefcase, Calendar, ArrowRight, MapPin, Award } from 'lucide-react';

// Définition du type pour les items (compétences)
interface CompetenceItem {
  id: string;
  title: string;
  icon: string;
  skills: string[];
  periode?: string;
  location?: string;
  description?: string;
  type?: 'Stage' | 'Alternance' | 'Formation';
}

export function Parcours() {
  // État pour suivre l'élément sur lequel on survole
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  // État pour l'onglet actif (éducation ou professionnel)
  const [activeTab, setActiveTab] = useState<'education' | 'professionnel'>('education');

  const competencesEducation: CompetenceItem[] = [
    {
      id: "ISETA",
      title: "ISETA",
      icon: "https://iseta-eca.fr/wp-content/uploads/2024/04/Logo-iseta-eca-1-1536x509.jpg",
      skills: ["3ème Agricole"],
      periode: "Septembre 2020 - Juin 2021",
      location: "Chavanod",
      description: "Formation générale avec une orientation vers le domaine agricole.",
      type: "Formation"
    },
    {
      id: "LPH",
      title: "Lycée Polyvalent Paul-Héroult",
      icon: "https://lycee-paul-heroult.fr/wp-content/uploads/2019/05/logo-lycee-paul-heroult.png",
      skills: ["2nd MTNE", "1ère Systèmes Numériques", "Terminale Systèmes Numériques (en alternance)"],
      periode: "Septembre 2021 - Juin 2024",
      location: "Saint-Jean-de-Maurienne",
      description: "Spécialisation progressive dans le domaine des systèmes numériques avec une dernière année en alternance.",
      type: "Formation"
    },
    {
      id: "ECORIS",
      title: "ECORIS",
      icon: "https://imgs.search.brave.com/uP8nloC4vttySRe1aWv5R4tkc_rUraNOm4XxBSmW3ok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmhl/bGxvd29yay5jb20v/OVA5UWZsN1kwbG5K/ZkREQWdfRnNKalFQ/Q1psQUdPUFNJdWhI/eXg5X01EOC93OjIy/NS9oOjE2OC9ydDpm/aXQvZzpzbS9iRzlq/WVd3Nkx5OHZaV1Iw/WldOb0wyVjBZV0pz/YVhOelpXMWxiblF2/Ykc5bmJ5OHhOemcy/THprME5tTmtabUpo/TFdVMU16Z3ROREk1/TnkwNFltVTBMVGN5/TUdKak1UTTFPR1Uw/TkM1emRtYy5zdmc",
      skills: ["BTS SIO SISR"],
      periode: "Septembre 2024 - Avril 2026",
      location: "Chambéry",
      description: "Formation spécialisée en Solutions d'Infrastructure, Systèmes et Réseaux (SISR).",
      type: "Formation"
    },
  ];

  const competencesProfessionnelles: CompetenceItem[] = [
    {
      id: "entreprise1",
      title: "Neo-Logic",
      icon: "s\src\assets\image\neologic.png",
      skills: ["Support Technique", "Maintenance informatique", "Installation réseaux"],
      periode: "Mars 2021 - Avril 2021",
      location: "Saint-Jean-de-Maurienne",
      description: "Stage de formation avec une forte orientation sur le support technique et les interventions sur site.",
      type: "Stage"
    },
    {
      id: "entreprise2",
      title: "Labellemontagne",
      icon: "https://imgs.search.brave.com/bIJ0eOUBAjDHh5odaEg85nypx22WUD_wlY3lxuc6iao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubmVvcHNlLmNv/bS9tZWRpYXMvcC8x/MzM1L3NpdGUvMTkv/Y2EvZGEvMTljYWRh/M2RjZjc0ZjdhNDVm/NWE3YzU4NmFhMGQx/ZjQwYTMwNDA2MS5q/cGc_dj12MQ",
      skills: ["Administration réseaux", "Sécurité informatique", "Support utilisateurs"],
      periode: "Septembre 2022 - Juin 2023",
      location: "Saint-Jean-de-Maurienne",
      description: "Alternance en entreprise pendant ma Terminale, avec des responsabilités croissantes en gestion de l'infrastructure réseau.",
      type: "Alternance"
    },
    {
      id: "entreprise3",
      title: "Saf Aerogroup",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Logo-saf-aerogroup.png/330px-Logo-saf-aerogroup.png",
      skills: ["Active Directory", "Maintiens du parc informatique", "Support niveau 1"],
      periode: "Septembre 2024 - Août 2026",
      location: "Notre-Dame-Des-Millières",
      description: "Alternance chez SAF Aerogroup en tant qu’administrateur IT, où je gère les comptes Active Directory, maintiens le parc informatique et assure le support utilisateur.",
      type: "Alternance"
    },
  ];

  // Fonction pour créer les cartes avec la même structure, avec type explicite
  const renderCards = (items: CompetenceItem[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-blue-500/20 transition-all duration-500"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Effet de lueur au survol */}
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 ${hoveredItem === item.id ? 'opacity-100' : ''} transition-opacity duration-300`}></div>
            
            {/* Ligne décorative du haut */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center mr-4 bg-white/10 rounded-lg p-2">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  {item.type && (
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-1 mr-2 ${
                      item.type === 'Stage' ? 'bg-green-500/20 text-green-300' : 
                      item.type === 'Alternance' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-purple-500/20 text-purple-300'
                    }`}>
                      {item.type}
                    </span>
                  )}
                  {item.periode && (
                    <div className="flex items-center text-sm text-blue-300 mt-1">
                      <Calendar size={14} className="mr-1" />
                      <span>{item.periode}</span>
                    </div>
                  )}
                </div>
              </div>
              
              {item.location && (
                <div className="flex items-center text-sm text-gray-300 mb-4">
                  <MapPin size={14} className="mr-1 text-purple-300" />
                  <span>{item.location}</span>
                </div>
              )}
              
              {item.description && (
                <p className="text-gray-400 mb-4 text-sm">{item.description}</p>
              )}

              <div className="space-y-2 mt-4">
                <h4 className="text-sm font-semibold text-blue-300 flex items-center">
                  <Award size={16} className="mr-2" />
                  COMPÉTENCES CLÉS
                </h4>
                {item.skills.map((skill) => (
                  <div key={`${item.id}-${skill}`} className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
              
              {/* Animation au survol */}
              <div className={`absolute bottom-3 right-3 transform ${hoveredItem === item.id ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'} transition-all duration-300`}>
                <ArrowRight size={18} className="text-purple-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="parcours" className="py-20 bg-gradient-to-b from-paccard-blue-dark to-blue-900">
      <div className="container mx-auto px-4">
        {/* En-tête avec animation */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Mon Parcours
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Découvrez mon parcours académique et professionnel qui façonne mon expertise en systèmes d'information.
          </p>
        </div>

        {/* Onglets pour basculer entre éducation et expérience professionnelle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-800/50 backdrop-blur-sm p-1">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <GraduationCap size={18} className="mr-2" />
              <span>Éducation</span>
            </button>
            <button
              onClick={() => setActiveTab('professionnel')}
              className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                activeTab === 'professionnel'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Briefcase size={18} className="mr-2" />
              <span>Professionnel</span>
            </button>
          </div>
        </div>

        {/* Contenu conditionnel basé sur l'onglet actif */}
        <div className="transition-all duration-500">
          {activeTab === 'education' ? (
            <>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">Parcours Éducatif</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Mon chemin d'apprentissage et de spécialisation dans le domaine numérique.
                </p>
              </div>
              {renderCards(competencesEducation)}
            </>
          ) : (
            <>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">Parcours Professionnel</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Mes expériences professionnelles et les compétences acquises en entreprise.
                </p>
              </div>
              {renderCards(competencesProfessionnelles)}
            </>
          )}
        </div>
      </div>
    </section>
  );
}