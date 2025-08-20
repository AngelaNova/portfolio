import Image from "next/image";
import Hero from "@/components/Hero";
import AboutPreview from "../components/AboutPreview";
import ProjectPreview from "../components/ProjectPreview";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-[#FCFCFC]">
      <Hero />
      <AboutPreview />
      <ProjectPreview />
      <Skills />
      <Contact />
    </main>
  );
}
