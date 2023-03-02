import { RouteDefinition } from "@solidjs/router";
import Home from "./views/Home";

const routes: Array<RouteDefinition> = [
  {
    path: "/home",
    component: Home,
  },
];

export default routes;
