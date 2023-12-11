import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/home/Hero";
import Image from "next/image";
import HomePage from "@/app/home/page";

export default function Home() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* home */}
      <HomePage />
    </>
  );
}
