import Head from "next/head";
import Link from "next/link";
import Hero from "@/components/Hero";
import AboutPreview from "../components/AboutPreview";
import ProjectPreview from "../components/ProjectPreview";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Angela Novakovic",
    url: "https://angelanovakovic.vercel.app/",
    sameAs: [
      "https://github.com/AngelaNova",
      "https://www.linkedin.com/in/angela-novakovic/",
    ],
    jobTitle: "Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };
  return (
    <>
      <Head>
        <title>Angela Novakovic | Software Developer Portfolio</title>

        <meta
          name="description"
          content="Portfolio of Angela Novakovic, Software Developer specializing in React, Next.js, and full-stack applications. See projects, skills, and contact info."
        />
        <meta
          name="keywords"
          content="Angela Novakovic, Software Developer, Portfolio, React, Next.js, Full Stack"
        />
        <meta name="author" content="Angela Novakovic" />
        <meta
          property="og:title"
          content="Angela Novakovic | Software Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore my projects, skills, and background in software development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://angelanovakovic.vercel.app/" />
        <meta property="og:image" content="/portfolio.png" />
        <link rel="canonical" href="https://angelanovakovic.vercel.app/" />
      </Head>

      <main className="flex flex-col w-full bg-[#FCFCFC]">
        <Hero />
        <AboutPreview />
        <ProjectPreview />
        <div className="flex items-center justify-center pb-18 -mt-6 bg-gray-50">
          <Link
            href="/projects"
            className="text-emerald-600 hover:font-semibold hover:ml-5"
          >
            See all projects →
          </Link>
        </div>
        <Skills />
        <Contact />
      </main>
    </>
  );
}
