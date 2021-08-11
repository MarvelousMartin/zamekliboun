import Heading from "components/elements/Heading";
import Main from "components/elements/Main";
import Head from "next/head";

export default function Apartman() {
  return (
    <>
      <Head>
        <title>Zámek Libouň - Apartmán</title>
      </Head>
      <Main>
        <Heading as="h1">Apartmán</Heading>
      </Main>
    </>
  );
}
