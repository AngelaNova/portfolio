"use client";

import Image from "next/image";

interface ProjectContent {
  title: string;
  description: string;
  heroImage: string;
  technologies: string[];
  status: string;
  liveLink: string;
  codeLink: string;
  sections: { heading: string; content: string | string[] }[];
}

interface ProjectPageProps {
  project: ProjectContent;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <div className="flex flex-col items-center py-30">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        {project.title}
      </h1>
      <p className="mt-3 text-gray-600">{project.description}</p>

      {/* Hero image */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src={project.heroImage}
          alt={`${project.title} screenshot`}
          width={600}
          height={700}
          className="object-cover"
        />
      </div>

      {/* Quick facts / CTA */}
      <section className="mt-8 grid grid-cols-1 gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Technologies Used
          </h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
            {project.technologies.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Project Status
          </h3>
          <p className="mt-3 text-gray-800">{project.status}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Live Links
          </h3>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#C8DBCB] px-4 py-2 text-sm font-medium text-gray-900 transition hover:opacity-90"
            >
              View Project
            </a>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
            >
              View Code
            </a>
          </div>
        </div>
      </section>

      {/* Sections */}
      <article className="prose prose-neutral mt-10 max-w-none">
        {project.sections.map((section, idx) => (
          <div key={idx} className="mt-8">
            <h2>{section.heading}</h2>
            {Array.isArray(section.content) ? (
              <ul className="list-disc pl-5">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{section.content}</p>
            )}
          </div>
        ))}
      </article>
    </div>
  );
}
