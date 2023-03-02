import { RouteDefinition } from "@solidjs/router";

const routes = Object.values(
  import.meta.glob<{ default: Array<RouteDefinition> }>("../modules/*/index.ts", {
    eager: true
  })
).map((module) => module.default);

const finalRoutes: Array<RouteDefinition> = [
  ...routes.flat(),
  {
    path: "/",
    element: () => {
      const navigate = useNavigate();
      navigate("/home");
      return [];
    }
  },
  {
    path: "*",
    element: () => {
      const navigate = useNavigate();
      navigate("/home");
      return [];
    }
  }
];
export default finalRoutes;
