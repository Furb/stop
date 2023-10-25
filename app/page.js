import fetchHomepage from "./libs/getHomepage";
import Card from "./_components/Card";
import Cta_about from "./_components/Cta_about";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

export default async function Home() {
  const home = await fetchHomepage();

  const heroData = home?.acf?.moduler.find(
    (modul) => modul.acf_fc_layout === "hero"
  );

  if (heroData) {
    const { overskrift_hero, sub_title_hero } = heroData;

    const nummerPunktData =
      home?.acf?.moduler.find(
        (modul) => modul.acf_fc_layout === "nummeret_guide"
      )?.nummer_punkt || [];

    return (
      <main>
        <section id='scamHero'>
          <div className='container'>
            <h1>{overskrift_hero}</h1>
            <p>{sub_title_hero}</p>
          </div>
        </section>

        <section id='cards'>
          <div className='container'>
            <div className='cards card__grid'>
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>

        <section id='nyheder'>
          <div className='container'>
            <h2>Nyheder & advarsler</h2>
            <div className='cards card__grid'>
              <div className='card'>
                <div className='card__header'>
                  <div className='card__icon'></div>
                  <h3 className='card__title'>Advarsel/Nyhed</h3>
                </div>
                <div className='card__body'>
                  <p className='card__excerpt'>
                    Advarselstegn der hjælper dig med at afgøre, om du er stødt
                    på en svindler.
                  </p>
                </div>
                <div className='card__footer'>
                  <button className='card__btn'>
                    <div className='card__btn-icon'>
                      <HiArrowNarrowRight />
                    </div>
                  </button>
                </div>
              </div>
              <div className='card'>
                <div className='card__header'>
                  <div className='card__icon'></div>
                  <h3 className='card__title'>
                    StopSvindel.dk vil afskrække svindlere, og ruste danskerne
                    med viden.
                  </h3>
                </div>
                <div className='card__body'>
                  <p className='card__excerpt'>
                    2023 er året, hvor vi besluttede at gøre en særlig indsats
                    for at medvirke til at forebygge og stoppe digital svindel i
                    Danmark. Vi har opfundet en særlig Scamtjekker, og gør brug
                    af vores samlede ressourcer i en fælles kamp for at øge
                    opmærksomheden og styrke vores alles ansvar for at hjælpe
                    med at forebygge og undgå svindel.
                  </p>
                </div>
                <div className='card__footer'>
                  <button className='card__btn'>
                    <div className='card__btn-icon'>
                      <HiArrowNarrowRight />
                    </div>
                  </button>
                </div>
              </div>
              <div className='card'>
                <div className='card__header'>
                  <div className='card__icon'></div>
                  <h3 className='card__title'>Advarsel/Nyhed</h3>
                </div>
                <div className='card__body'>
                  <p className='card__excerpt'>
                    2023 er året, hvor vi besluttede at gøre en særlig indsats
                    for at medvirke til at forebygge og stoppe digital svindel i
                    Danmark. Vi har opfundet en særlig Scamtjekker, og gør brug
                    af vores samlede ressourcer i en fælles kamp for at øge
                    opmærksomheden og styrke vores alles ansvar for at hjælpe
                    med at forebygge og undgå svindel.
                  </p>
                </div>
                <div className='card__footer'>
                  <button className='card__btn'>
                    <div className='card__btn-icon'>
                      <HiArrowNarrowRight />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <Link href='#' className='btn'>
              <p>Se flere nyheder</p>
              <div className='btn__icon'>
                <HiArrowNarrowRight />
              </div>
            </Link>
          </div>
        </section>

        <section id='guidelineSection'>
          <div className='container'>
            <div className='guideline'>
              {nummerPunktData.map((punkt, index) => (
                <div key={index} className='guide'>
                  <h3>
                    <span>{punkt.titel_med_rødt}</span>
                    {punkt.guide_titel_resten}
                  </h3>
                  <p>{punkt.guide_tekst}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Cta_about />
      </main>
    );
  }
}
