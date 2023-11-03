import { getPage } from "../../lib/quries";

async function page(params) {
  const page = await getPage(slug);
  return (
    <main>
      <section id='hero'>
        <div className='container'>
          <h1>{page.title}</h1>
        </div>
      </section>
    </main>
  );
}

export default page;
