import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { fetchData } from "../lib/fetchData";

export default async function Page() {
  const pageUri = "/gode-rad";
  const page = await fetchData(pageUri);

  const modulHero = page[0] || null;
  const modulIntro = page[1] || null;
  const modulAlmTekst = page[2] || null;
  const modulAdvarsler = page[3] || null;
  const modulNummerGuide = page[4] || null;
  const modulPunktListe = page[5] || null;

  return (
    <main>
      <section id='hero'>
        <div className='container'>
          <Link href='/' className='heroHomeLink'>
            Forside
          </Link>

          {modulHero && (
            <>
              <h1>{modulHero.overskriftHero}</h1>
              <p>{modulHero.subTitleHero}</p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
