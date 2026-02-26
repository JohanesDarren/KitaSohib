import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import MoodCheck from './components/MoodCheck';
import About from './components/About';
import Features from './components/Features';
import Developers from './components/Developers';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-100 selection:bg-accent-100 selection:text-accent-500">
      <Navbar />
      <main>
        <Hero />

        {/* Live Demo Section */}
        <section className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <MoodCheck />
        </section>

        <Features />
        <About />
        <Gallery />
        <Developers />
        <Partners />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;