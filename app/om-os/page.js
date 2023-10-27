import React from "react";
import Link from "next/link";

function Om_os() {
  return (
    <main>
      <section id='hero'>
        <div className='container'>
          <h1>overskrift</h1>
          <p>subtitle</p>
        </div>
      </section>
      <h1>om os</h1>
      <Link href='/'>Hjem</Link>
    </main>
  );
}

export default Om_os;
