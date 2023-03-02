import { Component } from "solid-js";

import HELLO from "../assets/hello.png";

const MeAnimation: Component = () => {
  return (
    <div class="absolute w-full h-screen md:(flex-grow relative w-1/2) bg-kinda-white flex  overflow-hidden justify-center">
      <div class="left-1/2 transform -translate-x-1/2 absolute -bottom-40 ">
        <div class="bg-green-500 w-3xl h-3xl rounded-full scale-in-center" style="--animation-delay: 100ms" />
      </div>
      <div
        class="bg-green-300 w-lg h-lg bg-opacity-80 rounded-full transform absolute bottom-10 left-0 slide-in-left"
        style="--animation-delay: 300ms"
      />
      <div
        class="bg-green-100 w-sm h-sm bg-opacity-80 rounded-full absolute bottom-80 -right-10 slide-in-right"
        style="--animation-delay: 600ms"
      />
      <img
        src={HELLO}
        class="max-w-3xl self-end slide-in-bottom z-10"
        alt="myself-hello"
        style="--animation-delay: 800ms"
      />
    </div>
  );
};

export default MeAnimation;
