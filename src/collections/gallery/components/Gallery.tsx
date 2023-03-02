import { Component } from "solid-js";
import Image from "./Image";

const Gallery: Component<{ images: Array<string> }> = (props) => {
  const [isScrolling, setIsScrolling] = createSignal(false);

  function onMouseDown(e: MouseEvent) {
    setIsScrolling(true);
  }

  function onMouseUp(e: MouseEvent) {
    setIsScrolling(false);
  }

  function onMouseMove(e: MouseEvent) {
    if (isScrolling()) {
      const target = e.target as HTMLElement;
      const scrollAmount = e.movementX;
      target.scrollLeft -= scrollAmount;
    }
  }

  return (
    <div class="neumorphic-deep">
      <div
        class="flex flex-nowrap overflow-x-auto bg-bg-kinda-white hide-scrollbar"
        style={{
          "scroll-snap-type": isScrolling() ? "none" : "x mandatory",
          cursor: isScrolling() ? "grabbing" : "grab"
        }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseUp}
        onDragStart={(e) => e.preventDefault()}
      >
        <For each={props.images}>{(url) => <Image url={url} />}</For>
      </div>
    </div>
  );
};

export default Gallery;
