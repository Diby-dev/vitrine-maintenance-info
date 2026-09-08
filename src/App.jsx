import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tarifs from './components/Tarifs';
import Stats from './components/Stats';
import Navbar from './components/Navbar';
import Avis from './components/Avis';
import Realisations from './components/Realisations';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Modals et Notifications
import { ModalProvider } from './context/ModalContext';
import RdvModal from './components/modals/RdvModal';
import DevisModal from './components/modals/DevisModal';
import LoginModal from './components/modals/LoginModal';
import ProjectModal from './components/modals/ProjectModal';
import LegalModal from './components/modals/LegalModal';
import Toast from './components/Toast';

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Tarifs />
          <Stats />
          <Avis />
          <Realisations />
          <Contact />
        </main>

        <Footer />

        {/* Composants interactifs globaux */}
        <RdvModal />
        <DevisModal />
        <LoginModal />
        <ProjectModal />
        <LegalModal />
        <Toast />
      </div>
    </ModalProvider>
  );
}

export default App;