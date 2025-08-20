import Hero from "@/components/Hero";
import AboutPreview from "../components/AboutPreview";
import ProjectPreview from "../components/ProjectPreview";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center w-full bg-[#FCFCFC]">
      <Hero />
      <AboutPreview />
      <ProjectPreview />
      <Skills />
      <Contact />
    </main>
  );
}
