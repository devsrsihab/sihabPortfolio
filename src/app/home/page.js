import AboutMe from "@/components/home/AboutMe";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";

const HomePage = () => {
  return (
    <>
      {/* hero section */}
      <Hero />
      {/* about me section */}
      <AboutMe/>
      {/* Skill Section */}
      <Skills/>
    </>
  );
};

export default HomePage;
