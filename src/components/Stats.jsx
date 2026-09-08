import { useState, useEffect, useRef } from "react";
import Reveal from "./Reveal";

// Sous-composant pour gérer l'animation de comptage individuel
function CounterItem({ end, label, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const currentItem = itemRef.current; // Stocke la ref dans une variable locale
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quand la section devient visible à l'écran
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 } // Déclenche quand 30% du composant est visible
    );

    if (currentItem) {
      observer.observe(currentItem);
    }

    return () => {
      if (currentItem) {
        observer.unobserve(currentItem);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const duration = 2000; // Durée de l'animation en millisecondes (2 secondes)

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Effet d'accélération/décélération doux (easeOutExpo)
      const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(easeProgress * end));

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end); // Assure d'arriver exactement au chiffre final
      }
    };

    requestAnimationFrame(animateCount);
  }, [hasStarted, end]);

  return (
    <div ref={itemRef} className="flex flex-col items-center text-center p-6 bg-slate-950/70 border border-slate-800 rounded-2xl backdrop-blur-md shadow-xl">
      <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-blue-900 mb-2">
        {count}{suffix}
      </span>
      <span className="text-slate-300 text-sm md:text-base font-medium">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  const statsData = [
    { end: 1500, label: "Appareils réparés avec succès", suffix: "+", animation: "fade-right" },
    { end: 5, label: "Années d'expérience", suffix: "+", animation: "fade-up" },
    { end: 98, label: "Taux de satisfaction client", suffix: "%", animation: "fade-left" },
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 text-white overflow-hidden border-y border-slate-900">
      
      {/* Vidéo de fond */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/fondstats.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

      {/* Voile sombre par-dessus la vidéo pour l'assombrir et faire ressortir le contenu */}
      <div className="absolute inset-0 bg-slate-950/80 z-0"></div>

      {/* Grille des statistiques */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {statsData.map((stat, index) => (
          <Reveal 
            key={index}
            animation={stat.animation}
            delay={150 + index * 120}
            className="w-full"
          >
            <CounterItem 
              end={stat.end} 
              label={stat.label} 
              suffix={stat.suffix} 
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}