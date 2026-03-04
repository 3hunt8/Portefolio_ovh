import React, { useState, useEffect, useRef } from 'react';

interface VeilleSource {
  id: string;
  name: string;
  url: string;
  logo: string;
  category: string;
}

interface VeilleArticle {
  id: string;
  title: string;
  description: string;
  date: string;
  sourceId: string;
  link: string;
}

export function Veille() {
  // Définition des sources de veille
  const veilleSources: VeilleSource[] = [
    {
      id: "zdnet",
      name: "ZDNet",
      url: "https://www.zdnet.fr",
      logo: "https://ext.same-assets.com/222451975/zdnet-logo.png",
      category: "Actualités IT"
    },
    {
      id: "thehackernews",
      name: "The Hacker News",
      url: "https://thehackernews.com",
      logo: "https://ext.same-assets.com/222451975/hackernews-logo.png",
      category: "Sécurité Informatique"
    },
    {
      id: "lebigdata",
      name: "LeBigData",
      url: "https://www.lebigdata.fr",
      logo: "https://ext.same-assets.com/222451975/lebigdata-logo.png",
      category: "Data & Intelligence Artificielle"
    }
  ];

  // Simulation d'articles
  const [articles, setArticles] = useState<VeilleArticle[]>([
    {
      id: "zdnet-1",
      title: "Les nouvelles menaces de cybersécurité en 2025",
      description: "Découvrez les principales menaces informatiques qui émergent cette année et comment s'en protéger efficacement.",
      date: "27 avril 2025",
      sourceId: "zdnet",
      link: "https://www.zdnet.fr"
    },
    {
      id: "zdnet-2",
      title: "Cloud : AWS lance de nouveaux services d'IA",
      description: "Amazon Web Services enrichit son offre avec des services d'intelligence artificielle destinés aux entreprises.",
      date: "25 avril 2025",
      sourceId: "zdnet",
      link: "https://www.zdnet.fr"
    },
    {
      id: "thehackernews-1",
      title: "Nouvelle vulnérabilité critique découverte dans Windows",
      description: "Une faille zero-day affecte plusieurs versions de Windows. Microsoft travaille sur un correctif d'urgence.",
      date: "28 avril 2025",
      sourceId: "thehackernews",
      link: "https://thehackernews.com"
    },
    {
      id: "thehackernews-2",
      title: "Comment les hackers ciblent les infrastructures cloud",
      description: "Les techniques d'attaque évoluent pour cibler spécifiquement les architectures cloud modernes.",
      date: "26 avril 2025",
      sourceId: "thehackernews",
      link: "https://thehackernews.com"
    },
    {
      id: "lebigdata-1",
      title: "Les nouveaux modèles d'IA générative surpassent les précédents",
      description: "Les derniers LLMs établissent de nouveaux records sur les benchmarks standards de performance.",
      date: "28 avril 2025",
      sourceId: "lebigdata",
      link: "https://www.lebigdata.fr"
    },
    {
      id: "lebigdata-2",
      title: "Analyse de données : les tendances à suivre en 2025",
      description: "Découvrez les technologies et méthodologies qui transforment l'analyse de données cette année.",
      date: "24 avril 2025",
      sourceId: "lebigdata",
      link: "https://www.lebigdata.fr"
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSource, setActiveSource] = useState<string | null>(null);

  // Articles filtrés à afficher
  const filteredArticles = activeSource 
    ? articles.filter(article => article.sourceId === activeSource)
    : articles;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // --- CORRECTION 1 : Réinitialiser l'index quand on change de source ---
  // C'est crucial pour éviter d'être sur l'index 5 alors qu'il n'y a que 2 articles
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeSource]);

  const nextSlide = () => {
    // Sécurité si filteredArticles est vide
    if (filteredArticles.length === 0) return;
    setCurrentIndex(prevIndex => 
      prevIndex === filteredArticles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (filteredArticles.length === 0) return;
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? filteredArticles.length - 1 : prevIndex - 1
    );
  };

  // Gestion du défilement automatique
  useEffect(() => {
    // Si pas d'articles ou un seul, pas besoin d'intervalle
    if (filteredArticles.length <= 1) return;

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [filteredArticles.length, activeSource]); // Ajout de activeSource aux dépendances

  const pauseCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resumeCarousel = () => {
    if (!intervalRef.current && filteredArticles.length > 1) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  };

  const getSourceDetails = (sourceId: string) => {
    return veilleSources.find(source => source.id === sourceId);
  };

  // Simulation API (inchangée)
  useEffect(() => {
    const fetchNewArticles = () => {
      // console.log("Mise à jour des articles de veille...");
      const mockNewArticle: VeilleArticle = {
        id: `update-${Date.now()}`,
        title: `Mise à jour auto: ${new Date().toLocaleTimeString()}`,
        description: "Nouvelle actualité détectée en temps réel.",
        date: new Date().toLocaleDateString('fr-FR'),
        sourceId: veilleSources[Math.floor(Math.random() * veilleSources.length)].id,
        link: "#"
      };
      // On garde max 20 articles pour ne pas surcharger
      setArticles(prevArticles => [mockNewArticle, ...prevArticles].slice(0, 20));
    };
    const updateInterval = setInterval(fetchNewArticles, 30000);
    return () => clearInterval(updateInterval);
  }, []);

  return (
    // NOTE: J'ai changé 'bg-paccard-blue-dark' par 'bg-gray-900' au cas où ta classe perso n'est pas définie
    <section id="veille" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ma Veille Technologique</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Suivez l'actualité IT en temps réel grâce à ma veille automatisée.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            className={`px-4 py-2 rounded-full transition-colors ${activeSource === null ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
            onClick={() => setActiveSource(null)}
          >
            Toutes les sources
          </button>
          
          {veilleSources.map(source => (
            <button 
              key={source.id}
              className={`px-4 py-2 rounded-full transition-colors ${activeSource === source.id ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
              onClick={() => setActiveSource(source.id)}
            >
              {source.name}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div 
          className="relative max-w-4xl mx-auto overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm shadow-xl border border-white/10"
          onMouseEnter={pauseCarousel}
          onMouseLeave={resumeCarousel}
          style={{ minHeight: '400px' }} // Force une hauteur minimale
        >
          {filteredArticles.length > 0 ? (
            <>
              {/* Conteneur des slides */}
              <div className="relative h-96 w-full">
                {filteredArticles.map((article, index) => {
                  const source = getSourceDetails(article.sourceId);
                  // Calcul pour savoir si c'est la slide active
                  const isActive = index === currentIndex;
                  
                  return (
                    <div 
                      key={article.id} 
                      className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out p-6 flex flex-col justify-center
                        ${isActive ? 'opacity-100 z-10 translate-x-0' : 'opacity-0 z-0 translate-x-4 pointer-events-none'}
                      `}
                    >
                      <div className="flex items-center mb-4">
                        {source && (
                          <>
                            <img 
                              src={source.logo} 
                              alt={source.name} 
                              className="w-10 h-10 object-contain mr-3 bg-white rounded p-1"
                            />
                            <div>
                              <span className="text-blue-400 text-xs uppercase font-bold tracking-wider">{source.category}</span>
                              <h4 className="text-gray-200 text-sm font-medium">{source.name}</h4>
                            </div>
                            <span className="ml-auto text-gray-400 text-sm border border-gray-700 px-2 py-1 rounded">{article.date}</span>
                          </>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{article.title}</h3>
                      <p className="text-gray-300 mb-6 text-lg line-clamp-3">{article.description}</p>
                      
                      <div>
                        <a 
                          href={article.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                          Lire l'article
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Boutons de navigation (affichés seulement s'il y a plus d'1 article) */}
              {filteredArticles.length > 1 && (
                <>
                  <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 hover:bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all z-20 backdrop-blur-md"
                    onClick={prevSlide}
                    aria-label="Précédent"
                  >
                    &#10094;
                  </button>
                  
                  <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 hover:bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all z-20 backdrop-blur-md"
                    onClick={nextSlide}
                    aria-label="Suivant"
                  >
                    &#10095;
                  </button>

                  {/* Indicateurs (dots) */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                    {filteredArticles.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-500 w-8' : 'bg-white/30 hover:bg-white/50'}`}
                        onClick={() => setCurrentIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            // Message si aucun article
            <div className="flex items-center justify-center h-96 text-gray-400">
              <p>Aucun article disponible pour cette source.</p>
            </div>
          )}
        </div>

        {/* Section Config (Simplifiée pour l'affichage) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
           <div className="bg-white/5 p-4 rounded border border-white/5">
             <strong className="text-white block mb-1">Sources RSS</strong>
             Agrégation automatique depuis 3 sites spécialisés.
           </div>
           <div className="bg-white/5 p-4 rounded border border-white/5">
             <strong className="text-white block mb-1">Mise à jour</strong>
             Rafraîchissement toutes les 30 minutes.
           </div>
           <div className="bg-white/5 p-4 rounded border border-white/5">
             <strong className="text-white block mb-1">Stack</strong>
             React + Tailwind + RSS Parser.
           </div>
        </div>
      </div>
    </section>
  );
}