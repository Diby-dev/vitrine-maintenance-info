import Reveal from './Reveal';
import { useModal } from '../context/ModalContext';

export default function Tarifs() {
  const { openRdv } = useModal();

  const plans = [
    {
      name: "Diagnostic & Devis",
      price: "0",
      unit: "FCFA",
      period: "100% Gratuit",
      badge: "Indispensable",
      badgeColor: "bg-slate-800 text-slate-300 border-slate-700",
      description: "Idéal pour identifier l'origine exacte de la panne avant toute réparation.",
      features: [
        "Vérification matérielle & logicielle",
        "Test de la batterie et connectiques",
        "Devis clair et sans engagement",
        "Délai : 30 à 45 minutes",
      ],
      cta: "Faire un diagnostic",
      animation: "fade-right",
      featured: false,
    },
    {
      name: "Dépannage Express",
      price: "15 000",
      unit: "FCFA",
      period: "À partir de",
      badge: "Le plus populaire",
      badgeColor: "bg-purple-600 text-white border-purple-500",
      description: "La solution la plus rapide pour les pannes courantes de votre téléphone ou PC.",
      features: [
        "Remplacement écran ou vitre tactile",
        "Changement de batterie usagée",
        "Suppression des virus & lenteurs",
        "Réparation connecteur de charge",
        "Garantie pièces & main d'œuvre 3 mois",
      ],
      cta: "Choisir cette formule",
      animation: "fade-up",
      featured: true,
    },
    {
      name: "Performance & Pro",
      price: "35 000",
      unit: "FCFA",
      period: "À partir de",
      badge: "Performance Max",
      badgeColor: "bg-blue-600/20 text-blue-300 border-blue-500/30",
      description: "Pour booster les performances d'un PC bureautique ou d'une machine de gaming.",
      features: [
        "Installation de SSD haute vitesse",
        "Ajout de mémoire RAM",
        "Remplacement pâte thermique haute qualité",
        "Optimisation logicielle complète",
        "Sauvegarde et transfert de données sécurisé",
      ],
      cta: "Booster mon appareil",
      animation: "fade-left",
      featured: false,
    },
  ];

  return (
    <section
      id="tarifs"
      className="relative py-20 px-6 md:px-12 bg-slate-950 text-white overflow-hidden border-t border-slate-900"
    >
      {/* Halo lumineux d'ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-14">
        
        {/* En-tête */}
        <div className="text-center flex flex-col items-center gap-4">
          <Reveal animation="fade-down" delay={100}>
            <div className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
              Tarifs Clairs & Transparents
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={200}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Des tarifs adaptés à chaque besoin
            </h2>
          </Reveal>

          <Reveal animation="fade-up" delay={300}>
            <p className="text-slate-400 max-w-xl text-base">
              Pas de mauvaise surprise : chaque intervention fait l'objet d'un devis préalable validé par vos soins.
            </p>
          </Reveal>
        </div>

        {/* Grille des tarifs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <Reveal
              key={index}
              animation={plan.animation}
              delay={150 + index * 120}
              className="h-full"
            >
              <div
                className={`relative flex flex-col justify-between h-full p-8 rounded-3xl border transition-all duration-300 ${
                  plan.featured
                    ? 'bg-gradient-to-b from-purple-950/50 to-slate-900 border-purple-500 shadow-2xl shadow-purple-900/30 md:-translate-y-2'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-xl'
                }`}
              >
                {/* Badge en haut */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${plan.badgeColor}`}>
                    {plan.badge}
                  </span>
                  {plan.featured && (
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                      Recommandé
                    </span>
                  )}
                </div>

                {/* Nom & Description */}
                <div className="flex flex-col gap-2 mb-6">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">
                    {plan.description}
                  </p>
                </div>

                {/* Prix */}
                <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-slate-800">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-lg font-bold text-purple-400">{plan.unit}</span>
                  <span className="text-xs text-slate-500 ml-1">({plan.period})</span>
                </div>

                {/* Liste des fonctionnalités */}
                <ul className="flex flex-col gap-3 mb-8 text-sm text-slate-300 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2.5">
                      <span className="text-purple-400 text-sm font-bold shrink-0 mt-0.5">✓</span>
                      <span className="text-xs md:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bouton CTA */}
                <button
                  onClick={() => openRdv(plan.name)}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg text-center cursor-pointer ${
                    plan.featured
                      ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-600/30 hover:scale-[1.02]'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Note de réassurance */}
        <Reveal animation="fade-up" delay={450}>
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 pt-4 border-t border-slate-900">
            <span className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span> Devis toujours gratuit avant toute réparation
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span> Garantie 90 jours sur pièces et main d'œuvre
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span> Paiement sécurisé (Espèces, Wave, Orange Money)
            </span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
