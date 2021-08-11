import Main from "components/elements/Main";
import Heading from "components/elements/Heading";
import Head from "next/head";

export default function Vecirky() {
  return (
    <>
      <Head>
        <title>Zámek Libouň - Večírky</title>
      </Head>
      <Main>
        <Heading as="h1">Večírky</Heading>
      </Main>
    </>
  );
}
