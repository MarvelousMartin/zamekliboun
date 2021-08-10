import Gallery from "components/elements/GalleryLightbox/Gallery";
import Heading from "components/elements/Heading";
import Main from "components/elements/Main";

export default function Galerie() {
  const images = [
    {
      image: "http://www.zamekliboun.eu/wp-content/uploads/2014/08/10g.jpg",
    },
    {
      image: "http://www.zamekliboun.eu/wp-content/uploads/2014/08/14g.jpg",
    },
    {
      image: "http://www.zamekliboun.eu/wp-content/uploads/2014/08/3g.jpg",
    },
    {
      image: "http://www.zamekliboun.eu/wp-content/uploads/2014/08/7g.jpg",
    },
    {
      image: "http://www.zamekliboun.eu/wp-content/uploads/2014/08/2g.jpg",
    },
  ];
  return (
    <Main>
      <Heading as="h1">Galerie</Heading>
      <Heading as="h2">Podívejte se na fotky našeho zámku</Heading>
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
            kašnou nebo u rybníka či tůni. Zasportujte si na našem víceúčelovém
            hřišti a pak se osvěžte v našem venkovním krytém vyhřívaném bazénu.
            Na přání nabízíme i masáž. Naší specializací je pořádání svateb na
            klíč.
          </p>
        </div>
      </div>
    </Main>
  );
}
