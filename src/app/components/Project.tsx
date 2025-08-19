import Image from "next/image";

const Project = ({
  title,
  text,
  pic,
}: {
  title: string;
  text: string;
  pic: string;
}) => {
  return (
    <div className="flex flex-row items-center justify-around  p-20 py-60 ">
      <div className="flex flex-col items-start  max-w-2xl">
        <p className="text-4xl pt-2 pb-1">{title}</p>
        <p className="text-xl text-[#00000080] pb-4 pl-1 pt-2">{text}</p>
      </div>
      <div className="p-5 bg-gradient-to-br from-[#C38F25]/40 to-[#98B17B]/60 rounded-2xl">
        <Image
          src={`/${pic}.png`}
          alt={pic}
          width={540}
          height={540}
          className="rounded-2xl object-cover w-[540px] h-[540px]"
        />
      </div>
    </div>
  );
};

export default Project;
