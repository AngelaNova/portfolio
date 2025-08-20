import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-16 px-6 text-center bg-white">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="max-w-2xl mx-auto text-gray-700 mb-6">
        With an MSc in Chemistry from McGill, I bring strong analytical skills
        and a passion for problem-solving. I transitioned into software
        engineering, where I build full-stack apps with React, Next.js, and
        MongoDB. My goal is to join a fast-paced development team where I can
        contribute and grow.
      </p>
      <Link href="/about" className="text-blue-600 hover:underline">
        Read more →
      </Link>
    </section>
  );
}
