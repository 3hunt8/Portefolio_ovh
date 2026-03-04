interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

export function Entreprise() {
  // Informations sur l'entreprise
  const entrepriseInfo = {
    nom: "SAF Aerogroup",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Logo-saf-aerogroup.png/330px-Logo-saf-aerogroup.png", // À remplacer par le vrai logo
    anneeCreation: "1979",
    description: "Entreprise familiale spécialisée dans les services aériens en zone montagneuse",
    valeurs: ["Sécurité", "Excellence", "Innovation", "Engagement"]
  };

  // Services proposés par l'entreprise
  const services: ServiceItem[] = [
    {
      id: "secours-montagne",
      title: "Secours en Montagne",
      description: "Interventions rapides en milieu montagneux pour le secours et l'évacuation de personnes en détresse.",
      icon: "/src/assets/image/yeti73.png",
    },
    {
      id: "levage-aerien",
      title: "Levage Aérien",
      description: "Transport de charges lourdes et d'équipements dans des zones difficiles d'accès.",
      icon: "/src/assets/image/logolevage.png",
    },
    {
      id: "travail-specialise",
      title: "Travail Aérien Spécialisé",
      description: "Services aériens sur mesure pour des besoins industriels, énergétiques et environnementaux.",
      icon: "/src/assets/image/logotas.png",
    },
    {
      id: "SHMUR",
      title: "SHMUR",
      description: "Le SHMUR (Service Héliporté de Maintenance Urgente et de Réparation) assure des interventions rapides en hélicoptère pour la maintenance et la réparation d’équipements techniques en zones difficiles d’accès.",
      icon: "/src/assets/image/logoshumr.png",
    },
  ];

  // Photos de la galerie
  const photos: PhotoItem[] = [
    {
      id: "photo-1",
      src: "/src/assets/image/photosecours.jpg",
      alt: "Hélicoptère SAF en mission",
      title: "Mission de secours"
    },
    {
      id: "photo-2",
      src: "/src/assets/image/photosamu.jpg",
      alt: "SAMU",
      title: "SAMU"
    },
    {
      id: "photo-3",
      src: "/src/assets/image/photolevage.png",
      alt: "Opération de levage",
      title: "Levage aérien"
    },
    {
      id: "photo-4",
      src: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Photo+4",
      alt: "Base SAF",
      title: "Nos installations"
    },
    {
      id: "photo-5",
      src: "/src/assets/image/photosim.png",
      alt: "Formation équipe",
      title: "Formation"
    },
    {
      id: "photo-6",
      src: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Photo+6",
      alt: "Maintenance hélicoptère",
      title: "Maintenance"
    }
  ];

  return (
    <section id="entreprise" className="py-20 bg-paccard-blue-dark">
      <div className="container mx-auto">
        {/* En-tête de présentation */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Mon Entreprise</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Découvrez SAF Aerogroup, entreprise familiale engagée dans le secours en montagne, le levage aérien, le travail aérien spécialisé et bien plus encore — où je mets mes compétences informatiques au service de nos missions.
          </p>
        </div>

        {/* Section principale avec image et infos */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
          {/* Image ou logo de l'entreprise */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg w-full max-w-lg">
              <img 
                src="https://imgs.search.brave.com/7AI2J2gaEHxpHxfz8E7nfZoqM2fpGPb1WetpNvetz-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hY3R1/LWFlcm8uZnIvd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMTEv/U0FGX2hlbGljb18y/X01ELTEwMjR4NTc4/LmpwZw" 
                alt="SAF Aerogroup hélicoptère" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Informations sur l'entreprise */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-6">
                <img src={entrepriseInfo.logo} alt="Logo SAF" className="h-16 mr-4" />
                <h3 className="text-3xl font-bold">{entrepriseInfo.nom}</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 text-lg">
                  Fondée en {entrepriseInfo.anneeCreation} par Roland FRAISSINET, SAF Aerogroup est devenue une référence dans le domaine des services aériens en montagne.
                </p>
                
                <div className="mt-6">
                  <h4 className="text-xl font-semibold mb-3 text-blue-light">Nos valeurs</h4>
                  <div className="flex flex-wrap gap-3">
                    {entrepriseInfo.valeurs.map((valeur) => (
                      <span 
                        key={valeur} 
                        className="px-4 py-2 bg-white/10 rounded-full text-blue-light"
                      >
                        {valeur}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Informations de l'entreprise */}
                <div className="mt-6">
                  <h4 className="text-xl font-semibold mb-3 text-blue-light">Chiffres clés</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-light">600+</div>
                      <div className="text-gray-300 text-sm">Employés</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-light">100M€</div>
                      <div className="text-gray-300 text-sm">Chiffre d'affaires</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <p className="text-gray-300">
                      <span className="font-semibold text-blue-light">Raison sociale:</span> SAS
                    </p>
                    <div>
                      <p className="font-semibold text-blue-light mb-2">Direction:</p>
                      <div className="space-y-1 text-gray-300">
                        <p>• Co-CEO: Thibault NICODEME</p>
                        <p>• Co-CEO: Jean-Louis CAMUS</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-xl font-semibold mb-3 text-blue-light">Mon rôle</h4>
                  <p className="text-gray-300">
                    En tant que IT Administrator, je contribue à maintenir l'infrastructure technologique qui soutient ces opérations critiques, assurant que nos systèmes sont fiables, sécurisés et adaptés aux besoins spécifiques de l'aviation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services de l'entreprise */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-10">Nos Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-md hover:transform hover:-translate-y-2 transition-all duration-300 flex items-start"
              >
                <div className="w-12 h-12 flex-shrink-0 mr-4">
                  <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Galerie Photos */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text- text-center mb-10">Galerie Photos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                {photo.title && (
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-white">{photo.title}</h4>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Bouton d'action */}
        <div className="flex justify-center mt-12">
          <a 
            href="https://safaerogroup.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-light text-white font-semibold rounded-lg hover:bg-blue-dark transition-colors duration-300"
          >
            Découvrir SAF Aerogroup
          </a>
        </div>
      </div>
    </section>
  );
}