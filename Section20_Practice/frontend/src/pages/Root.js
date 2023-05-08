import { Outlet, useLoaderData } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Rootlayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Rootlayout;

//memo1
//The "Outlet" component is a special component provided by the React Router library
//that renders the child route components based on the current URL path.
//The child routes are defined in the router configuration, and they define
//what component should be rendered for a specific URL path.
