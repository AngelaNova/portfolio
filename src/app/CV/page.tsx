export default function CV() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-4">My CV</h2>
      <a
        href="/cv/Angela_Novakovic_CV.pdf"
        download
        className="px-6 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600"
      >
        Download CV
      </a>
    </main>
  );
}
