import Hero from './components/Hero';
import About from './components/About';


function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
  
      
      <main className="flex-grow">
        <Hero />
        <About />
      </main>


    </div>
  );
}

export default App;