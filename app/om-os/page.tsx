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
  nodeByUri(uri: "/om-os") {
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
          <p>{page.subTitleHero}</p>
        </div>
      </section>
      <section id='boxes'>
        <div className='textBox'>
          <div className='container'>
            <div className='box boxWhite'>{page.introTekst}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
