import { Metadata } from "next";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Shared/Footer";
import HomePage from "./home/page";

export const metadata = {
  title: "SR Sihab - MERN Stack Developer Portfolio",
  description:
    "Portfolio of SR Sihab, a skilled MERN stack developer specializing in MongoDB, Express.js, React, and Node.js. View my projects and skills.",
  keywords: [
    "MERN stack",
    "web developer",
    "portfolio",
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
  ],
  authors: [{ name: "SR Sihab" }],
  openGraph: {
    title: "SR Sihab - MERN Stack Developer Portfolio",
    description:
      "Explore the portfolio of SR Sihab, a talented MERN stack developer. See my latest projects and technical skills.",
    images: [
      {
        url: "https://i.ibb.co/xmV97pk/devsrsihab.jpg",
        width: 1200,
        height: 630,
        alt: "SR Sihab - MERN Stack Developer",
      },
    ],
    type: "website",
    url: "https://srsihab.com",
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <Footer />
    </main>
  );
}
