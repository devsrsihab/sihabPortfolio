import { CgSoftwareDownload } from "react-icons/cg";

const DownloadButton = () => {
  return (
    <button
      href="/"
      className="inline-flex capitalize h-12 w-full items-center justify-center rounded-full bg-primary px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-green-400 focus:ring sm:w-auto"
    >
      get resume <CgSoftwareDownload className="font-semibold text-xl ml-3" />
    </button>
  );
};

export default DownloadButton;
