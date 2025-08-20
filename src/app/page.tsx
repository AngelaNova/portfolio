import Link from "next/link";
import Hero from "@/components/Hero";
import AboutPreview from "../components/AboutPreview";
import ProjectPreview from "../components/ProjectPreview";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-[#FCFCFC]">
      <Hero />
      <AboutPreview />
      <ProjectPreview />
      <div className="flex  items-center justify-center pb-18 -mt-6 bg-gray-50">
        <Link
          href="/projects"
          className="text-emerald-600 hover:font-semibold hover:ml-5  "
        >
          See all projects →
        </Link>
      </div>
      <Skills />
      <Contact />
    </main>
  );
}
