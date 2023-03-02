import { FlyIn } from "@/collections/fly-in";
import { Gallery } from "@/collections/gallery";
import { Component, JSX } from "solid-js";

const ProjectCard: Component<{
  images: Array<string>;
  title: string;
  type: string;
  children: JSX.Element | Array<JSX.Element>;
}> = (props) => {
  return (
    <FlyIn class="px-4">
      <div class="mb-4">
        <div class="text-2xl font-semibold">{props.title}</div>
        <div class="text-sm mb-2 font-thin">{props.type}</div>

        <p class="text-sm text-gray-600">{props.children}</p>
      </div>
      <div>
        <Gallery images={props.images} />
      </div>
    </FlyIn>
  );
};

export default ProjectCard;
