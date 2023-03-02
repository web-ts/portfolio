import { Component } from "solid-js";
import ProjectCard from "../components/ProjectCard";
import VMU_0 from "../assets/vmu/0.png";
import VMU_1 from "../assets/vmu/1.png";
import VMU_2 from "../assets/vmu/2.png";
import VMU_3 from "../assets/vmu/3.png";
import VMU_4 from "../assets/vmu/4.png";

const Projects: Component = () => {
  return (
    <div class="max-w-7xl mx-auto text-gray-700 pt-40">
      <ProjectCard title="Vue Material You" type="Open source library" images={[VMU_0,VMU_1, VMU_2, VMU_3, VMU_4]}>
        Material design 3 UI framework for Vue 3. Material You is the new design language created for the newer version
        of android. This library helps bring the same look and feel to the web and it features a custom color generator with a dark mode.
        <p class="mt-2">This project can be accessed on it's <a href="https://github.com/web-ts/vue-material-you" class="underline text-blue-500">Github Page</a></p>
      </ProjectCard>
    </div>
  );
};

export default Projects;
