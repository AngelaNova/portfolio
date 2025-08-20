// app/components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#C8DBCB] text-gray-800 py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left - Navigation */}
        <nav className="flex flex-wrap gap-6 text-sm font-medium">
          <Link
            href="/about"
            className="hover:text-emerald-700 hover:bg-gray-50/35 rounded-sm px-2 py-1 transition"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-emerald-700 hover:bg-gray-50/35 rounded-sm px-2 py-1 transition"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-emerald-700 hover:bg-gray-50/35 rounded-sm px-2 py-1 transition"
          >
            Contact
          </Link>
          <a
            href="/Angela_Novakovic_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-700 hover:bg-gray-50/35 rounded-sm px-2 py-1 transition"
          >
            CV
          </a>
        </nav>

        {/* Right - Social icons */}
        <div className="flex gap-5 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/angela-novakovic/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-gray-50/35 rounded-full p-2 transition -ml-3"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn icon"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://github.com/AngelaNova"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-gray-50/35 rounded-full p-2 transition -ml-3"
          >
            <Image src="/github.png" alt="GitHub icon" width={20} height={20} />
          </a>
          <a
            href="https://www.instagram.com/novakovic.angela/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-gray-50/35 rounded-full p-2 transition -ml-3"
          >
            <Image
              src="/instagram.png"
              alt="Instagram icon"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-xs text-gray-600 mt-4">
        © {new Date().getFullYear()} Angela Novakovic. All rights reserved.
      </div>
    </footer>
  );
}
