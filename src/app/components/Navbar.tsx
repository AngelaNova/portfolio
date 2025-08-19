import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full flex justify-around space-x-6 p-4 bg-gray-100/50 mb-6 ">
      <div className="flex">Angela Novakovic</div>
      <div className="flex space-x-6">
        <Link href="/about" className="hover:text-blue-500">
          About
        </Link>
        <Link href="/projects" className="hover:text-blue-500">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-blue-500">
          Contact
        </Link>

        <Link href="/contact" className="hover:text-blue-500">
          CV
        </Link>
      </div>
    </nav>
  );
}
