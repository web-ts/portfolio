import { Component } from "solid-js";
import Skill from "./Skill";

import SOLID_ICON from "../assets/icons/solid.svg?raw";
import PINIA_ICON from "../assets/icons/pinia.svg?raw";
import { FlyIn } from "@/collections/fly-in";

const Skills: Component = () => {
  const skills = [
    {
      name: "Vue.js",
      icon: "logos:vue"
    },
    {
      name: "Solid.js",
      icon: SOLID_ICON,
      raw: true
    },
    {
      name: "Nuxt",
      icon: "logos:nuxt-icon"
    },
    {
      name: "Vite",
      icon: "logos:vitejs"
    },
    {
      name: "Webpack",
      icon: "logos:webpack"
    },
    {
      name: "Vitest",
      icon: "logos:vitest"
    },
    {
      name: "Jest",
      icon: "logos:jest"
    },
    {
      name: "Pinia",
      icon: PINIA_ICON,
      raw: true
    },
    {
      name: "Windi CSS",
      icon: "vscode-icons:file-type-windi"
    },
    {
      name: "Tailwind",
      icon: "logos:tailwindcss-icon"
    },
    {
      name: "Sass",
      icon: "logos:sass"
    },
    {
      name: "TypeScript",
      icon: "logos:typescript-icon"
    },
    {
      name: "JavaScript",
      icon: "logos:javascript"
    },
    {
      name: "HTML",
      icon: "logos:html-5"
    },
    {
      name: "Docker",
      icon: "logos:docker-icon"
    },
    {
      name: "Git",
      icon: "logos:git-icon"
    },
    {
      name: "GitHub",
      icon: "logos:github-octocat"
    },
    {
      name: "Azure DevOps",
      icon: "vscode-icons:file-type-azure"
    },
    {
      name: "Jira",
      icon: "logos:jira"
    },
    {
      name: "PNPM",
      icon: "logos:pnpm"
    },
    {
      name: "NPM",
      icon: "logos:npm"
    },
    {
      name: "Yarn",
      icon: "logos:yarn"
    },
    {
      name: "MySQL",
      icon: "logos:mysql-icon"
    },
    {
      name: "PostgreSQL",
      icon: "logos:postgresql"
    },
    {
      name: "Node.js",
      icon: "logos:nodejs-icon"
    },
    {
      name: "Deno",
      icon: "logos:deno"
    },
    {
      name: "GraphQL",
      icon: "logos:graphql"
    },
    {
      name: "OData",
      icon: "vscode-icons:file-type-azurepipelines"
    },
    {
      name: "Figma",
      icon: "logos:figma"
    },
    {
      name: "Photoshop",
      icon: "logos:adobe-photoshop"
    }
  ];

  return (
    <section id="skills" class="px-4">
       <div>&nbsp;</div>
      <FlyIn>
        <div class="text-3xl font-bold mt-20 mb-4">Skills</div>
        <div class="flex justify-center gap-6 flex-wrap">
          <For each={skills}>{(skill) => <Skill skill={skill} />}</For>
        </div>
      </FlyIn>
    </section>
  );
};

export default Skills;
