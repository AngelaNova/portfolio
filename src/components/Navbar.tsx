import Link from "next/link";
import Image from "next/image";
import DropDownMenu from "./DropDownMenu";

export default function Navbar() {
  return (
    <nav className="fixed w-full flex justify-around items-center space-x-6 p-4 bg-gray-100/50 mb-6 ">
      <div className="flex">
        <Link href="/">
          <Image src="/AN_Logo.png" alt="AN logo" width={90} height={90} />
        </Link>
      </div>
      <div className="flex flex-row justify-around items-center space-x-6">
        <DropDownMenu
          title="Projects"
          titleHref="/Projects"
          links={[
            { label: "Learn Orgo Chem", href: "/projects/LearnOrgoChem" },
            { label: "Financial App", href: "/projects/FinancialApp" },
          ]}
        />

        <Link
          href="/about"
          className="flex flex-row items-center hover:text-blue-500"
        >
          <p>About</p>
        </Link>

        <Link href="/contact" className="flex flex-row  hover:text-blue-500">
          <p>Contact</p>
        </Link>
        <div className="border-l border-[#0000001A] h-8"></div>

        <Link href="/contact" className="hover:text-blue-500">
          CV
        </Link>
      </div>
    </nav>
  );
}
