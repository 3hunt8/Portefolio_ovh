import React, { useState, useEffect } from 'react';

export function Veille() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSource, setActiveSource] = useState<string | null>(null);

  const sources = [
    { id: "zdnet", name: "ZDNet", rss: "https://www.zdnet.fr/feeds/rss/actualites/", category: "IT" },
    { id: "thn", name: "Hacker News", rss: "https://feeds.feedburner.com/TheHackersNews", category: "Sécurité" },
  ];

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const allFetched: any[] = [];
      for (const source of sources) {
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(source.rss)}`);
        const data = await res.json();
        if (data.status === 'ok') {
          const items = data.items.map((item: any) => ({
            id: item.guid || item.link,
            title: item.title,
            description: item.description.replace(/<[^>]*>?/gm, '').substring(0, 180) + "...",
            date: new Date(item.pubDate).toLocaleDateString('fr-FR'),
            link: item.link,
            sourceId: source.id,
            sourceName: source.name,
            category: source.category
          }));
          allFetched.push(...items);
        }
      }
      setArticles(allFetched.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 20));
    } catch (e) {
      console.error("Erreur", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
    // Rafraîchissement automatique toutes les 30 minutes
    const interval = setInterval(fetchArticles, 1800000);
    return () => clearInterval(interval);
  }, []);

  const filteredArticles = activeSource ? articles.filter(a => a.sourceId === activeSource) : articles;

  const nextSlide = () => setCurrentIndex((prev) => (prev === filteredArticles.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? filteredArticles.length - 1 : prev - 1));

  useEffect(() => { setCurrentIndex(0); }, [activeSource]);

  return (
    <section className="py-12 bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Ma Veille Technologique</h2>

        {/* Filtres */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          <button onClick={() => setActiveSource(null)} className={`px-4 py-2 rounded-full text-xs transition ${!activeSource ? 'bg-blue-600' : 'bg-gray-800'}`}>Toutes</button>
          {sources.map(s => (
            <button key={s.id} onClick={() => setActiveSource(s.id)} className={`px-4 py-2 rounded-full text-xs transition ${activeSource === s.id ? 'bg-blue-600' : 'bg-gray-800'}`}>{s.name}</button>
          ))}
        </div>

        {/* Carousel avec Flèches */}
        <div className="max-w-4xl mx-auto relative flex items-center gap-4">
          {/* Flèche Gauche */}
          <button onClick={prevSlide} className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-600 transition shadow-lg border border-gray-700">
            <span className="text-2xl">❮</span>
          </button>

          <div className="flex-1 bg-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl border border-gray-700 min-h-[350px] flex flex-col justify-center relative overflow-hidden">
            {loading ? (
              <div className="text-center animate-pulse text-blue-400 font-mono">SYNCING_FLUX...</div>
            ) : filteredArticles.length > 0 ? (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="bg-blue-900/50 text-blue-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">{filteredArticles[currentIndex].category}</span>
                  <span className="text-gray-500 text-xs font-mono">{filteredArticles[currentIndex].date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-tight">{filteredArticles[currentIndex].title}</h3>
                <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed">{filteredArticles[currentIndex].description}</p>
                <div className="flex justify-between items-center">
                  <a href={filteredArticles[currentIndex].link} target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105">
                    Lire l'article
                  </a>
                  <span className="text-gray-600 text-sm font-mono">{currentIndex + 1} / {filteredArticles.length}</span>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500">Aucune donnée disponible.</div>
            )}
          </div>

          {/* Flèche Droite */}
          <button onClick={nextSlide} className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-600 transition shadow-lg border border-gray-700">
            <span className="text-2xl">❯</span>
          </button>
        </div>

        {/* Flèches pour Mobile (apparaissent seulement sur petit écran) */}
        <div className="flex justify-center gap-10 mt-6 md:hidden">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">❮</button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">❯</button>
        </div>

        {/* Case "Comment ça marche" */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-blue-900/10 border border-blue-900/30 rounded-2xl p-6">
            <h4 className="flex items-center gap-2 text-blue-400 font-bold mb-4">
              <span className="text-xl">⚙️</span> Architecture du Système
            </h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div className="space-y-2">
                <p className="text-white font-semibold">1. Récupération (Fetch)</p>
                <p>Le système interroge l'API <code className="text-blue-300">rss2json</code> qui convertit les flux XML des sites sources en JSON manipulable par React.</p>
              </div>
              <div className="space-y-2">
                <p className="text-white font-semibold">2. Temps Réel & Cache</p>
                <p>Un rafraîchissement automatique est configuré via <code className="text-blue-300">setInterval</code> toutes les 30 minutes pour garantir des infos fraîches sans saturer le navigateur.</p>
              </div>
              <div className="space-y-2">
                <p className="text-white font-semibold">3. Traitement Data</p>
                <p>Les articles sont triés par date (<code className="text-blue-300">sort</code>), nettoyés des balises HTML parasites et limités aux 20 actualités les plus récentes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}