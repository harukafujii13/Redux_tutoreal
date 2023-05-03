import { Outlet } from "react-router-dom";
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
//The Outlet component is a special component provided by react-router-dom 
//that renders the content of the active route inside the Rootlayout component. 
//The Outlet component is typically used inside a parent route component to render its child routes.
