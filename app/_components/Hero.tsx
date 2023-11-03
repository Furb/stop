import Link from "next/link";

function Hero() {
  return (
    <section id='hero'>
      <div className='container'>
        <Link href='/' className='heroHomeLink'>
          Forside
        </Link>

        <h1>{overskrift_hero}</h1>
        <p>{sub_title_hero}</p>
      </div>
    </section>
  );
}

export default Hero;
