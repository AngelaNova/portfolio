import Link from "next/link";
import Image from "next/image";
import DropDownMenu from "./DropDownMenu";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0  w-full flex justify-around items-center space-x-6 p-4 bg-white/50 backdrop-blur-md mb-6 ">
      <div className="flex">
        <Link href="/">
          <Image src="/AN_Logo.png" alt="AN logo" width={90} height={90} />
        </Link>
      </div>
      <div className="flex flex-row justify-around items-center space-x-6">
        <DropDownMenu
          title="Projects"
          titleHref="/projects"
          links={[
            { label: "Learn Orgo Chem", href: "/projects/learn-orgo-chem" },
            { label: "Finance Tracker", href: "/projects/finance-tracker" },
          ]}
        />

        <Link
          href="/about"
          className="flex flex-row items-center hover:text-emerald-600"
        >
          <p>About</p>
        </Link>

        <Link href="/contact" className="flex flex-row  hover:text-emerald-600">
          <p>Contact</p>
        </Link>
        <div className="border-l border-[#0000001A] h-8"></div>

        <Link href="/CV.pdf" className="hover:text-emerald-600">
          CV
        </Link>
      </div>
    </nav>
  );
}
