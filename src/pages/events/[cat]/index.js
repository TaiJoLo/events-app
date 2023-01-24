import { CatEvent } from "../../../components/events/catEvent";
import prisma from "../../../../lib/prisma";

const EventsCatPage = ({ data, pageName }) => (
  <CatEvent data={data} pageName={pageName} />
);

export default EventsCatPage;

export async function getStaticPaths() {
  const category = await prisma.events_categories.findMany();
  // const email = await prisma.emails.findMany();
  // console.log("email_index:", email);

  const allPaths = category.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  // console.log("allPath_catIndex:", allPaths);

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log("context__catIndex:", context);
  const id = context?.params.cat;
  const allEvents = await prisma.all_events.findMany();
  // console.log("allEvents:", allEvents);
  const data = allEvents.filter((ev) => ev.city === id);
  // console.log("data is here:", data);
  return {
    props: { data, pageName: id },
  };
}
