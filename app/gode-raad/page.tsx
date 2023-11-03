import Link from "next/link";
import { getPages } from "../lib/quries";

export default async function godeRaad() {
  const pages = await getPages();
  return (
    <main>
      <section id='hero'>
        <div className='container'>
          {pages?.map((page) => (
            <Link key={page.id} href={`gode-raad/${page.slug}`}>
              <h4>{page.title}</h4>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
