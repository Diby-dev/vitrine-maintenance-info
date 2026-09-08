import { useState } from 'react';
import Reveal from './Reveal';
import { useModal } from '../context/ModalContext';

export default function Contact() {
  const { showToast } = useModal();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const ticketId = 'MSG-' + Math.floor(1000 + Math.random() * 9000);
      setSubmittedData({
        ticketId,
        name,
        phone,
      });
      showToast(`Votre message a bien été envoyé ! Référence : #${ticketId}`);
      setName('');
      setPhone('');
      setMessage('');
    }, 850);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 px-6 md:px-12 bg-[url('/fondcontact.jpg')] bg-cover bg-center bg-fixed text-slate-900 overflow-hidden"
    >
      {/* Voile sombre pour faire ressortir la carte blanche */}
      <div className="absolute inset-0 bg-slate-950/40 z-0"></div>

      {/* Conteneur principal */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center w-full">
        
        {/* Carte de contact style formulaire épuré */}
        <Reveal animation="zoom-in" delay={100} className="w-full">
          <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 flex flex-col gap-8">
            
            {/* En-tête */}
            <div className="text-center flex flex-col gap-2">
              <Reveal animation="fade-up" delay={150}>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
                  Contact
                </h2>
              </Reveal>
              <Reveal animation="fade-up" delay={220}>
                <p className="text-slate-600 text-sm md:text-base">
                  Discutez de votre projet ou demandez un dépannage rapide avec notre équipe.
                </p>
              </Reveal>
            </div>

            {submittedData ? (
              <div className="p-6 md:p-8 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col items-center text-center gap-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold">
                  ✓
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-bold text-slate-900">Message envoyé avec succès !</h4>
                  <p className="text-sm text-slate-600">
                    Merci <strong>{submittedData.name}</strong>. Votre demande a bien été transmise aux techniciens d'Ismo Maintenance.
                  </p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-emerald-200 text-xs text-slate-600 font-mono">
                  Ticket d'assistance : <strong className="text-emerald-700">#{submittedData.ticketId}</strong>
                </div>
                <p className="text-xs text-slate-500">
                  Nous vous recontacterons au <strong>{submittedData.phone}</strong> sous un délai moyen de 2 heures ouvrées.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmittedData(null)}
                  className="mt-2 text-xs font-semibold text-purple-700 hover:text-purple-900 underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              /* Formulaire */
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nom */}
                  <Reveal animation="fade-right" delay={280} className="w-full">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Nom *
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="Votre nom complet"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all text-sm"
                      />
                    </div>
                  </Reveal>

                  {/* Numéro */}
                  <Reveal animation="fade-left" delay={280} className="w-full">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Numéro de téléphone *
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="Ex: +225 07 00 00 00 00"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all text-sm"
                      />
                    </div>
                  </Reveal>
                </div>

                {/* Message */}
                <Reveal animation="fade-up" delay={340} className="w-full">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Message *
                    </label>
                    <textarea 
                      rows="4" 
                      required
                      placeholder="Décrivez votre besoin en quelques mots..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all text-sm resize-none"
                    ></textarea>
                  </div>
                </Reveal>

                {/* Bouton d'envoi */}
                <Reveal animation="zoom-in" delay={400} className="w-full">
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-slate-950 hover:bg-purple-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Envoi de votre message...</span>
                      </>
                    ) : (
                      <span>Envoyer le message</span>
                    )}
                  </button>
                </Reveal>

              </form>
            )}

            {/* Informations de localisation et contact de l'entreprise */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700 text-sm">
              
              <Reveal animation="fade-right" delay={450} className="w-full">
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
              </Reveal>

              <Reveal animation="fade-left" delay={500} className="w-full">
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
              </Reveal>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}