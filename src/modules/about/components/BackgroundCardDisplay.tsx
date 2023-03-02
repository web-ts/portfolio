import useScrollPosition from "@/common/composables/use-scroll-position";
import { Component } from "solid-js";

const BackgroundCardDisplay: Component = () => {
  const scroll = useScrollPosition();

  // Used to create a random set of cards
  function _rng() {
    return [...Array(5)].map((_, index) => ({
      width: `${Math.random() * 450}px`,
      height: `${Math.random() * 800}px`,
      "--animation-delay": `${index * 100}ms`,
      scrollDirection: Math.random() > 0.5 ? -1 : 1,
      scrollMultiplier: Math.random()
    }));
  }

  const cards = [
    {
      width: "290px",
      height: "200px",
      "--animation-delay": "0ms",
      scrollDirection: -1,
      scrollMultiplier: 0.6
    },
    {
      width: "60px",
      height: "350px",
      "--animation-delay": "100ms",
      scrollDirection: -1,
      scrollMultiplier: 0.58
    },
    {
      width: "45px",
      height: "595px",
      "--animation-delay": "200ms",
      scrollDirection: 1,
      scrollMultiplier: 0.8
    },
    {
      width: "357px",
      height: "200px",
      "--animation-delay": "300ms",
      scrollDirection: -1,
      scrollMultiplier: 0.25
    },
    {
      width: "55px",
      height: "250px",
      "--animation-delay": "400ms",
      scrollDirection: 1,
      scrollMultiplier: 0.72
    }
  ];

  return (
    <div class="absolute top-0 left-0 flex gap-4 md:gap-24 flex-wrap items-center justify-center min-h-screen max-h-screen w-full overflow-hidden border-b border-warm-gray-400">
      <For each={cards}>
        {(card) => (
          <div style={{ transform: `translateY(${(scroll() / 2) * card.scrollDirection * card.scrollMultiplier}px)` }}>
            <div
              class="neumorphic rounded-xl min-w-40 mx-auto md:mx-0 min-h-50 scale-in-center"
              style={card}
            />
          </div>
        )}
      </For>
    </div>
  );
};

export default BackgroundCardDisplay;
