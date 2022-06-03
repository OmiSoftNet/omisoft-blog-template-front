import type { NextPage } from "next";
import Head from "next/head";
import { PopUpT as Props } from "../src/types/popup";
import HomeContent from "../src/components/HomeContent";

const Home: NextPage<Props> = ({ setPopup, popup }) => {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="Explore the best OmiSoft Blog app"
        ></meta>
        <title>Read OmiSoft Blog Online</title>

        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Read OmiSoft Blog Online Free" />
        <meta
          property="og:description"
          content="Read the best OmiSoft Blog app"
        />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="" />
        <meta property="twitter:url" content="" />
        <meta name="twitter:title" content="Read OmiSoft Blog Online" />
        <meta
          name="twitter:description"
          content="Explore the best OmiSoft Blog app"
        />
        <meta name="twitter:image" content="" />
      </Head>
      <HomeContent setPopup={setPopup} popup={popup} />
    </div>
  );
};

export default Home;
