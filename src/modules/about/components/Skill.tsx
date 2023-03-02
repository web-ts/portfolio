import useMousePosition from "@/common/composables/use-mouse-position";
import { Icon } from "@iconify-icon/solid";
import { Component } from "solid-js";

const Skills: Component<{ skill: { icon: string; name: string; raw?: boolean } }> = (props) => {
  const mouse = useMousePosition();

  let skillBox: HTMLDivElement | undefined;

  function handleMouseMove(mouse: { x: number; y: number }) {
    if (skillBox) {
      const { left, top, width, height } = skillBox.getBoundingClientRect();

      const offset = 40;

      if (
        mouse.x + offset > left &&
        mouse.x - offset < left + width &&
        mouse.y + offset > top &&
        mouse.y - offset < top + height
      ) {
        const x = (left + width / 2 - mouse.x) / 10;
        const y = (top + height / 2 - mouse.y) / 10;
        skillBox.style.transform = `translate(${-x}px, ${-y}px)`;
      }
    }
  }

  function handleMouseLeave() {
    if (skillBox) {
      skillBox.style.transform = "translate(0px, 0px)";
    }
  }

  createEffect(() => {
    handleMouseMove(mouse());
  });

  return (
    <div
      ref={skillBox}
      class="neumorphic transition-colors w-36 h-36 m-4 p-4 rounded-lg flex flex-col items-center justify-center"
    >
      {props.skill.raw ? (
        <div class="w-20 h-20" innerHTML={props.skill.icon}></div>
      ) : (
        <Icon icon={props.skill.icon} width="5rem" height="5rem" />
      )}
      <div class="text-bg-warm-gray-100 mt-2 text-center font-bold">{props.skill.name}</div>
    </div>
  );
};

export default Skills;
