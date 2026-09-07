import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
  
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
      </main>


    </div>
  );
}

export default App;