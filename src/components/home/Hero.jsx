const Hero = () => {



  return (
    <>
    
      <div id="homeHero" className="relative bg-[#333333] md:px-20 py-10 sm:py-20 md:py-40 lg:py-96  mx-auto  lg:pt-20  max-w-full ">
        <div className="mx-auto md:mt-30 w-full lg:max-w-screen-xl">
          <div className="mb-16 lg:mt-[255px] text-center lg:mb-0 lg:max-w-lg lg:text-left">
            <div className="mb-6 w-full lg:max-w-xl">

              <h2 className="mb-6 pt-10  lg:max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-snug">
              Hello I am <br />
                <span className="block lg:inline-block text-primary">
                Md Sohanur Rohman Sihab
                </span>
              </h2>
              <div>
                <p className="bg-teal-accent-400 mb-4 inline-block rounded-full bg-primary px-3 py-px text-sm font-semibold tracking-wider text-white">
                MERN Stack Web Developer
                </p>
              </div>
            </div>

          </div>
          <div className="hidden h-full justify-center overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:flex lg:w-1/2 lg:items-end lg:justify-start">
            <svg
              className="h-full w-full"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="img1" x={0} y={0} width={1} height={1}>
                  <image
                    x={0}
                    y={0}
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMaxYMax slice"
                    href="https://i.ibb.co/xmV97pk/devsrsihab.jpg"
                  />
                </pattern>
              </defs>
              <path
                fill="url(#img1)"
                d="M40,-62.6C52.2,-54.5,62.5,-43.9,66.9,-31.4C71.3,-18.9,69.6,-4.6,65.9,8.3C62.2,21.1,56.4,32.5,49.2,45.2C42.1,57.9,33.7,72.1,22.2,75.3C10.7,78.5,-3.9,70.7,-14.8,62.1C-25.7,53.5,-32.8,44.1,-44.9,35.8C-57,27.5,-74,20.3,-82.1,7.7C-90.3,-4.8,-89.5,-22.7,-80.8,-34.8C-72,-46.9,-55.2,-53.3,-40.4,-60.2C-25.6,-67,-12.8,-74.3,0.6,-75.2C13.9,-76.1,27.9,-70.6,40,-62.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
