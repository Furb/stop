import React from "react";

function page({ params }) {
  return (
    <main>
      <section id='hero'>
        <div className='container'>
          <h1>{params.slug}</h1>
        </div>
      </section>
    </main>
  );
}

export default page;
