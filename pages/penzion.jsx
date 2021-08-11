import Main from "components/elements/Main";
import Heading from "components/elements/Heading";
import Head from "next/head";

export default function Penzion() {
  return (
    <>
      <Head>
        <title>Zámek Libouň - Penzion</title>
      </Head>
      <Main>
        <Heading as="h1">Penzion</Heading>
      </Main>
    </>
  );
}
