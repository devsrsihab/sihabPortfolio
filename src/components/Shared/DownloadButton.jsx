'use client'
import { useState } from "react";
import { CgSoftwareDownload } from "react-icons/cg";
// import resume from "/@/assets/resume/resume.txt";
const DownloadButton = () => {
  const [fileUrl, setFileUrl] = useState('/@/assets/resume/resume.txt');

  const handleDownload = () => {
    // Create an anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = 'resume.txt'; // Name for the downloaded file
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <button
    onClick={handleDownload}


      className="inline-flex capitalize h-12 w-full items-center justify-center rounded-full bg-primary px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-green-400 focus:ring sm:w-auto"
    >
      get resume <CgSoftwareDownload className="font-semibold text-xl ml-3" />
    </button>
  );
};

export default DownloadButton;
