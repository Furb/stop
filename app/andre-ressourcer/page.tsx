async function getPage(uri) {
  const query = `
  query GetPageByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      title
      slug
      
    }
  }
      `;

  const variables = {
    uri,
  };

  const res = await fetch(process.env.NEXT_PUBLIC_URL, {
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

export default async function PostDetails({ params }) {
  const page = await getPage(params.uri);

  return (
    <main>
      <section id='hero'>
        <div className='container'>
          <h1>{page.title}</h1>
          <p>{page.slug}</p>
        </div>
      </section>
    </main>
  );
}
