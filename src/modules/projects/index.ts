import { RouteDefinition } from "@solidjs/router";
import Projects from "./views/Projects";

const routes: Array<RouteDefinition> = [
  {
    path: "/Projects",
    component: Projects,
  },
];

export default routes;
