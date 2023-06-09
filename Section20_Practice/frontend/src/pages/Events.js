import { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
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

//memo3
//In the code above, throw new Response(...) creates and throws a new Response object
//with a JSON-encoded message as the first argument and a status code of 500 as the second argument.

//memo4
//When the EventsPage component is rendered, it first displays a loading message (using Suspense and Await).
//Once the events are loaded, the EventsList component is rendered with the loaded events.

//memo5
//<Suspense> lets you display a fallback until its children have finished loading.
