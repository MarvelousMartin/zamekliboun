import Heading from "components/elements/Heading";
import Main from "components/elements/Main";
import Image from "next/image";
import Timeline from "components/elements/Timeline";

export default function Historie() {
  const timeline = [
    {
      year: "1149",
      title: "Založení zámku, rotunda a ves",
      description:
        "Zámek v Libouni, původně gotická tvrz s poplužním dvorem, je úzce spjat s historií kláštera premonstrátek v Louňovicích pod Blaníkem, který byl založen v r. 1149. Krátce poté, ve druhé polovině XII stol. byla zde postavena románská rotunda a ves Libouň. Souběžně s tím byla v Libouni postavena tvrz, která měla obranný charakter a k ní patřící poplužní dvůr. Na tvrzi s dvorem, seděli tzv. nápravníci, kteří museli vykonávat určité služby klášteru.",
    },
    {
      year: "1360",
      title: "Rod pánů z Dubé a husitské války",
      description:
        "Zámek v Libouni, původně gotická tvrz s poplužním dvorem, je úzce spjat s historií kláštera premonstrátek v Louňovicích pod Blaníkem, který byl založen v r. 1149. Krátce poté, ve druhé polovině XII stol. byla zde postavena románská rotunda a ves Libouň. Souběžně s tím byla v Libouni postavena tvrz, která měla obranný charakter a k ní patřící poplužní dvůr. Na tvrzi s dvorem, seděli tzv. nápravníci, kteří museli vykonávat určité služby klášteru.",
    },
    {
      year: "1547",
      title: "Král Ferdinand I. a Jan z Perštejna",
      description:
        "Po r. 1547, král Ferdinand I., majetek Táboru zkonfiskoval a Libouň koupil Jan z Pernštejna. Ten již za rok prodal zboží Libouňské a Louňovické za 2.750 kop českých grošů Kryštofu Skuhrovskému ze Skuhrova, který už na Podblanicku vlastnil velký majetek. Když v r. 1652 zemřel jeho syn Oldřich, poslední mužský potomek ze Skuhrova, tak si jeho dvě dcery majetek rozdělily. Magdalena získala Louňovice a mladší Alžběta Kateřina Libouň a Zvěstov.",
    },
    {
      year: "1674",
      title: "Jan Kryštof Malovec z Malovic",
      description:
        "Pro velké dluhy ale potomci Alžběty prodali v r. 1674 celý majetek Janu Kryštofovi Malovci z Malovic. Ten v r. 1677 zemřel a jeho synové si majetek rozdělili tak, že Antonín získal Zvěstov a Václav Malovec Libouň. K Libouni patřily i vesnice Laby, Bořkovice a Ramena, i kostel sv. Václava. Tak se Libouň opět po sto padesáti letech stala centrem samostatného šlechtického majetku. Václav Malovec z Malovic v r. 1690 přestavěl tvrz na nové sídlo, kamenný zámek na skále postavený, se slohovými rysy pozdní renesance. Poté vlastnilo Libouňské zboží několik šlechtických majitelů, až Josef Benedikt hrabě z Věžník, jej prodal v r. 1767 za 49.000 zlatých a 50 dukátů Marii Josefě z Auerspergu, která vlastnila panství vlašimské se zámkem, 12-ti dvory, lesy, rybníky, pilu apod.",
    },
    {
      year: "1920",
      title: "František Chlistovský",
      description:
        "Rod Auerspergů vlastnil tento majetek až do první pozemkové reformy v r. 1920. Tento rok František Chlistovský (náš děda, který měl 10 dětí, z toho 8 synů, z nichž 7 bylo v 1.světové válce a 4 z nich ve válce padli, nebo na její následky zemřeli), prodal svojí chalupu v Mysliči u Benešova a pronajal si od 1. ledna 1920 dvůr v Domašíně, původně Auerspergů, o výměře 120 ha od Státního pozemkového úřadu (SPÚ). Koncem roku 1922, byl nájem SPÚ předčasně ukončen, dvůr byl zcela rozparcelován a rodina našeho dědy se po velkých ztrátách ocitla „na dlažbě“. Jako dobrému hospodáři, napřed SPÚ 4. ledna 1923 pronajal a později na úvěr prodal zbytkový statek v Libouni.",
    },
    {
      year: "1939",
      title: "2. světová válka",
      description:
        "Dluhy splácela naše rodina do r. 1939, poté přišla 2. světová válka a po ní rok 1948, kdy byl dvůr znovu rozparcelován a 1. července 1953 byla naše rodina vystěhována bez náhrady z Libouně. Poté hospodařil v Libouni Státní statek a po něm JZD. Nemovitost čp. 1 v naprosto zdevastovaném stavu, polorozbořená, byla naší rodině vrácena v restituci v r. 1994 a od té doby celých 20 let napravujeme chyby minulosti na obnově této kulturní památky, zapsané pod rejstříkovým číslem 17304/2-91.",
    },
  ];

  const images = [
    {
      source: "/images/historie-1.jpg",
      alt: "Zámek Liboun 1",
    },
    {
      source: "/images/historie-2.jpg",
      alt: "Zámek Liboun 2",
    },
    {
      source: "/images/historie-3.jpg",
      alt: "Zámek Liboun 3",
    },
    {
      source: "/images/historie-4.jpg",
      alt: "Zámek Liboun 4",
    },
    {
      source: "/images/historie-5.jpg",
      alt: "Zámek Liboun 5",
    },
    {
      source: "/images/historie-6.jpg",
      alt: "Zámek Liboun 6",
    },
    {
      source: "/images/historie-7.jpg",
      alt: "Zámek Liboun 7",
    },
    {
      source: "/images/historie-8.jpg",
      alt: "Zámek Liboun 8",
    },
    {
      source: "/images/historie-9.jpg",
      alt: "Zámek Liboun 9",
    },
  ];
  return (
    <Main>
      <div className="mb-16">
        <Heading as="h1">Stručná historie Zámku v Libouni</Heading>
        <p className="font-medium text-lg mb-4 text-gray-500">
          Pojďte se s námi podívat na stručnou historii našeho zámku
        </p>
      </div>
      <Timeline data={timeline} />
      <Heading as="h2">Galerie</Heading>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
        {images.map((image) => {
          return (
            <Image
              src={image.source}
              alt={image.alt}
              width="190"
              height="183"
              key={image.source}
            />
          );
        })}
      </div>
    </Main>
  );
}
