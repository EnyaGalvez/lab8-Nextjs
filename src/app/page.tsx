import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
