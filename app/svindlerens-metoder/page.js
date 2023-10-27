import React from "react";
import fetchPage from "../libs/getPage";

export default async function Metoder() {
  const pageData = await fetchPage();

  const heroData = pageData?.acf?.moduler.find(
    (modul) => modul.acf_fc_layout === "hero"
  );

  if (heroData) {
    const { overskrift_hero, sub_title_hero } = heroData;

    return (
      <main>
        <section id='hero'>
          <div className='container'>
            <h1>{overskrift_hero}</h1>
            <p>{sub_title_hero}</p>
          </div>
        </section>
      </main>
    );
  }
}
