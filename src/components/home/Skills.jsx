import Container from "../Shared/Container";

const Skills = () => {
  return (
    <Container>
    <div className="skills w-full flex gap-8 px-4 lg:w-5/12">

      <div className="skills-content">

      </div>

      <div className="mb-12 p-16 bg-secondary ">
        <div className="bg-stroke flex flex-col text-white dark:bg-dark-3 relative h-2.5 w-full rounded-2xl">
         
          <div style={{ width: "80%" }} className="bg-primary absolute top-0 left-0 h-full rounded-2xl">
            <span className=" absolute -left-4 bottom-full mb-2 rounded-sm px-3.5 py-1 capitalize text-md text-white" >sohan</span>
            <span className="bg-primary absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-white">
              <span className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
              80%
            </span>
          </div>
        </div>
      </div>
      <div className="mb-12 p-16 bg-secondary ">
        <div className="bg-stroke flex flex-col text-white dark:bg-dark-3 relative h-2.5 w-full rounded-2xl">
         
          <div style={{ width: "80%" }} className="bg-primary absolute top-0 left-0 h-full rounded-2xl">
            <span className=" absolute -left-4 bottom-full mb-2 rounded-sm px-3.5 py-1 capitalize text-md text-white" >sohan</span>
            <span className="bg-primary absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-white">
              <span className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
              80%
            </span>
          </div>
        </div>
      </div>

    </div>
    </Container>
  );
};

export default Skills;
