import Image from "next/image";
import Link from "next/link";

import { SiFacebook, SiSpotify, SiInstagram } from "react-icons/si";

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='footerContent one__two-col'>
          <div className='socialSektion'>
            <div className='logo footerLogo'>
              <Image
                src='/logo_hvid.svg'
                alt='Stopsvindel'
                fill={true}
                style={{ objectFit: "contain", objectPosition: "left" }}
                loading='lazy'
              />
            </div>
            <div className='socialLinks'>
              <Link href='#'>
                <SiFacebook />
              </Link>
              <Link href='#'>
                <SiSpotify />
              </Link>
              <Link href='#'>
                <SiInstagram />
              </Link>
            </div>
          </div>

          <div className='footerBeskrivelse'>
            <p>
              Sammen kan vi bygge en fremtid,hvor svindlere afskrækkes, svindel
              afsløres, ogdanskere er rustet med viden og værktøjer til
              atbeskytte sig selv.
            </p>
          </div>
        </div>
        <hr />
        <div className='footerLinks'>
          <a href='#'>Privacy</a>
          <a href='#'>Disclaimer</a>
          <a href='#'>Accesibility</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
