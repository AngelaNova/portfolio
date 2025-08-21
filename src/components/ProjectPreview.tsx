import Link from "next/link";

export default function ProjectsPreview() {
  const projects = [
    {
      name: "Learn Orgo Chem",
      tech: "React + Next.js + TypeScript",
      desc: "Organic Chemistry Course.",
      link: "/projects/learn-orgo-chem",
    },
    {
      name: "Finance Tracker",
      tech: "React + Redux",
      desc: "Track and visualize financial transactions.",
      link: "/projects/finance-tracker",
    },
  ];

  return (
    <section id="projectPreview" className="py-32 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-20 text-emerald-900">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((p) => (
          <Link
            key={p.name}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            href={p.link}
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{p.tech}</p>
            <p className="text-gray-700">{p.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
