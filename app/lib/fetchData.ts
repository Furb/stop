import pageQuery from "../lib/page";

export async function fetchData(pageUri) {
  const response = await fetch(process.env.NEXT_PUBLIC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: pageQuery,
      variables: { uri: pageUri },
    }),
  });

  const data = await response.json();
  console.log(data);
  return data?.data?.nodeByUri?.layout?.moduler ?? [];
}

function getModule(page, index) {
  return page[index] || null;
}
