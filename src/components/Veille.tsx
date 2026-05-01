import React, { useState, useEffect, useRef, useCallback } from 'react';

export function Veille() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newCount, setNewCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSource, setActiveSource] = useState<string | null>(null);
  const knownIds = useRef<Set<string>>(new Set());

  const sources = [
    { id: "zdnet",  name: "ZDNet",       rss: "https://www.zdnet.fr/feeds/rss/actualites/",        category: "IT"     },
    { id: "thn",    name: "Hacker News", rss: "https://feeds.feedburner.com/TheHackersNews",        category: "Sécurité" },
    { id: "cnil",   name: "CNIL",        rss: "https://www.cnil.fr/fr/rss.xml",                     category: "RGPD"   },
  ];

  const parseRSS = (xmlText: string, source: typeof sources[0]) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, 'text/xml');
    if (xml.querySelector('parsererror')) return [];
    const getText = (el: Element, tag: string) =>
      el.getElementsByTagName(tag)[0]?.textContent?.trim() || '';

    const isAtom = xml.getElementsByTagName('entry').length > 0;
    const elements = isAtom
      ? Array.from(xml.getElementsByTagName('entry'))
      : Array.from(xml.getElementsByTagName('item'));

    // 10 articles par source
    return elements.slice(0, 10).map((el) => {
      const title    = getText(el, 'title');
      const rawDesc  = getText(el, isAtom ? 'summary' : 'description') || getText(el, 'content');
      const description = rawDesc.replace(/<[^>]*>?/gm, '').trim().substring(0, 180) + '...';
      const pubDate  = getText(el, isAtom ? 'updated' : 'pubDate') || getText(el, 'published');
      const linkEl   = el.getElementsByTagName('link')[0];
      const link     = isAtom
        ? (linkEl?.getAttribute('href') || linkEl?.textContent?.trim() || '')
        : (linkEl?.textContent?.trim() || '');
      const id = getText(el, 'guid') || getText(el, 'id') || link;
      return {
        id,
        title,
        description,
        date:    pubDate ? new Date(pubDate).toLocaleDateString('fr-FR') : '',
        rawDate: pubDate ? new Date(pubDate).getTime() : 0,
        link,
        sourceId:   source.id,
        sourceName: source.name,
        category:   source.category,
        isNew: false,
      };
    });
  };

  const fetchArticles = useCallback(async (isFirstLoad = false) => {
    if (isFirstLoad) setLoading(true);
    try {
      const allFetched: any[] = [];
      for (const source of sources) {
        const proxies = [
          () => fetch(`https://corsproxy.io/?url=${encodeURIComponent(source.rss)}`).then(r => r.text()),
          () => fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(source.rss)}`).then(r => r.text()),
        ];
        for (const tryProxy of proxies) {
          try {
            const text  = await tryProxy();
            const items = parseRSS(text, source);
            if (items.length > 0) { allFetched.push(...items); break; }
          } catch { /* essaie le proxy suivant */ }
        }
      }

      // Tri global par date décroissante — on garde les 10 par source, soit 30 max
      const sorted = allFetched.sort((a, b) => b.rawDate - a.rawDate);

      if (isFirstLoad) {
        // Premier chargement : enregistre tous les IDs connus
        sorted.forEach(a => knownIds.current.add(a.id));
        setArticles(sorted);
      } else {
        // Actualisation : détecte les nouveaux articles
        const fresh = sorted.map(a => ({
          ...a,
          isNew: !knownIds.current.has(a.id),
        }));
        const addedCount = fresh.filter(a => a.isNew).length;
        fresh.filter(a => a.isNew).forEach(a => knownIds.current.add(a.id));

        if (addedCount > 0) {
          setNewCount(prev => prev + addedCount);
          setArticles(fresh);
          // Si l'utilisateur regardait les "Toutes", on replace sur le 1er nouvel article
          setCurrentIndex(0);
        }
      }
    } catch (e) {
      console.error("Erreur fetch veille", e);
    } finally {
      if (isFirstLoad) setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles(true);
    // Polling toutes les 5 minutes pour capter les nouveaux articles rapidement
    const interval = setInterval(() => fetchArticles(false), 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchArticles]);

  const filteredArticles = activeSource
    ? articles.filter(a => a.sourceId === activeSource)
    : articles;

  const nextSlide = () => setCurrentIndex(prev => (prev === filteredArticles.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex(prev => (prev === 0 ? filteredArticles.length - 1 : prev - 1));

  useEffect(() => { setCurrentIndex(0); }, [activeSource]);

  const handleNewBannerClick = () => {
    setNewCount(0);
    setActiveSource(null);
    setCurrentIndex(0);
  };

  return (
    <section className="py-12 bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Ma Veille Technologique</h2>
        <p className="text-center text-gray-500 text-xs mb-8 font-mono">
          Actualisation automatique toutes les 5 min · {sources.length} sources · 10 articles / source
        </p>

        {/* Bannière "nouveaux articles" */}
        {newCount > 0 && (
          <div
            onClick={handleNewBannerClick}
            className="max-w-4xl mx-auto mb-6 bg-blue-600/20 border border-blue-500/40 rounded-xl px-5 py-3 flex items-center justify-between cursor-pointer hover:bg-blue-600/30 transition"
          >
            <span className="text-blue-300 text-sm font-semibold">
              🔔 {newCount} nouvel{newCount > 1 ? 's' : ''} article{newCount > 1 ? 's' : ''} disponible{newCount > 1 ? 's' : ''}
            </span>
            <span className="text-blue-400 text-xs underline">Voir</span>
          </div>
        )}

        {/* Filtres */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setActiveSource(null)}
            className={`px-4 py-2 rounded-full text-xs transition ${!activeSource ? 'bg-blue-600' : 'bg-gray-800'}`}
          >
            Toutes ({articles.length})
          </button>
          {sources.map(s => {
            const count = articles.filter(a => a.sourceId === s.id).length;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSource(s.id)}
                className={`px-4 py-2 rounded-full text-xs transition ${activeSource === s.id ? 'bg-blue-600' : 'bg-gray-800'}`}
              >
                {s.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-600 transition shadow-lg border border-gray-700"
          >
            <span className="text-2xl">❮</span>
          </button>

          <div className="flex-1 bg-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl border border-gray-700 min-h-[350px] flex flex-col justify-center relative overflow-hidden">
            {loading ? (
              <div className="text-center animate-pulse text-blue-400 font-mono">SYNCING_FLUX...</div>
            ) : filteredArticles.length > 0 ? (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-900/50 text-blue-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">
                      {filteredArticles[currentIndex].category}
                    </span>
                    {filteredArticles[currentIndex].isNew && (
                      <span className="bg-green-900/50 text-green-400 px-2 py-1 rounded text-xs font-bold animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>
                  <span className="text-gray-500 text-xs font-mono">{filteredArticles[currentIndex].date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-tight">{filteredArticles[currentIndex].title}</h3>
                <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed">{filteredArticles[currentIndex].description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={filteredArticles[currentIndex].link}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
                  >
                    Lire l'article
                  </a>
                  <span className="text-gray-600 text-sm font-mono">
                    {currentIndex + 1} / {filteredArticles.length}
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500">Aucune donnée disponible.</div>
            )}
          </div>

          <button
            onClick={nextSlide}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-600 transition shadow-lg border border-gray-700"
          >
            <span className="text-2xl">❯</span>
          </button>
        </div>

        {/* Flèches mobile */}
        <div className="flex justify-center gap-10 mt-6 md:hidden">
          <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">❮</button>
          <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">❯</button>
        </div>

        {/* Architecture */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-blue-900/10 border border-blue-900/30 rounded-2xl p-6">
            <h4 className="flex items-center gap-2 text-blue-400 font-bold mb-4">
              <span className="text-xl">⚙️</span> Architecture du Système
            </h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div className="space-y-2">
                <p className="text-white font-semibold">1. Récupération (Fetch)</p>
                <p>Le système interroge deux proxies CORS (<code className="text-blue-300">corsproxy.io</code> / <code className="text-blue-300">allorigins</code>) qui convertissent les flux RSS/Atom XML en JSON manipulable par React.</p>
              </div>
              <div className="space-y-2">
                <p className="text-white font-semibold">2. Détection en temps réel</p>
                <p>Un polling toutes les <code className="text-blue-300">5 minutes</code> compare les IDs reçus avec un <code className="text-blue-300">Set</code> de référence. Seuls les nouveaux articles déclenchent une mise à jour et un badge <span className="text-green-400 font-mono">NEW</span>.</p>
              </div>
              <div className="space-y-2">
                <p className="text-white font-semibold">3. Traitement Data</p>
                <p>10 articles par source sont conservés, triés par date (<code className="text-blue-300">sort</code>), nettoyés des balises HTML et affichés dans le carousel sans reset de position.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}