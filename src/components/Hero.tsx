import { useState, useEffect } from 'react';
import { Linkedin, ChevronDown, Mail, MapPin, Calendar, Car } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedHobby, setSelectedHobby] = useState<string | null>(null);

  // Liste des loisirs avec icônes et descriptions
  const hobbies = [
    { 
      id: 'chasse', 
      name: 'Chasse',
      icon: '🐗',
      description: 'Passionné de chasse et des activités en pleine nature'
    },
    { 
      id: 'montagne', 
      name: 'Montagne',
      icon: '🏔️',
      description: 'Exploration et découverte des massifs montagneux'
    },
    { 
      id: 'randonnee', 
      name: 'Randonnée',
      icon: '🥾',
      description: 'Parcours de sentiers et découverte de paysages à pied'
    },
    { 
      id: 'rugby', 
      name: 'Rugby',
      icon: '🏉',
      description: 'Pratique et passion pour le rugby'
    },
    { 
      id: 'amis', 
      name: 'Sorties',
      icon: '🍻',
      description: 'Moments conviviaux et sorties entre amis'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const loadAnimation = () => {
      setIsLoaded(true);
    };

    window.addEventListener('scroll', handleScroll);
    // Déclencher l'animation après un court délai
    setTimeout(loadAnimation, 300);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-10 translate-x-1/3 translate-y-1/3" />
      
      {/* Grille de points décorative */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full w-full">
          {Array(144).fill(0).map((_, i) => (
            <div key={i} className="flex justify-center items-center">
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      <div className={`relative z-10 container mx-auto h-full py-16 md:py-0 flex flex-col md:flex-row items-center justify-center transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl max-w-md mx-4 md:mx-8 transform hover:scale-105 transition-all duration-300">
          <div className="flex flex-col items-center md:items-start">
            <div className="relative mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse group-hover:animate-none opacity-75 blur-md"></div>
              <div className="relative">
                <br />
                <img
                  src="https://pub-0059eb78551446a0ac8e717c896e0b02.r2.dev/image/ppalexis%20(2).jpeg"
                  alt="Alexis Neyroud"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-white" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Alexis NEYROUD</h1>            
              "C'est pas ce qu'on sait qui fait la différence, mais ce qu'on fait"
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-4"></div>
            <p className="text-gray-200 text-sm font-medium tracking-widest mb-8 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              ALTERNANT SYSTÈME D'INFORMATION

            </p>

            <div className="flex space-x-6 mb-8">
              <a 
                href="https://www.linkedin.com/in/alexis-neyroud-714374304/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="group"
              >
                <span className="sr-only">LinkedIn</span>
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-blue-600 transition-all duration-300 group-hover:rotate-6">
                  <Linkedin size={20} className="text-white" />
                </div>
              </a>
              <a 
                href="mailto:contact@alexisneyroud.fr" 
                aria-label="Email"
                className="group"
              >
                <span className="sr-only">Email</span>
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-purple-600 transition-all duration-300 group-hover:rotate-6">
                  <Mail size={20} className="text-white" />
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-left">
            <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
              <MapPin size={20} className="text-blue-300" />
              <div>
                <p className="text-gray-400 text-xs uppercase">LOCALISATION</p>
                <p className="text-white font-medium">Saint Rémy de Maurienne, FRANCE</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
              <Calendar size={20} className="text-purple-300" />
              <div>
                <p className="text-gray-400 text-xs uppercase">ÂGE</p>
                <p className="text-white font-medium">19 ans</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
              <Car size={20} className="text-green-300" />
              <div>
                <p className="text-gray-400 text-xs uppercase">MOBILITÉ</p>
                <p className="text-white font-medium">Permifié et véhiculé</p>
              </div>
            </div>

            {/* Nouvelle section Loisirs */}
            <div className="mt-4">
              <p className="text-gray-300 text-sm uppercase font-medium mb-3">MES LOISIRS</p>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.id}
                    className={`px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 flex items-center ${
                      selectedHobby === hobby.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                    onClick={() => setSelectedHobby(selectedHobby === hobby.id ? null : hobby.id)}
                  >
                    <span className="mr-2 text-lg">{hobby.icon}</span>
                    <span className="text-white text-sm">{hobby.name}</span>
                  </div>
                ))}
              </div>
              
              {/* Description du loisir sélectionné */}
              {selectedHobby && (
                <div className="mt-3 p-3 bg-white/5 rounded-lg border border-white/10 animate-fadeIn">
                  <p className="text-gray-200 text-sm">
                    {hobbies.find(h => h.id === selectedHobby)?.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="ml-0 md:ml-12 mt-8 md:mt-0 text-center md:text-left transform transition-all duration-700" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              Découvrez
            </span>
            <span className="block text-white">
              Mon Univers Digital
            </span>
          </h2>
          
          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900">
            Moi c'est Alexis NEYROUD j'ai 19 ans et je suis actuellement en alternance en tant que Technicien Système d'Information chez SAF AEROGROUP, tout en poursuivant mes études à ECORIS à Chambéry.
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
        <a href="#about" className="flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-sm mb-2">Découvrir plus</span>
          <ChevronDown size={24} className="text-white" />
        </a>
      </div>
    </section>
  );
}