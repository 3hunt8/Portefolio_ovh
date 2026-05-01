export function APropos() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">À propos</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Card principale */}
        <div className="bg-gray-800 rounded-2xl p-8 md:p-10 border border-gray-700">

          {/* Avatar + intro */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
            <img
              src="https://pub-0059eb78551446a0ac8e717c896e0b02.r2.dev/image/ppalexis%20(2).jpeg"
              alt="Alexis Neyroud"
              className="w-28 h-28 rounded-full object-cover border-2 border-blue-600 flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-bold mb-1">Alexis Neyroud</h3>
              <p className="text-blue-400 text-sm font-mono mb-4">
                Étudiant BTS SIO SISR · Alternant SAF Aerogroup · Futur Maître d’Œuvre d’Exécution
              </p>
              <p className="text-gray-300 leading-relaxed">
                Passionné par les infrastructures IT, j'ai construit ce portfolio au fil de mes deux années
                de BTS SIO option SISR. Chaque projet présenté ici a été réalisé en conditions réelles,
                en alternance chez SAF Aerogroup.
              </p>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-gray-700 mb-10" />

          {/* Blocs parcours */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">

            <div>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Aujourd'hui</p>
              <p className="text-gray-300 leading-relaxed text-sm">
                BTS SIO SISR bientôt en poche, j'ai acquis des compétences solides en administration réseau,
                sécurité (pfSense, VLAN), et continuité d'activité (PRA avec UrBackup).
                Mon alternance chez SAF Aerogroup m'a permis de mettre en œuvre ces compétences
                sur des infrastructures en production.
              </p>
            </div>

            <div>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Demain</p>
              <p className="text-gray-300 leading-relaxed text-sm">
                Je rejoins <span className="text-white font-medium">COTRABAT</span> en 2026 pour piloter des chantiers de gros œuvre haut de gamme en montagne. Mon expérience terrain en VRD et gros œuvre, combinée à ma rigueur IT, m'a convaincu que c'est dans ce secteur exigeant que je peux apporter le plus de valeur.
              </p>
            </div>

          </div>

          {/* Séparateur */}
          <div className="border-t border-gray-700 mb-8" />

          {/* Infos contact */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="text-blue-400">📍</span> Auvergne-Rhône-Alpes
            </span>
            <a
              href="mailto:alexis.neyroud@email.com"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <span className="text-blue-400">✉</span> alexis.neyroud38@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/alexis-neyroud-714374304/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <span className="text-blue-400">🔗</span> LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
