async function fetchPages() {
  const { data } = await fetch(process.env.NEXT_PUBLIC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
    query pagesData {
  pages {
    nodes {
      id,
      title
    }
  }
}
  `,
    }),
  }).then((res) => res.json());
}

export default fetchPages;
