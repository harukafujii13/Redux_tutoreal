import EventItem from "../components/EventItem";
import { json, useRouteLoaderData } from "react-router-dom";

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

//memo1
//"data.event" refers to the event object that was loaded in the EventDetailPage component
//using the useLoaderData hook. This object is typically fetched from a server
//and loaded into the component using the loader function.
//The data object returned by useLoaderData contains any data that was loaded
//during the routing process, including the event object in this case.
