import { A } from "@solidjs/router";
import { Component } from "solid-js";
import { Icon } from "@iconify-icon/solid";
import { SOCIALS } from "@/common/constants/socials";
const Intro: Component = () => {
  return (
    <div
      class="width-to-1/2 bg-warm-gray-100 bg-opacity-90 relative z-10 w-full overflow-x-hidden shadow-2xl md:w-auto"
      style="--animation-delay:1800ms"
    >
      <div class="slide-in-right" style="--animation-delay:1900ms">
        <div class="mt-20 flex items-center justify-center">
          <div class="bg-warm-gray-700 relative mr-20 rounded-md py-2 px-4 text-4xl text-white shadow-lg">
            It's me
            <div class="absolute bottom-[-40%] right-1 inline-block w-9 overflow-hidden">
              <div class=" bg-warm-gray-700 h-6 w-6 origin-top-left -rotate-45 transform"></div>
            </div>
          </div>
        </div>
        <div style="--animation-delay:2500ms" class="text-gray-800">
          <div class="mt-16 mr-20 flex justify-center text-5xl sm:text-7xl lg:text-8xl text-pop-up-top">Horia</div>
          <div class="ml-20 flex justify-center text-5xl sm:text-7xl lg:text-8xl text-pop-up-top">Rotaru</div>
        </div>
        <div class="mt-8 text-center text-2xl text-blue-600">Front-End Developer</div>
        <div class="mt-2 flex justify-center gap-2 text-center text-blue-600">
          <For each={SOCIALS}>
            {(social) => (
              <a href={social.url} target="__blank" aria-label={social.name}>
                <Icon icon={social.icon} class="text-xl" />
              </a>
            )}
          </For>
        </div>
        <div class="mx-2 mt-8 text-center text-2xl text-gray-700">
          I'm a <span class="text-blue-600">seasoned</span> web developer with a
          <span class="text-blue-600"> creative</span> flair.
        </div>
        <div class="mt-10 flex flex-col items-center justify-center gap-4">
          <A
            href="/about"
            class="rounded bg-blue-600 p-2 px-6 text-3xl font-thin text-white shadow-lg shadow-blue-300 transition-shadow hover:shadow-blue-500 animate-pulse"
          >
            Learn more
          </A>
          <A
            href="/contact"
            class="rounded bg-green-500 p-2 px-6 text-3xl font-thin text-white shadow-lg shadow-green-300 transition-shadow hover:shadow-green-500"
          >
            Say hi
          </A>
        </div>
      </div>
    </div>
  );
};

export default Intro;
