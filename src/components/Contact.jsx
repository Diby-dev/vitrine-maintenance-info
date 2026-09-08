export default function Contact() {
  return (
    <section 
      id="contact" 
      className="relative py-24 px-6 md:px-12 bg-[url('/fondcontact.jpg')] bg-cover bg-center bg-fixed text-slate-900 overflow-hidden"
    >
      {/* Voile sombre pour faire ressortir la carte blanche */}
      <div className="absolute inset-0 bg-slate-950/40 z-0"></div>

      {/* Conteneur principal */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Carte de contact style formulaire épuré */}
        <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 flex flex-col gap-8">
          
          {/* En-tête */}
          <div className="text-center flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
              Contact
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Discutez de votre projet ou demandez un dépannage rapide avec notre équipe.
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nom */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Nom *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Votre nom complet"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all text-sm"
                />
              </div>

              {/* Numéro */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Numéro de téléphone *
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder="Ex: +225 07 00 00 00 00"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all text-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Message *
              </label>
              <textarea 
                rows="4" 
                required
                placeholder="Décrivez votre besoin en quelques mots..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all text-sm resize-none"
              ></textarea>
            </div>

            {/* Bouton d'envoi */}
            <button 
              type="submit"
              className="w-full py-4 bg-slate-950 hover:bg-purple-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-colors shadow-lg cursor-pointer"
            >
              Envoyer le message
            </button>

          </form>

          {/* Informations de localisation et contact de l'entreprise */}
          <div className="pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700 text-sm">
            
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-purple-600/10 text-purple-700 rounded-xl shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Localisation</h4>
                <p className="text-slate-600">Adjamé, Liberté, en bas du pont, Abidjan, Côte d'Ivoire</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-purple-600/10 text-purple-700 rounded-xl shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Contact direct</h4>
                <p className="text-slate-600">+225 07 98 27 67 25</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}