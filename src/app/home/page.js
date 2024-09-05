import AboutMe from "@/src/components/home/AboutMe";
import ContactForm from "@/src/components/home/Contact/ContactForm";
import Hero from "@/src/components/home/Hero";
import Portfolio from "@/src/components/home/Portfolio/Portfolio";
import Skills from "@/src/components/home/Skills";

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
      {/* contact form  */}
      <ContactForm/>
    </>
  );
};

export default HomePage;
