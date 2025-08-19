export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-[#FCFCFC]">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Angela</h1>
      <p className="text-lg mb-6">
        A budding software developer | Next.js & React
      </p>
      <a
        href="/projects"
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        View Projects
      </a>
    </main>
  );
}
