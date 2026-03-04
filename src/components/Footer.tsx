export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-paccard-blue-dark to-black py-16">
      <div className="container mx-auto px-4">
        {/* Top section with logo, description and social links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="inline-block mb-6 group">
              <span className="text-4xl font-extrabold tracking-tight relative">
                <span className="text-white">ALEXIS</span>
                <span className="text-blue-400 ml-1">NEYROUD</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Alternant en système d'information, passionné par la technologie et le développement web.
              Je cherche à développer mes compétences dans un environnement professionnel stimulant
              et à créer des solutions numériques innovantes.
            </p>
            <div className="flex items-center space-x-5">
              <a 
                href="https://www.linkedin.com/in/alexis-neyroud-714374304/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="bg-white/10 p-3 rounded-full hover:bg-blue-400/20 transition-all duration-300 group"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a 
                href="https://github.com/3hunt8" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="bg-white/10 p-3 rounded-full hover:bg-blue-400/20 transition-all duration-300 group"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="bg-white/10 p-3 rounded-full hover:bg-blue-400/20 transition-all duration-300 group"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 relative inline-block">
              Navigation
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-400"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Entreprise', href: '/#entreprise' },
                { name: 'Compétences', href: '#competences' },
                { name: 'Projets', href: '#projets' },
                { name: 'Veille', href: '#veille' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors group flex items-center"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 mr-0 opacity-0 group-hover:w-2 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-400"></span>
            </h3>
            <ul className="space-y-6">
              <li>
                <a 
                  href="https://maps.google.com/?q=Saint+Rémy+de+Maurienne,+France" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start group hover:text-blue-400 transition-colors"
                >
                  <span className="flex-shrink-0 p-2 bg-blue-400/20 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-white font-medium group-hover:text-blue-400 transition-colors">Adresse</span>
                    <span className="text-gray-400 group-hover:text-blue-400/80 transition-colors">Saint Rémy de Maurienne, France</span>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:alexis.neyroud38@gmail.com"
                  className="flex items-start group hover:text-blue-400 transition-colors"
                >
                  <span className="flex-shrink-0 p-2 bg-blue-400/20 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-white font-medium group-hover:text-blue-400 transition-colors">Email</span>
                    <span className="text-gray-400 group-hover:text-blue-400/80 transition-colors">alexis.neyroud38@gmail.com</span>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+33649599159" 
                  className="flex items-start group hover:text-blue-400 transition-colors"
                >
                  <span className="flex-shrink-0 p-2 bg-blue-400/20 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-white font-medium group-hover:text-blue-400 transition-colors">Téléphone</span>
                    <span className="text-gray-400 group-hover:text-blue-400/80 transition-colors">+33 6 49 59 91 59</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter/CTA section - optional */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-white text-lg font-semibold mb-2">Restons en contact</h4>
              <p className="text-gray-400">N'hésitez pas à me contacter pour discuter d'opportunités professionnelles</p>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-blue-400 hover:bg-blue-500 text-black font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Me contacter
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Alexis Neyroud. Tous droits réservés.
            </p>
            <div className="text-gray-500 text-sm">
              Conçu avec le <span className="text-blue-400">💙🤍❤️</span> en France
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}