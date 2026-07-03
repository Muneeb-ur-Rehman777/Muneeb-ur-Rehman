import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import CTA from "./components/sections/CTA";
import Contact from "./components/sections/Contact";

import FadeIn from "./components/animations/FadeIn";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-x-hidden">

      <Hero />

      <FadeIn>
        <About />
      </FadeIn>

      <FadeIn delay={0.1}>
        <Projects />
      </FadeIn>

      <FadeIn delay={0.15}>
        <Skills />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Experience />
      </FadeIn>

      <FadeIn delay={0.25}>
        <CTA />
      </FadeIn>

      <FadeIn delay={0.3}>
        <Contact />
      </FadeIn>

    </main>
  );
}