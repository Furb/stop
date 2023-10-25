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

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Topbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
