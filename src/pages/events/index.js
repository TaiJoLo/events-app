import AllEvents from "../../components/events/events-page";
import prisma from "../../../lib/prisma";

const EventsPageIndex = ({ data }) => {
  return <AllEvents data={data} />;
};

export default EventsPageIndex;

export async function getStaticProps() {
  const category = await prisma.events_categories.findMany();

  return {
    props: {
      data: category,
    },
  };
}
