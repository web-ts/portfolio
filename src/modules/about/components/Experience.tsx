import { FlyIn } from "@/collections/fly-in";
import { Icon } from "@iconify-icon/solid";
import { Component } from "solid-js";
import CompanyCard from "./CompanyCard";
import classOnViewDirective from "@/common/directives/class-on-view";
const classOnView = classOnViewDirective;


const Experience: Component = () => {
  const companies = [
    {
      name: "StaffCircle",
      position: "Senior Frontend Developer",
      description: `
      In my current role as a Senior Web Developer at StaffCircle, I am responsible 
      for maintaining and creating new features for the central product of the business. 
      Working with a large team of developers within an agile methodology, I have already made 
      significant contributions to the company's success. I re-architected the product to improve DX 
      and UX, converted the product from JS to TS, and imposed new coding guidelines, 
      bringing a robust set of linting tools. <br><br> I have also written internal libraries, 
      upgraded the project to a scalable, modular structure, and imposed an atomic 
      component design methodology. Additionally, I write technical documentation for all 
      the above-mentioned processes and train and provide support for team members.`
    },
    {
      name: "Made by Sauce",
      position: "Web Developer",
      description: `
      At Made By Sauce, I was a Web Developer and created various web-based applications using 
      Vue.js and Laravel. I worked on multiple major insurance websites, including comparethemarket.com 
      and confused.com, and led a small team of developers. I managed and assigned team tasks, as well 
      as provided estimates for different projects. I introduced company-wide solutions for improving 
      the codebase, such as upgrading the tech stack from Vue2 to Vue3 with TypeScript and Vite.<br><br> I also 
      provided and taught developers how to create and maintain reusable component libraries and ported 
      over one of my big open-source projects for private use within the company. I managed client 
      expectations and time-critical tasks related to live environments. I mentored the whole 
      team on Tailwind CSS, previously using SCSS, with great success across all of our 
      product range.<br><br> Additionally, I performed code reviews and provided solutions for 
      complex products such as polymorphic, configurable libraries for use in projects that require 
      multiple designs under the same codebase.`
    },
    {
      name: "Oasis Studio",
      position: "Web Developer | R&D Developer",
      description: `At Oasis Studio, I was a Web Developer and R&D Developer. I worked within a small 
        team of software developers, created fully-fledged SaaS platforms for a range of industries, 
        including the housing industry and the school sector. I introduced the concept of frameworks such 
        as Vue and Laravel after which the company fully switched to it. I mentored the team on how to use 
        Vue and Laravel. I was responsible for bringing new tech to the company and making concept projects 
        into a reality as an R&D developer.`
    }
  ];

  return (
    <section id="experience" class="px-4">
      <div>&nbsp;</div>
      <div
        use:classOnView={"!translate-x-0 !opacity-100"}
        class="text-3xl font-bold mt-20 transform transition-transform duration-500 -translate-x-20 opacity-0 mb-12"
      >
        Experience
      </div>
      <FlyIn class="mb-8 neumorphic p-8">
        <div class=" w-full p-4 rounded-lg flex  items-center justify-center">
          <Icon icon="logos:vue" width="5rem" height="5rem" />
          <div class="text-bg-warm-gray-100 mt-2 text-center font-bold">Vue.js Expert</div>
        </div>
        <div class="p-4">
          As a Vue.js expert, I have worked on multiple projects using Vue.js and its ecosystem. <br />
          <br />I am an avid user of Vue.js and have written multiple open-source libraries for the community most of
          witch can be found on my{" "}
          <a href="https://github.com/web-ts" target="_blank" class="text-blue-600 underline">
            Github Profile
          </a>
          . <br />
          <br />
          I have also written multiple articles on Vue.js and its ecosystem to help and train other developers at the
          companies I have worked for.
          <br />
          <br />
          My Vue.js expertise includes but is not limited to: <br />
          <br />
          <div class="flex gap-6 flex-wrap">
            <ul class="list-disc list-inside">
              <li>Vue 2</li>
              <li>Vue 3</li>
              <li>Vue Router</li>
              <li>VueX</li>
            </ul>
            <ul class="list-disc list-inside">
              <li>Vue CLI</li>
              <li>Vue Test Utils</li>
              <li>Vue Composition API</li>
              <li>Vue SFC</li>
            </ul>
            <ul class="list-disc list-inside">
              <li>Vue SSR</li>
              <li>Vue 3 + TypeScript</li>
              <li>Vue 3 + Vite</li>
              <li>Vue 3 + Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </FlyIn>
      <FlyIn class="mb-4 neumorphic p-8">
        <div class=" w-full p-4 rounded-lg flex flex-wrap items-center justify-center">
          <div>
            <Icon icon="logos:c-plusplus" width="5rem" height="5rem" />
            <Icon icon="vscode-icons:file-type-rust" width="5rem" height="5rem" />
          </div>
          <div class="text-bg-warm-gray-100 mt-2 text-center font-bold">Low Level Languages</div>
        </div>
        <div class="p-4">
          Although unrelated to my past and current positions, I have worked with multiple low level languages,
          including C++ and Rust. <br /> <br />
          These languages have helped me become a better developer by imposing a strong foundation for understanding
          programming concepts and best practices resulting in me writing cleaner and more efficient code.
        </div>
      </FlyIn>
      <FlyIn class="mt-12">
        <div class="text-xl font-bold mt-4">Work Experience</div>
        <div class="text-gray-600 text-sm mb-4">Some of my recent job positions</div>

        <div class="flex flex-col gap-6">
          <For each={companies}>
            {(company) => (
              <CompanyCard title={company.name} position={company.position} description={company.description} />
            )}
          </For>
        </div>
      </FlyIn>
    </section>
  );
};

export default Experience;
