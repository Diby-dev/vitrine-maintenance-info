import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Navbar from './components/Navbar';
import Avis from './components/Avis';
import Realisations from './components/Realisations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Navbar />

      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Stats />
        <Avis />
        <Realisations />
        <Contact />
      </main>

      <Footer />


    </div>
  );
}

export default App;