import Container from "../Shared/Container";
import DownloadButton from "../Shared/DownloadButton";
import { FaBootstrap, FaGitAlt, FaGripLinesVertical } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";

const Skills = () => {
  return (
    <div id="mySkills" className="w-full">
      <Container>
        <div className="skills-parent my-16 md:my-0 w-full lg:flex items-baseline gap-8 px-4 ">
          <div className="skills-content w-full lg:w-1/2">
            <div className="special-skill">
              <p className="bg-teal-accent-400 inline-block mb-4 rounded bg-primary py-2 px-4 text-sm font-semibold tracking-wider text-white">
                <FaGripLinesVertical className="inline" />
                <span>Special Skills</span>
              </p>
            </div>
            <h2 className="mb-6 lg:max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl xl:text-5xl sm:leading-snug">
              <span className="  lg:inline-block lg:w-2/3 leading-11 text-secondary">
                My Special Skill Field Here.
              </span>
            </h2>
            <DownloadButton />
          </div>

          <div className="skills my-8 sm:my-12  md:my-16 grid grid-cols-3  md:grid-cols-5 lg:grid-cols-3  gap-4 lg:w-1/2">
            {/* js */}
            <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
              <IoLogoJavascript className="text-5xl text-[#ffcc2f]" />
              <h4 className="text-xl uppercase   font-semibold">js</h4>
            </div>
            {/* react */}
            <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
              <GrReactjs className="text-5xl text-[#08d9ff]" />
              <h4 className="text-xl capitalize  font-semibold">react</h4>
            </div>
            {/* typescript */}
            <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
              <SiTypescript className="text-5xl text-[#30b9d2]" />
              <h4 className="text-xl uppercase   font-semibold">typescript</h4>
            </div>
            {/* redux */}
            <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
              <TbBrandRedux className="text-5xl text-[#7a50be]" />
              <h4 className="text-xl uppercase   font-semibold">redux</h4>
            </div>
            {/* mongodb */}
            <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
              <SiMongodb className="text-5xl text-[#4b9d4d]" />
              <h4 className="text-xl uppercase   font-semibold">mongodb</h4>
            </div>
            {/* Nextjs */}
            <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
              <TbBrandNextjs className="text-5xl text-[#000000]" />
              <h4 className="text-xl uppercase   font-semibold">Nextjs</h4>
            </div>
            {/* git */}
            <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
              <FaGitAlt className="text-5xl text-[#f05639]" />
              <h4 className="text-xl uppercase   font-semibold">git</h4>
            </div>
            {/* bootstrap */}
            <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
              <FaBootstrap className="text-5xl text-[#8d1aff]" />
              <h4 className="text-xl capitalize  font-semibold">bootstrap</h4>
            </div>
            {/* tailwind */}
            <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
              <SiTailwindcss className="text-5xl text-[#08b8d8]" />
              <h4 className="text-xl capitalize  font-semibold">tailwind</h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
