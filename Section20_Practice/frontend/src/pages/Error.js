import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

function Errorpages() {
  const error = useRouteError();
  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default Errorpages;

//memo1
//The useRouteError hook is used in the Errorpages component to get any error
//that occurred while routing. If the error has a status code of 500,
//it is assumed to be a server error and the message variable is set to the message property of
//the JSON-parsed data property of the error. If the error has a status code of 404,
//it is assumed to be a not-found error and the title and message variables are set accordingly.
