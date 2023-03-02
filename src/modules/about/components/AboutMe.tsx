import { Component } from "solid-js";
import WEB_DEVELOPMENT from "../assets/web_development.png";
import COMPUTER from "../assets/computer.png";
import PUZZLE from "../assets/puzzle.png";
import InformationCard from "./InformationCard";
import classOnViewDirective from "@/common/directives/class-on-view";
import { FlyIn } from "@/collections/fly-in";
const classOnView = classOnViewDirective;

const AboutMe: Component = () => {
  return (
    <section id="about" class="px-4">
       <div>&nbsp;</div>
      <div
        use:classOnView={"!translate-x-0 !opacity-100"}
        class="text-3xl font-bold mt-20 transform transition-transform duration-500 -translate-x-20 opacity-0"
      >
        About Me
      </div>
      <div
        use:classOnView={"!translate-x-0 !opacity-100"}
        class="mt-4 transform transition-transform duration-700 -translate-x-20 opacity-0 px-4"
      >
        Hi there! My name is Horia Rotaru and I'm a web developer who loves to architect
        <span class="text-red-600"> big projects </span>. I'm skilled in a lot of front-end frameworks including, but
        not limited to <span class="text-green-600">Vue.js</span> and <span class="text-blue-600">Solid.js</span>.
      </div>
      <InformationCard image={WEB_DEVELOPMENT} alt="Computer Coding">
        Ever since I discovered my passion for web development, I've been drawn to the challenge of creating big,
        complex projects. I love the process of breaking down a big idea into smaller, more manageable pieces and then
        piecing it all back together into a fully functional application.
      </InformationCard>

      <InformationCard image={COMPUTER} alt="Computer laptop and phone" reverse>
        In terms of front-end frameworks, I have a wealth of experience working with a variety of different tools and
        technologies. I'm proficient in <span class="text-green-600">Vue.js</span> and{" "}
        <span class="text-blue-600">Solid.js</span>, among others, and I'm always excited to explore new frameworks and
        libraries as they emerge. I believe that a great front-end framework can make all the difference in creating a
        smooth, responsive user experience, and I work hard to stay up-to-date with the latest trends and developments
        in this area.
      </InformationCard>

      <InformationCard image={PUZZLE} alt="Arcade gaming machine">
        When I'm not coding, I enjoy playing video games and playing the piano as well. I find these hobbies to be a
        great way to unwind and refresh my mind, allowing me to return to my work with renewed energy and focus.
      </InformationCard>

      <FlyIn class="mt-20 px-4">
        Overall, I'm a skilled and dedicated web developer who is passionate about coding and staying on the cutting
        edge of front-end technology. If you're looking for someone who can bring your big ideas to life and create
        amazing user experiences, I'd love to hear from you!
      </FlyIn>
    </section>
  );
};

export default AboutMe;
