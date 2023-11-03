"use client";

import Link from "next/link";
import React from "react";
import fetchLinks from "../lib/getNavigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

async function MainNav() {
  const links = await fetchLinks();
  return (
    <>
      <nav className='headerNav'>
        <div className='container'>
          <ul className='mainNav'>
            {links.data?.header?.headerMenuItems?.map((link) => (
              <li>
                <Link key={link.ID} href={link.url}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MainNav;
