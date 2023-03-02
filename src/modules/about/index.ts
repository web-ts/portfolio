import { RouteDefinition } from "@solidjs/router";
import About from "./views/About";

const routes: Array<RouteDefinition> = [
  {
    path: "/about",
    component: About
  }
];

export default routes;
