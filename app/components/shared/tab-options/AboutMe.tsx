import { socialInfo } from "@/lib";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="px-3">
      <p className="mb-5 text-2xl font-semibold text-slate-900 dark:text-white">
        Hi, I'm Md Asikuzzaman.
      </p>
      <p className="text-md lg:text-md mb-4 text-slate-900 dark:text-[#d3d8e8] lg:leading-8">
        I'm a passionate Software Developer with 4+ years of expertise in{" "}
        <span className="border-b-[1px] border-b-violet-500">
          Next.js, React.js, Prisma, MongoDB, Zod, and TypeScript 💪.{" "}
        </span>
        I thrive on exploring new technologies, embracing challenges 🚀, and
        continually expanding my knowledge 📚. Committed to delivering
        innovative solutions 💡 and enhancing user experiences through a blend
        of creativity 💭 and technical acumen 💻. My journey in the world of
        software development is not just about writing code; it's a relentless
        pursuit of excellence 🏆. Explore my portfolio to witness my dedication
        to continuous learning 📖, overcoming challenges, and crafting solutions
        that make an impact 🔥.
      </p>

      <p className="text-md lg:text-md text-slate-900 dark:text-[#d3d8e8] lg:leading-8">
        I love challenges and I know there is always a solution ✅. At my age,
        my unwavering focus is to be recognized as one of the best coders in
        tech 🌟. I love my clients ❤️, I enjoy my projects 🎨, and respect my
        teammates 👥.
      </p>

      <div className="mt-6 flex gap-3">
        <a
          target="_blank"
          href={socialInfo.whatsApp}
          className="inline-flex items-center rounded-full bg-[#17766a] px-5 py-2.5 text-center text-sm font-medium text-white duration-200 hover:bg-[#17766a]/70 focus:outline-none focus:ring-4 focus:ring-[#17766a]/70"
        >
          <Image
            className="mr-2"
            height={24}
            width={24}
            src="/images/whatsapps.png"
            alt="whatsapp"
          />
          WhatsApp
        </a>

        <a
          target="_blank"
          href="/files/Md_Asikuzzaman_CV.pdf"
          download="Md_Asikuzzaman_CV.pdf"
          className="inline-flex items-center rounded-full bg-[#815b19] px-5 py-2.5 text-center text-sm font-medium text-white duration-200 hover:bg-[#815b19]/70 focus:outline-none focus:ring-4 focus:ring-[#815b19]/70"
        >
          <Image
            className="mr-2"
            height={24}
            width={24}
            src="/images/download.png"
            alt="whatsapp"
          />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
