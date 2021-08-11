import Main from "components/elements/Main";
import Heading from "components/elements/Heading";
import Head from "next/head";

export default function JidelniListek() {
  return (
    <>
      <Head>
        <title>Zámek Libouň - Jídelní lístek</title>
      </Head>
      <Main>
        <Heading as="h1">Jídelní lístek</Heading>
      </Main>
    </>
  );
}
