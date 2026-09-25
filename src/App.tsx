import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Achievements from '@/components/Achievements';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Journey from '@/components/Journey';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import WhatsApp from '@/components/WhatsApp';
import SocialSidebar from '@/components/SocialSidebar';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-[#0B0B0B] text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Achievements />
      <Experience />
      <Education />
      <Certificates />
      <Journey />
      <Testimonials />
      <Contact />
      <Footer />
      <AIAssistant />
      <WhatsApp />
      <SocialSidebar />
    </div>
  );
}

export default App;
