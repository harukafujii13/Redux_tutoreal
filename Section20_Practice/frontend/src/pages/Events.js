import { Link } from "react-router-dom";
const DUMMY_EVENT = [
  {
    id: "e1",
    title: "Some event",
  },
  { id: "e2", title: "Another event" },
];

function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENT.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;

//memo1
//For each event, a "li" element is rendered with a unique key,
//which is the event ID. Inside the "li" element,
//there is a "Link" component that has the event title as its display text
//and the event ID as its "to" prop. The "to" prop is used
//by React Router to map the URL path to the corresponding route component.
