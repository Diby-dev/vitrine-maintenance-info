import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer className="relative bg-[url('/fondcontact.jpg')] bg-cover bg-center bg-fixed text-slate-900 overflow-hidden pt-16">
      
      {/* Voile sombre pour l'harmonie avec le fond fixe */}
      <div className="absolute inset-0 bg-slate-950/40 z-0"></div>

      <div className="relative z-10 w-full flex flex-col gap-12">
        
        {/* Grande bannière Newsletter centrée */}
        <div className="max-w-6xl mx-auto w-full px-6">
          <Reveal animation="zoom-in" delay={100}>
            <div className="bg-slate-700/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
              <Reveal animation="fade-right" delay={200} className="w-full md:w-auto">
                <div className="flex flex-col gap-3 text-center md:text-left max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Restez informé de nos dernières actualités et offres
                  </h3>
                  <p className="text-purple-100 text-sm md:text-base">
                    Recevez des conseils de maintenance et profitez de réductions exclusives directement dans votre boîte mail.
                  </p>
                </div>
              </Reveal>

              <Reveal animation="fade-left" delay={250} className="w-full md:w-auto">
                <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    required
                    placeholder="Entrez votre email" 
                    className="bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-purple-200 focus:outline-none focus:bg-white/20 transition-all text-sm w-full md:w-72"
                  />
                  <button 
                    type="submit"
                    className="bg-white text-purple-900 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors text-sm shadow-md cursor-pointer shrink-0"
                  >
                    S'inscrire
                  </button>
                </form>
              </Reveal>
            </div>
          </Reveal>
        </div>

        {/* Corps principal du footer forcé sur TOUTE la largeur de l'écran */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md p-8 md:p-16 shadow-xl border-t border-white/20 flex flex-col gap-12 text-slate-900">
          
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16 px-6">
            
            {/* Colonne Logo & Description */}
            <Reveal animation="fade-right" delay={150} className="md:col-span-2">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight text-slate-950">Ismo</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                  Votre partenaire de confiance pour la réparation, la maintenance informatique et l'optimisation de vos équipements technologiques à Abidjan.
                </p>
              </div>
            </Reveal>

            {/* Colonne Liens Rapides */}
            <Reveal animation="fade-up" delay={250}>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-slate-950 text-sm uppercase tracking-wider">Navigation</h4>
                <ul className="flex flex-col gap-2 text-sm text-slate-600">
                  <li><a href="#accueil" className="hover:text-purple-600 transition-colors">Accueil</a></li>
                  <li><a href="#services" className="hover:text-purple-600 transition-colors">Services</a></li>
                  <li><a href="#realisations" className="hover:text-purple-600 transition-colors">Portfolio</a></li>
                  <li><a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a></li>
                </ul>
              </div>
            </Reveal>

            {/* Colonne Contact Direct */}
            <Reveal animation="fade-left" delay={350}>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-slate-950 text-sm uppercase tracking-wider">Contact</h4>
                <ul className="flex flex-col gap-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    +225 07 98 27 67 25
                  </li>
                  <li className="flex items-center gap-2">
                    Adjamé, Liberté, en bas du pont, Abidjan, Côte d'Ivoire
                  </li>
                </ul>
              </div>
            </Reveal>

          </div>

          {/* Ligne de séparation et Copyright */}
          <Reveal animation="fade-up" delay={450}>
            <div className="max-w-6xl mx-auto w-full pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 px-6">
              <p>© Copyright 2026 Ismo. Tous droits réservés.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-purple-600 transition-colors">Politique de confidentialité</a>
                <a href="#" className="hover:text-purple-600 transition-colors">Conditions d'utilisation</a>
                <a href="#" className="hover:text-purple-600 transition-colors">Mentions légales</a>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </footer>
  );
}