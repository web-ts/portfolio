import { Component } from "solid-js";
import Intro from "../components/Intro";
import MeAnimation from "../components/MeAnimation";

const Home: Component = () => {
  return (
    <div class="flex min-h-screen">
      <MeAnimation />
      <Intro />
    </div>
  );
};

export default Home;
