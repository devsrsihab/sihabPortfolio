import Container from "../Shared/Container";
import DownloadButton from "../Shared/DownloadButton";
import { FaHtml5,FaCss3Alt,FaBootstrap,FaGripLinesVertical } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaLaravel } from "react-icons/fa6";
import { ImWordpress } from "react-icons/im";
import { SiJquery,SiPhp } from "react-icons/si";




const Skills = () => {
  return (
    <div id="mySkills">
    <Container>
      <div  className="skills-parent w-full flex items-baseline gap-8 px-4 ">
        <div className="skills-content w-1/2">
          <div className="special-skill">
            <p className="bg-teal-accent-400 inline-block mb-4 rounded bg-primary py-2 px-4 text-sm font-semibold tracking-wider text-white">
              <FaGripLinesVertical className="inline" />{" "}
              <span>Special Skills</span>
            </p>
          </div>
          <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-snug">
            <span className="inline-block w-2/3 leading-11 text-secondary">
              My Special Skill Field Here.
            </span>
          </h2>
          <DownloadButton/>
        </div>

        <div className="skills grid grid-cols-3  gap-4 w-1/2">
          {/* html */}
         <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
          <FaHtml5 className="text-5xl text-[#ff5c29]" />
          <h4 className="text-xl uppercase font-semibold" >HTML</h4>
         </div>
         {/* css */}
         <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
          <FaCss3Alt className="text-5xl text-[#0874bc]" />
          <h4 className="text-xl  uppercase  font-semibold" >css</h4>
         </div>
         {/* js */}
         <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
          <IoLogoJavascript className="text-5xl text-[#ffcc2f]" />
          <h4 className="text-xl uppercase   font-semibold" >js</h4>
         </div>
         {/* j-Query */}
         {/* <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
          <SiJquery className="text-5xl text-[#106daf]" />
          <h4 className="text-xl capitalize   font-semibold" >j-query</h4>
         </div> */}
         {/* bootstrap */}
         <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
          <FaBootstrap className="text-5xl text-[#8d1aff]" />
          <h4 className="text-xl capitalize  font-semibold" >bootstrap</h4>
         </div>
         {/* tailwind */}
         <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
          <SiTailwindcss className="text-5xl text-[#08b8d8]" />
          <h4 className="text-xl capitalize  font-semibold" >tailwind</h4>
         </div>
         {/* react */}
         <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
          <GrReactjs className="text-5xl text-[#08d9ff]" />
          <h4 className="text-xl capitalize  font-semibold" >react</h4>
         </div>
         {/* php */}
         <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
          <SiPhp className="text-5xl text-[#7b7fb5]" />
          <h4 className="text-xl uppercase  font-semibold" >php</h4>
         </div>
         {/* laravel */}
         <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
          <FaLaravel className="text-5xl text-[#f3554b]" />
          <h4 className="text-xl capitalize  font-semibold" >laravel</h4>
         </div>
         {/* wordpress */}
         <div className="icon-box p-4 flex flex-col gap-2 justify-center items-center rounded-md shadow-md   ">
          <ImWordpress className="text-5xl text-[#087aa0]" />
          <h4 className="text-xl capitalize  font-semibold" >wordpress</h4>
         </div>
        
        </div>
      </div>
    </Container>
    </div>
  );
};

export default Skills;
