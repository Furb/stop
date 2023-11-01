import fetchHomepage from "./libs/getHomepage";
import Image from "next/image";
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
              <div className='card'>
                <div className='card__header'>
                  <div className='card__icon'>
                    <Image
                      src='/ikon_er_det_svindel.svg'
                      alt='er det svindel'
                      fill={true}
                      style={{ objectFit: "contain" }}
                      loading='lazy'
                    />
                  </div>
                  <h3 className='card__title'>Er det svindel?</h3>
                </div>
                <div className='card__body'>
                  <p className='card__excerpt'>
                    Advarselstegn der hjælper dig med at afgøre, om du er stødt
                    på en svindler.
                  </p>
                </div>
                <div className='card__footer'>
                  <Link href='/svindlerens-metoder'>
                    <button className='card__btn'>
                      <div className='card__btn-icon'>
                        <HiArrowNarrowRight />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
              <div className='card'>
                <div className='card__header'>
                  <div className='card__icon'>
                    <Image
                      src='/ikon_beskyt_dig_selv_og_andre.svg'
                      alt='Gode råd om svindel'
                      fill={true}
                      style={{ objectFit: "contain" }}
                      loading='lazy'
                    />
                  </div>
                  <h3 className='card__title'>Beskyt dig selv og andre</h3>
                </div>
                <div className='card__body'>
                  <p className='card__excerpt'>
                    De bedste tips til at undgå svindel & scams.
                  </p>
                </div>
                <div className='card__footer'>
                  <Link href='/gode-rad/'>
                    <button className='card__btn'>
                      <div className='card__btn-icon'>
                        <HiArrowNarrowRight />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
              <div className='card'>
                <div className='card__header'>
                  <div className='card__icon'>
                    <Image
                      src='/ikon_jeg_er_blevet_svindlet_hvad_nu.svg'
                      alt='jeg er blevet svindlet'
                      fill={true}
                      style={{ objectFit: "contain" }}
                      loading='lazy'
                    />
                  </div>
                  <h3 className='card__title'>
                    Hjælp - jeg er blevet svindlet
                  </h3>
                </div>
                <div className='card__body'>
                  <p className='card__excerpt'>Reager med det samme.</p>
                </div>
                <div className='card__footer'>
                  <Link href='/jeg-blev-svindlet-hvad-nu/'>
                    <button className='card__btn'>
                      <div className='card__btn-icon'>
                        <HiArrowNarrowRight />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='nyheder'>
          <div className='container'>
            <h2>Nyheder & advarsler</h2>
            <div className='cards card__grid'>
              <div className='card'>
                <div className='card__header'>
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

            <Link href='/nyheder-og-advarsler' className='btn'>
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
        <section>
          <div className='container'>
            <h2>Lær mere for at beskytte dig mod svindel</h2>
            <div className='cards card__grid'>
              <div className='card'>
                <div className='card__header'>
                  <h3 className='card__title'>Tilbud om støtte</h3>
                </div>
                <div className='card__body'>
                  <p className='card__excerpt'>
                    På politiets hjemmeside kan du anmelde kriminalitet. Og du
                    kan også her finde oplysninger om og link til mange andre
                    organisationer, der tilbyder hjælp og vejledning omkring
                    digital svindel og kriminalitet. Andre tilbud om støtte |
                    Ofre, vidner og pårørende | Politi
                  </p>
                </div>
                <div className='card__footer'>
                  <Link href='https://politi.dk/ofre-vidner-og-paaroerende/krisehjaelp/andre-tilbud-om-stoette'>
                    <button className='card__btn'>
                      <div className='card__btn-icon'>
                        <HiArrowNarrowRight />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
              <div className='card'>
                <div className='card__header'>
                  <h3 className='card__title'>Mit digitale selvforsvar</h3>
                </div>
                <div className='card__body'>
                  <p className='card__excerpt'>
                    På Forbrugerrådet TÆNK ́s hjemmeside kan du downloade en
                    gratis app, ”Mit digitale selvforsvar”. Det er en app, der
                    holder dig opdateret om de seneste digitale trusler og
                    hjælper dig med sikkerheden online. Det er en app, der er
                    nem at bruge. Mit digitale selvforsvar | Forbrugerrådet Tænk
                    (taenk.dk)
                  </p>
                </div>
                <div className='card__footer'>
                  <Link href='https://taenk.dk/om-os/mit-digitale-selvforsvar'>
                    <button className='card__btn'>
                      <div className='card__btn-icon'>
                        <HiArrowNarrowRight />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
              <div className='card'>
                <div className='card__header'>
                  <h3 className='card__title'>
                    Din guide til en sikker digital hverdag
                  </h3>
                </div>
                <div className='card__body'>
                  <p className='card__excerpt'>
                    Den Europæiske Unions politienhed, Europol har kort
                    beskrevet nogle gyldne regler for sikker handel på nettet.
                    Nogle online-butikker uden for Europa kan kræve en kopi af
                    dit kort og pas med fax som garanti. Send aldrig dine
                    kortoplysninger i en e-mail, der ikke er krypteret.
                    goldenrules-final-Denmark (europa.eu)
                  </p>
                </div>
                <div className='card__footer'>
                  <Link href='https://www.europol.europa.eu/sites/default/files/documents/goldenrules-final-denmark.pdf'>
                    <button className='card__btn'>
                      <div className='card__btn-icon'>
                        <HiArrowNarrowRight />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
