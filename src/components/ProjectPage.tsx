"use client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { projectSchemas } from "@/data/project";

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
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchemas) }}
        />
      </Head>
      <div className="flex flex-col items-center py-30">
        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          {project.title}
        </h1>
        <p className="mt-3 text-gray-600">{project.description}</p>

        {/* Hero image */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Link href={project.liveLink}>
            <Image
              src={project.heroImage}
              alt={`${project.title} screenshot`}
              width={600}
              height={700}
              className="object-fit h-90 w-190 hover:border hover:border-emerald-500 hover:border-3 rounded-2xl hover:cursor-pointer"
            />
          </Link>
        </div>

        {/* Quick facts / CTA */}
        <section className="mt-8 grid grid-cols-1 gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm w-200 md:w-max-200 md:grid-cols-3">
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

        <section className="mt-8 flex flec-col items-center justify-center w-200 md:w-max-200 gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-3 py-8">
          <div>
            {project.sections.map((section, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start justify-center  mx-20"
              >
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mt-10 mb-5">
                  {section.heading}
                </h2>
                {Array.isArray(section.content) ? (
                  <ul className="list-disc pl-5 ">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
