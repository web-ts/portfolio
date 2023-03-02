import type { Component } from "solid-js";
import { Nav } from "./collections/navigation";
import routes from "./plugins/routes";

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <>
      <Nav disableAnimation />
      <Routes />
    </>
  );
};

export default App;
