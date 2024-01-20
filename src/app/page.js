import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Shared/Footer";
import HomePage from "./home/page";

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
