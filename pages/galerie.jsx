import Gallery from "components/elements/GalleryLightbox/Gallery";
import Heading from "components/elements/Heading";
import Subheading from "components/elements/Subheading";
import Main from "components/elements/Main";
import Head from "next/head";

export default function Galerie() {
  const images = [
    {
      source: "/images/zamek-liboun-1.jpg",
      alt: "Zámek Liboun 1",
    },
    {
      source: "/images/zamek-liboun-2.jpg",
      alt: "Zámek Liboun 2",
    },
    {
      source: "/images/zamek-liboun-3.jpg",
      alt: "Zámek Liboun 3",
    },
    {
      source: "/images/zamek-liboun-4.jpg",
      alt: "Zámek Liboun 4",
    },
    {
      source: "/images/zamek-liboun-5.jpg",
      alt: "Zámek Liboun 5",
    },
    {
      source: "/images/zamek-liboun-6.jpg",
      alt: "Zámek Liboun 6",
    },
    {
      source: "/images/zamek-liboun-7.jpg",
      alt: "Zámek Liboun 7",
    },
    {
      source: "/images/zamek-liboun-8.jpg",
      alt: "Zámek Liboun 8",
    },
    {
      source: "/images/zamek-liboun-9.jpg",
      alt: "Zámek Liboun 9",
    },
  ];
  return (
    <>
      <Head>
        <title>Zámek Libouň - Galerie</title>
      </Head>
      <Main>
        <Heading as="h1">Galerie</Heading>
        <Subheading>Podívejte se na fotky našeho zámku</Subheading>
        <div className="grid lg:grid-cols-2 gap-x-8">
          <Gallery images={images} />
          <div>
            <p className="mb-3">
              Hostům nabízíme ubytování na zámku i v penzionu v podzámčí či
              podkroví. Dovolená na zámku Libouň je vhodná pro všechny věkové
              kategorie. Pro romantické pobyty doporučujeme ubytování na zámku v
              zámeckých apartmánech, pro rodiny s dětmi je vhodný penzion v
              podzámčí či v podkroví.
            </p>
            <p>
              Zámek Libouň je ideálním místem pro rodinné oslavy, firemní akce a
              svatby. K dispozici je zámecká restaurace, dva salónky, konírna s
              celkovou kapacitou cca 200 osob. Relaxujte v zámecké zahradě s
              kašnou nebo u rybníka či tůni. Zasportujte si na našem
              víceúčelovém hřišti a pak se osvěžte v našem venkovním krytém
              vyhřívaném bazénu. Na přání nabízíme i masáž. Naší specializací je
              pořádání svateb na klíč.
            </p>
          </div>
        </div>
      </Main>
    </>
  );
}
