import Project from "../../components/Project";

export default function Projects() {
  const projects = [
    { name: "Portfolio Site", link: "#" },
    { name: "ZMMK Tracker", link: "#" },
  ];

  return (
    <main className="flex flex-col p-4 bg-gradient-to-b from-white to-[#C8DBCB]">
      <div className="flex flex-col mt-20 items-center ">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <Project title="Title" text="hello" pic="" />
        <ul className="space-y-2">
          {projects.map((p) => (
            <li key={p.name}>
              <a href={p.link} className="text-emerald-600 hover:underline">
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
