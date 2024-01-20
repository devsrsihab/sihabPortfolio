"use client";
import { useState } from "react";
import { CgSoftwareDownload } from "react-icons/cg";
// import resume from "/@/assets/resume/resume.txt";
const DownloadButton = () => {

/* The code you provided is a React component that renders a download button. */
  const cvUrl = "https://devsrsihab.vercel.app/Md-Sohanur-Rohman-Sihab.pdf";
  const handleDownloadCv = (url) => {
    
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blogURL = window.URL.createObjectURL(new Blob([blob]));

        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blogURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      })
      .catch((err) => console.log(err));
  };

  return (
    <button
      onClick={() => handleDownloadCv(cvUrl)}
      className="inline-flex capitalize h-12 w-full items-center justify-center rounded-full bg-primary px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-green-400 focus:ring sm:w-auto"
    >
      get resume <CgSoftwareDownload className="font-semibold text-xl ml-3" />
    </button>
  );
};

export default DownloadButton;
