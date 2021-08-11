import Main from "components/elements/Main";
import Heading from "components/elements/Heading";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Zámek Libouň - Úvod</title>
      </Head>
      <Main>
        <Heading as="h1">Úvodní stránka</Heading>
      </Main>
    </>
  );
}
