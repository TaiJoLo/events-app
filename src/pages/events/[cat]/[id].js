import SingleEvent from "../../../components/events/single-event";
import prisma from "../../../../lib/prisma";

const EventPage = ({ data }) => <SingleEvent data={data} />;

export default EventPage;

export async function getStaticPaths() {
  const allEvents = await prisma.all_events.findMany();

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const cat = context.params.cat;
  console.log("cat_[id]:", context.params.cat);

  const allEvents = await prisma.all_events.findMany();

  const eventData = allEvents.find((ev) => id === ev.id);

  return {
    props: { data: eventData },
  };
}
