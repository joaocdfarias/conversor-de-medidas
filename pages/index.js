import Head from "next/head";
import Header from "../components/nav";
import CentralBox from "../components/CentralBox";

export default function Home() {
  return (
    <>
      <Head>
        <title>Conversor de Medidas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <CentralBox />
    </>
  );
}
