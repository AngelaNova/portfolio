export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "OAuth/Auth",
  ];

  return (
    <section className="py-32 px-6 text-center bg-white">
      <h2 className="text-3xl font-bold mb-20 text-emerald-900">Skills</h2>
      <div className="flex flex-wrap items-center justify-center align-center gap-3 max-w-2xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-1 pt-2 bg-[#C8DBCB] text-emerald-800 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
