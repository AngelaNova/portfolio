export default function Contact() {
  return (
    <main className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p>
        Email:{" "}
        <a
          href="mailto:youremail@example.com"
          className="text-blue-600 hover:underline"
        >
          youremail@example.com
        </a>
      </p>
    </main>
  );
}
