import { useState } from 'react';
import Reveal from './Reveal';
import { useModal } from '../context/ModalContext';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const { openRdv, openDevis, openLogin } = useModal();

  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* 1. Arrière-plan Vidéo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/header.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        {/* Overlay sombre pour la lisibilité */}
        <div className="absolute inset-0 bg-black/10 z-10"></div>
      </div>

      {/* 2. Contenu global */}
      <div className="relative z-20 flex flex-col justify-between h-full p-6 md:p-10">
        
        {/* --- Navbar (Haut) --- */}
        <nav className="flex items-center justify-between w-full text-white">
          {/* Nom du site à gauche */}
          <Reveal animation="fade-right" delay={100}>
            <div className="text-2xl font-bold tracking-tight">
              Ismo<span className="text-purple-400">IT</span>
            </div>
          </Reveal>

          {/* Liens au centre (Desktop) */}
          <Reveal animation="fade-down" delay={200} className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium text-slate-200">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#tarifs" className="hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="#a-propos" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </Reveal>

          {/* Boutons à droite (Desktop) */}
          <Reveal animation="fade-left" delay={300} className="hidden md:block">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => openLogin()} 
                className="text-sm font-medium hover:text-white transition-colors cursor-pointer"
              >
                Connexion
              </button>
              <button 
                onClick={() => openDevis()}
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-medium text-sm px-5 py-2 rounded-full transition-all cursor-pointer"
              >
                Devis
              </button>
            </div>
          </Reveal>

          {/* Bouton Burger (Mobile) */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="md:hidden text-white focus:outline-none p-2 z-30"
            aria-label="Ouvrir le menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* --- Menu Mobile Plein Écran Transparent & Animé --- */}
        <div className={`fixed inset-0 z-50 flex flex-col p-8 text-white md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-150 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        } bg-black/60 backdrop-blur-md`}>
          
          {/* Bouton fermer en haut à droite */}
          <div className="flex justify-end mb-6">
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white p-2 focus:outline-none hover:rotate-90 transition-transform duration-300"
              aria-label="Fermer le menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        {/* Liens du menu mobile alignés à gauche avec lignes horizontales */}
        <div className="flex flex-col text-left text-xl font-medium w-full">
          <a href="#services" onClick={() => setIsOpen(false)} className="py-4 border-b border-white/10 hover:text-purple-400 transition-colors">Services</a>
          <a href="#tarifs" onClick={() => setIsOpen(false)} className="py-4 border-b border-white/10 hover:text-purple-400 transition-colors">Tarifs</a>
          <a href="#a-propos" onClick={() => setIsOpen(false)} className="py-4 border-b border-white/10 hover:text-purple-400 transition-colors">À propos</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="py-4 border-b border-white/10 hover:text-purple-400 transition-colors">Contact</a>
        </div>

          {/* Boutons Connexion et Devis en bas du menu mobile */}
          <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-white/10">
            <button 
              onClick={() => { setIsOpen(false); openLogin(); }} 
              className="w-full py-3 text-left text-base font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Connexion
            </button>
            <button 
              onClick={() => { setIsOpen(false); openDevis(); }} 
              className="w-full bg-white text-slate-900 font-semibold py-3.5 rounded-full text-center transition-all shadow-lg hover:bg-slate-100 cursor-pointer"
            >
              Devis
            </button>
          </div>
        </div>

        {/* --- Centre-Bas (Texte et bouton centrés) --- */}
        <div className="flex flex-col items-center text-center">
          {/* Phrase juste au-dessus du bouton - H1 Principal pour le SEO Google */}
          <Reveal animation="fade-up" delay={400}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-slate-50 font-bold tracking-tight !m-0 !mb-3">
              Ismo Maintenance Informatique
            </h1>
          </Reveal>

          <Reveal animation="fade-up" delay={550}>
            <p className="text-sm md:text-base text-slate-200 font-medium tracking-wide mb-5 max-w-lg">
              Maintenance, amélioration et réparation express<br className="hidden sm:inline" /> de vos téléphones, PC et imprimantes à Abidjan.
            </p>
          </Reveal>

          {/* Bouton blanc, rounded, au centre en bas */}
          <Reveal animation="zoom-in" delay={700}>
            <button 
              onClick={() => openRdv()}
              className="group inline-flex items-center gap-3 bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-3.5 rounded-full text-base transition-all shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>Demander une réparation</span>
            </button>
          </Reveal>
        </div>
      </div>
    </header>
  );
}