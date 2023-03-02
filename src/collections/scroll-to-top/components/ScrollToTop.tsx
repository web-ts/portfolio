import useScrollPosition from "@/common/composables/use-scroll-position";
import { Icon } from "@iconify-icon/solid";
import { Component } from "solid-js";

const ScrollToTop: Component = () => {
  function scrollToTop() {
    window.scrollTo(0, 0);
    window.location.hash = "";
  }

  const scroll = useScrollPosition();

  return (
    <Show when={scroll() > 100}>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        class="fixed neumorphic-reverse flex items-center rounded-full right-6 bottom-4 z-10 justify-center rounded-full p-3 text-gray-600 text-3xl slide-in-right"
      >
        <Icon icon="ic:baseline-keyboard-double-arrow-up"></Icon>
      </button>
    </Show>
  );
};

export default ScrollToTop;
