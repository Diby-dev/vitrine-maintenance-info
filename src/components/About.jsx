export default function About() {
  return (
    <section 
      id="a-propos" 
      className="relative py-20 px-6 md:px-12 bg-[url('/fondabout.jpg')] bg-cover bg-center text-white overflow-hidden"
    >
      {/* Overlay sombre pour que le texte reste ultra lisible par-dessus l'image */}
      <div className="absolute inset-0 bg-slate-950/85 z-0"></div>

      {/* --- Contenu de la section --- */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Colonne de gauche : Texte de présentation */}
        <div className="flex flex-col gap-6">
          <div className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium w-fit">
            Nous sommes
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
            Votre expert en maintenance et réparation high-tech
          </h2>

          <p className="text-slate-300 leading-relaxed text-base">
            Chez <strong className="text-white">Ismo Maintenance</strong>, nous savons à quel point vos appareils du quotidien sont indispensables, qu'il s'agisse de votre smartphone personnel, de votre PC professionnel ou de votre imprimante. <br /> Nous nous engageons à fournir un service de maintenance et de réparation rapide, fiable et de qualité. Notre équipe d'experts est dédiée à diagnostiquer et résoudre vos problèmes techniques avec précision et efficacité. 
          </p>

          {/* Petits points clés / Avantages */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            <div>
              <p className="text-2xl font-bold text-purple-400">100%</p>
              <p className="text-sm text-slate-400">Diagnostic minutieux</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-400">Rapide</p>
              <p className="text-sm text-slate-400">Interventions express</p>
            </div>
          </div>
        </div>

        {/* Colonne de droite : Vidéo avec effet de zoom au survol */}
        <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          >
            <source src="/about.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
          <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}