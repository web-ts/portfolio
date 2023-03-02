import { Icon } from "@iconify-icon/solid";
import { Component, JSX } from "solid-js";

const Accordion: Component<{
  id: string;
  children: {
    header?: () => JSX.Element;
    content?: () => JSX.Element;
  };
}> = (props) => {
  const headerId = createMemo(() => `${props.id}-accordion-header`);
  const panelId = createMemo(() => `${props.id}-accordion-panel`);

  const [show, setShow] = createSignal(false);

  function toggle() {
    setShow(!show());
  }

  return (
    <div>
      <button
        id={headerId()}
        aria-controls={panelId()}
        aria-expanded={show()}
        onClick={toggle}
        class="flex items-center p-8 w-full p-4 justify-between"
      >
        <div class="flex">{props.children.header?.()}</div>
        <div class="">
          <Icon
            icon={show() ? "material-symbols:arrow-drop-up-rounded" : "material-symbols:arrow-drop-down-rounded"}
            class="text-2xl"
          />
        </div>
      </button>
      <section id={panelId()} aria-labelledby={headerId()} hidden={!show()} class=" mt-2 p-8 neumorphic">
        <div class="p-4">{props.children.content?.()}</div>
      </section>
    </div>
  );
};

export default Accordion;
