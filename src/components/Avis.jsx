import Reveal from "./Reveal";

export default function Avis() {
  const reviews = [
    {
      name: "Kassi Marc",
      role: "Particulier",
      text: "Mon PC portable a été réparé en un temps record. Service ultra professionnel !",
      rating: 5,
    },
    {
      name: "Awa Touré",
      role: "Entrepreneure",
      text: "Excellent service de maintenance pour nos imprimantes de bureau. Je recommande.",
      rating: 5,
    },
    {
      name: "Jean-Paul Kouassi",
      role: "Étudiant",
      text: "Écran de smartphone changé sur place en moins d'une heure. Au top !",
      rating: 5,
    },
    {
      name: "Fatou Diallo",
      role: "Graphiste",
      text: "Mon ordinateur refonctionne à merveille après un gros nettoyage et l'ajout d'un SSD.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 bg-[url('/fondavis.jpg')] bg-cover bg-center text-slate-950 overflow-hidden border-t border-slate-200">
      
      {/* Voile léger pour adoucir l'image de fond blanche */}
      <div className="absolute inset-0 bg-white/75 z-0"></div>

      {/* En-tête de section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-4 mb-12">
        <Reveal animation="fade-down" delay={100}>
          <div className="inline-block px-4 py-1.5 bg-purple-600/10 border border-purple-600/20 rounded-full text-purple-700 text-sm font-medium">
            Témoignages
          </div>
        </Reveal>

        <Reveal animation="fade-up" delay={200}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Ce que disent nos clients
          </h2>
        </Reveal>

        <Reveal animation="fade-up" delay={300}>
          <p className="text-slate-600 max-w-xl text-base">
            La satisfaction de nos clients est notre plus belle récompense.
          </p>
        </Reveal>
      </div>

      {/* Conteneur du défilement infini vers la droite */}
      <Reveal animation="zoom-in" delay={400} className="relative z-10 w-full overflow-hidden py-4">
        
        {/* Effets de fondu sur les côtés adaptés au fond blanc */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Piste animée (on duplique la liste pour assurer la boucle infinie fluide) */}
        <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="w-[320px] md:w-[380px] bg-white/90 border border-slate-200/80 p-6 rounded-2xl backdrop-blur-sm shadow-lg flex flex-col justify-between gap-4 shrink-0 transition-all hover:border-purple-600/40 hover:shadow-xl"
            >
              {/* Étoiles */}
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Texte de l'avis */}
              <p className="text-slate-700 text-sm leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Auteur */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-purple-600/10 border border-purple-600/20 flex items-center justify-center text-purple-700 font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold text-sm">{review.name}</h4>
                  <p className="text-slate-500 text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </Reveal>
    </section>
  );
}