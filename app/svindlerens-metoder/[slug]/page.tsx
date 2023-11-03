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
      slug
    }
  }
}
  `,
    }),
  }).then((res) => res.json());

  const slug = params.slug;

  return (
    <main>
      <section id='hero'>
        <div className='container'>
          <h1>{slug}</h1>
        </div>
      </section>
    </main>
  );
}

export default page;
