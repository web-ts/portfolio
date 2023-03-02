import { Component, JSX } from "solid-js";

const AboutCard: Component<{
  title: string;
  image: string;
  alt: string;
  class?: string;
  goTo?: string;
  style?: JSX.CSSProperties | string;
}> = (props) => {
  function onClick() {
    const section = document.getElementById(props.goTo ?? "");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <button
      class={`bg-kinda-white rounded-xl overflow-hidden  transition-colors hover:bg-gray-100 shadow-2xl
            cursor-pointer flex flex-col justify-between items-center mx-auto md:mx-0 ${props.class}`}
      style={props.style}
      onClick={onClick}
    >
      <div class="text-center text-4xl p-8 text-gray-600 font-semibold">{props.title}</div>
      <div class="max-w-50">
        <img class="w-full" draggable={false} src={props.image} alt={props.alt} />
      </div>
    </button>
  );
};

export default AboutCard;
