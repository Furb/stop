import React from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <section className='headerTop'>
        <div className='container'>
          <div className='logo headerLogo'>
            <Link href='/'>
              <Image
                src='/logo_sort.svg'
                alt='Stopsvindel'
                fill={true}
                style={{ objectFit: "contain", objectPosition: "left" }}
                loading='lazy'
              />
            </Link>
          </div>
        </div>
      </section>
      <Nav />
    </header>
  );
}

export default Header;
