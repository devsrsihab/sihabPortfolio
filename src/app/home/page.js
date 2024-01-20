import AboutMe from "@/components/home/AboutMe";
import ContactForm from "@/components/home/Contact/ContactForm";
import Education from "@/components/home/Education/Education";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio/Portfolio";
import Skills from "@/components/home/Skills";

const HomePage = () => {
  return (
    <>
      {/* hero section */}
      <Hero />
      {/* about me section */}
      <AboutMe />
      {/* Skill Section */}
      <Skills />
      {/* portfolio */}
      <Portfolio />
      {/* education */}
      {/* <Education/> */}
      {/* contact form  */}
      <ContactForm/>
    </>
  );
};

export default HomePage;
