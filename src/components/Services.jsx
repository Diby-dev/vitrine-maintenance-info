import Reveal from './Reveal';

export default function Services() {
  const servicesList = [
    {
      title: "Réparation PC & Ordinateurs",
      description: "Diagnostic de pannes, remplacement d'écrans, upgrade de composants et optimisation complète.",
      image: "/pc.jpg",
    },
    {
      title: "Maintenance Téléphones & Tablettes",
      description: "Changement de vitres tactiles, batteries usagées et réparation de connecteurs de charge.",
      image: "/mobile.jpg",
    },
    {
      title: "Réparation & Entretien Imprimantes",
      description: "Résolution des bourrages papier, têtes d'impression bouchées et configuration réseau.",
      image: "/imprimante.jpg",
    },
  ];

  return (
    <section 
      id="services" 
      className="relative py-20 px-6 md:px-12 bg-[url('/fondservices.jpg')] bg-cover bg-center text-slate-900 overflow-hidden"
    >
      {/* Voile léger pour adoucir l'image de fond blanche si nécessaire */}
      <div className="absolute inset-0 bg-white/70 z-0"></div>

      {/* --- Contenu de la section --- */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-12">
        
        {/* En-tête de section */}
        <div className="text-center flex flex-col items-center gap-4">
          <Reveal animation="fade-down" delay={100}>
            <div className="inline-block px-4 py-1.5 bg-purple-600/10 border border-purple-600/20 rounded-full text-purple-700 text-sm font-medium">
              Nos Services
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Ce que nous faisons pour vous
            </h2>
          </Reveal>

          <Reveal animation="fade-up" delay={300}>
            <p className="text-slate-600 max-w-xl text-base">
              Découvrez nos prestations de maintenance et réparation adaptées à vos équipements.
            </p>
          </Reveal>
        </div>

        {/* Liste des services en lignes épurées */}
        <div className="flex flex-col divide-y divide-slate-200">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 group transition-all"
            >
              {/* Partie gauche : Nom et description */}
              <Reveal animation="fade-right" delay={150 + index * 100} className="w-full md:w-auto flex-1">
                <div className="flex flex-col gap-2 max-w-xl text-left w-full md:w-auto">
                  <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>

              {/* Partie centrale : Image du service */}
              <Reveal animation="zoom-in" delay={250 + index * 100} className="w-full md:w-auto">
                <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden border border-slate-200 shrink-0 bg-slate-100 shadow-sm">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Reveal>

              {/* Partie droite : Bouton d'action */}
              <Reveal animation="fade-left" delay={350 + index * 100} className="w-full md:w-auto flex justify-end shrink-0">
                <a 
                  href="#contact" 
                  className="w-full md:w-auto px-6 py-2.5 rounded-full border border-slate-300 bg-white hover:bg-purple-600 hover:border-purple-600 text-slate-800 hover:text-white font-medium text-sm transition-all text-center shadow-sm"
                >
                  Demander ce service
                </a>
              </Reveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}