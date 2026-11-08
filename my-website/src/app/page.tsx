import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Expertise } from '@/components/sections/Expertise';
import { Projects } from '@/components/sections/Projects';
import { Architecture } from '@/components/sections/Architecture';
import { Experience } from '@/components/sections/Experience';
import { IndependentProjectExperience } from '@/components/sections/IndependentProjectExperience';
import { Research } from '@/components/sections/Research';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <IndependentProjectExperience />
        <Architecture />
        <Research />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
