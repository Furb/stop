"use client";
import Link from "next/link";
import React from "react";
import fetchLinks from "../libs/getNavigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

async function Nav() {
  const links = await fetchLinks();
  return (
    <section className='headerNav'>
      <div className='container'>
        <NavigationMenu.Root>
          <NavigationMenu.List>
            {links.data?.header?.headerMenuItems?.map((link) => (
              <NavigationMenu.Item key={link.ID}>
                <Link href={link.url}>
                  <NavigationMenu.Trigger>{link.title}</NavigationMenu.Trigger>
                </Link>
                <NavigationMenu.Content>
                  {link.children.map((child) => (
                    <li key={child.ID}>
                      <Link href={child.url}>{child.title}</Link>
                    </li>
                  ))}
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </section>
  );
}

export default Nav;
