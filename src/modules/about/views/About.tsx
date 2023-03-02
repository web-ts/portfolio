import AboutCard from "../components/AboutCard";
import AboutMe from "../components/AboutMe";
import BackgroundCardDisplay from "../components/BackgroundCardDisplay";
import EXPERIENCE from "../assets/experience.gif";
import Experience from "../components/Experience";
import ME_CROSS_HANDS from "../assets/me_cross_hands.png";
import SKILLS from "../assets/skills.gif";
import Skills from "../components/Skills";
import { Component } from "solid-js";
import { Footer } from "@/collections/footer";
import { ScrollToTop } from "@/collections/scroll-to-top";

const About: Component = () => {
  return (
    <>
      <ScrollToTop />
      <div class="flex items-center justify-center min-h-screen gap-8 flex-col md:flex-row py-20 overflow-x-hidden">
        <BackgroundCardDisplay />
        <AboutCard
          title="About Me"
          image={ME_CROSS_HANDS}
          goTo="about"
          alt="Me crossing hands"
          class="slide-in-left"
          style="--animation-delay: 600ms"
        />
        <div class="flex flex-col justify-start items-start">
          <AboutCard
            title="Skills"
            image={SKILLS}
            goTo="skills"
            alt="Me typing"
            class="slide-in-right"
            style="--animation-delay: 900ms"
          />
          <div class="mt-8"></div>
          <AboutCard
            title="Experience"
            image={EXPERIENCE}
            goTo="experience"
            alt="Me charging"
            class="slide-in-left"
            style="--animation-delay: 1200ms"
          />
        </div>
      </div>
      <div class="max-w-7xl mx-auto text-gray-700">
        <AboutMe />
        <Skills />
        <Experience />
      </div>
      <Footer />
    </>
  );
};

export default About;
