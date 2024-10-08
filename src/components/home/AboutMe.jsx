import Image from "next/image";
import ProfileImg from "@/src/assets/images/devsrsihabbgremove.png";
import DownloadButton from "../Shared/DownloadButton";
const AboutMe = () => {
  return (
    <>
      <div
        id="aboutMe"
        className=" w-full md:max-w-4/5 grid grid-cols-1 lg:grid-cols-2  py-6  md:py-16 lg:py-36 md:px-20  mx-auto my-20 md:my-24 lg:my-0"
      >
        {/*Main Col*/}
        <div
          id="profile"
          className="mx-10 w-full   h-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75  lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            {/* Image for mobile view*/}
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{
                backgroundImage: `url("/devsrsihab.jpg")`,
              }}
            />
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">
              Md Sohanur Rohman Sihab
            </h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />

            <p className=" text-sm">
              I have skills in
              <span className="text-primary font-semibold"> HTML</span>,
              <span className="text-primary font-semibold"> CSS</span>,
              <span className="text-primary font-semibold"> JavaScript</span>,
              <span className="text-primary font-semibold"> Tailwind CSS</span>,
              <span className="text-primary font-semibold"> Laravel</span>,
              <span className="text-primary font-semibold"> WordPress</span>,
              and . While I am relatively new to
              <span className="text-primary font-semibold"> ReactJS</span>, I
              bring a wealth of expertise in crafting responsive and engaging
              web experiences. I am excited to leverage my skills to contribute
              effectively to
              <span className="text-primary font-semibold"> ReactJS </span>
              projects and further expand my expertise in this dynamic
              framework.
            </p>
            <div className="pt-12 pb-8">
              <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 lg:justify-start">
                <DownloadButton />
                <a
                  href="#contactWithMe"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-primary px-4 font-semibold text-green-600 transition-colors duration-200 hover:border-y-green-400 hover:text-green-400 sm:w-auto"
                >
                  Contact With Me
                </a>
              </div>
            </div>
            <div className="mt-6 pb-16 lg:pb-0 w-full lg:w-full mx-auto flex gap-6 flex-wrap items-center justify-center lg:justify-start">
              <a
                className="link"
                target="_blank"
                href="https://www.facebook.com/devsrsihab/"
                data-tippy-content="@facebook_handle"
              >
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                </svg>
              </a>
              <a
                className="link"
                target="_blank"
                href="https://github.com/devsrsihab"
                data-tippy-content="@github_handle"
              >
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                className="link"
                target="_blank"
                href="https://www.youtube.com/@srsihab2640/videos"
                data-tippy-content="@youtube_handle"
              >
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>YouTube</title>
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
              <a
                className="link"
                target="_blank"
                href="https://www.linkedin.com/in/devsrsihab/"
                data-tippy-content="@youtube_handle"
              >
                <svg
                  className="h-7 mt-3 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>Linkedin</title>
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                </svg>
              </a>
            </div>
            {/* Use https://simpleicons.org/ to find the svg for your preferred product */}
          </div>
        </div>
        {/*Img Col*/}
        <div className=" devsihab-img  w-full  h-full ">
          {/* Big profile image for side bar (desktop) */}
          <Image
            src={ProfileImg}
            className="rounded-none h-full lg:rounded-lg shadow-2xl hidden lg:block"
            placeholder="blur"
            alt="devsrsihab"
          />
          {/* Image from: http://unsplash.com/photos/MP0IUfwrn0A */}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
