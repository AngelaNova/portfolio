export default function Projects() {
  const projects = [
    { name: "Portfolio Site", link: "#" },
    { name: "ZMMK Tracker", link: "#" },
  ];

  return (
    <main className="p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul className="space-y-2">
        {projects.map((p) => (
          <li key={p.name}>
            <a href={p.link} className="text-blue-600 hover:underline">
              {p.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
