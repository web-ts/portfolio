import { Icon } from "@iconify-icon/solid";
import { Component } from "solid-js";

const Image: Component<{ url: string; alt?: string }> = (props) => {
  const [expanded, setExpanded] = createSignal(false);

  function toggle() {
    setExpanded(!expanded());
  }

  return (
    <div class="m-4 my-5 pointer-events-none" style={{ "scroll-snap-align": "center" }}>
      <div
        class="w-70 max-w-screen h-40 bg-cover rounded-xl pointer-events-none"
        style={{ "background-image": `url(${props.url})` }}
      >
        <button class="pointer-events-auto ml-2 mt-2" onClick={toggle}>
          <div
            class="w-5 h-5 flex justify-center items-center rounded-full bg-white bg-opacity-50"
            role="img"
            aria-label={props.alt}
          >
            <Icon icon="mdi:arrow-expand" />
          </div>
        </button>
      </div>
      <Show when={expanded()}>
        <Portal>
          <div class="fixed left-0 top-0 right-0 bottom-0 w-full h-screen z-40 bg-black bg-opacity-40 flex items-center justify-center">
            <div
              class="w-4xl max-w-screen max-h-screen h-lg bg-cover rounded-xl pointer-events-none scale-in-center"
              style={{ "background-image": `url(${props.url})` }}
            >
              <button class="pointer-events-auto ml-2 mt-2" onClick={toggle} aria-label="Close Image Modal">
                <div
                  class="w-5 h-5 flex justify-center items-center rounded-full bg-white bg-opacity-50"
                  role="img"
                  aria-label={props.alt}
                >
                  <Icon icon="mdi:arrow-collapse" />
                </div>
              </button>
            </div>
          </div>
        </Portal>
      </Show>
    </div>
  );
};

export default Image;
