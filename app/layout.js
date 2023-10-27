import Header from "./_components/Header";
import Topbar from "./_components/Topbar";
import Footer from "./_components/Footer";

import "./globals.css";

import "./style.css";

import { roboto } from "./utils/fonts";

export const metadata = {
  title: "Stopsvindel.dk",
  description: "Spot og stop svindel",
};

import NextTopLoader from "nextjs-toploader";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <NextTopLoader
          color='#eb3455'
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          showSpinner={true}
          easing='ease'
        />
        <Topbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
