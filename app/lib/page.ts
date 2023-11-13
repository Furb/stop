const pageQuery = `
  query NodeByUri($uri: String!) { 
    nodeByUri(uri: $uri) {
      __typename
      ...Page
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
            ... on Page_Layout_Moduler_RelateretIndhold {
              links {
                side {
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
            ... on Page_Layout_Moduler_AlmTekst {
              tekstFeltAlm
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
  }
`;

export default pageQuery;
