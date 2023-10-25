import Link from "next/link";
import { HiSearch } from "react-icons/hi";
import fetchLinks from "../libs/getNavigation";

async function Topbar() {
  const links = await fetchLinks();
  return (
    <div className='topBar'>
      <div className='container'>
        <nav className='topNav'>
          {links.data?.footer?.footerMenuItems?.map((link) => (
            <Link key={link.ID} href={link.url}>
              {link.title}
            </Link>
          ))}

          <HiSearch className='searchIcon' />
        </nav>
      </div>
    </div>
  );
}

export default Topbar;
