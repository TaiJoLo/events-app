import Head from "next/head";
import { Inter } from "@next/font/google";

import HomePage from "../components/home/home-page";
import prisma from "../../lib/prisma";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ data }) => {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage data={data} />
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const category = await prisma.events_categories.findMany();

  return {
    props: {
      data: { category },
    },
  };
}
