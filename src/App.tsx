import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Skills from './components/Skills';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <CursorGlow />

      <AnimatePresence>
        {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <>
          <Header />
          <main>
            <Hero />
            <Experience />
            <Skills />
            <Education />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}

export default App;
