import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

function Cta_about() {
  return (
    <section id='info'>
      <div className='container'>
        <div className='infoTekst'>
          <div className='logo'>
            <Link href='/'>
              <Image
                src='/logo_hvid.svg'
                alt='Stopsvindel'
                fill={true}
                style={{ objectFit: "contain", objectPosition: "left" }}
                loading='lazy'
              />
            </Link>
          </div>
          <div className='infoContent'>
            <p>
              Vores Scamtjekker, drevet af unikke datamodeller, dykker dybt ned
              i telefonnumre, links, e-mails, navne og sociale medieprofiler for
              at vurdere sandsynligheden for svindel.
            </p>

            <ul>
              <li>
                Præcise Indsigter: Bruger state-of-the-art datamodeller
                skræddersyet til svindeldetektion.
              </li>
              <li>
                Omfattende Tjek: Undersøger alt fra e-mails og telefonnumre til
                sociale medieprofiler.
              </li>
              <li>
                Forbliv Et Skridt Foran: Konstant opdateret for at genkende de
                nyeste svindelmetoder og advarselstegn.
              </li>
              <li>
                Brugervenligt Interface: Tjek ubesværet enhver detalje og få
                øjeblikkelig feedback om dens sikkerhed.
              </li>
              <li>
                Ro i Sindet: Naviger i den digitale verden med et ekstra
                beskyttelseslag og sikkerhed.
              </li>
            </ul>
          </div>
          <Link href='#' className='btn'>
            <p>Tjek nu og forbliv sikker</p>
            <div className='btn__icon'>
              <HiArrowNarrowRight />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cta_about;
