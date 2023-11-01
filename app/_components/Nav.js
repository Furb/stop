"use client";
import Link from "next/link";
import React from "react";
import fetchLinks from "../libs/getNavigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { HiOutlineChevronRight } from "react-icons/hi";

async function Nav() {
  const links = await fetchLinks();
  return (
    <section className='headerNav'>
      <div className='container'>
        <NavigationMenu.Root className='navWrap'>
          <NavigationMenu.List className='mainNav'>
            {links.data?.header?.headerMenuItems?.map((link) => (
              <NavigationMenu.Item key={link.ID}>
                <Link href={link.url} className='scanNav__link'>
                  <NavigationMenu.Trigger>{link.title}</NavigationMenu.Trigger>
                </Link>
                <HiOutlineChevronRight className='arrowIndicator' />
                <NavigationMenu.Content>
                  {link.children.map((child) => (
                    <li key={child.ID} className='subMenu'>
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
