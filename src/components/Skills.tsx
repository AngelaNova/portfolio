export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "OAuth/Auth",
  ];

  return (
    <section className="py-16 px-6 text-center bg-white">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-[#C8DBCB] text-blue-800 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
