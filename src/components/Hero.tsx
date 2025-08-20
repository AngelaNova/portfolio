export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-6 py-18 bg-gradient-to-b from-white to-[#C8DBCB]">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Angela Novakovic</h1>
      <p className="text-lg mb-6 max-w-2xl">
        Full-stack developer in transition from chemistry to software. Skilled
        in React, Next.js, and building impactful web applications.
      </p>
      <div className="space-x-4">
        <a
          href="/projects"
          className="px-6 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-600/80"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-2 border border-emerald-600 text-emerald-600 rounded hover:bg-[#FCFCFC]/30"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
