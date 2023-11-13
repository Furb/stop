import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export default async function Page() {
  const pageURI = {
    uri: "/om-os",
  };
  const query = `  
query NodeByUri {
    nodeByUri(uri: "${pageURI.uri}") {
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

                
                    ... on Page_Layout_Moduler_Intro {
                      
                        introTekst
                    }

                     ... on Page_Layout_Moduler_AlmTekst {
            tekstFeltAlm
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

                ... on Page_Layout_Moduler_RelateretIndhold {
                        links {
                            side {
                                ... on Page {
                                    id
                                    excerpt
                                    featuredImage {
                                        node {
                                            altText
                                            sourceUrl
                                         
                                        }
                                    }
                                    title
                                    uri
                                }
                            }
                        }
                    }
                
            }
        }
    }
}

  `;

  const response = await fetch(process.env.NEXT_PUBLIC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  const page = data?.data?.nodeByUri?.layout?.moduler ?? [];

  const modulHero = page[0] || null;
  const modulIntro = page[1] || null;
  const modulAlmTekst = page[2] || null;
  const modulAdvarsler = page[3] || null;
  const modulNummerGuide = page[4] || null;
  const modulPunktListe = page[5] || null;
  const modulLinks = page[6] || null;

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
      <section id='boxes'>
        <div className='container'>
          <div className='box boxWhite'>
            {modulIntro && (
              <>
                <div
                  dangerouslySetInnerHTML={{ __html: modulIntro.introTekst }}
                ></div>
              </>
            )}
          </div>
          <div className='box boxWhite'>
            {modulAlmTekst && (
              <>
                <div
                  dangerouslySetInnerHTML={{
                    __html: modulAlmTekst.tekstFeltAlm,
                  }}
                ></div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
