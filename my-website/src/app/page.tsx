import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Expertise } from '@/components/sections/Expertise';
import { Projects } from '@/components/sections/Projects';
import { Architecture } from '@/components/sections/Architecture';
import { Experience } from '@/components/sections/Experience';
import { Research } from '@/components/sections/Research';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Architecture />
        <Experience />
        <Research />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
