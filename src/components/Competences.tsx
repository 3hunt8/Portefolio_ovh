import { useState } from 'react';
import { ChevronDown, ChevronUp, FileText } from 'lucide-react'; // Ajout de FileText pour l'icône du PDF

// Définition des types pour une meilleure sécurité TypeScript
type Skill = {
  name: string;
  level: number;
};

type Competence = {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
};

type AccordionState = {
  [key: string]: boolean;
};

export default function Competences() {
  const competences: Competence[] = [
    {
      id: "sys-reseau",
      title: "Systèmes & Réseaux",
      icon: "https://ext.same-assets.com/222451975/3520346250.png",
      skills: [
        { name: "Linux", level: 40 },
        { name: "Windows Server", level: 70 },
        { name: "Cisco", level: 15 },
        { name: "Virtualisation", level: 60 }
      ],
    },
    {
      id: "securite",
      title: "Sécurité",
      icon: "https://ext.same-assets.com/222451975/3105770190.png",
      skills: [
        { name: "Firewall", level: 35 },
        { name: "Pentest", level: 10 },
        { name: "Audit", level: 10 },
        { name: "Cryptographie", level: 10 }
      ],
    },
    {
      id: "dev-web",
      title: "Développement Web",
      icon: "https://ext.same-assets.com/222451975/1559505571.png",
      skills: [
        { name: "HTML/CSS", level: 50 },
        { name: "JavaScript", level: 15 },
        { name: "React.js", level: 40 },
        { name: "PHP", level: 15 }
      ],
    },
    {
      id: "database",
      title: "Base de données",
      icon: "https://ext.same-assets.com/222451975/2654731683.png",
      skills: [
        { name: "SQL", level: 10 },
        { name: "MySQL", level: 10 },
        { name: "XAMPP", level: 30 },
        { name: "PostgreSQL", level: 10 }
      ],
    },
  ];
        
  // État pour suivre quels accordéons sont ouverts
  const [openAccordions, setOpenAccordions] = useState<AccordionState>({
    "dev-web": true,
    "sys-reseau": false,
    "securite": false,
    "database": false,
    "tableau-pdf": true // On l'initialise à true ou false selon votre préférence
  });

  // Fonction pour basculer l'état d'un accordéon
  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Mes Compétences</h2>
        <p className="text-gray-600">
          Découvrez mon expertise technique et professionnelle dans différents domaines
          de l'informatique et du développement.
        </p>
      </div>
      
      {/* Liste des compétences dynamiques */}
      <div className="space-y-4">
        {competences.map((competence) => (
            <div 
            key={competence.id} 
            className="bg-gray-800 rounded-lg shadow overflow-hidden"
            >
            <div 
              className="flex items-center justify-between p-4 cursor-pointer bg-gray-800 hover:bg-gray-700"
              onClick={() => toggleAccordion(competence.id)}
            >
              <div className="flex items-center">
              <img 
                src={competence.icon} 
                alt={competence.title} 
                className="w-8 h-8 mr-3 rounded bg-gray-700 p-1"
              />
              <h3 className="font-semibold text-lg text-gray-100">{competence.title}</h3>
              </div>
              {openAccordions[competence.id] ? (
              <ChevronUp size={20} className="text-gray-200" />
              ) : (
              <ChevronDown size={20} className="text-gray-200" />
              )}
            </div>
            
            {openAccordions[competence.id] && (
              <div className="p-4 bg-gray-900 border-t border-gray-700">
              <div className="space-y-4">
                {competence.skills.map((skill, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                  <span className="text-sm font-medium text-gray-200">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-blue-400 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                  </div>
                </div>
                ))}
              </div>
              </div>
            )}
            </div>
        ))}

        {/* Section PDF transformée en Accordéon */}
        <div className="bg-gray-800 rounded-lg shadow overflow-hidden mt-8">
            <div 
                className="flex items-center justify-between p-4 cursor-pointer bg-gray-800 hover:bg-gray-700"
                onClick={() => toggleAccordion("tableau-pdf")}
            >
                <div className="flex items-center">
                    {/* Icône générique pour le PDF pour garder la cohérence */}
                    <div className="w-8 h-8 mr-3 rounded bg-gray-700 p-1 flex items-center justify-center">
                        <FileText className="text-blue-400" size={20} />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-100">Mon Tableau de compétences</h3>
                </div>
                {openAccordions["tableau-pdf"] ? (
                    <ChevronUp size={20} className="text-gray-200" />
                ) : (
                    <ChevronDown size={20} className="text-gray-200" />
                )}
            </div>

            {openAccordions["tableau-pdf"] && (
                <div className="p-4 bg-gray-900 border-t border-gray-700">
                     {/* J'ai gardé le fond blanc ici ou gris clair pour que le PDF ressorte bien, ou vous pouvez laisser transparent */}
                    <div className="bg-white rounded overflow-hidden"> 
                        <iframe
                            src="\src\assets\tc\tableaux.pdf"
                            className="w-full h-[800px] border border-gray-300"
                            title="Tableaux de compétences"
                        />
                    </div>
                </div>
            )}
        </div>

      </div>
    </div>
  );
}