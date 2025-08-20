"use client";

import Image from "next/image";

const AboutSection = () => {
  const story = [
    {
      text: "Hi, I'm Angela 👋 — a budding software developer with a background rooted in scientific research and problem-solving. \n For years, I worked in the world of organic chemistry — from conducting research at McGill University to collaborating with scientists in the pharmaceutical industry. My days were filled with designing experiments, analyzing complex data, and tackling challenges that required patience, creativity, and precision. Along the way, I also discovered a passion for teaching, helping over 50 students gain confidence in chemistry through tutoring and mentoring.",
      image: "/Chemistry.jpg",
    },
    {
      text: "But while I loved the science, I found myself increasingly drawn to the tools that powered discovery — the logic, structure, and creativity behind technology. The same curiosity that drove me to explore molecular reactions began to steer me toward code. I realized that software development gave me something I craved: a way to solve problems at scale, build projects from the ground up, and keep learning in a fast-moving, ever-evolving field.",
      image: "/lab.JPG",
    },
    {
      text: "Now, as I grow into my career in tech, I bring with me a scientist's mindset — analytical thinking, attention to detail, and resilience when experiments (or code!) don't work the first time. My journey has been anything but linear, but that's what excites me most: each chapter has built a foundation for this next one.",
      image: "/Software.png",
    },
    {
      text: "Today, I'm channeling that energy into projects that blend creativity and logic. Whether it's crafting user-friendly interfaces, structuring clean and efficient code, or collaborating on solutions that make an impact, I see software development as both an art and a science. \n 🌸 Outside of coding, you'll likely find me enjoying coffee, a good book, or dreaming up new projects that connect my scientific past with my developer future.",
      image: "/McGill.jpg",
    },
  ];

  return (
    <section className="py-16 pt-30 bg-gradient-to-t from-white to-[#C8DBCB]">
      <div className="container mx-auto px-6 space-y-18">
        {story.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            {/* Always picture on the left */}
            <div className="w-full md:w-1/2">
              <Image
                src={item.image}
                alt="About image"
                width={400}
                height={400}
                className="rounded-xl shadow-md object-cover h-100 border border-emerald-800 border-3  hover:scale-105"
              />
            </div>
            {/* Text on the right */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-240">
              {item.text.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
