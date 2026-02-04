
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import { ToastProvider, WelcomeToast } from './components/Toast';

function App() {
  return (
    <ToastProvider>
      <WelcomeToast />
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ToastProvider>
  );
}

export default App;
