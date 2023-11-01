import Link from "next/link";

export default async function Metoder() {
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
      title,
      slug
    }
  }
}
  `,
    }),
  }).then((res) => res.json());

  let pages = data?.pages?.nodes;

  return (
    <main>
      <section id='hero'>
        <div className='container'>
          {pages?.map((page) => (
            <Link key={page.id} href={`svindlerens-metoder/${page.slug}`}>
              <h4>{page.title}</h4>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
