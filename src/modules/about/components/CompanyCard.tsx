import { Accordion } from "@/collections/accordion";
import { Component } from "solid-js";

const CompanyCard: Component<{
  title: string;
  position: string;
  description: string;
}> = (props) => {
  return (
    <Accordion id={props.title}>
      {{
        header: () => (
          <div class="flex items-center justify-start">
            <div class="">{props.title}</div>
            <span class="mx-4">|</span>
            <div class="text-gray-600">{props.position}</div>
          </div>
        ),
        content: () => <div innerHTML={props.description}></div>
      }}
    </Accordion>
  );
};

export default CompanyCard;
