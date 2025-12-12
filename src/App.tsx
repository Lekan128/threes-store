import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Collections from './components/Collections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-gray-900 selection:bg-accent/30">
      <Header />
      <main>
        <Hero />
        <About />
        <Collections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
