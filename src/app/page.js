import Navbar from "@/components/Navbar/Navbar";
import HomePage from "@/app/home/page";
import Footer from "@/components/Shared/Footer";

export default function Home() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* home */}
      <HomePage />
      {/* footer */}
      <Footer/>
    </>
  );
}
