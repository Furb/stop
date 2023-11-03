import { fetchAPI } from "./base";

export async function getAllPages() {
  const data = await fetchAPI(
    `query GetNodeByUri($uri: String!) {
  nodeByUri(uri: $uri) {
    __typename
  }
}`
  );
}

export async function getPages() {
  const data = await fetchAPI(
    `query pagesData {
  pages {
    nodes {
      id,
      title,
      slug
    }
  }
}`
  );

  return data?.pages?.nodes;
}

export async function getPage() {
  const data = await fetchAPI(
    `query pageData {
  pages {
    nodes {
      id,
      title,
      slug
    }
  }
}`
  );

  return data?.pages?.[0].nodes;
}
