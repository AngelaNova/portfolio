import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section
      id="AboutPreview"
      className="flex flex-col py-20 px-6 text-start items-center bg-white"
    >
      <Image
        src="/flower.png"
        alt="flower"
        width={25}
        height={25}
        className="-mt-24 mb-30 "
      />
      <div className="flex flex-row space-x-28 items-center">
        <div className="flex flex-col max-w-140">
          <h2 className="text-3xl font-bold mb-10 text-emerald-900">
            About Me
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-6">
            With an MSc in Chemistry from McGill, I bring strong analytical
            skills and a passion for problem-solving. I transitioned into
            software engineering, where I build full-stack apps with React,
            Next.js, and MongoDB.
            <br />
            <br />
            My goal is to join a fast-paced development team where I can
            contribute and grow.
          </p>
        </div>
        <div className="flex flex-col">
          <Image
            src="/Angela.png"
            alt="Angela's picture"
            width={200}
            height={200}
            className="rounded-full mb-4 w-70 h-70 object-cover"
          />
        </div>
      </div>

      <Link
        href="/about"
        className="text-emerald-600 hover:font-semibold hover:ml-5 my-10"
      >
        Read more →
      </Link>
    </section>
  );
}
