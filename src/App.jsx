import Hero from './components/Hero';
// Importez vos futurs composants ici (Navbar, Services, Contact, Footer...)

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Navbar à venir */}
      
      <main className="flex-grow">
        <Hero />
        {/* Autres sections : Services, À propos, Contact... */}
      </main>

      {/* Footer à venir */}
    </div>
  );
}

export default App;