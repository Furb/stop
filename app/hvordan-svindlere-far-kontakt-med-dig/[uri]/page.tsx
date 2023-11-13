import parse from "html-react-parser";

async function getPage(uri) {
  const query = `
  query GetPageByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
     
       __typename
      ...Page
  
    }
  }

  fragment Page on Page {
    ... on Page {
        excerpt
        id
        title
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

                 ... on Page_Layout_Moduler_RelateretIndhold {
                        links {
                            side {
                                ... on Page {
                                    id
                                    excerpt
                                    featuredImage {
                                        node {
                                            altText
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

  const variables = {
    uri,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const responseBody = await res.json();

  if (responseBody && responseBody.data && responseBody.data.page) {
    return responseBody.data.page;
  } else {
    throw new Error("Failed to fetch the page");
  }
}

export default async function PageDetails({ params }) {
  const page = await getPage(params.uri);

  return (
    <main>
      <nav>
        <h1>{page.title}</h1>
      </nav>

      <div className='card' key={page.uri}>
        <p>{page.id}</p>
        <p>{page.excerpt}</p>
      </div>
    </main>
  );
}
