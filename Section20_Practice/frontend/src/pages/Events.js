import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    //...
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

//memo1
//For each event, a "li" element is rendered with a unique key,
//which is the event ID. Inside the "li" element,
//there is a "Link" component that has the event title as its display text
//and the event ID as its "to" prop. The "to" prop is used
//by React Router to map the URL path to the corresponding route component.

//memo2
//This is a React functional component called EventsPage.
//It uses the useLoaderData hook from the react-router-dom library to retrieve the data
//that was loaded in the loader function defined in the route object for this page.

//The useLoaderData hook returns the data that was returned by the loader function defined in the router object.
//In this case, it returns the events data fetched from the API endpoint http://localhost:8080/events.
