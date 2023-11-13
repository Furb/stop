async function page({ params }) {
  const { data } = await fetch(process.env.NEXT_PUBLIC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
    query pageData {
  pages {
    nodes {
      id,
      title,
      uri
    }
  }
}
  `,
    }),
  }).then((res) => res.json());

  const uri = params.uri;

  return (
    <main>
      <section id='hero'>
        <div className='container'>
          <h1>{uri}</h1>
        </div>
      </section>
    </main>
  );
}

export default page;
