import React, { useState } from 'react';

// 1. Déclaration de Lucide (pour l'interface et les catégories)
import { 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  Server, 
  Shield, 
  Code, 
  Database 
} from 'lucide-react';

// 2. Déclaration de React-Icons (pour ta Stack)
import { FaReact, FaPhp, FaLinux, FaWindows } from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';

// Définition des types
type Skill = {
  name: string;
  level: number;
};

type Competence = {
  id: string;
  title: string;
  icon: string | React.ReactNode; 
  skills: Skill[];
};

export default function Competences() {
  const competences: Competence[] = [
    {
      id: "sys-reseau",
      title: "Systèmes & Réseaux",
      icon: <Server className="text-blue-400" size={20} />,
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
      icon: <Shield className="text-blue-400" size={20} />,
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
      icon: <Code className="text-blue-400" size={20} />,
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
      icon: <Database className="text-blue-400" size={20} />,
      skills: [
        { name: "SQL", level: 10 },
        { name: "MySQL", level: 10 },
        { name: "XAMPP", level: 30 },
        { name: "PostgreSQL", level: 10 }
      ],
    },
  ];

  const [openAccordion, setOpenAccordion] = useState<string | null>("dev-web");

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => (prev === id ? null : id));
  };

  const renderDots = (percentage: number) => {
    const levelSur5 = Math.round(percentage / 20);
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`w-1.5 h-1.5 rounded-full ${
              dot <= levelSur5 ? 'bg-blue-400' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-100 mb-4">Mes Compétences</h2>
        <p className="text-gray-400">
          Découvrez mon expertise technique et professionnelle dans différents domaines
          de l'informatique et du développement.
        </p>
      </div>

      {/* --- SECTION : MA STACK --- */}
      <div className="mb-10 bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
        <h3 className="text-lg font-semibold text-gray-100 mb-6 text-center">Ma Stack Principale</h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          
          <div className="flex flex-col items-center group cursor-default">
            <FaReact className="text-4xl text-gray-400 group-hover:text-[#61DAFB] transition-colors duration-300 mb-2" />
            <span className="text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors">React</span>
          </div>

          <div className="flex flex-col items-center group cursor-default">
            <SiTailwindcss className="text-4xl text-gray-400 group-hover:text-[#38B2AC] transition-colors duration-300 mb-2" />
            <span className="text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors">Tailwind</span>
          </div>

          <div className="flex flex-col items-center group cursor-default">
            <FaPhp className="text-4xl text-gray-400 group-hover:text-[#777BB4] transition-colors duration-300 mb-2" />
            <span className="text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors">PHP</span>
          </div>

          <div className="flex flex-col items-center group cursor-default">
            <SiMysql className="text-4xl text-gray-400 group-hover:text-[#4479A1] transition-colors duration-300 mb-2" />
            <span className="text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors">MySQL</span>
          </div>

          <div className="flex flex-col items-center group cursor-default">
            <FaLinux className="text-4xl text-gray-400 group-hover:text-white transition-colors duration-300 mb-2" />
            <span className="text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors">Linux</span>
          </div>

          <div className="flex flex-col items-center group cursor-default">
            <FaWindows className="text-4xl text-gray-400 group-hover:text-[#0078D6] transition-colors duration-300 mb-2" />
            <span className="text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors">Windows Server</span>
          </div>

        </div>
      </div>
      {/* --- FIN SECTION STACK --- */}
      
      {/* --- SECTION ACCORDÉONS --- */}
      <div className="space-y-4">
        {competences.map((competence) => (
          <div 
            key={competence.id} 
            className="bg-gray-800 rounded-lg shadow overflow-hidden transition-colors duration-200"
          >
            <div 
              className="flex items-center justify-between p-4 cursor-pointer bg-gray-800 hover:bg-gray-700"
              onClick={() => toggleAccordion(competence.id)}
            >
              <div className="flex items-center">
                {typeof competence.icon === 'string' ? (
                  <img 
                    src={competence.icon} 
                    alt={competence.title} 
                    className="w-8 h-8 mr-3 rounded bg-gray-700 p-1"
                  />
                ) : (
                  <div className="w-8 h-8 mr-3 rounded bg-gray-700 p-1 flex items-center justify-center">
                    {competence.icon}
                  </div>
                )}
                <h3 className="font-semibold text-lg text-gray-100">{competence.title}</h3>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-xs font-medium text-gray-400 hidden sm:block">
                  {competence.skills.length} compétences
                </span>
                {openAccordion === competence.id ? (
                  <ChevronUp size={20} className="text-blue-400" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400" />
                )}
              </div>
            </div>
            
            {openAccordion === competence.id && (
              <div className="px-6 pb-6 pt-2 bg-gray-900 border-t border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-4">
                  {competence.skills.map((skill, index) => {
                    const levelSur5 = Math.round(skill.level / 20);
                    
                    return (
                      <div key={index} className="flex flex-col space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-200">
                            {skill.name}
                          </span>
                          {renderDots(skill.level)}
                        </div>
                        
                        <div className="flex justify-between items-center text-gray-400 text-xs font-medium">
                          <span>Niveau</span>
                          <span>{levelSur5}/5</span>
                        </div>
                        
                        <div className="w-full bg-gray-700 rounded-full h-1.5">
                          <div 
                            className="bg-blue-400 h-1.5 rounded-full transition-all duration-500" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* --- SECTION PDF --- */}
        <div className="bg-gray-800 rounded-lg shadow overflow-hidden mt-8">
            <div 
                className="flex items-center justify-between p-4 cursor-pointer bg-gray-800 hover:bg-gray-700"
                onClick={() => toggleAccordion("tableau-pdf")}
            >
                <div className="flex items-center">
                    <div className="w-8 h-8 mr-3 rounded bg-gray-700 p-1 flex items-center justify-center">
                        <FileText className="text-blue-400" size={20} />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-100">Mon Tableau de compétences</h3>
                </div>
                {openAccordion === "tableau-pdf" ? (
                    <ChevronUp size={20} className="text-blue-400" />
                ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                )}
            </div>

            {openAccordion === "tableau-pdf" && (
                <div className="p-4 bg-gray-900 border-t border-gray-700">
                    <div className="rounded overflow-hidden"> 
                        <iframe
                            src="https://pub-0059eb78551446a0ac8e717c896e0b02.r2.dev/tableau/tableau.pdf"
                            className="w-full h-[800px] border border-gray-700 rounded bg-white"
                            title="Tableaux de compétences"
                        />
                    </div>
                </div>
            )}
        </div>
        {/* --- FIN SECTION PDF --- */}

      </div>
    </div>
  );
}