import { Component, JSX } from "solid-js";
import classOnViewDirective from "@/common/directives/class-on-view";
const classOnView = classOnViewDirective;

const FlyIn: Component<{ children: JSX.Element | Array<JSX.Element>; class?: string }> = (props) => {
  return (
    <div
      use:classOnView={"!translate-y-0 !opacity-100"}
      class={`${props.class ?? ''} transform transition-transform duration-700 translate-y-40 opacity-0`}
    >
      {props.children}
    </div>
  );
};

export default FlyIn;
