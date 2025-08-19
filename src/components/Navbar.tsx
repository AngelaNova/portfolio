import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed w-full flex justify-around items-center space-x-6 p-4 bg-gray-100/50 mb-6 ">
      <div className="flex">
        <Link href="/">
          <Image
            src="/AN_Logo.png"
            alt="AN logo"
            width={180}
            height={180}
            className="-mb-8 -mt-10"
          />
        </Link>
      </div>
      <div className="flex flex-row justify-around items-center space-x-6">
        <Link href="/about" className="hover:text-blue-500">
          About
        </Link>
        <Link href="/projects" className="hover:text-blue-500">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-blue-500">
          Contact
        </Link>
        <div className="border-l border-[#0000001A] h-8"></div>
        <Link href="/contact" className="hover:text-blue-500">
          CV
        </Link>
      </div>
    </nav>
  );
}
