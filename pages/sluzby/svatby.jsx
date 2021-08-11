import Main from "components/elements/Main";
import Heading from "components/elements/Heading";
import Head from "next/head";

export default function Svatby() {
  return (
    <>
      <Head>
        <title>Zámek Libouň - Svatby</title>
      </Head>
      <Main>
        <Heading as="h1">Svatby</Heading>
      </Main>
    </>
  );
}
