export default function Realisations() {
  const projects = [
    {
      title: "Réparation PC & Ordinateurs Portables",
      category: "Matériel informatique",
      description: "Diagnostic complet, remplacement d'écrans cassés et optimisation de la vitesse pour les professionnels et particuliers.",
      image: "/ordi.jpg",
    },
    {
      title: "Maintenance Smartphones & Tablettes",
      category: "Appareils mobiles",
      description: "Changement de vitres tactiles, remplacement de batteries usagées et réparation minutieuse des connecteurs.",
      image: "/mobil.jpg",
    },
    {
      title: "Optimisation de PC",
      category: "Performance et Gaming",
      description: "Ajout de nouvelle mémoire, de carte graphique afin d'avoir de meilleurs performances en jeux vidéos.",
      image: "/optimisation.jpg",
    },
  ];

  return (
    <section 
      id="realisations" 
      className="relative py-20 px-6 md:px-12 bg-amber-200 bg-cover bg-center text-slate-950 overflow-hidden"
    >
      {/* Contenu de la section */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* En-tête de section */}
        <div className="text-center flex flex-col items-center gap-4">
          <div className="inline-block px-4 py-1.5 bg-purple-600/10 border border-purple-600/25 rounded-full text-purple-800 text-sm font-semibold">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
            Nos Réalisations Récentes
          </h2>
          <p className="text-slate-950 max-w-xl text-base font-medium">
            Découvrez un aperçu de nos interventions récentes et de notre savoir-faire technique.
          </p>
        </div>

        {/* Grille des 3 réalisations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="flex flex-col gap-4 group cursor-pointer"
            >
              {/* Conteneur de l'image avec effet zoom au survol */}
              <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-300 bg-slate-100 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-slate-950/80 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/10">
                  {project.category}
                </span>
              </div>

              {/* Textes sous l'image en noir */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-slate-950 group-hover:text-purple-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-950 text-sm leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}