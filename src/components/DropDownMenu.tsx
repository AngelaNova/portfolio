import Image from "next/image";

type LinkItem = {
  label?: string;
  href?: string;
  element?: React.ReactNode;
};

type DropDownMenuProps = {
  title: string;
  titleHref?: string;
  links: LinkItem[];
};

const DropDownMenu = ({ title, titleHref, links }: DropDownMenuProps) => {
  return (
    <div className="flex flex-row items-center relative group">
      <Image
        src="/arrowDown.png"
        alt="Projects"
        width={40}
        height={40}
        className="px-3 py-3.5"
      />
      <a
        href={titleHref}
        className="hover:text-blue-500 focus:outline-none -ml-2"
      >
        {title}
      </a>

      <div
        className="absolute left-2 mt-32 w-42 rounded-lg bg-white shadow-lg border border-gray-200 
        opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
        transform transition-all duration-200 hidden group-hover:block m-2"
      >
        {links.map((link, index) =>
          link.element ? (
            <div key={index} className="block px-5 py-4 hover:bg-gray-100">
              {link.element}
            </div>
          ) : (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              {link.label}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default DropDownMenu;
