import Link from "next/link";

export default function ProjectsPreview() {
  const projects = [
    {
      name: "Finance Tracker",
      tech: "React + Redux",
      desc: "Track and visualize financial transactions.",
    },
    {
      name: "Recipe Blog",
      tech: "React + MongoDB + OAuth",
      desc: "Blog app with CRUD posts and secure login.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.name}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{p.tech}</p>
            <p className="text-gray-700">{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/projects" className="text-blue-600 hover:underline">
          See all projects →
        </Link>
      </div>
    </section>
  );
}
