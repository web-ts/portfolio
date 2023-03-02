import { FlyIn } from "@/collections/fly-in";
import { Component, JSX } from "solid-js";

const InformationCard: Component<{
  children: JSX.Element;
  image: string;
  alt: string;
  reverse?: boolean;
}> = (props) => {
  return (
    <FlyIn
      class={`mt-20 flex gap-6 items-center flex-col p-4 ${props.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div class=" neumorphic p-4 max-w-40">
        <img src={props.image} alt={props.alt} />
      </div>

      <div>{props.children}</div>
    </FlyIn>
  );
};

export default InformationCard;
