import EventItem from "../components/EventItem";
import { json, redirect, useRouteLoaderData } from "react-router-dom";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}

//memo1
//"data.event" refers to the event object that was loaded in the EventDetailPage component
//using the useLoaderData hook. This object is typically fetched from a server
//and loaded into the component using the loader function.
//The data object returned by useLoaderData contains any data that was loaded
//during the routing process, including the event object in this case.a

//memo2
//The action function is responsible for deleting the selected event.
//It retrieves the eventId parameter from the params object
//and sends a DELETE request to the server using the fetch API.
//If the response from the server is not ok, the function throws a JSON object
//with an error message and a status of 500. If the request is successful,
//the function redirects the user to the events page.
