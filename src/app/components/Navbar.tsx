import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center space-x-6 p-4 bg-gray-100">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
