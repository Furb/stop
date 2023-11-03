import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export default async function Page() {
  const response = await fetch(process.env.NEXT_PUBLIC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
query NodeByUri {
  nodeByUri(uri: "/svindlerens-metoder") {
    __typename
    ...Page
 
    }
  }

fragment Page on Page {
    ... on Page {
        excerpt
        id
        featuredImage {
            node {
                id
                sourceUrl
            }
        }
        layout {
            moduler {
                ... on Page_Layout_Moduler_Hero {
                    overskriftHero
                    subTitleHero
                }
                ... on Page_Layout_Moduler_Cards {
                    cardLinks {
                            cardTekst
                            cardTitel
                            cardLink {
                                target
                                title
                                url
                            }
                            cardIkon {
                                altText
                                id
                                uri
                            }
                        }
                }
                ... on Page_Layout_Moduler_Intro {
                    introTekst
                }
                ... on Page_Layout_Moduler_AdvarselstegnRod {
                    titelAdvarselsliste
                }
                ... on Page_Layout_Moduler_NummeretGuide {
                    nummerPunkt {
                        guideTekst
                        guideTitelResten
                    }
                }
                ... on Page_Layout_Moduler_AlmPunktliste {
                    liste
                }
            }
        }
    }
}
  `,
    }),
  });
  const data = await response.json();
  const page = data?.data?.nodeByUri?.layout?.moduler?.[0];

  return (
    <main>
      <section id='hero'>
        <div className='container'>
          <Link href='/' className='heroHomeLink'>
            Forside
          </Link>

          <h1>{page.overskriftHero}</h1>
        </div>
      </section>

      <section id='cards'>
        <div className='container'>
          <div className='cards card__grid'>
            <div className='card'>
              <div className='card__header'>
                <div className='card__icon'>
                  <Image
                    src='/ikon_sms.svg'
                    alt='er det svindel'
                    fill={true}
                    style={{ objectFit: "contain" }}
                    loading='lazy'
                  />
                </div>
                <h3 className='card__title'>
                  Svindel med SMS- og andre tekstbeskeder
                </h3>
              </div>
              <div className='card__body'>
                <p className='card__excerpt'>
                  Du lokkes med en besked, som ser troværdig ud - fra en
                  offentlig instans, fra virksomheder, du handler med, fra
                  familie eller venner.
                </p>
              </div>
              <div className='card__footer'>
                <Link href='/hvordan-svindlere-far-kontakt-med-dig/svindel-med-sms-og-andre-tekstbeskeder/'>
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
                    src='/ikon_svindel_tlf.svg'
                    alt='Gode råd om svindel'
                    fill={true}
                    style={{ objectFit: "contain" }}
                    loading='lazy'
                  />
                </div>
                <h3 className='card__title'>Svindel via telefonopkald</h3>
              </div>
              <div className='card__body'>
                <p className='card__excerpt'>
                  Svindel over telefonen kan koste dig dyrt. Ifølge politi.dk er
                  mange - primært ældre borgere - i 2022 blevet svindlet eller
                  forsøgt svindlet for næsten 100 mio. kroner ved
                  kontaktbedrageri over telefonen.
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
                    src='/ikon_email_scam.svg'
                    alt='jeg er blevet svindlet'
                    fill={true}
                    style={{ objectFit: "contain" }}
                    loading='lazy'
                  />
                </div>
                <h3 className='card__title'>Svindel via e-mail</h3>
              </div>
              <div className='card__body'>
                <p className='card__excerpt'>
                  Svindlere kan få e-mails til at ligne helt `ærlige´ e-mails.
                  Så tænk dig om før du klikker på vedhæftede links eller andre
                  vedhæftede filer. Er de mistænkelige - et forsøg på at
                  franarre dig oplysninger og penge?
                </p>
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
                <h3 className='card__title'>Svindel via sociale medier</h3>
              </div>
              <div className='card__body'>
                <p className='card__excerpt'>
                  Vær opmærksom, hvis du pludselig og uden varsel bliver
                  kontaktet på sociale medier. Svindel begået via sociale medier
                  stod for 36% af al kontaktbedrageri i 2021.
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
                    src='/ikon_er_det_svindel.svg'
                    alt='er det svindel'
                    fill={true}
                    style={{ objectFit: "contain" }}
                    loading='lazy'
                  />
                </div>
                <h3 className='card__title'>Svindel via hjemmesider</h3>
              </div>
              <div className='card__body'>
                <p className='card__excerpt'>
                  Svindlere benytter sig af muligheden for at kunne udgive sig
                  som hvem som helst. Og der oprettes falske hjemmesider og
                  falske annoncer på hjemmesider med det formål at snyde
                  oplysninger og penge fra dig.
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
                    src='/ikon_er_det_svindel.svg'
                    alt='er det svindel'
                    fill={true}
                    style={{ objectFit: "contain" }}
                    loading='lazy'
                  />
                </div>
                <h3 className='card__title'>Svindel med fysisk møde</h3>
              </div>
              <div className='card__body'>
                <p className='card__excerpt'>
                  Nullam quis risus eget urna mollis ornare vel eu leo. Morbi
                  leo risus, porta ac consectetur ac, vestibulum at eros.
                  Maecenas faucibus mollis interdum.
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
          </div>
        </div>
      </section>
    </main>
  );
}
