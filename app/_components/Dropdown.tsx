"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import fetchLinks from "../lib/getNavigation";
import Link from "next/link";

async function Dropdown() {
  const links = await fetchLinks();
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>Settings</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          {links.data?.header?.headerMenuItems?.map((link) => (
            <Link key={link.ID} href={link.url}>
              <DropdownMenu.Item>{link.title}</DropdownMenu.Item>
            </Link>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}

export default Dropdown;
